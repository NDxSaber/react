//--Plugin
import React from 'react';

export default //--To Call Import-ed Component

class App extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default App;