import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";

const AddBlog = () => {
  const [imgLink, setImgLink] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("blogs", {
        img: imgLink,
        title,
        des,
      })
      .then((res) => {
        console.log(res);
        navigate("/blogs");
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div className=" bg-light">
      <div className="container">
        <h1 className="bg-secondary text-center m-5 text-light p-2 rounded">
          Add blog from hear
        </h1>
        <div className="w-50 m-auto bg-light p-3 rounded shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Image link:</label>
              <input
                value={imgLink}
                onChange={(e) => setImgLink(e.target.value)}
                required
                type="url"
                className="form-control mb-3"
                id="username"
                placeholder="Enter link"
              />
            </div>
            <div className="form-group">
              <label>Title:</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                type="text"
                className="form-control mb-3"
                id="email"
                placeholder="Enter title"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                value={des}
                onChange={(e) => setDes(e.target.value)}
                required
                type="text"
                className="form-control mb-3"
                placeholder="Enter description"
              />
            </div>

            {/* {error && <Error message={error} />} */}
            <div className="form-group">
              <div className="input-group-text">
                <input
                  required
                  className="form-check-input mt-0"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <label>
                  {" "}
                  Agree our <Link>Tarms and conditions</Link>
                </label>
              </div>
            </div>
            <div className="m-4 text-center">
              <button type="submit" className="btn btn-primary">
                Add blog
              </button>
            </div>

            <p>
              Back to <Link to="/blogs">Blogs</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
