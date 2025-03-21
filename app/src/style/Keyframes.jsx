import { keyframes } from 'styled-components';

export const TrackingInExpand = keyframes`
    0% {
    letter-spacing: -0.5em;
    opacity: 0;
    }
    40% {
    opacity: 0.6;
    }
    100% {
    opacity: 1;
    }
`;

export const RotateText = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;


export const glitch = keyframes`
    0% { text-shadow: 2px 2px 0 #E0388C, -2px -2px 0 #c8fe26; }
    20% { text-shadow: -2px -2px 0 #E0388C, 2px 2px 0 #c8fe26; }
    40% { text-shadow: 2px -2px 0 #E0388C, -2px 2px 0 #c8fe26; }
    60% { text-shadow: -2px 2px 0 #E0388C, 2px -2px 0 #c8fe26; }
    80% { text-shadow: 2px 2px 0 #E0388C, -2px -2px 0 #c8fe26; }
    100% { text-shadow: none; }
`;


export const floating = keyframes`
    0% {transform: translateY(0);}
    50% {transform: translateY(-10px);}
    100% {transform: translateY(0);}
`;