import React, { useEffect, useState } from "react";
import Blog from "../componants/Blog";
import NavBar from "../componants/NavBar";
import SideBare from "../componants/SideBare";
import axios from "../utils/axiosInstance";

const Blogs = ({ setToken, setUser }) => {
  const [blogsData, setBlogsData] = useState({});

  useEffect(() => {
    axios
      .get("blogs")
      .then((res) => {
        setBlogsData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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

          <div className="col-sm-8 col-md-10 col-lg-10 col-xl-10 ">
            <div className="container">
              <h2 className="text-center hr">
                Our Bl<span className="text-danger">O</span>gs
              </h2>
              <div className="row box-sizing">
                {blogsData.length > 0
                  ? blogsData.map((data) => <Blog key={data.id} data={data} />)
                  : "No blog found"}
                <div className="text-center">
                  I am Mahbub Alam. My
                  <a href="https://www.facebook.com/profile.php?id=100007823118705">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
