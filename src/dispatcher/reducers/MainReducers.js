import { combineReducers } from 'redux';
import login from './LoginReducer';
import routerChange from './RouterReducer';
import notification from "./NotificationReducer";
import module from "./ModuleReducer";
import pagination from "./PaginationReducer";

const mainReducer = combineReducers ({
    login: login,
    routerChange: routerChange,
    notification: notification,
    module: module,
    pagination: pagination
});

export default mainReducer;