import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
    max-width: 1200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* height: 80px; */

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
`;

export const GoesTo = styled.li`
    & > a{
        color: var(--primary-color);
        font-weight: bold;

        transition: .4s;
    }

    & > a:hover{
        opacity: 0.8;
    }

    &:not(:last-of-type){
        padding-right: 40px;
        border-right: 1px solid var(--primary-color);
    }
`;