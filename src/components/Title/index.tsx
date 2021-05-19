import { ReactNode } from 'react';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

interface TitleProps {
  children: ReactNode;
  theme?: Theme;
}

import { Title as InnerTitle, TitleShadow, Container } from './styles';

function Title({ children, theme = Theme.light }: TitleProps) {
  return (
    <Container>
      <InnerTitle theme={theme}>{children}</InnerTitle>
      <TitleShadow theme={theme}>{children}</TitleShadow>
    </Container>
  );
}

export default Title;
