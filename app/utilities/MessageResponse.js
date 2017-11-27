/**
 * Created by User on 6/16/2017.
 */
module.exports = function (name, data) {
    let self = {};
    self.MISSING_HEADER_FIELD = {
        code: 1,
        msg: "Thiếu thông tin bảo mật"
    };
    self.MISSING_FIELD = {
        code: 2,
        msg: "Request thiếu data",
        data: data
    };
    self.QUERY_ERROR = {
        code: 3,
        msg: "Xảy ra lỗi khi truy vấn",
        data: data
    };
    self.EXIST_OBJECT = {
        code: 4,
        msg: `${name} đã tồn tại`,
        data: data
    };
    self.NOT_EXIST_OBJECT = {
        code: 5,
        msg: `${name} không tồn tại`,
        data: data
    };
    self.FOUND_DATA = {
        code: 6,
        msg: "Found data",
        data: data
    };
    self.NOT_FOUND = {
        code: 7,
        msg: "Không tìm thấy lữ liệu",
        data: data
    };
    self.ADD_SUCCESSFULLY = {
        code: 8,
        msg: `Tạo mới ${name} thành công`,
        data: data
    };
    self.ADD_FAIL = {
        code: 9,
        msg: `Tạo mới ${name} thất bại`,
        data: data
    };
    self.UPDATE_SUCCESSFULLY = {
        code: 10,
        msg: `Cập nhật ${name} thành công`,
        data: data
    };
    self.UPDATE_FAIL = {
        code: 11,
        msg: `Cập nhật ${name} thất bại`,
        data: data
    };
    self.DELETE_SUCCESSFULLY = {
        code: 12,
        msg: "Xóa thành công",
        data: data
    };
    self.LOGIN_INCORRECT_USER_NAME = {
        code: 13,
        msg: "Tên đăng nhập không đúng"
    };
    self.LOGIN_INCORRECT_PASSWORD = {
        code: 14,
        msg: "Mật khẩu đăng nhập không đúng"
    };
    self.LOGIN_SUCCESSFULLY = {
        code: 15,
        msg: "Đăng nhập thành công",
        data: data
    };
    self.CAN_NOT_DELETE = {
        code: 16,
        msg: "Không thể xóa vì tồn tại phụ thuộc"
    };
    self.WRONG_TOKEN_KEY = {
        code: 17,
        msg: "Sai thông số bảo mật"
    };
    self.CUSTOM_MESSAGE = {
        code: 99,
        msg: `${name}`
    };
    return self;
};