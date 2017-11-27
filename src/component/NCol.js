import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col} from 'antd';

class NCol extends Component {
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
        return (
            <Col xs={24} sm={24} md={this.props.multiLine ? 12 : 24} lg={this.props.multiLine ? 8 : 24} xl={this.props.multiLine ? 8 : 24}>
                {this.props.children}
            </Col>
        );
    }
}

NCol.propTypes = {
    multiLine: PropTypes.bool
};

NCol.defaultProps = {
    multiLine: false
};

export default NCol