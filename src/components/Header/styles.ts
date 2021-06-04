import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
    visibility: boolean | null;
}

export const Container = styled(motion.header)`
    max-width: 1200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding: 10px 30px;
`;

export const Img = styled.img`
    height: 60px;
`;


export const RoutesContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 1240px) {
        display: none;
    }
`;

export const GoesTo = styled.li`
    & > a{
        color: var(--primary-color);
        font-weight: bold;

        transition: .4s;
    }

    & > a:hover{
        color: var(--tertiary-color);
        opacity: 0.8;
    }

    &:not(:last-of-type){
        padding-right: 40px;
        border-right: 1px solid var(--primary-color);
    }
`;

export const HamburgerContainer = styled.div`
    position: relative;    
    display: none;
    
    z-index: 10;

    @media (max-width: 1240px) {
        display: block;
    }
`;

export const Modal = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    opacity: ${({ visibility }) => visibility ? 1 : 0};
    pointer-events: ${({ visibility }) => visibility ? 'inherit' : 'none'};

    z-index: 5;
    transition: .4s;
`;

export const Overlay = styled.button`
    position: fixed;
    top: 0;
    left: 0;

    display: block;

    width: 100%;
    height: 100%;

    background: rgba(0,0,0,0.8);

    transition: .4s;
`;

export const ModalContent = styled.ul`
    position: relative;
    z-index: 10;

    text-decoration: none;

    & > li:not(:last-of-type){
        border-right: unset;
        padding-right: unset;
    }

    & > li > a {
        font-size: 3rem;
        text-transform: uppercase;
        color: var(--secondary-color);
    }
    
`;