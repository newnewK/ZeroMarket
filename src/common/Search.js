import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/Search.modules.scss";

export default function Search({ closeSearch, search }) {
  const [styleClass, setStyleClass] = useState(false);
  if (search === true) {
    setTimeout(() => {
      setStyleClass(true);
    }, 100);
  } else {
    setTimeout(() => {
      setStyleClass(false);
    }, 500);
  }
  return (
    <section className={`search-wrap ${styleClass ? "search-layout" : ""}`}>
      <div className={`search-inner ${search ? "inner-layout" : ""}`}>
        <div className="search-header">
          <h2 className="logo">
            <Link to="/">
              <span className="screen-out">zero market</span>
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 68.7 16.7">
                <g>
                  <path d="M14.2,4.7H9.1V2.9h7.1v1.7l-5.1,6.8h5.1v1.7H9.1v-1.7L14.2,4.7z" />
                  <path
                    d="M17.2,8.2c0-1.5,1.2-2.7,2.5-2.7h1.7c1.6,0,2.5,1.5,2.5,2.7v1.9h-4.9v0.4c0,0.7,0.5,1,1.1,1h3.5v1.7h-3.9
 c-1.4,0-2.5-1.1-2.5-2.6V8.2z M18.9,8.7H22V8.6c0-0.8-0.4-1.3-1.1-1.3H20C19.4,7.2,18.9,7.9,18.9,8.7L18.9,8.7z"
                  />
                  <path d="M30,5.7h0.2v1.9H30c-1.5,0-3.2,1.3-3.2,2.4v3.2h-1.9V5.4h1.9v1.6C27.4,6.1,28.7,5.7,30,5.7z" />
                  <path
                    d="M34.5,5.5c1.8,0,2.8,1.1,2.8,2.8v2.1c0,1.7-1.1,2.8-2.8,2.8h-0.6c-1.7,0-2.8-1.1-2.8-2.8V8.3c0-1.7,1.1-2.8,2.8-2.8H34.5z
  M33.9,7.2c-0.6,0-1.1,0.5-1.1,1.1v2c0,0.6,0.5,1.1,1.1,1.1h0.6c0.6,0,1.1-0.5,1.1-1.1v-2c0-0.6-0.5-1.1-1.1-1.1H33.9z"
                  />
                  <path d="M39.8,13.4V2.2h5.9v11.2H39.8z M41.7,11.8h2.2v-8h-2.2V11.8z M47.3,13.5V2.1H49v3.8h1.2v1.6H49v5.9H47.3z" />
                  <path
                    d="M55.5,4.8h1.2V2.1h1.6v6.5h-1.6V6.3h-1.5l-0.4,2.3H53l0.4-2H51V5.1h2.7l0.2-1.2h-3.1V2.2h4.9v1.5L55.5,4.8z M56.4,11.2
 L54,13.5h-2.4l4.1-4H57l4.1,4h-2.4L56.4,11.2z M60.8,9.8h-1.7V2.1h1.7V9.8z"
                  />
                </g>
              </svg>
            </Link>
          </h2>
          <button
            type="button"
            className="close-search"
            onClick={() => {
              closeSearch();
            }}
          >
            <span className="screen-out">검색창 닫기</span>
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
        <div className={`search-info  ${search ? "open-search" : ""}`}>
          <form className="search-form">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="search"
            >
              <g id="search">
                <path
                  d="M27.4,25.9l-4.2-4.2h-0.1c4.3-5.1,3.7-12.6-1.4-16.9S9.1,1.2,4.8,6.3S1.2,18.9,6.2,23.2c4.5,3.8,11,3.8,15.5,0
		c0,0,0,0,0,0.1l4.2,4.2c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0C27.8,27,27.8,26.4,27.4,25.9C27.4,26,27.4,26,27.4,25.9z M14,24
		C8.5,24,4,19.5,4,14S8.5,4,14,4s10,4.5,10,10S19.5,24,14,24z"
                />
              </g>
            </svg>
            <input type="text" placeholder="상품을 검색해보세요!" />
            <label className="screen-out">검색어</label>
          </form>
          {/* 아직 검색을 하지 않았을 경우! */}
          <div className="empty-search">
            <button type="button">패션&#183;잡화</button>
            <button type="button">테크&#183;가전</button>
            <button type="button">뷰티&#183;헤어</button>
            <button type="button">리빙&#183;베이비</button>
            <button type="button">여행&#183;스포츠</button>
            <button type="button">반려동물</button>
            <button type="button">취미&#183;클래스</button>
          </div>

          {/* 검색 결과가 있을 경우! */}
          <div className="result-list-wrap">
            <h3 className="result-tit">
              '검색어' 검색 결과 입니다.
              <span className="result-number">99</span>
            </h3>
            <div className="list-wrap">
              <div className="result-list list-content">
                <Link to="/product/:id">
                  <div className="result-img product-img">
                    {/* background-image!  */}
                    <div className="result-inner img-inner"></div>
                  </div>
                  <div className="result-info product-info">
                    <p className="tit">가방팔아용</p>
                    <em className="category">패션잡화</em>
                    <span className="price">
                      5,000<em>원</em>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* 검색 결과가 없을 경우 */}
          <div className="not-result">
            <h5 className="result-tit">'dada' 검색 결과가 없습니다.</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
