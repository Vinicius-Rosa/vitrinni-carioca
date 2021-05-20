import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  theme: string;
}

export const Container = styled.div`
  position: relative;

  margin-top: 50px;
`;

export const Line = styled(motion.div) <Props>`
  height: 2px;
  width: 80px;

  background-color: ${({ theme }) => theme === 'light' ? "#231F2066" : "rgba(251, 251, 242, 0.4)"};
`;

export const Title = styled(motion.h1)`
  font-weight: bold;
  font-size: 94px;
  color: ${({ theme }) => theme === 'light' ? "inherit" : "var(--secondary-color)"};

  margin-bottom: 0;
`;

export const TitleShadow = styled(motion.h1) <Props>`
  position: absolute;
  top: -18px;
  left: 10px;

  font-weight: bold;
  font-size: 94px;

  letter-spacing: 3px;
  
  -webkit-text-stroke: 1px ${({ theme }) => theme === 'light' ? "#231F2066" : "rgba(251, 251, 242, 0.4)"};
  -webkit-text-fill-color: transparent;

  margin-bottom: 0;
  z-index: 2;
  pointer-events: none;
`;