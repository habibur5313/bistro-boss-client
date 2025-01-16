import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import useAxiosPublic from "../../../CustomHooks/useAxiosPublic";
import useAxios from "../../../CustomHooks/useAxios";
const hostingKey = "e7a241209e14b4725aa790caeaf830bb"
const uploadApi = `https://api.imgbb.com/1/upload?key=${hostingKey}`
const AddItems = () => {
                    console.log(hostingKey);
                    
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxios()
  const onSubmit = async (data) => {
                    console.log(data);
                    const imageFile = {image: data.image[0]}
                 const res = await axiosPublic.post(uploadApi,imageFile,{
headers: {'content-type' : 'multipart/form-data'}
                 })
                 if(res.data.success){
const itemInfo = {
                   name : data.recipeName,
                   recipe : data.description,
                   image : res.data.data.display_url,
                   category : data.category,
                   price : data.price

}
const resItem = await axiosSecure.post('/menus',itemInfo)
if(resItem.data.insertedId){
                    alert('item added')
}


                 }
                 
  }

  return (
                    <div>
                                        <SectionTitle heading={"add an item"} subHeading="what's new"></SectionTitle>
                    
  <div >
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Recipe Name</span>
        </label>
        <input
        {...register("recipeName")}
          type="text"
          placeholder="Recipe Name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="flex items-center gap-6">
      <div className="from-control flex-1">
      <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select {...register("category")}  className="select select-bordered w-full">
        <option>category</option>
  <option>pizza</option>
  <option>dessert</option>
  <option>offered</option>
  <option>salad</option>
  <option>soup</option>
      </select>
      </div>

      <div className="from-control flex-1">
      <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
        {...register("price")}
          type="number"
          placeholder="Recipe Price"
          className="input input-bordered w-full"
          required
        />
      </div>
      </div>
      <div className="from-control flex-1">
      <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea {...register("description")}  className="textarea textarea-bordered w-full" placeholder="description"></textarea>
        </div>
        <input type="file" {...register("image")}  className="file-input file-input-bordered w-full max-w-xs" />

                   <div>
                   <button className="btn btn-accent text-white">Submit</button>
                   </div>

    </form>
  </div>
    </div>
  );
};

export default AddItems;
