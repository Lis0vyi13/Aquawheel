import { useRef, useState } from "react";

import { useLanguage } from "../../hooks/useLanguage";
import { useActions } from "../../hooks/useActions";

import Button from "../../ui/button/Button";

import { resources } from "../../constants";
import Modal from "../Modal";

const Form = ({ sidebarForm }) => {
  const language = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef();

  const content = resources[language].form;
  const title = content.title;

  const [firstTitleWord, secondTitleWord] = title.split(" ");

  const { toggleForm } = useActions();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    formRef.current.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmitHandler}
      className="form text-white mt-[80px] lg:mt-[148px]"
    >
      <h1 className="uppercase text-[40px] sm:text-[52px] lg:text-[64px]">
        <span className="font-bold break-all">{firstTitleWord}&nbsp;</span>
        <span>{secondTitleWord}</span>
      </h1>
      <div
        className={`${
          sidebarForm ? "grid" : "hidden md:grid"
        } grid-cols-1 sm:grid-cols-2 gap-10 mt-12`}
      >
        {content.inputs.map((input, i) => {
          const isLastOdd =
            i === content.inputs.length - 1 && (i + 1) % 2 !== 0;
          return (
            <input
              className={`bg-transparent placeholder:text-[400] w-full placeholder:text-white outline-none border-b-[1px] border-white ${
                isLastOdd ? "sm:col-span-2" : ""
              }`}
              key={i}
              required={input.required}
              type={input.type}
              placeholder={input.placeholder + (input.required ? "*" : "")}
            />
          );
        })}
      </div>
      <div
        className={`w-full lg:w-[323px] mt-7 h-[40px] sm:h-[55px] text-[17px] xs:text-[19px] sm:text-[22px] ${
          sidebarForm ? "flex justify-center md:justify-normal" : ""
        }`}
      >
        <div
          className={`w-[235px] h-[40px] sm:h-[55px] sm:w-full ${
            sidebarForm ? "block" : "hidden md:block"
          }`}
        >
          <Button type="submit">{content.btn}</Button>
        </div>

        {!sidebarForm && (
          <div className="w-[235px] block md:hidden h-[40px] sm:h-[55px] sm:w-full">
            <Button type="button" onClick={() => toggleForm()}>
              {content.btn}
            </Button>
          </div>
        )}
        {isModalOpen && (
          <Modal {...content.modal} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </form>
  );
};

export default Form;
