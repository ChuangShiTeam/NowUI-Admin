import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Switch} from 'antd';

class NSwitch extends Component {
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
				labelCol={{
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 7 : 4},
					md: {span: this.props.multiLine ? 7 : 4},
					lg: {span: this.props.multiLine ? 7 : 4},
					xl: {span: this.props.multiLine ? 7 : 4}
				}}
				wrapperCol={{
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 17 : 17},
					md: {span: this.props.multiLine ? 17 : 17},
					lg: {span: this.props.multiLine ? 17 : 10},
					xl: {span: this.props.multiLine ? 17 : 10}
				}}
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					valuePropName: 'checked',
					initialValue: false
				})(
					<Switch size={this.props.size}
							checkedChildren={this.props.checkedChildren}
							unCheckedChildren={this.props.unCheckedChildren}
							loading={this.props.loading}
					/>
				)}
			</FormItem>
		);
	}
}

NSwitch.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	size: PropTypes.string,
	multiLine: PropTypes.bool,
	checkedChildren: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	unCheckedChildren: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	loading: PropTypes.bool
};

NSwitch.defaultProps = {
	label: '',
	size: 'default',
	multiLine: false,
	loading: false
};

export default NSwitch