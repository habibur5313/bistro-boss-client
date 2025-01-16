import React from "react";
import useAxios from "../../CustomHooks/useAxios";
import Swal from "sweetalert2";
import useCart from "../../CustomHooks/useCart";
import useAuth from "../../CustomHooks/useAuth";
import { useNavigate } from "react-router-dom";

const ShopCard = ({ item }) => {
  const { price, category, image, recipe, name, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();
  const handleAddCart = () => {
    const CartId = _id;
    const userEmail = user.email;
    const CartItems = {
      CartId,
      userEmail,
      category,
      image,
      recipe,
      name,
      price,
    };
    axiosSecure.post("/carts", CartItems).then(({ data }) => {
      if (data.insertedId) {
        refetch();
        Swal.fire({
          title: "Good job!",
          text: "Add to cart successfully!",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={item?.name} />
      </figure>
      <div className="card-body flex items-center justify-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={user ? handleAddCart : () => navigate("/login")}
            className="btn border-b-4 border-b-orange-400 text-orange-400 hover:btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
