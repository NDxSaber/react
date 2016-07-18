import React from 'react';

export default

class Notifier extends React.Component {
    constructor() {
        super();
    };

    render() {
        var dataWeb = this.props.dataWeb;
        return (
            <div id="webinfo"></div>
        );
    }
}