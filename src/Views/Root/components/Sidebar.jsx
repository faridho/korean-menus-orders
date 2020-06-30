import React from "react"
import { Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import { HomeOutlined, CoffeeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Sider } = Layout;

class Sidebar extends React.Component {
    render() {
        return (
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                >
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<CoffeeOutlined />}>
                        <Link to="/product">Product</Link>
                    </Menu.Item>
                    <Menu.Item icon={<ShoppingCartOutlined />}>
                        <Link to="/order">Order</Link>
                    </Menu.Item>
                    <Menu.Item icon={<ShoppingCartOutlined />}>
                        <Link to="/order">Logout</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar