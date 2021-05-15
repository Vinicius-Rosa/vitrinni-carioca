import { ReactNode } from 'react';

import { Container } from './styles';

interface CarouselProps {
  children?: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  return (
    <Container>
      <h1>Carousel</h1>
      {children}
    </Container>
  );
};

export default Carousel;
