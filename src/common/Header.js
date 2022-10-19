import "./../css/Header.modules.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({ light, dark }) {
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

  // mobile modal
  let [mobile, setMobile] = useState(false);
  let [familyM, setFamilyM] = useState(false);

  return (
    <header>
      {windowSize.width > 1023 ? (
        <div className="wrap-header">
          <h1 className="logo">
            <Link to="/">
              <span className="screen-out">zero market</span>
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 68.7 16.7">
                <g>
                  <path d="M14.2,4.7H9.1V2.9h7.1v1.7l-5.1,6.8h5.1v1.7H9.1v-1.7L14.2,4.7z" />
                  <path
                    d="M17.2,8.2c0-1.5,1.2-2.7,2.5-2.7h1.7c1.6,0,2.5,1.5,2.5,2.7v1.9h-4.9v0.4c0,0.7,0.5,1,1.1,1h3.5v1.7h-3.9
		c-1.4,0-2.5-1.1-2.5-2.6V8.2z M18.9,8.7H22V8.6c0-0.8-0.4-1.3-1.1-1.3H20C19.4,7.2,18.9,7.9,18.9,8.7L18.9,8.7z"
                  />
                  <path d="M30,5.7h0.2v1.9H30c-1.5,0-3.2,1.3-3.2,2.4v3.2h-1.9V5.4h1.9v1.6C27.4,6.1,28.7,5.7,30,5.7z" />
                  <path
                    d="M34.5,5.5c1.8,0,2.8,1.1,2.8,2.8v2.1c0,1.7-1.1,2.8-2.8,2.8h-0.6c-1.7,0-2.8-1.1-2.8-2.8V8.3c0-1.7,1.1-2.8,2.8-2.8H34.5z
		 M33.9,7.2c-0.6,0-1.1,0.5-1.1,1.1v2c0,0.6,0.5,1.1,1.1,1.1h0.6c0.6,0,1.1-0.5,1.1-1.1v-2c0-0.6-0.5-1.1-1.1-1.1H33.9z"
                  />
                  <path d="M39.8,13.4V2.2h5.9v11.2H39.8z M41.7,11.8h2.2v-8h-2.2V11.8z M47.3,13.5V2.1H49v3.8h1.2v1.6H49v5.9H47.3z" />
                  <path
                    d="M55.5,4.8h1.2V2.1h1.6v6.5h-1.6V6.3h-1.5l-0.4,2.3H53l0.4-2H51V5.1h2.7l0.2-1.2h-3.1V2.2h4.9v1.5L55.5,4.8z M56.4,11.2
		L54,13.5h-2.4l4.1-4H57l4.1,4h-2.4L56.4,11.2z M60.8,9.8h-1.7V2.1h1.7V9.8z"
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
                <Link to="/guide">이용가이드</Link>
              </li>
              <li>
                <Link to="/zero-site">제로 사이트</Link>
              </li>
            </ul>
          </nav>
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
      ) : (
        <div className="wrap-header">
          <h1 className="logo">
            <Link to="/">
              <span className="screen-out">zero market</span>
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 68.7 16.7">
                <g>
                  <path d="M14.2,4.7H9.1V2.9h7.1v1.7l-5.1,6.8h5.1v1.7H9.1v-1.7L14.2,4.7z" />
                  <path
                    d="M17.2,8.2c0-1.5,1.2-2.7,2.5-2.7h1.7c1.6,0,2.5,1.5,2.5,2.7v1.9h-4.9v0.4c0,0.7,0.5,1,1.1,1h3.5v1.7h-3.9
		c-1.4,0-2.5-1.1-2.5-2.6V8.2z M18.9,8.7H22V8.6c0-0.8-0.4-1.3-1.1-1.3H20C19.4,7.2,18.9,7.9,18.9,8.7L18.9,8.7z"
                  />
                  <path d="M30,5.7h0.2v1.9H30c-1.5,0-3.2,1.3-3.2,2.4v3.2h-1.9V5.4h1.9v1.6C27.4,6.1,28.7,5.7,30,5.7z" />
                  <path
                    d="M34.5,5.5c1.8,0,2.8,1.1,2.8,2.8v2.1c0,1.7-1.1,2.8-2.8,2.8h-0.6c-1.7,0-2.8-1.1-2.8-2.8V8.3c0-1.7,1.1-2.8,2.8-2.8H34.5z
		 M33.9,7.2c-0.6,0-1.1,0.5-1.1,1.1v2c0,0.6,0.5,1.1,1.1,1.1h0.6c0.6,0,1.1-0.5,1.1-1.1v-2c0-0.6-0.5-1.1-1.1-1.1H33.9z"
                  />
                  <path d="M39.8,13.4V2.2h5.9v11.2H39.8z M41.7,11.8h2.2v-8h-2.2V11.8z M47.3,13.5V2.1H49v3.8h1.2v1.6H49v5.9H47.3z" />
                  <path
                    d="M55.5,4.8h1.2V2.1h1.6v6.5h-1.6V6.3h-1.5l-0.4,2.3H53l0.4-2H51V5.1h2.7l0.2-1.2h-3.1V2.2h4.9v1.5L55.5,4.8z M56.4,11.2
		L54,13.5h-2.4l4.1-4H57l4.1,4h-2.4L56.4,11.2z M60.8,9.8h-1.7V2.1h1.7V9.8z"
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
      )}
      {windowSize.width < 1024 ? (
        <div className={`mobile-gnb  ${mobile ? "side-on" : ""}`}>
          <div className="inner-gnb">
            <strong className="gnb-logo">
              <Link to="/">
                <span className="screen-out">zero market</span>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 68.7 16.7">
                  <g>
                    <path d="M14.2,4.7H9.1V2.9h7.1v1.7l-5.1,6.8h5.1v1.7H9.1v-1.7L14.2,4.7z" />
                    <path
                      d="M17.2,8.2c0-1.5,1.2-2.7,2.5-2.7h1.7c1.6,0,2.5,1.5,2.5,2.7v1.9h-4.9v0.4c0,0.7,0.5,1,1.1,1h3.5v1.7h-3.9
 c-1.4,0-2.5-1.1-2.5-2.6V8.2z M18.9,8.7H22V8.6c0-0.8-0.4-1.3-1.1-1.3H20C19.4,7.2,18.9,7.9,18.9,8.7L18.9,8.7z"
                    />
                    <path d="M30,5.7h0.2v1.9H30c-1.5,0-3.2,1.3-3.2,2.4v3.2h-1.9V5.4h1.9v1.6C27.4,6.1,28.7,5.7,30,5.7z" />
                    <path
                      d="M34.5,5.5c1.8,0,2.8,1.1,2.8,2.8v2.1c0,1.7-1.1,2.8-2.8,2.8h-0.6c-1.7,0-2.8-1.1-2.8-2.8V8.3c0-1.7,1.1-2.8,2.8-2.8H34.5z
  M33.9,7.2c-0.6,0-1.1,0.5-1.1,1.1v2c0,0.6,0.5,1.1,1.1,1.1h0.6c0.6,0,1.1-0.5,1.1-1.1v-2c0-0.6-0.5-1.1-1.1-1.1H33.9z"
                    />
                    <path d="M39.8,13.4V2.2h5.9v11.2H39.8z M41.7,11.8h2.2v-8h-2.2V11.8z M47.3,13.5V2.1H49v3.8h1.2v1.6H49v5.9H47.3z" />
                    <path
                      d="M55.5,4.8h1.2V2.1h1.6v6.5h-1.6V6.3h-1.5l-0.4,2.3H53l0.4-2H51V5.1h2.7l0.2-1.2h-3.1V2.2h4.9v1.5L55.5,4.8z M56.4,11.2
 L54,13.5h-2.4l4.1-4H57l4.1,4h-2.4L56.4,11.2z M60.8,9.8h-1.7V2.1h1.7V9.8z"
                    />
                  </g>
                </svg>
              </Link>
            </strong>
            <nav>
              <ul className="navigation">
                <li>
                  <Link to="/">스토어</Link>
                </li>
                <li>
                  <Link to="/guide">이용가이드</Link>
                </li>
                <li>
                  <Link to="/zero-site">제로 사이트</Link>
                </li>
              </ul>
            </nav>
            <div className="util">
              <ul className="util-nav">
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li className="family-site">
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
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
                          </g>
                        </svg>
                      </a>
                    </div>
                  ) : null}
                </li>
              </ul>
              <div className="theme-btn">
                {mode === true ? (
                  <button
                    type="button"
                    onClick={() => {
                      setMode(false);
                      dark();
                    }}
                  >
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
            <button
              type="button"
              className="close-btn"
              onClick={() => {
                setMobile(false);
              }}
            >
              <span className="screen-out">닫기</span>
              <svg
                id="Outlined"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Fill">
                  <polygon points="28.71 4.71 27.29 3.29 16 14.59 4.71 3.29 3.29 4.71 14.59 16 3.29 27.29 4.71 28.71 16 17.41 27.29 28.71 28.71 27.29 17.41 16 28.71 4.71" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
