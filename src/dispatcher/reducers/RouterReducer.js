import * as types from "./../constants/ActionTypes";
import * as localStorages from "./../../components/constant/LocalStorages";

let initialState = null;

let routerChange = (state = initialState, action) => {
    switch(action.type){        
        case types.CHANGE_ROUTER:
            state = action.pathname;
            localStorage.setItem(localStorages.OLD_PATH, state);
            return state;
        default: 
            return state
    }
}

export default routerChange;