import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { FlexCenter, GridBackground, TitleBox, TitleText, SubText } from '../style/Styled';
import Project from "./Project";

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

const TitleTextStyled = styled(TitleText)`
  font-size: 5rem;
  @media (max-width: 640px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

const SubTextStyled = styled(SubText)`
  margin-top: 0;
  
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
          <TitleTextStyled
              style={{ opacity, scale }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} 
          >
            My works
            {/* → */}
          </TitleTextStyled>
          <SubTextStyled  
            style={{ opacity }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} >
                실력으로 쌓은 중요 프로젝트 들여다보기
          </SubTextStyled>
        </TitleBox>
        <Project />
      </Wrap>
    </Root>
  );
}

export default Portfolio;
