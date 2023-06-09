/** @format */

const PostCamp = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex hover:border-b-2 border-white hover:text-white rounded-md px-1 transition-all"
      >
        Post Camp
      </button>
    </>
  );
};

export default PostCamp;
