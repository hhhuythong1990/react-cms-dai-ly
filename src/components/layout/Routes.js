import React from 'react';
import Home from './../home/home';
import Home1 from './../home/home1';
import NotFound from './../home/notfound';
import PermissionIndex from "./../permission/index";
import SetUpIndex from "./../module/Index";



const routes = [
    {
        path: "/",
        exact: true,
        main: ({location}) => <Home location={ location } />
    },
    {
        path: "/home1",
        exact: false,
        main: ({location}) => <Home1 location={ location }/> 
    },
    {
        path: "/mo-dun",
        exact: false,
        main: ({location}) => <SetUpIndex location={ location } />
    }    
]

export default routes;