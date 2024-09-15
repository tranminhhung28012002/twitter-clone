"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("./client/login/Login");
var homepage_1 = require("./client/homepage");
require("./App.css");
var profile_1 = require("./client/profile");
var profilePage_1 = require("./client/profilePage");
var Search_1 = require("./client/Search");
var App = function () {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/login" }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/homepage", element: react_1["default"].createElement(homepage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/profile", element: react_1["default"].createElement(profile_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Explore", element: react_1["default"].createElement(Search_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/profilePage", element: react_1["default"].createElement(profilePage_1["default"], null) }))));
};
exports["default"] = App;
