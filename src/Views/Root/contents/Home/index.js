import React from "react";
import { Row, Col, PageHeader, DatePicker } from 'antd';
import Cards from "./components/Cards";
import ChartDisplay from "./components/ChartDisplay";

const { RangePicker } = DatePicker;

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <PageHeader
                            ghost={false}
                            title="Dashboard"
                            subTitle="This is a subtitle"
                            extra={[
                                <RangePicker />
                            ]}
                        ></PageHeader>
                    </Col>
                </Row>
                <Cards />
                <ChartDisplay />
            </div>
        )
    }
}

export default Home