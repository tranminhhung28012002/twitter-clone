"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var Http = /** @class */ (function () {
    function Http() {
        this.instance = axios_1["default"].create({
            baseURL: 'http://localhost:3000/api',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return Http;
}());
var http = new Http().instance;
exports["default"] = http;
