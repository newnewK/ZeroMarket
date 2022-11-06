import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import "./../css/Product.modules.scss";

export default function Product() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    let resizeTimer;
    let windowSizer = () => {
      resizeTimer = setTimeout(() => {
        setWindowSize({
          width: document.body.clientWidth,
        });
      }, 300);
    };
    window.addEventListener("resize", windowSizer);
    console.log(windowSize.width);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", windowSizer);
    };
  }, [windowSize]);
  return (
    <main className="product-wrap">
      <article className="img-wrap">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </article>
      <div className="product-user">
        <button type="button" className="user-info">
          <span className="screen-out"></span>
          <span
            className="img"
            style={{ backgroundImage: "url(/img/profile.webp)" }}
          ></span>
          <p>닉네임</p>
        </button>
        {windowSize.width < 768 ? null : (
          <div className="btn-wrap">
            <button type="button">
              <svg viewBox="0 0 38 34" fill="none">
                <path
                  className="non-like"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299ZM32.0081 16.6701C34.9446 13.533 34.8523 8.58052 32.1962 5.78099L32.1721 5.75565L32.1487 5.72978C30.0533 3.42248 26.4219 3.23047 24.5394 4.93062L18.9996 9.93557L13.4601 4.93076C11.5777 3.2306 7.94577 3.42244 5.85042 5.72978L5.82689 5.75569L5.8028 5.78108C3.14716 8.57988 3.05453 13.533 5.99094 16.6701L18.9999 29.4033L32.0081 16.6701Z"
                ></path>
                {/* M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299Z */}
              </svg>
            </button>

            <Link to="/" className="chat">
              채팅
            </Link>
          </div>
        )}
      </div>
      <div className="product-info">
        <span className="category">카테고리</span>
        <h3 className="tit">제목 내용 들어오깅</h3>
        <h5 className="price">5,000 원</h5>
        <div className="txt-wrap">
          <p className="info-txt">어쩌고~ 어쩌고~ 얄랴얄라</p>
        </div>
      </div>

      {windowSize.width < 768 ? (
        <div className="dock-bar">
          <button type="button">
            <svg viewBox="0 0 38 34" fill="none">
              <path
                className="non-like"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299ZM32.0081 16.6701C34.9446 13.533 34.8523 8.58052 32.1962 5.78099L32.1721 5.75565L32.1487 5.72978C30.0533 3.42248 26.4219 3.23047 24.5394 4.93062L18.9996 9.93557L13.4601 4.93076C11.5777 3.2306 7.94577 3.42244 5.85042 5.72978L5.82689 5.75569L5.8028 5.78108C3.14716 8.57988 3.05453 13.533 5.99094 16.6701L18.9999 29.4033L32.0081 16.6701Z"
              ></path>
              {/* M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299Z */}
            </svg>
          </button>
          <Link to="/" className="chat">
            채팅
          </Link>
        </div>
      ) : null}

      <section className="category-order-list">
        <div className="order-list-top">
          <h5 className="tit">
            <span>현재 카테고리명</span> 다른 상품
          </h5>
          <button className="more-btn">더보기</button>
        </div>
        <div className="order-list">
          <div className="list">
            <Link to="/product/:id">
              <div className="thumb">
                <span className="screen-out">상품 이미지</span>
                <div
                  className="thumb-img"
                  style={{ backgroundImage: `url()` }}
                ></div>
              </div>
              <div className="product-info-txt">
                <em className="category">테크가전</em>
                <p className="tit">title</p>
                <span className="price">price</span>
              </div>
            </Link>
          </div>
          {/*  */}
          <div className="list">
            <Link to="/product/:id">
              <div className="thumb">
                <span className="screen-out">상품 이미지</span>
                <div
                  className="thumb-img"
                  style={{ backgroundImage: `url()` }}
                ></div>
              </div>
              <div className="product-info-txt">
                <em className="category">테크가전</em>
                <p className="tit">title</p>
                <span className="price">price</span>
              </div>
            </Link>
          </div>
          <div className="list">
            <Link to="/product/:id">
              <div className="thumb">
                <span className="screen-out">상품 이미지</span>
                <div
                  className="thumb-img"
                  style={{ backgroundImage: `url()` }}
                ></div>
              </div>
              <div className="product-info-txt">
                <em className="category">테크가전</em>
                <p className="tit">title</p>
                <span className="price">price</span>
              </div>
            </Link>
          </div>
          <div className="list">
            <Link to="/product/:id">
              <div className="thumb">
                <span className="screen-out">상품 이미지</span>
                <div
                  className="thumb-img"
                  style={{ backgroundImage: `url()` }}
                ></div>
              </div>
              <div className="product-info-txt">
                <em className="category">테크가전</em>
                <p className="tit">title</p>
                <span className="price">price</span>
              </div>
            </Link>
          </div>
          <div className="list">
            <Link to="/product/:id">
              <div className="thumb">
                <span className="screen-out">상품 이미지</span>
                <div
                  className="thumb-img"
                  style={{ backgroundImage: `url()` }}
                ></div>
              </div>
              <div className="product-info-txt">
                <em className="category">테크가전</em>
                <p className="tit">title</p>
                <span className="price">price</span>
              </div>
            </Link>
          </div>
          {/*  */}
        </div>
      </section>
    </main>
  );
}
