import { Link } from "react-router-dom";
import "./../../css/Liked.modules.scss";

export default function Liked() {
  return (
    <main className="attention-list-wrap">
      <h2 className="title">관심 상품</h2>
      <section className="al-container">
        <div className="container-inner">
          <div className="attention-content list-content">
            <Link to="/product/:id">
              <div className="product-img">
                <div className="img-inner">
                  <span className="screen-out">관심 상품 이미지</span>
                </div>
              </div>
              <div className="product-info">
                <span className="screen-out">관심 상품 설명</span>
                <p className="tit">가방입니데이~</p>
                <em className="category">패션잡화</em>
                <span className="price">
                  5,000 <em>원</em>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
