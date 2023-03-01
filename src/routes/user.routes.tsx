import { Navigate } from "react-router-dom";
import MovieDetails from "../components/Movies/MovieDetails/MovieDetails";
import { Home } from "../pages";

export const userRoutes = [
  { path: "/movies", component: <Home /> },
  { path: "/movie/:id", component: <MovieDetails /> },
  {
    path: "*",
    exact: true,
    component: <Navigate to="/home" replace />,
  },
];
