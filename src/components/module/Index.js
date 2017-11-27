import React from "react";
import { connect } from "react-redux";
import  { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import axios from "axios";

import appConstant from "./../constant/App";
import * as actions from "./../../dispatcher/actions/MainActions";
import Create from "./Create";
import Edit from "./Edit";
import ConfirmDelete from "./../layout/ConfirmDelete";
import Notification from "./../../components/layout/Notification";
import Pagination from "./../../components/layout/Pagination";


class SetUpIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            urlApi: "/api/allModule",
            idSelected: ""
        };
        
    }
    componentWillMount () {
        let { onGetAllModule, onShowNotification, onChangeTotalData, onPageDefault } = this.props;
        let currentPageDefault = appConstant.DEFAULT_PAGE;
        let perPageDefault = appConstant.PAGINATION_10;
        let pageDefault = {
            currentPage: currentPageDefault,
            perPage: perPageDefault
        }
        onPageDefault(pageDefault);        
        axios.get(`${ this.state.urlApi }?skip=${ currentPageDefault }&limit=${ perPageDefault }`)
        .then(function (response) {
            if(response.data.code === appConstant.CODE_SUCCESS_PROCESS){
                onGetAllModule(response.data.data);
                onChangeTotalData(response.data.total);                
            }else if(response.data.code === appConstant.CODE_FAIL_PROCESS){
                onShowNotification(response.data);
            }else{
                return <Redirect to={ response.data.data } />
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onPaginationClick = (pageNumSelected) => {
        let { onGetAllModule, onShowNotification, pagination, onPageChange, onChangeTotalData } = this.props;
        let pageNumber = parseInt(pageNumSelected);
        let perPage = pagination.perPage;
        let pageChange = {
            currentPage: pageNumber,
            perPage: perPage,
        }
        onPageChange(pageChange);
		axios.get(`/api/allModule?skip=${ pageNumber }&limit=${ perPage }`)
        .then(function (response) {
            if(response.data.code === appConstant.CODE_SUCCESS_PROCESS){
                onGetAllModule(response.data.data);
                onChangeTotalData(response.data.total);
            }else if(response.data.code === appConstant.CODE_FAIL_PROCESS){
                onShowNotification(response.data);
            }else{
                return <Redirect to={ response.data.data } />
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    storeId = (event) => {
        let value = parseInt(event.currentTarget.value || 0);
        let { modules } = this.props;
        this.setState({
            idSelected: modules[value]["_id"]
        });
    }

    handleDelete = () => {
        let { pagination, onGetAllModule, onChangeTotalData, onShowNotification } = this.props;
        axios.post("/api/deleteModule",  { "module_id": this.state.idSelected, "current_page": pagination.currentPage, "per_page": pagination.perPage })
        .then(function (response) {
            if(response.data.code === appConstant.CODE_SUCCESS_PROCESS){
                onGetAllModule(response.data.data);
                onChangeTotalData(response.data.total);
                onShowNotification(response.data);
            }else if(response.data.code === appConstant.CODE_FAIL_PROCESS){
                onShowNotification(response.data);
            }else{
                return <Redirect to={ response.data.data } />
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render () {
        let { modules, currentPage, pagination } = this.props;
        let receiveNumber = (pagination.currentPage - 1) * pagination.perPage;
        let elemModule = modules.map((module, index) => {            
            return (
                <tr key={ index }>
                    <td>{ receiveNumber + index + 1 }</td>
                    <td>{ module.module_name } </td>
                    <td>{ module.day_create_string }</td>
                    <td>
                        <button className="btn btn-warning"><i className="fa fa-pencil-square-o"></i></button>
                        &nbsp;
                        <button className="btn btn-danger" data-toggle="modal" data-target="#myModalConfirm" data-backdrop="static" data-keyboard="false"
                            value={ index } onClick={ this.storeId }>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            )
        });

        return (
            <div id="page-wrapper" style={{ "minHeight": 390}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Mô-dun</h1>
                    </div>                
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Notification />
                    </div>    
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary btn-small" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">
                                    Tạo mới mô-dun
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên mô-dun</th>
                                    <th>Thời gian tạo</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { elemModule }
                            </tbody>
                        </table>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pull-right">
                            <Pagination paginationClick={ this.onPaginationClick } />
                        </div>                        
                    </div>
                </div>                
                <Create />
                <ConfirmDelete titleModal={ "Xóa mô-đun" } msgModal={ "Bạn có muốn xóa mô-đun này không?" } deleteClick={ this.handleDelete }/>    
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
        modules: state.module,
        notification: state.notification,
        pagination: state.pagination
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onChangeRouter: (router) => {
            dispatchEvent(actions.ChangeRouter(router));
        },
        onGetAllModule: (modules) => {
            dispatchEvent(actions.AllModule(modules));
        },
        onShowNotification: (dataNotification) => {
            dispatchEvent(actions.ShowNotification(dataNotification));
        },
        onPageDefault: (pageDefault) => {
            dispatchEvent(actions.DefaultPagination(pageDefault));
        },        
        onPageChange: (pageChange) => {
            dispatchEvent(actions.ChangePagination(pageChange));
        },
        onChangeTotalData: (totalData) => {  
            dispatchEvent(actions.ChangeTotalData(totalData));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SetUpIndex);