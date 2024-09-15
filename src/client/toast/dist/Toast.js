"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Toast_module_scss_1 = require("./Toast.module.scss");
function Toast(_a) {
    var message = _a.message, onClose = _a.onClose;
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            onClose();
        }, 3000); // Toast sẽ tự động tắt sau 3 giây
        return function () { return clearTimeout(timer); }; // Clear timer nếu component bị unmount
    }, [onClose]);
    return (react_1["default"].createElement("div", { className: Toast_module_scss_1["default"].toast },
        react_1["default"].createElement("p", null, message),
        react_1["default"].createElement("button", { onClick: onClose, className: Toast_module_scss_1["default"].toast__close }, "X")));
}
exports["default"] = Toast;
