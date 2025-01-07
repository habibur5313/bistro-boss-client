import React, { useState } from "react";
import CoverImage from "../Shared/CoverImage";
import shopCover from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../CustomHooks/useMenu";
import ShopCard from "./ShopCard";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ['offered','dessert','pizza','salad','soup']
  const menus = useMenu();
  const offered = menus.filter((item) => item.category === "offered");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salad = menus.filter((item) => item.category === "salad");
  const soup = menus.filter((item) => item.category === "soup");

  const {category} = useParams()
  
  const [tabIndex, setTabIndex] = useState(categories.indexOf(category));
  return (
    <div>
      <CoverImage image={shopCover} title={"our shop"}></CoverImage>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList >
         <div className={' flex mt-10 items-center justify-center'}>
         <Tab>offered</Tab>
          <Tab>dessert</Tab>
          <Tab>pizza</Tab>
          <Tab>salad</Tab>
          <Tab>soup</Tab>
         </div>
        </TabList>

        <TabPanel>
         <div className="grid md:grid-cols-3 gap-5 mt-10">
         {offered.map(item => <ShopCard key={item._id} item={item}></ShopCard>)}
         </div>
        </TabPanel>
        <TabPanel>
         <div className="grid md:grid-cols-3 gap-5 mt-10">
         {dessert.map(item => <ShopCard key={item._id} item={item}></ShopCard>)}
         </div>
        </TabPanel>
        <TabPanel>
         <div className="grid md:grid-cols-3 gap-5 mt-10">
         {pizza.map(item => <ShopCard key={item._id} item={item}></ShopCard>)}
         </div>
        </TabPanel>
        <TabPanel>
         <div className="grid md:grid-cols-3 gap-5 mt-10">
         {salad.map(item => <ShopCard key={item._id} item={item}></ShopCard>)}
         </div>
        </TabPanel>
        <TabPanel>
         <div className="grid md:grid-cols-3 gap-5 mt-10">
         {soup.map(item => <ShopCard key={item._id} item={item}></ShopCard>)}
         </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
