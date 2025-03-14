import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import CircleComponent from "../components/CircleComponent";
import { ReactComponent as Twist } from "../assets/images/Object-twist.svg";

const Root = styled.div`
    position:relative;
`;

const Container = styled.div`
    width: calc(100vw - 80px);
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

const TextBox = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60rem;
    height: calc(7rem* 5);
    font-size: 6.25rem;
    font-weight: 800;
    line-height: 1.1;
    color:#fff;
    overflow: hidden;
    z-index: 1;
`;

const MotionWrap = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
        & > span{
            margin-top: 1rem;
        }
`;
const Object = styled(motion.div)`
    position: fixed;
    bottom: 0;
    left:20%;
    z-index: 0;
`;

const textArray = ["다양한 프로젝트", "전문성과 기술", "사용자 중심 웹 경험 제공"];

function Visaul() {
    const textRef = useRef(null);
    const objectRef = useRef(null);

    // 🎯 TextBox 스크롤 진행도
    const { scrollYProgress: textScroll } = useScroll({
        target: textRef,
        offset: ["end 30%", "end 70%"] 
    });

    // 🎯 Object(Twist) 스크롤 진행도 (Text보다 더 늦게 반응)
    const { scrollYProgress: objectScroll } = useScroll({
        target: objectRef,
        offset: ["start 10%", "start 70%"] 
    });

    // 🎯 TextBox 애니메이션 설정
    const opacity = useTransform(textScroll, [1, 0.5, 0], [1, 1, 0]);
    const y = useTransform(textScroll, [1, 0.5, 0], ["0%", "-50%", "-100%"]);

    // 🎯 Object(Twist) 애니메이션 (조금 더 느리게 변화)
    const scale = useTransform(objectScroll, [0, 0.5, 1], [1.5, 2, 3]);
    const x = useTransform(textScroll, [1, 0.5, 0], ["0%", "-50%", "-100%"]);

    return (
        <Root>
            <Container>
                <TextBox ref={textRef}>
                    {textArray.map((text, textIndex) => (
                        <MotionWrap key={textIndex}>
                            <motion.span
                                style={{ opacity, y }}
                                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            >
                                {text}
                            </motion.span>
                        </MotionWrap>
                    ))}
                </TextBox>
            </Container>
            {/* 🎯 Object(Twist)는 따로 ref 부여해서 개별적으로 스크롤 트리거 */}
            <Object ref={objectRef} style={{ opacity, scale }}>
                <Twist />
            </Object>
        </Root>
    );
}

export default Visaul;