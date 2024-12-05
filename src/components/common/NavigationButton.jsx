import React from 'react'

const NavigationButton = ({ direction, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`
         rounded-full   w-12 h-12 
        ${
          direction === "prev"
            ? "left-[-60px] bg-white border hover:bg-gray-50 border-black"
            : "right-[-60px] bg-black hover:bg-gray-800 border border-black"
        }
        absolute top-[45%] transform -translate-y-1/2
        flex items-center justify-center shadow-lg
         transition-colors
         z-50
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200
        pointer-events-auto
      `}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <svg
        className={`w-6 h-6  ${
          direction === "prev" ? "ml-[-2px] text-gray-600" : "ml-[2px] text-white"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

export default NavigationButton
