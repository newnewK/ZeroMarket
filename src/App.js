import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./components/Main";
import Search from "./common/Search";
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
import Sale from "./components/mypage/Sale";
import Completed from "./components/mypage/Completed";
import Review from "./components/mypage/Review";
import ProfileSetting from "./components/mypage/ProfileSetting";

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

  const [search, setSearch] = useState(false);
  let openSearch = () => {
    setSearch(true);
  };
  let closeSearch = () => {
    setSearch(false);
  };

  return (
    <div
      className={`App ${theme === false ? "dark-theme" : ""} ${
        search ? "search-open" : ""
      }`}
    >
      {current === "/chatting" ? null : (
        <Header light={light} dark={dark} openSearch={openSearch} />
      )}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find" element={<Find />}>
          <Route path="id" element={<FindUserId />} />
          <Route path="pw" element={<FindUserPw />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Mypage />}>
          <Route path="sale" element={<Sale />} />
          <Route path="completed" element={<Completed />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/setting" element={<ProfileSetting />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="*" element={<div>404Page</div>} />
        {/* <Route path="" element={} /> */}
      </Routes>

      {current === "/chatting" ? null : <Footer />}
      <Search closeSearch={closeSearch} search={search} />
    </div>
  );
}

export default App;
