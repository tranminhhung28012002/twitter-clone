"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var Register_module_scss_1 = require("./Register.module.scss");
var button_module_scss_1 = require("../login/button.module.scss");
var twitter_jpg_1 = require("../login/img/twitter.jpg");
var avatar_default_png_1 = require("../login/img/avatar-default.png");
var toast_1 = require("../toast");
function Register(_a) {
    var _b, _c, _d, _e, _f;
    var showRegister = _a.showRegister, onClose = _a.onClose;
    var _g = react_hook_form_1.useForm(), register = _g.register, handleSubmit = _g.handleSubmit, errors = _g.formState.errors;
    // const schema = yup.object().shape({
    //   name: yup.string().required('Tên là bắt buộc'),
    //   email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    //   date_of_birth: yup.string().required('Ngày sinh là bắt buộc'),
    //   password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
    //   confirm_password: yup.string()
    //     .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
    //     .required('Xác nhận mật khẩu là bắt buộc'),
    // });
    var _h = react_1.useState(1), step = _h[0], setStep = _h[1];
    var _j = react_1.useState(false), showToast = _j[0], setShowToast = _j[1];
    var handleNext = function () {
        setStep(function (prevStep) { return prevStep + 1; });
    };
    var onSubmit = handleSubmit(function (data) {
        console.log(data);
        if (step === 1) {
            setShowToast(true);
        }
        else {
            handleNext();
        }
    });
    var handleCloseToast = function () {
        setShowToast(false);
        handleNext();
    };
    return (react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister + " " + Register_module_scss_1["default"].show },
        react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__block },
            showToast && react_1["default"].createElement(toast_1["default"], { message: "\u0110\u0103ng k\u00FD th\u00E0nh c\u00F4ng!", onClose: handleCloseToast }),
            step === 1 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("a", { className: Register_module_scss_1["default"].twitterRegister__close, onClick: onClose }, "X"),
                react_1["default"].createElement("img", { src: twitter_jpg_1["default"], className: Register_module_scss_1["default"].twitterRegister__icon, alt: "Twitter Icon" }),
                react_1["default"].createElement("h2", { className: Register_module_scss_1["default"].twitterRegister__heading + " " + Register_module_scss_1["default"]['twitterRegister__heading-mb33'] }, "T\u1EA1o t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n"),
                react_1["default"].createElement("form", { className: Register_module_scss_1["default"].twitterRegister__form, onSubmit: onSubmit },
                    react_1["default"].createElement("input", __assign({ type: "text", placeholder: "T\u00EAn", className: Register_module_scss_1["default"].twitterRegister__name }, register('name', {
                        required: {
                            value: true,
                            message: 'Tên là bắt buộc'
                        },
                        pattern: {
                            value: /[A-Za-z]/,
                            message: 'Tên không được có ký tự đặc biệt'
                        }
                    }))),
                    react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__errors }, (_b = errors.name) === null || _b === void 0 ? void 0 : _b.message),
                    react_1["default"].createElement("input", __assign({ type: "text", placeholder: "Email", className: Register_module_scss_1["default"].twitterRegister__email }, register('email', {
                        required: {
                            value: true,
                            message: 'Email là bắt buộc'
                        },
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Email không đúng định dạng'
                        }
                    }))),
                    react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__errors }, (_c = errors.email) === null || _c === void 0 ? void 0 : _c.message),
                    react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__comment },
                        react_1["default"].createElement("h6", { className: Register_module_scss_1["default"].twitterRegister__title }, "Ng\u00E0y sinh"),
                        react_1["default"].createElement("p", { className: Register_module_scss_1["default"].twitterRegister__desc }, "\u0110i\u1EC1u n\u00E0y s\u1EBD kh\u00F4ng \u0111\u01B0\u1EE3c hi\u1EC3n th\u1ECB c\u00F4ng khai. X\u00E1c nh\u1EADn tu\u1ED5i c\u1EE7a b\u1EA1n, ngay c\u1EA3 khi t\u00E0i kho\u1EA3n n\u00E0y d\u00E0nh cho doanh nghi\u1EC7p, th\u00FA c\u01B0ng ho\u1EB7c th\u1EE9 g\u00EC kh\u00E1c.")),
                    react_1["default"].createElement("input", __assign({ type: "date", className: Register_module_scss_1["default"].twitterRegister__date }, register('date_of_birth', {
                        required: {
                            value: true,
                            message: 'Bắt buộc chọn ngày sinh'
                        }
                    }))),
                    react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__errors }, (_d = errors.date_of_birth) === null || _d === void 0 ? void 0 : _d.message),
                    react_1["default"].createElement("button", { type: "submit", className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt100'] + " " + button_module_scss_1["default"].button }, "Ti\u1EBFp theo")))),
            step === 2 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("a", { href: '#', className: Register_module_scss_1["default"].twitterRegister__close, onClick: onClose }, "X"),
                react_1["default"].createElement("img", { src: twitter_jpg_1["default"], className: Register_module_scss_1["default"].twitterRegister__icon, alt: "Twitter Icon" }),
                react_1["default"].createElement("h2", { className: Register_module_scss_1["default"].twitterRegister__heading + " " + Register_module_scss_1["default"]['twitterRegister__heading-mb33'] }, "Ch\u00FAng t\u00F4i \u0111\u00E3 g\u1EEDi m\u00E3 cho b\u1EA1n"),
                react_1["default"].createElement("p", { className: Register_module_scss_1["default"].twitterRegister__desc }, "Nh\u1EADp m\u00E3 x\u00E1c th\u1EF1c b\u00EAn d\u01B0\u1EDBi"),
                react_1["default"].createElement("form", { className: Register_module_scss_1["default"].twitterRegister__form, onSubmit: onSubmit },
                    react_1["default"].createElement("input", __assign({ type: "number", placeholder: "M\u00E3 x\u00E1c th\u1EF1c", className: Register_module_scss_1["default"].twitterRegister__code }, register('code', {
                        //  Phần này chưa rõ cách lấy mã từ email về nghe =))) 
                        required: {
                            value: true,
                            message: 'Sai mã xác nhận'
                        }
                    }))),
                    react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__errors }, (_e = errors.code) === null || _e === void 0 ? void 0 : _e.message),
                    react_1["default"].createElement("a", { href: "#" }, "B\u1EA1n kh\u00F4ng nh\u1EADn \u0111\u01B0\u1EE3c email?"),
                    react_1["default"].createElement("button", { type: "submit", className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt300'] + " " + button_module_scss_1["default"].button }, "Ti\u1EBFp theo")))),
            step === 3 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("img", { src: twitter_jpg_1["default"], className: Register_module_scss_1["default"].twitterRegister__icon, alt: "Twitter Icon" }),
                react_1["default"].createElement("h2", { className: Register_module_scss_1["default"].twitterRegister__heading }, "Ch\u00FAng t\u00F4i \u0111\u00E3 g\u1EEDi m\u00E3 cho b\u1EA1n"),
                react_1["default"].createElement("p", { className: Register_module_scss_1["default"].twitterRegister__desc + " " + Register_module_scss_1["default"]['twitterRegister__desc-mb34'] }, "\u0110\u1EA3m b\u1EA3o m\u1EADt kh\u1EA9u c\u00F3 8 k\u00FD t\u1EF1 tr\u1EDF l\u00EAn"),
                react_1["default"].createElement("form", { className: Register_module_scss_1["default"].twitterRegister__form, onSubmit: onSubmit },
                    react_1["default"].createElement("input", __assign({ type: "password", placeholder: "M\u1EADt kh\u1EA9u", className: Register_module_scss_1["default"].twitterRegister__code }, register('password', {
                        required: {
                            value: true,
                            message: 'Nhập mật khẩu'
                        },
                        minLength: {
                            value: 8,
                            message: 'Độ dài mật khẩu lớn hơn 8'
                        }
                    }))),
                    react_1["default"].createElement("div", { className: Register_module_scss_1["default"].twitterRegister__errors }, (_f = errors.password) === null || _f === void 0 ? void 0 : _f.message),
                    react_1["default"].createElement("p", { className: Register_module_scss_1["default"].twitterRegister__Paragraphs },
                        "Khi \u0111\u0103ng k\u00FD ngh\u0129a l\u00E0 b\u1EA1n \u0111\u1ED3ng \u00FD v\u1EDBi ",
                        react_1["default"].createElement("a", { href: '#' }, "\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5"),
                        " v\u00E0 ",
                        react_1["default"].createElement("a", { href: '#' }, "Ch\u00EDnh s\u00E1ch ri\u00EAng t\u01B0"),
                        ", bao g\u1ED3m c\u1EA3 ",
                        react_1["default"].createElement("a", { href: '#' }, "Ho\u1EA1t \u0111\u1ED9ng s\u1EED d\u1EE5ng Cookie"),
                        ". X c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng th\u00F4ng tin li\u00EAn h\u1EC7 c\u1EE7a b\u1EA1n, bao g\u1ED3m \u0111\u1ECBa ch\u1EC9 email v\u00E0 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i nh\u1EB1m c\u00E1c m\u1EE5c \u0111\u00EDch \u0111\u01B0\u1EE3c n\u00EAu trong Ch\u00EDnh s\u00E1ch ri\u00EAng t\u01B0, nh\u01B0 gi\u1EEF g\u00ECn an to\u00E0n t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n v\u00E0 l\u00E0m cho c\u00E1c d\u1ECBch v\u1EE5 c\u1EE7a ch\u00FAng t\u00F4i ph\u00F9 h\u1EE3p h\u01A1n v\u1EDBi b\u1EA1n, bao g\u1ED3m qu\u1EA3ng c\u00E1o. ",
                        react_1["default"].createElement("a", { href: '#' }, "T\u00ECm hi\u1EC3u th\u00EAm"),
                        ". Nh\u1EEFng ng\u01B0\u1EDDi kh\u00E1c s\u1EBD c\u00F3 th\u1EC3 t\u00ECm th\u1EA5y b\u1EA1n qua email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i khi \u0111\u01B0\u1EE3c cung c\u1EA5p, tr\u1EEB phi b\u1EA1n ch\u1ECDn c\u00E1ch kh\u00E1c ",
                        react_1["default"].createElement("a", { href: '#' }, "t\u1EA1i \u0111\u00E2y.")),
                    react_1["default"].createElement("button", { type: "submit", className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt26'] + " " + button_module_scss_1["default"].button }, "Ti\u1EBFp theo")))),
            step === 4 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("img", { src: twitter_jpg_1["default"], className: Register_module_scss_1["default"].twitterRegister__icon, alt: "Twitter Icon" }),
                react_1["default"].createElement("h2", { className: Register_module_scss_1["default"].twitterRegister__heading }, "Ch\u1ECDn m\u1ED9t \u1EA3nh h\u1ED3 s\u01A1"),
                react_1["default"].createElement("p", { className: Register_module_scss_1["default"].twitterRegister__desc + " " + Register_module_scss_1["default"]['twitterRegister__desc-mb34'] }, "C\u00F3 m\u1ED9t t\u1EA5m \u1EA3nh selfie y\u00EAu th\u00EDch? T\u1EA3i l\u00EAn ngay b\u00E2y gi\u1EDD"),
                react_1["default"].createElement("img", { src: avatar_default_png_1["default"], alt: "avatar", className: Register_module_scss_1["default"].twitterRegister__avatar }),
                react_1["default"].createElement("button", { type: "submit", className: button_module_scss_1["default"].btn3 + " " + button_module_scss_1["default"]['btn3-mt19'] + " " + button_module_scss_1["default"].button }, "B\u1ECF qua b\u00E2y gi\u1EDD"))))));
}
exports["default"] = Register;
