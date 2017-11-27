import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import axios from "axios";
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';

import * as actions from "./../../dispatcher/actions/MainActions";
import { required, email } from "./../constant/Helpers";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    onFieldChange = (event) => {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { onShowNotification, onGetAllModule, pagination, onChangeTotalData } = this.props;
        let menuDom = ReactDOM.findDOMNode(this);
        
        $(menuDom).modal("hide");
        axios.post("/api/newModule", { 
            "module_name": this.state.email, 
            "current_page": pagination.currentPage, 
            "per_page": pagination.perPage }
        ).then(function (response) {
            if(response.data.data.length > 0){
                onGetAllModule(response.data.data);
                onChangeTotalData(response.data.total);
            }
            onShowNotification(response.data);
            
        }).catch(function (error) {
            console.log(error);
        });
        this.setState({
            email: ""
        });
    };
    render () {       
        
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header-primary">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="myModalLabel">Tạo mới mô-đun</h4>
                        </div>
                        <div className="modal-body">
                        <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit} autoComplete="off">
                            <div className="form-group">
                                <label className="control-label" htmlFor="inputError">Email*</label>
                                <Input className="form-control" name='email' validations={[required, email]} value={ this.state.email } onChange={ this.onFieldChange }/>                                
                            </div>
                            <div>
                                <Button className="btn btn-primary">Submit</Button>
                            </div>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

const mapStateToProps = state => {
    return {
        modules: state.module,
        notification: state.notification,
        pagination: state.pagination
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onShowNotification: (dataNotification) => {
            dispatchEvent(actions.ShowNotification(dataNotification));
        },
        onGetAllModule: (modules) => {
            dispatchEvent(actions.AllModule(modules));
        },
        onChangeTotalData: (totalData) => {  
            dispatchEvent(actions.ChangeTotalData(totalData));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Modal);