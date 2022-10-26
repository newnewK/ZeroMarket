import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/ChatList.modules.scss";

export default function ChatList() {
  //더보기 모달
  let [moreModal, setMoreModal] = useState(false);

  return (
    <main className="chatList-wrap">
      <section className="chatList-inner">
        <h2 className="title">채팅</h2>

        <section className="list-wrap">
          <div className="list">
            <Link to="/chatting">
              <div className="user-info-wrap">
                <div className="user-img">
                  <span className="screen-out">프로필</span>
                  <span className="profile-img-wrap">
                    <span className="profile-img"></span>
                  </span>
                </div>
                <div className="user-name">
                  <span className="name">
                    닉네임
                    {/* <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M26,18c0,1.2-1,2-2,2h-6v10c0,1.1-0.9,2-2,2s-2-0.9-2-2V20H8c-1,0-2-0.8-2-2c0-1.3,1.4-4.1,4-6V2c0-1.1,0.9-2,2-2h8
	c1.1,0,2,0.9,2,2v10C24.6,13.9,26,16.7,26,18z"
                    />
                    <path d="M20.5,16h-9c0.5-0.5,1.5-1.3,2.5-2V4h4v10C19,14.7,20,15.5,20.5,16z" />
                  </svg> */}
                  </span>
                  <span className="product-title">판매하는 상품 타이틀</span>
                </div>
              </div>
              <div className="chat-contanier">
                <p className="chat-contents">채팅 내용~</p>
                <span className="date-contents">22.04.10</span>
              </div>
            </Link>
            <div className="more-wrap">
              <button
                type="button"
                className="more-btn"
                onClick={() => {
                  setMoreModal((moreModal) => !moreModal);
                }}
              >
                <svg
                  fill="none"
                  height="24"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="more-path"
                  />
                  <path
                    d="M12 18.5C12.2761 18.5 12.5 18.2761 12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="more-path"
                  />
                  <path
                    d="M12 6.5C12.2761 6.5 12.5 6.27614 12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.7239 6.5 12 6.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="more-path"
                  />
                </svg>
              </button>
              {moreModal ? (
                <div className="more-list">
                  <button>고정</button>
                  <button>삭제</button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
