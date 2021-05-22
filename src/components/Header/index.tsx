import React from 'react';
import Link from 'next/link';

import Logo from '../../assets/logo.svg';

import { Container, RoutesContainer, GoesTo } from './styles';
import useWindowSize from '../../hooks/useWindowSize';

const Header: React.FC = () => {
  const { width } = useWindowSize();

  return <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      type: "inerttia",
      duration: 0.6,
      delay: 1,
    }}
  >
    <Logo height="75" viewBox="0 0 100 100" />

    {width >= 1250 && <RoutesContainer>
      <GoesTo>
        <Link href="#">Home</Link>
      </GoesTo>
      <GoesTo>
        <Link href="#">Projetos</Link>
      </GoesTo>
      <GoesTo>
        <Link href="#">Sobre</Link>
      </GoesTo>
      <GoesTo>
        <Link href="#">Contato</Link>
      </GoesTo>
    </RoutesContainer>}

  </Container>
}

export default Header;
