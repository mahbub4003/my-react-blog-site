import React, { useEffect } from "react";
import NavBar from "../componants/NavBar";
import SideBare from "../componants/SideBare";

const Blogs = ({ setToken, setUser }) => {
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
          <div className="col-sm-8 col-md-10 col-lg-10 col-xl-10 text-center">
            <h1>About Me</h1>
            <div>
              <p>
                My name is<b> Mahbubur Rahman</b> known as<b> Mahbub</b>. I am
                <b>front-end Developer.</b> I develop clint site with
                <b> JavaScript, ReactJS with Redux.</b> I will develop dynamic
                web application according to your needs. If you want can give me
                your project.
                <b>
                  {" "}
                  <i>
                    {" "}
                    I hope you will be satisfied by work. I want please contact
                    with me before giving me your project.You can contact on
                    <span className="text-warning">
                      {" "}
                      WhatsApp = +8801750934003
                    </span>
                  </i>
                </b>
              </p>
            </div>
            <div className="text-center ">
              <p>
                You can contact me with my{" "}
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

export default Blogs;
