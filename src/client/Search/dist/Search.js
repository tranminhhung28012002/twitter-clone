"use strict";
exports.__esModule = true;
var go_1 = require("react-icons/go");
var navbar_1 = require("../homepage/navbar");
var slidebar_1 = require("../homepage/slidebar");
var Search_module_scss_1 = require("./Search.module.scss");
var io5_1 = require("react-icons/io5");
function Explore() {
    return (React.createElement("div", { className: Search_module_scss_1["default"].container },
        React.createElement(navbar_1["default"], { onPostClick: function () { } }),
        React.createElement("div", { className: Search_module_scss_1["default"].Search },
            React.createElement("div", { className: Search_module_scss_1["default"].Search__content },
                React.createElement("div", { className: Search_module_scss_1["default"].Search__input },
                    React.createElement(go_1.GoSearch, { className: Search_module_scss_1["default"].Search__icon }),
                    React.createElement("input", { type: "text", placeholder: "Search Twitter" })),
                React.createElement(io5_1.IoSettingsOutline, { className: Search_module_scss_1["default"].Search__setting }))),
        React.createElement(slidebar_1["default"], null)));
}
exports["default"] = Explore;
