import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const [alluser, setAlluser] = useState([]);
  useEffect(() => {
    fetch(`https://cookie-byte-server.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => {
        setAlluser(data);
        // console.log(data);
      });
  }, [alluser]);
  return (
    <div>
      <Navbar />
      {/* table */}
      <div className="overflow-x-auto">
        <h2 className="text-4xl  font-semibold">All users</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>username</th>
              <th>date of birth</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((user, i) => (
              <>
                <tr key={i + 1}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.userName}</td>
                  <td>{user.dob}</td>
                  <td>{user.password}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
