import React from "react";
import { Row, Col, Card } from "antd";
import LineChart from "./LinecChart";

class ChartDisplay extends React.Component {
    render() {
        const colStyle = {
            padding: '8px'
        }
        return (
            <Row>
                <Col span={24} style={colStyle}>
                    <Card title="Revenue Chart" type="inner">
                        <LineChart />
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default ChartDisplay;