import { ReactNode } from 'react';

import { Carousel as AntdCarousel } from "antd";

import { Container, Img } from './styles';

import img1 from '../../assets/img1.png'

interface CarouselProps {
  children?: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  return (
    <Container>
      <AntdCarousel>
        <Img src={img1} alt="dale" />
        <Img src={img1} alt="dale" />
      </AntdCarousel>
    </Container>
  );
};

export default Carousel;
