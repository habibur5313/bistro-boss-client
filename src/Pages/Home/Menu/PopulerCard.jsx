import React from "react";

const PopulerCard = ({ item }) => {
  return (
    <div className="flex  gap-5 ">
      <img
        className="w-[100px]"
        style={{ borderRadius: "0px 100px 100px 100px" }}
        src={item.image}
        alt=""
      />
      <div>
        <h3 className="text-2xl font-medium">{item.name}-------</h3>
        <p>{item.recipe}</p>
      </div>
<p className="text-yellow-500">${item.price}</p>
    </div>
  );
};

export default PopulerCard;
