import React from "react";
import useMenu from "../../../CustomHooks/useMenu";
import useAxios from "../../../CustomHooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menus,refetch] = useMenu();
  const axiosSecure = useAxios()
  const handleDelete = async(id) => {
const res = await axiosSecure.delete(`/menus/${id}`)
if(res.data.deletedCount){
                    alert('item deleted')
                    refetch()
}

  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>
                  <img className="w-16 rounded-xl" src={item.image} alt="Avatar Tailwind CSS Component" />
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td><Link to={`/dashboard/menus/update/${item._id}`}>update</Link></td>
                <td><button onClick={() => handleDelete(item._id)}>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
