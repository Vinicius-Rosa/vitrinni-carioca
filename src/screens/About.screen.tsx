import Title from '../components/Title';

import { Container, Content } from './About.styles';

interface AboutProps {
  text: string;
}

function About({ text }: AboutProps) {
  return (
    <>
      <Container style={{ padding: '0 50px', paddingBottom: '50px' }}>
        <Title>Sobre</Title>

        <Content>{text}</Content>
      </Container>
    </>
  );
}

export default About;
