import { Link } from "react-router-dom";

export default function Completed() {
  return (
    <section className="completed-wrap">
      <div className="list-content">
        <Link to="product/:id">
          <div className="product-img">
            <div className="img-inner">
              <span className="screen-out">상품 이미지</span>
            </div>
          </div>
          <div className="product-info">
            <span className="screen-out">XX님의 판매중인 상품</span>
            <p className="tit">가방입니데잉</p>
            <em className="category">패션잡화</em>
            <span className="price">
              9,900<em>원</em>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
