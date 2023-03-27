import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import { useEffect, useState } from "react";
import PriveteRoute from "./utils/PriveteRoute";
import PublicRoute from "./utils/PublicRoute";
import Profile from "./pages/Profile";
import AddBlog from "./pages/AddBlog";
import Description from "./pages/Description";

function App() {
  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const userData = JSON.parse(localStorage?.data || null);
    if (userData?.accessToken && userData?.user) {
      setToken(userData?.accessToken);
      setUser(userData?.user);
    } else if (userData === null) {
      setToken(undefined);
      setUser(undefined);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute user={user} token={token}>
              <Login setToken={setToken} setUser={setUser} />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute user={user} token={token}>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PriveteRoute user={user} token={token}>
              <Home setToken={setToken} setUser={setUser} />
            </PriveteRoute>
          }
        />
        <Route
          path="/blogs/*"
          element={
            <PriveteRoute user={user} token={token}>
              <Blogs setToken={setToken} setUser={setUser} />
            </PriveteRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PriveteRoute user={user} token={token}>
              <About setToken={setToken} setUser={setUser} />
            </PriveteRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PriveteRoute user={user} token={token}>
              <Profile setToken={setToken} setUser={setUser} />
            </PriveteRoute>
          }
        />
        <Route
          path="/addblog"
          element={
            <PriveteRoute user={user} token={token}>
              <AddBlog />
            </PriveteRoute>
          }
        />{" "}
        <Route
          path="/description/:id"
          element={
            <PriveteRoute user={user} token={token}>
              <Description />
            </PriveteRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
