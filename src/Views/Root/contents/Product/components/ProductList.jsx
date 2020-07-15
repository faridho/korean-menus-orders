import React from "react";
import { connect } from "react-redux";
import ProductData from "./ProductsData";
import ProductItem from "./ProductItem";
import ErrorBoundary from "./ProductsData";

import { Button, Card, Avatar, Modal, Form, notification, Input, DatePicker } from 'antd';
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { RangePicker } = DatePicker;
const { confirm } = Modal

const formlayout = 'vertical'

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            loading: false
        }

        this.showModal = this.showModal.bind(this)
        this.submitBtnClicked = this.submitBtnClicked.bind(this)
        this.cancelBtnClicked = this.cancelBtnClicked.bind(this)
    }

    showModal() {
        this.setState({
            modalVisible: true
        })
    }

    submitBtnClicked(event) {
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                modalVisible: false,
                loading: false,
            })
            event.preventDefault();
            this.openNotificationWithIcon('success')
        }, 3000)
    }

    cancelBtnClicked() {
        this.setState({
            modalVisible: false,
            loading: false
        })
    }

    openNotificationWithIcon(type) {
        const msg = notification[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });

        return msg
    }

    render() {
        const { modalVisible, loading } = this.state
        const { products } = this.props
        
        return (
            <div>
                <ErrorBoundary>
                    <ProductData>
                        {
                            products.map(item => {
                                return (
                                    <ProductItem
                                        id={item.id}
                                        cover={item.cover}
                                        title={item.title}
                                        description={item.description}
                                        onClickPromotion={this.showModal}
                                        onClickDelete={showDeleteConfirm}
                                    />
                                )
                            })
                        }
                    </ProductData>
                </ErrorBoundary>
                <FormPromotion
                    title="Create Promotion"
                    visible={modalVisible}
                    loading={loading}
                    onCancel={this.cancelBtnClicked}
                    onSubmit={this.submitBtnClicked}
                />
            </div>
        )
    }
}

function FormPromotion(props) {
    const btnLayout = {
        float: 'right'
    }
    const picker = {
        width: '100%'
    }
    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onCancel={props.onCancel}
            footer={[]}
        >
            <Form
                layout={formlayout}
                initialValues={{ layout: formlayout }}
            >
                <form onSubmit={props.onSubmit} >
                    <Form.Item
                        label="Select start and end date will you give promotion to customer"
                    >
                        <RangePicker style={picker} />
                    </Form.Item>
                    <Form.Item
                        label="How much promotion minimum?">
                        <Input prefix="IDR"
                            name="price"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" loading={props.loading} style={btnLayout}>
                            Submit
                        </Button>
                    </Form.Item>
                </form>
            </Form>
        </Modal>
    )
}

function showDeleteConfirm() {
    confirm({
        title: 'Are you sure delete this task?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

export default connect(mapStateToProps)(ProductList)