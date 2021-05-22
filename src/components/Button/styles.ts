import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
    hovering?: boolean;
    light?: boolean;
}

export const Container = styled.div`
    position: relative;
`;

export const TheButton = styled(motion.button) <Props>`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    min-width: 300px;

    height: 50px;

    padding: 0 25px;

    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-transform: uppercase;

    box-sizing: border-box;
    z-index: 2;

    &::before{
        opacity: 0;
        content: '';

        position: absolute;
        left: calc(25px + 20px - 8px + 1.5px);
        top: 21.5px;
        
        height: 1px;
        width: 8px;

        background-color: ${({ light }) => light ? "var(--tertiary-color)" : "var(--secondary-color)"};

        -webkit-backface-visibility: hidden;
        transform: rotate(0);
        z-index: 10;
    }

    &::after{
        opacity: 0;
        content: '';

        position: absolute;
        left: calc(25px + 20px - 8px + 1.5px);
        bottom: 21.5px;
        
        height: 1px;
        width: 8px;

        background-color: ${({ light }) => light ? "var(--tertiary-color)" : "var(--secondary-color)"};

        -webkit-backface-visibility: hidden;
        transform: rotate(0);
        z-index: 10;
    }

    &, & > span {
        transition: .4s;
    }

    /* LINE ANIMATION */
    &::before,
    &::after,
    & > [data-label="line"]::before{
        transition: .4s;
    }

    &:hover > [data-label="line"]::before{
        left: 0;
        background: ${({ light }) => light ? "var(--tertiary-color)" : "var(--secondary-color)"};
    }

    &:hover::before{
        opacity: 1;
        transform: rotate(45deg);
    }

    &:hover::after{
        opacity: 1;
        transform: rotate(-45deg);
    }

    &:hover {
        padding-right: 20px;
        background-color: ${({ light }) => light ? "var(--secondary-color)" : "var(--tertiary-color)"};
        color: ${({ light }) => light ? "var(--tertiary-color)" : "var(--secondary-color)"};
    }

    &:hover > span{
        margin-left: 5px;
    }

`;

export const Line = styled.div<Props>`
    position: relative;
    width: 25px;

    &::before{
        content: '';

        position: absolute;
        top: ${({ light }) => light ? "-1px" : "unset"};
        left: -5px;
        
        height: 1px;
        width: 20px;

        background-color: var(--secondary-color);

        z-index: 10;
    }
`;

export const ShadowButton = styled(TheButton) <Props>`
    position: absolute;
    top: ${({ hovering }) => hovering ? "-5px" : "-10px"};
    left: ${({ hovering }) => hovering ? "5px" : "10px"};

    width: 300px;

    background-color: transparent;
    border: 2px solid ${({ light }) => light ? "var(--secondary-color)" : "var(--default-grey)"};
    
    pointer-events: none;
    z-index: 0;

    transition: .4s;
`;