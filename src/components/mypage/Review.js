import { useState } from "react";
import { Link } from "react-router-dom";

export default function Review() {
  //거래 후기 작성 모달
  let [reviewModal, setReviewModal] = useState(false);
  let closeReivewM = () => {
    setReviewModal(false);
  };
  // 거래 후기 건너뛰기 모달
  let [skipModal, setSkipModal] = useState(false);
  let closeSkip = () => {
    setSkipModal(false);
  };
  return (
    <section className="review-wrap">
      {reviewModal ? <Write closeReivewM={closeReivewM} /> : null}
      {skipModal ? <SkipReview closeSkip={closeSkip} /> : null}

      {/* 자신의 마이페이지 && 누군가 자신의 후기를 남겼을 경우 && 거래 완료한 후 후기를 안남겼을 경우 */}
      <div className="popup-wrap">
        <div className="review-popup">
          <p className="tit">XX님과의 거래후기를 남겨주세요.</p>
          <span className="sub-txt">
            거래는 어땠나요? 따뜻한 마음을 전달해보세요. 비방, 비난의 글을
            삼가해주세요.
          </span>
          <div className="btn-wrap">
            <button
              type="button"
              className="write-review"
              onClick={() => {
                setReviewModal(true);
              }}
            >
              후기 남기기
            </button>
            <button
              type="button"
              className="skip-review"
              onClick={() => {
                setSkipModal(true);
              }}
            >
              후기 건너뛰기
            </button>
          </div>
        </div>
      </div>

      <div className="review-list-wrap">
        <ul className="list">
          <li>
            {/* 해당 닉네임 프로필로 */}
            <Link to="/profile">
              <div className="user-info">
                <div className="user-img">
                  <div
                    className="img-inner"
                    style={{ backgroundImage: "url(/img/profile.webp)" }}
                  >
                    <span className="screen-out">XX님의 프로필 이미지</span>
                  </div>
                </div>
                <p className="name">닉네임</p>
              </div>

              <div className="review-txt">리뷰 내용~~</div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Write({ closeReivewM }) {
  return (
    <section className="write-wrap">
      <div className="write-inner">
        <h3 className="tit">거래후기</h3>
        <div className="product">
          <div className="product-img">
            <div className="img">
              <span className="screen-out">상품의 이미지</span>
            </div>
          </div>
          <div className="product-info">
            <span className="category">카테고리</span>
            <p className="tit">상품 타이틀</p>
          </div>
        </div>
        <form className="write-form">
          <textarea placeholder="거래후기를 작성해주세요." />
        </form>
        <div className="btn-wrap">
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              closeReivewM();
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
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              closeReivewM();
            }}
          >
            취소
          </button>
          <button type="button" className="submit-btn">
            완료
          </button>
        </div>
      </div>
    </section>
  );
}

function SkipReview({ closeSkip }) {
  return (
    <section className="skipReview-wrap">
      <div className="skip-inner">
        <h3 className="tit">거래후기 건너뛰기</h3>
        <p className="sub-tit">
          XX님과의 거래후기를 건너뛰기를 하시면, 대화목록에서 찾으셔야합니다.
        </p>

        <div className="btn-wrap">
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              closeSkip();
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
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              closeSkip();
            }}
          >
            취소
          </button>
          <button type="button" className="submit-btn">
            완료
          </button>
        </div>
      </div>
    </section>
  );
}
