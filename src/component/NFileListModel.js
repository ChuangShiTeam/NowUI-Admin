import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, message, Upload, Icon} from 'antd';

import NImageCrop from './NImageCrop'
import constant from '../common/constant';
import storage from '../common/storage';
import notification from '../common/notification';

class NFileListModel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            is_show: false,
            is_preview: false,
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
                is_show: true,
                pageSize: width * height
            }, function () {

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

    handleChange(info) {
        if (info.file.status === 'done') {
            if (info.file.response.code === 200) {
                message.success(constant.success);
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
                if (index < this.props.limit || this.props.limit === 0) {
                    index++;

                    if (this.props.type !== '') {
                        item.file_path = item.file_path.substring(0, item.file_path.lastIndexOf("/")) + "/" + this.props.type + "/" + item.file_path.substring(item.file_path.lastIndexOf("/") + 1);
                    }

                    list.push({
                        file_id: item.file_id,
                        file_path: item.file_path,
                        status: false,
                        select: item.select
                    });
                }
            }
        }

        notification.emit('notification_image_file_model_' + this.props.id + '_load', list);

        this.handleCancel();
    }

    handleCancel() {
        var list = [];

        for (var i = 0; i < this.state.list.length; i++) {
            var item = this.state.list[i];

            list.push({
                file_id: item.file_id,
                file_path: item.file_path,
                status: false,
                select: false
            });
        }

        this.setState({
            is_show: false,
            list: list
        });
    }

    render() {
        const props = {
            name: 'file',
            multiple: true,
            showUploadList: false,
            action: constant.image_host + '/admin/file/upload',
            accept: 'image/jpg,image/jpeg,image/png',
            headers: {
                'appId': constant.appId,
                'token': storage.getToken(),
                'platform': constant.platform,
                'version': constant.version
            },
            onChange: this.handleChange.bind(this)
        };
        console.log('this.props', this.props);
        return (
            <Modal title="我的上传"
                   maskClosable={false}
                   width={document.documentElement.clientWidth - 200}
                   className="modal"
                   visible={this.state.is_show}
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
                                        } else if(uploadType === 'cropImage') {
                                            return (
                                                <div key={index} style={{float: 'left', marginLeft: 10}}>
                                                   <Button type="ghost" loading={this.state.isLoad}
                                                           onClick={this.handleImageCrop.bind(this)}>
                                                       <Icon type="cloud-upload"/>裁剪上传图片
                                                   </Button>
                                               </div>
                                           )
                                        } else if(uploadType === 'video') {
                                            return (
                                                <div key={index} style={{float: 'left', marginLeft: 10}}>
                                                   <Upload {...props}>
                                                       <Button type="ghost" loading={this.state.isLoad}>
                                                           <Icon type="cloud-upload"/>上传视频
                                                       </Button>
                                                   </Upload>
                                               </div>
                                           )
                                        } else if(uploadType === 'document') {
                                            return (
                                                <div key={index} style={{float: 'left', marginLeft: 10}}>
                                                   <Upload {...props}>
                                                       <Button type="ghost" loading={this.state.isLoad}>
                                                           <Icon type="cloud-upload"/>上传文档
                                                       </Button>
                                                   </Upload>
                                               </div>
                                           )
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

NFileListModel.defaultProps = {

};

export default NFileListModel