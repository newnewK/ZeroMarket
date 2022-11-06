import { useState } from "react";
import "./../css/WriteProduct.modules.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function WriteProduct({ handleScrollNon, hadndleScroll }) {
  //사진 - 경고, 이미지 다중 업로드, 스크롤
  let [wngImg, setWngImg] = useState(false);
  // ## 이미지 다중 업로드 - 이미지 보관, input(file), input 변경, 이미지 삭제
  let [imgItems, setImgItems] = useState([]);
  const hiddenFileInput = useRef(null);
  let handleChange = (e) => {
    const imgList = e.target.files;
    let copyImgItems = [...imgItems];

    for (let i = 0; i < imgList.length; i++) {
      let currentImgUrl = URL.createObjectURL(imgList[i]);
      copyImgItems.push(currentImgUrl);
      setWngImg(false);
    }

    if (copyImgItems.length > 10) {
      copyImgItems = copyImgItems.slice(0, 10);
    }

    setImgItems(copyImgItems);
  };
  let handleDelte = (img) => {
    let copyItems = [...imgItems];
    let filter = copyItems.filter((copyItems) => copyItems !== img);
    setImgItems(filter);
  };

  // ## 스크롤 - ul Dom, 드래그 여부, 시작 x좌표, 드래그 시작, 드래그 끝, 마우스 떠남,
  let scrollRef = useRef(null);
  let [isDrag, setIsDrag] = useState(false);
  let [startX, setStartX] = useState();
  let onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  let onDragEnd = () => {
    setIsDrag(false);
  };
  let onDragMove = (e) => {
    if (isDrag) {
      let { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  let throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  let onThrottleDragMove = throttle(onDragMove);

  //제목 - 초기값, 경고, value, blur
  let [title, setTitle] = useState("");
  let [titLength, setTitLength] = useState(40);
  let [wngTitle, setWngTitle] = useState(false);
  let changeTit = (e) => {
    setTitle(e.target.value);
    let maxLength = 40;
    let titleLength = e.target.value.length;
    setTitLength(maxLength - titleLength);
    if (title === "") {
      setWngTitle(false);
    }
  };
  let bulrTit = () => {
    if (title === "") {
      setWngTitle(true);
    } else {
      setWngTitle(false);
    }
  };

  //카테고리
  let categoryList = ["카테고리 테스트1", "카테고리 테스트2"];

  //금액
  let [price, setPrice] = useState("");
  let [wngPrice, setWngPrice] = useState(false);
  let changePrice = (e) => {
    let targetValue = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1")
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    setPrice(targetValue);
    if (price === "") {
      setWngPrice(false);
    }
  };
  let blurPrice = () => {
    if (price === "") {
      setWngPrice(true);
    } else {
      setWngPrice(false);
    }
  };

  //거래방법
  let wayList = [
    { id: "meet", tit: "만남 가능" },
    { id: "parcel", tit: "택배 가능" },
  ];
  let [way, setWay] = useState([]);
  let [wngWay, setWngWay] = useState(false);
  let handleCheck = (checked, id) => {
    if (checked) {
      setWay((copy) => [...copy, id]);
      setWngWay(false);
    } else {
      setWay(way.filter((el) => el !== id));
    }
  };

  // 상세설명
  let [desc, setDesc] = useState("");
  let [wngDesc, setWngDesc] = useState(false);
  let changDesc = (e) => {
    setDesc(e.target.value);
    if (desc.length > 20) {
      setWngDesc(false);
    }
  };
  let bulrDesc = () => {
    if (desc === "" || desc.length < 20) {
      setWngDesc(true);
    } else {
      setWngDesc(false);
    }
  };

  // 완료 버튼
  let [completionM, setCompletionM] = useState(false);
  let [failM, setFailM] = useState(false);
  console.log("실패", failM);
  let submitClick = () => {
    // handleScrollNon
    if (
      imgItems.length === 0 ||
      title === "" ||
      price === "" ||
      way.length === 0 ||
      desc === "" ||
      desc.length < 20
    ) {
      if (imgItems.length === 0) {
        setWngImg(true);
      }
      if (title === "") {
        setWngTitle(true);
      }
      if (price === "") {
        setWngPrice(true);
      }
      if (way.length === 0) {
        setWngWay(true);
      }
      if (desc === "" || desc.length < 20) {
        setWngDesc(true);
      }
      setFailM(true);
      setTimeout(() => {
        setFailM(false);
      }, 3000);
    } else {
      setCompletionM(true);
      handleScrollNon();
    }
  };

  return (
    <main className={`write-item-wrap ${completionM ? "scroll-non" : ""}`}>
      <section className="write-inner">
        <h2 className="title">판매하기</h2>

        <form className="field-wrap">
          <div className="mouseOverGuide-container">
            <div className={`field ${wngImg ? "wngField" : ""}`}>
              <label>사진</label>
              <input
                type="file"
                multiple
                ref={hiddenFileInput}
                onChange={handleChange}
                accept="image/*"
              />
              <div className="product-img-wrap">
                <button
                  type="button"
                  className="upload-btn"
                  onClick={() => {
                    hiddenFileInput.current.click();
                  }}
                >
                  <span className="screen-out">이미지 업로드</span>
                  <div className="upload-info">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 20 19"
                    >
                      <path
                        className="st0"
                        d="M418.3,76.2h-23.4c-0.9,0-1.6-0.7-1.6-1.6V58.5c0-0.9,0.7-1.6,1.6-1.6h6.1l2.2-3.1h7.1l2.2,3.1h5.8
	c0.9,0,1.6,0.7,1.6,1.6v16.1C419.9,75.5,419.2,76.2,418.3,76.2z M394.9,58c-0.3,0-0.6,0.3-0.6,0.6v16.1c0,0.3,0.3,0.6,0.6,0.6h23.4
	c0.3,0,0.6-0.3,0.6-0.6V58.5c0-0.3-0.3-0.6-0.6-0.6H412l-2.2-3.1h-6.1l-2.2,3.1H394.9z"
                      />
                      <path
                        className="st0"
                        d="M406.6,72.2c-3.1,0-5.7-2.5-5.7-5.7s2.5-5.7,5.7-5.7s5.7,2.5,5.7,5.7S409.7,72.2,406.6,72.2z M406.6,61.9
	c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7S409.2,61.9,406.6,61.9z"
                      />
                      <g>
                        <path
                          className="st0"
                          d="M18.3,17.6H1.7c-0.7,0-1.3-0.6-1.3-1.3V4.9c0-0.7,0.6-1.3,1.3-1.3H6l1.6-2.2h5.2l1.6,2.2h4
		c0.7,0,1.3,0.6,1.3,1.3v11.4C19.6,17,19,17.6,18.3,17.6z M1.7,4.7c-0.1,0-0.2,0.1-0.2,0.2v11.4c0,0.1,0.1,0.2,0.2,0.2h16.6
		c0.1,0,0.2-0.1,0.2-0.2V4.9c0-0.1-0.1-0.2-0.2-0.2h-4.5l-1.6-2.2H8.1L6.5,4.7H1.7z"
                        />
                        <path
                          className="st0"
                          d="M10,14.8c-2.3,0-4.2-1.9-4.2-4.2S7.7,6.4,10,6.4s4.2,1.9,4.2,4.2S12.3,14.8,10,14.8z M10,7.5
		c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S11.7,7.5,10,7.5z"
                        />
                      </g>
                    </svg>
                    <span className="upload-number">
                      <span>{imgItems.length}</span>/10
                    </span>
                  </div>
                </button>

                <ul
                  className="img-list"
                  ref={scrollRef}
                  onMouseDown={onDragStart}
                  onMouseMove={isDrag ? onThrottleDragMove : null}
                  onMouseUp={onDragEnd}
                  onMouseLeave={onDragEnd}
                >
                  {imgItems.map((img, id) => {
                    return (
                      <li key={id}>
                        <span className="screen-out">이미지 {id + 1}</span>
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${img})` }}
                        ></div>
                        <button
                          className="delete-btn"
                          type="button"
                          onClick={() => {
                            handleDelte(img);
                          }}
                        >
                          <span className="screen-out">
                            이미지 {id + 1} 삭제
                          </span>
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
                      </li>
                    );
                  })}
                </ul>
              </div>
              <em>필수 값을 입력해주세요</em>
            </div>
            <div className="mouseOverGuide-visible">
              <p>상품의 사진은 꼼꼼하게</p>
              <span>
                상품의 손상정도, 색상 등이 잘보이도록 올려보세요.
                <br />
                회원님들과의 신뢰는 가장 중요해요!
              </span>
            </div>
          </div>
          <div
            className="mouseOverGuide-container"
            style={{ marginTop: "20px" }}
          >
            <div className={`field ${wngTitle ? "wngField" : ""}`}>
              <label>제목</label>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                maxLength="40"
                value={title}
                onChange={changeTit}
                onBlur={bulrTit}
              />
              <em>필수 항목 값을 입력해 주세요</em>
              <em className="title-length">{titLength}자 남음</em>
            </div>
            <div className="mouseOverGuide-visible">
              <p>제목은 핵심만 간결하게</p>
              <span>
                중요한 키워드는 눈에 잘 띄도록 제목 앞부분에 적는 것을 추천해요.
              </span>
            </div>
          </div>

          <div className="mouseOverGuide-container">
            <div className={`field`}>
              <label>카테고리</label>
              <div className="category-wrap">
                <select>
                  <option value="null" disabled>
                    카테고리를 선택해주세요
                  </option>
                  {categoryList.map((a, i) => {
                    return <option key={a}>{categoryList[i]}</option>;
                  })}
                </select>
                <svg
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
                </svg>
              </div>
              <em>필수 항목 값을 입력해 주세요</em>
            </div>
            <div className="mouseOverGuide-visible">
              <p>어떤 회원님과 거래하고싶나요?</p>
              <span>
                상품과 가장 잘 어울리는 카테고리를 선택해 주세요.
                <br />
                비슷한 관심사를 가진 회원님들과 만날 확률이 높아져요.
              </span>
            </div>
          </div>

          <div className="mouseOverGuide-container">
            <div className={`field ${wngPrice ? "wngField" : ""}`}>
              <label>금액</label>
              <div className="price-wrap">
                <input
                  type="text"
                  placeholder="금액을 입력해주세요"
                  value={price}
                  onChange={changePrice}
                  onBlur={blurPrice}
                />
                <span>원</span>
              </div>
              <em>필수 항목 값을 입력해 주세요</em>
            </div>
            <div className="mouseOverGuide-visible">
              <p>적절한 금액으로 설정해주세요.</p>
              <span>
                높은 금액이거나 너무 낮은 금액이면 거래가 확률이 낮아져요.
              </span>
            </div>
          </div>
          <div className="mouseOverGuide-container">
            <div className={`field ${wngWay ? "wngField" : ""}`}>
              <label>거래방법</label>
              <div className="chose-way">
                {wayList.map((a, i) => {
                  return (
                    <label key={i}>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          handleCheck(e.target.checked, wayList[i].id);
                        }}
                        checked={way.includes(wayList[i].id) ? true : false}
                      />
                      <span>{wayList[i].tit}</span>
                    </label>
                  );
                })}
              </div>
              <em>거래 방법을 선택해주세요.</em>
            </div>
            <div className="mouseOverGuide-visible">
              <p>가능한 거래 방법을 선택해주세요.</p>
              <span>만남, 택배 둘다 가능하면 다 선택해도 좋아요!</span>
            </div>
          </div>

          <div className="mouseOverGuide-container">
            <div className={`field ${wngDesc ? "wngField" : ""}`}>
              <label>상세설명</label>
              <div className="desc-box">
                <textarea
                  placeholder="상품의 상세 설명을 입력해주세요(최소 20자)"
                  className="explanation-textarea"
                  value={desc}
                  onChange={changDesc}
                  onBlur={bulrDesc}
                />
                <span>{desc.length}</span>
              </div>
              <em>
                {desc === "" ? "필수 항목 값을 입력해 주세요" : ""}
                {desc.length < 20 && desc !== ""
                  ? "20자 이상 입력해 주세요"
                  : ""}
              </em>
            </div>
            <div className="mouseOverGuide-visible">
              <p>상품의 자세한 설명을 해주세요.</p>
              <span>
                사용 회수, 손상정도 등 꼼꼼하게 적어주세요. <br />
                내용과 다르면 후기가 좋지 않을 수 있어요.
              </span>
            </div>
          </div>

          <button type="button" className="submit-btn" onClick={submitClick}>
            완료
          </button>
        </form>
      </section>
      {failM ? (
        <div className="fail-completion">입력한 정보를 다시 확인해 주세요.</div>
      ) : null}

      {completionM ? <CompletionModal hadndleScroll={hadndleScroll} /> : null}
    </main>
  );
}

function CompletionModal({ hadndleScroll }) {
  let navigate = useNavigate();

  return (
    <section className="completion-modal">
      <div className="completion-inner">
        <h2 className="tit">판매하기 등록 완료</h2>
        <p className="txt">해당 상품을 등록 완료하였습니다. </p>
        <div className="btn-wrap">
          <button type="button" className="view-btn">
            나의 상품 보기
          </button>
          <button
            type="button"
            className="submit-btn"
            onClick={() => {
              navigate("/");
              hadndleScroll();
            }}
          >
            확인
          </button>
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              navigate("/");
              hadndleScroll();
            }}
          >
            <span className="screen-out">홈으로 가기</span>
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
        </div>
      </div>
    </section>
  );
}
