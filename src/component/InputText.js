import React, {Component} from 'react';
import {Form, Input} from 'antd';

class InputText extends Component {
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
                labelCol={{sm: {span: 6}, md: {span: 5}, md: {span: 4}, lg: {span: 4}, xl: {span: 4}}}
                wrapperCol={{sm: {span: 18}, md: {span: 18}, md: {span: 12}, lg: {span: 12}, xl: {span: 12}}}
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

InputText.propTypes = {
    getFieldDecorator: React.PropTypes.func.isRequired,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    message: React.PropTypes.string,
    onPressEnter: React.PropTypes.func
};

InputText.defaultProps = {
    placeholder: '',
    required: false,
    message: ''
};

export default InputText