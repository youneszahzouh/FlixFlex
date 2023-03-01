import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components";
import Loader from "./components/Loader/Loader";
import { authRoutes, userRoutes } from "./routes/index.routes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
}

export default React.memo(App);
