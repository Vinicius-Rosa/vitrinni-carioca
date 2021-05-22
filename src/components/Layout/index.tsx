import { useRouter } from 'next/router'
import { useMemo } from 'react';
import Sidebar from '../../admin/components/Sidebar.component';
import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const isAdmin: Boolean = useMemo(() => router.asPath.includes("admin"), [router]);

    return <Container>
        {!!isAdmin ? <Sidebar /> : <Header />}

        <Content isAdmin={isAdmin}>
            {children}

            {!isAdmin && <>
                <Contact />

                <Footer />
            </>}
        </Content>


    </Container>;
}

export default Layout;