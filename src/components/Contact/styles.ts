import { m, motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
    max-width: 1200px;
    min-height: 80vh;

    padding: 50px;
    margin: 0 auto;
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
`;

export const Title = styled(motion.h1)`
    font-size: 2.8rem;
    color: var(--secondary-color);
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
