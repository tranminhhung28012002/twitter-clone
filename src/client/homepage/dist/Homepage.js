"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Homepage_module_scss_1 = require("./Homepage.module.scss");
var navbar_1 = require("./navbar");
var slidebar_1 = require("./slidebar");
var avatar_default_png_1 = require("./icon/avatar-default.png");
var earth_svg_1 = require("./icon/earth.svg");
var Textarea_1 = require("./AutoResizeTextarea/Textarea");
var fa_1 = require("react-icons/fa");
var md_1 = require("react-icons/md");
var io5_1 = require("react-icons/io5");
var ci_1 = require("react-icons/ci");
var article_1 = require("./article");
var imgtest_jpeg_1 = require("./icon/imgtest.jpeg");
var following_1 = require("./following");
var Foryou_1 = require("./Foryou");
var react_router_dom_1 = require("react-router-dom");
function Homepage() {
    var _a = react_1.useState('forYou'), activeTab = _a[0], setActiveTab = _a[1];
    var _b = react_1.useState(''), text = _b[0], setText = _b[1];
    var _c = react_1.useState(''), modalText = _c[0], setModalText = _c[1];
    var _d = react_1.useState(false), showPostForm = _d[0], setShowPostForm = _d[1];
    var _e = react_1.useState(null), selectedFile = _e[0], setSelectedFile = _e[1];
    var _f = react_1.useState(null), selectedFileUrl = _f[0], setSelectedFileUrl = _f[1];
    var _g = react_1.useState(null), newUserPost = _g[0], setNewUserPost = _g[1];
    var _h = react_1.useState(null), postImage = _h[0], setPostImage = _h[1];
    var handleChange = function (event) {
        setText(event.target.value);
    };
    var handleFormChange = function (event) {
        setModalText(event.target.value);
    };
    var handleFileChange = function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            setSelectedFile(file);
            var imageUrl = URL.createObjectURL(file);
            setSelectedFileUrl(imageUrl);
            setPostImage(imageUrl);
        }
    };
    var triggerFileInput = function () {
        var fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };
    var handlePostClick = function () {
        setShowPostForm(true);
    };
    var handleClose = function () {
        setShowPostForm(false);
        setModalText('');
        setSelectedFile(null);
        setSelectedFileUrl(null);
        setPostImage(null);
    };
    var handleSubmitPost = function () {
        if (text || modalText || selectedFile) {
            var newPost = {
                id: Date.now().toString(),
                status: modalText || text,
                imageUserName: avatar_default_png_1["default"],
                userEmail: "user@example.com",
                name: "User Name",
                reply: 0,
                repost: 0,
                like: 0,
                view: 0,
                imageUrl: postImage || undefined
            };
            console.log('Đang đăng bài:', newPost);
            setNewUserPost(newPost);
            setText('');
            setModalText('');
            setSelectedFile(null);
            setSelectedFileUrl(null);
            setPostImage(null);
        }
        else {
            alert('Vui lòng thêm nội dung hoặc chọn một hình ảnh!');
        }
        handleClose();
    };
    var location = react_router_dom_1.useLocation();
    var isHomePage = location.pathname.slice(1);
    return (react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].HomepageContainer },
        react_1["default"].createElement(navbar_1["default"], { onPostClick: function () { } }),
        react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage },
            react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__header },
                react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__act1 + " " + (activeTab === 'forYou' ? Homepage_module_scss_1["default"].active : ''), onClick: function () { return setActiveTab('forYou'); } },
                    react_1["default"].createElement("h3", { className: Homepage_module_scss_1["default"].Homepage__title }, "For you")),
                react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__act2 + " " + (activeTab === 'following' ? Homepage_module_scss_1["default"].active : ''), onClick: function () { return setActiveTab('following'); } },
                    react_1["default"].createElement("h3", { className: Homepage_module_scss_1["default"].Homepage__title }, "Following"))),
            react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__content },
                react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__post },
                    react_1["default"].createElement("img", { src: avatar_default_png_1["default"], alt: "Avatar", className: Homepage_module_scss_1["default"].Homepage__avatar }),
                    react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__postbtn },
                        react_1["default"].createElement(Textarea_1["default"], { value: text, onChange: handleChange, placeholder: "What is happening" }),
                        react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__every },
                            react_1["default"].createElement("img", { src: earth_svg_1["default"], alt: "Earth" }),
                            react_1["default"].createElement("p", { className: Homepage_module_scss_1["default"].Homepage__every__reply }, "Everyone can reply")),
                        react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__toolbar },
                            react_1["default"].createElement("ul", { className: Homepage_module_scss_1["default"].Homepage__list },
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(ci_1.CiImageOn, { className: Homepage_module_scss_1["default"].Homepage__item, onClick: triggerFileInput }),
                                    react_1["default"].createElement("input", { id: "fileInput", type: "file", accept: "image/*", style: { display: 'none' }, onChange: handleFileChange })),
                                react_1["default"].createElement("li", null,
                                    " ",
                                    react_1["default"].createElement(md_1.MdOutlineGifBox, { className: Homepage_module_scss_1["default"].Homepage__item, onClick: triggerFileInput })),
                                react_1["default"].createElement("li", null,
                                    " ",
                                    react_1["default"].createElement(fa_1.FaList, { className: Homepage_module_scss_1["default"].Homepage__item })),
                                react_1["default"].createElement("li", null,
                                    " ",
                                    react_1["default"].createElement(md_1.MdInsertEmoticon, { className: Homepage_module_scss_1["default"].Homepage__item })),
                                react_1["default"].createElement("li", null,
                                    " ",
                                    react_1["default"].createElement(md_1.MdDateRange, { className: Homepage_module_scss_1["default"].Homepage__item })),
                                react_1["default"].createElement("li", null,
                                    " ",
                                    react_1["default"].createElement(io5_1.IoLocationOutline, { className: Homepage_module_scss_1["default"].Homepage__item }))),
                            react_1["default"].createElement("button", { className: Homepage_module_scss_1["default"].Homepage__btn, onClick: handleSubmitPost }, "Post")))),
                selectedFileUrl && (react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].selectedImageContainer },
                    react_1["default"].createElement("img", { src: selectedFileUrl, alt: "Selected", className: Homepage_module_scss_1["default"].selectedImage }))),
                showPostForm && (react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].show },
                    react_1["default"].createElement("div", { className: "" + Homepage_module_scss_1["default"].Homepage__postForm },
                        react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__postbtn },
                            react_1["default"].createElement("a", { className: Homepage_module_scss_1["default"].Homepage__postClose, href: "#", onClick: handleClose }, "X"),
                            react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__postInfo },
                                react_1["default"].createElement("img", { src: avatar_default_png_1["default"], alt: "Avatar", className: Homepage_module_scss_1["default"].Homepage__avatar }),
                                react_1["default"].createElement(Textarea_1["default"], { value: modalText, onChange: handleFormChange, placeholder: "What is happening" })),
                            react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__every },
                                react_1["default"].createElement("img", { src: earth_svg_1["default"], alt: "Earth" }),
                                react_1["default"].createElement("p", { className: Homepage_module_scss_1["default"].Homepage__every__reply }, "Everyone can reply")),
                            react_1["default"].createElement("div", { className: Homepage_module_scss_1["default"].Homepage__toolbar },
                                react_1["default"].createElement("ul", { className: Homepage_module_scss_1["default"].Homepage__list },
                                    react_1["default"].createElement("li", null,
                                        " ",
                                        react_1["default"].createElement(ci_1.CiImageOn, { className: Homepage_module_scss_1["default"].Homepage__item }),
                                        react_1["default"].createElement("input", { id: "fileInput", type: "file", accept: "image/*", style: { display: 'none' }, onChange: handleFileChange })),
                                    react_1["default"].createElement("li", null,
                                        " ",
                                        react_1["default"].createElement(md_1.MdOutlineGifBox, { className: Homepage_module_scss_1["default"].Homepage__item, onClick: triggerFileInput })),
                                    react_1["default"].createElement("li", null,
                                        " ",
                                        react_1["default"].createElement(fa_1.FaList, { className: Homepage_module_scss_1["default"].Homepage__item })),
                                    react_1["default"].createElement("li", null,
                                        " ",
                                        react_1["default"].createElement(md_1.MdInsertEmoticon, { className: Homepage_module_scss_1["default"].Homepage__item })),
                                    react_1["default"].createElement("li", null,
                                        " ",
                                        react_1["default"].createElement(md_1.MdDateRange, { className: Homepage_module_scss_1["default"].Homepage__item })),
                                    react_1["default"].createElement("li", null,
                                        " ",
                                        react_1["default"].createElement(io5_1.IoLocationOutline, { className: Homepage_module_scss_1["default"].Homepage__item }))),
                                react_1["default"].createElement("button", { className: Homepage_module_scss_1["default"].Homepage__btn, onClick: handleSubmitPost }, "Post")))))),
                react_1["default"].createElement(article_1["default"], { id: '123', name: 'asd', userEmail: 'sadfwec', status: 'fsadfsdfwecfwdfascfc', imageUrl: imgtest_jpeg_1["default"], reply: 3, like: 5, view: 100, repost: 50, imageUserName: avatar_default_png_1["default"] })),
            activeTab === 'forYou' ? (react_1["default"].createElement(Foryou_1["default"], { newUserPost: newUserPost })) : (
            // from Following
            react_1["default"].createElement(following_1["default"], null))),
        react_1["default"].createElement(slidebar_1["default"], { currentPage: isHomePage })));
}
exports["default"] = Homepage;
