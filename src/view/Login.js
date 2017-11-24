import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Icon, Form, Button, message} from 'antd';

import constant from '../common/constant';
import storage from '../common/storage';
import http from '../common/http';

import NCheckbox from '../component/NCheckbox';
import NInputText from '../component/NInputText';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleSubmit() {
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }

            this.setState({
                is_load: true
            });

            http.request({
                url: constant.login,
                data: values,
                success: function (data) {
                    message.success("登录成功");

                    storage.setToken(data.token);

                    setTimeout(function () {
                        this.props.history.push({
                            pathname: "/",
                            query: {}
                        });
                    }.bind(this), 500);
                }.bind(this),
                complete: function () {
                    this.setState({
                        is_load: false
                    });
                }.bind(this)
            });
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className="login">
                <div className="login-body">
                    <Form className="login-body-form">
                        <Row>
                            <div className="login-body-form-title">{constant.name}总控后台</div>
                        </Row>
                        <Row>
                            <NInputText id="user_account"
                                        size="large"
                                        required={true}
                                        prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                        getFieldDecorator={getFieldDecorator} placeholder="请输入账号"
                                        labelColSpan={0}
                                        wrapperColSpan={24}
                                        onPressEnter={this.handleSubmit.bind(this)}
                            />
                        </Row>
                        <Row>
                            <NInputText id="user_password"
                                        size="large"
                                        required={true}
                                        prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                        getFieldDecorator={getFieldDecorator} placeholder="请输入密码"
                                        labelColSpan={0}
                                        wrapperColSpan={24}
                                        onPressEnter={this.handleSubmit.bind(this)}
                            />
                        </Row>
                        <Row>
                            <NCheckbox id="is_remember"
                                       label="自动登录"
                                       getFieldDecorator={getFieldDecorator}
                                       labelColSpan={0}
                                       wrapperColSpan={24}
                            />
                        </Row>
                        <Row>
                            <Button type="primary"
                                    size="large"
                                    style={{width: '100%'}}
                                    loading={this.state.is_load}
                                    onClick={this.handleSubmit.bind(this)}
                            >
                                登录
                            </Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

Login = Form.create({})(Login);

export default connect(() => ({}))(Login);
