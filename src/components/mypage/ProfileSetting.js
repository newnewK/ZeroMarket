import "./../../css/ProfileSetting.modules.scss";

export default function ProfileSetting() {
  return (
    <main className="profile-setting-wrap">
      <form className="setting-inner">
        <p className="sub-tit">제로마켓 프로필을 작성해보세요!</p>
        <h2 className="title">프로필 설정</h2>

        <div className="user-img">
          <input type="file" id="userImg" />
          <label className="user-img" htmlFor="userImg">
            <span className="screen-out">XX님의 프로필 이미지</span>
            <div className="img"></div>
          </label>
          <div className="img-btn">
            <button type="button">프로필 사진 등록</button>
            <button type="button">바꾸기</button>
            <button type="button">삭제</button>
          </div>
        </div>
        <div className="user-info-form">
          <div className="user-name">
            <label>닉네임</label>
            <input type="text" placeholder="닉네임 입력" />
          </div>
          <div className="user-name">
            <label>소개</label>
            <textarea placeholder="간단한 한 마디로 나를 소개해주세요." />
          </div>
        </div>
        <div className="btn-wrap">
          <button type="button">취소</button>
          <button type="button">완료</button>
        </div>
      </form>
    </main>
  );
}
