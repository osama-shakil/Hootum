import { ArrowRight } from "lucide-react";
import React from "react";

const CustomButton = ({ isLoading, text, type, handleClick, className }) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={handleClick}
      className={`flex items-center justify-between  rounded-full py-2 px-3 md:px-4 font-semibold w-[105px] md:w-[29vh] ${
        isLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-black hover:bg-gray-800"
      } text-white ${className}`}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
      ) : (
        <span className="text-[14px] md:text-[16px]">{text}</span>
      )}
      <ArrowRight className="h-[18px] w-[18px] md:h-5 md:w-6 ml-3" />
    </button>
  );
};

export default CustomButton;
