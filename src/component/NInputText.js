import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';

class NInputText extends Component {
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
                hasFeedback={true}
                label={this.props.label}
                labelCol={{span: this.props.labelColSpan}}
                wrapperCol={{span: this.props.wrapperColSpan}}
                className="form-item"
            >
                {this.props.getFieldDecorator(this.props.id, {
                    rules: [{required: this.props.required, message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : ''}],
                })(
                    <Input type="text"
                           size={this.props.size}
                           prefix={this.props.prefix}
                           placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder}
                           onPressEnter={this.props.onPressEnter}
                    />
                )}
            </FormItem>
        );
    }
}

NInputText.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    prefix: PropTypes.object,
    size: PropTypes.string,
    onPressEnter: PropTypes.func,
    labelColSpan: PropTypes.number,
    wrapperColSpan: PropTypes.number
};

NInputText.defaultProps = {
    label: '',
    placeholder: '',
    required: false,
    message: '',
    size: 'default',
    labelColSpan: 7,
    wrapperColSpan: 17
};

export default NInputText