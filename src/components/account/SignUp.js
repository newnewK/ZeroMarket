import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../css/SignUp.modules.scss";
import { useSelector } from "react-redux";

export default function SignUp() {
  // 아이디 - 초기값, 경고, 중복 버튼 상태, 중복 여부 상태, value change, 블러, 중복 확인 버튼 클릭
  let [userId, setUserId] = useState("");
  let [idWng, setIdWng] = useState(false);
  let [overlapBtn, setOverlapBtn] = useState(false);
  let [checkOverlap, setCheckOverlap] = useState(0); // 기존상태는 0, 중복X -> 1, 중복 -> 2
  let changeUserId = (e) => {
    let currentId = e.target.value;

    currentId = currentId.replace(/[^A-Za-z0-9]/gi, "");
    setUserId(currentId);
    if (userId !== "") {
      setIdWng(false);

      if (userId.length > 5 && userId.length < 20) {
        setOverlapBtn(true);
      } else {
        setOverlapBtn(false);
      }
    }

    setCheckOverlap(0);
  };

  let blurId = () => {
    if (userId === "" || userId.length < 5 || userId.length > 20) {
      setIdWng(true);
    } else {
      setUserId(userId.replace(/(\s*)/g, ""));
      setIdWng(false);
    }
  };

  let checkIdOverlap = () => {
    // 중복이 아닐경우 1
    setCheckOverlap(1);
    // 중복일 경우 2
  };

  // 비밀번호 - 초기값, 경고, 비밀번호 값 보기, 보기 아이콘, 값 변경, blur
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
    let currentPw = e.target.value;
    currentPw = currentPw.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
    setMatchPw(currentPw);

    if (matchPw !== "") {
      setWngPw(false);
    }
  };

  let pwBlur = () => {
    if (userPw !== matchPw) {
      setWngPw(true);
    } else {
      setWngPw(false);
    }
  };

  // 닉네임 - 초기값, 경고
  let [userNickName, setUSerNickName] = useState("");
  let [nickWng, setNickWng] = useState(false);
  let cahngeNickName = (e) => {
    setUSerNickName(e.target.value);
    if (userNickName.length >= 2) {
      setNickWng(false);
    }
  };
  let blurNickName = () => {
    if (userNickName === "" || userNickName.length <= 1) {
      setNickWng(true);
    } else {
      setNickWng(false);
    }
  };

  // 이름 - 초기값, 경고, value change, 블러
  let [userName, setUserName] = useState("");
  let [nameWng, setNameWng] = useState(false);
  let ChangeName = (e) => {
    let current = e.target.value;
    let regExp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    current = current.replace(regExp, "");

    setUserName(current);
    if (userName !== "") {
      setNameWng(false);
    }
  };

  let blurName = () => {
    if (userName === "" || userName.length <= 1) {
      setNameWng(true);
    } else {
      setNameWng(false);
    }
  };

  // 핸드폰 - 초기값, 경고, 변경, blur
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

  let blurCellN = () => {
    if (cellN === "" || cellN.length < 11) {
      setCellWng(true);
    } else {
      setCellWng(false);
    }
  };

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

  // 가입 완료 버튼 - 초기값,
  let essentialCompletion =
    checkOverlap === 1 &&
    userPw === matchPw &&
    userNickName.length > 1 &&
    userNickName.length < 21 &&
    userName.length > 1 &&
    cellN.length === 11 &&
    checkTerms.length === 2;

  // 회원가입 완료 모달
  let [welcomeM, setWelcomM] = useState(false);
  let closeModal = () => {
    setWelcomM(false);
  };

  return (
    <main className="sign-up-warp">
      <div className="sign-up-inner">
        <p className="welcome-txt">
          &#128075;<span>제로마켓에 오신 것을 환영합니다.</span>
        </p>
        <h2 className="title">간편 가입</h2>

        <form className="form-wrap">
          <div
            className={`field ${idWng || checkOverlap === 2 ? "wngField" : ""}`}
          >
            <label>아이디</label>
            <div className="input-contanier">
              <input
                type="text"
                placeholder="아이디 입력"
                value={userId}
                onChange={changeUserId}
                onBlur={blurId}
                className={`${checkOverlap === 1 ? "id-fixed" : ""}`}
              />
              {checkOverlap === 1 ? (
                <button
                  type="button"
                  className="changeId"
                  onClick={() => {
                    setCheckOverlap(0);
                  }}
                >
                  변경하기
                </button>
              ) : (
                <button
                  type="button"
                  className={`${overlapBtn ? "onBtn" : ""}`}
                  disabled={overlapBtn ? false : true}
                  onClick={checkIdOverlap}
                >
                  중복확인
                </button>
              )}
            </div>
            <em>
              {checkOverlap === 2
                ? "아이디를 변경하여 중복확인 해주세요"
                : "5~20자의 영문 대소문자, 숫자만 사용 가능해요"}
            </em>
          </div>
          <div className={`field ${wngPw === true ? "wngField" : ""}`}>
            <label>비밀번호</label>
            <div className={`field ${wngUserPw === true ? "wngPw" : ""}`}>
              <input
                type={viewUserpw === true ? "text" : "password"}
                placeholder="비밀번호 입력"
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
              <em className="pwWng">
                비밀번호는 8자 이상 15자 이하로 입력해주세요.
              </em>
            </div>
            <div className="field">
              <input
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
          <div className={`field ${nickWng ? "wngField" : ""}`}>
            <label>닉네임</label>
            <input
              type="text"
              placeholder="닉네임 입력"
              value={userNickName}
              onChange={cahngeNickName}
              onBlur={blurNickName}
            />
            <em>2자 이상, 20자 이내로 입력해주세요.</em>
          </div>
          <div className={`field ${nameWng ? "wngField" : ""}`}>
            <label>이름</label>
            <input
              type="text"
              placeholder="이름 입력"
              value={userName}
              onChange={ChangeName}
              onBlur={blurName}
            />
            <em>이름을 작성해주세요</em>
          </div>
          <div className={`field ${cellWng ? "wngField" : ""}`}>
            <label>핸드폰번호</label>
            <input
              type="text"
              placeholder="핸드폰번호 입력"
              value={cellN}
              onChange={changeCellN}
              onBlur={blurCellN}
            />
            <em>핸드폰 번호를 입력해주세요</em>
          </div>

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
            type="button"
            className={`signUp-submit-btn ${
              essentialCompletion === true ? "onBtn" : ""
            }`}
            disabled={essentialCompletion ? false : true}
            onClick={() => {
              setWelcomM(true);
            }}
          >
            완료
          </button>
        </form>
        <p className="login-page-link">
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
      <div
        className={`overlap-id-modal 
        ${checkOverlap === 1 ? "not-overlap-id" : ""}   
        ${checkOverlap === 2 ? "overlap-id" : ""}`}
      >
        {/* 중복 "overlap-id" 노중복 "not-overlap-id" */}
        {checkOverlap === 1 ? "아이디 인증이 완료되었습니다" : ""}
        {checkOverlap === 2 ? "이미 사용중인 아이디입니다" : ""}
      </div>
      {welcomeM ? <CompletedSignUp closeModal={closeModal} /> : null}
    </main>
  );
}

function CompletedSignUp({ closeModal }) {
  let navigate = useNavigate();

  return (
    <section className="completed-signUp-wrap">
      <div className="inner">
        <h2 className="tit">반가워요 :&#41; </h2>
        <p>제로마켓 가입이 완료되었습니다.</p>
        <div className="btn-wrap">
          <button type="button" className="close-btn" onClick={closeModal}>
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
            className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
          {/* <Link to="/login">로그인</Link> */}
        </div>
      </div>
    </section>
  );
}
