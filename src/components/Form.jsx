import Button from "../ui/button/Button";

import { useLanguage } from "../hooks/useLanguage";

import { resources } from "../constants";

const Form = () => {
  const language = useLanguage();
  const content = resources[language].form;
  const title = content.title;
  const [firstTitleWord, secondTitleWord] = title.split(" ");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="form text-white mt-[80px] lg:mt-[148px]"
    >
      <h1 className="uppercase text-[40px] sm:text-[52px] lg:text-[64px]">
        <span className="font-bold break-all">
          {firstTitleWord} &nbsp;
          <span className="inline xxs:hidden"> &nbsp; </span>
        </span>
        <span>{secondTitleWord}</span>
      </h1>
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
        {content.inputs.map((input, i) => {
          const isLastOdd =
            i === content.inputs.length - 1 && (i + 1) % 2 !== 0;
          return (
            <input
              className={`bg-transparent placeholder:text-[400] w-[70%] sm:w-full placeholder:text-white outline-none border-b-[1px] border-white ${
                isLastOdd ? "sm:col-span-2" : ""
              }`}
              key={i}
              required={input.required}
              type={input.type}
              placeholder={input.placeholder}
            />
          );
        })}
      </div>
      <div className="w-[234px] sm:w-[275px] lg:w-[323px] mt-7 h-[40px] sm:h-[55px] text-[17px] xs:text-[19px] sm:text-[22px]">
        <Button className={"font-[400]"} type="submit">
          {content.btn}
        </Button>
      </div>
    </form>
  );
};

export default Form;
