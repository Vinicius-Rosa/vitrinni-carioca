import { ReactNode, useState } from 'react';

import { Container, TheButton, Line, ShadowButton } from './styles';

interface ButtonProps {
  children: ReactNode;
  light?: boolean;
}

function Button({ children, light = false }: ButtonProps) {
  const [hovering, isHovering] = useState<boolean>(false);

  return (
    <Container>
      <ShadowButton hovering={hovering} light={light} />
      <TheButton
        onMouseOver={() => isHovering(true)}
        onMouseLeave={() => isHovering(false)}
      >
        <Line data-label="line" />
        <span>{children}</span>
      </TheButton>
    </Container>
  );
};

export default Button;
