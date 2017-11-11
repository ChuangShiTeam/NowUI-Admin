import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Button, Table, Icon} from 'antd';

class Index extends Component {
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

    handleAdd() {
        this.props.history.push({
            pathname: '/product/detail',
            query: {}
        });
    }

    render() {
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
                                <Button className="page-header-body-button-left">刷新</Button>
                                <Button type="primary" onClick={this.handleAdd.bind(this)}>新增</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="page-header-description">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</div>
                </div>
                <div className="page-content">
                    <Table columns={columns} dataSource={data}/>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        index: state.index
    }
})(Index);
