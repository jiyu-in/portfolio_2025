import styled from 'styled-components';
import { motion } from "framer-motion";

export const Flex = styled.div`
    display: flex;
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`; 

export const FlexAlignCenter = styled(Flex)`
    align-items: center;
`; 

export const FlexCenter = styled(FlexAlignCenter)`
    justify-content: center;
`;

export const RelativeBox = styled.div`
    position: relative;
`;


export const GridBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 0;
`;


export const Dashed = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    border: 2px dashed #a7df00;
    box-shadow: 0 0 10px 180px #1717179c;
`;

export const Cuadrado = styled.div`
    width: 7px;
    height: 7px;
    background: #ff3d3d;
    border: 1px solid #c8fe26;
    position: absolute;
    &.cuad1{top: 0; left: 0; margin: -3.5px 0 0 -3.5px;}
    &.cuad2{top: 0; right: 0; margin: -3.5px -3.5px 0 0;}
    &.cuad3{bottom: 0; left: 0; margin: 0  0 -3.5px -3.5px;}
    &.cuad4{bottom: 0; right: 0; margin: 0 -3.5px -3.5px 0; }


    &.cuad5{top: 0; left: 50%; margin: -3.5px 0 0 -3.5px;}
    &.cuad6{top: 50%; left: 0; margin: -3.5px 0 0 -3.5px;}
    &.cuad7{top: 50%; right: 0; margin: -3.5px -3.5px 0 0;}
    &.cuad8{bottom: 0; left: 50%; margin: 0  0 -3.5px -3.5px;}
`;


export const Ifont = styled.div`
    font-family: "IBM Plex Sans KR", serif;
`;

export const TitleBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const TitleText = styled(motion.span)`
    word-break: keep-all;
    /* font-family: "Iropke Batang",serif; */
`;

export const SubText = styled(motion.span)`
    font-size: 1.5rem;
    font-weight: 300;
    color:#858585;
    margin-top: 1rem;
    @media (max-width: 640px) {
        font-size: 1rem;
    }
`;