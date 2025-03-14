import React from "react";
import styled from 'styled-components';
import { ReactComponent as NotionLogo } from "../assets/images/notion-logo.svg"; 
import { ReactComponent as GithubLogo } from "../assets/images/github-logo.svg"; 
import { FlexColumn } from '../style/Styled';
import { TrackingInExpand } from '../style/Keyframes';

const Wrap = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:12px 24px;
    z-index: 1;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    animation: ${TrackingInExpand} 5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    color:#fff;
    & span{
        color:#333;
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    }
`;
const Copyright = styled.p`
    font-size: 0.75rem;
    color: #797979;
    margin:0 0 12px 0;
`;

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:16px;
`;


function Header() {

return (
    <Wrap>
        <Title>JY<span>N</span>DP</Title>
        <FlexColumn>
            <Copyright>© 2025. All rights reserved</Copyright>
            <Social>
                <a href="/" target="_blank"><GithubLogo/></a>
                <a href="/" target="_blank"><NotionLogo/></a>
            </Social>
        </FlexColumn>
    </Wrap>
    );
}

export default Header;