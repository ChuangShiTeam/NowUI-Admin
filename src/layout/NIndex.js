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

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        this.handleLoad();

        let value = {};

        for (let i = 0; i < this.props.searchList.length; i++) {
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
            isLoad: true
        });

        let values = {
            appId: this.props.store.appId,
            pageIndex: this.props.store.pageIndex,
            pageSize: this.props.store.pageSize
        };

        for (let i = 0; i < this.props.searchList.length; i++) {
            values[this.props.searchList[i].id] = this.props.store[this.props.searchList[i].id];
        }

        http.request({
            url: this.props.listUrl,
            data: values,
            success: function (data) {
                this.props.dispatch({
                    type: this.props.name,
                    data: {
                        total: data.total,
                        list: data.list
                    }
                });
            }.bind(this),
            error: function () {

            },
            complete: function () {
                this.setState({
                    isLoad: false
                })
            }.bind(this)
        });
    }

    handleChangeIndex(pageIndex) {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: this.props.name,
                data: {
                    pageIndex: pageIndex
                }
            });

            resolve();
        }.bind(this)).then(function () {
            this.handleLoad();
        }.bind(this));
    }

    handleChangeSize(pageIndex, pageSize) {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: this.props.name,
                data: {
                    pageIndex: pageIndex,
                    pageSize: pageSize
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
            pathname: '/product/edit/' + record[this.props.primaryKey],
            query: {}
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        let buttonList = [];
        for (let i = 0; i < this.props.buttonList.length; i++) {
            let button = {
                name: this.props.buttonList[i].name,
                icon: this.props.buttonList[i].icon,
                isPrimary: this.props.buttonList[i].isPrimary
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

        let columnList = [];
        for (let i = 0; i < this.props.columnList.length; i++) {
            let column = {
                title: this.props.columnList[i].name,
                key: this.props.columnList[i].id,
                dataIndex: this.props.columnList[i].id
            };

            if (i === 0) {
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
            current: this.props.store.pageIndex,
            pageSize: this.props.store.pageSize,
            showSizeChanger: true,
            onShowSizeChange: this.handleChangeSize.bind(this),
            onChange: this.handleChangeIndex.bind(this)
        };

        return (
            <div>
                <NHeader name={this.props.title} breadcrumbList={this.props.breadcrumbList} buttonList={buttonList}/>
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
                                                            <NInputText id={search.id}
                                                                        label={search.name}
                                                                        getFieldDecorator={getFieldDecorator}
                                                                        onPressEnter={this.handleSearch.bind(this)}
                                                                        multiLine={true}
                                                            />
                                                        )
                                                    default:
                                                        return '';
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
                                    <Table rowKey={this.props.primaryKey}
                                           loading={this.state.isLoad}
                                           columns={columnList}
                                           dataSource={this.props.store.list}
                                           pagination={pagination}
                                    />
                                )
                            case 'CARD':
                                return (
                                    <Row gutter={20}>
                                        {
                                            this.props.store.list.map(function (item) {
                                                return (
                                                    <Col key={item[this.props.primaryKey]} xs={24} sm={6} md={6} lg={4} xl={4} style={{marginBottom: '20px'}} onClick={this.handleEdit.bind(this, item)}>
                                                        <Card bodyStyle={{padding: 0, cursor: 'pointer'}}>
                                                            <div className="background-image" style={{backgroundImage: 'url(' + constant.image_host + item.file_path + ')'}}></div>
                                                            {
                                                                this.props.columnList.map(function (column) {
                                                                    return (
                                                                        <div key={column.id}>{item[column.id]}</div>
                                                                    )
                                                                })
                                                            }
                                                        </Card>
                                                    </Col>
                                                )
                                            }.bind(this))
                                        }
                                    </Row>
                                )
                            default:
                        }
                    }).bind(this)()}
                </div>
            </div>
        );
    }
}

NIndex.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    primaryKey: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    listUrl: PropTypes.string.isRequired,
    breadcrumbList: PropTypes.array.isRequired,
    buttonList: PropTypes.array.isRequired,
    searchList: PropTypes.array.isRequired,
    columnList: PropTypes.array.isRequired
};

NIndex.defaultProps = {
    type: 'TABLE'
};

NIndex = Form.create()(NIndex);

export default NIndex;