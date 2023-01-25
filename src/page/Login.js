import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.email.value;

    form.reset();
    console.log(email, password);
  };
  const handleGoogleSignIn = () => {};
  return (
    // <div className="flex w-screen h-screen ">
    //   <div className="bg-[#4267CF] md:hidden  flex-1">
    //     <div className="flex justify-center my-auto mt-60">
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flock_Logo.svg"
    //         className="w-36"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div className="flex-1">
    //     <div className="flex justify-center my-auto mt-32">
    //       <div className="w-92 px-12">
    //         <h2 className="text-3xl font-bold">Welcome back</h2>
    //         <p className="text-base text-[#666E85]">
    //           Welcome back! Please enter your credential
    //         </p>

    //         <div className="card">
    //           <form onSubmit={handleSubmit}>
    //             <div className="card-body">
    //               <div className="form-control w-80">
    //                 <label className="label">
    //                   <span className="label-text">Email</span>
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="email"
    //                   placeholder="Enter your Email"
    //                   className="input input-bordered px-4"
    //                 />
    //               </div>
    //               <div className="form-control w-80">
    //                 <label className="label">
    //                   <span className="label-text ">Password</span>
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="password"
    //                   placeholder="******"
    //                   className="input input-bordered "
    //                 />
    //               </div>
    //               <div className="form-control mt-3">
    //                 <button className="btn bg-[#4267CF]">Submit</button>
    //               </div>

    //               <div className="flex items-center pt-2 space-x-1">
    //                 <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //                 <p className="px-3 text-sm dark:text-gray-400">
    //                   Login with social accounts
    //                 </p>
    //                 <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //               </div>
    //               <div className="flex justify-center space-x-4">
    //                 <button
    //                   onClick={handleGoogleSignIn}
    //                   aria-label="Log in with Google"
    //                   className="p-3 rounded-sm"
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     viewBox="0 0 32 32"
    //                     className="w-5 h-5 fill-current"
    //                   >
    //                     <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
    //                   </svg>
    //                 </button>
    //                 <button
    //                   aria-label="Log in with Facebook"
    //                   className="p-3 rounded-sm"
    //                   //   onClick={handleFacebookSignIn}
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     x="0px"
    //                     y="0px"
    //                     width="26"
    //                     height="26"
    //                     viewBox="0 0 26 26"
    //                   >
    //                     <path d="M13,0C5.82,0,0,5.82,0,13c0,6.518,4.801,11.899,11.057,12.839v-9.394H7.84v-3.417h3.217v-2.274 c0-3.765,1.834-5.417,4.963-5.417c1.498,0,2.291,0.111,2.666,0.162v2.983h-2.134c-1.328,0-1.792,1.259-1.792,2.679v1.868h3.893 l-0.528,3.417H14.76v9.422C21.105,25.006,26,19.581,26,13C26,5.82,20.18,0,13,0z"></path>
    //                   </svg>
    //                 </button>
    //                 <button
    //                   //   onClick={handleGithubSignIn}
    //                   aria-label="Log in with GitHub"
    //                   className="p-3 rounded-sm"
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     viewBox="0 0 32 32"
    //                     className="w-5 h-5 fill-current"
    //                   >
    //                     <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
    //                   </svg>
    //                 </button>
    //               </div>
    //               <p className="text-center ">
    //                 New to flocks?
    //                 <Link className="text-orange-600 font-bold" to="/register">
    //                   Sign Up
    //                 </Link>
    //               </p>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen  -mt-12 ">
        <div className="hero-content w-full flex-col  lg:flex-row">
          <div className=" w-1/2 bg-[#4267CF] py-56 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flock_Logo.svg"
              className="w-36 mx-auto"
              alt=""
            />
          </div>
          <div className="card  flex-shrink-0 w-1/2 max-w-sm ">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-center">please login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  password="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
