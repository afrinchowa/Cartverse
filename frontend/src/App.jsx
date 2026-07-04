import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Nav from "./component/Nav";

import UserContext from "./context/UserContext";

function App() {
  const { userData } = React.useContext(UserContext);
  const location = useLocation();

  return (
    <>
      {userData && <Nav />}

      <Routes>
        <Route
          path="/login"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"} replace />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/signup"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"} replace />
            ) : (
              <Registration />
            )
          }
        />

        <Route
          path="/"
          element={
            userData ? (
              <Home />
            ) : (
              <Navigate
                to="/login"
                state={{ from: location.pathname }}
                replace
              />
            )
          }
        />

        <Route
          path="/collections"
          element={
            userData ? (
              <Collections />
            ) : (
              <Navigate
                to="/login"
                state={{ from: location.pathname }}
                replace
              />
            )
          }
        />

        <Route
          path="/about"
          element={
            userData ? (
              <About />
            ) : (
              <Navigate
                to="/login"
                state={{ from: location.pathname }}
                replace
              />
            )
          }
        />

        <Route
          path="/contact"
          element={
            userData ? (
              <Contact />
            ) : (
              <Navigate
                to="/login"
                state={{ from: location.pathname }}
                replace
              />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;