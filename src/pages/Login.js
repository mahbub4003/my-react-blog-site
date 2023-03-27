import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../componants/NavBar";
import axios from "../utils/axiosInstance";

const Login = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("login", { email, password })
      .then((response) => {
        if (response?.data?.accessToken && response?.data?.user) {
          localStorage.setItem("data", JSON.stringify(response.data));
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage?.data || null);
    if (userData?.accessToken && userData?.user) {
      setToken(userData?.accessToken);
      setUser(userData?.user);
    }
  }, [setUser, setToken]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="w-50 m-auto bg-light p-3 rounded shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="form-control mb-3"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                className="form-control mb-3"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="m-4 text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              If do't register please <Link to="/register">Register now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
