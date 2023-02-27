import { useDispatch } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoutes = () => {
  const location = useLocation();
  const isLogged = true;

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ location }} replace />
  );
};

export default React.memo(ProtectedRoutes);
