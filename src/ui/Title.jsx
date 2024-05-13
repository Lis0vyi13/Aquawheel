const Title = ({ children }) => {
  const [firstWord, secondWord] = children.split(" ");
  return (
    <h1 className="flex border-l-main border-l-[2px] pl-3 text-[30px] sm:pl-5 sm:text-[48px]">
      <span className="font-[300]">{firstWord}&nbsp;</span>
      <span className="font-[700]">{secondWord}</span>
    </h1>
  );
};

export default Title;
