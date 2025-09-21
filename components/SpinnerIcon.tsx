
import React from 'react';

const SpinnerIcon: React.FC = () => {
  return (
    <svg 
      className="w-16 h-16 text-indigo-400" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="50" 
        cy="50" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="10" 
        r="35" 
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          repeatCount="indefinite" 
          dur="1s" 
          values="0 50 50;360 50 50" 
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default SpinnerIcon;
