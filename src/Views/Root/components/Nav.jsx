import React from 'react'
import { Layout } from 'antd'
import { AlertOutlined } from '@ant-design/icons'

const { Header } = Layout

class Nav extends React.Component {
    render() {
        return (
            <Header className="header">
                <div className="logo">
                    <h2><AlertOutlined /> KOREAN FANS RESTAURANT</h2>
                </div>
            </Header>
        )
    }
}

export default Nav