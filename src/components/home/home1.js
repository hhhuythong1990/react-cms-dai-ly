import React from "react";
import { connect } from "react-redux";

import * as actions from "./../../dispatcher/actions/MainActions";
import Nav from "./../layout/Nav";

class Home1 extends React.Component {

    render () {        
        return (            
            <div id="page-wrapper" style={{ "minHeight": 390}}>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard 1</h1>
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
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home1);