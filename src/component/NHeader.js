import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
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

    handleClick(button) {
        switch(button.type) {
            case 'ADD':
                this.handleAdd(button.url);
                break;
            case 'SEARCH':
                this.handleSearch();
                break;
            default:
                button.handleClick();
        }

    }

    handleAdd(url) {
        this.props.history.push({
            pathname: url,
            query: {}
        });
    }

    handleSearch() {
        new Promise(function (resolve) {

            resolve();
        }.bind(this)).then(function () {
            this.handleLoad();
        }.bind(this));
    }

    render() {
        return (
            <div className="page-header">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/dashboard/index">首页</Link></Breadcrumb.Item>
                    {
                        this.props.breadcrumbList.map(function (breadcrumb, index) {
                            return (
                                <Breadcrumb.Item key={index}><Link to={breadcrumb.url}>{breadcrumb.name}</Link></Breadcrumb.Item>
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
                                                type={index + 1 === this.props.buttonList.length ? "primary" : ""}
                                                className={index + 1 === this.props.buttonList.length ? "" : "page-header-body-button-left"}
                                                onClick={this.handleClick.bind(this, button)}
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
    history: React.PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    breadcrumbList: PropTypes.array.isRequired,
    buttonList: PropTypes.array.isRequired,
};

NHeader.defaultProps = {};

export default NHeader