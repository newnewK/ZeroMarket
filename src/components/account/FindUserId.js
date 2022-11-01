import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Find.modules.scss";

export default function FindUserId() {
  let [comfirm, setComfirm] = useState(false);

  // 이름
  let [userName, setUserName] = useState("");
  let [nameWng, setNameWng] = useState(false);
  let changeName = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    let targetName = e.target.value;
    targetName = targetName.replace(regexp, "");

    setUserName(targetName);
    if (userName !== "") {
      setNameWng(false);
    }
  };

  // 핸드폰 번호
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

  // 아이디 확인
  let comfirmId = () => {
    if (userName === "") {
      setNameWng(true);
      if (cellN.length < 11) {
        setCellWng(true);
      }
    } else if (cellN.length < 11) {
      setCellWng(true);
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
            가입하셨던 회원님의 이름과 핸드폰번호를 입력하시면,
            <br />
            아이디를 알려드립니다.
          </p>
          <form className="user-form">
            <div className={`field ${nameWng ? "wngField" : ""}`}>
              <input
                type="text"
                placeholder="이름"
                value={userName}
                onChange={changeName}
              />
            </div>
            <div className={`field ${cellWng ? "wngField" : ""}`}>
              <input
                type="text"
                placeholder="핸드폰번호"
                name="onlyNumber"
                maxLength="11"
                value={cellN}
                onChange={changeCellN}
              />
              <em>
                제로마켓에 등록되지 않은 회원정보이거나, 이름 또는 번호가
                회원정보와 일치하지 않습니다.
              </em>
            </div>

            <button
              type="button"
              name="id-submit"
              className={`user-submit-btn ${
                cellN.length >= 11 && cellN !== "" ? "" : "emptied-btn"
              }`}
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
                해당 아이디로 로그인하고 제로 마켓을 이용하세요!
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
