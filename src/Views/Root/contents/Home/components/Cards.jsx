import React from "react";
import { Row, Col, Card } from "antd";

class Cards extends React.Component {
    render() {
        const colStyle = {
            padding: '8px'
        }
        return (
            <Row className="row-pad">
                <Col span={12} style={colStyle}>
                    <Card title="Total Sales" type="inner">
                        <h2>789</h2>
                    </Card>
                </Col>
                <Col span={12} style={colStyle}>
                    <Card title="Total Revenue" type="inner">
                        <h2>IDR 80.000.000</h2>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Cards;