import { Link } from "react-router-dom";
import "./../css/Main.modules.scss";

export default function Main() {
  return (
    <main className="main-wrap">
      <section className="main-inner">
        <h2 className="title">제로 마켓</h2>
        <ul className="tab-nav">
          <li className="on">전체</li>
          <li>패션&#183;잡화</li>
          <li>테크&#183;가전</li>
          <li>뷰티&#183;헤어</li>
          <li>리빙&#183;베이비</li>
          <li>여행&#183;스포츠</li>
          <li>반려동물</li>
          <li>취미&#183;클래스</li>
        </ul>
        <div className="list-wrap">
          <div className="list">
            <Link to="/product/:id">
              <div className="thumb">
                <div className="thumb-inner">
                  <img src="" alt="타이틀적장" width="100%" />
                </div>
              </div>
              <div className="txt">
                <p className="tit">가방팔아용~~</p>
                <em className="category">패션잡화</em>
                <span className="price">
                  5,000 <em>원</em>
                </span>
              </div>
            </Link>
          </div>
          {/*  */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, i) => {
            return (
              <div className="list" key={i}>
                <Link to="/product/:id">
                  <div className="thumb">
                    <div className="thumb-inner">
                      <img src="" alt="타이틀적장" width="100%" />
                    </div>
                  </div>
                  <div className="txt">
                    <p className="tit">title</p>
                    <em className="category">category</em>
                    <span className="price">price</span>
                  </div>
                </Link>
              </div>
            );
          })}

          {/*  */}
        </div>
      </section>
    </main>
  );
}
