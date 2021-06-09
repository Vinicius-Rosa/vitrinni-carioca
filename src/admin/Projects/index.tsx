import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { getToken } from '../../services/auth';

import { Button, DatePicker, Form, Input, Row, Select, Switch, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';

import { Container } from './styles';
import { Header } from '../Home/styles';
import moment from 'moment';

interface ColumnProps {
    title: string;
    dataIndex: string;
    key: string;
    render?: any;
}

interface ProjectProps {
    id: number;
    title: string;
    local: string;
    category: string;
    desc: string;
    date: string;
    highlight: boolean;
    project_images: any[];
    created_at: string;
    updated_at: string;
}

const Projects: React.FC = () => {
    if (typeof window === 'undefined') return <></>

    const [form] = useForm()
    const token = getToken()

    const [sending, isSending] = useState<boolean>(false);
    const [dataSource, setDataSource] = useState<ProjectProps[]>([]);
    const [projectOptions, setProjectOptions] = useState<any[]>([]);

    const [selectedId, setSelectedId] = useState<string>("");
    const [category, setCategory] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            const optionsResponse = await axios.get('https://vitrinniapi.herokuapp.com/api/categories')
            const options = optionsResponse.data.map(({ id, name }) => ({ name, id }));
            setProjectOptions(options);

            const response = await axios.get('https://vitrinniapi.herokuapp.com/api/projects')
            const formatted: ProjectProps[] = response.data.map((item, i) => ({
                ...item,
                key: i + 1,
                date: new Date(item.date).toLocaleDateString(),
                category: item.category.name,
                highlight: item.highlight === 1 ? true : false
            }))

            setDataSource(formatted)
        })()
    }, [])

    const handleEdit = useCallback(item => {
        setSelectedId(item.id);
        setCategory(item.category_id)
        form.setFieldsValue({
            ...item,
            highlight: item.highlight === true,
            date: moment(item.date, 'DD/MM/YYYY')
        })
    }, [])

    const handleSubmit = useCallback(async () => {
        if (!!sending) return

        isSending(true);

        const formValues = form.getFieldsValue();

        let payload = {
            ...formValues,
            category,
            highlight: formValues.highlight ? 1 : 0,
            area: Number(formValues.area),
            date: moment(formValues.date).format('YYYY-MM-DD HH:mm:ss')
        };

        const url: string = !!selectedId
            ? `https://vitrinniapi.herokuapp.com/api/projects/update/${selectedId}`
            : 'https://vitrinniapi.herokuapp.com/api/projects';

        console.log("payload", payload)

        axios.post(url,
            payload, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                isSending(false);
                setSelectedId(null);
            })
            .catch(err => {
                isSending(false);
                setSelectedId(null);
            })

    }, [sending, selectedId, category])

    const errorHandler = useCallback(error => { }, [])

    const columns: ColumnProps[] = [
        {
            title: 'Data',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Destaque',
            dataIndex: 'highlight',
            key: 'highlight',
            render: (_, { highlight }) => highlight && <span>Sim</span>
        },
        {
            title: 'Tipo',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Local',
            dataIndex: 'local',
            key: 'local',
        },
        {
            title: 'Área',
            dataIndex: 'area',
            key: 'area',
            render: (_, { area }) => <span>{area}m²</span>
        },
        {
            title: 'Editar',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => <Button
                type="primary"
                shape="round"
                icon={<EditOutlined />}
                onClick={() => handleEdit(record)}
            />
        },
    ];

    const optionsRender = useMemo(() => projectOptions.map(
        ({ id, name }) => <Select.Option key={id} value={id}>{name}</Select.Option>
    ), [projectOptions])

    return <Container>
        <Header>
            <h1>Projetos</h1>
            <p>
                Esta sessão é responsável pelos projetos cadastrados.
                Estes aparecerão tanto na página inicial quanto numa
                página específica para projetos.
            </p>
        </Header>

        <Form
            form={form}
            name="basic"
            initialValues={{}}
            onFinish={handleSubmit}
            onFinishFailed={errorHandler}
        >
            <Row style={{ gap: "20px" }} justify="space-between">
                <Form.Item
                    label="Data"
                    name="date"
                    rules={[{ required: true, message: 'Por favor insira uma data!' }]}
                >
                    <DatePicker format='DD/MM/YYYY' onChange={handleSubmit} />
                </Form.Item>
                <Form.Item
                    label="Título"
                    name="title"
                    rules={[{ required: true, message: 'Por favor insira o título!' }]}
                    style={{ minWidth: '300px' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Destaque"
                    name="highlight"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>

            </Row>
            <br />
            <Row style={{ gap: "20px" }} justify="space-between">
                <Form.Item
                    label="Tipo"
                    name="category"
                    rules={[{ required: true, message: 'Por favor insira uma data!' }]}
                >
                    <Select placeholder="Selecionar..." onChange={e => setCategory(Number(e))}>{optionsRender}</Select>
                </Form.Item>
                <Form.Item
                    label="Local"
                    name="local"
                    rules={[{ required: true, message: 'Por favor insira o local!' }]}
                    style={{ minWidth: '300px' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Área"
                    name="area"
                    rules={[{ required: true, message: 'Por favor insira a área!' }]}
                >
                    <Input type="number" />
                </Form.Item>

            </Row>
            <br />
            <Form.Item
                label="Descrição"
                name="desc"
                rules={[{ required: true, message: 'Por favor insira a descrição!' }]}
            >
                <Input.TextArea style={{ height: '150px' }} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={sending}>
                    Inserir novo
                </Button>
            </Form.Item>
        </Form>

        <Table
            loading={sending}
            dataSource={dataSource}
            columns={columns}
            expandable={{
                expandedRowRender: ({ desc }) => <p style={{ margin: 0 }}>{desc}</p>,
            }}
        />
    </Container>;
}

export default Projects;