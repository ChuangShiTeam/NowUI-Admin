import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Button, Form, Table, Icon} from 'antd';

import notification from '../../common/notification';
import http from '../../common/http';

import InputText from '../../component/InputText';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        notification.on('notification_product_index_load', this, function () {
            this.handleLoad();
        });

        this.handleLoad();
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {
        notification.remove('notification_product_index_load', this);
    }

    handleSearch() {
        new Promise(function (resolve) {

            resolve();
        }.bind(this)).then(function () {
            this.handleLoad();
        }.bind(this));
    }

    handleLoad() {
        this.setState({
            is_load: true
        });

        http.request({
            url: '/admin/product/list',
            data: {
                app_id: this.props.product.app_id,
                product_name: this.props.product.product_name,
                page_index: this.props.product.page_index,
                page_size: this.props.product.page_size
            },
            success: function (data) {
                this.props.dispatch({
                    type: 'product/fetch',
                    data: {
                        total: data.total,
                        list: data.list
                    }
                });
            }.bind(this),
            complete: function () {
                this.setState({
                    is_load: false
                })
            }.bind(this)
        });
    }

    handleAdd() {
        this.props.history.push({
            pathname: '/product/detail',
            query: {}
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                  <a>Action 一 {record.name}</a>
                  <span className="ant-divider"/>
                  <a>Delete</a>
                  <span className="ant-divider"/>
                  <a className="ant-dropdown-link">
                    More actions <Icon type="down"/>
                  </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];

        return (
            <div>
                <div className="page-header">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="">商品管理</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="page-header-body">
                        <Row>
                            <Col xs={{span: 24}} sm={{span: 12}} className="page-header-body-title">
                                商品信息
                            </Col>
                            <Col xs={{span: 24}} sm={{span: 12}} className="page-header-body-button">
                                <Button className="page-header-body-button-left"
                                        onClick={this.handleAdd.bind(this)}>新增</Button>
                                <Button type="primary">搜索</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="page-header-description">

                    </div>
                </div>
                <div className="page-search">
                    <Form>
                        <Row>
                            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                                <InputText getFieldDecorator={getFieldDecorator} id="user_account" label="账号"/>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                                <InputText getFieldDecorator={getFieldDecorator} id="user_password" label="密码"/>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="page-content">
                    <Table columns={columns} dataSource={data}/>
                </div>
            </div>
        );
    }
}

Index = Form.create()(Index);

export default connect((state) => {
    return {
        product: state.product
    }
})(Index);
