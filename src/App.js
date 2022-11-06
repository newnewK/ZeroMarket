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
import ZeroSite from "./components/ZeroSite";
import ZeroDetail from "./components/ZeroDetail";
import WriteProduct from "./components/WriteProduct";

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

  let [scrollNon, setScrollNon] = useState(false);
  let handleScrollNon = () => {
    setScrollNon(true);
  };
  let hadndleScroll = () => {
    setScrollNon(false);
  };

  return (
    <div
      className={`App 
      ${theme === false ? "dark-theme" : ""} 
      ${search ? "search-open" : ""}
      ${scrollNon ? "scroll-non" : ""}`}
    >
      <Header
        light={light}
        dark={dark}
        current={current}
        openSearch={openSearch}
        handleScrollNon={handleScrollNon}
        hadndleScroll={hadndleScroll}
      />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find" element={<Find />}>
          <Route path="id" element={<FindUserId />} />
          <Route path="pw" element={<FindUserPw />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/write-product"
          element={
            <WriteProduct
              handleScrollNon={handleScrollNon}
              hadndleScroll={hadndleScroll}
            />
          }
        />
        <Route path="/zeroSite" element={<ZeroSite />} />
        <Route path="/zeroDetail/:id" element={<ZeroDetail />} />
        <Route path="/profile" element={<Mypage />}>
          <Route
            path="sale"
            element={
              <Sale
                handleScrollNon={handleScrollNon}
                hadndleScroll={hadndleScroll}
              />
            }
          />
          <Route
            path="completed"
            element={
              <Completed
                handleScrollNon={handleScrollNon}
                hadndleScroll={hadndleScroll}
              />
            }
          />
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
