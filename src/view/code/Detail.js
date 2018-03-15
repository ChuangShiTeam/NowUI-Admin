import React, {Component} from 'react';
import {Form, Row, Checkbox, Select, Table, message} from 'antd';

import NHeader from '../../component/NHeader';
import NCol from '../../component/NCol';
import NInputText from '../../component/NInputText';
import NSwitch from "../../component/NSwitch";

import constant from '../../common/constant';
import http from "../../common/http";

class Detail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoad: false,
			columnList: []
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
		if (this.state.isLoad) {
			return;
		}

		this.setState({
			isLoad: true
		});

		http.request({
			url: '/code/admin/table/field/v1/list',
			data: {
				tableSchema: this.props.params['tableSchema'],
				tableName: this.props.params['tableName']
			},
			success: function (data) {
				for (let i = 0; i < data.length; i++) {
					data[i].isSearch = false;
					data[i].isCanSearch = true;
					data[i].isList = false;
					data[i].isCanList = true;
					data[i].isDetail = true;
					data[i].isCanDetail = true;
					data[i].isUpdatable = true;
					data[i].isCanUpdatable = true;
					data[i].inputType = 'VARCHAR';

					if (data[i].columnKey === 'PRI') {
						data[i].isCanSearch = false;
						data[i].isList = false;
						data[i].isCanList = false;
						data[i].isDetail = false;
						data[i].isCanDetail = false;
						data[i].isUpdatable = false;
						data[i].isCanUpdatable = false;
					}

					if (data[i].columnName === 'appId') {
						data[i].isCanSearch = false;
						data[i].isCanList = false;
						data[i].isDetail = false;
						data[i].isCanDetail = false;
						data[i].isUpdatable = false;
						data[i].isCanUpdatable = false;
					}

					if (data[i].columnName === 'systemVersion') {
						data[i].isList = false;
						data[i].isCanList = false;
					}

					if (data[i].columnName.indexOf('system') !== -1) {
						data[i].isDetail = false;
						data[i].isCanDetail = false;
						data[i].isUpdatable = false;
						data[i].isCanUpdatable = false;
					}

					if (data[i].columnType.indexOf('varchar') !== -1) {
						data[i].inputType = 'VARCHAR';
					} else if (data[i].columnType.indexOf('datetime') !== -1) {
						data[i].inputType = 'DATEPICKER';
					} else if (data[i].columnType.indexOf('int') !== -1) {
						data[i].inputType = 'NUMBER';
					} else if (data[i].columnType.indexOf('tinyint') !== -1) {
						data[i].inputType = 'BOOLEAN';
					} else if (data[i].columnType.indexOf('longtext') !== -1) {
						data[i].inputType = 'HTML';
					}
				}

				this.setState({
					columnList: data
				});
			}.bind(this),
			complete: function () {
				this.setState({
					isLoad: false
				});

			}.bind(this)
		});
	}

	handleChangeSearch(index) {
		let columnList = this.state.columnList;
		columnList[index].isSearch = !columnList[index].isSearch;
		this.setState({
			columnList: columnList
		});
	}

	handleChangeList(index) {
		let columnList = this.state.columnList;

		if (columnList[index].columnKey === 'PRI' || columnList[index].columnName === 'systemVersion') {

		} else {
			columnList[index].isList = !columnList[index].isList;
			this.setState({
				columnList: columnList
			});
		}
	}

	handleChangeDetail(index) {
		let columnList = this.state.columnList;
		columnList[index].isDetail = !columnList[index].isDetail;
		this.setState({
			columnList: columnList
		});
	}

	handleChangeInputType(value) {
		let index = value.split(',')[0];
		let inputType = value.split(',')[1];
		let columnList = this.state.columnList;
		columnList[index].inputType = inputType;
		this.setState({
			columnList: columnList
		});
	}

	handleChangeUpdate(index) {
		let columnList = this.state.columnList;
		columnList[index].isUpdatable = !columnList[index].isUpdatable;
		this.setState({
			columnList: columnList
		});
	}

	handleSubmit() {
		this.props.form.validateFieldsAndScroll((errors, values) => {
			if (!!errors) {
				return;
			}

			let is_appId = false;
			let isSearch = false;
			let isList = false;
			for (let i = 0; i < this.state.columnList.length; i++) {
				if (this.state.columnList[i].isSearch) {
					isSearch = true;
				}

				if (this.state.columnList[i].isList) {
					isList = true;
				}
			}

			if (!isSearch) {
				message.error("选择一个搜索字段" + (is_appId ? ',除了appId' : ''));

				return;
			}

			if (!isList) {
				message.error("选择一个列表字段");

				return;
			}

			this.setState({
				isLoad: true
			});

			values.tableName = this.props.params['tableName'];
			values.columnList = JSON.stringify(this.state.columnList);

			http.request({
				url: '/code/admin/v1/generate',
				data: values,
				success: function () {
					message.success(constant.success);
				},
				complete: function () {
					this.setState({
						isLoad: false
					});
				}.bind(this)
			});
		});
	}

	handleCancel() {
		this.setState({
			isLoad: false,
			columnList: []
		});

		this.props.form.resetFields();
	}

	handleReset() {
		this.props.form.resetFields();
	}

	handleBack() {
		this.props.history.goBack();
	}

	render() {
		const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;

		const breadcrumbList = [{
			name: '代码生成管理',
			url: '/code/index'
		}, {
			name: '数据表信息',
			url: ''
		}];

		const buttonList = [{
			name: '生成',
			icon: 'check-circle',
			type: 'NORMARL',
			isPrimary: true,
			click: this.handleSubmit.bind(this)
		}, {
			name: '返回',
			icon: 'left-circle',
			type: 'BACK',
			isPrimary: false,
			click: this.handleBack.bind(this)
		}];

		const columns = [{
			title: '名称',
			dataIndex: 'columnName'
		}, {
			width: 150,
			title: '备注',
			dataIndex: 'columnComment'
		}, {
			width: 130,
			title: '类型',
			dataIndex: 'columnType'
		}, {
			width: 90,
			title: '是否搜索',
			dataIndex: 'isSearch',
			render: (text, record, index) => (
				record.isCanSearch ?
					<Checkbox checked={record.isSearch}
							  onChange={this.handleChangeSearch.bind(this, index)}></Checkbox>
					:
					''
			)
		}, {
			width: 90,
			title: '是否列表',
			dataIndex: 'isList',
			render: (text, record, index) => (
				record.isCanList ?
					<Checkbox checked={record.isList} onChange={this.handleChangeList.bind(this, index)}></Checkbox>
					:
					''
			)
		}, {
			width: 90,
			title: '是否详情',
			dataIndex: 'isDetail',
			render: (text, record, index) => (
				record.isCanDetail ?
					<Checkbox checked={record.isDetail}
							  onChange={this.handleChangeDetail.bind(this, index)}></Checkbox>
					:
					''
			)
		}, {
			width: 160,
			title: '输入框类型',
			dataIndex: 'inputType',
			render: (text, record, index) => (
				record.isCanDetail ?
					<Select defaultValue={record.inputType}
							style={{width: 160}}
							onChange={this.handleChangeInputType.bind(this)}
							placeholder="请选择输入框类型">
						<Select.Option value={index + ",VARCHAR"}>VARCHAR</Select.Option>
						<Select.Option value={index + ",LONG_VARCHAR"}>LONG_VARCHAR</Select.Option>
						<Select.Option value={index + ",NUMBER"}>NUMBER</Select.Option>
						<Select.Option value={index + ",BOOLEAN"}>BOOLEAN</Select.Option>
						<Select.Option value={index + ",SELECT"}>SELECT</Select.Option>
						<Select.Option value={index + ",TREESELECT"}>TREESELECT</Select.Option>
						<Select.Option value={index + ",HTML"}>HTML</Select.Option>
						<Select.Option value={index + ",DATEPICKER"}>DATEPICKER</Select.Option>
						<Select.Option value={index + ",MEDIA"}>MEDIA</Select.Option>
					</Select>
					:
					''
			)
			// }, {
			// 	width: 100,
			// 	title: '是否更新',
			// 	dataIndex: 'isUpdatable',
			// 	render: (text, record, index) => (
			// 		record.isCanUpdatable ?
			// 			<Checkbox checked={record.isUpdatable}
			// 					  onChange={this.handleChangeUpdate.bind(this, index)}></Checkbox>
			// 			:
			// 			''
			// 	)
		}];

		const secondButtonList = [];

		return (
			<div>
				<NHeader name="数据表信息"
						 isList={true}
						 isEdit={false}
						 breadcrumbList={breadcrumbList}
						 buttonList={buttonList}
						 secondButtonList={secondButtonList}/>
				<div className="page-search">
					<Form>
						<Row>
							<NCol multiLine={true}>
								<NInputText id="moduleName"
											label="微服务名称"
											getFieldDecorator={getFieldDecorator}
											getFieldValue={getFieldValue}
											setFieldsValue={setFieldsValue}
											onPressEnter={this.handleSubmit.bind(this)}
											multiLine={true}
											required={true}
								/>
							</NCol>
							<NCol multiLine={true}>
								<NInputText id="packageName"
											label="模块名称"
											getFieldDecorator={getFieldDecorator}
											getFieldValue={getFieldValue}
											setFieldsValue={setFieldsValue}
											onPressEnter={this.handleSubmit.bind(this)}
											multiLine={true}
											required={true}
								/>
							</NCol>
							<NCol multiLine={true}>
								<NInputText id="tableComment"
											label="注释前缀(中文)"
											getFieldDecorator={getFieldDecorator}
											getFieldValue={getFieldValue}
											setFieldsValue={setFieldsValue}
											onPressEnter={this.handleSubmit.bind(this)}
											multiLine={true}
											required={true}
								/>
							</NCol>
							<NCol multiLine={true}>
								<NInputText id="author"
											label="开发者"
											getFieldDecorator={getFieldDecorator}
											getFieldValue={getFieldValue}
											setFieldsValue={setFieldsValue}
											onPressEnter={this.handleSubmit.bind(this)}
											multiLine={true}
											required={true}
								/>
							</NCol>
							<NCol multiLine={true}>
								<NSwitch id="isMq"
										 label="消息队列"
										 getFieldDecorator={getFieldDecorator}
										 getFieldValue={getFieldValue}
										 setFieldsValue={setFieldsValue}
										 multiLine={true}
								/>
							</NCol>
						</Row>
					</Form>
				</div>
				<div className="page-content">
					<Table
						rowKey={record => record.columnName}
						size="default"
						className="margin-top"
						columns={columns}
						dataSource={this.state.columnList} pagination={false}
					/>
				</div>
			</div>
		);
	}
}

Detail.propTypes = {};

Detail.defaultProps = {};

Detail = Form.create()(Detail);

export default Detail;