import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  Container,
  Wrapper,
  Pages,
  Carousel,
  ImgWrapper,
  Img,
  Content,
  Infos,
  Item as InnerItem,
  ItemTitle,
  ItemContent,
  CarouselBtn,
} from './ProjectDetails.styles';

import arrow from '../assets/arrow.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { Title } from '../components/ProjectItem/styles';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ItemProps {
  label: string;
  value: string;
}

function Item<ItemProps>({ label, value }) {
  const { ref, inView } = useInView({ threshold: 1 });
  const animation = useAnimation();

  useEffect(() => {
    if (!!inView) animation.start({ y: 0, opacity: 1, });
  }, [inView]);

  return <InnerItem
    ref={ref}
    animate={animation || { y: 0, opacity: 1 }}
    initial={{ y: 50, opacity: 0, }}
    transition={{
      type: "inerttia",
      duration: 0.6,
      delay: 0.4,
    }}
  >
    <ItemTitle>{label}</ItemTitle>
    <ItemContent>{value}</ItemContent>
  </InnerItem>
}

function ProjectDetailsScreen() {
  const ref = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hovering, isHovering] = useState<boolean>(false);

  const { ref: wrapperRef, inView } = useInView({ threshold: 1 });
  const animation = useAnimation();

  const prev = useCallback(() => {
    ref.current.prev();
  }, [])

  const next = useCallback(() => {
    ref.current.next();
  }, [])

  const images = [1, 2]

  const imagesRender = useMemo<ReactElement[]>(
    () => images.map(
      i => <ImgWrapper>
        <Img src={i === 1 ? img1 : img2} alt="" />
      </ImgWrapper>)
    , [images])

  const pages = useMemo(() => images.length, [images])

  useEffect(() => {
    if (!!inView) animation.start({ y: 0, opacity: 1, });
  }, [inView]);

  return (
    <Container>
      <Wrapper onMouseOver={() => isHovering(true)} onMouseLeave={() => isHovering(false)}
        ref={wrapperRef}
        animate={animation || { y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.4,
        }}
      >
        <CarouselBtn onClick={prev}>
          <img src={arrow} style={{ transform: 'rotate(180deg)' }} />
        </CarouselBtn>
        <Carousel ref={ref} dots={false} afterChange={e => setCurrentPage(e + 1)}>
          {imagesRender}
        </Carousel>
        <CarouselBtn onClick={next}>
          <img src={arrow} />
        </CarouselBtn>
        <Pages hovering={hovering}>{currentPage}/{pages}</Pages>
      </Wrapper>

      <Content>
        <div style={{ flex: 2 }}>
          <Title style={{ color: "var(--tertiary-color)", fontWeight: "bold" }}
            animate={animation || { y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0, }}
            transition={{
              type: "inerttia",
              duration: 0.6,
              delay: 0.6,
            }}
          >
            Residência Guarapari 2
          </Title>
        </div>

        <Infos>
          <Item label="Tipo" value="Residencial" />
          <Item label="Local" value="Guarapari - ES" />
          <Item label="Data" value="Janeiro - 2021" />
          <Item label="Área" value="30m²" />
        </Infos>
      </Content>
    </Container>
  );
}

export default ProjectDetailsScreen;
