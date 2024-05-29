import { Link } from "react-router-dom";

const TransparentButton = ({ children, onClick, href }) => {
  const buttonClasses =
    "font-[800] py-[6px] px-[21px] h-full w-full uppercase text-[20px] text-main border border-main rounded-[42px] duration-300 hover:[box-shadow:0_0_4px_0_rgba(0,_0,_0,_0.36)] active:opacity-[0.55]";

  return href ? (
    <Link to={href}>
      <button className={buttonClasses}>{children}</button>
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default TransparentButton;
