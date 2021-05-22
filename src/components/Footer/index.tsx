import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Content, ColumnWrapper, Column, Title, Row } from './styles';

function Footer() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const animation = useAnimation();
  const columnAnimation = useAnimation();

  useEffect(() => {
    if (!!inView) {
      animation.start({ opacity: 1 });
      columnAnimation.start({ y: 0, opacity: 1, });
    }
  }, [inView]);

  return (
    <Container
      ref={ref}
      animate={animation || { opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        type: "inerttia",
        duration: 0.4,
        delay: 0.2,
      }}
    >
      <Content>
        <Title>Contatos</Title>
        <ColumnWrapper>
          <Column
            animate={columnAnimation || { y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 1 }}
            transition={{
              type: "inerttia",
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h1>Rio de Janeiro</h1>
            <p>Av Abelardo Bueno 1111, sala 419</p>
            <p>21 99542-0250</p>
          </Column>
          <Column
            animate={columnAnimation || { y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 1 }}
            transition={{
              type: "inerttia",
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <h1>Rio de Janeiro</h1>
            <p>Av Abelardo Bueno 1111, sala 419</p>
            <p>21 99542-0250</p>
          </Column>
          <Column
            animate={columnAnimation || { y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 1 }}
            transition={{
              type: "inerttia",
              duration: 1,
              delay: 0.2,
            }}
          >
            <h1>Rio de Janeiro</h1>
            <p>Av Abelardo Bueno 1111, sala 419</p>
            <p>21 99542-0250</p>
          </Column>

        </ColumnWrapper>
        <br /><br />
        <div style={{ textAlign: 'center' }}>© 2021 • Vitrinni Carioca</div>
        <Row>Desenvolvido por DeepFly</Row>

      </Content>
    </Container>
  );
};

export default Footer;
