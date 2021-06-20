import React, { useCallback, useEffect, useState } from 'react';
// import { Row } from 'antd';
import Button from '../Button';
import Input from '../Input';
import {
  Section,
  Container,
  ContactForm,
  Shadow,
  Title,
  Form,
  SubmitWrapper,
  Row,
} from './styles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import axios from 'axios';
import { message } from 'antd';

interface ContactProps {
}

function Contact({ }: ContactProps) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const wrapperAnimation = useAnimation();
  const shadowAnimation = useAnimation();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleChange = useCallback(({ value, name, }) => {
    setFormValues(current => ({ ...current, [name]: value }))
  }, [])


  const success = () => {
    message.success('Mensagem enviada com sucesso!');
  };

  const error = () => {
    message.error('Ops! Não foi possível enviar a mensagem');
  };

  const sendRequest = useCallback(e => {
    e.preventDefault();
    axios.post('https://vitrinniapi.herokuapp.com/api/contact', formValues)
      .then(res => success())
      .catch(err => error())

  }, [formValues])

  useEffect(() => {
    if (!!inView) {
      wrapperAnimation.start({ opacity: 1, });
      shadowAnimation.start({ opacity: 1, });
      animation.start({ y: 0, opacity: 1, });
    }
  }, [inView]);

  return (
    <Section id="contact">
      <Container>
        <ContactForm
          ref={ref}
          animate={wrapperAnimation || { opacity: 1 }}
          initial={{ opacity: 0, }}
          transition={{
            type: "inerttia",
            duration: 1,
            delay: 1,
          }}
        >
          <Title
            animate={animation || { y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0, }}
            transition={{
              type: "inerttia",
              duration: 0.6,
              delay: 1,
            }}
          >
            Entre em contato
          </Title>

          <Form onSubmit={sendRequest}>
            <Row>
              <Input label="Nome" name="name" value={formValues.name} onChange={handleChange} />
              <Input type="email" label="Email" name="email" value={formValues.email} onChange={handleChange} />
            </Row>
            <Input label="Assunto" name="subject" value={formValues.subject} onChange={handleChange} />
            <Input
              type="textarea"
              label="Mensagem"
              name="msg"
              value={formValues.msg}
              onChange={handleChange}
            />

            <SubmitWrapper>
              <Button light removeShadow type="submit" size="small">Enviar solicitação</Button>
            </SubmitWrapper>
          </Form>
        </ContactForm>
        <Shadow
          animate={shadowAnimation || { opacity: 1 }}
          initial={{ opacity: 0, }}
          transition={{
            type: "inerttia",
            duration: 1,
            delay: 1,
          }}
        />
      </Container>
    </Section>
  );
};

export default Contact;
