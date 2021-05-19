import { ReactNode, useMemo } from 'react';

import { Carousel as AntdCarousel } from "antd";

import { Container, Img, ShadowCarousel } from './styles';

interface CarouselProps {
  children?: ReactNode;
  images: string[];
}

function Carousel({ children, images = [] }: CarouselProps) {
  const imgRender = useMemo(() => images.map(img => <Img src={img} alt="dale" />), [images])

  return (
    <Container>
      <ShadowCarousel />
      <AntdCarousel>
        {imgRender}
      </AntdCarousel>
    </Container>
  );
};

export default Carousel;
