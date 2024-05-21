const Title = ({ className, children }) => {
  const [firstWord, secondWord] = children.split(" ");
  return (
    <h1
      className={`relative leading-11 pl-2 after:absolute after:content-[''] after:w-[1px] after:h-[32px] after:sm:h-[70px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-main text-[27px] xxs:text-[30px] sm:pl-5 sm:text-[48px]`}
    >
      <span className={`inline-block break-all font-[300] ${className}`}>
        {firstWord}&nbsp;
        <span className="font-[700] inline-block">{secondWord}</span>
      </span>
    </h1>
  );
};

export default Title;
