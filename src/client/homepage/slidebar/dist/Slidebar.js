"use strict";
exports.__esModule = true;
var Slidebar_module_scss_1 = require("./Slidebar.module.scss");
var search_svg_1 = require("../icon/search.svg");
var avatar_default_png_1 = require("../icon/avatar-default.png");
var react_router_dom_1 = require("react-router-dom");
function Slidebar(_a) {
    var currentPage = _a.currentPage;
    var location = react_router_dom_1.useLocation();
    var isExplorePage = location.pathname === '/Search' || currentPage === 'Search';
    var isPrenium = location.pathname === '/' || currentPage === 'homepage';
    var isTrending = location.pathname === '/Search' || currentPage === 'Search';
    return (React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar },
        !isExplorePage && (React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__Search },
            React.createElement("img", { className: Slidebar_module_scss_1["default"].Slidebar__iconSearch, src: search_svg_1["default"], alt: "" }),
            React.createElement("input", { className: Slidebar_module_scss_1["default"].Slidebar__Searchcmt, type: "text", placeholder: 'Search' }))),
        isPrenium && (React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__Premium + " " + Slidebar_module_scss_1["default"].Slidebar__block },
            React.createElement("h2", { className: Slidebar_module_scss_1["default"].Slidebar__title }, "Subscribe to Premium"),
            React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__desc }, "Subscribe to unlock new features and if eligible, receive a share of ads revenue."),
            React.createElement("button", { className: Slidebar_module_scss_1["default"].Slidebar__sub }, "Subscribe"))),
        !isTrending && (React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__Trending + " " + Slidebar_module_scss_1["default"].Slidebar__block },
            React.createElement("h2", { className: Slidebar_module_scss_1["default"].Slidebar__title }, "Trends for you"),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__item },
                React.createElement("div", null,
                    React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__titlehastag }, "Trending in VietNam"),
                    React.createElement("h6", { className: Slidebar_module_scss_1["default"].Slidebar__hastag }, "#Test"),
                    React.createElement("span", { className: Slidebar_module_scss_1["default"].Slidebar__rate }, "26k post")),
                React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__more }, "...")),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__item },
                React.createElement("div", null,
                    React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__titlehastag }, "Trending in VietNam"),
                    React.createElement("h6", { className: Slidebar_module_scss_1["default"].Slidebar__hastag }, "#Test"),
                    React.createElement("span", { className: Slidebar_module_scss_1["default"].Slidebar__rate }, "26k post")),
                React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__more }, "...")),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__item },
                React.createElement("div", null,
                    React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__titlehastag }, "Trending in VietNam"),
                    React.createElement("h6", { className: Slidebar_module_scss_1["default"].Slidebar__hastag }, "#Test"),
                    React.createElement("span", { className: Slidebar_module_scss_1["default"].Slidebar__rate }, "26k post")),
                React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__more }, "...")),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__item },
                React.createElement("div", null,
                    React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__titlehastag }, "Trending in VietNam"),
                    React.createElement("h6", { className: Slidebar_module_scss_1["default"].Slidebar__hastag }, "#Test"),
                    React.createElement("span", { className: Slidebar_module_scss_1["default"].Slidebar__rate }, "26k post")),
                React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__more }, "...")),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__item },
                React.createElement("div", null,
                    React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__titlehastag }, "Trending in VietNam"),
                    React.createElement("h6", { className: Slidebar_module_scss_1["default"].Slidebar__hastag }, "#Test"),
                    React.createElement("span", { className: Slidebar_module_scss_1["default"].Slidebar__rate }, "26k post")),
                React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__more }, "...")),
            React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__Show }, "Show more"))),
        React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__Wfollow + " " + Slidebar_module_scss_1["default"].Slidebar__block },
            React.createElement("h2", { className: Slidebar_module_scss_1["default"].Slidebar__title }, "Who to follow"),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__followUser },
                React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__user },
                    React.createElement("img", { className: Slidebar_module_scss_1["default"].Slidebar__avatar, src: avatar_default_png_1["default"], alt: "#" }),
                    React.createElement("div", null,
                        React.createElement("h3", { className: Slidebar_module_scss_1["default"].Slidebar__name }, "Pham Van Tu"),
                        React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__email }, "@tu1234"))),
                React.createElement("button", { className: Slidebar_module_scss_1["default"].Slidebar__follow }, "Follow")),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__followUser },
                React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__user },
                    React.createElement("img", { className: Slidebar_module_scss_1["default"].Slidebar__avatar, src: avatar_default_png_1["default"], alt: "#" }),
                    React.createElement("div", null,
                        React.createElement("h3", { className: Slidebar_module_scss_1["default"].Slidebar__name }, "Nguyen Trung Hung"),
                        React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__email }, "@Hung1234"))),
                React.createElement("button", { className: Slidebar_module_scss_1["default"].Slidebar__follow }, "Follow")),
            React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__followUser },
                React.createElement("div", { className: Slidebar_module_scss_1["default"].Slidebar__user },
                    React.createElement("img", { className: Slidebar_module_scss_1["default"].Slidebar__avatar, src: avatar_default_png_1["default"], alt: "#" }),
                    React.createElement("div", null,
                        React.createElement("h3", { className: Slidebar_module_scss_1["default"].Slidebar__name }, "Tran Minh Hung"),
                        React.createElement("p", { className: Slidebar_module_scss_1["default"].Slidebar__email }, "@hung2801"))),
                React.createElement("button", { className: Slidebar_module_scss_1["default"].Slidebar__follow }, "Follow")),
            React.createElement("a", { href: "#", className: Slidebar_module_scss_1["default"].Slidebar__Show }, "Show more"))));
}
exports["default"] = Slidebar;
