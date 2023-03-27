import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../componants/NavBar";
import Error from "../utils/Error";
import axios from "../utils/axiosInstance";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirnPasword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("register", { name: userName, email, cell, password })
      .then((response) => {
        if (response?.data?.accessToken && response?.data?.user) {
          localStorage.setItem("data", JSON.stringify(response.data));

          navigate("/home");
        }
      })
      .catch((error) => {
        setError("You have acount with this email");
      });
  };

  useEffect(() => {
    if (password !== confirmPassword && confirmPassword !== "") {
      setError("Password are not match");
    } else if (password === confirmPassword) {
      setError(null);
    }
  }, [confirmPassword, password, setError]);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="w-50 m-auto bg-light p-3 rounded shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                type="text"
                className="form-control mb-3"
                id="username"
                placeholder="Enter username"
              />
            </div>
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
              <label>Mobil:</label>
              <input
                value={cell}
                onChange={(e) => setCell(e.target.value)}
                required
                type="number"
                className="form-control mb-3"
                id="email"
                placeholder="Enter Mobill number"
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
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirnPasword(e.target.value)}
                required
                type="password"
                className="form-control mb-3"
                placeholder="Enter confirm password"
              />
            </div>

            {error && <Error message={error} />}
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
                Register
              </button>
            </div>

            <p>
              If you are an acount please <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
