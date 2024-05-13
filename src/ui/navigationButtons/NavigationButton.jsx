const NavigationButton = ({ reversed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[23px] w-full h-full bg-white rounded-[37px] active:[box-shadow:inset_1px_1px_4px_0_rgba(0,_0,_0,_0.54)] text-main duration-200 hover:[box-shadow:inset_1px_1px_1px_0_white,_0_1px_2px_0_rgba(0,_0,_0,_0.22),_0_0_8px_0_rgba(0,_0,_0,_0.26)] [box-shadow:inset_1px_1px_1px_0_white,_0_1px_2px_0_rgba(0,_0,_0,_0.22)]`}
    >
      <p className={`${reversed ? "scale-x-[-1]" : ""}`}>←</p>
    </button>
  );
};

export default NavigationButton;
