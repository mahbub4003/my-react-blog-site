import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";

const SideBare = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

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

  return (
    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
      <div className="side-bar  bg-light h-100 ">
        <Link className="text-decoration-none" to={"/profile"}>
          <h3 className="rounded text-capitalize ">
            {logedinUser && logedinUser[0].name}
          </h3>
        </Link>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="text-decoration-none" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" to={"/profile"}>
              Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" to="/blogs">
              Blogs
            </Link>{" "}
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" to="/about">
              About Us
            </Link>
          </li>
          <li onClick={logOutHandler} className=" btn btn-danger">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBare;
