/** @format */

import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hero Sports | home</title>
      </Helmet>
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <FeaturedSection />
    </>
  );
};

export default Home;
