"use strict";
exports.__esModule = true;
var Navbar_module_scss_1 = require("./Navbar.module.scss");
var react_hook_form_1 = require("react-hook-form");
var post_svg_1 = require("../icon/post.svg");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var avatar_default_png_1 = require("../icon/avatar-default.png");
var ri_1 = require("react-icons/ri");
var io_1 = require("react-icons/io");
var go_1 = require("react-icons/go");
var fa_1 = require("react-icons/fa");
var lu_1 = require("react-icons/lu");
var md_1 = require("react-icons/md");
function Navbar(_a) {
    var onPostClick = _a.onPostClick;
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors, watch = _b.watch;
    var name = watch('name');
    var userEmail = watch('email');
    var navigate = react_router_dom_1.useNavigate();
    var handleLogout = function () {
        localStorage.removeItem('userToken');
        navigate("/login");
    };
    var _c = react_1.useState(false), moreItem = _c[0], setMoreItem = _c[1];
    var ToggleMore = function () {
        setMoreItem(!moreItem);
    };
    var _d = react_1.useState(false), showLogoutForm = _d[0], setShowLogout = _d[1];
    var toggleLogout = function () {
        setShowLogout(!showLogoutForm);
    };
    var logoutFormRef = react_1.useRef(null);
    var moreItemRef = react_1.useRef(null);
    var handleClickOutside = function (event) {
        if (logoutFormRef.current && !logoutFormRef.current.contains(event.target)) {
            setShowLogout(false);
        }
        if (moreItemRef.current && !moreItemRef.current.contains(event.target)) {
            setMoreItem(false);
        }
    };
    react_1.useEffect(function () {
        if (showLogoutForm || moreItem) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showLogoutForm, moreItem]);
    var location = react_router_dom_1.useLocation();
    var navItems = [
        {
            path: '/homepage',
            activeIcon: React.createElement(io_1.IoMdHome, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(go_1.GoHome, { className: Navbar_module_scss_1["default"].navbar__icon }),
            label: 'Home'
        },
        {
            path: '/Explore',
            activeIcon: React.createElement(fa_1.FaSearch, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(go_1.GoSearch, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'Explore'
        },
        {
            path: '/Notifications',
            activeIcon: React.createElement(fa_1.FaBell, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(fa_1.FaRegBell, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'Notifications'
        },
        {
            path: '/Message',
            activeIcon: React.createElement(fa_1.FaEnvelope, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(fa_1.FaRegEnvelope, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'Message'
        },
        // {
        //     path: '/Grok',
        //     activeIcon: <IoMdMail className={styles.navbar__icon} />,
        //     inactiveIcon: <IoMdMail className={`${styles.navbar__icon} ${styles.inactive}`} />,
        //     label: 'Grok',
        // },
        {
            path: '/Profile',
            activeIcon: React.createElement(fa_1.FaUser, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(fa_1.FaRegUser, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'Profile'
        },
        {
            path: '',
            activeIcon: React.createElement(lu_1.LuMoreHorizontal, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(lu_1.LuMoreHorizontal, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'More'
        },
    ];
    var navMoreItem = [
        {
            path: '/List',
            activeIcon: React.createElement(fa_1.FaList, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(fa_1.FaList, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'List'
        },
        {
            path: '/Setting',
            activeIcon: React.createElement(io_1.IoIosSettings, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(io_1.IoIosSettings, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'Setting and privacy'
        },
        {
            path: '/Create',
            activeIcon: React.createElement(md_1.MdOutlineKeyboardVoice, { className: Navbar_module_scss_1["default"].navbar__icon }),
            inactiveIcon: React.createElement(md_1.MdOutlineKeyboardVoice, { className: Navbar_module_scss_1["default"].navbar__icon + " " + Navbar_module_scss_1["default"].inactive }),
            label: 'Create your Space'
        },
    ];
    return (React.createElement("nav", { className: Navbar_module_scss_1["default"].navbar },
        React.createElement("div", { className: Navbar_module_scss_1["default"].navbar__list },
            React.createElement("div", { className: Navbar_module_scss_1["default"].navbar__icontitle },
                React.createElement(ri_1.RiTwitterXFill, { className: Navbar_module_scss_1["default"].navbar__iconH })),
            navItems.map(function (item) { return (React.createElement(react_router_dom_1.NavLink, { key: item.path, to: item.path, className: Navbar_module_scss_1["default"].navbar__item, onClick: item.label === 'More' ? ToggleMore : undefined },
                location.pathname === item.path ? item.activeIcon : item.inactiveIcon,
                React.createElement("h2", { className: Navbar_module_scss_1["default"].navbar__desc }, item.label),
                moreItem && (React.createElement("div", { ref: moreItemRef, className: Navbar_module_scss_1["default"].navbar__moreList }, navMoreItem.map(function (item) { return (React.createElement("div", { className: Navbar_module_scss_1["default"].navbar__item },
                    location.pathname === item.path ? item.activeIcon : item.inactiveIcon,
                    React.createElement("h2", { className: Navbar_module_scss_1["default"].navbar__desc }, item.label))); }))))); }),
            React.createElement("button", { className: Navbar_module_scss_1["default"].navbar__button, onClick: onPostClick },
                React.createElement("img", { src: post_svg_1["default"], alt: "#" }),
                React.createElement("p", null, "Post")),
            React.createElement("div", { className: Navbar_module_scss_1["default"].navbar__user, onClick: toggleLogout },
                React.createElement("img", { src: avatar_default_png_1["default"], onClick: toggleLogout, className: Navbar_module_scss_1["default"].navbar__img }),
                React.createElement("div", { className: Navbar_module_scss_1["default"].navbar__userinfo },
                    React.createElement("span", { className: Navbar_module_scss_1["default"].navbar__userName }, name || "User Name"),
                    React.createElement("span", { className: Navbar_module_scss_1["default"].navbar__userEmail }, userEmail || "user@example.com")),
                React.createElement("a", { href: '#', className: Navbar_module_scss_1["default"].navbar__useradd }, "..."),
                showLogoutForm && (React.createElement("div", { ref: logoutFormRef, className: Navbar_module_scss_1["default"].navbar__logoutForm },
                    React.createElement("button", { className: Navbar_module_scss_1["default"].navbar__addaccount }, "Add an exists account"),
                    React.createElement("button", { className: Navbar_module_scss_1["default"].navbar__logout, onClick: handleLogout },
                        "Log out ",
                        userEmail)))))));
}
exports["default"] = Navbar;
