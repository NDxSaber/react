import React from 'react';

export default

class Alert extends React.Component {
    constructor() {
        super();
    };

    render() {
        var className   = this.props.type + " message-type-1";
        return (
            <div className={className}>
                {this.props.message}
                <br/>
                <span>
                    {this.props.submessage}
                </span>
            </div>
        );
    }
}
