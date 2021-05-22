import { ReactNode } from 'react';

import { Container } from './styles';

interface FooterProps {
  children?: ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <Container style={{ margin: "0 auto", width: "100%", textAlign: "center", padding: "20px 0" }}>
      <h1>Desenvolvido com 💗 por DeepFlinston</h1>
      {children}
    </Container>
  );
};

export default Footer;
