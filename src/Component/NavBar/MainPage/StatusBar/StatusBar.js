import React, { Component } from 'react';
import Status from './Status';
import '../StatusBar/StatusBar.css'

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="statusbar__container" >
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
            <Status />
        </div>);
    }
}

export default StatusBar;