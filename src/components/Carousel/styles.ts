import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;

  width: 600px;

  z-index: 1;

  @media (max-width: 1240px) {
    position: relative;
    width: 80%;
    margin-top: 50px;
  }
`;

export const ShadowCarousel = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: -50px;

  height: calc(80vh - 100px);
  width: 600px;

  background-color: transparent;
  border: 2px solid var(--default-grey);

  @media (max-width: 1240px) {
    width: calc(80% + 50px);
    height: calc(100% - 20px);

    top: -20px;
    right: -20px;
    left: unset;
  }
`;

export const Img = styled.img`
  height: 90vh;

  @media (max-width: 1240px) {
    height: unset;
  }
`;

export const CarouselWrapper = styled(motion.div)``;
