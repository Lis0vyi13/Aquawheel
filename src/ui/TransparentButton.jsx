const TransparentButton = ({ children, onClick, href }) => {
  const buttonClasses =
    "font-[800] py-[6px] px-[21px] h-full w-full uppercase text-[20px] text-main border border-main rounded-[42px] duration-300 hover:[box-shadow:0_0_4px_0_rgba(0,_0,_0,_0.36)] active:opacity-[0.55]";

  return href ? (
    <a href={href}>
      <button className={buttonClasses}>{children}</button>
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default TransparentButton;
