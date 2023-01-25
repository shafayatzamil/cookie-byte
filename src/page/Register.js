import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      name: form.name.value,
      userName: form.username.value,
      email: form.email.value,
      password: form.password.value,
      dob: form.DOB.value,
    };

    console.log(user);

    fetch("https://cookie-byte-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    form.reset();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-2  w-screen h-screen ">
        <div className="bg-[#4267CF] ">
          <div className="flex justify-center items-center my-40 mt-60">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flock_Logo.svg"
              className="w-36"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="flex  justify-center my-auto">
            <div className="w-92 px-12">
              <h2 className="text-3xl font-bold mt-2">Please Register</h2>
              {/* <p className="text-base text-[#666E85]">
              Welcome back! Please enter your credential
            </p> */}

              <div className="card -mt-4 ">
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">User Name</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="UserName"
                        className="input input-bordered"
                      />
                    </div>

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
                        <span className="label-text">D O B</span>
                      </label>
                      <input
                        type="date"
                        name="DOB"
                        placeholder="D O B "
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
                      <Link className="text-orange-600 font-bold" to="/login">
                        login
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

export default Register;
