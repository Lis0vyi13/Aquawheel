import Brand from "./Brand";

import Title from "../../ui/Title";

import { useLanguage } from "../../hooks/useLanguage";

import { resources } from "../../constants";

const Brands = () => {
  const language = useLanguage();

  const content = resources[language].brands;

  return (
    <section className="brands mt-[85px] sm:mt-[145px]">
      <div className="container">
        <div className="brands-content md:items-center flex flex-col gap-[75px] flex-wrap md:flex-row lgXl:justify-between">
          <div className="brands-content__title justify-items-start">
            <Title className={"lgXl:flex lgXl:flex-col"}>{content.title}</Title>
          </div>
          <div className="brands-content__brands flex flex-col items-center mdLg:flex-row justify-center w-full lgXl:w-fit gap-11">
            {content.products.map((prod) => (
              <div
                key={prod.title}
                className="brands-content__brand w-full xxs:w-[345px] xs:w-[448px] h-[120px]"
              >
                <Brand {...prod} lang={language} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
