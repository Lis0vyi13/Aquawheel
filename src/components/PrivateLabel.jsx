import { useLanguage } from "../hooks/useLanguage";

import ContentBlock from "../ui/ContentBlock";

import { resources } from "../constants";

const PrivateLabel = () => {
  const language = useLanguage();
  const content = resources[language].private_label;
  const img = content.img;

  return (
    <section className="private-label sm:mt-[173px]">
      <div className="container">
        <ContentBlock reversed img={img} info={content} />
      </div>
    </section>
  );
};

export default PrivateLabel;
