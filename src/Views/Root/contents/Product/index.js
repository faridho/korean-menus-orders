import React from "react";
import { Row, Col, PageHeader } from 'antd';
import ErrorBoundary from "./components/ErrorBoundary";

import ProductList from "./components/ProductList"
import NewProduct from "./components/NewProduct"

class Product extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <PageHeader
                            ghost={false}
                            title="Product"
                            subTitle="This is a subtitle"
                            extra={[
                                <NewProduct />
                            ]}
                        ></PageHeader>
                    </Col>
                </Row>
                <ErrorBoundary>
                    <ProductList />
                </ErrorBoundary>

            </div>
        )
    }
}

export default Product
