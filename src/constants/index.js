import start from "/img/start.jpeg";
import brix from "/img/brix.webp";
import brix_small from "/img/brix_small.webp";
import start_small from "/img/start_small.webp";

import coffee_machine from "/img/categories/coffee-machine.png";
import dishes from "/img/categories/dishes.png";
import for_home from "/img/categories/for-home.png";
import washing from "/img/categories/washing.png";
import pro from "/img/categories/pro.png";

import start_pack from "/img/start_pack.png";
import brix_capsules from "/img/brix_capsules.png";

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

import brix_intro from "/img/intros/brix_intro.avif";
import start_intro from "/img/intros/start_intro.avif";
import coffemachines_intro from "/img/intros/coffemachines_intro.avif";
import dishes_intro from "/img/intros/dishes_intro.avif";
import home_intro from "/img/intros/home_intro.webp";
import pro_intro from "/img/intros/pro_intro.avif";
import washing_intro from "/img/intros/washing_intro.avif";

import Powercaps_baby from "/products/Powercaps_baby.png";
import Powercaps_color from "/products/Powercaps_color.png";
import powercaps_universal_750ml from "/products/powercaps_universal_750ml.png";
import Powercaps_universal from "/products/Powercaps_universal.png";
import start_classic_30 from "/products/start_classic_30.png";
import start_classic_60 from "/products/start_classic_60.png";
import start_classic_100 from "/products/start_classic_100.png";
import start_maximum_28 from "/products/start_maximum_28.png";
import start_maximum_55 from "/products/start_maximum_55.png";
import start_maximum_90 from "/products/start_maximum_90.png";
import start_powder_1kg from "/products/start_powder_1kg.png";
import start_powder_3kg from "/products/start_powder_3kg.png";

export const LANGUAGES = ["ENG", "UA"];

