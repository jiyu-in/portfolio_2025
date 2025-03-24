import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import AnimationFlower from "../assets/lottie/AnimationFlower4.json";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #171717;
  overflow: hidden;
`;

const Slogan = styled.div`
  /* font-family: "IropkeBatang", "Iropke Batang",serif; */
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffffde;
  white-space: nowrap;
  padding-bottom:16px;
  @media (max-width: 640px) {
        font-size: 1.5rem;
  }
  @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #91afc0;//#c8fe26;
  /* background: linear-gradient(90deg, rgba(200,254,38,1) 0%, rgba(39,146,192,1) 100%); */
  width: ${(props) => props.width}%;
  transition: width 0.2s ease-in-out;
  &::after{
    content: "";
    background-image: url();
  }
`;

const LottieBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.4;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;


const SplashScreen = ({ onFinish = () => {} }) => {
  const sloganText = "디플리셔(Designer + Publisher)";//"한 픽셀의 차이가 사용자 경험을 바꿉니다"//손끝에서 탄생하는 새로운 연결
  const [displayedText, setDisplayedText] = useState("");
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const effectStarted = useRef(false);

  useEffect(() => {
    if (effectStarted.current) return;
    effectStarted.current = true;

    intervalRef.current = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < sloganText.length) {
          const newText = sloganText.slice(0, prev.length + 1);
          const newProgress = ((newText.length / sloganText.length) * 100).toFixed(0);
          setProgress(Number(newProgress));
          return newText;
        } else {
          clearInterval(intervalRef.current);
          setTimeout(() => onFinish(), 1000);
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(intervalRef.current);
  }, [onFinish, sloganText]);

  return (
    <Screen>
      <Slogan>{displayedText}</Slogan>
      <ProgressBarContainer>
        <LottieBox>
          <Lottie animationData={AnimationFlower} loop={true} />
        </LottieBox>
        <ProgressBar width={progress} />
      </ProgressBarContainer>
    </Screen>
  );
};

export default SplashScreen;
