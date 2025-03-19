import styled from 'styled-components';

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


export const GridBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    z-index: 0;
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
`;


export const Dashed = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    border: 1px dashed #fff;
`;

export const Cuadrado = styled.div`
    width: 7px;
    height: 7px;
    background: #333;
    border: 1px solid #fff;
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
    font-family: "Iropke Batang",serif;
`;