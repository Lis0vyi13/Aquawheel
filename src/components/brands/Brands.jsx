import { motion } from "framer-motion";

import { useLanguage } from "../../hooks/useLanguage";

import Brand from "./Brand";

import Title from "../../ui/Title";

import { resources } from "../../constants";

const Brands = () => {
  const language = useLanguage();

  const content = resources[language].brands;

  return (
    <motion.section
      className="brands mt-[85px] sm:mt-[145px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <div className="brands-content md:items-center flex flex-col gap-[75px] flex-wrap md:flex-row lgXl:justify-between">
          <div className="brands-content__title justify-items-start">
            <Title className={"lgXl:flex lgXl:flex-col"}>{content.title}</Title>
          </div>
          <div className="brands-content__brands flex flex-col items-center mdLg:flex-row justify-center w-full lgXl:w-fit gap-11">
            {content.products.map((prod) => (
              <motion.div
                key={prod.title}
                className="brands-content__brand w-full xxs:w-[345px] xs:w-[448px] h-[120px]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Brand {...prod} lang={language} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Brands;
