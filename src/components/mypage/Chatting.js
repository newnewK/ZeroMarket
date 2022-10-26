import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Chatting.modules.scss";

export default function Chatting({ light, dark }) {
  //textarea 높이 자동조절
  let [textareaContent, setTextareaContent] = useState("");
  // 줄바꿈 위치를 저장
  let [lineBreakIndexDict, setLineBreakIndexDict] = useState({});
  // 줄수 높이
  let [lineHeight, setLineHeight] = useState(0);
  // 입력 업데이트, 줄바꿈 감지
  let checkItemChangehandler = (e) => {
    setTextareaContent(e.target.value);

    //scroll 생기면 line breake
    if (e.target.scrollHeight !== e.target.clientHeight) {
      setLineHeight((prev) => prev + 1); // textarea 높이 늘리고
      setLineBreakIndexDict({
        ...lineBreakIndexDict,
        [e.target.value.length - 1]: 1,
      }); // 줄바꿈 위치 저장
    } else {
      // 다시 줄바꿈 지점으로 오면 line break 취소
      if (lineBreakIndexDict[e.target.value.length]) {
        setLineHeight((prev) => prev - 1); // textarea 높이 줄이고
        setLineBreakIndexDict({
          ...lineBreakIndexDict,
          [e.target.value.length]: 0,
        }); // Dictionary에서 삭제
      }
    }
  };

  // 너비 초과로 인한 줄바꿈 말고 사용자가 엔터를 입력했을 때의 줄바꿈 처리
  const checkItemEnterHandler = (e) => {
    if (e.key === "Enter") {
      // textarea 높이는 checkItemChangeHandler에서 변경됨
      setLineBreakIndexDict({
        ...lineBreakIndexDict,
        [e.target.value.length]: 1,
      }); // 줄바꿈 위치 저장
    }
  };

  //Mode
  let [mode, setMode] = useState(true);

  return (
    <main className="chatting-wrap">
      <div className="chat-header">
        <div className="header-inner">
          <button className="back" type="button">
            <span className="screen-out">뒤로가기</span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_2">
                <path d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,13,26Z" />
                <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
              </g>
              <g id="frame">
                <rect height="32" width="32" fill="none" />
              </g>
            </svg>
          </button>
          <p className="name">닉네임</p>
          <div className="more">
            <button className="more-btn" type="button">
              {/* 클릭시 우측에서 왼쪽으로 나오기 (나가기, 테마설정, 즐겨찾기) */}
              <span className="screen-out">더보기 버튼</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="12" r="2" className="stroke-svg" />
                <circle cx="12" cy="12" r="2" className="stroke-svg" />
                <circle cx="19" cy="12" r="2" className="stroke-svg" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <section className="chat-info">
        <ul>
          {/* 받은 메세지 */}
          <li>
            <div className="msg-received msg">
              <div className="user-img">
                <span className="screen-out">닉네임의 프로필</span>
                <span className="img"></span>
              </div>
              <div className="msg-txt">안녕하세요!?</div>
              <div className="empty"></div>
            </div>
            <div className="date receoved-date">
              <span>2022.11.12</span>
            </div>
          </li>
          {/* 보낸 메세지 */}
          <li>
            <div className="sent-received msg">
              <div className="msg-txt">응 방가</div>
            </div>
            <div className="date send-date">
              <span>2022.11.12</span>
            </div>
          </li>
          {[1, 2, 3, 4, 5, 7, 8, 9, 10].map(() => {
            return (
              <>
                <li>
                  <div className="msg-received msg">
                    <div className="user-img">
                      <span className="screen-out">닉네임의 프로필</span>
                      <span className="img"></span>
                    </div>
                    <div className="msg-txt">안녕하세요!?</div>
                    <div className="empty"></div>
                  </div>
                  <div className="date receoved-date">
                    <span>2022.11.12</span>
                  </div>
                </li>
                <li>
                  <div className="sent-received msg">
                    <div className="msg-txt">응 방가</div>
                  </div>
                  <div className="date send-date">
                    <span>2022.11.12</span>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </section>
      <div className="write-msg">
        <div className="write-inner">
          <div className="file">
            <label>
              <input type="file" />
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
              </svg>
            </label>
          </div>
          <div className="msg-form">
            <textarea
              placeholder="메시지를 입력하세요"
              maxLength={1000}
              value={textareaContent}
              onChange={checkItemChangehandler}
              onKeyDown={checkItemEnterHandler}
              style={{ height: lineHeight * 24 + 24 + "px" }}
              rows="0"
            />
          </div>
          <button className="send-btn" type="button">
            <span className="screen-out">메시지 보내기</span>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="more-modal">
        <div className="modal-inner">
          <h5>채팅방 정보</h5>
          <ul className="msg-info">
            <li>
              <p className="msg-info-title">채팅 상대</p>
              <div className="user-info ">
                <Link to="">
                  <div className="user-img">
                    <span className="img"></span>
                  </div>
                  <span className="user-name">얄리얄리</span>
                </Link>
              </div>
            </li>
            <li>
              <p className="msg-info-title">채팅 상품</p>
              <div className="product-info">
                <Link to="">
                  <div className="product-img">
                    <span className="img"></span>
                  </div>
                  <div className="product-txt">
                    <span className="product-name">상품 이름~</span>
                    <span className="product-price">
                      9,900 <em>원</em>
                    </span>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <div className="btn-wrap">
            <button type="button" className="back">
              <span className="screen-out">뒤로가기</span>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_2">
                  <path d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,13,26Z" />
                  <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                </g>
                <g id="frame">
                  <rect height="32" width="32" fill="none" />
                </g>
              </svg>
            </button>
            <div className="right-btn">
              <button type="button">
                <span className="screen-out">즐겨찾기</span>
                <svg version="1.1" viewBox="0 0 32 32" className={`star `}>
                  <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
                </svg>
              </button>
              {mode ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode(false);
                    dark();
                  }}
                >
                  <span className="screen-out">다크모드</span>
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="256" width="256" />
                    <path
                      d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
                      fill="none"
                      className="stroke-svg"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="15"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMode(true);
                    light();
                  }}
                >
                  <span className="screen-out">라이트모드</span>
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="256" width="256" />
                    <circle
                      className="stroke-svg"
                      cx="128"
                      cy="128"
                      fill="none"
                      r="60"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="128"
                      x2="128"
                      y1="36"
                      y2="16"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="62.9"
                      x2="48.8"
                      y1="62.9"
                      y2="48.8"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="36"
                      x2="16"
                      y1="128"
                      y2="128"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="62.9"
                      x2="48.8"
                      y1="193.1"
                      y2="207.2"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="128"
                      x2="128"
                      y1="220"
                      y2="240"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="193.1"
                      x2="207.2"
                      y1="193.1"
                      y2="207.2"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="220"
                      x2="240"
                      y1="128"
                      y2="128"
                    />
                    <line
                      className="stroke-svg"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="193.1"
                      x2="207.2"
                      y1="62.9"
                      y2="48.8"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
