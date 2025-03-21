import { motion } from "framer-motion";
import styled from "styled-components";
import Lottie from "lottie-react";
import LottieGlobal from "../assets/lottie/AnimationObject.json";

const Root = styled.div`
  position: relative;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  align-content: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const Wrap = styled(motion.div)`
  position: relative;
  @media (max-width: 640px) {
        padding:0 32px;
    }
`;

const Slogan = styled.div`
  font-family: "IropkeBatang", "Iropke Batang",serif;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0.5rem;
  color: #fff;
  text-shadow: 1px 4px 0px #000000;
  transition: text-shadow 0.5s ease;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  color:#858585;
  margin:3rem 0 0 1rem;
  word-break: keep-all;

  @media (max-width: 640px) {
    font-size: 0.813rem;
    margin:1rem 0 0 1rem;
  }
`;


const LottieStyledGlobal = styled(Lottie)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 65vw;
  height: 95vh;
  opacity: 0.2;
  transform: translate(-50%, -50%);
  & path {
    stroke: #ffffff8c;
    stroke-width: 2px;
  }
`;

function Visual() {

  return (
    <Root>
      <Container>
        <LottieStyledGlobal animationData={LottieGlobal} loop={true} />
        <Wrap
          initial={{filter:'blur(12px)' }}
          animate={{ filter:'blur(0px)'}}
          transition={{ ease: "easeIn", duration: 1.5,}}
        >
          <Slogan>디지털과 아날로그 <br/> 나는 그 사이를 연결한다.</Slogan>
          <SubText>: 디지털과 아날로그의 장점을 결합하여 새로운 가치를 창출하는 역할을 합니다.</SubText>
        </Wrap>
      </Container>
    </Root>
  );
}

export default Visual;
