import { Row } from 'antd';
import React, { useCallback, useState } from 'react';
import Input from '../Input';
import {
  Section,
  Container,
  ContactForm,
  Shadow,
  Title,
  Form,
} from './styles';

interface ContactProps {
}

function Contact({ }: ContactProps) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = useCallback(({ value, name, }) => {
    setFormValues(current => ({ ...current, [name]: value }))
  }, [])

  return (
    <Section>
      <Container>
        <ContactForm>
          <Title>Entre em contato</Title>

          <Form>
            <Row justify="space-between" style={{ gap: "20px" }}>
              <Input label="Nome" name="name" value={formValues.name} onChange={handleChange} />
              <Input label="Email" name="email" value={formValues.email} onChange={handleChange} />
            </Row>
            <Input label="Assunto" name="subject" value={formValues.subject} onChange={handleChange} />
            <Input
              type="textarea"
              label="Mensagem"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </Form>
        </ContactForm>
        <Shadow />
      </Container>
    </Section>
  );
};

export default Contact;
