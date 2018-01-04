import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Form, message} from 'antd';

import NFileListModel from './NFileListModel';
import constant from '../common/constant';
import notification from '../common/notification';

class NInputMedia extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isPreview: false,
			image: '',
			list: []
		}
	}

	componentDidMount() {
		notification.on('notification_media_file_' + this.props.id + '_submit', this, function (data) {
			var array = this.state.list;

			for (var i = 0; i < data.length; i++) {
				var isNotExit = true;

				for (var k = 0; k < this.state.list.length; k++) {
					if (data[i].filePath === this.state.list[k].filePath) {
						isNotExit = false;

						break;
					}
				}

				if (isNotExit) {
					if (array.length < this.props.returnLimit || this.props.returnLimit === 0) {
						array.push(data[i]);
					}
				}
			}

			this.setState({
				list: array
			});
		});
	}

	componentWillUnmount() {
		notification.remove('notification_media_file_' + this.props.id + '_submit', this);
	}

	handleGetValue() {
		return this.state.list;
	}

	handleSetValue(data) {
		var array = [];

		for (var i = 0; i < data.length; i++) {
			array.push({
				fileId: data[i].fileId,
				filePath: data[i].filePath,
				status: false
			});
		}

		this.setState({
			list: array
		});
	}

	handleCancel() {
		this.setState({
			isPreview: false
		});
	}

	handlePreview(fileId) {
		var filePath = '';
		for (var i = 0; i < this.state.list.length; i++) {
			if (this.state.list[i].fileId === fileId) {
				filePath = this.state.list[i].filePath;
			}
		}

		this.setState({
			image: constant.imageHost + filePath,
			is_preview: true
		});
	}

	handleDelete(fileId) {
		var index = -1;
		var list = this.state.list;

		for (var i = 0; i < list.length; i++) {
			if (list[i].fileId === fileId) {
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

	handleMouseOver(fileId) {
		var list = [];

		for (var i = 0; i < this.state.list.length; i++) {
			var item = this.state.list[i];

			list.push({
				fileId: item.fileId,
				filePath: item.filePath,
				status: item.fileId === fileId
			});
		}

		this.setState({
			list: list
		});
	}

	handleMouseOut(fileId) {
		var list = [];

		for (var i = 0; i < this.state.list.length; i++) {
			var item = this.state.list[i];

			list.push({
				fileId: item.fileId,
				filePath: item.filePath,
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
		const FormItem = Form.Item;
		return (
			<FormItem
				label={this.props.label}
				labelCol={{xs: {span: 24}, sm: {span: 4}, md: {span: 4}, lg: {span: 4}, xl: {span: 4}}}
				wrapperCol={{xs: {span: 24}, sm: {span: 17}, md: {span: 17}, lg: {span: 18}, xl: {span: 18}}}
				className="form-item"
			>
				{
					this.state.list.map(function (item, index) {
						const mask = item.status ? "item-mask item-mask-active" : "item-mask";
						return (
							<div key={index} className="item">
								<div className="item-image"
									 style={{backgroundImage: 'url(' + constant.imageHost + item.filePath + ')'}}></div>
								<div onMouseOver={this.handleMouseOver.bind(this, item.fileId)}
									 onMouseOut={this.handleMouseOut.bind(this)}>
									<div className={mask}></div>
									<i className="anticon anticon-eye-o item-preview-icon"
									   style={{display: item.status ? 'inline' : 'none'}}
									   onClick={this.handlePreview.bind(this, item.fileId)}/>
									<i className="anticon anticon-delete item-remove-icon"
									   style={{display: item.status ? 'inline' : 'none'}}
									   onClick={this.handleDelete.bind(this, item.fileId)}/>
								</div>
							</div>
						)
					}.bind(this))
				}
				{
					this.state.list.length < this.props.returnLimit ?
						<div className="button" onClick={this.handleAdd.bind(this)}>
							<i className="anticon anticon-plus button-icon"/>
							<div className="ant-upload-text button-text">添加{this.props.label}</div>
						</div>
						:
						''
				}
				{
					this.props.returnLimit === 0 ?
						<div className="button" onClick={this.handleAdd.bind(this)}>
							<i className="anticon anticon-plus button-icon"/>
							<div className="ant-upload-text button-text">添加{this.props.label}</div>
						</div>
						:
						''
				}
				<Modal visible={this.state.isPreview} footer={null} onCancel={this.handleCancel.bind(this)}>
					<div className="item-image" style={{backgroundImage: 'url(' + this.state.image + ')'}}></div>
				</Modal>
				<NFileListModel
					id={this.props.id}
					type={this.props.type}
					supportUploadTypes={this.props.supportUploadTypes}
					returnLimit={this.props.returnLimit}
					aspect={this.props.aspect}
					ref="file"/>
			</FormItem>
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
	getFieldDecorator: PropTypes.func.isRequired
};

NInputMedia.defaultProps = {
	type: '',
	returnLimit: 0,
	label: ''
};

export default NInputMedia;
