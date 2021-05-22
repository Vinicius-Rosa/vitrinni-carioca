import { ReactNode, useEffect, useState } from 'react';

import { Container, TheButton, Line, ShadowButton } from './styles';

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  light?: boolean;
  removeShadow?: boolean;
}

function Button({ children, type = "button", light = false, removeShadow = false }: ButtonProps) {
  const [hovering, isHovering] = useState<boolean>(false);

  const { ref: buttonRef, inView } = useInView({ threshold: .2 });
  const animation = useAnimation();
  const shadowAnimation = useAnimation();


  useEffect(() => {
    if (!!inView) {
      animation.start({ y: 0, opacity: 1, });
      shadowAnimation.start({ y: 0, opacity: 0.4, });
    }
  }, [inView]);

  return (
    <Container>
      <ShadowButton
        hovering={hovering}
        light={light}
        hidden={removeShadow}

        animate={shadowAnimation}
        initial={{ y: 50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.4,
        }}
      />
      <TheButton
        type={type}
        light={light}
        ref={buttonRef}
        animate={animation}
        initial={{ y: 50, opacity: 0, }}
        transition={{
          type: "inerttia",
          duration: 0.6,
          delay: 0.2,
        }}

        onMouseOver={() => isHovering(true)}
        onMouseLeave={() => isHovering(false)}
      >
        <Line data-label="line" light={light} />
        <span>{children}</span>
      </TheButton>
    </Container>
  );
};

export default Button;
