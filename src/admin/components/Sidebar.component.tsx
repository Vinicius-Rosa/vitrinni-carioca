import React, { useCallback, useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link'

const Sidebar: React.FC = () => {
    const [selected, setSelected] = useState<string>("home")
    const clickHandler = useCallback(({ key }) => setSelected(key), [])

    return (
        <Menu
            theme="dark"
            onClick={clickHandler}
            selectedKeys={[selected]}
            style={{ width: 256, height: "100vh", position: "fixed", top: "0", left: "0" }}
            mode="inline"
        >
            <Menu.Item key="home">
                <Link href="/admin/">Home</Link>
            </Menu.Item>
            <Menu.Item key="projects">
                <Link href="/admin/projetos">Projetos</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link href="/admin/sobre">Sobre</Link>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link href="/admin/contato">Contato</Link>
            </Menu.Item>
        </Menu>
    );
}

export default Sidebar;