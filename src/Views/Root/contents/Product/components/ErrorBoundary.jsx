import React from "react"
import { Col, Card, Tooltip } from 'antd';
import { EditOutlined, ScissorOutlined, DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        const colStyle = {
            padding: '8px'
        }

        if (this.state.hasError) {
            return (
                <Col span={6} style={colStyle}>
                    <Card
                        cover={
                            <img
                                alt="example"
                                src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
                            />
                        }
                        actions={[
                            <Tooltip placement="bottom" title="Promtion">
                                <ScissorOutlined />
                            </Tooltip>,
                            <Tooltip placement="bottom" title="Edit">
                                <EditOutlined />
                            </Tooltip>,
                            <Tooltip placement="bottom" title="Delete">
                                <DeleteOutlined />
                            </Tooltip>
                        ]}
                    >
                        <Meta
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            title="Wrong"
                            description="Wrong"
                        />
                    </Card>
                </Col>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary
