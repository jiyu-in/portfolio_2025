import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled, {keyframes} from 'styled-components';
import { Ifont, Cuadrado } from '../style/Styled';
import Lottie from "lottie-react";
import LottieGlobal from "../assets/lottie/AnimationDotted.json";
import { ReactComponent as NotionLogo } from "../assets/images/notion-logo.svg"; 
import { ReactComponent as GithubLogo } from "../assets/images/github-logo.svg"; 

const floating = keyframes`
    0% {transform: translateY(0);}
    50% {transform: translateY(-10px);}
    100% {transform: translateY(0);}
`;

const Root = styled.div`
    height: 100vh;
    background-color: transparent;
    background-image: radial-gradient(#5e5e5e 1px, #5e5e5e, #333 2px);
    background-size: 20px 20px;
    /* mask-image: linear-gradient(to top, rgb(0 0 0) 00%, rgb(0 0 0 / 0%) 100%); */
    /* mask: linear-gradient(to top, rgb(0 0 0) 00%, rgb(0 0 0 / 0%) 100%); */
`;

const TitleBox = styled(motion.div)`
    display: flex;
    font-size: 2.75rem;
    font-weight: bold;
    justify-content: center;
    overflow: hidden;
`;

const MaskBg = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #333;
    mask: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Contect = styled(motion.div)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const DashBox = styled(motion.div)`
    position: relative;
    padding:4rem;
    background-color: #333333c7;
    border:1px solid #888;
    overflow: hidden;
    animation: ${floating} 5s linear infinite; 
    &:hover{
        animation: none;
    }
`;

const TitleText = styled(Ifont)`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color:#fff;
    overflow: hidden;
    & p{
        margin-top:0;
        margin-bottom:2rem;
        font-size: 2rem;
        font-weight: bold;
    }
`;

const LottieStyled = styled(Lottie)`
    position: absolute;
    right: -15%;
    top: -10%;
    width: 200px;
    opacity: 0.8;
`;

const Link = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    padding:14px 16px;
    margin:0 10px;
    border: 1px solid #858585;
    border-width: 1px 0;
    color:#fff;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    &:hover{
        color:#333;
        background-color: #c8fe26;
        border-color: #c8fe26;
        transition: all 1s ease;
        & .cuadrado{
            border: 1px solid #a3a3a3;
        }
    }
    & .cuadrado{
        background: #ffffff;
        border: 1px solid #c4c4c4;
    }
`;

const FtBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    gap: 20px;
    & > span{
        color: #858585;
        font-size: 0.875rem;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    & svg{
        width: 20px;
        height: 20px;
    }
`;


const text = "포트폴리오";

export default function Contact() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "start 30%"], 
    }); 
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

return (
    <Root>
        <MaskBg/>
    <Contect ref={ref}>
        <motion.div 
            style={{ opacity}}
            transition={{ type: "spring", stiffness: 50, damping: 15 }} >
        <DashBox>
            <TitleText>
                <p>당신의 서비스,<br/> 기억에 남을 준비가 되었나요?</p>
                <LottieStyled animationData={LottieGlobal} loop={true} />
            </TitleText>
            <Link href="mailto:jyin2205@naver.com">이메일 보내기
            </Link>
            <FtBox>
                <span>아직 준비가 안되셨나요?</span>
                <ButtonGroup>
                    <a href="https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df" target="_blank"><NotionLogo/></a>
                    <a href="https://github.com/jiyu-in" target="_blank"><GithubLogo/></a>
                </ButtonGroup>
            </FtBox>
        </DashBox>
        </motion.div>
    </Contect>
        
    </Root>
  );
}
