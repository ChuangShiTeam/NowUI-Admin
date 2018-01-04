import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

import ReactQuill from 'react-quill';

import NFileListModel from './NFileListModel';

import notification from '../common/notification';
import constant from "../common/constant";

class NInputHtml extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        const toolbar = this.quillRef.getEditor().getModule('toolbar');
        toolbar.addHandler('image', this.handleImage.bind(this));

        notification.on('notification_media_file_' + this.props.id + '_submit', this, function (data) {
            let html = '';

            for (let i = 0; i < data.length; i++) {
                html += '<img src="' + constant.imageHost + data[i].file_path + '" />';
            }

            this.quillRef.getEditor().insertText(this.quillRef.getEditor().getSelection().index, html);
        });
    }

    componentWillUnmount() {
        notification.remove('notification_media_file_' + this.props.id + '_submit', this);
    }

    handleImage() {
        notification.emit('notification_file_list_model_' + this.props.id + '_show', {});
    }

    render() {
        const FormItem = Form.Item;

        const modules = {
            toolbar: {
                container: [
                    [{'font': []}],
                    [{size: []}],
                    [{'color': []}, {'background': []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'align': []}],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'video', 'image']
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
            </FormItem>
        );
    }
}

NInputHtml.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    getFieldDecorator: PropTypes.func.isRequired
};

NInputHtml.defaultProps = {
    label: ''
};

export default NInputHtml