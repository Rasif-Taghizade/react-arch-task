/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, Outlet } from "react-router-dom"
import { Menu, MenuProps } from "antd"
import { Header } from "antd/es/layout/layout"

const items1: MenuProps['items'] = [
    {
        key: '/', label: (
            <NavLink to='/'>Home</NavLink>
        ),
    },
    {
        key: '/workers', label: (
            <NavLink to='/workers'>Workers</NavLink>
        )
    },
    {
        key: '/add', label: (
            <NavLink to='/add'>Add Worker</NavLink>
        )
    },
]

export const PublicComponent = () => {
    return (
        <div>
            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
            }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    style={{ flex: 1, minWidth: 0 }}
                    items={items1}
                >
                </Menu>
            </Header>
            <div className="public__content">
                <Outlet />
            </div>
        </div>
    )
}
