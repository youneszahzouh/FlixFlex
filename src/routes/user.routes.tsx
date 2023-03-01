import { Navigate } from "react-router-dom";
import { Movies } from "../pages";
import Discover from "../pages/Discover/Discover";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import TvSerieDetails from "../pages/TvSerieDetails/TvSerieDetails";
import TvSeries from "../pages/TvSeries/TvSeries";

export const userRoutes = [
  { path: "/movies/:id", component: <MovieDetails /> },
  { path: "/movies", component: <Movies /> },
  { path: "/tvseries/:id", component: <TvSerieDetails /> },
  { path: "/tvseries", component: <TvSeries /> },
  { path: "/discover", component: <Discover /> },
  {
    path: "*",
    exact: true,
    component: <Navigate to="/movies" replace />,
  },
];
