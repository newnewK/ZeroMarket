import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Find.modules.scss";

function FindUserPw() {
  let [comfirm, setComfirm] = useState(false);

  // 아이디, 비밀번호 한글 방지!
  let dataRuleCheckFor = (ch) => {
    let ascii = ch.charCodeAt(0);
    if (48 /* 0 */ <= ascii && ascii <= 57 /* 9 */) return true;
    if (65 /* A */ <= ascii && ascii <= 90 /* Z */) return true;
    if (97 /* a */ <= ascii && ascii <= 122 /* z */) return true;

    return false;
  };

  // 아이디
  let [userId, setUserId] = useState("");

  // 사업자 등록번호
  let [bizN, setBizN] = useState("");

  let changeBizN = (e) => {
    let targetN = e.target.value;
    targetN = targetN.replace(/[^0-9]/g, "");

    setBizN(targetN);
  };

  // 비밀번호 찾기 버튼
  let comfirmId = () => {
    // 아이디 확인, 사업자등록증 확인 후 true
    // 아이디나 사업자등록증이 다르거나 틀리면 => wng 메시지 띄우기!!(만들어야함!)
    setComfirm(true);
  };

  // 비밀번호
  let [userPw, setUserPw] = useState(""); // input value
  let [viewUserpw, setViewUserpw] = useState(false); // input type
  let [pwIcon, setPwIcon] = useState(
    "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"
  ); // svg
  let [wngUserPw, setWngUserPw] = useState(false); // 비밀번호 경고

  let changeUserPW = (e) => {
    let value = e.target.value;

    if (value === "") {
      setUserPw(value);
      return;
    }

    let length = value.length;
    if (dataRuleCheckFor(value[length - 1]) === false) return;

    setUserPw(value);

    return;
  };

  let BlurUserPw = () => {
    if (userPw.length < 8 || userPw.length > 15) {
      setWngUserPw(true);
    } else {
      setWngUserPw(false);
    }
  };

  // 비밀번호 눈 아이콘 클릭
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

  // 비밀번호 확인
  let [matchPw, setMatchPw] = useState(""); //value
  let [viewMP, setViewMP] = useState(false); // input type
  let [mpIcon, setMpIcon] = useState(
    "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"
  );
  let [wngPw, setWngPw] = useState(false); // wng pw

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
  let changeMacthPw = (e) => {
    let value = e.target.value;

    if (value === "") {
      setMatchPw(value);
      return;
    }

    let length = value.length;
    if (dataRuleCheckFor(value[length - 1]) === false) return;

    setMatchPw(value);

    return;
  };

  let pwBlur = () => {
    if (userPw !== matchPw) {
      setWngPw(true);
    } else {
      setWngPw(false);
    }
  };

  //비밀번호 재설정 완료 모달
  let [modal, setModal] = useState(false);

  let completion = () => {
    if (userPw === matchPw) {
      // 비밀번호와 비밀번호 확인이 동일한 경우
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <section className="user-find">
      {comfirm !== true ? (
        <>
          <p className="find-user-txt">
            가입하셨던 아이디와 사업자등록번호를 입력하시면,
            <br />
            새로운 비밀번호로 변경할 수 있습니다.
          </p>
          <form className="user-form">
            <input
              type="id"
              placeholder="아이디"
              vlaue={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <input
              type="text"
              name="onlyNumber"
              maxLength="12"
              placeholder="사업자등록번호"
              value={bizN}
              onChange={changeBizN}
            />
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
            <div className={`field ${wngPw === true ? "wngField" : null}`}>
              <label>비밀번호 재설정</label>
              <div className={`field ${wngUserPw === true ? "wngPw" : null}`}>
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
                <em>비밀번호 일치하지않습니다.</em>
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
            <button
              type="button"
              className="closeModal"
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

            <h2 className="title">비밀번호 재설정 완료</h2>
            <p className="txt">
              새로 작성하신 비밀번호로 설정이 완료되었습니다.
            </p>

            <div className="login-go">
              <Link to="/login" className="go-to-login">
                로그인
              </Link>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default FindUserPw;
