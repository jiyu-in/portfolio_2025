import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { FlexCenter, GridBackground } from '../style/Styled';
import ProjectList from "./Project";


const Root = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrap = styled(FlexCenter)`
    flex-direction: column;
`;

const TitleBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
`;

const TitleText = styled(motion.span)`
  font-family: "Iropke Batang",serif;
`;

const SubText = styled(motion.span)`
  font-size: 1rem;
  font-weight: 300;
  color:#858585;
  margin-top: 1rem;
`;


function Portfolio() {
      const ref = useRef(null);
      const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 70%", "start 30%"], 
      }); 
      const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
      const scale = useTransform(scrollYProgress, [0, 0.5, 1], [3, 1.5, 1]);

  
  return (
    <Root>
      <Wrap>
        <GridBackground/>
        <TitleBox ref={ref}>
          <TitleText
              style={{ opacity, scale }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} 
          >
              포트폴리오
          </TitleText>
          <SubText  
            style={{ opacity }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} >
          : 사용자 중심의 UI/UX 디자인과 그것을 구현한 프로젝트를 소개합니다.
          </SubText>
        </TitleBox>
        <ProjectList />
      </Wrap>
    </Root>
  );
}

export default Portfolio;
