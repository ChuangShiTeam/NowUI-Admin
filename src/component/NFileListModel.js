import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, message, Upload, Icon, Spin, Pagination} from 'antd';

import NImageCrop from './NImageCrop'
import constant from '../common/constant';
import storage from '../common/storage';
import notification from '../common/notification';
import http from '../common/http';

class NFileListModel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoad: false,
			isShow: false,
			isPreview: false,
			image: '',
			pageIndex: 1,
			pageSize: 1,
			total: 0,
			list: []
		}
	}

	componentDidMount() {
		notification.on('notification_file_list_model_' + this.props.id + '_show', this, function () {
			var width = Math.floor((document.documentElement.clientWidth - 200 - 40) / (96 + 16));
			var height = Math.floor((document.documentElement.clientHeight - 200 - 32 - 21 - 49 - 20) / (96 + 16));

			this.setState({
				isShow: true,
				pageSize: width * height
			}, function () {
				this.handleLoad(1);
			});
		});
	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {
		notification.remove('notification_file_list_model_' + this.props.id + '_show', this);
	}

	handleImageCrop() {
		notification.emit('notification_image_crop_model_' + this.props.id + '_show', {});
	}

	handleLoad(pageIndex) {
		this.setState({
			is_load: true
		});

		http.request({
			url: constant.imageHost + '/file/admin/v1/list',
			data: {
				fileName: '',
				fileType: 'IMAGE',
				pageIndex: pageIndex,
				pageSize: this.state.pageSize
			},
			success: function (data) {
				var list = [];

				for (var i = 0; i < data.list.length; i++) {
					list.push({
						fileId: data.list[i].fileId,
						filePath: data.list[i].filePath,
						status: false,
						select: false
					});
				}

				this.setState({
					list: list,
					pageIndex: pageIndex,
					total: data.total
				});
			}.bind(this),
			complete: function () {
				this.setState({
					is_load: false
				});
			}.bind(this)
		});
	}

	handleCancel() {
		var list = [];

		for (var i = 0; i < this.state.list.length; i++) {
			var item = this.state.list[i];

			list.push({
				fileId: item.fileId,
				filePath: item.filePath,
				status: false,
				select: false
			});
		}

		this.setState({
			isShow: false,
			list: list
		});
	}

	handleCancelPreview() {
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
			isPreview: true
		});
	}

	handleClick(fileId) {
		var list = [];

		for (var i = 0; i < this.state.list.length; i++) {
			var item = this.state.list[i];

			if (item.fileId === fileId) {
				item.select = !item.select;
			}

			list.push({
				fileId: item.fileId,
				filePath: item.filePath,
				status: item.status,
				select: item.select
			});
		}
		this.setState({
			list: list
		});
	}

	handleMouseOver(fileId) {
		var list = [];

		for (var i = 0; i < this.state.list.length; i++) {
			var item = this.state.list[i];

			list.push({
				fileId: item.fileId,
				filePath: item.filePath,
				status: item.fileId === fileId,
				select: item.select
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
				status: false,
				select: item.select
			});
		}

		this.setState({
			list: list
		});
	}

	handleChange(info) {
		if (info.file.status === 'done') {
			if (info.file.response.code === 200) {
				message.success('上传成功');
			} else {
				message.error(info.file.response.message);
			}

			this.setState({
				isLoad: false
			});
			this.handleLoad(1);

		} else if (info.file.status === 'uploading') {
			this.setState({
				isLoad: true
			});
		} else if (info.file.status === 'error') {
			message.error(info.file.name + ' file upload failed');
		}
	}

	handleSubmit() {
		var list = [];

		var index = 0;

		for (var i = 0; i < this.state.list.length; i++) {
			var item = this.state.list[i];

			if (item.select) {
				if (index < this.props.returnLimit || this.props.returnLimit === 0) {
					index++;

					list.push({
						fileId: item.fileId,
						filePath: item.filePath
					});
				}
			}
		}

		notification.emit('notification_media_file_' + this.props.id + '_submit', list);

		this.handleCancel();
	}

	handlePaginationChange(page, pageSize) {
		this.handleLoad(page);
	}

	render() {
		const props = {
			name: 'file',
			multiple: true,
			showUploadList: false,
			action: constant.imageHost + '/file/admin/v1/image/upload',
			accept: 'image/jpg,image/jpeg,image/png',
			data: {
				'appId': constant.appId,
				'token': storage.getToken(),
				'platform': constant.platform,
				'version': constant.version
			},
			onChange: this.handleChange.bind(this)
		};
		return (
			<Modal title="我的上传"
				   maskClosable={false}
				   width={document.documentElement.clientWidth - 200}
				   className="modal"
				   visible={this.state.isShow}
				   onCancel={this.handleCancel.bind(this)}
				   footer={[
					   <div key="upload">
						   {
							   this.props.supportUploadTypes.length > 0 ?
								   this.props.supportUploadTypes.map((uploadType, index) => {
									   if (uploadType === 'image') {
										   return (
											   <div key={index} style={{float: 'left', marginLeft: 10}}>
												   <Upload {...props}>
													   <Button type="ghost" loading={this.state.isLoad}>
														   <Icon type="cloud-upload"/>上传图片
													   </Button>
												   </Upload>
											   </div>
										   )
									   } else if (uploadType === 'cropImage') {
										   return (
											   <div key={index} style={{float: 'left', marginLeft: 10}}>
												   <Button type="ghost" loading={this.state.isLoad}
														   onClick={this.handleImageCrop.bind(this)}>
													   <Icon type="cloud-upload"/>裁剪上传图片
												   </Button>
											   </div>
										   )
									   } else if (uploadType === 'video') {
										   return (
											   <div key={index} style={{float: 'left', marginLeft: 10}}>
												   <Upload {...props}>
													   <Button type="ghost" loading={this.state.isLoad}>
														   <Icon type="cloud-upload"/>上传视频
													   </Button>
												   </Upload>
											   </div>
										   )
									   } else if (uploadType === 'document') {
										   return (
											   <div key={index} style={{float: 'left', marginLeft: 10}}>
												   <Upload {...props}>
													   <Button type="ghost" loading={this.state.isLoad}>
														   <Icon type="cloud-upload"/>上传文档
													   </Button>
												   </Upload>
											   </div>
										   )
									   } else {
										   return null
									   }
								   })
								   :
								   null
						   }
					   </div>
					   ,
					   <Button key="back" type="ghost" size="default" icon="cross-circle"
							   onClick={this.handleCancel.bind(this)}>关闭</Button>,
					   <Button key="submit" type="primary" size="default" icon="check-circle"
							   loading={this.state.isLoad}
							   onClick={this.handleSubmit.bind(this)}>确定</Button>
				   ]}
			>
				<Spin spinning={this.state.isLoad}>
					<div style={{height: document.documentElement.clientHeight - 55 - 53 - 290 + 'px'}}>
						{
							this.state.list.map(function (item) {
								const mask = item.status || item.select ? "item-mask item-mask-active" : "item-mask";
								return (
									<div key={item.fileId} className="item">
										<div className="item-image"
											 style={{backgroundImage: 'url(' + constant.imageHost + item.filePath + ')'}}></div>
										<div onMouseOver={this.handleMouseOver.bind(this, item.fileId)}
											 onMouseOut={this.handleMouseOut.bind(this, item.fileId)}>
											<div className={mask}
												 onClick={this.handleClick.bind(this, item.fileId)}></div>
											<i className="anticon anticon-eye-o item-preview-icon"
											   style={{display: item.status && !item.select ? 'inline' : 'none'}}
											   onClick={this.handlePreview.bind(this, item.fileId)}/>
											<i className="anticon anticon-delete item-remove-icon"
											   style={{display: item.status && !item.select ? 'inline' : 'none'}}/>
											<i className="anticon anticon-check-circle-o item-check-icon"
											   style={{display: item.select ? 'inline' : 'none'}}
											   onClick={this.handlePreview.bind(this)}/>
										</div>
									</div>
								)
							}.bind(this))
						}
						{
							this.state.list.length > 0 ?
								<div style={{float: 'left', width: '100%', textAlign: 'right'}}>
									<Pagination current={this.state.pageIndex} pageSize={this.state.pageSize}
												total={this.state.total}
												onChange={this.handlePaginationChange.bind(this)}/>
								</div>
								:
								null
						}
					</div>
				</Spin>
				<Modal visible={this.state.isPreview} footer={null} onCancel={this.handleCancelPreview.bind(this)}>
					<div className="item-image" style={{backgroundImage: 'url(' + this.state.image + ')'}}></div>
				</Modal>
				<NImageCrop id={this.props.id} aspect={this.props.aspect}/>
			</Modal>
		);
	}
}

NFileListModel.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	returnLimit: PropTypes.number.isRequired,
	aspect: PropTypes.number,
	supportUploadTypes: PropTypes.arrayOf(PropTypes.oneOf(['image', 'cropImage', 'video', 'document']))
};

NFileListModel.defaultProps = {};

export default NFileListModel