import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Form, Table, Card} from 'antd';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';
import NSelect from '../component/NSelect';

import constant from '../common/constant';
import http from '../common/http';
import {message} from "antd/lib/index";

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
				type: this.props.id,
				data: this.props.form.getFieldsValue()
			});

			resolve();
		}.bind(this)).then(function () {
			this.handleLoad();
		}.bind(this));
	}

	handleLoad() {
		if (this.state.isLoad) {
			return;
		}

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
				let expandedRowKeys = [];
				if (this.props.type === 'TREE_TABLE') {
					expandedRowKeys = this.setExpandedRowKeys(data.list);
				}
				this.props.dispatch({
					type: this.props.id,
					data: {
						total: data.total,
						list: data.list,
						expandedRowKeys: expandedRowKeys
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

	setExpandedRowKeys(list) {
		let expandedRowKeys = [];

		for (let i = 0; i < list.length; i++) {
			expandedRowKeys.push(list[i][this.props.primaryKey]);

			if (list[i].children) {
				expandedRowKeys = expandedRowKeys.concat(this.setExpandedRowKeys(list[i].children));
			}
		}

		return expandedRowKeys;
	}

	handleChangeIndex(pageIndex) {
		new Promise(function (resolve) {
			this.props.dispatch({
				type: this.props.id,
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
				type: this.props.id,
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

	handleAdd(addUrl) {
		this.props.history.push({
			pathname: addUrl,
			query: {}
		});
	}

	handleEdit(record, editUrl) {
		let pathname = editUrl;
		if (editUrl.indexOf('/:') > -1) {
			let index = editUrl.indexOf('/:');
			pathname = editUrl.substring(0, index + 1);
			let name = editUrl.substring(index + 2, editUrl.length);

			if (name.indexOf('/:') > -1) {
				let index2 = name.indexOf('/:');
				pathname += record[name.substring(0, index2)] + '/';
				let name2 = name.substring(index2 + 2, name.length);
				pathname += record[name2];
			} else {
				pathname += record[name];
			}
		}

		this.props.history.push({
			pathname: pathname,
			query: {}
		});
	}

	handleSynchronize(synchronizeUrl) {
		this.setState({
			isLoad: true
		});

		let values = {};
		values[this.props.primaryKey] = this.props.params[this.props.primaryKey];

		http.request({
			url: synchronizeUrl,
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
				case 'ADD':
					button.click = this.handleAdd.bind(this, this.props.buttonList[i].addUrl);
					break;
				case 'SEARCH':
					button.click = this.handleSearch.bind(this);
					break;
				case 'SYNCHRONIZE':
					button.click = this.handleSynchronize.bind(this, this.props.buttonList[i].synchronizeUrl);
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

			if (this.props.columnList[i].render) {
				column.render = function (text, record, index) {
					return this.props.columnList[i].render(text, record, index, this)
				}.bind(this);
			}

			if (this.props.columnList[i].editUrl) {
				column.render = function (text, record) {
					return (
						<span>
                          <a onClick={this.handleEdit.bind(this, record, this.props.columnList[i].editUrl)}>{this.props.columnList[i].alias ? this.props.columnList[i].alias : text}</a>
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

		let secondButtonList = [];
		for (let i = 0; i < this.props.secondButtonList.length; i++) {
			let button = {
				name: this.props.secondButtonList[i].name,
				icon: this.props.secondButtonList[i].icon
			};

			switch (this.props.secondButtonList[i].type) {
				case 'ADD':
					button.click = this.handleAdd.bind(this, this.props.secondButtonList[i].addUrl);
					break;
				case 'SEARCH':
					button.click = this.handleSearch.bind(this);
					break;
				case 'SYNCHRONIZE':
					button.click = this.handleSynchronize.bind(this, this.props.secondButtonList[i].synchronizeUrl);
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
						 isList={true}
						 isEdit={false}
						 breadcrumbList={this.props.breadcrumbList}
						 buttonList={buttonList}
						 secondButtonList={secondButtonList}/>
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
																		getFieldValue={getFieldValue}
																		setFieldsValue={setFieldsValue}
																		onPressEnter={this.handleSearch.bind(this)}
																		multiLine={true}
															/>
														);
													case 'SELECT':
														return (
															<NSelect id={search.id}
																	 label={search.name}
																	 staticOptionList={search.select.staticOptionList}
																	 remoteOptionConfig={search.select.remoteOptionConfig}
																	 storeKey={search.select.storeKey}
																	 storeName={this.props.id}
																	 store={this.props.store}
																	 dispatch={this.props.dispatch}
																	 allowClear={search.select.allowClear}
																	 showSearch={search.select.showSearch}
																	 initialValue={search.select.initialValue}
																	 getFieldDecorator={getFieldDecorator}
																	 getFieldValue={getFieldValue}
																	 setFieldsValue={setFieldsValue}
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
								);
							case 'TREE_TABLE':
								return (
									<Table rowKey={this.props.primaryKey}
										   loading={this.state.isLoad}
										   expandedRowKeys={this.props.store.expandedRowKeys}
										   columns={columnList}
										   dataSource={this.props.store.list}
										   pagination={pagination}
									/>
								);
							case 'CARD':
								return (
									<Row gutter={20}>
										{
											this.props.store.list.map(function (item) {
												return (
													<Col key={item[this.props.primaryKey]} xs={24} sm={6} md={6} lg={4}
														 xl={4} style={{marginBottom: '20px'}}
														 onClick={this.handleEdit.bind(this, item)}>
														<Card bodyStyle={{padding: 0, cursor: 'pointer'}}>
															<div className="background-image"
																 style={{backgroundImage: 'url(' + constant.image_host + item.file_path + ')'}}></div>
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
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	primaryKey: PropTypes.string.isRequired,
	store: PropTypes.object.isRequired,
	listUrl: PropTypes.string.isRequired,
	synchronizeUrl: PropTypes.string,
	breadcrumbList: PropTypes.array.isRequired,
	buttonList: PropTypes.array.isRequired,
	secondButtonList: PropTypes.array.isRequired,
	searchList: PropTypes.array.isRequired,
	columnList: PropTypes.array.isRequired
};

NIndex.defaultProps = {
	type: 'TABLE'
};

NIndex = Form.create()(NIndex);

export default NIndex;