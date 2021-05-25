import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
    max-width: 1200px;
    min-height: 80vh;

    padding: 100px 50px;
    margin: 0 auto;

    @media (max-width: 1240px) {
        padding: 50px 25px;
    }
`;

export const Container = styled.section`
    position: relative;

    width: 100%;
    height: 100%;
`;

export const ContactForm = styled(motion.div)`
    position: relative;

    height: 100%;
    width: 100%;
    background-color: var(--tertiary-color);

    padding: 50px;

    z-index: 2;

    @media (max-width: 1240px) {
        padding: 25px;
    }
`;

export const Shadow = styled(motion.div)`
    position: absolute;
    top: -30px;
    left: 30px;

    border: 2px solid var(--default-grey);
    opacity: .4;
    
    height: 100%;
    width: 100%;

    background-color: transparent;

    z-index: 0;

    @media (max-width: 1240px) {
        /* display: none; */

        top: -15px;
        left: 15px;
    }
`;

export const Title = styled(motion.h1)`
    font-size: 2.8rem;
    color: var(--secondary-color);

    @media (max-width: 1240px) {
        font-size: 2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    gap: 50px;
`;

export const SubmitWrapper = styled.div`
    display: block;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1240px) {
        align-items: flex-start;
        flex-direction: column; 
        gap: 40px;

        & > div {
            width: 100%;
        }
    }
`;
