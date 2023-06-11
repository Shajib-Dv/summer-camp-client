/** @format */

const BecomeInstructor = ({
  isOpen,
  onClose,
  onBecomeInstructor,
  title,
  subTitle,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleInstructor = () => {
    onBecomeInstructor();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="modal-box primary-bg">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{subTitle}</p>
          <div>{children}</div>
          <div className="modal-action justify-between">
            <button onClick={handleInstructor} className="btn hover:text-white">
              Become an Instructor
            </button>
            <button onClick={onClose} className="btn hover:text-white">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
