/* eslint-disable jsx-a11y/anchor-has-content */
import "./../css/Header.modules.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({
  light,
  dark,
  openSearch,
  current,
  handleScrollNon,
  hadndleScroll,
}) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    let resizeTimer;
    let windowSizer = () => {
      resizeTimer = setTimeout(() => {
        setWindowSize({
          width: document.body.clientWidth,
        });
      }, 300);
    };
    window.addEventListener("resize", windowSizer);
    console.log(windowSize.width);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", windowSizer);
    };
  }, [windowSize]);

  let [mode, setMode] = useState(true);

  // navigate
  let navigate = useNavigate();

  // mypage
  let [mypage, setMypage] = useState(false);

  // mobile modal
  let [mobile, setMobile] = useState(false);
  let [familyM, setFamilyM] = useState(false);

  return (
    <header className={`${current === "/chatting" ? "hiddenHeader" : ""}`}>
      {windowSize.width > 1023 ? (
        <div className="wrap-header">
          <h1 className="logo">
            <Link to="/">
              <span className="screen-out">zero market</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 39.7 9.4"
              >
                <g>
                  <path d="M0.4,1.7V0.2h5.9v1.1L2.2,7.6h4.2v1.5H0V8l4.1-6.3H0.4z" />
                  <path
                    d="M7.2,5.7c0-2.2,1.5-3.5,3.1-3.5c1.8,0,2.8,1.4,2.8,3.2c0,0.3,0,0.6-0.1,0.8H8.9C9,7.3,9.7,7.9,10.7,7.9
		c0.6,0,1-0.2,1.5-0.5l0.6,1.1c-0.7,0.5-1.5,0.7-2.4,0.7C8.6,9.2,7.2,7.9,7.2,5.7z M10.3,3.6C9.6,3.6,9,4.1,8.8,5h2.7
		C11.6,4.1,11.2,3.6,10.3,3.6z"
                  />
                  <path
                    d="M16.1,3.5L16.1,3.5c0.5-0.9,1.2-1.4,2-1.4c0.4,0,0.6,0.1,0.8,0.1l-0.3,1.5c-0.2-0.1-0.4-0.1-0.7-0.1
		c-0.5,0-1.2,0.3-1.5,1.3v4h-1.8V2.4H16L16.1,3.5z"
                  />
                  <path
                    d="M19.4,5.7c0-2.2,1.5-3.5,3.2-3.5s3.2,1.3,3.2,3.5c0,2.2-1.5,3.5-3.2,3.5S19.4,7.9,19.4,5.7z M24,5.7c0-1.3-0.5-2.1-1.4-2.1
		s-1.4,0.8-1.4,2.1c0,1.3,0.5,2.1,1.4,2.1S24,7,24,5.7z"
                  />
                  <path d="M27.1,7.5h1.8v1.7h-1.8V7.5z" />
                  <path
                    d="M34.2,4.3c0.2,0.6,0.4,1.1,0.5,1.7h0.1c0.2-0.6,0.3-1.2,0.5-1.7l1.5-4.1h2v8.9h-1.6V5.4c0-0.8,0.1-2.1,0.2-2.9h0l-0.7,2.1
		l-1.4,3.7h-1l-1.4-3.7l-0.7-2.1h0c0.1,0.8,0.2,2.1,0.2,2.9v3.7h-1.6V0.2h2L34.2,4.3z"
                  />
                </g>
              </svg>
            </Link>
          </h1>
          <nav>
            <ul className="navigation">
              <li>
                <Link to="/">스토어</Link>
              </li>
              <li>
                <Link to="/zeroSite">제로 사이트</Link>
              </li>
              {/* 로그인확인 */}
              <li>
                <Link to="/write-product">내 물건 팔기</Link>
              </li>
            </ul>
          </nav>
          <div className="util">
            <button
              type="button"
              className="search-btn"
              onClick={() => {
                openSearch();
              }}
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="search"
              >
                <g id="search">
                  <path
                    d="M27.4,25.9l-4.2-4.2h-0.1c4.3-5.1,3.7-12.6-1.4-16.9S9.1,1.2,4.8,6.3S1.2,18.9,6.2,23.2c4.5,3.8,11,3.8,15.5,0
		c0,0,0,0,0,0.1l4.2,4.2c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0C27.8,27,27.8,26.4,27.4,25.9C27.4,26,27.4,26,27.4,25.9z M14,24
		C8.5,24,4,19.5,4,14S8.5,4,14,4s10,4.5,10,10S19.5,24,14,24z"
                  />
                </g>
              </svg>
            </button>
            {mode === true ? (
              <button
                type="button"
                onClick={() => {
                  setMode(false);
                  dark();
                }}
              >
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="none" height="256" width="256" />
                  <path
                    d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
                    fill="none"
                    className="stroke-svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="15"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMode(true);
                  light();
                }}
              >
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="none" height="256" width="256" />
                  <circle
                    className="stroke-svg"
                    cx="128"
                    cy="128"
                    fill="none"
                    r="60"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="128"
                    x2="128"
                    y1="36"
                    y2="16"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="62.9"
                    x2="48.8"
                    y1="62.9"
                    y2="48.8"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="36"
                    x2="16"
                    y1="128"
                    y2="128"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="62.9"
                    x2="48.8"
                    y1="193.1"
                    y2="207.2"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="128"
                    x2="128"
                    y1="220"
                    y2="240"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="193.1"
                    x2="207.2"
                    y1="193.1"
                    y2="207.2"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="220"
                    x2="240"
                    y1="128"
                    y2="128"
                  />
                  <line
                    className="stroke-svg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    x1="193.1"
                    x2="207.2"
                    y1="62.9"
                    y2="48.8"
                  />
                </svg>
              </button>
            )}
            <button type="button" className="login-btn">
              <Link to="/login">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="_1">
                    <path
                      d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM12.29,20.29l1.42,1.42,5-5a1,1,0,0,0,0-1.42l-5-5-1.42,1.42L15.59,15H5v2H15.59Z"
                      id="login_account_enter_door"
                    />
                  </g>
                </svg>
              </Link>
            </button>
            <div className="user-wrap">
              <button
                type="button"
                className="user-btn"
                onClick={() => {
                  setMypage(!mypage);
                }}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24.2 21.3"
                >
                  <path
                    className="st0"
                    d="M11.7,10.5c-2.7,0-5-2.2-5-4.9s2.2-5,5-5s5,2.2,5,5S14.4,10.5,11.7,10.5z M11.7,1.9C9.7,1.9,8,3.6,8,5.6
	s1.6,3.6,3.7,3.6s3.6-1.6,3.6-3.6S13.7,1.9,11.7,1.9z"
                  />
                  <path
                    className="st0"
                    d="M3.6,18.6C3.2,18.6,3,18.3,3,18c0-4,2.9-6.4,7.8-6.4h1.7c2.1,0,3.6,0,5.9,1.3c0.3,0.2,0.4,0.6,0.2,0.9
	C18.4,14,18,14.2,17.7,14c-1.9-1.1-3.1-1.1-5.2-1.1h-1.7c-2,0-6.5,0.5-6.5,5.1C4.2,18.3,4,18.6,3.6,18.6z"
                  />
                  <g>
                    <path
                      className="st0"
                      d="M14.3,19.2l-0.7-1.3l-0.5-1h0l0,1.1v2.2h-1v-5H13l1.5,3l1.5-3h0.9v5h-1V18l0-1.1h0l-0.5,1l-0.7,1.3H14.3z"
                    />
                    <path
                      className="st0"
                      d="M19.5,18.4l-1.9-3.3h1.1l1.3,2.3l1.3-2.3h1.1l-1.9,3.3v1.7h-1V18.4z"
                    />
                  </g>
                </svg>
              </button>
              {mypage ? (
                <ul className="mypage-wrap">
                  <li>
                    <Link to="/profile/sale">프로필</Link>
                  </li>
                  <li>
                    <Link to="/chatlist">채팅</Link>
                  </li>
                  <li className="line"></li>
                  <li>
                    <Link to="/profile/sale">판매내역</Link>
                  </li>
                  <li>
                    <Link to="/profile/buy">구매내역</Link>
                  </li>
                  <li>
                    <Link to="/profile/review">거래후기</Link>
                  </li>
                  <li>
                    <Link to="/liked">관심 목록</Link>
                  </li>
                  <li className="line"></li>
                  <li>
                    <Link to="/setting">프로필 설정</Link>
                  </li>
                  <li>
                    <button className="log-out">로그아웃</button>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="wrap-header">
            <h1 className="logo">
              <Link to="/">
                <span className="screen-out">zero market</span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 39.7 9.4"
                >
                  <g>
                    <path d="M0.4,1.7V0.2h5.9v1.1L2.2,7.6h4.2v1.5H0V8l4.1-6.3H0.4z" />
                    <path
                      d="M7.2,5.7c0-2.2,1.5-3.5,3.1-3.5c1.8,0,2.8,1.4,2.8,3.2c0,0.3,0,0.6-0.1,0.8H8.9C9,7.3,9.7,7.9,10.7,7.9
		c0.6,0,1-0.2,1.5-0.5l0.6,1.1c-0.7,0.5-1.5,0.7-2.4,0.7C8.6,9.2,7.2,7.9,7.2,5.7z M10.3,3.6C9.6,3.6,9,4.1,8.8,5h2.7
		C11.6,4.1,11.2,3.6,10.3,3.6z"
                    />
                    <path
                      d="M16.1,3.5L16.1,3.5c0.5-0.9,1.2-1.4,2-1.4c0.4,0,0.6,0.1,0.8,0.1l-0.3,1.5c-0.2-0.1-0.4-0.1-0.7-0.1
		c-0.5,0-1.2,0.3-1.5,1.3v4h-1.8V2.4H16L16.1,3.5z"
                    />
                    <path
                      d="M19.4,5.7c0-2.2,1.5-3.5,3.2-3.5s3.2,1.3,3.2,3.5c0,2.2-1.5,3.5-3.2,3.5S19.4,7.9,19.4,5.7z M24,5.7c0-1.3-0.5-2.1-1.4-2.1
		s-1.4,0.8-1.4,2.1c0,1.3,0.5,2.1,1.4,2.1S24,7,24,5.7z"
                    />
                    <path d="M27.1,7.5h1.8v1.7h-1.8V7.5z" />
                    <path
                      d="M34.2,4.3c0.2,0.6,0.4,1.1,0.5,1.7h0.1c0.2-0.6,0.3-1.2,0.5-1.7l1.5-4.1h2v8.9h-1.6V5.4c0-0.8,0.1-2.1,0.2-2.9h0l-0.7,2.1
		l-1.4,3.7h-1l-1.4-3.7l-0.7-2.1h0c0.1,0.8,0.2,2.1,0.2,2.9v3.7h-1.6V0.2h2L34.2,4.3z"
                    />
                  </g>
                </svg>
              </Link>
            </h1>
            <div className="util">
              <button type="button" className="search-btn">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search"
                >
                  <g id="search">
                    <path
                      d="M27.4,25.9l-4.2-4.2h-0.1c4.3-5.1,3.7-12.6-1.4-16.9S9.1,1.2,4.8,6.3S1.2,18.9,6.2,23.2c4.5,3.8,11,3.8,15.5,0
		c0,0,0,0,0,0.1l4.2,4.2c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0C27.8,27,27.8,26.4,27.4,25.9C27.4,26,27.4,26,27.4,25.9z M14,24
		C8.5,24,4,19.5,4,14S8.5,4,14,4s10,4.5,10,10S19.5,24,14,24z"
                    />
                  </g>
                </svg>
              </button>
              <button
                className="nav-btn"
                type="button"
                onClick={() => {
                  setMobile(true);
                }}
              >
                <span className="screen-out">nav btn</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="2" className="stroke-svg" />
                  <circle cx="12" cy="12" r="2" className="stroke-svg" />
                  <circle cx="19" cy="12" r="2" className="stroke-svg" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      {windowSize.width < 1024 ? (
        <div className={`mobile-gnb  ${mobile ? "side-on" : ""}`}>
          <div className="gnb-top">
            <button
              type="button"
              onClick={() => {
                setMobile(false);
              }}
            >
              <span className="screen-out">닫기</span>
              <svg
                version="1.1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
              </svg>
            </button>
            <button
              type="button"
              className="home-btn"
              onClick={() => {
                setMobile(false);
                navigate("/");
              }}
            >
              <span className="screen-out">zero market</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 39.7 9.4"
              >
                <g>
                  <path d="M0.4,1.7V0.2h5.9v1.1L2.2,7.6h4.2v1.5H0V8l4.1-6.3H0.4z" />
                  <path
                    d="M7.2,5.7c0-2.2,1.5-3.5,3.1-3.5c1.8,0,2.8,1.4,2.8,3.2c0,0.3,0,0.6-0.1,0.8H8.9C9,7.3,9.7,7.9,10.7,7.9
		c0.6,0,1-0.2,1.5-0.5l0.6,1.1c-0.7,0.5-1.5,0.7-2.4,0.7C8.6,9.2,7.2,7.9,7.2,5.7z M10.3,3.6C9.6,3.6,9,4.1,8.8,5h2.7
		C11.6,4.1,11.2,3.6,10.3,3.6z"
                  />
                  <path
                    d="M16.1,3.5L16.1,3.5c0.5-0.9,1.2-1.4,2-1.4c0.4,0,0.6,0.1,0.8,0.1l-0.3,1.5c-0.2-0.1-0.4-0.1-0.7-0.1
		c-0.5,0-1.2,0.3-1.5,1.3v4h-1.8V2.4H16L16.1,3.5z"
                  />
                  <path
                    d="M19.4,5.7c0-2.2,1.5-3.5,3.2-3.5s3.2,1.3,3.2,3.5c0,2.2-1.5,3.5-3.2,3.5S19.4,7.9,19.4,5.7z M24,5.7c0-1.3-0.5-2.1-1.4-2.1
		s-1.4,0.8-1.4,2.1c0,1.3,0.5,2.1,1.4,2.1S24,7,24,5.7z"
                  />
                  <path d="M27.1,7.5h1.8v1.7h-1.8V7.5z" />
                  <path
                    d="M34.2,4.3c0.2,0.6,0.4,1.1,0.5,1.7h0.1c0.2-0.6,0.3-1.2,0.5-1.7l1.5-4.1h2v8.9h-1.6V5.4c0-0.8,0.1-2.1,0.2-2.9h0l-0.7,2.1
		l-1.4,3.7h-1l-1.4-3.7l-0.7-2.1h0c0.1,0.8,0.2,2.1,0.2,2.9v3.7h-1.6V0.2h2L34.2,4.3z"
                  />
                </g>
              </svg>
            </button>
            <button
              type="button"
              className="h"
              onClick={() => {
                setMobile(false);
                openSearch();
              }}
            >
              <span className="screen-out">search</span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="search"
              >
                <g id="search">
                  <path
                    d="M27.4,25.9l-4.2-4.2h-0.1c4.3-5.1,3.7-12.6-1.4-16.9S9.1,1.2,4.8,6.3S1.2,18.9,6.2,23.2c4.5,3.8,11,3.8,15.5,0
		c0,0,0,0,0,0.1l4.2,4.2c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0C27.8,27,27.8,26.4,27.4,25.9C27.4,26,27.4,26,27.4,25.9z M14,24
		C8.5,24,4,19.5,4,14S8.5,4,14,4s10,4.5,10,10S19.5,24,14,24z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="user-container">
            <div className="user-profile-img">
              <span className="screen-out">유저 프로필</span>
              <div
                className="img"
                style={{ backgroundImage: `url(/img/profile.webp)` }}
              ></div>
            </div>
            <div className="user-login">
              <button
                type="button"
                className="login-btn"
                onClick={() => {
                  setMobile(false);
                  navigate("/login");
                }}
              >
                로그인
              </button>
              <p>로그인 후 판매 및 구매에 참여해보세요.</p>
            </div>
            <div className="user-info">
              <button
                type="button"
                onClick={() => {
                  setMobile(false);
                  navigate("/profile/sale");
                }}
              >
                <span className="user-name">XX</span>님
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                </svg>
              </button>
            </div>
          </div>
          <nav>
            <h5>바로가기</h5>
            <ul className="navigation">
              <li>
                <a href="/">
                  스토어
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/zeroSite">
                  제로 블로그
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
              <li>
                {/* 로그인 확인할 것 */}
                <a href="/write-product">
                  내 물건 팔기
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
            </ul>
            <h5>마이페이지</h5>
            {/* 로그인 확인할 것 */}
            <ul className="navigation">
              <li>
                <a href="/profile/sale">
                  판매내역
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/profile/buy">
                  구매내역
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/profile/review">
                  거래후기
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
              <li>
                {/* <button type="button" onClick={() => { navigate("/");  setMobile(false); hadndleScroll()  }}></button> */}
                <a href="/chatlist">
                  채팅
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </a>
              </li>
              <li>
                {/* <button type="button" onClick={() => { navigate("/");  setMobile(false); hadndleScroll()  }}></button> */}
                <Link to="/liked">관심 목록</Link>
              </li>
              {/* 로그인이 되어있을 때 보이기!!! */}
              <li className="log-out-list">
                <button type="button" className="log-out">
                  로그아웃
                </button>
              </li>
            </ul>
          </nav>
          <div className="util">
            <div className="family-site">
              <button
                type="button"
                onClick={() => {
                  setFamilyM((familyM) => !familyM);
                }}
              >
                패밀리 사이트
                <svg
                  className={familyM ? "open" : ""}
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                  <path d="M0-.75h48v48h-48z" fill="none" />
                </svg>
              </button>
              {familyM ? (
                <div className="site-wrap">
                  <a href="/제로줄러" target="_blank">
                    제로줄러
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
                      </g>
                    </svg>
                  </a>
                </div>
              ) : null}
            </div>
            <div className="theme-btn">
              {mode === true ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode(false);
                    dark();
                  }}
                >
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="256" width="256" />
                    <path
                      d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
                      fill="none"
                      className="stroke-svg"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="15"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMode(true);
                    light();
                  }}
                >
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="256" width="256" />
                    <circle
                      className="stroke-svg"
                      cx="128"
                      cy="128"
                      fill="none"
                      r="60"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="128"
                      x2="128"
                      y1="36"
                      y2="16"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="62.9"
                      x2="48.8"
                      y1="62.9"
                      y2="48.8"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="36"
                      x2="16"
                      y1="128"
                      y2="128"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="62.9"
                      x2="48.8"
                      y1="193.1"
                      y2="207.2"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="128"
                      x2="128"
                      y1="220"
                      y2="240"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="193.1"
                      x2="207.2"
                      y1="193.1"
                      y2="207.2"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="220"
                      x2="240"
                      y1="128"
                      y2="128"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="193.1"
                      x2="207.2"
                      y1="62.9"
                      y2="48.8"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
