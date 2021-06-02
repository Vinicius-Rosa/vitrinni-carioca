import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div``;

export const Hero = styled.section`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  height: 80vh;

  padding: 0 50px;
  margin: 0 auto;

  overflow: hidden;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    height: unset;
  }
`;
export const Content = styled.div`
  flex: 1;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
  }
`;

export const ShortDescription = styled(motion.p)`
    margin-top: 30px;
    max-width: 500px;

    text-align: justify;

    margin-bottom: 100px;
`;


export const ProjectSection = styled.section`
  background-color: var(--tertiary-color);
`;

export const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;