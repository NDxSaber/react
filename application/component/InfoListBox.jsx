import React from 'react';
import { Link } from 'react-router'

export default

class InfoListBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        var title       = this.props.title;
        var list        = this.props.list;

        return (
            <div className="info-list-box">
                <div className="title">{title}</div>
                <InfoList list={list}/>
            </div>
        )
    }
}

class InfoList extends React.Component {
    constructor() {
        super();
    };

    render() {
        var infoList = "";
        
        if(typeof this.props.list != 'undefined'){
            infoList = this.props.list.map(function(list, key){
                var numbering   = key + 1;
                return (
                    <li key={key}>
                        <span><span>{numbering}</span></span>
                        {list}
                    </li>
                );
            });
        }

        return (
            <ul>
                {infoList}
            </ul>
        );
    }
}