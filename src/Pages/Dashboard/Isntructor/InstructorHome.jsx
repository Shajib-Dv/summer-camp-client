/** @format */

import { Helmet } from "react-helmet-async";
import Heading from "../../../components/Heading";
import MyClasses from "./MyClasses";

const InstructorHome = () => {
  return (
    <>
      <Helmet>
        <title>Hero Sports | instructor home</title>
      </Helmet>
      <Heading title={"All classes you have added"} />
      <MyClasses home={true} />
    </>
  );
};

export default InstructorHome;
