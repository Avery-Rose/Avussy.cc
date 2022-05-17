import React from "react";

const Notification = (props) => {
  // eslint-disable-next-line react/prop-types
  const { value, className } = props;

  return (
    <div
      className={
        "fixed translate-x-[-50%] text-2xl rounded-3xl p-5 bottom-2 md:bottom-5 lg:bottom-10 left-[50%] flex items-center justify-center duration-300 " +
        className
      }
    >
      <span className="select-none relative z-1 ">{value}</span>
    </div>
  );
};

export default Notification;
