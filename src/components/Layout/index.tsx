import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react';
import Sidebar from '../../admin/components/Sidebar.component';
import { getToken } from '../../services/auth';
import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const isAdmin: Boolean = useMemo(() => router.asPath.includes("admin"), [router]);

    const token: string = getToken();

    const [leftSpace, setLeftSpace] = useState<boolean>(false);
    const [mounted, isMounted] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!!isAdmin && !token) {
                router.push('/admin/login').finally(() => {
                    isMounted(true)
                });
            }
            if (!!isAdmin && !!token) {
                setLeftSpace(true)
                isMounted(true)
            }

            if (!isAdmin) isMounted(true)
        }
    }, [token, isAdmin])

    return <Container>
        {!!isAdmin && !!token ? <Sidebar /> : <Header />}

        <Content isAdmin={leftSpace}>
            {mounted && children}
        </Content>

        {!isAdmin && <>
            <Contact />

            <Footer />
        </>}

    </Container>;
}

export default Layout;