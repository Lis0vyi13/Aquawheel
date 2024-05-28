import { motion } from "framer-motion";

import { useLanguage } from "../hooks/useLanguage";

import ContentBlock from "../ui/ContentBlock";

import { resources } from "../constants";

const PrivateLabel = () => {
  const language = useLanguage();
  const content = resources[language].private_label;
  const img = content.img;

  return (
    <motion.section
      className="private-label sm:mt-[173px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <ContentBlock reversed img={img} info={content} />
      </div>
    </motion.section>
  );
};

export default PrivateLabel;
