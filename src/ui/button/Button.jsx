import { Link } from "react-router-dom";

const Button = ({ children, isBlue, className, type = "", onClick, href }) => {
  const buttonClass = `${
    isBlue
      ? "bg-main hover:bg-mainHover text-white"
      : "bg-buttonGradient hover:text-mainHover"
  } ${className} w-full h-full uppercase font-[700] duration-300 border-[#000] inline-block text-main rounded-[49px] [box-shadow:0_1px_2px_0_rgba(0,_0,_0,_0.22),_inset_1px_1px_1px_0_#fff] hover:[box-shadow:0_1px_2px_0_rgba(0,_0,_0,_0.22),_0_0_8px_0_rgba(0,_0,_0,_0.26),_inset_1px_1px_1px_0_#fff] active:[box-shadow:inset_1px_1px_4px_0_rgba(0,_0,_0,_0.54)]`;

  return href ? (
    <Link to={href}>
      <button onClick={onClick} className={buttonClass}>
        {children}
      </button>
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
