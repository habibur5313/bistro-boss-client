import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../CustomHooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

const Regsiter = () => {
  const { SignUpEmailAndPassword, Update_information, SignInGoogle } =
    useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    SignUpEmailAndPassword(data.email, data.password)
      .then((res) => {
        // console.log(res.user)
        Update_information(data.name, data.photoUrl);
        const email = data.email;
        const name = data.name;
        const userInfo = {
          email,
          name,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignInGoogle = () => {
    SignInGoogle().then((res) => {
      const email = res.user?.email;
      const name = res.user?.displayName;
      const userInfo = {
        email,
        name,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };
  return (
    <div className=" bg-base-200 w-full min-h-screen">
      <div className=" flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 mt-10 w-1/2 mx-auto shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURl</span>
              </label>
              <input
                type="url"
                placeholder="photo url"
                className="input input-bordered"
                {...register("photoUrl", { required: true })}
              />
              {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                })}
              />
              {/* {errors.password && <span className="text-red-600">This field is required</span>} */}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">min 6 charcters</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">max 20 charcters</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Minimum eight characters, at least one uppercase letter, one
                  lowercase letter and one number
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <div className="divider text-2xl font-medium">OR</div>
          <button
            onClick={handleSignInGoogle}
            className="btn text-xl font-medium mt-2 mb-4"
          >
            <IoLogoGoogle />
            Continue with Google
          </button>
          <p className="text-center mb-4 text-black">
            {" "}
            Have An Account ?{" "}
            <Link className="text-red-700 text-xl font-medium" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;
