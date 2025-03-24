import React, {useState} from 'react';
import styled from 'styled-components';
import { FlexCenter, FlexColumn } from '../style/Styled.jsx';
import { motion, useScroll, useTransform } from "framer-motion";


const Root = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow:hidden;
    transition: all 0.5s ease;
    &>img{
        transform: scale(1.2);
        filter: opacity(0.6) brightness(1) blur(0px);
        border: 5px solid rgba(0, 0, 0, 0.5);
        /* @media (max-width: 640px) {
            display: none;
        } */
    }
    &:hover, &:focus{
        transition: all 2s ease;
        &>img{
            display: block;
            transform: scale(1);
            filter: opacity(0.6) brightness(0.5) blur(2px);
            transition: all 2s ease;
        }
        & .box{
            display: flex;
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
        color: #ec7f49;
        /* border-bottom:1px solid #ec7f49; */
    }
`;
const Title = styled.div`
    font-size:1.75rem;
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
    color:#ffffff;
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
    filter: brightness(0.8);
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

const LinkBox = styled(FlexCenter)`
    gap:16px;
`;

const Link = styled.a`
    color: #171717;
    font-size: 0.875rem;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    background-color: #91afc0;
    margin-top: 20px;
    /* border-bottom: 1px solid #91afc0; 
     box-shadow: 1px 1px 12px #91afc0; */
     @media (max-width: 640px) {
        padding: 0.5rem;
    }
`;

const LinkOutline = styled(Link)`
    color: #91afc0;
    background-color: transparent;
    border: 1px solid #91afc0; 
    /* box-shadow: 1px 1px 12px #91afc0;  */
`;

const BoxStyle = styled(FlexColumn)`
    display: none;
    align-items: center;
    padding: 40px;
    border: 1px dashed #a7df00;
    background: #0000007a;
    @media (max-width: 640px) {
        max-width: 60vw ;
        padding: 1rem;
    }
`;


function ProjectList({ title, date, skills, des, category, img, url, page, opacity, translateX }) {

    const handleClick = (url) => {
        window.open(url, '_blank');
    };
    
    return (
    <Root 
        style={{ opacity, translateX }}
        transition={{ type: "object", stiffness: 50, damping: 15 }}
        // onClick={() => handleClick(url)}
    >
        <BgImage src={process.env.PUBLIC_URL + img} alt={title} />
        <Wrap>
            <BoxStyle className="box">
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
                <LinkBox>
                    <Link href={url}> 자세히 보기</Link>
                    {page && <LinkOutline href={page}> 사이트 보기</LinkOutline>}
                </LinkBox>
            </BoxStyle>
        </Wrap>
    </Root>
    );
}

export default ProjectList;
