import { useState } from "react";
import { Link } from "react-router-dom";

export default function Completed({ handleScrollNon, hadndleScroll }) {
  // 후기 - 상태 여부, 목록 유저 찾기 여부, 리뷰 작성 여부, 리뷰 글 여부,
  let [reviewM, setReviewM] = useState(false);
  let [searchUser, setSearchUser] = useState(false);
  let [review, setReview] = useState("");
  let [wngReivew, setWngReivew] = useState(false);
  let chatListUser = [
    { id: "newnew31", name: "뉴뉴당", profile: "/img/profile.webp" },
    { id: "hahah", name: "하핳", profile: "/img/zero01.png" },
    { id: "zero", name: "제로", profile: "" },
    { id: "test", name: "테스터", profile: "" },
    { id: "newnew31", name: "뉴뉴당", profile: "/img/profile.webp" },
    { id: "hahah", name: "하핳", profile: "/img/zero01.png" },
    { id: "zero", name: "제로", profile: "" },
    { id: "test", name: "테스터", profile: "" },
  ];
  let [buyer, setBuyer] = useState({
    id: "",
    name: "",
    profile: "",
  });
  const checkUser = (checked, userId, userName, userProfile) => {
    if (checked) {
      setBuyer({ id: userId, name: userName, profile: userProfile });
    } else {
      setBuyer({ id: "", name: "", profile: "" });
    }
  };
  const reviewValue = (e) => {
    setReview(e.target.value);
    if (review.length > 20) {
      setWngReivew(false);
    }
  };
  const blurReivew = () => {
    if (review.length < 20) {
      setWngReivew(true);
    } else {
      setWngReivew(false);
    }
  };

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
        <button
          type="button"
          className="write-btn"
          onClick={() => {
            setReviewM(true);
            handleScrollNon();
          }}
        >
          후기 보내기
        </button>
      </div>
      {reviewM ? (
        <section className="write-review-modal">
          <div className="write-inner">
            <h2 className="tit">후기 보내기</h2>
            {buyer.id === "" ? (
              <div className="product-info">
                <div className="product-img">
                  <span className="screen-out">상품 이미지</span>
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${"https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/165896986654425717.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"} )`,
                    }}
                  ></div>
                </div>
                <div className="product-txt">
                  <span>판매한 물건</span>
                  <p className="tit-product">타이틀입니데잉</p>
                </div>
              </div>
            ) : null}

            {buyer.id === "" ? (
              <div className="user-wrap">
                {searchUser ? (
                  <ul className="user-list-wrap">
                    {chatListUser.map((a, i) => {
                      let userId = chatListUser[i].id;
                      let userName = chatListUser[i].name;
                      let userProfile = chatListUser[i].profile;
                      return (
                        <li key={i}>
                          <input
                            type="radio"
                            name="user"
                            id={i}
                            value={`${chatListUser[i].id}`}
                            checked={buyer.id === chatListUser[i].id}
                            onChange={(e) => {
                              checkUser(
                                e.target.checked,
                                userId,
                                userName,
                                userProfile
                              );
                            }}
                          />
                          <label htmlFor={i}>
                            <div className="user-img">
                              <span className="screen-out"></span>
                              <div
                                className="img"
                                style={{
                                  backgroundImage: `url(${chatListUser[i].profile})`,
                                }}
                              ></div>
                            </div>
                            <p className="user-name">{chatListUser[i].name}</p>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <button
                    type="button"
                    className="search-btn"
                    onClick={() => {
                      setSearchUser(true);
                    }}
                  >
                    대화목록에서 구매자 찾기
                  </button>
                )}
              </div>
            ) : (
              <div className={`field ${wngReivew ? "wngField" : ""}`}>
                <div className="choose-buyer">
                  <div className="buyer">
                    <div className="buyer-img">
                      <span className="screen-out">구매자 이미지</span>
                      <div className="img"></div>
                    </div>
                    <p className="buyer-name">구매자 닉네임</p>
                  </div>
                  <button
                    type="button"
                    className="before-btn"
                    onClick={() => {
                      setBuyer({ id: "", name: "", profile: "" });
                      setReview("");
                      setWngReivew(false);
                    }}
                  >
                    다시 선택
                  </button>
                </div>
                <div className="review-write">
                  <textarea
                    placeholder="자세하고 솔직한 리뷰를 남겨주세요(최소 20자 이상)"
                    value={review}
                    onChange={reviewValue}
                    onBlur={blurReivew}
                  />
                  <span className="number">{review.length}</span>
                </div>

                <em>
                  {review.length < 20 && review.length !== 0
                    ? "20자 이상 입력해주세요"
                    : null}
                  {review.length === 0 ? "필수 값을 입력해주세요" : null}
                </em>
              </div>
            )}

            <div className="btn-wrap">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setReviewM(false);
                  hadndleScroll();
                  setSearchUser(false);
                  setBuyer({ id: "", name: "", profile: "" });
                }}
              >
                취소
              </button>
              <button type="button" className="submit-btn" disabled>
                후기 보내기
              </button>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  setReviewM(false);
                  hadndleScroll();
                  setSearchUser(false);
                  setBuyer({ id: "", name: "", profile: "" });
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
        </section>
      ) : null}
    </section>
  );
}
