const Burger = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative z-[1000] burger ${
        isOpen ? "w-[27px] h-[27px]" : "w-[22px] h-[16px]"
      }`}
    >
      <span
        className={`absolute duration-150 h-[2px] w-full ${
          isOpen
            ? "bg-white left-[-3px] h-[2px] top-1/2 -translate-y-1/2 origin-center w-[125%] rotate-45"
            : "bg-main top-0 h-[1.5px]"
        } `}
      />
      <span
        className={`absolute duration-300 top-1/2 -translate-y-1/2 w-full h-[2px] bg-main ${
          isOpen ? "hidden" : ""
        }`}
      />
      <span
        className={`absolute duration-150 w-full  ${
          isOpen
            ? "bg-white left-[-3px] h-[2px] top-1/2 -translate-y-1/2 origin-center w-[125%] -rotate-45"
            : "bg-main bottom-0  h-[1.5px]"
        }`}
      />
    </div>
  );
};

export default Burger;
