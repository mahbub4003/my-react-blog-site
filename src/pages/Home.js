import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bgVideo from "../assets/social-media-1360.mp4";
import NavBar from "../componants/NavBar";
import SideBare from "../componants/SideBare";

const Home = ({ setToken, setUser }) => {
  const style = { backgroundColor: "rgba(240, 240, 240, .3)" };
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
          <div className="col-sm-8 col-md-10 col-lg-10 col-xl-10 position-relative">
            <div className="w-100 h-100 box-sizing  ">
              <video
                className="w-100 h-100 object-cover"
                autoPlay
                loop
                muted
                src={bgVideo}
              />
            </div>
            <div className="text-center position-absolute top-50 end-50">
              <div
                className=" rounded text-center p-5 shadow-lg  text-danger-emphasis"
                style={style}
              >
                <div>
                  <h3>Read blogs from here</h3>
                  <Link to="/blogs" className="btn btn-primary">
                    Blogs
                  </Link>
                </div>
              </div>
              <p>
                I am Mahbub Alam. My{" "}
                <a href="https://www.facebook.com/profile.php?id=100007823118705">
                  Facebook
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
