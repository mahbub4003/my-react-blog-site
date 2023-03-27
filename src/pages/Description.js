import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axiosInstance";

const Description = () => {
  const { id } = useParams("id");
  const [data, setData] = useState(null);
  const { title, des, img } = data || {};

  useEffect(() => {
    axios.get(`/blogs/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="bg-dark text-light m-5">{title}</h1>
        <img
          style={{ height: 400, width: 800 }}
          className="shadow-lg mx-auto m-4 "
          src={img}
          alt=""
        />
        <p>{des}</p>
        <Link to={"/blogs"}>Back to blogs</Link>
      </div>
    </div>
  );
};

export default Description;
