import { ReactEventHandler, useCallback, useEffect, useState } from 'react';
import {
  Container,
  ImgWrapper,
  Img,
  ImgShadow,
  Title,
  BlankImgWrapper,
  BlankButton,
  BlankImg,
  BlankTitle
} from './styles';

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

interface ProjectItemProps {
  images: string[];
  title: string;
  inverted?: boolean;
  type?: "default" | "blank";
  seeMore?: ReactEventHandler;
}

function ProjectItem({ images, title, inverted = false, type = "default", seeMore = () => { } }: ProjectItemProps) {

  const { ref, inView } = useInView({ threshold: .8 });
  const animation = useAnimation();
  const shadowAnimation = useAnimation();
  const titleAnimation = useAnimation();

  const [hovering, isHovering] = useState(false);

  useEffect(() => {
    if (!!inView) {
      animation.start({ y: 0, opacity: 1, });
      shadowAnimation.start({ y: 0, opacity: 1, });
      titleAnimation.start({ y: 0, opacity: 1, });
    }
  }, [inView]);

  const handleMouseOver = useCallback(() => {
    isHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    isHovering(false)
  }, [])

  if (type === "default") return (
    <Container inverted={inverted} ref={ref}>
      <ImgWrapper>
        <Img
          img={images[0]}
          overlay={images[1]}

          animate={animation}
          initial={{ y: 50, opacity: 0, }}
          transition={{
            type: "inerttia",
            duration: 0.6,
            delay: 0.2,
          }}
        />
        <ImgShadow
          inverted={inverted}

          animate={shadowAnimation}
          initial={{ y: 50, opacity: 0, }}
          transition={{
            type: "inerttia",
            duration: 0.6,
            delay: 0.4,
          }}
        />
      </ImgWrapper>
      <Title
        animate={titleAnimation}
        initial={{ y: 50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.5,
          delay: 0.2,
        }}

        onClick={seeMore}
      >
        {title}
      </Title>
    </Container>
  );

  if (type === "blank") return (
    <BlankImgWrapper ref={ref}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <BlankImg
        img={images[0]}

        animate={animation}
        initial={{ y: 50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.2,
        }}
        hovering={hovering}
      />
      <BlankTitle hovering={hovering}>
        {title}
      </BlankTitle>
      <BlankButton hovering={hovering} onClick={seeMore}>Ver mais</BlankButton>
    </BlankImgWrapper>
  )
};

export default ProjectItem;
