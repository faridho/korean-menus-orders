import React from "react"
import Nav from "./components/Nav.jsx"
import Sidebar from "./components/Sidebar.jsx"

import Product from "./contents/Product/index"
import Order from "./contents/Order/index";
import Home from "./contents/Home/index";
import { Route } from "react-router-dom"

import "./Root.css"
import { Layout } from 'antd';
const { Content } = Layout;

class Root extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sidebar />
                        <Content className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/product" component={Product} />
                            <Route exact path="/order" component={Order} />
                            </Content>
                    </Layout>
                </Content>
            </div>
        )
    }
}

export default Root