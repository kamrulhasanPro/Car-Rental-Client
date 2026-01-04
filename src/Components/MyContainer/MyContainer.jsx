import React from "react";

const MyContainer = ({ className, children, shortWidth = true }) => {
  const width = shortWidth && "max-w-7xl";
  return <div className={`${width} w-11/12 mx-auto ${className}`}>{children}</div>;
};

export default MyContainer;
