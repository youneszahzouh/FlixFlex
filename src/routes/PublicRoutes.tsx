import React from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const location = useLocation();

  const isLogged = true;

  return !isLogged ? (
    <Navigate to={"/home"} state={{ location }} replace />
  ) : (
    <Outlet />
  );
};

export default React.memo(PublicRoutes);
