"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var react_query_1 = require("@tanstack/react-query");
var react_router_dom_1 = require("react-router-dom");
var queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
            react_1["default"].createElement(App_1["default"], null),
            react_1["default"].createElement(react_query_devtools_1.ReactQueryDevtools, { initialIsOpen: false })))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
