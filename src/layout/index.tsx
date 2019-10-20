import * as React from 'react';
import { Layout } from 'antd'
import TopMenu from './top-menu';
import LeftMenu from './left-menu';

const { Footer } = Layout;

export default function AppLayout() {
    const [collapsed, setCollapsed] = React.useState(false);

    function toggle() {
        setCollapsed(!collapsed);
    }

    return (
        <Layout>
            <TopMenu collapsed={collapsed} toggle={toggle} />
            <LeftMenu collapsed={collapsed} />
        </Layout>
    )
}