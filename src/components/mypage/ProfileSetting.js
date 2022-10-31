import { useRef, useState } from "react";
import "./../../css/ProfileSetting.modules.scss";

export default function ProfileSetting() {
  //프로필 사진
  const [userImg, setUserImg] = useState("/img/profile.webp");
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState();
  console.log(userImg);
  const hiddenFileInput = useRef(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setUserImg(e.target.files[0]);
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <main className="profile-setting-wrap">
      <form className="setting-inner">
        <p className="sub-tit">제로마켓 프로필을 작성해보세요!</p>
        <h2 className="title">프로필 정보 설정</h2>

        <div className="user-img">
          <p className="profile-tit">프로필 사진</p>
          <div className="img-file">
            <input
              type="file"
              id="userImg"
              ref={hiddenFileInput}
              accept="image/*"
              onChange={handleChange}
              name="load-profile-img"
            />
            <label className="upload-img" htmlFor="userImg">
              <span className="screen-out">XX님의 프로필 이미지</span>
              <div
                className="img"
                style={{ backgroundImage: `url(${userImg})` }}
              ></div>
            </label>
          </div>

          <div className="img-btn">
            {userImg === "/img/profile.webp" ? (
              <button
                type="button"
                onClick={() => {
                  hiddenFileInput.current.click();
                }}
              >
                프로필 사진 등록
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    hiddenFileInput.current.click();
                  }}
                >
                  바꾸기
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUserImg("/img/profile.webp");
                  }}
                >
                  삭제
                </button>
              </>
            )}
          </div>
        </div>
        <div className="user-info-form">
          <div className="field">
            <label>닉네임</label>
            <input type="text" placeholder="닉네임 입력" />
          </div>
          <div className="field">
            <label>소개</label>
            <textarea placeholder="간단한 한 마디로 나를 소개해주세요." />
          </div>
        </div>
        <div className="btn-wrap">
          <button type="button" className="cancel-btn">
            취소
          </button>
          <button type="button" className="submit-btn">
            완료
          </button>
        </div>
      </form>
    </main>
  );
}
