import React from 'react';
import useCart from '../../../CustomHooks/useCart';
import useAxios from '../../../CustomHooks/useAxios';

const MyCart = () => {

const [cart,refetch] = useCart()
const axiosSecure = useAxios()
const handleDelete = (id) => {
axiosSecure.delete(`/carts/${id}`)
.then(({data}) => {
                    if(data.deletedCount){
                                        refetch()
                    }
                    
                    
})
.catch(err => {
                    console.log(err.message);
                    
})
}
                    return (
                                        <div>
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
      {cart.map((item,idx) => <tr key={item._id}>
        <th>{idx + 1}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td ><button onClick={() => handleDelete(item._id)} className='text-red-700'>Delete</button></td>
      </tr>)}
     
    </tbody>
  </table>
</div>                    
                                        </div>
                    );
};

export default MyCart;