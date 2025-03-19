import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled, {keyframes} from 'styled-components';
import { FlexCenter } from '../style/Styled';
import Lottie from "lottie-react";
import LottieTriangle from "../assets/lottie/AnimationTriangle.json"; 
import { ReactComponent as NotionLogo } from "../assets/images/notion-logo.svg"; 
import { ReactComponent as GithubLogo } from "../assets/images/github-logo.svg"; 

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

const TitleBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    z-index: 1;
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

const Wrap = styled(FlexCenter)`
    position: relative;
    flex-direction: column;
    width: 100%;
    min-height: 36vh;
    margin: 40px auto;
    background-color: #00000029;
    backdrop-filter: blur(2px);
    overflow: hidden;
`;

const LottieStyled = styled(Lottie)`
    width: 420px;
    position: absolute;
    right: -120px;
    bottom: -26%;
    & path{
        fill:#ffffff11;
        stroke: #ffffff1a;
        stroke-width:1px;
    }
    
`;

const BoxStyle = styled(motion.div)`
    width: 65%;
    color:#fff;
    word-break: keep-all;
    & p{
        color:#eeeeee;
        font-size:0.935rem;
        line-height: 1.45;
    }
`;

const Point = styled.span`
    color: #c8fe26;
`;

const GreenPoint = styled.span`
    color: #c8fe26;
    background: #c8fe26;
    color: #333;
    font-size: 0.813rem;
    font-weight: 700;
    padding: 0px 3px;
`;

const ButtonGroup = styled.div`
    display: inline-flex;
    margin-top: 1rem;
    padding-top: 2rem;
    border-top: 1px solid #fff;
    gap: 1.5rem;
    & svg{
        width: 20px;
        height: 20px;
    }
`;



export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 70%", "start 30%"], 
        }); 
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [2, 1.5, 1]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [50, 25, 1]);

return (
    <Root>
        <MaskBg/>
        <TitleBox ref={ref}>
            <TitleText
                style={{ opacity, scale }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} 
            >
                UI&UX Designer | Web publisher
            </TitleText>
            <SubText  style={{ opacity }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }} >
            : 창의적인 UI/UX 디자인과 웹 퍼블리싱 전문성으로, 사용자 중심의 혁신적인 웹 경험을 제공합니다.
            </SubText>
        </TitleBox>
        <Wrap ref={ref}>
            <LottieStyled animationData={LottieTriangle} loop={true} />
            <BoxStyle style={{ opacity, x }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
                <p><GreenPoint>UI/UX 디자이너</GreenPoint> 및 <GreenPoint>퍼블리셔</GreenPoint>로서
                다양한 경험을 바탕으로 실력을 쌓고, 기술과 디자인을 결합한 창의적인 웹 애플리케이션을 만드는 데 집중하고 있습니다.</p>
                <p><Point>Adobe Photoshop</Point>부터 디자인과 프로토타이핑이 가능한 <Point>Figma</Point>까지 다양한 디자인 도구를 능숙하게 다루며, 
                웹 표준과 접근성을 고려한 시멘틱 <Point>HTML/CSS </Point>마크업을 바탕으로 <Point>React</Point> 환경에서 퍼블리싱 작업이 가능합니다.</p>
                
                <ButtonGroup>
                    <a href="https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df" target="_blank"><NotionLogo/></a>
                    <a href="https://github.com/jiyu-in" target="_blank"><GithubLogo/></a>
                </ButtonGroup>
            </BoxStyle>
        </Wrap>
        
    </Root>
  );
}
