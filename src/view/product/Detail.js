import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Form, Button} from 'antd';

import NHeader from '../../component/NHeader';
import NCol from '../../component/NCol';
import NInputText from '../../component/NInputText';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleBack() {
        this.props.history.goBack();
    }

    handleSubmit() {
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }

            console.log(values);
        });

        // this.props.form.setFieldsValue({
        //     user_account: '123',
        //     user_password: '456',
        // });
    }

    handleReset() {
        this.props.form.resetFields();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const buttonList = [{
            name: '返回',
            icon: 'left-circle',
            click: this.handleBack.bind(this)
        }];

        return (
            <div>
                <NHeader name="商品表单" breadcrumbList={[{name: '商品管理', url: '/product/index'}, {name: '商品信息', url: ''}]}
                         buttonList={buttonList}/>
                <div className="page-content">
                    <Form>
                        <Row>
                            <NCol>
                                <NInputText id="user_account"
                                            label="账号"
                                            required={true}
                                            getFieldDecorator={getFieldDecorator}
                                            onPressEnter={this.handleSubmit.bind(this)}
                                />
                            </NCol>
                        </Row>
                        <Row>
                            <NCol>
                                <NInputText id="user_password"
                                            label="密码"
                                            required={true}
                                            getFieldDecorator={getFieldDecorator}
                                            onPressEnter={this.handleSubmit.bind(this)}
                                />
                            </NCol>
                        </Row>
                        <Row>
                            <NCol>
                                <Col span={17} offset={7}>
                                    <Button type="primary"
                                            icon="check-circle"
                                            loading={this.state.is_load}
                                            className="page-button-left"
                                            onClick={this.handleSubmit.bind(this)}
                                    >
                                        提交
                                    </Button>
                                    <Button icon="reload"
                                            loading={this.state.is_load}
                                            onClick={this.handleReset.bind(this)}
                                    >
                                        重置
                                    </Button>
                                </Col>
                            </NCol>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

Detail = Form.create()(Detail);

export default connect(function (state) {
    return {
        product: state.product
    }
})(Detail);
