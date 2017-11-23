import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Checkbox} from 'antd';

class NCheckbox extends Component {
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
                labelCol={{span: this.props.labelColSpan}}
                wrapperCol={{span: this.props.wrapperColSpan}}
                className="form-item"
            >
                {this.props.getFieldDecorator(this.props.id, {
                    valuePropName: 'checked',
                    initialValue: true
                })(
                    <Checkbox>{this.props.label}</Checkbox>
                )}
            </FormItem>
        );
    }
}

NCheckbox.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    initialValue: PropTypes.bool,
    labelColSpan: PropTypes.number,
    wrapperColSpan: PropTypes.number
};

NCheckbox.defaultProps = {
    label: '',
    initialValue: false,
    labelColSpan: 7,
    wrapperColSpan: 17
};

export default NCheckbox