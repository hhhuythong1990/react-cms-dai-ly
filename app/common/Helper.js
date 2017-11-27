const axios = require("axios");
const headers = require("./../utilities/constant");
const config = require("./../config/" + (process.env["NODE_ENV"] || "Production"));

const { CODE_RESPONSE, ALERT_STATUS, APP } = require("./../utilities/Constant");

module.exports = {
    AXIOS_POST: function (url, objData, userSession) {               
        return axios.post(config.HOST_API + url, objData, headers(userSession));
    },
    AXIOS_GET: function (url, userSession) {  
        return axios.get(config.HOST_API + url, headers(userSession));
    },
    PROCESS_RESPONSE: function (dataResponse = null, type) {
        if(type === APP.TYPE_CALL_API_SUCCESS){
            switch(dataResponse.data.code){
                case CODE_RESPONSE.DELETE_SUCCESSFULLY:
                case CODE_RESPONSE.FOUND_DATA:
                case CODE_RESPONSE.ADD_SUCCESSFULLY:
                    return { 
                        data: dataResponse.data.data,
                        total: dataResponse.data.total,
                        msg: dataResponse.data.msg,
                        status: ALERT_STATUS.ON_SUCCESS,
                        code: APP.CODE_SUCCESS_PROCESS
                    }
                break;
                default:
                    return { 
                        data: [],
                        msg: dataResponse.data.msg,
                        status: ALERT_STATUS.ON_ERROR,
                        code: APP.CODE_FAIL_PROCESS
                    }
                break;
            }
        } else if(type === APP.TYPE_CALL_API_FAIL){
            return { 
                data: [],
                msg: "Xãy ra lỗi kết nối API",
                status: ALERT_STATUS.ON_ERROR,
                code: APP.CODE_FAIL_PROCESS
            }
        } else if(type === APP.TYPE_VALIDATE_ERROR){
            let stringData = dataResponse.map((error, index) => {
                return error.msg 
            });
            return { 
                data: [],
                msg: `${ stringData.toString() }: không được rỗng!`,
                status: ALERT_STATUS.ON_ERROR,
                code: APP.CODE_FAIL_PROCESS
            }
        } else {
            return { 
                data: "/login",
                code: APP.CODE_UNAUTHENTICATED
            }
        }
        
    }
}