import React from "react";
import "./Login.css";
import { Layout, Row, Col, Form, Input, Button, Card } from 'antd';
import * as firebase from "firebase/app";

const { Content } = Layout;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        const payload = this.state

        const loginData = firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(function (result) {
            const user = {
                email: result.user.email,
                uid: result.user.uid
            };
            console.log(user);
        }).catch(function (error) {
            console.log(error.message)
        });

        this.setState({
            id: loginData.uid,
            email: loginData.email
        })

        event.preventDefault()

    }

    render() {
        const { email, password } = this.state
        
        return (
            <Content className="login">
                <Row>
                    <Col span={6} offset={10}>
                        <div className="site-card-border-less-wrapper">
                            <Card title="Login" bordered={false}>
                                <Form>
                                    <form onSubmit={this.onSubmit}>
                                        <Form.Item>
                                            <Input
                                                placeholder="Username"
                                                value={email}
                                                onChange={this.changeEmail}
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Input.Password
                                                placeholder="Password"
                                                value={password}
                                                onChange={this.changePassword}
                                            />
                                        </Form.Item>

                                        <Form.Item >
                                            <Button htmlType="submit" type="primary" block>
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </form>
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Content>
        )
    }
}


export default Login