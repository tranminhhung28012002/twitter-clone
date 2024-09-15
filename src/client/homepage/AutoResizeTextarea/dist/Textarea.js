"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AutoResizeTextarea_module_scss_1 = require("./AutoResizeTextarea.module.scss");
function AutoResizeTextarea(_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder;
    var textareaRef = react_1.useRef(null);
    var adjustHeight = function () {
        if (textareaRef.current) {
            textareaRef.current.style.height = '24px';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    };
    react_1.useEffect(function () {
        adjustHeight();
    }, [value]);
    var handleChange = function (event) {
        onChange(event);
        adjustHeight();
    };
    return (react_1["default"].createElement("textarea", { className: AutoResizeTextarea_module_scss_1["default"].textArea, ref: textareaRef, value: value, onChange: handleChange, placeholder: placeholder }));
}
exports["default"] = AutoResizeTextarea;
