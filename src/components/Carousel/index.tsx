import { useMemo } from 'react';

import { Carousel as AntdCarousel } from "antd";

import { Container, Img, ShadowCarousel, CarouselWrapper } from './styles';
import useWindowSize from '../../hooks/useWindowSize';

interface CarouselProps {
  images: string[];
}

function Carousel({ images = [] }: CarouselProps) {
  const imgRender = useMemo(() => images.map((img, i) => <Img src={img} key={i} alt="" />), [images])

  const { width } = useWindowSize();

  return (
    <Container>
      <ShadowCarousel
        initial={{ x: "300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "inerttia",
          duration: 0.8,
          delay: 0.3,
        }}
      />
      <CarouselWrapper
        initial={{ x: "300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "inerttia",
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <AntdCarousel autoplay dots={width >= 1250}>
          {imgRender}
        </AntdCarousel>
      </CarouselWrapper>
    </Container>
  );
};

export default Carousel;
