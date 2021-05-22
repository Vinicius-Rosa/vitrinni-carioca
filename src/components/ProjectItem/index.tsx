import { useEffect } from 'react';
import { Container, Img, ImgShadow, Title } from './styles';

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

interface ProjectItemProps {
  images: string[];
  title: string;
  inverted?: boolean;
}

function ProjectItem({ images, title, inverted = false }: ProjectItemProps) {

  const { ref, inView } = useInView({ threshold: .8 });
  const animation = useAnimation();
  const shadowAnimation = useAnimation();
  const titleAnimation = useAnimation();

  useEffect(() => {
    if (!!inView) {
      animation.start({ y: 0, opacity: 1, });
      shadowAnimation.start({ y: 0, opacity: 1, });
      titleAnimation.start({ y: 0, opacity: 1, });
    }
  }, [inView]);

  return (
    <Container inverted={inverted} ref={ref}>
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
      <Title
        animate={titleAnimation}
        initial={{ y: 50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.5,
          delay: 0.2,
        }}
      >
        {title}
      </Title>
    </Container>
  );
};

export default ProjectItem;
