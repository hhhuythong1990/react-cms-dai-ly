import React from "react";
import  { Redirect } from "react-router-dom";
import axios from "axios";
import { isEmail } from 'validator';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const CheckSession = (logOutAction) => {
    axios.get('/api/getInfo')
    .then(function (response) {   
        if(!response.data.data){
            logOutAction();                
            return <Redirect to="/login" />
        }
    })
    .catch(function (error) {
        console.log(error);
    });
};

export const required = (value, props) => {
    if (!value || (props.isCheckable && !props.checked)) {
        return <span className="text-danger">{ capitalizeFirstLetter(props.name) } không được rỗng!</span>;
    }
};

export const email = (value) => {
    if (!isEmail(value)) {
        return <span className="text-danger">{ value } không đúng định dạng email!</span>;
    }
};
   
export const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
      // Return jsx
        return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
};