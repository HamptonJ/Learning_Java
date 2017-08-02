import 'babel-polyfill';
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import {updateInput, sendCommand} from "../actions/action-ui";
import {init} from "../actions/action-startup";

require("../stylesheets/main.scss");
require("../stylesheets/fonts/whhg-font/css/whhg.css");
require("../stylesheets/fonts/Roboto/roboto.css");
require("../stylesheets/fonts/fonts/bootstrap.min.css");

class App extends Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div id="app">
                <div id="output">
                    {this.props.ui.get('result').valueSeq().map((line, i) => {
                        return (
                            <div key={i} className="line">{line}</div>
                        )
                    })}
                </div>
                <div>
                    <input type="text" id="input"
                           value={this.props.ui.getIn(['staged', 'commandInput'])}
                           onChange={(event) => this.props.updateInput(event.target.value)}
                           placeholder="Input..."/>
                    <button onClick={(event) => this.props.sendCommand(this.props.ui.getIn(['staged', 'commandInput']))}>
                        Send
                    </button>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        ui: state.get('ui')
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({updateInput, sendCommand, init}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);