/** @format */

import { useState } from "react";

const FeedbackModal = ({ isOpen, isClose, handleSendFeedback }) => {
  const [feedback, setFeedback] = useState("");
  if (!isOpen) {
    return null;
  }

  const handleFeedback = () => {
    handleSendFeedback(feedback);
    isClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="modal-box primary-bg">
        <h3 className="text-xl text-white text-center border-b-2 rounded-md mb-2">
          Write your feedback here
        </h3>
        <textarea
          onChange={(e) => setFeedback(e.target.value)}
          name="feedback"
          className="w-full h-48 input"
          cols="30"
          rows="10"
        ></textarea>
        <div className="modal-action justify-between">
          <button onClick={handleFeedback} className="btn hover:text-white">
            Send
          </button>
          <button onClick={isClose} className="btn hover:text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
