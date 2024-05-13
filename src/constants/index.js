import start from "/img/start.jpeg";
import brix from "/img/brix.png";
import brix_small from "/img/brix_small.jpg";
import start_small from "/img/start_small.jpg";

export const LANGUAGES = ["ENG", "UA"];

export const resources = {
  ENG: {
    navbar: {
      btn: { title: "Contact Us", href: "" },
    },
    intro: {
      btn: { title: "GO TO CATALOG", href: ["", ""] },
      title: ["POWERCAPS", "DISH WASH"],
      subtitle: [
        "Careful performance under any conditions",
        "Shine for your dishes for every day",
      ],
    },
    main: {},
  },
  UA: {
    navbar: {
      btn: { title: "Зв'язатися з нами", href: "" },
    },
    intro: {
      btn: { title: "ПЕРЕЙТИ В КАТАЛОГ", href: ["", ""] },
      title: ["POWERCAPS", "DISH WASH"],
      subtitle: [
        "Дбайлива ефективність за будь-яких умов",
        "Блиск для вашого посуду на кожен день",
      ],
    },
    main: {},
  },
};

export const pcSlidersImg = [start, brix];
export const mobileSliderImages = [start_small, brix_small];
