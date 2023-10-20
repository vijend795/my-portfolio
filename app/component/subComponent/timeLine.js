import React from 'react';

const TimelineItem = ({ title, location, description, icon, date, isLeft }) => {
    return (
        <div
       
        className={`relative my-5 px-2 lg:w-1/2 w-full pl-[80px] pr-[25px]
      ${isLeft  ? "left-0 " : "lg:left-1/2 left-0"}`}
      >
      
        <p
          className={`absolute bg-red-300 items-center justify-center flex w-10 py-2 rounded-full text-2xl z-10 top-8 ${
            isLeft
              ? "bg-green-400 left-3 lg:-right-5 lg:bg-blue-300"
              : "lg:-left-5 left-3"
          }`}
        >
          {icon}
        </p>

        <div className="p-5 bg-sky-200 relative rounded-lg text-lg mx-5 ">
        <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{location}</p>
          <p className="text-gray-700">{description}</p>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
    );
  };
  

export default TimelineItem;
