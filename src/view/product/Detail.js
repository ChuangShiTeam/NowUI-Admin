import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Form, Button} from 'antd';

import FormItemInputText from '../../component/FormItemInputText';
import FormItemButton from '../../component/FormItemButton';

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
        const FormItem = Form.Item;

        return (
            <div>
                <div className="page-header">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="">商品管理</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>商品信息</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="page-header-body">
                        <Row>
                            <Col xs={{span: 12}} sm={{span: 12}} className="page-header-body-title">
                                商品表单
                            </Col>
                            <Col xs={{span: 12}} sm={{span: 12}} className="page-header-body-button">
                                <Button type="primary" onClick={this.handleBack.bind(this)}>返回</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="page-header-description">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</div>
                </div>
                <div className="page-content">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItemInputText getFieldDecorator={getFieldDecorator} id="user_account" label="账号"/>
                        <FormItemInputText getFieldDecorator={getFieldDecorator} id="user_password" label="密码"/>
                        <FormItemButton onClick={this.handleSubmit.bind(this)}/>
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
