"use strict";
exports.__esModule = true;
var io_1 = require("react-icons/io");
var navbar_1 = require("../homepage/navbar");
var ProfilePage_module_scss_1 = require("./ProfilePage.module.scss");
var fa_1 = require("react-icons/fa");
var react_1 = require("react");
var avatar_default_png_1 = require("../homepage/icon/avatar-default.png");
var react_router_dom_1 = require("react-router-dom");
var slidebar_1 = require("../homepage/slidebar");
var lu_1 = require("react-icons/lu");
var tab_1 = require("../tab");
function ProfilePage() {
    var _a = react_1.useState({
        id: '1',
        name: 'pham van tu',
        username: 'phamvantu231293',
        website: 'http:vuighe.net',
        joinDate: 'February 2017',
        followersCount: 100,
        followingCount: 200,
        avatarUrl: avatar_default_png_1["default"],
        bannerUrl: 'https://example.com/banner.jpg',
        bio: 'You’re gonna leave here in a whole lot of pain 😣',
        location: 'Follow my new account',
        birthDate: ''
    }), profile = _a[0], setProfile = _a[1];
    var navigate = react_router_dom_1.useNavigate();
    var _b = react_1.useState(false), Follow = _b[0], setFollow = _b[1];
    var handleFollow = function () {
        setFollow(!Follow);
    };
    var _c = react_1.useState(false), notify = _c[0], setNotify = _c[1];
    var handleNotify = function () {
        setNotify(!notify);
    };
    return (React.createElement("div", { className: ProfilePage_module_scss_1["default"].container },
        React.createElement(navbar_1["default"], { onPostClick: function () { } }),
        React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile },
            React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__header },
                React.createElement(io_1.IoMdArrowRoundBack, { className: ProfilePage_module_scss_1["default"].profile__backIcon, onClick: function () { return navigate(-1); } }),
                React.createElement("div", null,
                    React.createElement("h2", { className: ProfilePage_module_scss_1["default"]['profile__header-name'] }, profile.name),
                    React.createElement("span", { className: ProfilePage_module_scss_1["default"].profile__post }, "1 post"))),
            React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__banner },
                React.createElement("img", { src: profile.bannerUrl })),
            React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__info },
                React.createElement("img", { src: profile.avatarUrl, alt: "Avatar", className: ProfilePage_module_scss_1["default"].profile__avatar }),
                React.createElement("h1", { className: ProfilePage_module_scss_1["default"].profile__name }, profile.name),
                React.createElement("p", { className: ProfilePage_module_scss_1["default"].profile__username },
                    "@",
                    profile.username),
                profile.bio && React.createElement("p", { className: ProfilePage_module_scss_1["default"].profile__bio }, profile.bio),
                React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__details },
                    profile.location && React.createElement("span", null,
                        React.createElement(fa_1.FaMapMarkerAlt, null),
                        " ",
                        profile.location),
                    profile.website && React.createElement("span", null,
                        React.createElement(fa_1.FaLink, null),
                        " ",
                        React.createElement("a", { href: profile.website }, profile.website)),
                    React.createElement("span", null,
                        React.createElement(fa_1.FaCalendarAlt, null),
                        " Joined ",
                        profile.joinDate)),
                React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__followCounts },
                    React.createElement("span", null,
                        React.createElement("strong", null, profile.followingCount),
                        " Following"),
                    React.createElement("span", null,
                        React.createElement("strong", null, profile.followersCount),
                        " Followers")),
                React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__nav },
                    React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__iconWrappter },
                        React.createElement(lu_1.LuMoreHorizontal, { className: ProfilePage_module_scss_1["default"].profile__icon }),
                        React.createElement("span", { className: ProfilePage_module_scss_1["default"].profile__tooltip }, "More")),
                    React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__iconWrappter },
                        React.createElement(fa_1.FaEnvelope, { className: ProfilePage_module_scss_1["default"].profile__icon }),
                        React.createElement("span", { className: ProfilePage_module_scss_1["default"].profile__tooltip }, "Message")),
                    Follow && (React.createElement("div", { className: ProfilePage_module_scss_1["default"].profile__iconWrappter, onClick: handleNotify }, notify ? (React.createElement("div", null,
                        React.createElement(fa_1.FaRegBell, { className: ProfilePage_module_scss_1["default"].profile__icon }),
                        React.createElement("span", { className: ProfilePage_module_scss_1["default"].profile__tooltip }, "Notify"))) :
                        (React.createElement("div", null,
                            React.createElement(fa_1.FaBellSlash, { className: ProfilePage_module_scss_1["default"].profile__icon }),
                            React.createElement("span", { className: ProfilePage_module_scss_1["default"].profile__tooltip }, "Turn off Notify"))))),
                    React.createElement("button", { className: ProfilePage_module_scss_1["default"].profile__follow, onClick: handleFollow }, Follow ? 'UnFollow' : 'Follow'))),
            React.createElement(tab_1["default"], null)),
        React.createElement(slidebar_1["default"], null)));
}
exports["default"] = ProfilePage;
