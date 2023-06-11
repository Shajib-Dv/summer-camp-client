/** @format */

import Heading from "../../../components/Heading";
import EnrolledClasses from "./EnrolledClasses";

const PaymentHistory = () => {
  return (
    <>
      <Heading title={"Your Payment history"} />
      <EnrolledClasses historyOn={true} />
    </>
  );
};

export default PaymentHistory;
