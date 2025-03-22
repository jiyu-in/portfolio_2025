import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { FlexCenter, GridBackground, TitleBox, TitleText, SubText } from '../style/Styled';
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
    @media (max-width: 640px) {
        padding:0 32px;
    }
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
            Project
          </TitleText>
          <SubText  
            style={{ opacity }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} >
                SI에서 쌓은 실력으로 가상화폐거래소, 비대면 교육관리까지의 중요 프로젝트를 소개합니다.
              {/* 정보 제공의 명확성, 학과 일정관리 등 대시보드를 통해 사용자 경험을 향상시키는 작업 교육관련 컨텐츠 중심의 웹 페이지를 구현하였고,
              가상화폐거래소 사용자에게 쉬운 탐색 경험과 심미적인 UI를 제공하는 작업을 했습니다. */}
          </SubText>
        </TitleBox>
        <ProjectList />
      </Wrap>
    </Root>
  );
}

export default Portfolio;
