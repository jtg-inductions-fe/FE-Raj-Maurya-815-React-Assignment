import { Outlet } from 'react-router';

import { MainLayoutWrapper } from './MainLayout.styles';
import { Navbar } from '../../containers/Navbar';

const MainLayout = () => (
    <MainLayoutWrapper>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </MainLayoutWrapper>
);

export default MainLayout;
