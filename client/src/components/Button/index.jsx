const Button = ({
  title,
  className,
  iconRight,
  iconRightStyles,
  iconLeft,
  iconLeftStyles,
  type,
  onClick,
  disable,
  ...rests
}) => {
  return (
    <button
      {...rests}
      disabled={disable}
      onClick={onClick}
      type={type || 'button'}
      className={`inline-flex items-center text-base ${className} ${
        disable && 'cursor-not-allowed opacity-[0.3]'
      }`}
    >
      {iconLeft && <div className={` ${iconLeftStyles}`}>{iconLeft}</div>}
      {title}
      {iconRight && (
        <div className={`ml-2 ${iconRightStyles}`}>{iconRight}</div>
      )}
    </button>
  );
};

export default Button;
