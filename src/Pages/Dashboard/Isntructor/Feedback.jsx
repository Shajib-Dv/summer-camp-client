/** @format */

import { Helmet } from "react-helmet-async";
import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import useAuth from "../../../hooks/useAuth";

const Feedback = () => {
  const { feedbackOrId } = useAuth();
  return (
    <>
      <Helmet>
        <title>Hero Sports | feedback</title>
      </Helmet>
      <Heading title={"Feedback"} />
      <EmptyData
        reason={"Feedback from admin"}
        message={feedbackOrId}
        to={"/dashboard/instructor/my-classes"}
        go={"Go back"}
      />
    </>
  );
};

export default Feedback;
