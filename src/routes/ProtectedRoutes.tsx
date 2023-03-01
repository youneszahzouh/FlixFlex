import { useLocation, Navigate, Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase";
import Loader from "../components/Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProtectedRoutes = () => {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);

  if (loading) return <Loader />;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ location }} replace />
  );
};

export default React.memo(ProtectedRoutes);
