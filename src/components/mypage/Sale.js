import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Mypage.modules.scss";

export default function Sale({ handleScrollNon, hadndleScroll }) {
  let [completedM, setCompletionM] = useState(false);
  let [purchaseUser, setPurchaseUser] = useState(false);
  const handleClick = () => {
    setCompletionM(true);
    handleScrollNon();
  };
  const closeModal = () => {
    setCompletionM(false);
    hadndleScroll();
  };
  const openPurchase = () => {
    setPurchaseUser(true);
  };
  const submitClick = () => {
    setCompletionM(false);
    hadndleScroll();
  };
  return (
    <section className="sale-wrap">
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
        {/* 자신의 마이페이지인 경우만!! */}
        <button className="completed-btn" onClick={handleClick}>
          거래완료 변경
        </button>
      </div>
      {completedM ? (
        <section className="completion-modal">
          <div className="completion-inner">
            <h2 className="tit">거래완료</h2>
            <p className="txt">해당 상품을 거래완료로 변경하겠습니까?</p>

            <div className="btn-wrap">
              <button type="button" className="cancel-btn" onClick={closeModal}>
                취소
              </button>
              <button
                type="button"
                className="submit-btn"
                onClick={submitClick}
              >
                완료
              </button>
              <button type="button" className="close-btn" onClick={closeModal}>
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
        </section>
      ) : null}
    </section>
  );
}
