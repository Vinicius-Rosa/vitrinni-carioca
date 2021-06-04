import { Button, Card, Col, Input, Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { login } from '../../services/auth';
import { Container } from './styles';

interface IInitialValues {
  email: string;
  password: string;
}
const initialValues: IInitialValues = {
  email: '',
  password: '',
}

function Login() {
  const [form] = useForm()
  const router = useRouter();
  const [sending, isSending] = useState<boolean>(false);

  const handleSubmit = useCallback(async () => {
    if (!!sending) return

    isSending(true);

    const payload = form.getFieldsValue();

    const response = await axios.post('https://vitrinniapi.herokuapp.com/api/auth/login', payload)
    const { access_token } = response.data;

    if (access_token) {
      login(access_token)
      router.push('/admin')
    }

    setTimeout(() => {
      isSending(false);
    }, 2000);

  }, [])

  return (
    <Container style={{ margin: '0 auto', maxWidth: "800px" }}>
      <br /><br />
      <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>Bem-vindo(a)!</h1>
      <Col>
        <Card>
          <Form
            form={form}
            name="basic"
            initialValues={initialValues}
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Preencha o campo email' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[{ required: true, message: 'Preencha o campo senha' }]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit" loading={sending} style={{ width: '100%' }}>
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default Login;
