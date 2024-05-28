import { motion } from "framer-motion";

import { useLanguage } from "../hooks/useLanguage";

import ContentBlock from "../ui/ContentBlock";

import { resources } from "../constants";

const InnovativePurity = () => {
  const language = useLanguage();
  const content = resources[language].innovative_purity;
  const [researchImg1, researchImg2, workerImg] = content.img;

  return (
    <motion.section
      className="innovate-purity mb-10 mt-[85px] md:mt-[155px] lg:mt-[228px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <ContentBlock img={workerImg} info={content}>
          <motion.img
            className="absolute w-[130px] xs:w-auto z-[1] top-[-310px] xs:top-[-350px] md:top-[-270px] ml-[-240px] sm:ml-[-450px] lg:ml-0 lg:left-[30px] lg:top-[-300px]"
            src={researchImg1}
            alt="research1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.05 }}
          />
          <motion.img
            className="absolute w-[160px] xs:w-auto ml-[-120px] xs:ml-0 top-[-250px] md:top-[-200px] sm:ml-[-250px] lg:ml-0 lg:left-[103px] lg:top-[-200px]"
            src={researchImg2}
            alt="research2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.05 }}
          />
        </ContentBlock>
      </div>
    </motion.section>
  );
};

export default InnovativePurity;
