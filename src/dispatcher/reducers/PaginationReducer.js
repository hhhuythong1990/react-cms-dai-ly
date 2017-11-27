import * as types from "./../constants/ActionTypes";

let initialState = {
    currentPage: null,
    perPage: null,
    totalData: 0
};

let Pagination = (state = initialState, action) => {
    switch(action.type){        
        case types.DEFAULT_PAGINATION:
            return {
                ...state,
                currentPage: action.data.currentPage,
                perPage: action.data.perPage
            };
        case types.CHANGE_PAGINATION:                     
            return {
                ...state,
                currentPage: action.data.currentPage,
                perPage: action.data.perPage
            };
        case types.CHANGE_TOTAL_DATA:                     
            return {
                ...state,
                totalData: action.data
            } ;  
        default: 
            return state
    }
}

export default Pagination;