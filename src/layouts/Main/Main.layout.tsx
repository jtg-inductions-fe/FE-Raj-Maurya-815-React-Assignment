import { Outlet } from 'react-router';

import { MainLayoutWrapper } from './Main.styles';
import { Navbar } from '../../containers/Navbar';

export const MainLayout = () => (
    <MainLayoutWrapper>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </MainLayoutWrapper>
);
