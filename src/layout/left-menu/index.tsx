import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import Content from '../content';
import "./assets/index.scss";
import { ILeftMenuProps } from './entities';

const { Sider } = Layout;
export default function LeftMenu(props: ILeftMenuProps) {
    return (
        <Layout className={"Sample-Content"}>
            <Sider trigger={null} collapsible collapsed={props.collapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content />
        </Layout>
    )
}