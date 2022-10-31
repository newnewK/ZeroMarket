import { Link, Outlet, useLocation } from "react-router-dom";
import "./../../css/Find.modules.scss";

export default function Find() {
  const location = useLocation();
  let current = location.pathname;

  const tab = [
    { id: "id", name: "아이디" },
    { id: "pw", name: "비밀번호" },
  ];

  return (
    <section className="find-wrap">
      <div className="find-inner">
        <div className="top-wrap">
          {/* <h2 className="find-title">아이디&#183;비밀번호 찾기</h2> */}
          <ul>
            {tab.map((a, i) => {
              return (
                <li
                  className={`/find/${tab[i].id}` === current ? "active" : ""}
                  key={i}
                >
                  <Link to={`/find/${tab[i].id}`}>{tab[i].name} 찾기</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="find-user-warp">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
}
