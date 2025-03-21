import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
    position: relative;
`;

const Object = styled.div`
    position: fixed;
    bottom: 34px;
    left: 0;
    transition: left 0.1s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Connection = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid #ffffff;
    background-color: transparent;
    border-radius: 0%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: -0.5px;
    color: #333;
`;

function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateScrollHeight = () => {
            setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
        };

        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        updateScrollHeight();
        updateWindowWidth();
        window.addEventListener("resize", updateScrollHeight);
        window.addEventListener("resize", updateWindowWidth);

        return () => {
            window.removeEventListener("resize", updateScrollHeight);
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollPercentage = Math.min(scrollY / scrollHeight, 1);
    const scrollValue = Math.round(scrollPercentage * 100); 
    const scrollText = scrollPercentage < 0.4
    ? "Start" 
    : scrollPercentage < 0.7
    ? "Portfolio"
    : "About"; 

    const textColor = scrollPercentage < 0.4 
    ? "#fff" 
    : scrollPercentage < 0.7
    ? "#333" 
    : scrollPercentage < 0.97 
    ? "#333" 
    : "transparent"; 


    const connectionWidth = 48;
    const objectPaddingLeft = 34;
    const maxLeft = windowWidth - (connectionWidth + objectPaddingLeft) - 24; // 🔹 끝나는 지점 -20px 적용
    const objectX = maxLeft * scrollPercentage + 24; // 🔹 시작 지점 +20px 적용
    const borderRadius = scrollPercentage < 0.5 ? 0 : (scrollPercentage - 0.5) * 100;

    let backgroundColor;
    let borderColor;

    if (scrollPercentage < 0.3) {
        backgroundColor = `rgba(255, 255, 255, ${scrollPercentage * 3})`;
        borderColor = `#fff`;
    } else if (scrollPercentage >= 0.3 && scrollPercentage < 0.75) {
        backgroundColor = `#fff`;
        borderColor = `#fff`;
    } else {
        backgroundColor = `#c8fe26`;
        borderColor = `transparent`;
    }

    return (
        <Root>
            <Object style={{ left: objectX}}>
                <Connection
                    style={{
                        borderRadius: `${borderRadius}%`,
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                        borderWidth: borderColor === "transparent" ? "0px" : "1px",
                        color: textColor,  // ✅ 글자 색 변경
                    }}
                >
                    {scrollText}
                </Connection>
            </Object>
        </Root>
    );
}

export default Footer;
