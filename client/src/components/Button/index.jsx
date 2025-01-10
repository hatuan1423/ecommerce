const Button = ({
  title,
  className,
  iconRight,
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
      type={type || "button"}
      className={`inline-flex items-center text-base ${className} ${
        disable && "cursor-not-allowed opacity-[0.3]"
      }`}
    >
      {title}
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </button>
  );
};

export default Button;
