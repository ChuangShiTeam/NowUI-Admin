import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'antd';

class FormItemButton extends Component {
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
                wrapperCol={{xs: {span: 24, offset: 0}, sm: {span: 14, offset: 6}, md: {span: 14, offset: 6}, lg: {span: 12, offset: 4}, xl: {span: 12, offset: 4}}}
                className="form-item"
            >
                <Button type="primary" onClick={this.props.onClick}>
                    提交
                </Button>
            </FormItem>
        );
    }
}

FormItemButton.propTypes = {
    onClick: PropTypes.func
};

FormItemButton.defaultProps = {

};

export default FormItemButton