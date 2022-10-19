import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/Footer.modules.scss";

export default function Footer() {
  let [sitemap, setSitemap] = useState(false);
  let [familySite, setFamilySite] = useState(false);

  return (
    <footer className="footer">
      <section className="footer-inner">
        <div className="info">
          <ul>
            <li>Zero Market</li>
            <li>대표 제로커플</li>
            <li>사업자 등록증 20211112</li>
            <li>프론트 개발자 김뉴희</li>
            <li>백엔드 개발자 김상길</li>
          </ul>
          <p>
            본 사이트는 포트폴리오 프로젝트용입니다. 실제 판매하는 사이트가
            아니므로 유의부탁드립니다.
          </p>
        </div>
        <div className="group">
          <ul>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li className="site-map">
              <button
                type="button"
                onClick={() => {
                  setSitemap((sitemap) => !sitemap);
                }}
              >
                사이트맵
                <svg
                  className={sitemap ? "open" : ""}
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                  <path d="M0-.75h48v48h-48z" fill="none" />
                </svg>
              </button>
              {sitemap ? (
                <ul className="map-info">
                  <li>
                    <Link to="/">스토어</Link>
                  </li>
                  <li>
                    <Link to="/guide">이용가이드</Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link to="/">이용약관</Link>
            </li>
          </ul>
          <div className="site">
            <button
              type="button"
              onClick={() => {
                setFamilySite((familySite) => !familySite);
              }}
            >
              패밀리 사이트
              <svg
                className={familySite ? "open" : ""}
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                <path d="M0-.75h48v48h-48z" fill="none" />
              </svg>
            </button>
            {familySite ? (
              <div className="site-wrap">
                <a href="/제로줄러" target="_blank">
                  제로줄러
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
                    </g>
                  </svg>
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <small className="copyright">
          &copy; <a href="/">Zero Market. </a> All rights reserved.
        </small>
      </section>
    </footer>
  );
}
