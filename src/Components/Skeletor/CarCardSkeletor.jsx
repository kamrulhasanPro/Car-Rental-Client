import React from "react";

const CarCardSkeleton = () => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden animate-pulse flex flex-col max-w-[450px] w-full">
      {/* image skeleton */}
      <div className="h-54 bg-gray-300 relative">
        {/* status badge */}
        <div className="absolute top-2 right-2 h-5 w-16 rounded-full bg-gray-400"></div>
      </div>

      {/* content */}
      <div className="p-4 space-y-3 grow flex flex-col relative">
        {/* category badge */}
        <div className="absolute -top-3 h-5 w-20 rounded-full bg-gray-400"></div>

        {/* title */}
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

        {/* description */}
        <div className="space-y-2 grow">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>

        {/* price + button */}
        <div className="flex justify-between items-center mt-4">
          <div className="space-y-2">
            <div className="h-3 w-16 bg-gray-300 rounded"></div>
            <div className="h-5 w-20 bg-gray-400 rounded"></div>
          </div>

          <div className="h-10 w-28 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;
