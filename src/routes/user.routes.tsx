import React from "react";
import { Navigate } from "react-router-dom";

const Movies = React.lazy(() => import("../pages/Movies/Movies"));
const Discover = React.lazy(() => import("../pages/Discover/Discover"));
const MovieDetails = React.lazy(
  () => import("../pages/MovieDetails/MovieDetails")
);
const TvSerieDetails = React.lazy(
  () => import("../pages/TvSerieDetails/TvSerieDetails")
);
const TvSeries = React.lazy(() => import("../pages/TvSeries/TvSeries"));

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
