import { ReactElement, useCallback, useMemo, useRef, useState } from 'react';

import {
  Container,
  Wrapper,
  Pages,
  Carousel,
  ImgWrapper,
  Img,
  Content,
  Infos,
  Item,
  ItemTitle,
  ItemContent,
  CarouselBtn,
} from './ProjectDetails.styles';

import arrow from '../assets/arrow.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { Title } from '../components/ProjectItem/styles';

function ProjectDetailsScreen() {
  const ref = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hovering, isHovering] = useState<boolean>(false);

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

  return (
    <Container>
      <Wrapper onMouseOver={() => isHovering(true)} onMouseLeave={() => isHovering(false)}>
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
          <Title style={{ color: "var(--tertiary-color)", fontWeight: "bold" }}>
            Residência Guarapari 2
          </Title>
        </div>

        <Infos>
          <Item>
            <ItemTitle>Tipo</ItemTitle>
            <ItemContent>Residencial</ItemContent>
          </Item>

          <Item>
            <ItemTitle>Local</ItemTitle>
            <ItemContent>Guarapari - ES</ItemContent>
          </Item>

          <Item>
            <ItemTitle>Data</ItemTitle>
            <ItemContent>Janeiro - 2021</ItemContent>
          </Item>

          <Item>
            <ItemTitle>Área</ItemTitle>
            <ItemContent>30m²</ItemContent>
          </Item>
        </Infos>
      </Content>
    </Container>
  );
}

export default ProjectDetailsScreen;
