import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {Row, Col, Breadcrumb, Button} from 'antd';

class NHeader extends Component {
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

	handleClick(item) {
		this.props.secondButtonList[item.key].click();
	}

	render() {
		return (
			<div className="page-header">
				<Breadcrumb>
					<Breadcrumb.Item><NavLink to="/dashboard/index">首页</NavLink></Breadcrumb.Item>
					{
						this.props.breadcrumbList.map(function (breadcrumb, index) {
							return (
								breadcrumb.url === '' ?
									<Breadcrumb.Item key={index}><a>{breadcrumb.name}</a></Breadcrumb.Item>
									:
									<Breadcrumb.Item key={index}>
										<NavLink to={breadcrumb.url}>{breadcrumb.name}</NavLink>
									</Breadcrumb.Item>
							)
						})
					}
				</Breadcrumb>
				<div className="page-header-body">
					<Row>
						<Col xs={{span: 24}} sm={{span: 12}} className="page-header-body-title">
							{this.props.name}
						</Col>
						<Col xs={{span: 24}} sm={{span: 12}} className="page-header-body-button">
							{
								this.props.buttonList.map(function (button, index) {
									return (
										<Button key={index}
												icon={button.icon}
												type={button.isPrimary ? "primary" : ""}
												className="page-button-left"
												loading={button.loading}
												onClick={button.click}
										>
											{button.name}
										</Button>
									)
								})
							}
							{
								this.props.secondButtonList.length > 0 && (this.props.isEdit || this.props.isList) ?
									<Button.Group>
										{
											this.props.secondButtonList.map(function (button, index) {
												return (
													<Button key={index}
															icon={button.icon}
															type={button.isPrimary ? "primary" : ""}
															loading={button.loading}
															onClick={button.click}
													>
														{button.name}
													</Button>
												)
											})
										}
									</Button.Group>
									:
									''
							}
						</Col>
					</Row>
				</div>
				<div className="page-header-description">
					{this.props.children}
				</div>
			</div>
		);
	}
}

NHeader.propTypes = {
	name: PropTypes.string.isRequired,
	isEdit: PropTypes.bool.isRequired,
	isList: PropTypes.bool.isRequired,
	breadcrumbList: PropTypes.array.isRequired,
	buttonList: PropTypes.array.isRequired,
	secondButtonList: PropTypes.array.isRequired
};

NHeader.defaultProps = {};

export default NHeader