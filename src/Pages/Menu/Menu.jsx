import React from "react";
import CoverImage from "../Shared/CoverImage";
import menuCover from "../../assets/menu/banner3.jpg";
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../src/assets/menu/pizza-bg.jpg'
import saladImage from '../../../src/assets/menu/salad-bg.jpg'
import soupImage from '../../../src/assets/menu/soup-bg.jpg'
import SectionTitle from "../Shared/SectionTitle";
import useMenu from "../../CustomHooks/useMenu";
import PopulerCard from "../Home/Menu/PopulerCard";
import { Link } from "react-router-dom";

const Menu = () => {
  const menus = useMenu();
  const offered = menus.filter((item) => item.category === "offered");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salad = menus.filter((item) => item.category === "salad");
  const soup = menus.filter((item) => item.category === "soup");
  
  return (
    <div>
      <CoverImage image={menuCover} title={"our menu"}></CoverImage>
      <SectionTitle
        heading={"todays offer"}
        subHeading={"don't miss"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 mb-10 mt-10">
        {offered.map((item) => (
          <PopulerCard item={item} key={item._id}></PopulerCard>
        ))}
      </div>
      <Link to={'/shop/offered'}><div className="flex mb-10 items-center justify-center mt-5"><button className="btn text-xl font-medium border-b-4 border-b-black">order your favorite food</button></div></Link>
      <CoverImage image={dessertImage} title={"desserts"}></CoverImage>
      <div className="grid md:grid-cols-2 gap-5 mb-10 mt-10">
        {dessert.map((item) => (
          <PopulerCard item={item} key={item._id}></PopulerCard>
        ))}
      </div>
      <Link to={'/shop/dessert'}><div className="flex mb-10 items-center justify-center mt-5"><button className="btn text-xl font-medium border-b-4 border-b-black">order your favorite food</button></div></Link>
      <CoverImage image={pizzaImage} title={"pizza"}></CoverImage>
      <div className="grid md:grid-cols-2 gap-5 mb-10 mt-10">
        {pizza.map((item) => (
          <PopulerCard item={item} key={item._id}></PopulerCard>
        ))}
      </div>
      <Link to={'/shop/pizza'}><div className="flex mb-10 items-center justify-center mt-5"><button className="btn text-xl font-medium border-b-4 border-b-black">order your favorite food</button></div></Link>
      <CoverImage image={saladImage} title={"salad"}></CoverImage>
      <div className="grid md:grid-cols-2 gap-5 mb-10 mt-10">
        {salad.map((item) => (
          <PopulerCard item={item} key={item._id}></PopulerCard>
        ))}
      </div>
      <Link to={'/shop/salad'}><div className="flex items-center mb-10 justify-center mt-5"><button className="btn text-xl font-medium border-b-4 border-b-black">order your favorite food</button></div></Link>
      <CoverImage image={soupImage} title={"soup"}></CoverImage>
      <div className="grid md:grid-cols-2 gap-5 mb-10 mt-10">
        {soup.map((item) => (
          <PopulerCard item={item} key={item._id}></PopulerCard>
        ))}
      </div>
      <Link to={'/shop/soup'}><div className="flex items-center justify-center mt-5"><button className="btn text-xl font-medium border-b-4 border-b-black">order your favorite food</button></div></Link>
    </div>
  );
};

export default Menu;
