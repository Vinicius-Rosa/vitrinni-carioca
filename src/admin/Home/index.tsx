import { Button, Input, Form } from 'antd';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Container, Header } from './styles';

interface Col {
    span: number;
}

interface ILayout {
    labelCol: Col;
    wrapperCol: Col;
}

interface IInitialValues {
    title: string;
    text: string;
}

const layout: ILayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const initialValues: IInitialValues = {
    title: '',
    text: '',
}

const { useForm } = Form;

const Home: React.FC = () => {
    if (typeof window === 'undefined') return <></>

    const [form] = useForm()
    const [sending, isSending] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://vitrinniapi.herokuapp.com/api/home')
            const { title, text } = response.data

            form.setFieldsValue({ title, text })
        })()
    }, [form])

    const handleSubmit = useCallback(async () => {
        if (!!sending) return

        isSending(true);

        const payload = form.getFieldsValue();

        axios.post('https://vitrinniapi.herokuapp.com/api/home/update', payload)

        setTimeout(() => {
            isSending(false);
        }, 2000);

    }, [])

    const errorHandler = useCallback(error => { }, [])

    return <Container>
        <Header>
            <h1>Bem-vindo, Helcio!</h1>
            <p>Esta sessão é responsável pelos conteúdos da página principal do site.</p>
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
                label="Título"
                name="title"
                rules={[{ required: true, message: 'Por favor insira o título!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descrição curta"
                name="text"
                rules={[{ required: true, message: 'Por favor insira a descrição!' }]}
            >
                <Input.TextArea style={{ height: '100px' }} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={sending}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    </Container>;
}

export default Home;