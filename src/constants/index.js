import start from "/img/start.jpeg";
import brix from "/img/brix.png";
import brix_small from "/img/brix_small.jpg";
import start_small from "/img/start_small.jpg";

import coffee_machine from "/img/categories/coffee-machine.png";
import dishes from "/img/categories/dishes.png";
import for_home from "/img/categories/for-home.png";
import washing from "/img/categories/washing.png";
import pro from "/img/categories/pro.png";

import start_pack from "/products/start_pack.png";
import brix_capsules from "/products/brix_capsules.png";

import purity_1 from "/img/purity/purity_1.png";
import purity_2 from "/img/purity/purity_2.png";
import purity_worker from "/img/purity/purity_worker.png";

import private_label_woman from "/img/private_label/private_label_woman.png";

import metro from "/icons/METRO.svg";
import novus_logo from "/icons/Novus_logo.svg";

import swiper_1 from "/img/swiper/swiper_1.png";
import swiper_2 from "/img/swiper/swiper_2.png";
import swiper_3 from "/img/swiper/swiper_3.png";
import swiper_4 from "/img/swiper/swiper_4.png";
import swiper_5 from "/img/swiper/swiper_5.png";

import aquawheel_logo from "/icons/aquawheel_white.svg";

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
    categories: {
      title: "Choose category",
      categoriesList: [
        {
          title: "For dishes",
          img: dishes,
          href: "",
          isLarge: true,
          isBlue: true,
        },
        {
          title: "For washing",
          img: washing,
          href: "",
          isLarge: true,
          isBlue: false,
        },
        {
          title: "For home",
          img: for_home,
          href: "",
          isLarge: false,
          isBlue: false,
        },
        {
          title: "For coffeemaker",
          img: coffee_machine,
          href: "",
          isLarge: false,
          isBlue: false,
        },
        { title: "PRO", img: pro, href: "", isLarge: false, isBlue: true },
      ],
    },
    brands: {
      title: "Our brands",
      products: [
        { title: "START", img: start_pack, href: "" },
        { title: "BRIX", img: brix_capsules, href: "" },
      ],
    },
    innovative_purity: {
      title: "Innovative cleanliness",
      description: [
        "The Aquawheel company was born with the desire to optimize and improve common cleaning processes, making them more accessible, convenient and efficient.",
        "Our mission is to constantly seek and develop innovative approaches to achieve these goals.",
      ],
      img: [purity_1, purity_2, purity_worker],
      keywords:
        "We carefully strike a balance between advanced technology and pricing to offer our customers a flexible choice of solutions to suit their individual needs.",
    },
    private_label: {
      title: "Private lable",
      description: [
        "Aquawheel always strives to expand the horizons of cooperation that it provides to potential customers and partners the possibility of joint projects.",
        "We offer our experience, advanced technologies and resources to develop products that help strengthen your brand and expand the range offered to your customers.",
      ],
      img: private_label_woman,
      keywords:
        "Our goal is to jointly develop innovative solutions, which not only meet current market requirements, but also predict future trends in the field cleaning and cleanliness.",
    },
    marquee: {
      logos: [
        { name: "Metro", img: metro },
        { name: "Novus logo", img: novus_logo },
      ],
    },
    swiper: {
      images: [
        { img: swiper_1, alt: "swiper__img-1" },
        { img: swiper_2, alt: "swiper__img-2" },
        { img: swiper_3, alt: "swiper__img-3" },
        { img: swiper_4, alt: "swiper__img-4" },
        { img: swiper_5, alt: "swiper__img-5" },
      ],
    },
    form: {
      title: "Write us",
      inputs: [
        {
          type: "text",
          placeholder: "Your name",
          required: true,
        },
        {
          type: "text",
          placeholder: "Company name",
          required: true,
        },
        {
          type: "tel",
          placeholder: "Phone number",
          required: true,
        },
        {
          type: "email",
          placeholder: "E-mail",
          required: true,
        },
        {
          type: "text",
          placeholder: "Comment",
          required: false,
        },
      ],
      btn: "CONTACT US",
    },
    footer: {
      logo: aquawheel_logo,
      tel: "+38 067 630 63 68",
      email: "sales@start.eu.com",
      address: "208B Bohdana Khmelnytskoho Ave, Dnipro, Ukraine",
      identification: ["EDRPOU 40863700", "INN 40863700462449000"],
      notes: ["©Aquavil LLC"],
    },
    pageNotFound: {
      title: "PAGE NOT FOUND",
      btn: "BACK TO HOME",
    },
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
    categories: {
      title: "Оберіть категорію",
      categoriesList: [
        {
          title: "Для посуду",
          img: dishes,
          href: "",
          isLarge: true,
          isBlue: true,
        },
        {
          title: "Для прання",
          img: washing,
          href: "",
          isLarge: true,
          isBlue: false,
        },
        {
          title: "Для дому",
          img: for_home,
          href: "",
          isLarge: false,
          isBlue: false,
        },
        {
          title: "Для кавомашин",
          img: coffee_machine,
          href: "",
          isLarge: false,
          isBlue: false,
        },
        { title: "PRO", img: pro, href: "", isLarge: false, isBlue: true },
      ],
    },
    brands: {
      title: "Наші бренди",
      products: [
        { title: "START", img: start_pack, href: "" },
        { title: "BRIX", img: brix_capsules, href: "" },
      ],
    },
    innovative_purity: {
      title: "Іноваційна чистота",
      description: [
        "Компанія Aquawheel виникла із стрімленням оптимізувати і удосконалювати повсюдні процеси уборки, що роблять їх більш доступними, зручними та ефективними.",
        "Наша місія полягає в невпинному пошуку та розробки інноваційних підходів для досягнення цих цілей.",
      ],
      img: [purity_1, purity_2, purity_worker],
      keywords:
        "Ми ретельно дотримуємося балансу між застосуванням передових технологій і формуванням цін, щоб запропонувати нашим клієнтам гнучкий вибір рішень, відповідних їх індивідуальним потребам.",
    },
    private_label: {
      title: "Private lable",
      description: [
        "Компанія Aquawheel завжди прагне до розширення горизонтів співпраці, що надає потенційним клієнтам і партнерам можливість спільних проєктів.",
        "Ми пропонуємо наш досвід, передові технології і ресурси для розробки продуктів, які допоможуть зміцнити ваш бренд і розширити асортимент пропонованих для ваших клієнтів.",
      ],
      img: [private_label_woman],
      keywords:
        "Наша ціль — спільно розробляти інноваційні рішення, які не тільки відповідають поточним вимогам ринку, але й передбачають майбутні тенденції в сфері уборки і чистоти.",
    },
    marquee: {
      logos: [
        { name: "Metro", img: metro },
        { name: "Novus logo", img: novus_logo },
      ],
    },
    swiper: {
      images: [
        { img: swiper_1, alt: "swiper__img-1" },
        { img: swiper_2, alt: "swiper__img-2" },
        { img: swiper_3, alt: "swiper__img-3" },
        { img: swiper_4, alt: "swiper__img-4" },
        { img: swiper_5, alt: "swiper__img-5" },
        { img: swiper_1, alt: "swiper__img-1" },
      ],
    },
    form: {
      title: "Напишіть нам",
      inputs: [
        {
          type: "text",
          placeholder: "Ваше ім'я",
          required: true,
        },
        {
          type: "text",
          placeholder: "Назва компанії",
          required: true,
        },
        {
          type: "tel",
          placeholder: "Номер телефону",
          required: true,
        },
        {
          type: "email",
          placeholder: "E-mail",
          required: true,
        },
        {
          type: "text",
          placeholder: "Коментар",
          required: false,
        },
      ],
      btn: "ЗВ’ЯЗАТИСЯ З НАМИ",
    },
    footer: {
      logo: aquawheel_logo,
      tel: "+38 067 630 63 68",
      email: "sales@start.eu.com",
      address: "208B Bohdana Khmelnytskoho Ave, Dnipro, Ukraine",
      identification: ["EDRPOU 40863700", "INN 40863700462449000"],
      notes: ["©Aquavil LLC"],
    },
    pageNotFound: {
      title: "СТОРІНКА НЕ ЗНАЙДЕНА",
      btn: "ПОВЕРНУТИСЯ НА ГОЛОВНУ",
    },
  },
};

export const pcSlidersImg = [start, brix];
export const mobileSliderImages = [start_small, brix_small];
