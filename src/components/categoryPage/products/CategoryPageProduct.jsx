import capsuleImg from "/icons/capsule.svg";

const CategoryPageProduct = ({ img, name, description, capsules, grams }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={img} alt={name} />
      <h1 className="capitalize font-bold text-dark text-[17px] sm:text-[25px] mt-6">
        {name}
      </h1>
      <h2 className="capitalize font-[300] text-[15px] sm:text-[20px] mt-[6px]">
        {description}
      </h2>
      <div className="flex gap-2 justify-center items-center mt-[6px]">
        {capsules && (
          <div className="capsules relative">
            <img src={capsuleImg} alt="capsule" />
            <p className="text-main absolute left-1/2 bottom-0 -translate-x-1/2 z-[1] text-[14px]">
              {capsules}
            </p>
          </div>
        )}
        <div className="grams text-main relative items-center justify-center">
          <div className="grams-circle border-main mt-2 border-[3px] bg-transparent rounded-[100%] w-[45px] h-[28px]" />
          <p className="absolute text-[13px] left-1/2 -translate-x-1/2 bottom-[3.5px]">
            {grams}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageProduct;
