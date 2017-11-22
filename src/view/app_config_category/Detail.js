import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Form, Input, Button, message, Spin} from 'antd';

import http from '../../common/http';

class Detail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			is_load: false,
            system_version: ''
		}
	}

	componentDidMount() {
        if (this.props.route.path.indexOf('/edit') > -1) {
            this.handleLoad();
        }
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
            url: '/admin/app/config/category/find',
            data: {
                config_category_id: this.props.params.config_category_id
            },
            success: function (data) {
                this.props.form.setFieldsValue({
                    config_category_name: data.config_category_name,
                    config_category_code: data.config_category_code,
                    config_category_description: data.config_category_description
                });

                this.setState({
                    system_version: data.system_version
                });
            }.bind(this),
            complete: function () {
                this.setState({
                    is_load: false
                });

            }.bind(this)
        });
	}

	handleBack() {
		this.props.history.goBack();
	}

	handleSubmit() {
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }


            let type = this.props.route.path.indexOf('/edit') > -1 ? 'update' : 'save';

            if (type === 'update') {
                values.config_category_id = this.props.params.config_category_id;
			}
            values.system_version = this.state.system_version;

            this.setState({
                is_load: true
			});

            http.request({
                url: '/admin/app/config/category/' + type,
                data: values,
                success: function (data) {
                    message.success('提交成功');

                    this.props.history.goBack();
                }.bind(this),
                complete: function () {
                    this.setState({
						is_load: false
					});
                }.bind(this)
            });
        });
	}

	render() {
		const {getFieldDecorator} = this.props.form;
		const FormItem = Form.Item;
        const { TextArea } = Input;

		return (
			<div>
				<Spin spinning={this.state.is_load}>
					<div className="page-header">
						<Row>
							<Col span={18}>
								<Breadcrumb>
									<Breadcrumb.Item><Link to="">首页</Link></Breadcrumb.Item>
									<Breadcrumb.Item><Link to="">应用管理</Link></Breadcrumb.Item>
									<Breadcrumb.Item>应用配置分类信息</Breadcrumb.Item>
								</Breadcrumb>
								<div className="page-header-title">
									应用配置分类表单
								</div>
								<div className="page-header-description"></div>
							</Col>
							<Col span={6} className="text-align-right">
								<Button type="primary" onClick={this.handleBack.bind(this)}>返回</Button>
							</Col>
						</Row>
					</div>
					<div className="page-content">
						<Form onSubmit={this.handleSubmit}>
							<FormItem
								label="名称"
								labelCol={{ span: 4 }}
								wrapperCol={{ span: 8 }}
							>
								{getFieldDecorator('config_category_name', {
									rules: [{ required: true, message: '请输入名称' }],
								})(
									<Input />
								)}
							</FormItem>
							<FormItem
								label="编码"
								labelCol={{ span: 4 }}
								wrapperCol={{ span: 8 }}
							>
								{getFieldDecorator('config_category_code', {
									rules: [{ required: true, message: '请输入编码' }],
								})(
									<Input />
								)}
							</FormItem>
							<FormItem
								label="描述"
								labelCol={{ span: 4 }}
								wrapperCol={{ span: 8 }}
							>
								{getFieldDecorator('config_category_description', {
									rules: [{ required: true, message: '请输入描述' }],
								})(
									<TextArea rows={6} />
								)}
							</FormItem>
							<FormItem
								wrapperCol={{ span: 8, offset: 4 }}
							>
								<Button type="primary" onClick={this.handleSubmit.bind(this)}>
									提交
								</Button>
							</FormItem>
						</Form>
					</div>
				</Spin>
			</div>
		);
	}
}

Detail = Form.create()(Detail);

export default connect((state) => {
	return {
		app_config_category: state.app_config_category
	}
})(Detail);
