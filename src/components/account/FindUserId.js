import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Find.modules.scss";

export default function FindUserId() {
  let [comfirm, setComfirm] = useState(false);

  // 사업자 등록번호
  let [bizN, setBizN] = useState("");

  let changeBizN = (e) => {
    let targetN = e.target.value;
    targetN = targetN.replace(/[^0-9]/g, "");

    setBizN(targetN);
  };

  // 아이디 확인
  let comfirmId = () => {
    if (bizN.length < 12) {
      alert("사업자 등록번호를 모두 입력해주세요!");
      setComfirm(false);
    } else {
      setComfirm(true);
    }
  };

  // 아이디 찾기
  let findId = () => {
    setComfirm(false);
  };
  let [searchId, setSearchId] = useState(true);

  console.log(comfirm);
  return (
    <section className="user-find">
      {comfirm !== true ? (
        <>
          <p className="find-user-txt">
            가입하셨던 사업자등록번호를 입력하시면,
            <br />
            아이디를 알려드립니다.
          </p>
          <form className="user-form">
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
          {searchId === true ? (
            <>
              <h2 className="find-info">newnew31</h2>
              <p className="find-user-txt">
                회원으로 등록된 아이디입니다. <br />
                해당 아이디로 로그인하고 세부 사장님을 이용하세요!
              </p>
              <Link to="/login" className="go-site-login">
                로그인
              </Link>
            </>
          ) : (
            <>
              <p className="find-user-txt">
                회원으로 등록된 아이디가 존재하지 않습니다.
              </p>
              <Link to="/signup" className="go-site-login">
                회원가입
              </Link>
            </>
          )}

          <button type="button" className="before-find" onClick={findId}>
            다시 확인
          </button>
        </>
      )}
    </section>
  );
}
