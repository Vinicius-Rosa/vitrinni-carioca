import { useAnimation } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// import Line from '../../assets/Line.svg'

export enum Theme {
  dark = 'dark',
  light = 'light',
}

interface TitleProps {
  children: ReactNode;
  theme?: Theme;
}

import { Title as InnerTitle, TitleShadow, Container, Line } from './styles';

function Title({ children, theme = Theme.light }: TitleProps) {
  const { ref, inView } = useInView({ threshold: 1 });

  const animation = useAnimation();
  const shadowAnimation = useAnimation();
  const lineAnimation = useAnimation();

  useEffect(() => {
    if (!!inView) {
      animation.start({ y: 0, opacity: 1, });
      lineAnimation.start({ width: "80px", opacity: 1, });
      shadowAnimation.start({ y: 0, opacity: 1, });
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <InnerTitle
        theme={theme}
        animate={animation || { y: 0, opacity: 1, }}
        initial={{ y: -50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.2
        }}
      >
        {children}
      </InnerTitle>
      <TitleShadow
        theme={theme}
        animate={shadowAnimation || { y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.4,
        }}
      >
        {children}
      </TitleShadow>
      <Line
        theme={theme}
        animate={lineAnimation || { width: "80px", opacity: 1 }}
        initial={{ width: 0, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.4,
        }}
      />
    </Container>
  );
}

export default Title;
