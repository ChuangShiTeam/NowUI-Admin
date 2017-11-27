import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

import ReactQuill from 'react-quill';

class NInputHtml extends Component {
    constructor(props) {
        super(props);

        this.state = {}
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
            toolbar: [
                [{ 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'align': [] }],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                [{
                    id: '111',
                    value: '123'
                }]
            ]
        };

        return (
            <FormItem
                hasFeedback={true}
                label={this.props.label}
                labelCol={{xs: {span: 24}, sm: {span: 4}, md: {span: 4}, lg: {span: 4}, xl: {span: 4}}}
                wrapperCol={{xs: {span: 24}, sm: {span: 17}, md: {span: 17}, lg: {span: 18}, xl: {span: 18}}}
                className="form-item"
            >
                <ReactQuill value={"123456"}
                            modules={modules}
                            onChange={this.handleChange}
                />
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