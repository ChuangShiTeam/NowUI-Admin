import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Form, Select, Input, Button} from 'antd';

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
        this.props.history.goBack();
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const FormItem = Form.Item;
        const Option = Select.Option;

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
                        <FormItem
                            label="Note"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 8 }}
                        >
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="Gender"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 8 }}
                        >
                            {getFieldDecorator('gender', {
                                rules: [{ required: true, message: 'Please select your gender!' }],
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            wrapperCol={{ span: 8, offset: 4 }}
                        >
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                                提交
                            </Button>
                        </FormItem>
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
