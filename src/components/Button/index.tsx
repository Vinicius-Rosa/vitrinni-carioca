import { ReactNode, useState } from 'react';

import { Container, TheButton, Line, ShadowButton } from './styles';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  const [hovering, isHovering] = useState<boolean>(false);

  return (
    <Container>
      <ShadowButton hovering={hovering} />
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
