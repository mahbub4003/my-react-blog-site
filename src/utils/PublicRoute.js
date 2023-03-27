import { Navigate } from "react-router-dom";
import useRoute from "../hooks/useRoute";

export default function PublicRoute({ children, user, token }) {
  const isLoggedIn = useRoute({ token, user });
  return !isLoggedIn ? children : <Navigate to="/home" />;
}
