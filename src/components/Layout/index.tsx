import { useRouter } from 'next/router'
import { useMemo } from 'react';
import Sidebar from '../../admin/components/Sidebar.component';
import Header from '../Header';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const isAdmin: Boolean = useMemo(() => router.asPath.includes("admin"), [router]);

    console.log("isAdmin", isAdmin)

    return <Container>
        {isAdmin ? <Sidebar /> : <Header />}

        <Content isAdmin={isAdmin}>
            {children}
        </Content>
    </Container>;
}

export default Layout;