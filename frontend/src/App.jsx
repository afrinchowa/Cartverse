import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import UserContext from "./context/UserContext";
import AuthContext from "./context/AuthContext";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  let { userData } = React.useContext(UserContext);
const App = () => {
  return (
   <>
   { userData && <Nav/>}
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
   </>
       
    
  );
};
}
export default App;
