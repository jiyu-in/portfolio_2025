import React from 'react';
import styled from 'styled-components';
import { mainColor, hoverColor, disabledColor } from './color';

const CardContainer = styled.div`
    width: 300px;
    padding: 20px;    
    margin: 20px;
    background-color: white;
    border:1px solid #3158C1;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(107, 61, 46 ,0.04), 1px 1px 0 rgba(234, 255, 75 , 1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

// Card 이미지 스타일
const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
`;

// Card 제목 스타일
const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin: 15px 0;
    color: #333;
`;

// Card 설명 스타일
const CardDescription = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
`;

// Card 버튼 스타일
const CardButton = styled.button`
    background-color: ${props => props.color || mainColor};
    color: white;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.color || hoverColor};
    }

    &:disabled {
        background-color:${props => props.color || disabledColor};
        cursor: not-allowed;
    }
`;

// Card 컴포넌트 정의
const Card = ({ image, title, description, onButtonClick, buttonDisabled }) => {
    return (
    <CardContainer>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton onClick={onButtonClick} disabled={buttonDisabled}>
        더보기
        </CardButton>
    </CardContainer>
    );
};

export default Card;
