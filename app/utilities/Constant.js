module.exports = function (userSession) {
    return {
        "headers":{
            "content-type": "application/json",
            "I-API-CORE": userSession
        }
    }
};

module.exports.CODE_RESPONSE = {
    "FOUND_DATA": 6,
    "ADD_SUCCESSFULLY": 8,
    "DELETE_SUCCESSFULLY": 12
}

module.exports.ALERT_STATUS = {
    "ON_SUCCESS": "alert-success",
    "ON_ERROR": "alert-danger"
}

module.exports.APP = {
    "TYPE_CALL_API_SUCCESS": 1,
    "TYPE_CALL_API_FAIL": 2,
    "TYPE_UNAUTHENTICATED": 3,
    "TYPE_VALIDATE_ERROR": 4,
    
    "CODE_SUCCESS_PROCESS": 200,
    "CODE_FAIL_PROCESS": 204,
    "CODE_UNAUTHENTICATED": 401
}