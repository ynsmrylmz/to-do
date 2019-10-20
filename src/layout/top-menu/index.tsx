import * as React from 'react'
import { Layout, Icon } from 'antd'
import "./assets/index.scss"
import { ITopMenuProps } from './entities'


export default function TopMenu(props: ITopMenuProps) {
    return (
        <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <div className={"sample-icon"}>
                <Icon
                    className="trigger"
                    type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={props.toggle}
                />
            </div>
        </Layout.Header>
    )
}