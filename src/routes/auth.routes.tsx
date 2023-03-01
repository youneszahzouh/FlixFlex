import React from "react";

const Login = React.lazy(() => import("../pages/Auth/Login/Login"));

const Signup = React.lazy(() => import("../pages/Auth/Signup/Signup"));

export const authRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Signup /> },
];
