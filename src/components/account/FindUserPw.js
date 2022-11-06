import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Find.modules.scss";

function FindUserPw() {
  let [comfirm, setComfirm] = useState(false);

  // 아이디 - (초기값, 경고, input value)
  let [userId, setUserId] = useState("");
  let [idWng, setIdWng] = useState(false);
  let changeUserId = (e) => {
    let currentId = e.target.value;

    currentId = currentId.replace(/[^A-Za-z0-9]/gi, "");
    setUserId(currentId);
    if (userId !== "") {
      setIdWng(false);
    }
  };

  // 핸드폰번호 - (초기값, 경고, input value)
  let [cellN, setCellN] = useState("");
  let [cellWng, setCellWng] = useState(false);
  let changeCellN = (e) => {
    let targetN = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");

    setCellN(targetN);

    if (cellN !== "") {
      setCellWng(false);
    }
  };

  // 확인 버튼 - 1. 아이디가 비워져있을 때 2. 비밀번호가 비워져있을 때 3.아이디와 비밀번호가 비워져있을 때 4. 아이디가 틀린경우 5. 핸드폰번호가 틀린 경우
  let comfirmId = () => {
    if (userId === "") {
      setIdWng(true);
      setCellWng(true);
    } else if (cellN === "" || cellN < 11) {
      setIdWng(true);
      setCellWng(true);
      if (userId !== "") {
        setIdWng(false);
      }
    } else {
      setComfirm(true);
    }
  };

  // 비밀번호(1) - (초기값, 상태 저장, 경고, 비밀번호 보기, 비밀번호 svg, input Value, blur, 아이콘 클릭시 input 값 보이기)
  let [userPw, setUserPw] = useState("");
  let [wngUserPw, setWngUserPw] = useState(false);
  let [viewUserpw, setViewUserpw] = useState(false);
  let [pwIcon, setPwIcon] = useState(
    "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"
  );

  let changeUserPW = (e) => {
    let currentPw = e.target.value;
    currentPw = currentPw.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
    setUserPw(currentPw);

    if (userPw !== "") {
      setWngUserPw(false);
    }
  };

  let BlurUserPw = () => {
    if (userPw.length < 8 || userPw.length > 15) {
      setWngUserPw(true);
    } else {
      setWngUserPw(false);
    }
  };

  let showUserPw = () => {
    if (viewUserpw === false) {
      setViewUserpw(true);
      setPwIcon(
        "M42.48 3.864l2.04 2.04-6.324 6.324-.864.852-.864.876-4.68 4.668-3.072 3.084-7.2 7.2-3.084 3.072-3.804 3.816-.912.912-.912.9-7.02 7.032-2.04-2.04 6.408-6.444a23.868 23.868 0 0 1-9.6-11.652l-.168-.432.156-.42A24.816 24.816 0 0 1 23.868 7.968c4.08.008 8.101.978 11.736 2.832l6.876-6.936zm-1.788 10.308a22.296 22.296 0 0 1 6.516 9.516l.072.444-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6a25.676 25.676 0 0 1-7.872-1.2l5.532-5.532a9.06 9.06 0 0 0 2.4.312 9.6 9.6 0 0 0 9.6-9.6 9.06 9.06 0 0 0-.312-2.4zm-10.776 2.4a9.6 9.6 0 0 0-15.6 7.536l-.048-.036A9.6 9.6 0 0 0 16.332 30l3.12-2.964a5.316 5.316 0 0 1-.876-2.928 5.412 5.412 0 0 1 5.4-5.4c1.04 0 2.059.304 2.928.876z"
      );
    } else {
      setViewUserpw(false);
      setPwIcon(
        "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"
      );
    }
  };

  // 비밀번호(2) 확인 - (초기값, 상태 저장, 경고, 비밀번호(1,2) 상태 동일, svg, input value, blur, 비밀번호 값 보기 )
  let [matchPw, setMatchPw] = useState("");
  let [viewMP, setViewMP] = useState(false);
  let [wngPw, setWngPw] = useState(false);
  let [mpIcon, setMpIcon] = useState(
    "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"
  );

  let changeMacthPw = (e) => {
    let currentPw = e.target.value;
    currentPw = currentPw.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
    setMatchPw(currentPw);
  };

  let pwBlur = () => {
    if (userPw !== matchPw) {
      setWngPw(true);
    } else {
      setWngPw(false);
    }
  };
  let showMatchPw = () => {
    if (viewMP === false) {
      setViewMP(true);
      setMpIcon(
        "M42.48 3.864l2.04 2.04-6.324 6.324-.864.852-.864.876-4.68 4.668-3.072 3.084-7.2 7.2-3.084 3.072-3.804 3.816-.912.912-.912.9-7.02 7.032-2.04-2.04 6.408-6.444a23.868 23.868 0 0 1-9.6-11.652l-.168-.432.156-.42A24.816 24.816 0 0 1 23.868 7.968c4.08.008 8.101.978 11.736 2.832l6.876-6.936zm-1.788 10.308a22.296 22.296 0 0 1 6.516 9.516l.072.444-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6a25.676 25.676 0 0 1-7.872-1.2l5.532-5.532a9.06 9.06 0 0 0 2.4.312 9.6 9.6 0 0 0 9.6-9.6 9.06 9.06 0 0 0-.312-2.4zm-10.776 2.4a9.6 9.6 0 0 0-15.6 7.536l-.048-.036A9.6 9.6 0 0 0 16.332 30l3.12-2.964a5.316 5.316 0 0 1-.876-2.928 5.412 5.412 0 0 1 5.4-5.4c1.04 0 2.059.304 2.928.876z"
      );
    } else {
      setViewMP(false);
      setMpIcon(
        "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"
      );
    }
  };

  //비밀번호 재설정 완료 모달
  let [modal, setModal] = useState(false);

  let completion = () => {
    if (userPw === matchPw) {
      if (userPw.length < 8 || userPw.length > 15) {
        setModal(false);
      } else {
        setModal(true);
        // 여기서 비밀번호가 DB에 저장되어야함.
      }
    } else {
      setModal(false);
      setWngPw(true);
    }
  };

  return (
    <section className="user-find">
      {comfirm !== true ? (
        <>
          <p className="find-user-txt">
            가입하셨던 아이디와 핸드폰 번호를 입력하시면,
            <br />
            새로운 비밀번호로 변경할 수 있습니다.
          </p>
          <form className="user-form">
            <div className={`field ${idWng ? "wngField" : ""}`}>
              <input
                type="id"
                name="userId"
                placeholder="아이디"
                value={userId}
                onChange={changeUserId}
              />
            </div>
            <div className={`field ${cellWng ? "wngField" : ""}`}>
              <input
                type="text"
                name="onlyNumber"
                maxLength="11"
                placeholder="핸드폰번호"
                value={cellN}
                onChange={changeCellN}
              />
              <em>
                제로마켓에 등록되지 않은 회원정보이거나, 아이디 또는 번호가
                회원정보와 일치하지 않습니다.
              </em>
            </div>

            <button
              type="button"
              name="id-submit"
              className="user-submit-btn"
              onClick={comfirmId}
            >
              확인
            </button>
          </form>
        </>
      ) : (
        <>
          <p className="find-user-txt">
            비밀번호를 재설정하여 <br />
            로그인 후 제로마켓을 이용하세요!
          </p>
          <form className="user-form">
            <div className={`field ${wngPw === true ? "wngField" : ""}`}>
              <label>비밀번호 재설정</label>
              <div className={`field ${wngUserPw === true ? "wngPw" : ""}`}>
                <input
                  autoComplete="on"
                  type={viewUserpw === true ? "text" : "password"}
                  placeholder="비밀번호 입력"
                  pattern="[a-zA-Z0-9]"
                  className="pw"
                  value={userPw}
                  onChange={changeUserPW}
                  onBlur={BlurUserPw}
                />
                <button type="button" className="pw-btn" onClick={showUserPw}>
                  <svg
                    viewBox="0 0 48 48"
                    focusable="false"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <path d={pwIcon} />
                  </svg>
                </button>
                <span className="pwWng">
                  비밀번호는 8자 이상 15자 이하로 입력해주세요.
                </span>
              </div>
              <div className="field">
                <input
                  autoComplete="on"
                  type={viewMP === true ? "text" : "password"}
                  placeholder="비밀번호 확인"
                  className="pw"
                  value={matchPw}
                  onChange={changeMacthPw}
                  onBlur={pwBlur}
                />
                <button type="button" className="pw-btn" onClick={showMatchPw}>
                  <svg
                    viewBox="0 0 48 48"
                    focusable="false"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <path d={mpIcon} />
                  </svg>
                </button>
                <em>
                  비밀번호 일치하지않거나, 비밀번호가 8자 이상 15자 이하인지
                  확인해주세요
                </em>
              </div>
            </div>
            <button
              type="button"
              className="user-submit-btn"
              onClick={completion}
            >
              재설정 완료
            </button>
          </form>
        </>
      )}

      {modal !== true ? null : (
        <section className="completion-modal">
          <div className="completion-inner">
            <h2 className="title">비밀번호 재설정 완료</h2>
            <p className="txt">
              새로 작성하신 비밀번호로 설정이 완료되었습니다.
            </p>

            <div className="btn-wrap">
              <div className="login-go">
                <Link to="/login" className="go-to-login">
                  로그인
                </Link>
              </div>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  setModal(false);
                }}
              >
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 24.2 21.3">
                  <path
                    className="st0"
                    d="M18.5,17.5c-0.1,0-0.3,0-0.4-0.1L5.4,4.6c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.7,12.7
	c0.2,0.2,0.2,0.5,0,0.7C18.7,17.5,18.6,17.5,18.5,17.5z"
                  />
                  <path
                    className="st0"
                    d="M5.8,17.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L18.1,3.9c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7L6.1,17.4
	C6,17.5,5.9,17.5,5.8,17.5z"
                  />
                  <path
                    className="st0"
                    d="M378.7,348.1c-0.1,0-0.3,0-0.4-0.1l-12.7-12.7c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.7,12.7
	c0.2,0.2,0.2,0.5,0,0.7C378.9,348.1,378.8,348.1,378.7,348.1z"
                  />
                  <path
                    className="st0"
                    d="M365.9,348.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l12.7-12.7c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
	L366.3,348C366.2,348.1,366.1,348.1,365.9,348.1z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default FindUserPw;
