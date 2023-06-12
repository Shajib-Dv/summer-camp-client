/** @format */

import Heading from "../../../components/Heading";
import MyClasses from "./MyClasses";

const InstructorHome = () => {
  return (
    <>
      <Heading title={"All classes you have added"} />
      <MyClasses home={true} />
    </>
  );
};

export default InstructorHome;
