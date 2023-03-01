import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";

export const authRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Signup /> },
];
