import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, Col, Button, Modal, message} from 'antd';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';
import NInputTextArea from '../component/NInputTextArea';
import NInputNumber from '../component/NInputNumber';
import NSwitch from '../component/NSwitch';
import NSelect from '../component/NSelect';
import NTreeSelect from '../component/NTreeSelect';
import NInputHtml from '../component/NInputHtml';
import NInputMedia from '../component/NInputMedia';
import NInputDate from '../component/NInputDate';
import NInputCascader from '../component/NInputCascader'
import http from "../common/http";

import constant from '../common/constant';

class NDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoad: false,
			isEdit: false,
			systemVersion: ''
		};
		if (this.props.submitKey && this.props.submitKey.length) {
			for (let str of this.props.submitKey) {
				this.state[str] = ''
			}
		}
	}

	componentDidMount() {
		if (this.props.match.path.indexOf('/edit') > -1) {
			this.setState({
				isEdit: true
			});

			this.handleLoad();
		}
		if (this.props.params) {
			this.setState(this.props.params);
		}
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

		let values = {};
		values[this.props.primaryKey] = this.props.params[this.props.primaryKey];

		http.request({
			url: this.props.baseUrl + '/find',
			data: values,
			success: function (data) {
				let values = {};

				for (let i = 0; i < this.props.columnList.length; i++) {
					if (this.props.columnList[i].type === 'SELECT') {
						values[this.props.columnList[i].id] = {
							key: data[this.props.columnList[i].select.returnValueName],
							label: data[this.props.columnList[i].select.returnLabelName]
						};
					} else if (this.props.columnList[i].type === 'TREESELECT') {
						values[this.props.columnList[i].id] = [{
							value: data[this.props.columnList[i].returnValueName],
							label: data[this.props.columnList[i].returnLabelName]
						}];
					} else if (this.props.columnList[i].type === 'MEDIA') {
						values[this.props.columnList[i].id] = [{
							value: data[this.props.columnList[i].returnValueName],
							label: data[this.props.columnList[i].returnLabelName]
						}];
					} else {
						values[this.props.columnList[i].id] = data[this.props.columnList[i].id];
					}
				}

				// console.log(values)

				this.props.form.setFieldsValue(values);

				let states = {systemVersion: data.systemVersion};

				if (this.props.submitKey && this.props.submitKey.length) {
					for (let str of this.props.submitKey) {
						states[str] = data[str];
					}
				}
				this.setState(states);
			}.bind(this),
			complete: function () {
				this.setState({
					isLoad: false
				});

			}.bind(this)
		});
	}

	handleSubmit() {
		if (this.state.isLoad) {
			return;
		}

		this.props.form.validateFieldsAndScroll((errors, values) => {
			if (!!errors) {
				return;
			}

			for (let i = 0; i < this.props.columnList.length; i++) {
				if (this.props.columnList[i].type === 'SELECT') {
					for (let value in values) {
						if (value === this.props.columnList[i].id) {
							let item = Object.assign({}, values[value]);
							item[this.props.columnList[i].select.returnValueName] = item.key;
							item[this.props.columnList[i].select.returnLabelName] = item.label;
							delete item.key;
							delete item.label;

							values = Object.assign({}, values, item);
							delete values[value];
						}
					}
				} else if (this.props.columnList[i].type === 'TREESELECT') {
					for (let value in values) {
						if (value === this.props.columnList[i].id) {
							let item = Object.assign({}, values[value]);
							item[this.props.columnList[i].select.returnValueName] = item.value;
							item[this.props.columnList[i].select.returnLabelName] = item.label;
							delete item.value;
							delete item.label;

							values = Object.assign({}, values, item);
							delete values[value];
						}
					}
				} else if (this.props.columnList[i].type === 'MEDIA') {
					for (let value in values) {
						if (value === this.props.columnList[i].id) {
							if (this.props.columnList[i].returnLimit === 1) {
								let item = Object.assign({}, values[value][0]);
								item[this.props.columnList[i].returnValueName] = item.value;
								item[this.props.columnList[i].returnLabelName] = item.label;
								delete item.value;
								delete item.label;

								values = Object.assign({}, values, item);
								delete values[value];
							} else {

							}
						}
					}
				}
			}

			// console.log(values);
			// return;

			this.setState({
				isLoad: true
			});

			if (this.state.isEdit) {
				values[this.props.primaryKey] = this.props.params[this.props.primaryKey];
			}
			values.systemVersion = this.state.systemVersion;

			if (this.props.submitKey && this.props.submitKey.length) {
				for (let str of this.props.submitKey) {
					values[str] = this.state[str];
				}
			}

			http.request({
				url: this.props.baseUrl + '/' + (this.state.isEdit ? 'update' : 'save'),
				data: values,
				success: function (data) {
					if (data) {
						message.success(constant.success);

						this.handleBack();
					} else {
						message.error(constant.failure);
					}
				}.bind(this),
				complete: function () {
					this.setState({
						isLoad: false
					});
				}.bind(this)
			});
		});
	}

	handleDelete() {
		if (this.state.isLoad) {
			return;
		}

		Modal.confirm({
			title: '确定要删除该数据吗?',
			content: '数据删除之后就不能恢复了',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk: function () {
				this.setState({
					isLoad: true
				});

				let values = {};
				values[this.props.primaryKey] = this.props.params[this.props.primaryKey];
				values.systemVersion = this.state.systemVersion;

				http.request({
					url: this.props.baseUrl + '/delete',
					data: values,
					success: function (data) {
						if (data) {
							message.success(constant.success);

							this.handleBack();
						} else {
							message.error(constant.failure);
						}
					}.bind(this),
					complete: function () {
						this.setState({
							isLoad: false
						});

					}.bind(this)
				});
			}.bind(this),
			onCancel() {

			},
		});
	}

	handleReplace() {
		this.setState({
			isLoad: true
		});

		let values = {};
		values[this.props.primaryKey] = this.props.params[this.props.primaryKey];

		http.request({
			url: this.props.baseUrl + '/synchronize',
			data: values,
			success: function (data) {
				if (data) {
					message.success(constant.success);


					this.setState({
						isLoad: false
					}, function () {
						this.handleLoad()
					}.bind(this));
				} else {
					message.error(constant.failure);
				}
			}.bind(this),
			complete: function () {

			}
		});
	}

	handleReset() {
		this.props.form.resetFields();
	}

	handleBack() {
		this.props.history.goBack();
	}

	render() {
		const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;

		let buttonList = [];
		for (let i = 0; i < this.props.buttonList.length; i++) {
			let button = {
				name: this.props.buttonList[i].name,
				icon: this.props.buttonList[i].icon,
				isPrimary: this.props.buttonList[i].isPrimary
			};

			switch (this.props.buttonList[i].type) {
				case 'SUBMIT':
					button.click = this.handleSubmit.bind(this);
					break;
				case 'BACK':
					button.click = this.handleBack.bind(this);
					break;
				case 'DELETE':
					button.click = this.handleDelete.bind(this);
					break;
				default:
					button.click = this.props.buttonList[i].click;
					break;
			}

			buttonList.push(button);
		}

		let secondButtonList = [];
		for (let i = 0; i < this.props.secondButtonList.length; i++) {
		    let button = {
		        name: this.props.secondButtonList[i].name,
		        icon: this.props.secondButtonList[i].icon
		    };

		    switch (this.props.secondButtonList[i].type) {
			case 'BACK':
				button.click = this.handleBack.bind(this);
				break;
		        case 'DELETE':
		            button.click = this.handleDelete.bind(this);
		            break;
		        case 'REPLACE':
		            button.click = this.handleReplace.bind(this);
		            break;
		        default:
		            button.click = this.props.secondButtonList[i].click;
		            break;
		    }

		    secondButtonList.push(button);
		}

		return (
			<div>
				<NHeader name={this.props.title}
						 isList={false}
						 isEdit={this.state.isEdit}
						 breadcrumbList={this.props.breadcrumbList}
						 buttonList={buttonList}
						 secondButtonList={secondButtonList}/>
				<div className="page-content">
					<Form>
						{
							this.props.columnList.map(function (column) {
								return (
									<Row key={column.id}>
										<NCol>
											{(function () {
												switch (column.type) {
													case 'VARCHAR':
														return (
															<NInputText id={column.id}
																		type={column.inputType}
																		label={column.name}
																		required={column.required}
																		getFieldDecorator={getFieldDecorator}
																		getFieldValue={getFieldValue}
																		setFieldsValue={setFieldsValue}
																		onPressEnter={this.handleSubmit.bind(this)}
															/>
														);
													case 'LONG_VARCHAR':
														return (
															<NInputTextArea id={column.id}
																			label={column.name}
																			rows={column.rows}
																			required={column.required}
																			getFieldDecorator={getFieldDecorator}
																			getFieldValue={getFieldValue}
																			setFieldsValue={setFieldsValue}
																			onPressEnter={this.handleSubmit.bind(this)}
															/>
														)
													case 'NUMBER':
														return (
															<NInputNumber id={column.id}
																		  label={column.name}
																		  min={column.min}
																		  max={column.max}
																		  step={column.step}
																		  formatter={column.formatter}
																		  parser={column.parser}
																		  required={column.required}
																		  getFieldDecorator={getFieldDecorator}
																		  getFieldValue={getFieldValue}
																		  setFieldsValue={setFieldsValue}
																		  onPressEnter={this.handleSubmit.bind(this)}
															/>
														)
													case 'BOOLEAN':
														return (
															<NSwitch id={column.id}
																	 label={column.name}
																	 checkedChildren={column.checkedChildren}
																	 unCheckedChildren={column.unCheckedChildren}
																	 getFieldDecorator={getFieldDecorator}
																	 getFieldValue={getFieldValue}
																	 setFieldsValue={setFieldsValue}
															/>
														)
													case 'SELECT':
														return (
															<NSelect id={column.id}
																	 label={column.name}
																	 staticOptionList={column.select.staticOptionList}
																	 remoteOptionConfig={column.select.remoteOptionConfig}
																	 allowClear={column.select.allowClear}
																	 showSearch={column.select.showSearch}
																	 initialValue={column.select.initialValue}
																	 getFieldDecorator={getFieldDecorator}
																	 getFieldValue={getFieldValue}
																	 setFieldsValue={setFieldsValue}
															/>
														)
													case 'TREESELECT':
														return (
															<NTreeSelect id={column.id}
																		 label={column.name}
																		 required={column.required}
																		 multiple={column.select.multiple}
																		 treeCheckable={column.select.treeCheckable}
																		 treeDefaultExpandAll={column.select.treeDefaultExpandAll}
																		 remoteOptionConfig={column.select.remoteOptionConfig}
																		 returnValueName={column.select.returnValueName}
																		 returnLabelName={column.select.returnLabelName}
																		 returnObject={column.select.returnObject}
																		 getFieldDecorator={getFieldDecorator}
																		 getFieldValue={getFieldValue}
																		 setFieldsValue={setFieldsValue}
															/>
														)
													case 'HTML':
														return (
															<NInputHtml id={column.id}
																		label={column.name}
																		getFieldDecorator={getFieldDecorator}
																		getFieldValue={getFieldValue}
																		setFieldsValue={setFieldsValue}
															/>
														)
													case 'DATEPICKER':
														return (
															<NInputDate id={column.id}
																		required={column.required}
																		label={column.name}
																		type={column.type}
																		showTime={column.showTime}
																		initialValue={column.initialValue}
																		format={column.format}
																		getFieldDecorator={getFieldDecorator}
																		getFieldValue={getFieldValue}
																		setFieldsValue={setFieldsValue}
															/>
														)
													case 'MEDIA':
														return (
															<NInputMedia id={column.id}
																		 label={column.name}
																		 type={column.type}
																		 required={column.required}
																		 aspect={column.aspect}
																		 returnLimit={column.returnLimit}
																		 returnValueName={column.returnValueName}
																		 returnLabelName={column.returnLabelName}
																		 supportUploadTypes={column.supportUploadTypes}
																		 getFieldDecorator={getFieldDecorator}
																		 getFieldValue={getFieldValue}
																		 setFieldsValue={setFieldsValue}
															/>
														)
													case 'CASCADER':
                                                         return (
															<NInputCascader  id={column.id}
																			 type={column.inputType}
																			 label={column.name}
																			 required={column.required}
																			 getFieldDecorator={getFieldDecorator}
																			 onPressEnter={this.handleSubmit.bind(this)}
															/>
                                                         )	
													default:
														return '';
												}
											}).bind(this)()}
										</NCol>
									</Row>
								)
							}.bind(this))
						}
						<Row>
							<NCol>
								<Col xs={{span: 24}}
									 sm={{span: 17, offset: 4}}
									 md={{span: 17, offset: 4}}
									 lg={{span: 17, offset: 4}}
									 xl={{span: 17, offset: 4}}
								>
									<Button type="primary"
											icon="check-circle"
											loading={this.state.isLoad}
											className="page-button-left"
											onClick={this.handleSubmit.bind(this)}
									>
										提交
									</Button>
									<Button icon="reload"
											loading={this.state.isLoad}
											onClick={this.handleReset.bind(this)}
									>
										重置
									</Button>
								</Col>
							</NCol>
						</Row>
					</Form>
				</div>
			</div>
		);
	}
}

NDetail.propTypes = {
	id: PropTypes.string.isRequired,
	baseUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	primaryKey: PropTypes.string.isRequired,
	store: PropTypes.object.isRequired,
	breadcrumbList: PropTypes.array.isRequired,
	buttonList: PropTypes.array.isRequired,
	secondButtonList: PropTypes.array.isRequired,
	columnList: PropTypes.array.isRequired,
	filterList: PropTypes.array.isRequired
};

NDetail.defaultProps = {
	filterList: [{
		produc: {
			value: 'productNameId',
			label: 'productName'
		}
	}]
};

NDetail = Form.create()(NDetail);

export default NDetail;