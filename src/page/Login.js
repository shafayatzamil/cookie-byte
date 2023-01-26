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
  const handleGoogleSignIn = () => { };
  return (
    
    <div>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-2 grid-cols-1  w-screen h-screen ">
        <div className="bg-[#4267CF]  ">
          <div className="flex justify-center items-center my-40 mt-60">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flock_Logo.svg"
              className="w-56"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="flex  justify-center items-center my-auto">
            <div className="w-92 px-12">
              <h2 className="text-3xl font-bold mt-12 text-center">Please Login</h2>
              {/* <p className="text-base text-[#666E85]">
              Welcome back! Please enter your credential
            </p> */}

              <div className="card -mt-4 ">
                <form onSubmit={handleSubmit}>
                  <div className="card-body">

                    <div className="form-control w-80">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email"
                        className="input input-bordered px-4"
                      />
                    </div>

                    <div className="form-control w-80">
                      <label className="label">
                        <span className="label-text ">Password</span>
                      </label>
                      <input
                        type="text"
                        name="password"
                        placeholder="******"
                        className="input input-bordered "
                      />
                    </div>

                    <p className="text-center mt-2">
                      New to flocks?
                      <Link className="text-orange-600 font-bold" to="/register">
                        signIn
                      </Link>
                    </p>

                    <div className="form-control mt-3">
                      <button className="btn bg-[#4267CF]">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
