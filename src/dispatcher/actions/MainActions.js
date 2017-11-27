import * as types from "./../constants/ActionTypes";

export const Login = (username) => {    
    return {
        type: types.LOG_IN,
        username: username
    }
}

export const Logout = () => {    
    return {
        type: types.LOG_OUT
    }
}

export const ChangeRouter = (pathname) => {    
    return {
        type: types.CHANGE_ROUTER,
        pathname: pathname
    }
}

export const ShowNotification = (objDataNotification) => {    
    return {
        type: types.SHOW_NOTIFICATION,
        data: objDataNotification
    }
}

export const HideNotification = () => {    
    return {
        type: types.HIDE_NOTIFICATION
    }
}

export const AllModule = (modules) => {    
    return {
        type: types.ALL_MODULE,
        data: modules
    }
}

export const DefaultPagination = (objPageDefault) => {    
    return {
        type: types.DEFAULT_PAGINATION,
        data: objPageDefault
    }
}

export const ChangePagination = (objPageChange) => {    
    return {
        type: types.CHANGE_PAGINATION,
        data: objPageChange
    }
}

export const ChangeTotalData = (totalData) => {    
    return {
        type: types.CHANGE_TOTAL_DATA,
        data: totalData
    }
}