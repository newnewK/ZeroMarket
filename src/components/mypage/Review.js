export default function Review() {
  return (
    <section className="review-wrap">
      {/* 자신의 마이페이지 && 누군가 자신의 후기를 남겼을 경우 && 거래 완료한 후 후기를 안남겼을 경우 */}
      <div className="popup-wrap">
        <div className="review-popup">
          <p className="tit">XX님과의 거래후기를 남겨주세요.</p>
          <div className="btn-wrap">
            <button type="button">후기 남기기</button>
            <button type="button">후기 건너뛰기</button>
          </div>
        </div>
      </div>

      <div className="review-list-wrap">
        <ul>
          <li>
            <div className="user-img">
              <div className="img-inner">
                <span className="screen-out">XX님의 프로필 이미지</span>
              </div>
            </div>
            <div className="user-info">
              <p className="name">닉네임</p>
              <span className="review">리뷰</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
