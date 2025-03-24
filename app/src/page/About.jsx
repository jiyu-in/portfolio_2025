import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import styled from 'styled-components';
import { FlexCenter, TitleBox, TitleText, SubText } from '../style/Styled';
import Lottie from "lottie-react";
import LottieTriangle from "../assets/lottie/AnimationTriangle.json"; 
import AnimationFlower from "../assets/lottie/AnimationFlower1.json"; 
import { ReactComponent as NotionLogo } from "../assets/images/NotionLogoWhite.svg"; 
import { ReactComponent as GithubLogo } from "../assets/images/github-logo.svg"; 
import { ReactComponent as Email } from "../assets/images/MailIconWhite.svg"; 

const Root = styled(FlexCenter)`
    height: 100vh;
    flex-direction: column;
`;

const MaskBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: radial-gradient(#5e5e5e 1px, #5e5e5e, #333 2px);
    background-size: 20px 20px;
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 0;
`;

const TitleBoxIndex = styled(TitleBox)`
    @media (max-width: 680px) {
        padding:0 32px;
        align-items: flex-start;
    }
    z-index: 1;
`;


const Wrap = styled(FlexCenter)`
    position: relative;
    flex-direction: column;
    width: 100%;
    min-height: 36vh;
    margin: 40px auto;
    background-color: #91afc0;//#476b74;//
    backdrop-filter: blur(2px);
    overflow: hidden;
    @media (max-width: 640px) {
        padding:0 32px;
    }
`;

const LottieStyled = styled(Lottie)`
    position: absolute;
    right: 30px;
    bottom: 20px;
    width: 35%;
    opacity: 0.7;
    & path{
        fill:#ffffff11;
        stroke: #ffffff1a;
        stroke-width:1px;
    }
    @media (min-width: 1400px) {
        width: 25%;
    }
    @media (max-width: 480px) {
        width: 45%;
    }
`;

const BoxStyle = styled(motion.div)`
    width: 65%;
    color:#385869;
    word-break: keep-all;
    & p{
        color:#385869;
        font-size:0.935rem;
        line-height: 1.45;
    }
    @media (max-width: 640px) {
        width: 100%;
        /* padding:1rem 1.5rem; */
    }
`;

const Point = styled.span`
    color: #9ee6f8;//#c2a8ff;
    font-size: 0.813rem;
    font-weight: 700;
    padding: 0px 3px;
`;

const GreenPoint = styled(Point)`
    color: #fff;//#9ee6f8;
    background: #ffffff21;
`;

const ButtonGroup = styled.div`
    display: inline-flex;
    margin-top: 1rem;
    padding-top: 2rem;
    border-top: 1px solid #ffffff2b;
    gap: 1.5rem;
    & svg{
        width: 20px;
        height: 20px;
        opacity: 0.5;
    }
`;

const Copyright = styled.p`
    font-size: 0.75rem!important;
    color: #385869!important;
    margin:20px 0 12px 0;
`;


export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 70%", "start 30%"], 
        }); 
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [2, 1.5, 1, 1]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [50, 25, 1]);

return (
    <Root>
        <MaskBg/>
        <TitleBoxIndex ref={ref}>
            <TitleText
                style={{ opacity, scale }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} 
            >
                UI&UX Designer | Web publisher
            </TitleText>
            <SubText  style={{ opacity }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} >
            저는 UI/UX 디자이너이자 퍼블리셔입니다.
            </SubText>
        </TitleBoxIndex>
        <Wrap ref={ref}>
            {/* <LottieStyled animationData={AnimationFlower} loop={true} /> */}
            <BoxStyle style={{ opacity, x }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
                <p><GreenPoint>UI/UX 디자이너</GreenPoint> 및 <GreenPoint>퍼블리셔</GreenPoint>로서
                다양한 경험을 바탕으로 실력을 쌓고, 기술과 디자인을 결합한 창의적인 웹 애플리케이션을 만드는 데 집중하고 있습니다.</p>
                <p><Point>Adobe Photoshop</Point>부터 디자인과 프로토타이핑이 가능한 <Point>Figma</Point>까지 다양한 디자인 도구를 능숙하게 다루며, 
                웹 표준과 접근성을 고려한 시멘틱 <Point>HTML/CSS </Point>마크업을 바탕으로 <Point>React</Point> 환경에서 퍼블리싱 작업이 가능합니다.</p>
                
                <ButtonGroup>
                    {/* <a href="https://github.com/jiyu-in" target="_blank"><GithubLogo/></a> */}
                    <a href="mailto:jyin2205@naver.com" target="_blank"><Email/></a>
                    <a href="https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df" target="_blank"><NotionLogo/></a>
                </ButtonGroup>
                <Copyright>© 2025. All rights reserved</Copyright>
            </BoxStyle>
        </Wrap>
        <LottieStyled animationData={AnimationFlower} loop={false} />
    </Root>
  );
}
