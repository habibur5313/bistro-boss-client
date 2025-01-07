import React from "react";
import useAxios from "../../CustomHooks/useAxios";
import Swal from "sweetalert2";
import useCart from "../../CustomHooks/useCart";

const ShopCard = ({item}) => {
                    const {price,category,image,recipe,name,_id} = item
                    const axiosSecure = useAxios()
                    const [,refetch] = useCart()
     const handleAddCart = () => {
      const CartId = _id;
      const CartItems = {
        CartId,
        category,
        image,
        recipe,
        name,
        price
      }
      axiosSecure.post('/carts',CartItems)
      .then(({data}) => {
        if(data.insertedId){
          refetch()
          Swal.fire({
            title: "Good job!",
            text: "Add to cart successfully!",
            icon: "success"
          });
        }
        
      })
      
      
     }               
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
         className="w-full" src={image}
          alt={item?.name}
        />
      </figure>
      <div className="card-body flex items-center justify-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddCart} className="btn border-b-4 border-b-orange-400 text-orange-400 hover:btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
