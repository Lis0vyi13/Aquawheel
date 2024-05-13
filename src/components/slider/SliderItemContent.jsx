import Button from "../../ui/button/Button";

import styles from "./slider-item.module.css";

const SliderItemContent = ({ content, mobile }) => {
  const { title, subtitle, btn, i } = content;
  return mobile ? (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="absolute left-[48%] top-[31%] xs:top-[27%] -translate-x-1/2 -translate-y-1/2">
        <div
          className={`text-center w-fit xxs:min-w-[400px] tracking-[0.11em] pl-5`}
        >
          <h1
            className={`${styles.title} slider-item__title min-w-[300px] font-[800] text-[36px]`}
          >
            {title[i]}
          </h1>
          <h2 className="font-[600px] tracking-[0.0001em] text-[11px] xs:text-[14px] text-white">
            {subtitle[i]}
          </h2>
          <div className="absolute left-[51%] top-[60px] xs:top-16 tracking-[0.03em] -translate-x-1/2 h-[30px] w-[176px] text-[12px] xs:h-[50px] xs:w-[240px] xs:text-[16px]">
            <Button href={btn.href[i]}>{btn.title}</Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="absolute">
      <div className="pt-[258px] pl-[75px] inline-block">
        <div
          className={`border-l-[2px] min-w-[700px] tracking-[0.11em] pl-5 ${
            i === 0 ? "border-l-main" : "border-l-white"
          }`}
        >
          <h1
            className={`${styles.title} slider-item__title font-[800] text-[66px]`}
          >
            {title[i]}
          </h1>
          <h2 className="font-[600px] tracking-[0.015em] mt-[-12px] text-[20px] text-white">
            {subtitle[i]}
          </h2>
        </div>
      </div>
      <div className="pl-[90px] pt-[48px] pb-[156px]">
        <div className="relative text-[22px] z-20 h-[55px] w-[323px]">
          <Button href={btn.href[i]}>{btn.title}</Button>
        </div>
      </div>
    </div>
  );
};

export default SliderItemContent;
