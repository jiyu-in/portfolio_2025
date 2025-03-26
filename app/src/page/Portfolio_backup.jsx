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
      const scale = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [2, 1.5, 1, 1]);

  
  return (
    <Root>
      <Wrap>
        <GridBackground/>
        <TitleBox ref={ref}>
          <TitleText
              style={{ opacity, scale }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} 
          >
            실력으로 쌓은 중요 프로젝트를 소개합니다.
          </TitleText>
          {/* <SubText  
            style={{ opacity }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} >
                SI에서 쌓은 실력으로 가상화폐거래소, 비대면 교육관리까지의 중요 프로젝트를 소개합니다.
          </SubText> */}
        </TitleBox>
        <ProjectList />
      </Wrap>
    </Root>
  );
}

export default Portfolio;
