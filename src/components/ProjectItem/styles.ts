import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
    img?: string;
    overlay?: string;
    inverted?: boolean;
    hovering?: boolean;
}

export const Container = styled.div<Props>`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${({ inverted }) => inverted ? "row-reverse" : "row"};

    margin-top: 100px;

    @media (max-width: 1240px) {
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }
`;

export const BlankContainer = styled(Container)`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;
`;

export const ImgWrapper = styled.div`
    position: relative;
`;

export const BlankImgWrapper = styled(ImgWrapper)`
    max-width: 300px;
    transition: 0.8s;
    &:hover{
        background-color: black;
    }
`;

export const ImgShadow = styled(motion.div) <Props>`
    position: absolute;
    top: -20px;
    left: ${({ inverted }) => inverted ? "unset" : "20px"};
    right: ${({ inverted }) => inverted ? "20px" : "unset"};

    border: 1px solid var(--secondary-color);
    background: transparent;

    min-height: 300px;
    height: 300px;

    min-width: 300px;
    width: 300px;

    z-index: 0;
    opacity: 0.4;

    @media (max-width: 1240px) {
        left: ${({ inverted }) => inverted ? "unset" : "15px"};
        right: ${({ inverted }) => inverted ? "15px" : "unset"};
        
        top: -10px;
        min-height: 290px;
        height: 290px;
    }
`;

export const Title = styled(motion.h1)`
    font-family: "Cinzel", serif;
    font-size: 4rem;
    text-transform: uppercase;
    color: var(--secondary-color);

    margin-left: 50px;

    cursor: pointer;

    &:hover{
        opacity: .8;
    }

    @media (max-width: 1240px) {
        text-align: center;
        font-size: 2rem;
        margin-left: unset;
    }
`;

export const BlankTitle = styled.h1<Props>`
    position: absolute;
    top: ${({ hovering }) => hovering ? '50px' : '0'};
    left: 50%;

    transform: translate(-50%, 0);

    text-align: center;
    font-size: 2rem;
    color: ${({ hovering }) => hovering ? 'white' : 'transparent'};
    
    pointer-events: ${({ hovering }) => hovering ? 'inherit' : 'none'};
    z-index: 3;
    transition: 0.4s;
`;

export const BlankButton = styled.button<Props>`
    position: absolute;
    bottom: ${({ hovering }) => hovering ? '50px' : '0'};
    left: 50%;

    transform: translate(-50%, 0);

    height: 50px;

    padding: 0 25px;

    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-transform: uppercase;

    opacity: ${({ hovering }) => hovering ? 1 : 0};
    pointer-events: ${({ hovering }) => hovering ? 'inherit' : 'none'};
    z-index: 3;
    transition: 0.4s;

    &:hover{
        background-color: var(--tertiary-color);
    }
`;

export const Img = styled(motion.div) <Props>`
    position: relative;

    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    min-height: 300px;
    height: 300px;

    min-width: 300px;
    width: 300px;

    z-index: 2;
    transition: .6s;

    &:hover{
        background-image: url(${({ overlay }) => overlay});
    }
`;

export const BlankImg = styled(motion.div) <Props>`
    position: relative;

    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    min-height: 300px;
    height: 300px;

    min-width: 300px;
    width: 300px;

    z-index: 2;
    transition: .6s;

    filter: ${({ hovering }) => hovering ? 'opacity(0.4)' : 'unset'};
`;
