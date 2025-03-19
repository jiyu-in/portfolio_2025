import React, { useEffect, useState } from "react";
import styled, {keyframes} from 'styled-components';
import ProjectList from "./ProjectList";
import { animate } from "framer-motion";


const expandContract = keyframes`
    0% { transform: rotate(-10deg) scaleX(0); }
    25% { transform: rotate(0deg) scaleX(1); }
    50% { transform: rotate(10deg) scaleX(0) }
    75% { transform: rotate(0deg) scaleX(1); }
    100% { transform: rotate(-10deg) scaleX(0) }
`;

const pendulumSwing = keyframes`
    0% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(-10deg); }
`;

const blur = keyframes`
    0% { filter: blur(4px); }
    100% { filter: blur(0); }
`;

const BackgroundBox = styled.div`
    position: fixed;
    background-color: #c8fe26;
    transition: all 0.3s ease;
    color:#fff;
    /* 
    backdrop-filter: blur(4px);
    transform-origin: bottom center;
    animation: ${expandContract} 15s infinite linear; */
    transform-origin: center center;
    animation: ${blur} 2s linear; 
`;


function Projects() {
    const [scrollY, setScrollY] = useState(0);
    const [sectionHeight, setSectionHeight] = useState(window.innerHeight * 0.8);
    
    useEffect(() => {
        const handleResize = () => setSectionHeight(window.innerHeight * 0.8);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    let barStyle = {};
    let showContent = false; // 내용 표시 여부

    if (scrollY < sectionHeight) {
        console.log("작은 크기 상태 유지");
            barStyle = {
                // top: "calc(25% + 82px)",
                // left: "calc(50% - 32px)",
                bottom: "calc(45% - 4px)",
                left: "calc(50%)",
                width: "64px",
                height: "3px",
                transform: "translateX(-50%)",
                overflow: "hidden",
            }
        } else if (scrollY < sectionHeight * 2.1) {
            console.log("최대 크기!");
            barStyle = {
                top: "50%",
                left: "50%",
                width: "calc(100vw - 64px)",
                height: "calc(100vh - 240px)",
                background:"transparent",
                transform: "translate(-50%, -50%) scale(1)",
                overflow: "auto",
                animation:"none",
                zIndex:"2",
            };
            showContent = true; 
        } else {
            barStyle = {
            top: "calc(25% + 82px)",
            left: "calc(50% - 32px)",
            width: "64px",
            height: "3px",
            transform: "translate(-50%, -50%) scale(0)",
            opacity:"0",
            overflow: "hidden",
        };
    }

    return (
        <>
        <BackgroundBox style={barStyle}>
            {showContent && (
                <ProjectList/>
            )}
        </BackgroundBox>
        </>
    );
}

export default Projects;
