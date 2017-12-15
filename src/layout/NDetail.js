import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, Col, Button, message} from 'antd';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';
import NInputHtml from '../component/NInputHtml';
import http from "../common/http";

import constant from '../common/constant';

class NDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
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

            this.setState({
                isLoad: true
            });

            http.request({
                url: '/' + this.props.name + '/admin/' + (this.props.route.path.indexOf('/add') > -1 ? 'save' : 'update'),
                data: values,
                success: function () {
                    message.success(constant.success);

                    this.handleBack();
                }.bind(this),
                complete: function () {
                    this.setState({
                        is_load: false
                    });
                }.bind(this)
            });
        });
    }

    handleReset() {
        this.props.form.resetFields();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        var buttonList = [];
        for (var i = 0; i < this.props.buttonList.length; i++) {
            var button = {
                name: this.props.buttonList[i].name,
                icon: this.props.buttonList[i].icon,
                isPrimary: this.props.buttonList[i].isPrimary
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
                <NHeader name={this.props.title} breadcrumbList={this.props.breadcrumbList} buttonList={buttonList}/>
                <div className="page-content">
                    <Form>
                        {
                            this.props.columnList.map(function (column) {
                                return (
                                    <Row key={column.id}>
                                        <NCol>
                                            <NInputText id={column.id}
                                                        label={column.name}
                                                        required={column.required}
                                                        getFieldDecorator={getFieldDecorator}
                                                        onPressEnter={this.handleSubmit.bind(this)}
                                            />
                                        </NCol>
                                    </Row>
                                )
                            }.bind(this))
                        }
                        <Row>
                            <NCol>
                                <Col xs={{span: 24}}
                                     sm={{span: 17, offset: 4}}
                                     md={{span: 17, offset: 4}}
                                     lg={{span: 17, offset: 4}}
                                     xl={{span: 17, offset: 4}}
                                >
                                    <Button type="primary"
                                            icon="check-circle"
                                            loading={this.state.isLoad}
                                            className="page-button-left"
                                            onClick={this.handleSubmit.bind(this)}
                                    >
                                        提交
                                    </Button>
                                    <Button icon="reload"
                                            loading={this.state.isLoad}
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

NDetail.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    breadcrumbList: PropTypes.array.isRequired,
    buttonList: PropTypes.array.isRequired,
    columnList: PropTypes.array.isRequired
};

NDetail.defaultProps = {};

NDetail = Form.create()(NDetail);

export default NDetail;