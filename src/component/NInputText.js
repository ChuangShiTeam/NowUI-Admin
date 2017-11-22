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
                label={this.props.label}
                labelCol={{span: 7}}
                wrapperCol={{span: 17}}
                className="form-item"
            >
                {this.props.getFieldDecorator(this.props.id, {
                    rules: [{required: this.props.required, message: this.props.message}],
                })(
                    <Input type="text"
                           placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder}
                           onPressEnter={this.props.onPressEnter}/>
                )}
            </FormItem>
        );
    }
}

NInputText.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    onPressEnter: PropTypes.func
};

NInputText.defaultProps = {
    placeholder: '',
    required: false,
    message: ''
};

export default NInputText