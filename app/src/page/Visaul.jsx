import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60rem;
  height: calc(6rem * 5);
  font-size: 5.25rem;
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  overflow: hidden;
  z-index: 1;
`;

const Object = styled.div`
  position: fixed;
  bottom: 42px;
  right: 0%;
  padding-left: 13px;
  z-index: 0;
  transition: top 0.1s ease-out;
`;

const Connection = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #ffffff;
  background-color: transparent;
  border-radius: 0%;
  transition: all 0.3s ease;
`;

const textArray = ["디지털과 아날로그", "나는 그 사이를 연결한다."];

function Visual() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(1); // 초기값을 1로 설정 (0 방지)

  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    updateScrollHeight(); // 초기 마운트 시 값 설정
    window.addEventListener("resize", updateScrollHeight); // 화면 크기 변경 시 업데이트

    return () => {
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 전체 페이지의 스크롤 비율 (0 ~ 1 사이)
  const scrollPercentage = Math.min(scrollY / scrollHeight, 1);

  // 도형이 스크롤에 따라 왼쪽에서 오른쪽으로 이동
  const objectX = Math.min(scrollY / 3, window.innerWidth);

  // 도형이 50% 스크롤까지는 네모 유지, 이후 점점 원으로 변함
  const borderRadius = scrollPercentage < 0.5 ? 0 : (scrollPercentage - 0.5) * 100;

  // 배경색과 보더 색을 스크롤 위치에 따라 변경
  let backgroundColor;
  let borderColor;

  if (scrollPercentage < 0.3) {
    backgroundColor = `rgba(255, 255, 255, ${scrollPercentage * 3})`;
    borderColor = `#fff`;
  } else if (scrollPercentage >= 0.3 && scrollPercentage < 0.75) {
    backgroundColor = `#fff`;
    borderColor = `#fff`;
  } else {
    backgroundColor = `#c8fe26`;
    borderColor = `transparent`;
  }

  return (
    <Root>
      <Container>
        <TextBox>
          {textArray.map((text, textIndex) => (
            <div key={textIndex}>{text}</div>
          ))}
        </TextBox>
      </Container>

      {/* 🎯 Object 위치 변경: 스크롤에 따라 도형이 왼쪽에서 오른쪽으로 이동 */}
      <Object style={{ left: objectX }}>
        <Connection
          style={{
            borderRadius: `${borderRadius}%`,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: borderColor === "transparent" ? "0px" : "1px",
          }}
        />
      </Object>
    </Root>
  );
}

export default Visual;
