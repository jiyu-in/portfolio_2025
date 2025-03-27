import React, {useState} from 'react';
import styled from 'styled-components';
import { FlexCenter, FlexColumn } from '../style/Styled.jsx';
import { motion, useScroll, useTransform } from "framer-motion";


const Root = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow:hidden;
    &:hover, &:focus{
        transition: all 1s ease;
        border-radius:  0 40px;
        &>img{
            border-radius: 0 40px ;
            transition: all 0.5s ease;
        }
        & .box{
            opacity: 1;
            visibility: visible;
            transition: all 1s ease;
        }
    }
    /* &>img{
        transform: scale(1);
        filter: opacity(0.6) brightness(0.5) blur(2px);
        border: 5px solid rgba(0, 0, 0, 0.5);
        @media (max-width: 640px) {
            display: none;
        }
    }
    &:hover, &:focus{
        transition: all 2s ease;
        &>img{
            display: block;
            transform: scale(0.9);
            filter: opacity(0.6) brightness(1) blur(0px);
            transition: all 2s ease;
        }
        & .box{
            display: flex;
            transition: all 2s ease;
        }
    } */
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BoxStyle = styled(FlexColumn)`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: #ec7f49de;
    backdrop-filter:blur(6px);
    @media (max-width: 640px) {
        /* max-width: 60vw ; */
        padding: 1rem;
    }
`;

const Category = styled.div`
    & span{
        margin:0 4px;
        /* padding:2px 4px; */
        font-size: 0.75rem;
        font-weight: 500;
        color: #4c6472;
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
        font-size: 1.5rem;
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
    justify-content:center;
    margin-bottom: 1rem;
    & span{
        font-size:0.938rem;
        font-weight: 200;
        margin: 0 6px;
        color: #ffffff;
        /* mix-blend-mode: difference;  */
    }
`;

const LinkBox = styled(FlexCenter)`
    gap:16px;
`;

const Link = styled.a`
    color: #171717;
    font-size: 0.938rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    background-color: #9ee6f8;//#91afc0;
    margin-top: 20px;
    @media (max-width: 640px) {
        font-size: 0.875rem;
        padding: 0.5rem;
    }
`;

const LinkOutline = styled(Link)`
    color: #9ee6f8;
    background-color: #d47959;
    border: 1px solid #9ee6f8; 
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
        
    </Root>
    );
}

export default ProjectList;
