const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const axios = require("axios");

const messageValidate = require("./../utilities/MessageValidate");
// const messageResponse = require("./../utilities/MessageResponse");
const { APP } =  require("./../utilities/Constant");
const { AXIOS_POST, AXIOS_GET, PROCESS_RESPONSE } = require("./../common/Helper");

router.post("/newModule", (req, res, next) => {
    if(req.session.username) {
        req.check("module_name", messageValidate("Tên mô-dun")).notEmpty();
        req.check("current_page", messageValidate("current_page")).notEmpty();
        req.check("per_page", messageValidate("per_page")).notEmpty();
        req.getValidationResult().then(function(result) {
            if (!result.isEmpty()) {
                res.json(PROCESS_RESPONSE(result.array(), APP.TYPE_VALIDATE_ERROR));
            } else {                
                let dataPost = { 
                    "module_name": req.body.module_name,
                    "skip": req.body.current_page,
                    "limit": req.body.per_page
                };
                AXIOS_POST("/module/create", dataPost, req.session.username).then(response => {
                    res.json(PROCESS_RESPONSE(response, APP.TYPE_CALL_API_SUCCESS));
                }).catch(error => {
                    res.json(PROCESS_RESPONSE(APP.TYPE_CALL_API_FAIL));
                });
            }
        });
    }else {
        res.json(PROCESS_RESPONSE(null, APP.TYPE_UNAUTHENTICATED));
    }
});

router.get("/allModule", (req, res, next) => {
    if(req.session.username) {
        req.check("limit", messageValidate("limit")).notEmpty();
        req.check("skip", messageValidate("skip")).notEmpty();
        req.getValidationResult().then(function(result) {
            if (!result.isEmpty()) {
                res.json(messageResponse("", result.array()).MISSING_FIELD);
            } else {  
                AXIOS_GET(`/module/getAll?skip=${ req.query.skip }&limit=${ req.query.limit }`, req.session.username).then(response => {
                    res.json(PROCESS_RESPONSE(response, APP.TYPE_CALL_API_SUCCESS));
                }).catch(error => {                    
                    res.json(PROCESS_RESPONSE(null, APP.TYPE_CALL_API_FAIL));
                });
            }
        });
    }else {
        res.json(PROCESS_RESPONSE(null, APP.TYPE_UNAUTHENTICATED));
    }
});

router.post("/deleteModule", (req, res, next) => {
    if(req.session.username) {
        req.check("module_id", messageValidate("module_id")).notEmpty();
        req.check("current_page", messageValidate("current_page")).notEmpty();
        req.check("per_page", messageValidate("per_page")).notEmpty();
        req.getValidationResult().then(function(result) {
            if (!result.isEmpty()) {
                res.json(messageResponse("", result.array()).MISSING_FIELD);
            } else {  
                let dataPost = {
                    "module_id": req.body.module_id,
                    "skip": req.body.current_page,
                    "limit": req.body.per_page
                }
                AXIOS_POST("/module/remove", dataPost, req.session.username).then(response => {
                    res.json(PROCESS_RESPONSE(response, APP.TYPE_CALL_API_SUCCESS));
                }).catch(error => {                    
                    res.json(PROCESS_RESPONSE(null, APP.TYPE_CALL_API_FAIL));
                });
            }
        });
    }else {
        res.json(PROCESS_RESPONSE(null, APP.TYPE_UNAUTHENTICATED));
    }
});

module.exports = router;