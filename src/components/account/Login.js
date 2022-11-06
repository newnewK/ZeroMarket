import { Link, useNavigate } from "react-router-dom";
import "./../../css/Login.modules.scss";
import { useState } from "react";

export default function Login() {
  // id & password
  let [userId, setUserId] = useState("");
  let [userPw, setUserPw] = useState("");
  // id 경고
  let [idWng, setIdWng] = useState(false);
  // password 경고
  let [pwWng, setPwWng] = useState(false);
  // all 경고
  let [allWng, setAllWng] = useState(false);

  // id Blur
  let idBlur = () => {
    if (userId !== "") {
      setUserId(userId.replace(/(\s*)/g, ""));
      setIdWng(false);
    } else {
      setIdWng(true);
    }
  };

  // 로그인 정보
  let loginInfo = { id: "newnew", pw: "1234" };

  // 로그인 버튼 클릭시
  let navigate = useNavigate();
  let login = () => {
    navigate("/");
  };

  return (
    <main className="login-wrap">
      <div className="login-inner">
        <h2>로그인</h2>
        <form>
          <div
            className={`field ${idWng === true ? "wngField" : null} ${
              allWng === true ? "allWng" : null
            }`}
          >
            <input
              type="text"
              placeholder="아이디 입력"
              onBlur={idBlur}
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <em>아이디 형식이 올바르지 않습니다.</em>
          </div>
          <div
            className={`field ${pwWng === true ? "wngField" : null}  ${
              allWng === true ? "allWng" : null
            }`}
          >
            <input
              autoComplete="on"
              type="password"
              placeholder="비밀번호 입력"
              value={userPw}
              onChange={(e) => {
                setUserPw(e.target.value);
              }}
            />
            <em className="wngTxt">
              등록되지 않은 아이디거나, 아이디 또는 비밀번호가 회원정보와
              일치하지 않습니다.
            </em>
          </div>
          <div className="login-action">
            <label>
              <input type="checkbox" />
              <span></span>
              아이디 저장
            </label>
            <Link to="/find/id" className="find">
              로그인 정보를 잊으셨나요?
            </Link>
          </div>
          <button type="button" className="login-btn" onClick={login}>
            로그인
          </button>
        </form>
        <div className="sign-up-wrap">
          사장님 계정이 없으신가요?
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </main>
  );
}
