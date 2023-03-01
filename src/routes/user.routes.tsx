import { Navigate } from "react-router-dom";
import { Movies } from "../pages";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import TvSerieDetails from "../pages/TvSerieDetails/TvSerieDetails";
import TvSeries from "../pages/TvSeries/TvSeries";

export const userRoutes = [
  { path: "/movies", component: <Movies /> },
  { path: "/movie/:id", component: <MovieDetails /> },
  { path: "/tvseries", component: <TvSeries /> },
  { path: "/tvserie/:id", component: <TvSerieDetails /> },
  {
    path: "*",
    exact: true,
    component: <Navigate to="/movies" replace />,
  },
];
