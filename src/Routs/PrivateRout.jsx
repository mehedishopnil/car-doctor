import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className=" progress w-56 h-2 border rounded-full"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRout;
