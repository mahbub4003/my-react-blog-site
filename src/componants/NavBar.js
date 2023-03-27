import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/blog.png";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row header text-center mt-3 mb-3 bg-light">
        <div className="col flex flex-right text-start col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center">
          <Link to={"/home"}>
            {" "}
            <img
              className="rounded"
              width="100"
              height="100"
              src={logo}
              alt="Blog"
            />
          </Link>
        </div>
        <div className=" mt-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h1>
            My Bl
            <Link className="text-decoration-none" to={"/home"}>
              <span className="text-danger-emphasis ">o</span>
            </Link>
            g Site
          </h1>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-1 ">
          <Link
            to={"/addblog"}
            className="btn btn-primary text-decoration-none mt-4"
          >
            Add +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
