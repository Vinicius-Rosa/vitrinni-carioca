import React, { useCallback, useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link'
import { logout } from '../../services/auth';

const Sidebar: React.FC = () => {
    const [selected, setSelected] = useState<string>("home")
    const clickHandler = useCallback(({ key }) => setSelected(key), [])

    const handleLogout = () => {
        if (typeof window === 'undefined') return

        logout()
        window.location.pathname = '/admin/login'
    }

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
            <Menu.Item key="logout" style={{ position: 'absolute', bottom: '0', height: '80px', padding: 0 }}>
                <button
                    style={{ height: '100%', width: '100%', textAlign: 'center', fontSize: '20px' }}
                    onClick={handleLogout}>
                    Sair
                </button>
            </Menu.Item>
        </Menu>
    );
}

export default Sidebar;