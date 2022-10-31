import { Link } from "react-router-dom";
import "./../css/Zero.modules.scss";

export default function ZeroSite() {
  return (
    <main className="zero-wrap">
      <section className="zero-inner">
        <h2 className="title">제로 사이트</h2>

        <div className="list-wrapper">
          <div className="list">
            <Link to="/zeroDetail/:id">
              <div className="card-head">
                <span className="screen-out">썸네일</span>
                <span
                  className="img"
                  style={{
                    backgroundImage:
                      "url(https://blog.wadiz.kr/wp-content/uploads/2022/10/특성이미지-3-1.jpg)",
                  }}
                ></span>
              </div>
              <div className="card-body">
                <span className="label">소개</span>
                <h2 className="tit">타이틀</h2>
                <p className="content">이거 짧게 설명 적는 부분..??</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
