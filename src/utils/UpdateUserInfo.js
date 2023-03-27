import { useEffect } from "react";

export default function UpdateUserInfo({ setToken, setUser }) {
  useEffect(() => {
    const userData = JSON.parse(localStorage?.data || null);
    if (userData?.accessToken && userData?.user) {
      setToken(userData?.accessToken);
      setUser(userData?.user);
    }
  }, [setToken, setUser]);
}
