import { Button, Input, Form } from 'antd';
import React, { useCallback, useState } from 'react';
import { Container, Header } from './styles';

interface Col {
    span: number;
}

interface ILayout {
    labelCol: Col;
    wrapperCol: Col;
}

interface IInitialValues {
    text1: string;
    text2: string;
    text3: string;
}

const layout: ILayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const initialValues: IInitialValues = {
    text1: '',
    text2: '',
    text3: '',
}

const { useForm } = Form;
const About: React.FC = () => {
    const [form] = useForm()
    const [sending, isSending] = useState<boolean>(false);

    const handleSubmit = useCallback(() => {
        if (!!sending) return

        isSending(true);

        const payload = form.getFieldsValue();

        /**
         * HERE GOES THE PROMISE
         */

        setTimeout(() => {
            isSending(false);
        }, 2000);

    }, [])

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
            label="Bloco 01"
            name="text1"
            rules={[{ required: true, message: 'Por favor insira o texto do bloco 01!' }]}
        >
            <Input.TextArea />
        </Form.Item>

        <Form.Item
            label="Bloco 02"
            name="text2"
            rules={[{ required: true, message: 'Por favor insira o texto do bloco 02!' }]}
        >
            <Input.TextArea />
        </Form.Item>

        <Form.Item
            label="Bloco 03"
            name="text3"
            rules={[{ required: true, message: 'Por favor insira o texto do bloco 03!' }]}
        >
            <Input.TextArea />
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