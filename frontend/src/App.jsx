import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import UserContext from "./context/UserContext";
import AuthContext from "./context/AuthContext";

const App = () => {
  return (
    <UserContext>
      <AuthContext>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </AuthContext>
    </UserContext>
  );
};

export default App;
