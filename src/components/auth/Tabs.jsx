import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="grid  grid-cols-2 h-16 border-b border-gray-400 ">
      <button
        onClick={() => setActiveTab("signin")}
        className={`flex items-center  justify-center  py-2.5 text-md font-medium  transition-all ${
          activeTab === "signin"
            ? "bg-black text-white  rounded-tl-3xl"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => setActiveTab("register")}
        className={`flex items-center justify-center  py-2.5 text-md font-medium  transition-all ${
          activeTab === "register"
            ? "bg-black text-white rounded-tr-3xl"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Register
      </button>
    </div>
  );
};

export default Tabs;
