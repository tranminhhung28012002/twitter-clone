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
var Login_module_scss_1 = require("./Login.module.scss");
var google_png_1 = require("./icon/google.png");
var apple_png_1 = require("./icon/apple.png");
var twitter_jpg_1 = require("./img/twitter.jpg");
var react_hook_form_1 = require("react-hook-form");
var react_router_dom_1 = require("react-router-dom");
var button_module_scss_1 = require("./button.module.scss");
var register_1 = require("../register/register");
var react_toastify_1 = require("react-toastify");
function LoginComponent() {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(1), step = _a[0], setStep = _a[1];
    var _b = react_1.useState(false), showCreate = _b[0], setShowCreate = _b[1];
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(false), showRegister = _d[0], setShowRegister = _d[1];
    var handleNext = function () {
        setStep(function (prevStep) { return prevStep + 1; });
    };
    var handleLoginClose = function () {
        setShowCreate(false);
        setStep(1);
    };
    var handleRegisterClick = function () {
        setShowRegister(true);
    };
    var _e = react_hook_form_1.useForm(), register = _e.register, handleSubmit = _e.handleSubmit, errors = _e.formState.errors, clearErrors = _e.clearErrors;
    var _f = react_1.useState(null), loginError = _f[0], setLoginError = _f[1];
    var handleLogin = function (data) {
        if (data.email === 'himden9999@gmail.com' && data.password === '123123') {
            navigate('/homepage');
        }
        else if (data.password === '') {
            setLoginError('Nhập mật khẩu');
        }
        else {
            setLoginError('Email hoặc mật khẩu không chính xác.');
        }
    };
    // const handleLogin = async (data: LoginFormInputs) => {
    //     try {
    //         const response = await axios.post('/login.json', {
    //             email: data.email,
    //             password: data.password
    //         });
    //         if (response.data.success) {
    //             toast.success('Đăng nhập thành công!');
    //             navigate('/homepage');
    //         } else {
    //             setLoginError('Email hoặc mật khẩu không chính xác.');
    //         }
    //     } catch (error) {
    //         if (error instanceof AxiosError) {
    //             if (error.response) {
    //                 // Lỗi từ server
    //                 setLoginError(error.response.data.message || 'Email hoặc mật khẩu không chính xác.');
    //             } else if (error.request) {
    //                 // Lỗi không nhận được response
    //                 setLoginError('Không thể kết nối đến server. Vui lòng thử lại sau.');
    //             } else {
    //                 // Lỗi khác
    //                 setLoginError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    //             }
    //         } else {
    //             setLoginError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    //         }
    //         console.error('Lỗi đăng nhập:', error);
    //     }
    // };
    // const handleInputChange = () => {
    //     setLoginError(null);
    //     clearErrors();
    // };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: Login_module_scss_1["default"].containertwitter },
            react_1["default"].createElement("div", { className: Login_module_scss_1["default"].login },
                react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin },
                    react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__left },
                        react_1["default"].createElement("img", { src: twitter_jpg_1["default"], className: Login_module_scss_1["default"].twitterlogin__img, alt: "" })),
                    react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__right },
                        react_1["default"].createElement("h1", { className: Login_module_scss_1["default"].twitterlogin__heading }, "\u0110ang di\u1EC5n ra ngay b\u00E2y gi\u1EDD"),
                        react_1["default"].createElement("p", { className: Login_module_scss_1["default"].twitterlogin__desc }, "Tham gia ngay."),
                        react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__form },
                            react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt5'] + " " + button_module_scss_1["default"].button },
                                react_1["default"].createElement("img", { src: google_png_1["default"], className: Login_module_scss_1["default"].twitterlogin__icon, alt: "" }),
                                "\u0110\u0103ng k\u00FD b\u1EB1ng Gmail"),
                            react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt5'] + " " + button_module_scss_1["default"].button },
                                react_1["default"].createElement("img", { src: apple_png_1["default"], alt: "", className: Login_module_scss_1["default"].twitterlogin__icon }),
                                "\u0110\u0103ng k\u00FD b\u1EB1ng Apple"),
                            react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__script },
                                react_1["default"].createElement("span", { className: Login_module_scss_1["default"].twitterlogin__block }),
                                react_1["default"].createElement("p", null, "ho\u1EB7c"),
                                react_1["default"].createElement("span", { className: Login_module_scss_1["default"].twitterlogin__block })),
                            react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn2 + " " + button_module_scss_1["default"]['btn2-mt8'] + " " + button_module_scss_1["default"].button, onClick: handleRegisterClick }, "T\u1EA1o t\u00E0i kho\u1EA3n"),
                            react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__request },
                                react_1["default"].createElement("p", null,
                                    "Khi \u0111\u0103ng k\u00FD, b\u1EA1n \u0111\u00E3 \u0111\u1ED3ng \u00FD v\u1EDBi ",
                                    react_1["default"].createElement("span", null, "\u0110i\u1EC1u kho\u1EA3n D\u1ECBch v\u1EE5"),
                                    " v\u00E0 ",
                                    react_1["default"].createElement("span", null, "Ch\u00EDnh s\u00E1ch Quy\u1EC1n ri\u00EAng t\u01B0"),
                                    ", g\u1ED3m c\u1EA3 ",
                                    react_1["default"].createElement("span", null, "S\u1EED d\u1EE5ng Cookie"),
                                    ".")),
                            react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__ask }, "\u0110\u00E3 c\u00F3 t\u00E0i kho\u1EA3n?"),
                            react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn3 + " " + button_module_scss_1["default"]['btn3-mt21'] + " " + button_module_scss_1["default"].button, onClick: function () { return setShowCreate(true); } }, "\u0110\u0103ng nh\u1EADp")))))),
        showCreate && (react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twittercreate + " " + Login_module_scss_1["default"].show },
            react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twittercreate__block },
                react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twittercreate__on },
                    react_1["default"].createElement("a", { className: Login_module_scss_1["default"].twittercreate__close, onClick: handleLoginClose }, "X"),
                    react_1["default"].createElement("img", { src: twitter_jpg_1["default"], className: Login_module_scss_1["default"].twittercreate__icon, alt: "" }),
                    react_1["default"].createElement("span", null)),
                step === 1 && (react_1["default"].createElement("form", { onSubmit: handleSubmit(handleNext) },
                    react_1["default"].createElement("h2", { className: Login_module_scss_1["default"].twitterlogin__desc }, "\u0110\u0103ng nh\u1EADp v\u00E0o X"),
                    react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn1 + "  " + button_module_scss_1["default"].button },
                        react_1["default"].createElement("img", { src: google_png_1["default"], className: Login_module_scss_1["default"].twitterlogin__icon, alt: "" }),
                        "\u0110\u0103ng k\u00FD b\u1EB1ng Gmail"),
                    react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt30'] + " " + button_module_scss_1["default"].button },
                        react_1["default"].createElement("img", { src: apple_png_1["default"], alt: "", className: Login_module_scss_1["default"].twitterlogin__icon }),
                        "\u0110\u0103ng k\u00FD b\u1EB1ng Apple"),
                    react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__script },
                        react_1["default"].createElement("span", { className: Login_module_scss_1["default"].twitterlogin__block }),
                        react_1["default"].createElement("p", null, "ho\u1EB7c"),
                        react_1["default"].createElement("span", { className: Login_module_scss_1["default"].twitterlogin__block })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("input", __assign({ type: "text", placeholder: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i, email ho\u1EB7c t\u00EAn ng\u01B0\u1EDDi d\u00F9ng", className: Login_module_scss_1["default"].twittercreate__textsc }, register('email', { required: true }), { onChange: function (e) { return setEmail(e.target.value); } }))),
                    react_1["default"].createElement("button", { type: "submit", className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt30'] + " " + button_module_scss_1["default"].button }, "Ti\u1EBFp theo"),
                    react_1["default"].createElement("button", { className: button_module_scss_1["default"].btn3 + " " + button_module_scss_1["default"]['btn3-mt26'] + " " + button_module_scss_1["default"].button }, "Qu\u00EAn m\u1EADt kh\u1EA9u"),
                    react_1["default"].createElement("p", { className: Login_module_scss_1["default"].twittercreate__desc + " " + Login_module_scss_1["default"]['twittercreate__desc-mt21'] },
                        "Kh\u00F4ng c\u00F3 t\u00E0i kho\u1EA3n?",
                        react_1["default"].createElement("a", { href: "#" }, "\u0110\u0103ng k\u00FD")))),
                step === 2 && (react_1["default"].createElement("form", { onSubmit: handleSubmit(handleLogin) },
                    react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__input },
                        react_1["default"].createElement("h2", { className: Login_module_scss_1["default"].twitterlogin__enter }, "Nh\u1EADp m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n"),
                        react_1["default"].createElement("input", { type: "text", placeholder: "Email", value: email, readOnly: true, className: Login_module_scss_1["default"].twitterlogin__email }),
                        react_1["default"].createElement("input", __assign({ type: "password", placeholder: "M\u1EADt kh\u1EA9u", className: Login_module_scss_1["default"].twitterlogin__password }, register('password'))),
                        react_1["default"].createElement("div", { className: Login_module_scss_1["default"].twitterlogin__errors }, loginError),
                        react_1["default"].createElement("a", { href: "#", className: Login_module_scss_1["default"].twitterlogin__forgot }, "qu\u00EAn m\u1EADt kh\u1EA9u"),
                        react_1["default"].createElement("button", { type: "submit", className: button_module_scss_1["default"].btn1 + " " + button_module_scss_1["default"]['btn1-mt222'] + " " + button_module_scss_1["default"].button }, "\u0110\u0103ng nh\u1EADp"),
                        react_1["default"].createElement("p", { className: Login_module_scss_1["default"].twittercreate__desc + " " + Login_module_scss_1["default"]['twittercreate__desc-mt22'] },
                            "Kh\u00F4ng c\u00F3 t\u00E0i kho\u1EA3n?",
                            react_1["default"].createElement("a", { href: "#" }, "\u0110\u0103ng k\u00FD")))))))),
        showRegister && (react_1["default"].createElement(register_1["default"], { showRegister: showRegister, onClose: function () { return setShowRegister(false); } })),
        react_1["default"].createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = LoginComponent;
