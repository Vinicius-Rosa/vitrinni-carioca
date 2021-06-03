import React, { useCallback } from 'react';
import Link from 'next/link';

import { Fade as Hamburger } from 'hamburger-react'

import Logo from '../../assets/logo.svg';

import {
  Container,
  RoutesContainer,
  GoesTo,
  HamburgerContainer,
  Modal,
  ModalContent,
  Overlay
} from './styles';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const [toggle, isToggle] = React.useState<boolean>(false);

  const toggleHandler = React.useCallback(() => {
    isToggle(current => !current)
  }, [])

  const redirect = useCallback(
    hash => {
      const element = document.querySelector(`#${hash}`);

      if (element) element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });

    }, [router])

  return <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      type: "inerttia",
      duration: 0.6,
      delay: 1,
    }}
  >
    <Link href="/">
      <Logo height="75" viewBox="0 0 100 100" style={{ cursor: "pointer" }} />
    </Link>

    <RoutesContainer>
      <GoesTo>
        <Link href="/">Home</Link>
      </GoesTo>
      <GoesTo>
        <Link href="/projetos">Projetos</Link>
      </GoesTo>
      <GoesTo>
        <Link href="">Sobre</Link>
      </GoesTo>
      <GoesTo onClick={() => redirect("contact")}>
        <a>Contato</a>
      </GoesTo>
    </RoutesContainer>

    <HamburgerContainer>
      <Hamburger onToggle={toggleHandler} toggled={toggle} color={!!toggle ? "white" : "black"} />
    </HamburgerContainer>

    <Modal visibility={toggle}>
      <Overlay onClick={toggleHandler} />
      <ModalContent>
        <GoesTo onClick={toggleHandler}>
          <Link href="/">Home</Link>
        </GoesTo>
        <GoesTo onClick={toggleHandler}>
          <Link href="/projetos">Projetos</Link>
        </GoesTo>
        <GoesTo onClick={toggleHandler}>
          <Link href="#">Sobre</Link>
        </GoesTo>
        <GoesTo onClick={() => {
          toggleHandler()
          redirect("contact")
        }}>
          <a>Contato</a>
        </GoesTo>
      </ModalContent>
    </Modal>

  </Container>
}

export default Header;
