/** @format */

import { Helmet } from "react-helmet-async";
import Heading from "../../../components/Heading";
import EnrolledClasses from "./EnrolledClasses";

const PaymentHistory = () => {
  return (
    <>
      <Helmet>
        <title>Hero Sports | payment history</title>
      </Helmet>
      <Heading title={"Your Payment history"} />
      <EnrolledClasses historyOn={true} />
    </>
  );
};

export default PaymentHistory;
