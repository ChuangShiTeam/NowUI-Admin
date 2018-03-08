import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Form} from 'antd';

import NFileListModel from './NFileListModel';
import constant from '../common/constant';
import notification from '../common/notification';

class Image extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isPreview: false,
			image: '',
			list: []
		};
	}

	componentWillReceiveProps(nextProps) {
		if ('value' in nextProps) {
			this.setState({
				list: nextProps.value
			});
		}
	}

	componentDidMount() {
		notification.on('notification_media_file_' + this.props.id + '_submit', this, function (data) {
			let array = this.state.list;

			for (let i = 0; i < data.length; i++) {
				let isNotExit = true;

				for (let k = 0; k < this.state.list.length; k++) {
					if (data[i].fileId === this.state.list[k].fileId) {
						isNotExit = false;

						break;
					}
				}

				if (isNotExit) {
					if (array.length < this.props.returnLimit || this.props.returnLimit === 0) {
						let item = {};

						item.value = data[i].fileId;
						item.label = data[i].filePath;

						array.push(item);
					}
				}
			}

			const onChange = this.props.onChange;
			if (onChange) {
				let list = [];
				for (let i = 0; i < array.length; i++) {
					list.push({
						value: array[i].value,
						label: array[i].label
					})
				}
				onChange(list);
			}
		});
	}

	componentWillUnmount() {
		notification.remove('notification_media_file_' + this.props.id + '_submit', this);
	}

	handleCancel() {
		this.setState({
			isPreview: false
		});
	}

	handlePreview(value) {
		let label = '';
		for (let i = 0; i < this.state.list.length; i++) {
			if (this.state.list[i].value === value) {
				label = this.state.list[i].label;
			}
		}

		this.setState({
			image: constant.imageHost + label,
			isPreview: true
		});
	}

	handleDelete(value) {
		let index = -1;
		let list = this.state.list;

		for (let i = 0; i < list.length; i++) {
			if (list[i].value === value) {
				index = i;
			}
		}

		list.splice(index, 1);

		this.setState({
			list: list
		});
	}

	handleAdd() {
		notification.emit('notification_file_list_model_' + this.props.id + '_show', {});
	}

	handleMouseOver(value) {
		let list = [];

		for (let i = 0; i < this.state.list.length; i++) {
			let item = this.state.list[i];

			list.push({
				value: item.value,
				label: item.label,
				status: item.value === value
			});
		}

		this.setState({
			list: list
		});
	}

	handleMouseOut(value) {
		let list = [];

		for (let i = 0; i < this.state.list.length; i++) {
			let item = this.state.list[i];

			list.push({
				value: item.value,
				label: item.label,
				status: false
			});
		}

		this.setState({
			list: list
		});
	}

	handleReset() {
		this.setState({
			isPreview: false,
			image: '',
			list: []
		});
	}

	render() {
		return (
			<div>
				{
					this.state.list.map(function (item, index) {
						const mask = item.status ? "item-mask item-mask-active" : "item-mask";
						return (
							<div key={index} className="item">
								<div className="item-image"
									 style={{backgroundImage: 'url(' + constant.imageHost + item.label + ')'}}></div>
								<div onMouseOver={this.handleMouseOver.bind(this, item.value)}
									 onMouseOut={this.handleMouseOut.bind(this)}>
									<div className={mask}></div>
									<i className="anticon anticon-eye-o item-preview-icon"
									   style={{display: item.status ? 'inline' : 'none'}}
									   onClick={this.handlePreview.bind(this, item.value)}/>
									<i className="anticon anticon-delete item-remove-icon"
									   style={{display: item.status ? 'inline' : 'none'}}
									   onClick={this.handleDelete.bind(this, item.value)}/>
								</div>
							</div>
						)
					}.bind(this))
				}
				{
					this.state.list.length < this.props.returnLimit ?
						<div className="button" onClick={this.handleAdd.bind(this)}>
							<i className="anticon anticon-plus button-icon"/>
							<div className="ant-upload-text button-text">添加</div>
						</div>
						:
						''
				}
				{
					this.props.returnLimit === 0 ?
						<div className="button" onClick={this.handleAdd.bind(this)}>
							<i className="anticon anticon-plus button-icon"/>
							<div className="ant-upload-text button-text">添加</div>
						</div>
						:
						''
				}
				<Modal visible={this.state.isPreview} footer={null} onCancel={this.handleCancel.bind(this)}>
					<div className="item-image preview-image" style={{backgroundImage: 'url(' + this.state.image + ')'}}></div>
				</Modal>
			</div>
		);
	}
}

Image.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	returnLimit: PropTypes.number,
	aspect: PropTypes.number,
	supportUploadTypes: PropTypes.arrayOf(PropTypes.oneOf(['image', 'cropImage', 'video'])),
	label: PropTypes.string,
	getFieldDecorator: PropTypes.func.isRequired
};

Image.defaultProps = {
	type: '',
	returnLimit: 0,
	label: ''
};

class NInputMedia extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	handleValidator(rule, value, callback) {
		if (this.props.getFieldValue(this.props.id).length > 0) {
			callback();
			return;
		}

		callback('请选择' + this.props.label);
	}

	render() {
		return (
			<Form.Item
				label={this.props.label}
				labelCol={{xs: {span: 24}, sm: {span: 4}, md: {span: 4}, lg: {span: 4}, xl: {span: 4}}}
				wrapperCol={{xs: {span: 24}, sm: {span: 17}, md: {span: 17}, lg: {span: 18}, xl: {span: 18}}}
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : '',
						validator: this.handleValidator.bind(this),
						type: 'array'
					}],
					initialValue: []
				})(
					<Image id={this.props.id} type={this.props.type} returnLimit={this.props.returnLimit}
						   aspect={this.props.aspect} supportUploadTypes={this.props.supportUploadTypes}
						   label={this.props.label} getFieldDecorator={this.props.getFieldDecorator}/>
				)}
				<NFileListModel
					id={this.props.id}
					type={this.props.type}
					supportUploadTypes={this.props.supportUploadTypes}
					returnLimit={this.props.returnLimit}
					aspect={this.props.aspect}
					ref="file"/>
			</Form.Item>
		);
	}
}

NInputMedia.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	returnLimit: PropTypes.number,
	aspect: PropTypes.number,
	supportUploadTypes: PropTypes.arrayOf(PropTypes.oneOf(['image', 'cropImage', 'video'])),
	label: PropTypes.string,
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired
};

NInputMedia.defaultProps = {
	type: '',
	returnLimit: 0,
	label: ''
};

export default NInputMedia;
