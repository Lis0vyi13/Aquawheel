const TransparentNavigationButton = ({ reversed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[23px] w-full h-full duration-300 active:[box-shadow:inset_1px_1px_4px_0_rgba(0,_0,_0,_0.54)] rounded-[37px] border-[1.52px] border-[solid] text-[#444893] border-[#444893] [box-shadow:0_4px_6px_0_rgba(0,_0,_0,_0.1)] hover:[box-shadow:0_0_8px_0_rgba(0,_0,_0,_0.42)]`}
    >
      <p className={`${reversed ? "scale-x-[-1]" : ""}`}>←</p>
    </button>
  );
};

export default TransparentNavigationButton;
