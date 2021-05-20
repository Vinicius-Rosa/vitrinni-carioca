import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div``;

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  height: 80vh;

  padding: 0 50px;
  margin: 0 auto;
`;
export const Content = styled.div`
  flex: 1;
`;

export const ShortDescription = styled(motion.p)`
    margin-top: 30px;
    max-width: 500px;

    text-align: justify;

    margin-bottom: 100px;
`;


export const ProjectSection = styled.div`
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