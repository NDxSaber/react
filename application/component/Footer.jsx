import React from 'react';

export default

class Footer extends React.Component {
    constructor() {
        super();
    };

    render() {
        var dataWeb = this.props.dataWeb;
        
        return (
            <div className="container">
                <footer id="footer" className="center">
                    {dataWeb.copyright}
                </footer>
            </div>
        );
    }
}