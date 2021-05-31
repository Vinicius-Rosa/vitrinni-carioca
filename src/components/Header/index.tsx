import React from 'react';
import Link from 'next/link';

import { Fade as Hamburger } from 'hamburger-react'

import Logo from '../../assets/logo.svg';

import { Container, RoutesContainer, GoesTo, HamburgerContainer } from './styles';

const Header: React.FC = () => {
  const [toggle, isToggle] = React.useState<boolean>(false);

  const toggleHandler = React.useCallback(() => {
    isToggle(current => !current)
  }, [])

  console.log(toggle)

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

    <RoutesContainer>
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
    </RoutesContainer>

    <HamburgerContainer>
      <Hamburger onToggle={toggleHandler} />
    </HamburgerContainer>

  </Container>
}

export default Header;
