import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import sampleVideo from "../assets/videos/sampleVideo.MOV"; 
import { RotateText } from "../style/Keyframes";
import { ReactComponent as NotionLogo } from "../assets/images/notion-logo-b.svg"; 

const Root = styled.div`
    position:fixed;
    right: 10px;
    bottom: 16px;
`;

const Relative = styled.div`
    position:relative;
`;

const Circle = styled.div`
    width:84px;
    height:84px;
    position:absolute;
    z-index:99;
    right: 50%;
    bottom: 50%;
    display:flex;
    align-items:center;
    font-size: 0.75rem;
    color:#fff;//#ff8cac //#c8fe26;
    animation: ${RotateText} 20s linear infinite;
`

const CircleText = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:42px;
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
`;

const LinkStyled = styled.a`
    width:48px;
    height:48px;
    position:absolute;
    right: calc(50% + 18px);
    top: calc(50% - 66px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff66;
    border-radius: 48px;
    overflow: hidden;
    z-index:99;
`;


function CircleComponent() {
    useEffect(() => {
        AOS.init(
        );
    },[])
    const items = [ "U", "I", "&", "U", "X", "","D", "E", "S", "I", "G", "N", "", "-", "", "P", "U", "B", "L", "I", "S", "H", "E", "R", "", "-","",];

    return (
        <Root>
            <Relative>
            <Circle>
                {items.map((item, i) => {
                    return (
                        <CircleText key={i}
                            style={{
                                transform: `rotate(${i * 13.5}deg)`,
                                transformOrigin: "0 42px",
                            }}
                        >
                            {item}
                        </CircleText>
                    )
                })}
            </Circle>
            {/* <VideoStyled autoPlay loop muted playsInline >
                <source src={sampleVideo} type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
            </VideoStyled> */}
            <LinkStyled href="https://sumptuous-amaryllis-ad1.notion.site/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df?pvs=4" target="_blank"><NotionLogo/></LinkStyled>
            </Relative>
        </Root>
    );
}

export default CircleComponent;