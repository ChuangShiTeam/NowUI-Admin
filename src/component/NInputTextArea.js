import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';

class NInputTextArea extends Component {
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
		const { TextArea } = Input;
		return (
			<FormItem
				hasFeedback={true}
				label={this.props.label}
				labelCol={{xs: {span: 24}, sm: {span: this.props.multiLine ? 7 : 4}, md: {span: this.props.multiLine ? 7 : 4}, lg: {span: this.props.multiLine ? 7 : 4}, xl: {span: this.props.multiLine ? 7 : 4}}}
				wrapperCol={{xs: {span: 24}, sm: {span: this.props.multiLine ? 17 : 17}, md: {span: this.props.multiLine ? 17 : 17}, lg: {span: this.props.multiLine ? 17 : 10}, xl: {span: this.props.multiLine ? 17 : 10}}}
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : ''
					}],
					initialValue: ''
				})(
					<TextArea
						   rows={this.props.rows}
						   placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder}
						   onPressEnter={this.props.onPressEnter}
					/>
				)}
			</FormItem>
		);
	}
}

NInputTextArea.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	message: PropTypes.string,
	rows: PropTypes.number,
	onPressEnter: PropTypes.func,
	multiLine: PropTypes.bool
};

NInputTextArea.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	message: '',
	rows: 4,
	multiLine: false
};

export default NInputTextArea