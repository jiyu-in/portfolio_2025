import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import styled, { keyframes }  from 'styled-components';
import { FlexCenter, FlexAlignCenter,TitleBox, TitleText, SubText } from '../style/Styled';
import Lottie from "lottie-react";
import AnimationFlower from "../assets/lottie/AnimationFlower1.json"; 
import { ReactComponent as NotionLogo } from "../assets/images/NotionLogoWhite.svg"; 
import { ReactComponent as GithubLogo } from "../assets/images/github-logo.svg"; 
import { ReactComponent as Email } from "../assets/images/MailIconWhite.svg"; 
import { ReactComponent as FlowerPoint} from '../assets/images/FlowArrow.svg';

const moveArrow = keyframes`
    0% {
    transform: translateY(-5px) rotate(-90deg);
    
    }
    50% {
    transform: translateY(5px) rotate(-90deg);
    }
    100% {
        transform: translateY(-5px) rotate(-90deg);
    }
`;


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
    //background-color: #91afc0;//#476b74;//
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
    width: 85%;
    color:#ffffff95;
    word-break: keep-all;
    & p{
        font-size:3rem;
        line-height: 1.45;
        margin: 0;
    }
    @media (min-width: 1440px) {
        & p{
        font-size:4rem;
        }
    }
    @media (max-width: 640px) {
        width: 100%;
        & p{
        font-size:2rem;
        }
    }
`;

const Point = styled.span`
    color: #fff;//#9ee6f8;
    /* font-size: 1rem; */
    font-weight: 700;
    padding: 0px 3px;
`;

const GreenPoint = styled(Point)`
    color: #ec7f49;
    background: #ffffff21;
`;

const ArrowBox = styled(FlexAlignCenter)`
    margin-top: 40px;
    gap:20px;
    & svg{
        /* transform: rotate(-90deg); */
        animation: ${moveArrow} 1.5s ease-in-out infinite alternate;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    margin: 1rem 0;
    padding-top: 1rem;
    /* border-top: 1px solid #ffffff2b; */
    gap: 2rem;
    & svg{
        width: 32px;
        height: 32px;
        opacity: 0.5;
    }
`;

const Copyright = styled.p`
    font-size: 0.875rem!important;
    color: #ffffff57!important;
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
        <Wrap ref={ref}>
            {/* <LottieStyled animationData={AnimationFlower} loop={true} /> */}
            <BoxStyle
                style={{ opacity, scale }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} 
            >
                <motion.div ref={ref}>
                <motion.p
                style={{ opacity, x }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} 
                ><Point>Adobe Photoshop</Point>부터 프로토타이핑이 가능한 <Point>Figma</Point>까지</motion.p>
                <motion.p
                style={{ opacity, x }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} 
                > <Point>HTML/CSS </Point>마크업,<br/> <Point>React</Point> 프레임워크 환경에서 퍼블리싱 </motion.p>
                </motion.div>
                <ArrowBox>
                    <FlowerPoint/>
                    더 궁금하신가요?
                </ArrowBox>
                <ButtonGroup>
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
