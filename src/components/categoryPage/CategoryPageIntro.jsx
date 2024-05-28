import { useState, useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";

const CategoryPageIntro = ({ content }) => {
  const language = useLanguage();
  const [descriptionLength] = useState(372);
  const [truncatedDescriptions, setTruncatedDescriptions] = useState([]);

  const text = language === "ENG" ? "PRODUCT FOR" : "ПРОДУКЦІЯ ДЛЯ";

  useEffect(() => {
    const truncated = [];
    let remainingLength = descriptionLength;

    for (let i = 0; i < content.description.length; i++) {
      const descr = content.description[i];
      if (remainingLength - descr.length > 0) {
        truncated.push(descr);
        remainingLength -= descr.length;
      } else {
        truncated.push(descr.slice(0, remainingLength) + "...");
        break;
      }
    }
    setTruncatedDescriptions(truncated);
  }, [descriptionLength, content.description]);

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
              {truncatedDescriptions.map((descr, i) => (
                <p
                  key={i}
                  className={`${
                    i > 0 ? "hidden mdLg:block" : "hidden md:block"
                  }`}
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
