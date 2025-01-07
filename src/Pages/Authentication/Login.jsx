import React, { useEffect, Component, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../CustomHooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";


const Login = () => {
                    const [disabled, setDisabled] = useState(true);
                    const navigate = useNavigate()
                    const axiosPublic = useAxiosPublic()
                    useEffect(() => {
                                        loadCaptchaEnginge(6); 
                    },[])
                    const {SignInGoogle, SignInEmailAndPassword} = useAuth()
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
SignInEmailAndPassword(email,password)
.then(res => {
                    console.log(res.user);
                    navigate('/')
                    
})
.catch(err  => {
                    console.log(err.message);
                    
})
    
  };

  const handleValidateCaptcha = e => {
                    const user_captcha_value = e.target.value;
                    if(validateCaptcha(user_captcha_value)){
                                        setDisabled(false)
                    }
                    else{
                                        setDisabled(true)
                    }
  }

  const handleSignInGoogle = () => {
    SignInGoogle()
    .then(res => {
      const email = res.user?.email
      const name = res.user?.displayName
      const userInfo = {
        email,
        name
      }
      axiosPublic.post('/users',userInfo)
      .then(res => {
        console.log(res.data);
        
      })
      navigate('/')

      
    })
  }
  return (
    <div className=" bg-base-200 min-h-screen">
      <div className=" flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
        </div>
        <div className="card w-1/2 mx-auto bg-base-100 mt-10 shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
            <LoadCanvasTemplate />
            <input onBlur={handleValidateCaptcha} placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input>
            </div>
            <div className="form-control mt-6">
                    {/* disabled={disabled} */}
              <button  className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider text-2xl font-medium">OR</div>
        <button
          onClick={handleSignInGoogle}
          className="btn text-xl font-medium mt-2 mb-4"
        >
          <IoLogoGoogle />Continue with Google
        </button>
        <p className="text-center mb-4 text-black" >
          {" "}
          Have An Account ?{" "}
          <Link className="text-red-700 text-xl font-medium" to={"/register"}>
            Sign UP
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
