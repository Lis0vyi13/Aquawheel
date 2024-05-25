import Intro from "../components/Intro";
import Categories from "../components/categories/Categories";
import Brands from "../components/brands/Brands";
import InnovativePurity from "../components/InnovativePurity";
import PrivateLabel from "../components/PrivateLabel";
import Marquee from "../components/marquee/Marquee";
import Swiper from "../components/swiper/Swiper";
import SidebarForm from "../components/form/SidebarForm";

const MainPage = () => {
  return (
    <>
      <Intro />
      <Categories />
      <Brands />
      <InnovativePurity />
      <PrivateLabel />
      <div className="mt-[89px] xs:mt-[140px] md:mt-[232px]">
        <Marquee />
      </div>
      <div className="mt-[89px] xs:mt-[140px] md:mt-[210px]">
        <Swiper />
      </div>
      <SidebarForm />
    </>
  );
};

export default MainPage;
