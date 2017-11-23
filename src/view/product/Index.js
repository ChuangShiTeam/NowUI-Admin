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

        this.state = {}
    }

    componentDidMount() {
        notification.on('notification_product_index_load', this, function () {
            this.handleLoad();
        });

        // this.handleLoad();
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {
        notification.remove('notification_product_index_load', this);
    }

    handleAdd() {
        this.props.history.push({
            pathname: '/product/detail',
            query: {}
        });
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
            click: this.handleAdd.bind(this)
        }];

        const columnList = [{
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
                  <a>查看</a>
                </span>
            ),
        }];

        const dataList = [{
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
                <NHeader name="商品信息" breadcrumbList={breadcrumbList} buttonList={buttonList}/>
                <div className="page-search">
                    <Form>
                        <Row>
                            <NCol>
                                <NInputText getFieldDecorator={getFieldDecorator} id="product_name" label="商品名称"/>
                            </NCol>
                        </Row>
                    </Form>
                </div>
                <div className="page-content">
                    <Table columns={columnList} dataSource={dataList}/>
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
