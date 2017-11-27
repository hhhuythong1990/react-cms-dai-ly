import * as types from "./../constants/ActionTypes";

let initialState = {
    alertStatus: null,
    msg: null
};

let Notification = (state = initialState, action) => {
    switch(action.type){        
        case types.SHOW_NOTIFICATION:         
            return {
                alertStatus: action.data.status,
                msg: action.data.msg
            };
        case types.HIDE_NOTIFICATION:
                     
            return {
                alertStatus: null,
                msg: null
            };   
        default: 
            return state
    }
}

export default Notification;