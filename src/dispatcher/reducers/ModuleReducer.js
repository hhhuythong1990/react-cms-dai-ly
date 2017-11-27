import * as types from "./../constants/ActionTypes";

let initialState = [];

let module = (state = initialState, action) => {
    switch(action.type){        
        case types.ALL_MODULE:
            state = action.data;
            return state;    
        default: 
            return state
    }
}

export default module;