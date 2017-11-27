import React from "react";
import { connect } from "react-redux";
import  { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import * as actions from "./../../dispatcher/actions/MainActions";
import List from "./list";

class PermissionIndex extends React.Component {
    render () {
        let { match } = this.props;
        return (
            <div id="page-wrapper" style={{ "minHeight": 390}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Phân quyền</h1>
                    </div>                
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pull-right">
                            <div className="btn-group">
                                <Button bsStyle="primary">Tạo mới</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                Danh sách quyền                    
                            </div>     
                            <div className="panel-body">                                
                                <List />
                            </div> 
                        </div>   
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
        
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onChangeRouter: (router) => {
            dispatchEvent(actions.ChangeRouter(router));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(PermissionIndex);