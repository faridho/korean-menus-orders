import React from "react";
import { Button, Modal, Form, Upload, Select, Input, notification } from 'antd';
import { PlusSquareOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

const formlayout = 'vertical'

class NewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalCreateVisible: false,
            loading: false,
            category: 'Makanan',
            productName: '',
            tags: [],
            desc: '',
            price: 0
        }
        this.submitBtnClicked = this.submitBtnClicked.bind(this)
        this.cancelBtnClicked = this.cancelBtnClicked.bind(this)
        this.showModal = this.showModal.bind(this)

        this.changeCategory = this.changeCategory.bind(this)
        this.changeProductName = this.changeProductName.bind(this)
        this.changeTags = this.changeTags.bind(this)
        this.changeDesc = this.changeDesc.bind(this)
        this.changePrice = this.changePrice.bind(this)
    }

    showModal() {
        this.setState({
            modalCreateVisible: true
        })
    }

    changeCategory(value) {
        this.setState({
            category: value
        })
    }

    changeProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    changeTags(value) {
        this.setState({
            tags: value
        })
    }

    changeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }

    changePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    submitBtnClicked(event) {
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                modalCreateVisible: false,
                loading: false,
            })
            event.preventDefault();
            this.openNotificationWithIcon('success')
        }, 3000)

        const payload = this.state
        console.log(payload)
    }

    cancelBtnClicked() {
        this.setState({
            modalCreateVisible: false,
            modalPromotionVisible: false,
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
        const { modalCreateVisible, modalPromotionVisible, loading, ...form } = this.state
        const column = {
            ...form
        }
        return (
            <div>
                <Button icon={< PlusSquareOutlined />} key="1" type="primary" onClick={this.showModal}>
                    New Product
                </Button>
                <FormNewProduct
                    title="Add New Product"
                    visible={modalCreateVisible}
                    onSubmit={this.submitBtnClicked}
                    onCancel={this.cancelBtnClicked}
                    form={column}
                    changeCategory={this.changeCategory}
                    changeProductName={this.changeProductName}
                    changeTags={this.changeTags}
                    changeDesc={this.changeDesc}
                    changePrice={this.changePrice}
                    loading={loading}
                />
            </div>
        )
    }
}

function FormNewProduct(props) {
    const btnLayout = {
        float: 'right'
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
                <form onSubmit={props.onSubmit}>
                    <Form.Item label="Choose the best picture as thumbnail in menus display">
                        <Upload name="logo" listType="picture">
                            <Button>
                                <UploadOutlined /> Click to upload
                        </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="Select menu category to distinguish customer selected">
                        <Select
                            placeholder="Select Catagory"
                            value={props.form.category}
                            onChange={props.changeCategory}
                        >
                            <Option value="Minuman">Minuman</Option>
                            <Option value="Makanan">Makanan</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Input product name do you want">
                        <Input
                            placeholder="Input Product Name"
                            value={props.form.productName}
                            onChange={props.changeProductName}
                        />
                    </Form.Item>
                    <Form.Item label="Describe your product here">
                        <TextArea rows={4}
                            placeholder="Type here..."
                            value={props.form.desc}
                            onChange={props.changeDesc}
                        />
                    </Form.Item>
                    <Form.Item label="If you want to some tags you can add in this column">
                        <Select mode="tags"
                            placeholder="Input Tags"
                            value={props.form.tags}
                            onChange={props.changeTags}
                        ></Select>
                    </Form.Item>
                    <Form.Item label="How much will you give charge to customer?">
                        <Input prefix="IDR"
                            name="price"
                            value={props.form.price}
                            onChange={props.changePrice}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" style={btnLayout} loading={props.loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </form>
            </Form>
        </Modal>
    )
}
export default NewProduct;