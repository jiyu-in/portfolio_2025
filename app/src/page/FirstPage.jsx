import React, { useEffect } from "react";
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import sampleVideo from "../assets/videos/sampleVideo.MOV"; 
import { RotateText } from '../style/Keyframes';

const Root = styled.div`
    position:relative;
`;

const Container = styled.div`
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
`;

const TextBox = styled.div`
    font-size: 2.25rem;
    font-weight: 100;
    text-align: center;
    line-height: 1.45;
    color:#fff;
`;

const Circle = styled.div`
    width:240px;
    height:240px;
    position:absolute;
    z-index:99;
    right:calc(50% - 120px);
    top:calc(45% - 120px);
    display:flex;
    align-items:center;
    font-size: 0.813rem;
    color:#c8fe26;//#ff8cac
    animation: ${RotateText} 20s linear infinite;
`

const CircleText = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:120px;
`;

const VideoStyled = styled.video`
    width:180px;
    height:180px;
    overflow: hidden;
    border-radius: 180px;
    object-fit: cover;
    position:absolute;
    z-index:99;
    right:calc(50% - 90px);
    top:calc(45% - 90px);
    /* transform: translate(-50%, -50%); */
`;

function FirstPage() {
    useEffect(() => {
        AOS.init(
        );
    },[])
    const items = [ "U", "I", "&", "U", "X", "","D", "E", "S", "I", "G", "N", "", "-", "", "P", "U", "B", "L", "I", "S", "H", "E", "R", "", "-","",];

    return (
    <Root>
        <Container>
            <TextBox>
                다양한 프로젝트<br/>
                전문성과 기술<br/>
                사용자 중심 혁신적인 웹 경험을 제공
            </TextBox>
        </Container>
        <div>
            <Circle>
                {items.map((item, i) => {
                    return (
                        <CircleText key={i}
                            style={{
                                transform: `rotate(${i * 13.5}deg)`,
                                transformOrigin: "0 120px",
                            }}
                        >
                            {item}
                        </CircleText>
                    )
                })}
            </Circle>
            <VideoStyled autoPlay loop muted playsInline>
                <source src={sampleVideo} type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
            </VideoStyled>
        </div>
    </Root>
    );
}

export default FirstPage;