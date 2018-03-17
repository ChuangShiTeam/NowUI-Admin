import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, TreeSelect} from 'antd';

import http from '../common/http';

class NTreeSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			treeDataList: []
		}
	}

	componentDidMount() {
		let {url, params, key, value} = this.props.remoteOptionConfig;
		if (url) {
			this.handleLoadTreeDataList(url, params, key, value);
		}

		const onChange = this.props.onChange;
		if (onChange) {
			// let array = [];
			// for (let i = 0; i < value.length; i++) {
			//     value[i].push({
			//         fileId: array[i].value,
			//         filePath: array[i].label
			//     })
			// }

			// onChange([{
			//     aaa: '123'
			// }]);
		}
	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	handleLoadTreeDataList(url, params, key, value) {
		http.request({
			url: url,
			data: params,
			success: function (data) {
				if (data) {
					let treeDataList = this.handleTreeDataList(data, key, value);

					this.setState({
						treeDataList: treeDataList
					})
				}
			}.bind(this),
			error: function () {

			},
			complete: function () {

			}
		});
	}

	handleTreeDataList(treeDataList, key, value) {
		let newTreeDataList = [];
		if (treeDataList && treeDataList.length > 0) {
			for (let i = 0; i < treeDataList.length; i++) {
				let treeData = treeDataList[i];
				let childrenTreeData = this.handleTreeDataList(treeDataList[i].children, key, value);
				newTreeDataList.push({
					label: treeData[value],
					key: treeData[key],
					value: treeData[key],
					children: childrenTreeData
				})
			}
		}
		return newTreeDataList;
	}

	render() {
		const FormItem = Form.Item;

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
					<TreeSelect
						value={this.state.list}
						allowClear={this.props.allowClear}
						showSearch={this.props.showSearch}
						size={this.props.size}
						multiple={this.props.multiple}
						treeCheckable={this.props.treeCheckable}
						filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						treeNodeFilterProp={'title'}
						showCheckedStrategy={this.props.showCheckedStrategy}
						dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
						treeData={this.state.treeDataList}
						placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
						treeDefaultExpandAll={this.props.treeDefaultExpandAll}
						labelInValue={true}
						onChange={this.handleChange.bind(this)}
					/>
				)}
			</FormItem>
		);
	}
}

NTreeSelect.propTypes = {
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
	remoteOptionConfig: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	allowClear: PropTypes.bool,
	showCheckedStrategy: PropTypes.oneOf([TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD]),
	showSearch: PropTypes.bool,
	treeDefaultExpandAll: PropTypes.bool,
	treeCheckable: PropTypes.bool,
	multiple: PropTypes.bool,
	// initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	initialValue: PropTypes.array,
	returnValueName: PropTypes.string.isRequired,
	returnLabelName: PropTypes.string.isRequired,
	returnObject: PropTypes.object
};

NTreeSelect.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	message: '',
	size: 'default',
	multiLine: false,
	allowClear: false,
	showSearch: false,
	treeDefaultExpandAll: false,
	multiple: false,
	treeCheckable: false,
	returnValueName: '',
	returnLabelName: '',
	returnObject: {}

};

export default NTreeSelect