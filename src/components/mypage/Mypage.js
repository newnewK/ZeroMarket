import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./../../css/Mypage.modules.scss";

export default function Mypage() {
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

  const location = useLocation();
  let current = location.pathname;

  const navigate = useNavigate();

  const mypageTab = [
    { id: "sale", name: "판매중" },
    { id: "completed", name: "판매완료" },
    // { id: "completed", name: "구매" },
    { id: "review", name: "거래후기" },
  ];
  return (
    <main className="mypage-wrap">
      <div className="mypage-container">
        <div className="user-info">
          <div className="user-img">
            <div className="img-inner">
              <span className="screen-out">누구의 프로필 이미지</span>
            </div>
          </div>
          <div className="user-name-intro">
            <div className="profile">
              <h5 className="name">닉네임</h5>
              {/* 자신의 마이페이지인 경우만 보일 것! */}
              {windowSize.width > 768 ? (
                <button
                  className="profile-setting"
                  type="button"
                  onClick={() => {
                    navigate("/setting");
                  }}
                >
                  프로필 편집
                </button>
              ) : null}
            </div>

            <p className="intro">자기 소개 ~~~</p>
          </div>
        </div>
        {/* 자신의 마이페이지인 경우만 보일 것! */}
        {windowSize.width < 768 ? (
          <button
            className="mobile-setting"
            type="button"
            onClick={() => {
              navigate("/setting");
            }}
          >
            프로필 편집
          </button>
        ) : null}
      </div>
      <div className="mypage-tab-container">
        <ul className="mypage-tabs">
          {mypageTab.map((a, i) => {
            return (
              <li
                className={
                  `/profile/${mypageTab[i].id}` === current ? "active" : ""
                }
                key={i}
              >
                <Link to={`/profile/${mypageTab[i].id}`}>
                  {mypageTab[i].name}
                </Link>
              </li>
            );
          })}
        </ul>

        <section className="tab-info">
          <Outlet></Outlet>
        </section>
      </div>
    </main>
  );
}
