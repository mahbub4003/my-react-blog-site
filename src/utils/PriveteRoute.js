import { Navigate } from "react-router-dom";
import useRoute from "../hooks/useRoute";

export default function PriveteRoute({ children, user, token }) {
  const isLoggedIn = useRoute({ token, user });
  return isLoggedIn ? children : <Navigate to="/" />;
}
