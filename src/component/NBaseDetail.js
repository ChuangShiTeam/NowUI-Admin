import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, Col, Button} from 'antd';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';

class NBaseDetail extends Component {
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
        });
    }

    handleReset() {
        this.props.form.resetFields();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const breadcrumbList = [{
            name: '商品管理',
            url: '/product/index'
        }, {
            name: '商品信息',
            url: ''
        }];

        var buttonList = [];
        for (var i = 0; i < this.props.buttonList.length; i++) {
            var button = {
                name: this.props.buttonList[i].name,
                icon: this.props.buttonList[i].icon,
                is_primary: this.props.buttonList[i].is_primary
            };

            switch (this.props.buttonList[i].type) {
                case 'BACK':
                    button.click = this.handleBack.bind(this);
                    break;
                default:
                    button.click = this.props.buttonList[i].click;
                    break;
            }

            buttonList.push(button);
        }

        return (
            <div>
                <NHeader name="商品表单" breadcrumbList={breadcrumbList} buttonList={buttonList}/>
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

NBaseDetail.propTypes = {
    name: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    buttonList: PropTypes.array.isRequired
};

NBaseDetail.defaultProps = {};

NBaseDetail = Form.create()(NBaseDetail);

export default NBaseDetail;