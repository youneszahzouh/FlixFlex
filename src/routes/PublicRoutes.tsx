import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useLocation, Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { auth } from "../firebase/firebase";

const PublicRoutes = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loader />;

  return user ? (
    <Navigate to={"/movies"} state={{ location }} replace />
  ) : (
    <Outlet />
  );
};

export default React.memo(PublicRoutes);
