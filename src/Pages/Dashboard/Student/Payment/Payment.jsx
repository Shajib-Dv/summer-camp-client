/** @format */

import { Elements } from "@stripe/react-stripe-js";
import Heading from "../../../../components/Heading";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Hero Sports | payment</title>
      </Helmet>
      <Heading title={"Use your cart"} subTitle={"Process payment"} />
      <div className="primary-bg rounded-lg my-10 text-black h-full md:w-1/2 w-full mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
