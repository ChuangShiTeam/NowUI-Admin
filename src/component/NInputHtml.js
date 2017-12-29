import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

import ReactQuill from 'react-quill';

import NFileListModel from './NFileListModel';

import notification from '../common/notification';

class NInputHtml extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '123'
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

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
                ],
                handlers: {
                    "image": function () {
                        notification.emit('notification_image_list_model_' + this.props.id + '_show', {});
                    }.bind(this)
                }
            }
        };

        return (
            <FormItem
                label={this.props.label}
                labelCol={{xs: {span: 24}, sm: {span: 4}, md: {span: 4}, lg: {span: 4}, xl: {span: 4}}}
                wrapperCol={{xs: {span: 24}, sm: {span: 17}, md: {span: 17}, lg: {span: 18}, xl: {span: 18}}}
                className="form-item"
            >
                <ReactQuill value={this.state.text} modules={modules}/>
                <NFileListModel id={this.props.id} returnLimit={0} aspect={1}/>
            </FormItem>
        );
    }
}

NInputHtml.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string
};

NInputHtml.defaultProps = {
    label: ''
};

export default NInputHtml