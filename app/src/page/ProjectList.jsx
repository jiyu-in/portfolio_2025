import React, {useState} from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../style/Styled.jsx';
import { motion, useScroll, useTransform } from "framer-motion";


const Root = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow:hidden;
    transition: all 0.5s ease;
    &>img{
        display: none;
        transform: scale(1);
        filter: brightness(0.3);
    }
    &:hover, &:focus{
        filter: blur(0px) brightness(1);
        &>img{
            display: block;
            transform: scale(1.2);
            transition: all 2s ease;
        }
    }
`;
const Wrap = styled(FlexCenter)`
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding:0 2.5rem;
    margin:0 auto;
    @media (max-width: 640px) {
        padding:0 1em;
    }
`;

const Category = styled.div`
    & span{
        margin:0 4px;
        /* padding:2px 4px; */
        font-size: 0.75rem;
        font-weight: 500;
        color: #c8fe26;
        border-bottom:1px solid #c8fe26;
    }
`;
const Title = styled.div`
    font-family: "IropkeBatang", "Iropke Batang",serif;
    font-size:1.5rem;
    font-weight: bold;
    margin:0.5rem 0 0.6rem;
    text-align: center;
    word-break: keep-all;
    @media (max-width: 640px) {
        font-size: 1.125rem;
    }
`;
const DateText = styled.div``; 
const Description = styled.div`
    font-size:0.875rem;
    color:#ffffff66;
    @media (max-width: 640px) {
        display: none;
    }
`;
const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    & span{
        font-size:0.938rem;
        font-weight: 200;
        margin: 0 6px;
        color: #dbdbdb;
        mix-blend-mode: difference; 
    }
`;
const BgImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.7);
`;

const VideoStyled = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.5);
`;


function ProjectList({ title, date, skills, des, category, img, url, opacity, translateX }) {

    const handleClick = (url) => {
        window.open(url, '_blank');
    };
    
    return (
    <Root 
        style={{ opacity, translateX }}
        transition={{ type: "object", stiffness: 50, damping: 15 }}
        onClick={() => handleClick(url)}
    >
        <BgImage src={img} alt={title} />
        <Wrap>
            <Category>
            {category.map((item, index) => (
                <span key={index}>{item}</span>
            ))}  
            </Category>
            <Title>{title}</Title>
            {/* <DateText>{date}</DateText> */}
            <Skills>
                {skills.map((skill, index) => (
                <span key={index}>#{skill}</span>
                ))}
            </Skills>
            <Description>{des}</Description>
        </Wrap>
    </Root>
    );
}

export default ProjectList;
