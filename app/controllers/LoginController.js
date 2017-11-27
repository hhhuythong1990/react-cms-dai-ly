const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const axios = require("axios");

const helper = require("./../common/Helper");

router.post("/authenticate", (req, res, next) => {
    // helper.AXIOS_POST('http://localhost:4000/api/try', {a: 7, str: 'Some string: 1111111'})
    // .then(res => {
    //     console.log(res.status);
    // }).catch(error => {
    //     console.log(error);
    // });
    const menus = [
        {
            "Quản lý Admin": [
                {
                    name: "Danh sách tài khoản",
                    to: "/",
                    exact: true
                },
                {
                    name: "Phân quyền quản trị",
                    to: "/home1",
                    exact: false
                },
                {
                    name: "Danh sách quyền",
                    to: "/danh-sach-quyen",
                    exact: false
                }
            ]
        },
            {
                "Quản lý đại lý": [
                    {
                        name: "Thông tin đại lý",
                        to: "/home1",
                        exact: false
                    }
                ]
            },
            {
                "Quản lý Giftcode": [
                    {
                        name: "Danh sách Giftcode",
                        to: "/home1",
                        exact: false
                    },
                    {
                        name: "Chương trình ưu đãi",
                        to: "/home1",
                        exact: false
                    },
                    {
                        name: "Lịch sử giao dịch",
                        to: "/home1",
                        exact: false
                    }
                ]
            },
            {
                "Nhận mã Giftcode": [
                    {
                        name: "Danh sách đã mua",
                        to: "/home1",
                        exact: false
                    },
                    {
                        name: "Nhận mã Giftcode",
                        to: "/home1",
                        exact: false
                    },
                    {
                        name: "Xuất bán Giftcode",
                        to: "/home1",
                        exact: false
                    }
                ]
            },
        {
            "Cài đặt": [
                {
                    name: "Danh sách mô-dun",
                    to: "/mo-dun",
                    exact: false
                }
            ]
        }
    ]
    let { username, password } = req.body;
    let userProfile;
    if(username === "thonghhh@s-wifi.vn" && password === "123456"){
        userProfile = {
            username: username,
            menus: menus
        }
        req.session.username = userProfile;
    }else{

    }
    res.send(userProfile);
});

router.get("/getInfo", (req, res, next) => {
    if(req.session.username){
        return res.send({data: req.session.username, msg: "DA DANG NHAP"});
    }
    res.send({data: null, msg:"CHUA DANG NHAP"});
});

module.exports = router;