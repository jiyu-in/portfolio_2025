import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
    position: relative;
`;

const Object = styled.div`
    position: fixed;
    bottom: 34px;
    left:0;
    transition: left 0.1s ease-out;
`;

const Connection = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid #ffffff;
    background-color: transparent;
    border-radius: 0%;
    transition: all 0.3s ease;
`;

function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(1); // 0 방지를 위해 초기값 1
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

    // 전체 페이지 스크롤 비율 (0 ~ 1)
    const scrollPercentage = Math.min(scrollY / scrollHeight, 1);

    // <Connection> 요소의 너비와 <Object>의 padding-left
    const connectionWidth = 48; // px
    const objectPaddingLeft = 34; // px
    // 최대 이동 거리: 창의 너비 - (paddingLeft + Connection의 width)
    const maxLeft = windowWidth - (connectionWidth + objectPaddingLeft);

    // 스크롤 비율에 따라 이동 (최대 maxLeft까지)
    const objectX = maxLeft * scrollPercentage;

    // 스크롤 비율에 따라 borderRadius 계산 (50% 이전은 네모, 이후 점점 원으로 변화)
    const borderRadius = scrollPercentage < 0.5 ? 0 : (scrollPercentage - 0.5) * 100;



    // 스크롤 위치에 따라 배경색과 보더 색 변경
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
            <Object style={{ left: objectX }}>
                <Connection
                    style={{
                        borderRadius: `${borderRadius}%`,
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                        borderWidth: borderColor === "transparent" ? "0px" : "1px",
                    }}
                />
            </Object>
        </Root>
    );
}

export default Footer;
