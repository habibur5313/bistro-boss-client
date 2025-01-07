import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import bannerImg from "../../../assets/home/featured.jpg";

const MenuBanner = () => {
  return (
    <section
      className="opacity-80"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="mt-10 pt-14">
        <SectionTitle
          heading={"from our menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="flex items-center justify-center gap-10 px-20 pb-24 pt-4">
        <div>
          <img src={bannerImg} alt="" />
        </div>

        <div className="text-purple-600 space-y-2">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuBanner;
