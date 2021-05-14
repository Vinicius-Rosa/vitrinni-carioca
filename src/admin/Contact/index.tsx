import { Button, Input, Form, Divider } from 'antd';
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

const Contact: React.FC = () => {
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
            <h1>Contato</h1>
            <p>Esta sessão é responsável pelas informações de contato.</p>
        </Header>

        <Form
            {...layout}

            form={form}
            name="basic"
            initialValues={initialValues}
            onFinish={handleSubmit}
            onFinishFailed={errorHandler}
        >
            <Divider orientation="left">Espírito Santo</Divider>

            <Form.Item
                label="Endereço 01"
                name="esAddress1"
                rules={[{ required: true, message: 'Espírito Santo - Por favor insira o endereço 01!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Telefone"
                name="esPhone1"
                rules={[{ required: true, message: 'Espírito Santo - Por favor insira o telefone 01!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Endereço 02"
                name="esAddress2"
                rules={[{ required: true, message: 'Espírito Santo - Por favor insira o endereço 02!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Telefone"
                name="esPhone2"
                rules={[{ required: true, message: 'Espírito Santo - Por favor insira o telefone 02!' }]}
            >
                <Input />
            </Form.Item>


            <br />
            <Divider orientation="left">Rio de Janeiro</Divider>
            <Form.Item
                label="Endereço"
                name="rjAddress"
                rules={[{ required: true, message: 'Rio de Janeiro - Por favor insira o endereço!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Telefone"
                name="rjPhone"
                rules={[{ required: true, message: 'Rio de Janeiro - Por favor insira o telefone!' }]}
            >
                <Input />
            </Form.Item>

            <br />
            <Divider orientation="left">Minas Gerais</Divider>
            <Form.Item
                label="Endereço"
                name="mgAddress"
                rules={[{ required: true, message: 'Minas Gerais - Por favor insira o endereço!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Telefone"
                name="mgPhone"
                rules={[{ required: true, message: 'Minas Gerais - Por favor insira o telefone!' }]}
            >
                <Input />
            </Form.Item>
            

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={sending}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    </Container>;
}

export default Contact;