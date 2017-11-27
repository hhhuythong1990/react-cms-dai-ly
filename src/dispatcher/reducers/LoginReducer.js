import * as types from "./../constants/ActionTypes";

let initialState = null;

let login = (state = initialState, action) => {
    switch(action.type){        
        case types.LOG_IN:
            state = action.username;
            return state;
        case types.LOG_OUT:
            state = null;
            return state;    
        default: 
            return state
    }
}

export default login;