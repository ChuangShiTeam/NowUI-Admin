import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb, Button, Dropdown, Menu, Icon} from 'antd';

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
        const ButtonGroup = Button.Group;

        return (
            <div className="page-header">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/dashboard/index">首页</Link></Breadcrumb.Item>
                    {
                        this.props.breadcrumbList.map(function (breadcrumb, index) {
                            return (
                                breadcrumb.url === '' ?
                                    <Breadcrumb.Item key={index}><a>{breadcrumb.name}</a></Breadcrumb.Item>
                                    :
                                    <Breadcrumb.Item key={index}><Link
                                        to={breadcrumb.url}>{breadcrumb.name}</Link></Breadcrumb.Item>
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
                                this.props.secondButtonList.length > 0 && this.props.isEdit ?
                                    <ButtonGroup className="page-button-left">
                                        <Dropdown overlay={(
                                            <Menu onClick={this.handleClick.bind(this)}>
                                                {
                                                    this.props.secondButtonList.map(function (button, index) {
                                                        return (
                                                            <Menu.Item key={index}><Icon type={button.icon}/>{button.name}
                                                            </Menu.Item>
                                                        )
                                                    }.bind(this))
                                                }
                                            </Menu>
                                        )} placement="bottomRight">
                                            <Button><Icon type="ellipsis"/></Button>
                                        </Dropdown>
                                    </ButtonGroup>
                                    :
                                    ''
                            }
                            {
                                this.props.buttonList.map(function (button, index) {
                                    return (
                                        <Button key={index}
                                                icon={button.icon}
                                                type={button.isPrimary ? "primary" : ""}
                                                className={index + 1 === this.props.buttonList.length ? "" : "page-button-left"}
                                                loading={button.loading}
                                                onClick={button.click}
                                        >
                                            {button.name}
                                        </Button>
                                    )
                                }.bind(this))
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
    breadcrumbList: PropTypes.array.isRequired,
    buttonList: PropTypes.array.isRequired,
    secondButtonList: PropTypes.array.isRequired
};

NHeader.defaultProps = {};

export default NHeader