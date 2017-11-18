import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Button, Table, Popconfirm} from 'antd';

import http from '../../common/http';

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			is_load: false,
			page_index: 0,
			page_size: 5,
			total: 0,
			list: [],

		}
	}

	componentDidMount() {
		this.handleLoad();
	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	handleLoad() {
		this.setState({
			is_load: true
		});
        http.request({
            url: '/admin/app/config/category/list',
            data: {
				page_index: this.state.page_index,
				page_size: this.state.page_size,
				config_category_name: '',
				config_category_code: ''
			},
            success: function (data) {
                this.setState({
					total: data.total,
					list: data.list
				})
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
			pathname: '/app/config/category/add',
		});
	};

    handleEdit(config_category_id) {
        this.props.history.push({
            pathname: '/app/config/category/edit/' + config_category_id,
            query: {}
        });
    };

    handleDelete(config_category_id) {

	};

    handleChangeIndex(page, pageSize) {
    	this.setState({
			page_index: page
		}, function() {
    		this.handleLoad();
		}.bind(this))
	}

	render() {

		const columns = [{
			title: '名称',
			dataIndex: 'config_category_name',
			key: 'config_category_codeconfig_category_code'
		}, {
			title: '编码',
			dataIndex: 'config_category_code',
			key: 'config_category_code'
		}, {
			title: '操作',
			key: 'action',
			render: (text, record) => {
                return (
					<span>
						<a onClick={this.handleEdit.bind(this, record.config_category_id)}>修改</a>
						<span className="divider"/>
						<Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete.bind(this, record.config_category_id)}>
							<a>删除</a>
						</Popconfirm>
					</span>
                );
            },
		}];

        const pagination = {
            size: 'defalut',
            total: this.state.total,
            showTotal: function (total, range) {
                return '总共' + total + '条数据';
            },
            current: this.state.page_index,
            pageSize: this.state.page_size,
            onChange: this.handleChangeIndex.bind(this)
        };

		return (
			<div>
				<div className="page-header">
					<Row>
						<Col span={18}>
							<Breadcrumb>
								<Breadcrumb.Item><Link to="">首页</Link></Breadcrumb.Item>
								<Breadcrumb.Item><Link to="">应用管理</Link></Breadcrumb.Item>
								<Breadcrumb.Item><Link to="">应用配置分类</Link></Breadcrumb.Item>
							</Breadcrumb>
							<div className="page-header-title">
								应用配置分类信息
							</div>
							<div className="page-header-description"></div>
						</Col>
						<Col span={6} className="text-align-right">
							<Button className="margin-right-10">刷新</Button>
							<Button type="primary" onClick={this.handleAdd.bind(this)}>新增</Button>
						</Col>
					</Row>
				</div>
				<div className="page-content">
					<Table loading={this.state.is_load} pagination={pagination} columns={columns} dataSource={this.state.list} />
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		app_config_category: state.app_config_category
	}
})(Index);
