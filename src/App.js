import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./components/Main";
// import * as React from "react";
import Login from "./components/account/Login";
import { useState } from "react";
import SignUp from "./components/account/SignUp";
import Find from "./components/account/Find";
import FindUserId from "./components/account/FindUserId";
import FindUserPw from "./components/account/FindUserPw";
import Product from "./components/Product";
import ChatList from "./components/mypage/ChatList";
import Chatting from "./components/mypage/Chatting";
import Liked from "./components/mypage/Liked";
import Mypage from "./components/mypage/Mypage";

function App() {
  let [theme, setTheme] = useState(true);
  let light = () => {
    setTheme(true);
  };
  let dark = () => {
    setTheme(false);
  };

  const location = useLocation();
  console.log(location.pathname);
  let current = location.pathname;

  return (
    <div className={`App ${theme === false ? "dark-theme" : ""}`}>
      {current === "/chatting" ? null : <Header light={light} dark={dark} />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find" element={<Find />}>
          <Route path="id" element={<FindUserId />} />
          <Route path="pw" element={<FindUserPw />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route
          path="/chatting"
          element={<Chatting light={light} dark={dark} />}
        />
        <Route path="/liked" element={<Liked />} />
        <Route path="*" element={<div>404Page</div>} />
        {/* <Route path="" element={} /> */}
      </Routes>

      {current === "/chatting" ? null : <Footer />}
    </div>
  );
}

export default App;
