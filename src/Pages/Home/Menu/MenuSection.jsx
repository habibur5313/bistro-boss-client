import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import useMenu from "../../../CustomHooks/useMenu";
import PopulerCard from "./PopulerCard";

const MenuSection = () => {
  const menus = useMenu()
  const popular = menus.filter(
            (item) => item.category === "popular"
          );
  return (
    <section>
      <div className="mt-10">
        <SectionTitle
          heading={"from our menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-5 ">
        {popular.map((item) => <PopulerCard item={item} key={item._id}></PopulerCard>)}
      </div>
      <div className="flex items-center justify-center mt-5"><button className="btn text-xl font-medium border-b-3 border-b-black">view full menu</button></div>
      <div className="bg-black text-white py-20 mt-20 rounded-xl">
                    <h1 className="text-2xl font-semibold text-center">Call Us: +88 0192345678910</h1>
      </div>
    </section>
  );
};

export default MenuSection;
