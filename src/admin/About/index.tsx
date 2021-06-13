import { Button, Input, Form } from 'antd';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { getToken } from '../../services/auth';
import { Container, Header } from './styles';

interface Col {
    span: number;
}

interface ILayout {
    labelCol: Col;
    wrapperCol: Col;
}

interface IInitialValues {
    text: string;
}

const layout: ILayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const initialValues: IInitialValues = {
    text: '',
}

const { useForm } = Form;
const About: React.FC = () => {
    const [form] = useForm()
    const token = getToken();
    const [sending, isSending] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://vitrinniapi.herokuapp.com/api/about')
            const { text } = response.data

            form.setFieldsValue({ text })
        })()
    }, [form])

    const handleSubmit = useCallback(async () => {
        if (!!sending) return

        isSending(true);

        const payload = form.getFieldsValue();

        axios.post('https://vitrinniapi.herokuapp.com/api/about/update',
            payload, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                isSending(false);
            })
            .catch(err => {
                isSending(false);
            })

    }, [token])
    const errorHandler = useCallback(error => { }, [])

    return <Container>
        <Header>
            <h1>Sobre</h1>
            <p>Esta sessão é responsável pelos conteúdos da página "Sobre" do site.</p>
        </Header>

        <Form
            {...layout}

            form={form}
            name="basic"
            initialValues={initialValues}
            onFinish={handleSubmit}
            onFinishFailed={errorHandler}
        >
            <Form.Item
                label="Texto"
                name="text"
                rules={[{ required: true, message: 'Por favor insira o texto do bloco 01!' }]}
            >
                <Input.TextArea style={{ height: '200px' }} />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" loading={sending}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    </Container>;
}

export default About;