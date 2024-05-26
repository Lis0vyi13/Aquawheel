import { useLanguage } from "../hooks/useLanguage";

const CategoryPageIntro = ({ content }) => {
  const language = useLanguage();

  const text = language === "ENG" ? "PRODUCT FOR" : "ПРОДУКЦІЯ ДЛЯ";
  return (
    <section className="category-page-intro">
      <div className="container">
        <div className="flex relative mt-1">
          <img src={content.bg} alt="category-bg" />
          <div className="category-page-intro__content absolute text-white left-[13px] xxs:left-[19px] sm:left-[46px] mt-[44px] xs:mt-[70px] xsSm:mt-[100px] md:mt-[50px] lgXl:left-[84px] lg:mt-[90px] lgXl:mt-[163px] md:max-w-[320px] mdLg:max-w-[410px] lg:max-w-[450px] lgXl:max-w-[545px] top-0">
            <p className="text-[15px] xxs:text-[19px] xs:text-[25px] xsSm:text-[28px] lg:text-[36px] text-[300] uppercase">
              {text}
            </p>
            <h1 className="font-bold text-[28px] xxs:text-[36px] xs:text-[50px] xsSm:text-[56px] uppercase md:text-[56px] lg:text-[84px]">
              {content.title}
            </h1>
            <div className="description text-[16px] flex flex-col gap-6 mt-4 lg:mt-8">
              {content.description.map((descr, i) => (
                <p
                  className={`${
                    i > 0 ? "hidden mdLg:block" : "hidden md:block"
                  }`}
                  key={i}
                >
                  {descr}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPageIntro;
