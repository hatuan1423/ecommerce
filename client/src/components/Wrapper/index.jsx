import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full h-full px-[6px] lg:px-76 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
