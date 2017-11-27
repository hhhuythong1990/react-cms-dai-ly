import  React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import axios from "axios";
import thunk from "redux-thunk";

require("./../public/dist/css/bootstrap.min.css");
require("./../public/dist/css/metisMenu.min.css");
require("./../public/dist/css/sb-admin-2.min.css");
require("./../public/dist/css/morris.css");
require("./../public/dist/css/font-awesome.min.css");
require("./../public/dist/css/my-style.css");

require("./../public/dist/js/bootstrap.min");
require("./../public/dist/js/metisMenu.min");
require("./../public/dist/js/sb-admin-2.min");

import reducers from"./dispatcher/reducers/MainReducers";
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

import Main from "./components/Main";

axios.get('/api/getInfo')
.then(function (response) {    
    ReactDOM.render(        
        <Provider store={ store }>
            <Main statusLogin={ response.data }/>
        </Provider>,
        document.getElementById('root')
    )
})
.catch(function (error) {
    console.log(error);
});


