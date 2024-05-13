import styles from "./button.module.css";

const Button = ({ children, onClick, href }) => {
  const buttonClass = `${styles.button} w-full h-full mt-7 uppercase font-[700] duration-300 border-[#000] inline-block text-main rounded-[49px] [box-shadow:0_1px_2px_0_rgba(0,_0,_0,_0.22),_inset_1px_1px_1px_0_#fff] hover:[box-shadow:0_1px_2px_0_rgba(0,_0,_0,_0.22),_0_0_8px_0_rgba(0,_0,_0,_0.26),_inset_1px_1px_1px_0_#fff] hover:text-mainHover active:[box-shadow:inset_1px_1px_4px_0_rgba(0,_0,_0,_0.54)]`;

  return href ? (
    <a href={href}>
      <button onClick={onClick} className={buttonClass}>
        {children}
      </button>
    </a>
  ) : (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
