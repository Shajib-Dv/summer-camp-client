/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const Banner = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: banner = [] } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosSecure("/banner");
      return res.data;
    },
  });
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {banner?.map((item) => (
          <SwiperSlide key={item._id} className="relative">
            <img
              src={item.bannerImage}
              alt=""
              className="md:w-full md:h-[600px] h-[400px] object-cover object-center"
            />
            <div className="absolute top-0 w-full h-full">
              <div className="flex flex-col justify-center items-center h-full w-full bg-[rgb(0,0,0,0.4)] text-white space-y-4 px-6">
                <p className="text-3xl font-bold">{item.category}</p>
                <p className="text-xl font-semibold">{item.description}</p>
                <button className="btn hover:primary-bg bg-[#8c93339e]">
                  Register for camp
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
