/** @format */

const Heading = ({ title, subTitle }) => {
  return (
    <div className="mx-auto px-10 my-4 text-center">
      <h2 className="text-xl text-black font-semibold">{subTitle}</h2>
      <h3 className="text-3xl text-[#8C9333] font-bold py-2 border-y-2 border-[#8C9333]">
        {title}
      </h3>
    </div>
  );
};

export default Heading;
