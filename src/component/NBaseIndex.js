import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, Table} from 'antd';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';

import http from '../common/http';

class NBaseIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.handleLoad();
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleSearch() {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: this.props.name,
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
                app_id: this.props.store.app_id,
                product_name: this.props.store.product_name,
                page_index: this.props.store.page_index,
                page_size: this.props.store.page_size
            },
            success: function (data) {
                this.props.dispatch({
                    type: this.props.name,
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
                type: this.props.name,
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
                type: this.props.name,
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

        var buttonList = [];
        for (var i = 0; i < this.props.buttonList.length; i++) {
            var button = {
                name: this.props.buttonList[i].name,
                icon: this.props.buttonList[i].icon
            };

            switch (this.props.buttonList[i].type) {
                case 'ADD':
                    button.click = this.handleAdd.bind(this);
                    break;
                case 'SEARCH':
                    button.click = this.handleSearch.bind(this);
                    break;
                default:
                    button.click = this.props.buttonList[i].click;
                    break;
            }

            buttonList.push(button);
        }

        const columnList = [{
            title: '商品名称',
            key: 'product_name',
            dataIndex: 'product_name',
            render: function (text, record) {
                return (
                    <span>
                      <a onClick={this.handleEdit.bind(this, record.product_id)}>{text}</a>
                    </span>
                )
            }.bind(this)
        }];

        const pagination = {
            size: 'defalut',
            total: this.props.store.total,
            showTotal: function (total) {
                return '总共' + total + '条数据';
            },
            current: this.props.store.page_index,
            pageSize: this.props.store.page_size,
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
                           dataSource={this.props.store.list}
                           pagination={pagination}
                    />
                </div>
            </div>
        );
    }
}

NBaseIndex.propTypes = {
    name: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    buttonList: PropTypes.array.isRequired,
    searchList: PropTypes.array.isRequired
};

NBaseIndex.defaultProps = {};

NBaseIndex = Form.create()(NBaseIndex);

export default NBaseIndex;