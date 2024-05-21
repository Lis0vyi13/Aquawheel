import ContentBlock from "../ui/ContentBlock";

import { useLanguage } from "../hooks/useLanguage";

import { resources } from "../constants";

const InnovativePurity = () => {
  const language = useLanguage();
  const content = resources[language].innovative_purity;
  const [researchImg1, researchImg2, workerImg] = content.img;

  return (
    <section className="innovate-purity mb-10 mt-[85px] md:mt-[155px] lg:mt-[228px]">
      <div className="container">
        <ContentBlock img={workerImg} info={content}>
          <img
            className="absolute w-[130px] xs:w-auto z-[1] top-[-310px] xs:top-[-350px] md:top-[-270px] ml-[-240px] sm:ml-[-450px] lg:ml-0 lg:left-[30px] lg:top-[-300px]"
            src={researchImg1}
            alt="research1"
          />
          <img
            className="absolute w-[160px] xs:w-auto ml-[-120px] xs:ml-0 top-[-250px] md:top-[-200px] sm:ml-[-250px] lg:ml-0 lg:left-[103px] lg:top-[-200px]"
            src={researchImg2}
            alt="research2"
          />
        </ContentBlock>
      </div>
    </section>
  );
};

export default InnovativePurity;
