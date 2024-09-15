"use strict";
exports.__esModule = true;
var TrendingTopics_module_scss_1 = require("./TrendingTopics.module.scss");
function TrendingTopics(_a) {
    var topics = _a.topics;
    return (React.createElement("div", { className: TrendingTopics_module_scss_1["default"].trendingTopics },
        React.createElement("div", { className: TrendingTopics_module_scss_1["default"].trendingTopics__list }, topics.map(function (topic) { return (React.createElement("div", { key: topic.id, className: TrendingTopics_module_scss_1["default"].trendingTopics__item },
            React.createElement("h2", { className: TrendingTopics_module_scss_1["default"].trendingTopics__itemTitle }, topic.title))); }))));
}
exports["default"] = TrendingTopics;
