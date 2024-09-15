"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ExploreSearch_module_scss_1 = require("./ExploreSearch.module.scss");
function ExploreSearch(_a) {
    var onSearch = _a.onSearch;
    var _b = react_1.useState(''), query = _b[0], setQuery = _b[1];
    var handleSearch = function (e) {
        setQuery(e.target.value);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        onSearch(query);
    };
    return (React.createElement("div", { className: ExploreSearch_module_scss_1["default"].exploreSearch },
        React.createElement("form", { onSubmit: handleSubmit, className: ExploreSearch_module_scss_1["default"].exploreSearch__form },
            React.createElement("input", { type: "text", value: query, onChange: handleSearch, placeholder: "Search", className: ExploreSearch_module_scss_1["default"].exploreSearch__input }))));
}
exports["default"] = ExploreSearch;
