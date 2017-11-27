import React from "react";
import { connect } from "react-redux";
import  { Redirect } from "react-router-dom";
import axios from "axios";

import * as actions from "./../../dispatcher/actions/MainActions";
import * as localStorages from "./../constant/LocalStorages";

class Login extends React.Component {
    
    handleSubmitLogin = (event) => {
        event.preventDefault();
        let { username, password } = this.refs;
        let { onLogin, login } = this.props;
        axios.post('/api/authenticate', { username: username.value, password: password.value})
        .then(function (response) {
            onLogin(response.data);            
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    
    render () {
        let { login, oldRouter } = this.props;        
        let pathRedirect = "/";
        let storage = localStorage.getItem(localStorages.OLD_PATH);
        if(login){
            if(storage){
                pathRedirect = storage;
            }
            return <Redirect to={ pathRedirect } />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">HỆ THỐNG KINH DOANH CODE</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={ this.handleSubmitLogin }>
                                    <div className="form-group">
                                        <input className="form-control" ref="username" placeholder="Nhập tên đăng nhập" name="username" type="text" autoFocus="" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" ref="password" placeholder="Nhập mật khẩu" name="password" type="password" />
                                    </div>
                                    <hr />
                                    <button className="btn btn-small btn-success btn-block">Đăng Nhập</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );        
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    };
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onLogin: (username) => {
            dispatchEvent(actions.Login(username));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Login); 