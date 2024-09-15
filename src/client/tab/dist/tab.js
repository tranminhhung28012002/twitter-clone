"use strict";
exports.__esModule = true;
var react_1 = require("react");
var tab_module_scss_1 = require("./tab.module.scss");
function Tab() {
    var tab = react_1.useState({
        Posts: 'Posts',
        Replies: 'Replies',
        Highlights: 'Highlights',
        Media: 'Media',
        Likes: 'Likes'
    })[0];
    var _a = react_1.useState('Posts'), activeTab = _a[0], setActiveTab = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: tab_module_scss_1["default"].tabs }, [tab.Posts, tab.Replies, tab.Highlights, tab.Media, tab.Likes].map(function (tab) { return (React.createElement("button", { key: tab, className: tab_module_scss_1["default"].tab + " " + (activeTab === tab.toLowerCase() ? tab_module_scss_1["default"]['tab--active'] : ''), onClick: function () { return setActiveTab(tab.toLowerCase()); } }, tab)); })),
        React.createElement("div", { className: tab_module_scss_1["default"].content },
            React.createElement("div", { className: tab_module_scss_1["default"].content__title },
                "Content for",
                activeTab))));
}
exports["default"] = Tab;
