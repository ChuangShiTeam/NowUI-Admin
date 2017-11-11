import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';

class FormItemInputText extends Component {
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

        return (
            <FormItem
                label={this.props.label}
                labelCol={{xs: {span: 24}, sm: {span: 6}, md: {span: 6}, lg: {span: 4}, xl: {span: 4}}}
                wrapperCol={{xs: {span: 24}, sm: {span: 14}, md: {span: 14}, lg: {span: 12}, xl: {span: 12}}}
                className="form-item"
            >
                {this.props.getFieldDecorator(this.props.id, {
                    rules: [{required: this.props.required, message: this.props.message}],
                })(
                    <Input type="text" placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder} onPressEnter={this.props.onPressEnter}/>
                )}
            </FormItem>
        );
    }
}

FormItemInputText.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    onPressEnter: PropTypes.func
};

FormItemInputText.defaultProps = {
    placeholder: '',
    required: false,
    message: ''
};

export default FormItemInputText