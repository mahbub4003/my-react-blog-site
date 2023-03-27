import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  const { img, title, des, id } = data || {};
  const sliceFun = (str, from, to) => str.slice(from, to);

  return (
    <div className="card col-sm-12 col-md-4 col-lg-3 pt-2  ms-5 mt-4 shadow-lg">
      <img className="card-img-top" src={img} alt="Card images cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{sliceFun(des, 0, 100)}...</p>

        <Link to={`/description/${id}`} className="btn ">
          Learn more.......
        </Link>
      </div>
    </div>
  );
};

export default Blog;
