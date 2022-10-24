import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/SignUp.modules.scss";
import { useSelector } from "react-redux";

export default function SignUp() {
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
  let [idWng, setIdWng] = useState(false);
  let blurId = () => {
    if (userId !== "") {
      setUserId(userId.replace(/(\s*)/g, ""));
      setIdWng(false);
    } else {
      setIdWng(true);
    }
  };
  let changeUserId = (e) => {
    let value = e.target.value;

    if (value === "") {
      setUserId(value);
      return;
    }

    let length = value.length;
    if (dataRuleCheckFor(value[length - 1]) === false) return;

    setUserId(value);

    return;
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

  // 핸드폰
  // let [cellN, setCellN] = useState("");
  // let [cellBtn, setCellBtn] = useState(false);

  // let changeCellN = (e) => {
  //   let targetN = e.target.value
  //     .replace(/[^0-9.]/g, "")
  //     .replace(/(\..*)\./g, "$1");

  //   setCellN(targetN);

  //   console.log(cellN.length);

  //   if (cellN.length >= 10) {
  //     setCellBtn(true);
  //   } else {
  //     setCellBtn(false);
  //   }
  // };

  // 이용약관 동의
  let termsData = useSelector((state) => {
    return state.terms;
  });
  let [termsDesc, setTermsDesc] = useState([false, false]);

  let [checkTerms, setCheckTerms] = useState([]);

  // 낱개 선택
  let singCheck = (checked, id) => {
    if (checked) {
      setCheckTerms((copy) => [...copy, id]);
    } else {
      setCheckTerms(checkTerms.filter((el) => el !== id));
    }
  };

  //전체선택
  let allCheck = (checked) => {
    if (checked) {
      let checking = [];
      termsData.forEach((el) => checking.push(el.id));
      setCheckTerms(checking);
    } else {
      setCheckTerms([]);
    }
  };

  // 가입 완료 버튼
  let [submitBtn, setSubmitBtn] = useState(false);
  // 아이디가 넘어가고, 비밀번호를 다 완료했을 때,

  return (
    <section className="sign-up-warp">
      <div className="sign-up-inner">
        <p className="welcome-txt">
          &#128075;<span>제로마켓에 오신 것을 환영합니다.</span>
        </p>
        <h2 className="title">간편 가입</h2>

        <form className="form-wrap">
          <div className={`field ${idWng === true ? "wngField" : null}`}>
            <label>아이디</label>
            <input
              type="text"
              placeholder="아이디 입력"
              value={userId}
              onChange={changeUserId}
              onBlur={blurId}
            />
            <em>아이디를 입력해 주세요</em>
          </div>
          <div className={`field ${wngPw === true ? "wngField" : null}`}>
            <label>비밀번호</label>
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
          {/* 핸드폰 */}
          {/* <div className="field">
            <label>핸드폰</label>
            <div className="input-contanier">
              <input
                type="tel"
                maxLength={11}
                placeholder="핸드폰 번호 입력"
                value={cellN}
                onChange={changeCellN}
              />
              <button
                type="button"
                className={cellBtn === true ? "onBtn" : null}
              >
                인증하기
              </button>
            </div>
            <em>아이디를 입력해 주세요</em>
          </div> */}

          <section className="signUp-checkbox-wrap">
            <label className="all-checkbox">
              <input
                type="checkbox"
                name="select-all"
                onChange={(e) => allCheck(e.target.checked)}
                checked={checkTerms.length === termsData.length ? true : false}
              />
              <span></span>
              전체동의
            </label>
            {termsData.map((a, i) => {
              return (
                <div className="terms-field" key={i}>
                  <div className="terms-chk-wrap">
                    <label className="terms-checkbox">
                      <input
                        type="checkbox"
                        name={`select-${termsData[i].id}`}
                        onChange={(e) =>
                          singCheck(e.target.checked, termsData[i].id)
                        }
                        checked={
                          checkTerms.includes(termsData[i].id) ? true : false
                        }
                      />
                      <span></span>
                      {termsData[i].name} <em>(필수)</em>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setTermsDesc(
                          termsDesc.map((acc, idx) => {
                            if (i === idx) {
                              return !termsDesc[i];
                            } else {
                              return termsDesc[idx];
                            }
                          })
                        );
                      }}
                    >
                      내용{termsDesc[i] === true ? "가리기" : "보기"}
                    </button>
                  </div>
                  <div
                    className={`terms-info ${
                      termsDesc[i] === true ? "openInfo" : "closeInfo"
                    }`}
                  >
                    <p>{termsData[i].desc}</p>
                  </div>
                </div>
              );
            })}
          </section>
          <button
            type="sumbit"
            className={`signUp-submit-btn ${submitBtn === true ? "onBtn" : ""}`}
            disabled={!submitBtn}
          >
            완료
          </button>
        </form>
        <p className="login-page-link">
          이미 사장님 계정이 있나요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </section>
  );
}
