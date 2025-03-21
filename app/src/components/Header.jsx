import React from "react";
import styled from 'styled-components';
import { ReactComponent as LogoDP } from "../assets/images/LogoDP.svg"; 

const Logo = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:12px 24px;
    z-index: 1;
    @media (max-width: 640px) {
        & svg{
            width: 32px;
        }
    }
`;



function Header() {

return (
    <Logo><LogoDP/></Logo>
    );
}

export default Header;