export const resources = {
  ENG: {
    navbar: {
      btn: { title: "Contact Us", href: "" },
    },
    intro: {
      btn: { title: "GO TO CATALOG", href: ["start", "brix"] },
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
          id: "dishes",
          img: dishes,
          href: "dishes",
          isLarge: true,
          isBlue: true,
        },
        {
          title: "For washing",
          id: "washing",
          img: washing,
          href: "washing",
          isLarge: true,
          isBlue: false,
        },
        {
          title: "For home",
          id: "home",
          img: for_home,
          href: "home",
          isLarge: false,
          isBlue: false,
        },
        {
          title: "For coffeemaker",
          id: "coffeemaker",
          img: coffee_machine,
          href: "coffeemachines",
          isLarge: false,
          isBlue: false,
        },
        {
          title: "PRO",
          id: "pro",
          img: pro,
          href: "pro",
          isLarge: false,
          isBlue: true,
        },
      ],
    },
    brands: {
      title: "Our brands",
      products: [
        { title: "START", img: start_pack, href: "start" },
        { title: "BRIX", img: brix_capsules, href: "brix" },
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
      modal: { message: "The form was submitted successfully!" },
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
    washingPage: {
      intro: {
        title: "tableware",
        description: [
          "In the process of developing laundry products, we carefully study and take into account all the key factors that are important to consumers in this category to offer solutions that best meet modern requirements and preferences.",
          "By choosing Aquawheel products, you can be sure of high quality, efficiency and full compliance with your expectations and requirements.",
        ],
        bg: washing_intro,
      },
    },
    dishesPage: {
      intro: {
        title: "dishes",
        description: [
          "In the development of dishwashing detergents used in dishwashers, the Aquawheel team pays close attention to the needs and expectations of users.",
          "Our goal is to create products that ensure not only clean and hygienic dishes, but also give them an exceptional shine, taking care of the durability of the dishwasher itself.",
        ],
        bg: dishes_intro,
      },
    },
    coffemachinesPage: {
      intro: {
        title: "coffemachines",
        description: [
          "Keep your tools and equipment clean and extend their life with cleaning products from Aquawheel.",
          "Our products not only effectively remove any contamination and provide plaque, but also have a gentle effect, keeping your equipment in perfect condition. With Aquawheel, you get a guarantee of excellent results, longevity support and constant performance of your equipment without risking its mechanisms, parts and surfaces.",
        ],
        bg: coffemachines_intro,
      },
    },
    homePage: {
      intro: {
        title: "home",
        description: [
          "Keep your tools and equipment clean and extend their life with cleaning products from Aquawheel.",
          "Our products not only effectively remove any contamination and provide plaque, but also have a gentle effect, keeping your equipment in perfect condition. With Aquawheel, you get a guarantee of excellent results, longevity support and constant performance of your equipment without risking its mechanisms, parts and surfaces.",
        ],
        bg: home_intro,
      },
    },
    proPage: {
      intro: {
        title: "pro",
        description: [
          "In the development of dishwashing detergents used in dishwashers, the Aquawheel team pays close attention to the needs and expectations of users.",
          "Our goal is to create products that ensure not only the cleanliness and hygiene of the dishes, but also give them an exceptional shine, taking care of the durability of the dishwasher itself.",
        ],
        bg: pro_intro,
      },
    },
    startPage: {
      intro: {
        title: "start",
        description: [
          "START has become a symbol for those who highly value quality and reliability. START washing and laundry products, tested by time, guarantee the solution of any household tasks, ensuring efficiency and ease of use.",
          "Only the best components are used here, taking into account consumer tests and practices. Unique combinations of formulas and active ingredients allow you to achieve remarkable results in washing and washing.",
          "Thanks to its hypoallergenic properties, you can rest assured about the health of your family. START takes care of your time and peace of mind, taking care of simple daily chores!",
        ],
        bg: start_intro,
      },
    },
    brixPage: {
      intro: {
        title: "brix",
        description: [
          "Your small but reliable helper in taking care of the house. The Brix brand was created for careful and economical people who value practicality and versatility.",
          "Brix is a brand that eliminates the need to choose between economy and efficiency, it embodies the perfect balance, making everyday tasks of home care easier and more enjoyable.",
        ],
        bg: brix_intro,
      },
    },
    products: [
      {
        name: "Powercaps Universal",
        description: "Washing capsules",
        capsules: 36,
        grams: "230g",
        img: Powercaps_universal,
        categories: ["washing", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Baby",
        description: "Washing capsules",
        capsules: 36,
        grams: "230g",
        img: Powercaps_baby,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Color",
        description: "Washing capsules",
        capsules: 36,
        grams: "230g",
        img: Powercaps_color,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Universal",
        description: "Washing capsules",
        capsules: 12,
        grams: "230g",
        img: Powercaps_universal,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Baby",
        description: "Washing capsules",
        capsules: 12,
        grams: "115g",
        img: Powercaps_baby,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Color",
        description: "Washing capsules",
        capsules: 12,
        grams: "115g",
        img: Powercaps_color,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Start Classic",
        description: "Dishwashing tablets",
        capsules: 100,
        grams: "1.8kg",
        img: start_classic_100,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Classic",
        description: "Dishwashing tablets",
        capsules: 60,
        grams: "1.08kg",
        img: start_classic_60,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Classic",
        description: "Dishwashing tablets",
        capsules: 30,
        grams: "540g",
        img: start_classic_30,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Maximum",
        description: "Dishwashing tablets",
        capsules: 90,
        grams: "115g",
        img: start_maximum_90,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Maximum",
        description: "Dishwashing tablets",
        capsules: 55,
        grams: "115g",
        img: start_maximum_55,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Maximum",
        description: "Dishwashing tablets",
        capsules: 28,
        grams: "115g",
        img: start_maximum_28,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Powder",
        description: "Diswashing powder",
        capsules: null,
        grams: "1kg",
        img: start_powder_1kg,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Powder",
        description: "Diswashing powder",
        capsules: null,
        grams: "3kg",
        img: start_powder_3kg,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Powercaps Universal",
        description: "Washing capsules",
        capsules: 36,
        grams: "230g",
        img: powercaps_universal_750ml,
        categories: ["home"],
        producers: null,
      },
    ],
  },

  UA: {
    navbar: {
      btn: { title: "Зв'язатися з нами", href: "" },
    },
    intro: {
      btn: { title: "ПЕРЕЙТИ В КАТАЛОГ", href: ["start", "brix"] },
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
          id: "dishes",
          img: dishes,
          href: "dishes",
          isLarge: true,
          isBlue: true,
        },
        {
          title: "Для прання",
          id: "washing",
          img: washing,
          href: "washing",
          isLarge: true,
          isBlue: false,
        },
        {
          title: "Для дому",
          id: "home",
          img: for_home,
          href: "home",
          isLarge: false,
          isBlue: false,
        },
        {
          title: "Для кавомашин",
          id: "coffeemaker",
          img: coffee_machine,
          href: "coffemachines",
          isLarge: false,
          isBlue: false,
        },
        {
          title: "PRO",
          id: "pro",
          img: pro,
          href: "pro",
          isLarge: false,
          isBlue: true,
        },
      ],
    },
    brands: {
      title: "Наші бренди",
      products: [
        { title: "START", img: start_pack, href: "start" },
        { title: "BRIX", img: brix_capsules, href: "brix" },
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
      modal: { message: "The form was submitted successfully!" },
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
    washingPage: {
      intro: {
        title: "ПРАННЯ",
        description: [
          "У процесі розробки продуктів для прання ми ретельно вивчаємо та враховуємо всі ключові фактори, важливі для споживачів у даній категорії, щоб запропонувати рішення, що найкраще відповідають сучасним вимогам та уподобанням.",
          "Вибираючи продукцію від компанії Aquawheel, ви можете бути впевнені у високій якості, ефективності та повній відповідності ваших очікувань та вимог.",
        ],
        bg: washing_intro,
      },
    },
    dishesPage: {
      intro: {
        title: "ПОСУДУ",
        description: [
          "У розробці засобів для миття посуду, що використовуються в посудомийних машинах, команда Aquawheel уважно ставиться до потреб та очікувань користувачів.",
          "Наша мета - створювати продукти, що забезпечують не тільки чистоту та гігієну посуду, але й надають їй виняткового блиску, піклуючись про довговічність самої посудомийної машини.",
        ],
        bg: dishes_intro,
      },
    },
    coffemachinesPage: {
      intro: {
        title: "кавомашин",
        description: [
          "Забезпечте своїм інструментам і обладнанню чистоту і продовжуйте термін служби з чистими засобами від Aquawheel.",
          "Наші продукти не тільки ефективно видаляють будь-які забруднення і забезпечують наліт, але і бережний вплив, зберігаючи вашу техніку в ідеальному стані. З Aquawheel ви отримуєте гарантію відмінного результату, підтримку довголіття і постійну працездатність вашого обладнання без ризику для його механізмів, деталей і поверхонь.",
        ],
        bg: coffemachines_intro,
      },
    },
    homePage: {
      intro: {
        title: "Дому",
        description: [
          "Забезпечте своїм інструментам і обладнанню чистоту і продовжуйте термін служби з чистими засобами від Aquawheel.",
          "Наші продукти не тільки ефективно видаляють будь-які забруднення і забезпечують наліт, але і бережний вплив, зберігаючи вашу техніку в ідеальному стані. З Aquawheel ви отримуєте гарантію відмінного результату, підтримку довголіття і постійну працездатність вашого обладнання без ризику для його механізмів, деталей і поверхонь.",
        ],
        bg: home_intro,
      },
    },
    proPage: {
      intro: {
        title: "pro",
        description: [
          "У розробці засобів для миття посуду, що використовуються в посудомийних машинах, команда Aquawheel уважно ставиться до потреб та очікувань користувачів.",
          "Наша мета - створювати продукти, що забезпечують не тільки чистоту та гігієну посуду, але й надають їй виняткового блиску, піклуючись про довговічність самої посудомийної машини.",
        ],
        bg: pro_intro,
      },
    },
    startPage: {
      intro: {
        title: "start",
        description: [
          "START став символом для тих, хто високо цінує якість та надійність. Засоби для миття та прання START, перевірені часом, гарантують вирішення будь-яких побутових завдань, забезпечуючи ефективність та зручність у використанні.",
          "Тут використовуються лише найкращі компоненти з урахуванням споживчих тестів та практик. Унікальні комбінації формул та активних інгредієнтів дозволяють досягати визначних результатів при миття та пранні.",
          "Завдяки гіпоалергенним властивостям ви можете бути спокійні за здоров'я вашої родини. START піклується про ваш час і спокій, приймаючи на себе простий щоденний клопіт!",
        ],
        bg: start_intro,
      },
    },
    brixPage: {
      intro: {
        title: "brix",
        description: [
          "Ваш маленький, але надійний помічник у турботі про будинок. Бренд Brix створений для дбайливих та економних людей, які цінують практичність та універсальність.",
          "Brix - це бренд, який позбавляє необхідності вибирати між економією та ефективністю, він є втіленням ідеального балансу, роблячи повсякденні завдання по догляду за будинком простіше і приємніше.",
        ],
        bg: brix_intro,
      },
    },

    products: [
      {
        name: "Powercaps Universal",
        description: "Капсули для прання",
        capsules: 36,
        grams: "230g",
        img: Powercaps_universal,
        categories: ["washing", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Baby",
        description: "Капсули для прання",
        capsules: 36,
        grams: "230g",
        img: Powercaps_baby,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Color",
        description: "Капсули для прання",
        capsules: 36,
        grams: "230g",
        img: Powercaps_color,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Universal",
        description: "Капсули для прання",
        capsules: 12,
        grams: "230g",
        img: Powercaps_universal,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Baby",
        description: "Капсули для прання",
        capsules: 12,
        grams: "115g",
        img: Powercaps_baby,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Powercaps Color",
        description: "Капсули для прання",
        capsules: 12,
        grams: "115g",
        img: Powercaps_color,
        categories: ["washing", "home", "pro", "coffeemaker"],
        producers: ["brix", "start"],
      },
      {
        name: "Start Classic",
        description: "Таблетки для миття посуду",
        capsules: 100,
        grams: "1.8kg",
        img: start_classic_100,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Classic",
        description: "Таблетки для миття посуду",
        capsules: 60,
        grams: "1.08kg",
        img: start_classic_60,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Classic",
        description: "Таблетки для миття посуду",
        capsules: 30,
        grams: "540g",
        img: start_classic_30,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Maximum",
        description: "Таблетки для миття посуду",
        capsules: 90,
        grams: "115g",
        img: start_maximum_90,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Maximum",
        description: "Таблетки для миття посуду",
        capsules: 55,
        grams: "115g",
        img: start_maximum_55,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Maximum",
        description: "Таблетки для миття посуду",
        capsules: 28,
        grams: "115g",
        img: start_maximum_28,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Powder",
        description: "Порошок для миття посуду",
        capsules: null,
        grams: "1kg",
        img: start_powder_1kg,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Start Powder",
        description: "Порошок для миття посуду",
        capsules: null,
        grams: "3kg",
        img: start_powder_3kg,
        categories: ["dishes"],
        producers: null,
      },
      {
        name: "Powercaps Universal",
        description: "Капсули для прання",
        capsules: 36,
        grams: "230g",
        img: powercaps_universal_750ml,
        categories: ["home"],
        producers: null,
      },
    ],
  },
};

export const pcSlidersImg = [start, brix];
export const mobileSliderImages = [start_small, brix_small];
