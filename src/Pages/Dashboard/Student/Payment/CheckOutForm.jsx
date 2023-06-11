/** @format */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const { user, paymentInfo } = useAuth();

  let price = parseFloat(paymentInfo?.price).toFixed(2);

  if (!price || isNaN(price)) {
    price = 0;
  }

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleCheckOut = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log(paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const paymentDetail = {
        id: paymentInfo._id,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        classId: paymentInfo?.classId,
        date: new Date(),
      };

      axiosSecure.post("/payment", paymentDetail).then((res) => {
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Congrats ${user?.displayName}, payment successful !`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/student/my-enrolled");
        }
      });

      //reset price
      price = 0;
    }
  };
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleCheckOut}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#000024",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          disabled={!stripe || !clientSecret || processing}
          className="btn border-b-2 border-white rounded-md btn-sm mt-10 disabled:opacity-50"
          type="submit"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 p-2">{cardError}</p>}

      {transactionId && (
        <p className="text-white p-2">
          Your transactionId is : {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
