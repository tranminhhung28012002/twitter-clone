"use strict";
exports.__esModule = true;
var Article_module_scss_1 = require("./Article.module.scss");
var avatar_default_png_1 = require("../icon/avatar-default.png");
var gr_1 = require("react-icons/gr");
var fa_1 = require("react-icons/fa");
var bi_1 = require("react-icons/bi");
function Article(_a) {
    var id = _a.id, imageUrl = _a.imageUrl, videoUrl = _a.videoUrl, status = _a.status, like = _a.like, repost = _a.repost, view = _a.view, reply = _a.reply, name = _a.name, userEmail = _a.userEmail, imageUserName = _a.imageUserName;
    return (React.createElement("div", { className: Article_module_scss_1["default"].block },
        imageUserName && (React.createElement("img", { src: avatar_default_png_1["default"], alt: "User Avatar", className: Article_module_scss_1["default"].block__avatar })),
        React.createElement("div", { className: Article_module_scss_1["default"].block__post },
            React.createElement("div", { className: Article_module_scss_1["default"].block__info },
                React.createElement("h6", { className: Article_module_scss_1["default"].block__name }, name),
                React.createElement("p", { className: Article_module_scss_1["default"].block__userEmail }, userEmail)),
            React.createElement("div", null,
                React.createElement("p", { className: Article_module_scss_1["default"].block__Status }, status),
                imageUrl && React.createElement("img", { src: imageUrl, alt: "Content", className: Article_module_scss_1["default"].block__Image }),
                videoUrl && (React.createElement("video", { controls: true, className: Article_module_scss_1["default"].block__Video },
                    React.createElement("source", { src: videoUrl, type: "video/mp4" }),
                    "Your browser does not support the video tag."))),
            React.createElement("ul", { className: Article_module_scss_1["default"].block__Content },
                reply !== undefined && React.createElement("li", { className: Article_module_scss_1["default"].block__Content_reply },
                    React.createElement(fa_1.FaRegCommentAlt, { className: Article_module_scss_1["default"].icon }),
                    reply),
                repost !== undefined && React.createElement("li", { className: Article_module_scss_1["default"].block__Content_undo },
                    React.createElement(fa_1.FaUndoAlt, { className: Article_module_scss_1["default"].icon }),
                    repost),
                like !== undefined && React.createElement("li", { className: Article_module_scss_1["default"].block__Content_like },
                    React.createElement(bi_1.BiLike, { className: Article_module_scss_1["default"].icon }),
                    like),
                view !== undefined && React.createElement("li", { className: Article_module_scss_1["default"].block__Content_view },
                    React.createElement(gr_1.GrView, { className: Article_module_scss_1["default"].icon }),
                    view)))));
}
exports["default"] = Article;
