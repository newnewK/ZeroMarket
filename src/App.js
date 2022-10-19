import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./components/Main";
// import * as React from "react";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  let [theme, setTheme] = useState(true);
  let light = () => {
    setTheme(true);
  };
  let dark = () => {
    setTheme(false);
  };

  return (
    <div className={`App ${theme === false ? "dark-theme" : ""}`}>
      <Header light={light} dark={dark} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<div></div>} />
        <Route path="/product/:id" element={<div></div>} />
        <Route path="*" element={<div>404Page</div>} />
        {/* <Route path="" element={} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
