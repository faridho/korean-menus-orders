import React from "react";
import { Row, Col, PageHeader, Input } from 'antd';
import TableOrder  from "./components/TableOrder";

const { Search } = Input

class Order extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <PageHeader
                            ghost={false}
                            title="Order"
                            subTitle="This is a subtitle"
                            extra={[
                                <Search placeholder="Type No Order" onSearch={value => console.log(value)} enterButton />
                            ]}
                        ></PageHeader>
                    </Col>
                </Row>
                <TableOrder />
            </div>
        )
    }
}

export default Order;