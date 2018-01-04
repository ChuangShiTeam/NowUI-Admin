import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, InputNumber} from 'antd';

class NInputNumber extends Component {
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
				labelCol={{xs: {span: 24}, sm: {span: this.props.multiLine ? 7 : 4}, md: {span: this.props.multiLine ? 7 : 4}, lg: {span: this.props.multiLine ? 7 : 4}, xl: {span: this.props.multiLine ? 7 : 4}}}
				wrapperCol={{xs: {span: 24}, sm: {span: this.props.multiLine ? 17 : 17}, md: {span: this.props.multiLine ? 17 : 17}, lg: {span: this.props.multiLine ? 17 : 10}, xl: {span: this.props.multiLine ? 17 : 10}}}
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : ''
					}],
					initialValue: this.props.min
				})(
					<InputNumber
						size={this.props.size}
					 	min={this.props.min}
					   	max={this.props.max}
						step={this.props.step}
						parser={this.props.parser}
						formatter={this.props.formatter}
					   	placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder}
					   	onPressEnter={this.props.onPressEnter}
					/>
				)}
			</FormItem>
		);
	}
}

NInputNumber.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	message: PropTypes.string,
	size: PropTypes.string,
	onPressEnter: PropTypes.func,
	multiLine: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	parser: PropTypes.func,
	formatter: PropTypes.func
};

NInputNumber.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	message: '',
	size: 'default',
	multiLine: false,
	min: -Infinity,
	max: Infinity,
	step: 1
};

export default NInputNumber