import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

import * as actions from "./../../dispatcher/actions/MainActions";
import { CheckSession } from "./../constant/Helpers";

import Nav from "./../layout/Nav";
class Home extends React.Component {
    componentWillMount () {
        let { onLogout } = this.props;
        CheckSession(onLogout);
    }


    render () {
        return (
            <div id="page-wrapper" style={{ "minHeight": 390}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Dashboard</h1>
                    </div>
                </div>
            </div>    
        );
    }

    componentDidMount (){
        let { location, onChangeRouter } = this.props;
        onChangeRouter(location.pathname);
    }
}

const mapStateToProps = state => {
    return {
        router: state.routerChange
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onChangeRouter: (router) => {
            dispatchEvent(actions.ChangeRouter(router));
        },
        onLogout: () => {
            dispatchEvent(actions.Logout());
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);