import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Form, Button} from 'antd';

import NHeader from '../../component/NHeader';
import NCol from '../../component/NCol';
import NInputText from '../../component/NInputText';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
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

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <NHeader name="商品表单" breadcrumbList={[{name: '商品管理', url: '/product/index'}, {name: '商品信息', url: ''}]} buttonList={[{name: '返回', click: this.handleBack.bind(this)}]}/>
                <div className="page-content">
                    <Form>
                        <Row>
                            <NCol>
                                <NInputText getFieldDecorator={getFieldDecorator} id="user_account" label="账号"/>
                            </NCol>
                        </Row>
                        <Row>
                            <NCol>
                                <NInputText getFieldDecorator={getFieldDecorator} id="user_password" label="密码"/>
                            </NCol>
                        </Row>
                        <Row>
                            <NCol>
                                <Col span={17} offset={7}>
                                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                                        提交
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

export default connect((state) => {
    return {
        index: state.index
    }
})(Detail);
