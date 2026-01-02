import React from "react";

const MailIcon = () => {
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        className={"w-24 h-24"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="envGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f57c00" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="carGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Envelope */}
        <rect
          x="35"
          y="80"
          width="130"
          height="85"
          rx="18"
          fill="url(#envGrad)"
        />
        <path
          d="M35 90L100 135L165 90"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small Car */}
        <rect
          x="70"
          y="40"
          width="60"
          height="28"
          rx="10"
          fill="url(#carGrad)"
        />
        <rect
          x="62"
          y="52"
          width="76"
          height="20"
          rx="10"
          fill="url(#carGrad)"
        />
        <circle cx="75" cy="74" r="6" fill="#1f2937" />
        <circle cx="125" cy="74" r="6" fill="#1f2937" />
      </svg>
    </>
  );
};

export default MailIcon;
