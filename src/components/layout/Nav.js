import React from "react";
import { connect } from "react-redux";
import ReactDOM from 'react-dom';

import Header from "./Header";
import UserProfile from "./UserProfile";
import Menu from "./Menu";


class Nav extends React.Component {
    componentDidMount(){
        var menuDom = ReactDOM.findDOMNode(this);
        $(menuDom).metisMenu();
    }
    render () {
        return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"marginBottom": 0}}>                
                <Header />

                <ul className="nav navbar-top-links navbar-right">
                    <UserProfile />
                </ul>

                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <Menu />
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Nav;