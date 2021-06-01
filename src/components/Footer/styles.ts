import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
    min-height: 20vh;
    background-color: var(--tertiary-color);

    padding: 50px;

    color: var(--secondary-color);
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ColumnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
`;

export const Column = styled(motion.div)`
    & > h1 {
        color: var(--secondary-color);
    }

    & > p {
        font-family: "Caviar Dreams Thin", sans-serif;
        color: var(--secondary-color);
        opacity: .6;
    }
`;

export const Title = styled.h1`
    color: var(--secondary-color);
    font-size: 1.5rem;
`;

export const Row = styled.div`
    font-family: "Caviar Dreams Thin", sans-serif;
    text-align: center;

    font-size: .8rem;
    opacity: .6;
`;
