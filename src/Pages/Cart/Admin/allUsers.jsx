import React from "react";
import useAllUsers from "../../../CustomHooks/useAllUsers";
import useAxios from "../../../CustomHooks/useAxios";

const AllUsers = () => {
  const [users, refetch] = useAllUsers();
  const axiosSecure = useAxios();
  
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/users/${id}`)
      .then(({ data }) => {
        if (data.deletedCount) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRole = (id) => {
axiosSecure.patch(`/users/admin/${id}`)
.then(res => {
                    console.log(res.data);
                    refetch()
                    
})
  }
  return (
    <div>
      <div className="text-4xl text-red-700 font-bold flex justify-evenly items-center mt-20 mb-10">
        <h1>all users</h1>
        <h1>total user : {users.length}</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td onClick={() => handleRole(item._id)}>{item.role ? item.role : 'normal'}</td>
                <td>
                  <button
                  disabled={item.role === 'admin'}
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

export default AllUsers;
