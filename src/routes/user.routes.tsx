import { Navigate } from "react-router-dom";
import { Home } from "../pages";

export const userRoutes = [
  { path: "/home", component: <Home /> },
  {
    path: "*",
    exact: true,
    component: <Navigate to="/home" replace />,
  },
];
