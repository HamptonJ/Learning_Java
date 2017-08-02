import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class Template extends Component {
    componentDidMount() {
        // fire off loading action here
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ui: state.get('ui')
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Template);