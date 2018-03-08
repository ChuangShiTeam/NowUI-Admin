import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Select} from 'antd';
import http from '../common/http';

class NSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
		if (this.props.storeKey && this.props.store[this.props.storeKey] && this.props.store[this.props.storeKey].length === 0) {
			let {url, params, key, value} = this.props.remoteOptionConfig;
			if (url) {
				this.handleLoadOptionList(url, params, key, value);
			}

		}
	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	handleLoadOptionList(url, params, key, value) {
		http.request({
			url: url,
			data: params,
			success: function (data) {
				if (data) {
					let optionList = data.map(function (option) {
						return {
							key: option[key],
							value: option[value]
						}
					});
					let storeData = {};
					storeData[this.props.storeKey] = optionList;
					this.props.dispatch({
						type: this.props.storeName,
						data: storeData
					});
				}
			}.bind(this),
			error: function () {

			},
			complete: function () {
			}
		});
	}

	render() {
		const FormItem = Form.Item;
		const Option = Select.Option;
		return (
			<FormItem
				hasFeedback={true}
				label={this.props.label}
				labelCol={{
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 7 : 4},
					md: {span: this.props.multiLine ? 7 : 4},
					lg: {span: this.props.multiLine ? 7 : 4},
					xl: {span: this.props.multiLine ? 7 : 4}
				}}
				wrapperCol={{
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 17 : 17},
					md: {span: this.props.multiLine ? 17 : 17},
					lg: {span: this.props.multiLine ? 17 : 10},
					xl: {span: this.props.multiLine ? 17 : 10}
				}}
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '选择' + this.props.label) : ''
					}],
					initialValue: this.props.initialValue
				})(
					<Select allowClear={this.props.allowClear}
							placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
							size={this.props.size}
							mode={this.props.mode}
							filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							showSearch={this.props.showSearch}
					>
						{
							this.props.staticOptionList && this.props.staticOptionList.length > 0 ?
								this.props.staticOptionList.map(function (option) {
									return (
										<Option key={option.key} value={option.key}>{option.value}</Option>
									)
								})
								:
								null
						}
						{
							this.props.storeKey && this.props.store[this.props.storeKey] && this.props.store[this.props.storeKey].length > 0 ?
								this.props.store[this.props.storeKey].map(function (option) {
									return (
										<Option key={option.key} value={option.key}>{option.value}</Option>
									)
								})
								:
								null
						}
					</Select>
				)}
			</FormItem>
		);
	}
}

NSelect.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	message: PropTypes.string,
	size: PropTypes.string,
	multiLine: PropTypes.bool,
	staticOptionList: PropTypes.array,
	remoteOptionConfig: PropTypes.object,
	storeName: PropTypes.string,
	storeKey: PropTypes.string,
	store: PropTypes.object,
	dispatch: PropTypes.func,
	allowClear: PropTypes.bool,
	mode: PropTypes.oneOf(['multiple', 'tags', 'combobox']),
	showSearch: PropTypes.bool,
	initialValue: PropTypes.string
};

NSelect.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	message: '',
	size: 'default',
	multiLine: false,
	staticOptionList: [],
	remoteOptionConfig: {},
	storeKey: '',
	allowClear: false,
	showSearch: false,
	initialValue: ''

};

export default NSelect