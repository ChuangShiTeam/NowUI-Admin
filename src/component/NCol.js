import React, {Component} from 'react';
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
            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                {this.props.children}
            </Col>
        );
    }
}

NCol.propTypes = {

};

NCol.defaultProps = {

};

export default NCol