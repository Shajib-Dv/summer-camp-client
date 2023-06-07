/** @format */

import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";

const Home = () => {
  return (
    <>
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <FeaturedSection />
    </>
  );
};

export default Home;
