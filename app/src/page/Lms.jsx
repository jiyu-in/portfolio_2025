import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlobalStyle = createGlobalStyle`
    body {
        background: #dfe6e9;
        color: #2d3436;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;

const Root = styled.div`
    background: #dfe6e9;
    color: #2d3436;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
`;

const Keyhole = styled.span`
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: #fdcb6e;
    clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
    z-index: 1;
`;

const Arrow = styled.span`
    position: absolute;
    top: 72.5vh;
    left: 50%;
    z-index: 2;
    animation: float 1s ease-in-out infinite alternate both;

    svg {
        transform: rotate(90deg);
        stroke: #2d3436;
        width: 2rem;
        margin-left: -1rem;
        height: auto;
    }

    @keyframes float {
        from {
        transform: translateY(-50%);
        }
        to {
        transform: translateY(50%);
        }
    }
`;

const Main = styled.main``;

const Section = styled.section`
    figure {
        position: relative;
        left: 50%;
        width: 100vw;
        transform: translateX(-50%);
        margin: 0 0 1em 0;

        img {
        width: 100%;
        object-fit: cover;
        min-height: 100vh;
        }
    }
`;

const Content = styled.div`
    margin: 0 auto;
`;

const Lms = () => {
    useEffect(() => {
        const isAnimationOk = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
        ).matches;

        if (isAnimationOk) {
        gsap.fromTo(
            ".keyhole",
            {
                clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                
            },
            {
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            scrollTrigger: {
                trigger: ".primary",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                markers: false
            },
            }
        );
        gsap.to(".arrow", {
			opacity: 0,
			scrollTrigger: {
				trigger: ".section--primary",
				start: "top top",
      		    end: "+=200",
				scrub: true,
			}
		});
    
    }
    }, []);

    return (
        <Root>
        <GlobalStyle />
        <Keyhole className="keyhole" aria-hidden="true" />
        <Arrow className="arrow" aria-hidden="true">
            <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-5 -5 30 30"
            >
            <path
                d="M 0 10 H 20 L 10 0 M 20 10 L 10 20"
                strokeWidth="6"
                strokeLinecap="square"
                strokeLinejoin="round"
            ></path>
            </svg>
        </Arrow>

        <Main>
            <Section className="primary">
            <Content>
                <figure>
                <img
                    src="https://picsum.photos/id/315/1600/1600"
                    alt="placeholder"
                    width="1600"
                    height="1600"
                />
                </figure>
                <h1>At vero eos et accusamus.</h1>
                <p>
                Cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia. Corrupti quos dolores et quas molestias
                excepturi sint occaecati.
                </p>
                <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam. Et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque.
                </p>
            </Content>
            </Section>
            </Main>
        </Root>
    );
};

export default Lms;
