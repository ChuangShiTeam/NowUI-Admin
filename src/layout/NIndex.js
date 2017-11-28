import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Form, Table, Card} from 'antd';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';

import constant from '../common/constant';
import http from '../common/http';

class NIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.handleLoad();

        var value = {};

        for (var i = 0; i < this.props.searchList.length; i++) {
            value[this.props.searchList[i].id] = this.props.store[this.props.searchList[i].id];
        }

        this.props.form.setFieldsValue(value);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleSearch() {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: this.props.name,
                data: this.props.form.getFieldsValue()
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

        var parameter = {
            app_id: this.props.store.app_id,
            page_index: this.props.store.page_index,
            page_size: this.props.store.page_size
        };

        for (var i = 0; i < this.props.searchList.length; i++) {
            parameter[this.props.searchList[i].id] = this.props.store[this.props.searchList[i].id];
        }

        http.request({
            url: '/admin/product/list',
            data: parameter,
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

    handleEdit(record) {
        this.props.history.push({
            pathname: '/product/edit/' + record[this.props.primary],
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
                icon: this.props.buttonList[i].icon,
                is_primary: this.props.buttonList[i].is_primary
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

        var columnList = [];
        for (var i = 0; i < this.props.columnList.length; i++) {
            var column = {
                title: this.props.columnList[i].name,
                key: this.props.columnList[i].id,
                dataIndex: this.props.columnList[i].id
            };

            if (i == 0) {
                column.render = function (text, record) {
                    return (
                        <span>
                          <a onClick={this.handleEdit.bind(this, record)}>{text}</a>
                        </span>
                    )
                }.bind(this)
            }

            columnList.push(column);
        }

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
                            {
                                this.props.searchList.map(function (search) {
                                    return (
                                        <NCol key={search.id} multiLine={true}>
                                            {(function () {
                                                switch (search.type) {
                                                    case 'VARCHAR':
                                                        return (
                                                            <NInputText id="product_name"
                                                                        label="商品名称"
                                                                        getFieldDecorator={getFieldDecorator}
                                                                        onPressEnter={this.handleSearch.bind(this)}
                                                                        multiLine={true}
                                                            />
                                                        )
                                                        break;
                                                    default:
                                                }
                                            }).bind(this)()}
                                        </NCol>
                                    )
                                }.bind(this))
                            }
                        </Row>
                    </Form>
                </div>
                <div className="page-content">

                    {(function () {
                        switch (this.props.type) {
                            case 'TABLE':
                                return (
                                    <Table rowKey="product_id"
                                           loading={this.state.is_load}
                                           columns={columnList}
                                           dataSource={this.props.store.list}
                                           pagination={pagination}
                                    />
                                )
                                break;
                            case 'CARD':
                                return (
                                    <Row gutter={20}>
                                        {
                                            this.props.store.list.map(function (item) {
                                                return (
                                                    <Col key={item[this.props.primary]} xs={24} sm={6} md={6} lg={4} xl={4} style={{marginBottom: '20px'}} onClick={this.handleEdit.bind(this, item)}>
                                                        <Card bodyStyle={{padding: 0, cursor: 'pointer'}}>
                                                            <div className="background-image" style={{backgroundImage: 'url(' + constant.image_host + item.file_path + ')'}}></div>
                                                            {
                                                                this.props.columnList.map(function (column) {
                                                                    return (
                                                                        <div key={column.id}>{item[column.id]}</div>
                                                                    )
                                                                }.bind(this))
                                                            }
                                                        </Card>
                                                    </Col>
                                                )
                                            }.bind(this))
                                        }
                                    </Row>
                                )
                                break;
                            default:
                        }
                    }).bind(this)()}
                </div>
            </div>
        );
    }
}

NIndex.propTypes = {
    name: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    type: PropTypes.string,
    store: PropTypes.object.isRequired,
    buttonList: PropTypes.array.isRequired,
    searchList: PropTypes.array.isRequired,
    columnList: PropTypes.array.isRequired
};

NIndex.defaultProps = {
    type: 'TABLE'
};

NIndex = Form.create()(NIndex);

export default NIndex;