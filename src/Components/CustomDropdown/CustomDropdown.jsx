import React, { useEffect, useRef, useState } from "react";

const CustomDropdown = ({ trigger, children, className, height }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const outsideHandle = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", outsideHandle);
    return () => document.removeEventListener("mousedown", outsideHandle);
  }, [dropdownRef]);
  return (
    <div className="" ref={dropdownRef}>
      {/* trigger */}
      <div onClick={() => setShow(!show)} className="">
        {trigger}
      </div>

      {/* content */}
      <div
        className={`w-auto ${
          show ? `h-${height}` : "h-0"
        } transition-all duration-300 ease-in overflow-hidden absolute ${className}`}
      >
        {/* main  */}
        {children}
      </div>
    </div>
  );
};

export default CustomDropdown;
