"use strict";
exports.__esModule = true;
var navbar_1 = require("../homepage/navbar");
var slidebar_1 = require("../homepage/slidebar");
var Search_module_scss_1 = require("./Search.module.scss");
var react_1 = require("react");
var ExploreContent_1 = require("./ExploreContent/ExploreContent");
var TrendingTopics_1 = require("./TrendingTopics/TrendingTopics");
var ExploreSearch_1 = require("./ExploreSearch/ExploreSearch");
function Explore() {
    var _a = react_1.useState(''), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = react_1.useState([]), trendingTopics = _b[0], setTrendingTopics = _b[1];
    var topic = [
        { id: 1, title: "For you" },
        { id: 2, title: "Trending" },
        { id: 3, title: "News" },
        { id: 4, title: "Sports" },
        { id: 5, title: "Entertainment" },
    ];
    react_1.useEffect(function () {
        setTrendingTopics(topic);
    }, []);
    var handleSearch = function (query) {
        setSearchQuery(query);
    };
    var handlePostClick = function () {
        console.log('Post clicked');
    };
    return (React.createElement("div", { className: Search_module_scss_1["default"].container },
        React.createElement(navbar_1["default"], { onPostClick: handlePostClick }),
        React.createElement("div", { className: Search_module_scss_1["default"].explore },
            React.createElement(ExploreSearch_1["default"], { onSearch: handleSearch }),
            React.createElement(TrendingTopics_1["default"], { topics: trendingTopics }),
            React.createElement(ExploreContent_1["default"], { searchQuery: searchQuery })),
        React.createElement(slidebar_1["default"], null)));
}
exports["default"] = Explore;
