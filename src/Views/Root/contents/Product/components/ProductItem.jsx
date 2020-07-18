import React from "react";

import { Col, Card, Avatar, Tooltip } from 'antd';
import { EditOutlined, ScissorOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

const colStyle = {
    padding: '8px'
}

const ProductItem = ({ id, cover, avatar, title, description, onClickPromotion, onClickDelete }) => (
    <Col span={6} style={colStyle} key={id}>

        <Card
            cover={
                <img
                    alt="example"
                    src={cover}
                />
            }
            actions={[
                <Tooltip placement="bottom" title="Promotion">
                    <ScissorOutlined onClick={onClickPromotion}/>
                </Tooltip>,
                <Tooltip placement="bottom" title="Edit">
                    <EditOutlined />
                </Tooltip>,
                <Tooltip placement="bottom" title="Delete">
                    <DeleteOutlined onClick={onClickDelete} />
                </Tooltip>
            ]}
        >
            <Meta
                title={title}
                description={description}
            />
        </Card>
    </Col>
)

export default ProductItem