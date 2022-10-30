import { Link, Outlet, useLocation } from "react-router-dom";
import "./../../css/Mypage.modules.scss";

export default function Mypage() {
  const location = useLocation();
  console.log(location.pathname);
  let current = location.pathname;

  const mypageTab = [
    { id: "sale", name: "판매중" },
    { id: "completed", name: "거래완료" },
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
              <button className="profile-setting" type="button">
                프로필 편집
              </button>
            </div>

            <p className="intro">자기 소개 ~~~</p>
          </div>
        </div>
        {/* 자신의 마이페이지인 경우만 보일 것! */}
        <button className="mobile-setting" type="button">
          프로필 편집
        </button>
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
