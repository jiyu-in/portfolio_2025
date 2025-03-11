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
