import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    alert("Please login to access this page");
    return <Navigate to="/" />;
   
  }

  return children;
};
