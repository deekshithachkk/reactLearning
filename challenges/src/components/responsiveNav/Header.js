import About from "../../Pages/About";
import Home from "Pages/Home";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Header() {
  const NoMatch = () => {
    return <p>There's nothing here: 404!</p>;
  };
  return (
    <>
    <div className="nav-container">
      <span className="title">Infinity</span>
      <nav className="header-container">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/">
          Portfolio
        </Link>
        <Link className="link" to="/">
          Services
        </Link>
        <Link className="link" to="/">
          Contact
        </Link>
      </nav>
     
    </div>
    <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
    </Routes>
    </>
  );
}

export default Header;
