import React from "react";
import useCart from "../../../CustomHooks/useCart";
import useAxios from "../../../CustomHooks/useAxios";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);

  const axiosSecure = useAxios();
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/carts/${id}`)
      .then(({ data }) => {
        if (data.deletedCount) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="text-3xl font-semibold flex justify-between items-center mt-20 mb-10">
        <h1>TOTAL PRICE : {totalPrice}</h1>
        <Link to={'/dashboard/payment'}><button className="btn btn-accent text-white">PAY</button></Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
