import Title from "./Title";

const ContentBlock = ({ reversed, info, img, children }) => {
  const { title, description, keywords } = info;
  return (
    <section
      className={`content-block flex flex-col lg:gap-0 text-[16px] xs:text-[20px]`}
    >
      <div
        className={`flex ${reversed ? "flex-row-reverse lg:pl-[112px]" : ""}`}
      >
        <div className="hidden lg:flex lg:flex-[50%]" />
        <div className="flex flex-col flex-[50%]">
          <div className={`title -ml-2 sm:-ml-5`}>
            <Title>{title}</Title>
          </div>
          <div
            className={`flex max-w-[650px] flex-col gap-[30px] sm:gap-10 mt-8`}
          >
            {description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <p className="lg:hidden">{keywords}</p>
          </div>
        </div>
      </div>
      <div
        className={`relative mt-[340px] xs:mt-[415px] sm:mt-[415px] md:mt-[300px] lg:mt-[47px] rounded-[27px] text-white h-[97px] md:h-[217px] w-full flex items-center ${
          reversed
            ? "flex-row-reverse lg:pl-[112px] bg-blueGradient"
            : "bg-reversedBlueGradient"
        }`}
      >
        <div className="relative flex lg:block justify-center lg:justify-normal flex-[50%] w-full h-full">
          <img
            className={`absolute w-[279px] h-[410px] xs:h-[500px] lg:h-[556px] z-[2] xs:w-auto ${
              reversed
                ? "lg:right-[25px] lgXl:right-[86px]"
                : "right-0 xs:right-[unset] lg:left-[115px] lgXl:left-[237px]"
            } bottom-0`}
            src={img}
            alt="worker"
          />
          {children}
        </div>
        <div className="flex-[50%] hidden lg:flex">
          <h3 className="max-w-[505px] leading-7">{keywords}</h3>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
