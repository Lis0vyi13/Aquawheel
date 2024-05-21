import styles from "./brand.module.css";

const Brand = ({ title, img, href, lang }) => {
  const background =
    title === "BRIX" ? "bg-orangeGradient" : "bg-darkBlueGradient";

  return (
    <a
      href={href}
      className={`brand relative rounded-[25px] justify-center items-center flex h-full ${styles.brand}`}
    >
      <div
        className={`brand-bg absolute after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0 rounded-[25px] left-0 top-0 w-full h-full ${background} ${styles["brand-bg"]}`}
      />
      <div
        className={`brand-img absolute xs:left-[40px] self-end ${
          title === "BRIX"
            ? "left-[-14px] bottom-[-13px] xs:bottom-0 xs:left-[5px]"
            : "left-0 bottom-[-16px] xs:bottom-0 xs:left-[15px]"
        }`}
      >
        <img className="scale-[0.8] xs:scale-100" src={img} alt={title} />
      </div>
      <div
        className={`brand-info absolute   ${
          title === "BRIX"
            ? "right-[-15px] xs:right-[45px] sm:right-[42px] mdLg:right-[25px]"
            : "right-[-15px] xs:right-[30px] sm:right-[26px] md:right-[25px]"
        } text-[#FDFDFD] uppercase flex flex-col items-center pr-6`}
      >
        <p className="text-[10px] sm:text-[15px]">
          {lang === "ENG" ? "PRODUCT" : "ПРОДУКЦІЯ"}
        </p>
        <h1 className="text-[34px] sm:text-[45px] font-bold">{title}</h1>
      </div>
    </a>
  );
};

export default Brand;
