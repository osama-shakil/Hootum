import { ArrowRight } from "lucide-react";
import React from "react";

const CustomButton = ({ isLoading, text, type, handleClick, className }) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={handleClick}
      className={`flex items-center justify-between  rounded-full py-2 px-4 font-semibold w-[29vh] ${
        isLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-black hover:bg-gray-800"
      } text-white ${className}`}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
      ) : (
        <span>{text}</span>
      )}
      <ArrowRight className="h-5 w-6 ml-3" />
    </button>
  );
};

export default CustomButton;
