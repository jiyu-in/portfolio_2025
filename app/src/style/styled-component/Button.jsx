import React from 'react';
import styled from 'styled-components';
import { mainColor, hoverColor, disabledColor } from './color';

const StyledButton = styled.button`
  background-color: ${props => props.color || mainColor};
  color: white;
  font-family:  "Pretendard Variable", Pretendard, 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.color || hoverColor};
  }

  &:disabled {
    background-color:${props => props.color || disabledColor};
    cursor: not-allowed;
  }
`;


const Button = ({ children, onClick, disabled, color }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
