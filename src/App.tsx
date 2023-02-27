import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { authRoutes, userRoutes } from "./routes/index.routes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              {userRoutes &&
                userRoutes?.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.component}
                  />
                ))}
            </Route>
          </Route>

          <Route element={<PublicRoutes />}>
            {authRoutes &&
              authRoutes?.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default React.memo(App);
