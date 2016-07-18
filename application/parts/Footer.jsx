import React from 'react';

export default

class Footer extends React.Component {
    constructor() {
        super();
    };

    render() {
        var dataWeb = this.props.dataWeb;
        
        return (
            <footer id="footer" className="center">
                {dataWeb.copyright}
            </footer>
        );
    }
}