/* eslint-disable react/prop-types */
const MaxWidthWrapper = ({ children, className }) => {
  return (
    <div
      className={`h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
