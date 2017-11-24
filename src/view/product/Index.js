import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Form, Table} from 'antd';

import NHeader from '../../component/NHeader';
import NCol from '../../component/NCol';
import NInputText from '../../component/NInputText';

import http from '../../common/http';
import notification from '../../common/notification';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false
        }
    }

    componentDidMount() {
        notification.on('notification_product_index_load', this, function () {
            this.handleLoad();
        });

        this.handleLoad();

        this.props.form.setFieldsValue({
            product_name: this.props.product.product_name
        });
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {
        notification.remove('notification_product_index_load', this);
    }

    handleSearch() {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: 'product',
                data: {
                    product_name: this.props.form.getFieldValue('product_name')
                }
            });

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
                    type: 'product',
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

    handleChangeIndex(page_index) {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: 'product',
                data: {
                    page_index: page_index
                }
            });

            resolve();
        }.bind(this)).then(function () {
            this.handleLoad();
        }.bind(this));
    }

    handleChangeSize(page_index, page_size) {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: 'product',
                data: {
                    page_index: page_index,
                    page_size: page_size
                }
            });

            resolve();
        }.bind(this)).then(function () {
            this.handleLoad();
        }.bind(this));
    }

    handleAdd() {
        this.props.history.push({
            pathname: '/product/add',
            query: {}
        });
    }

    handleEdit(product_id) {
        this.props.history.push({
            pathname: '/product/edit/' + product_id,
            query: {}
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const breadcrumbList = [{
            name: '商品管理',
            url: ''
        }];

        const buttonList = [{
            name: '新增',
            icon: 'plus-circle',
            click: this.handleAdd.bind(this)
        }, {
            name: '搜索',
            icon: 'search',
            loading: this.state.is_load,
            click: this.handleSearch.bind(this)
        }];

        const columnList = [{
            title: '商品名称',
            key: 'product_name',
            dataIndex: 'product_name',
            render: (text, record) => (
                <span>
                  <a onClick={this.handleEdit.bind(this, record.product_id)}>{text}</a>
                </span>
            )
        }];

        const pagination = {
            size: 'defalut',
            total: this.props.product.total,
            showTotal: function (total) {
                return '总共' + total + '条数据';
            },
            current: this.props.product.page_index,
            pageSize: this.props.product.page_size,
            showSizeChanger: true,
            onShowSizeChange: this.handleChangeSize.bind(this),
            onChange: this.handleChangeIndex.bind(this)
        };

        return (
            <div>
                <NHeader name="商品信息" breadcrumbList={breadcrumbList} buttonList={buttonList}/>
                <div className="page-search">
                    <Form>
                        <Row>
                            <NCol>
                                <NInputText id="product_name"
                                            label="商品名称"
                                            getFieldDecorator={getFieldDecorator}
                                            onPressEnter={this.handleSearch.bind(this)}
                                />
                            </NCol>
                        </Row>
                    </Form>
                </div>
                <div className="page-content">
                    <Table rowKey="product_id"
                           loading={this.state.is_load}
                           columns={columnList}
                           dataSource={this.props.product.list}
                           pagination={pagination}
                    />
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
