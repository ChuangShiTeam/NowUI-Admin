import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Icon, Spin} from 'antd';
import Cropper from 'react-cropper';

import constant from '../common/constant';
import notification from '../common/notification';
import http from '../common/http';

class NImageCrop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			is_load: false,
			is_show: false,
			src: ''
		}
	}

	componentDidMount() {
		notification.on('notification_image_crop_model_' + this.props.id + '_show', this, function (data) {
			this.setState({
				is_show: true
			});
		});
	}

	componentWillUnmount() {
		notification.remove('notification_image_crop_model_' + this.props.id + '_show', this);
	}

	handleCancel() {
		this.setState({
			is_load: false,
			is_show: false,
			src: ''
		});
	}

	handleChange(event) {
		this.setState({
			is_load: true
		});

		var files;
		if (event.dataTransfer) {
			files = event.dataTransfer.files;
		} else if (event.target) {
			files = event.target.files;
		}

		const reader = new FileReader();

		reader.onload = () => {
			this.setState({
				is_load: false,
				src: reader.result
			});
		};

		reader.readAsDataURL(files[0]);
	}

	handleSubmit() {
		if (this.state.src === '') {
			return;
		}

		this.setState({
			is_load: true
		});

		http.request({
			url: '/' + constant.action + '/file/image/base64/upload',
			data: {
				data: this.cropper.getCroppedCanvas().toDataURL()
			},
			success: function (data) {
				this.setState({
					is_load: false,
					is_show: false,
					src: ''
				});

				notification.emit('notification_image_list_model_' + this.props.id + '_show', {});
			}.bind(this),
			complete: function () {

			}
		});
	}

	render() {
		return (
			<Modal title={'裁剪图片'} maskClosable={false} width={document.documentElement.clientWidth - 200}
				   className="modal"
				   visible={this.state.is_show} onCancel={this.handleCancel.bind(this)}
				   footer={[
                       <div key="normal" style={{float: 'left', marginLeft: 10}} className="crop-button">
                           <Icon type="cloud-upload" style={{marginRight: 5}}/>
                           <input type="file" onChange={this.handleChange.bind(this)}/>选择图片
                       </div>,
                       <Button key="back" type="ghost" size="default" icon="cross-circle"
                               onClick={this.handleCancel.bind(this)}>关闭</Button>,
                       <Button key="submit" type="primary" size="default" icon="check-circle"
                               loading={this.state.is_load}
                               onClick={this.handleSubmit.bind(this)}>确定</Button>
                   ]}
			>

				<Spin spinning={this.state.is_load}>
					<Cropper
						style={{height: (document.documentElement.clientHeight - 200 - 32 - 21 - 49 - 20), width: '100%'}}
						aspectRatio={this.props.aspect}
						autoCropArea={1.0}
						minCropBoxWidth={100}
						preview=".img-preview"
						guides={true}
						src={this.state.src}
						ref={cropper => {
                            this.cropper = cropper;
                        }}
					/>
				</Spin>
			</Modal>
		);
	}
}

NImageCrop.propTypes = {
	id: PropTypes.string.isRequired,
	aspect: PropTypes.number.isRequired
};

NImageCrop.defaultProps = {
	aspect: 1
};

export default NImageCrop;
