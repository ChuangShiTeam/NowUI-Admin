import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Modal, Input} from 'antd';

import ReactQuill from 'react-quill';

import NFileListModel from './NFileListModel';

import notification from '../common/notification';
import constant from "../common/constant";

class NInputHtml extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCode: false,
            code: ''
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        const toolbar = this.quillRef.getEditor().getModule('toolbar');

        toolbar.addHandler('image', this.handleImage.bind(this));
        toolbar.addHandler('code', this.handleShowCode.bind(this));

        notification.on('notification_media_file_' + this.props.id + '_submit', this, function (data) {
            this.quillRef.focus();

            for (let i = 0; i < data.length; i++) {
                let index = this.quillRef.getEditor().getSelection().index;
                let length = this.quillRef.getEditor().getSelection().length;

                this.quillRef.getEditor().insertEmbed(index, 'image', constant.imageHost + data[i].filePath);
                this.quillRef.getEditor().setSelection({index: index + 1, length: length});
            }
        });
    }

    componentWillUnmount() {
        notification.remove('notification_media_file_' + this.props.id + '_submit', this);
    }

    handleImage() {
        notification.emit('notification_file_list_model_' + this.props.id + '_show', {});
    }

    handleShowCode() {
        this.setState({
            isCode: true,
            code: this.props.getFieldValue(this.props.id)
        });
    }

    handleCloseCode() {
        this.setState({
            isCode: false
        });

        let object = {};
        object[this.props.id] = this.state.code;
        this.props.setFieldsValue(object);
    }

    handleChangeCode(event) {
        this.setState({
            code: event.target.value
        });
    }

    render() {
        const FormItem = Form.Item;
        const {TextArea} = Input;

        const modules = {
            toolbar: {
                container: [
                    [{'font': []}],
                    [{size: []}],
                    [{'color': []}, {'background': []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'align': []}],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'video', 'image', 'code']
                ]
            }
        };

        return (
            <FormItem
                label={this.props.label}
                labelCol={{xs: {span: 24}, sm: {span: 4}, md: {span: 4}, lg: {span: 4}, xl: {span: 4}}}
                wrapperCol={{xs: {span: 24}, sm: {span: 17}, md: {span: 17}, lg: {span: 18}, xl: {span: 18}}}
                className="form-item"
            >
                {this.props.getFieldDecorator(this.props.id, {
                    rules: [{
                        required: this.props.required,
                        message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : ''
                    }],
                    initialValue: ''
                })(
                    <ReactQuill ref={(el) => this.quillRef = el}
                                modules={modules}/>
                )}
                <NFileListModel id={this.props.id}
                                supportUploadTypes={['image', 'cropImage']}
                                returnLimit={0}
                                aspect={1}/>
                <Modal
                    title="源代码"
                    maskClosable={false}
                    width={document.documentElement.clientWidth - 200}
                    visible={this.state.isCode}
                    onOk={this.handleCloseCode.bind(this)}
                    onCancel={this.handleCloseCode.bind(this)}
                >
                    <TextArea rows={20}
                              value={this.state.code}
                              onChange={this.handleChangeCode.bind(this)}/>
                </Modal>
            </FormItem>
        );
    }
}

NInputHtml.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func,
    setFieldsValue: PropTypes.func
};

NInputHtml.defaultProps = {
    label: ''
};

export default NInputHtml