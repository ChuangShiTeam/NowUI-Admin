import React, {Component} from 'react';
import {connect} from 'react-redux';

class Index extends Component {
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

    handleAdd() {
        this.props.history.push({
            pathname: '/dashboard/detail',
            query: {}
        });
    }

    render() {
        return (
            <div>
                ddd
            </div>
        );
    }
}

export default connect((state) => {
    return {
        dashboard: state.dashboard
    }
})(Index);
