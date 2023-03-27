import React, { useEffect, useState } from "react";
import NavBar from "../componants/NavBar";
import SideBare from "../componants/SideBare";
import axios from "../utils/axiosInstance";

const Profile = ({ setToken, setUser }) => {
  const [allUsersData, setAllUsersData] = useState(null);

  useEffect(() => {
    axios
      .get("users")
      .then((res) => {
        setAllUsersData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const localSorageUser = localStorage.data && JSON.parse(localStorage.data);
  const logedinUser = allUsersData?.filter(
    (u) => u.id === localSorageUser?.user.id
  );
  const user = logedinUser && logedinUser[0];

  useEffect(() => {
    const userData = JSON.parse(localStorage?.data || null);
    if (userData?.accessToken && userData?.user) {
      setToken(userData?.accessToken);
      setUser(userData?.user);
    } else if (userData === null) {
      setToken(undefined);
      setUser(undefined);
    }
  }, [setUser, setToken]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <SideBare />
          <div className="col-sm-8 col-md-10 col-lg-10 col-xl-10 text-center  bg-light p-5 ">
            <h1>Profile Page</h1>
            <div className="text-center mt-5 ">
              <div className="card">
                <label>Name</label>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-danger text-uppercase fs-1">
                    {user?.name}
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-5 ">
              <div className="card">
                <label>Mobile Number</label>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-danger fs-2">
                    {user?.cell}
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-5 ">
              <div className="card">
                <label>Email</label>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-danger fs-2">
                    {user?.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
