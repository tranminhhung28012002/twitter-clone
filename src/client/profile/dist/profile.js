"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var profile_module_scss_1 = require("./profile.module.scss");
var react_router_dom_1 = require("react-router-dom");
var fa_1 = require("react-icons/fa");
var navbar_1 = require("../homepage/navbar");
var slidebar_1 = require("../homepage/slidebar");
var avatar_default_png_1 = require("../homepage/icon/avatar-default.png");
var io_1 = require("react-icons/io");
function Profile() {
    //phần này đưa data vào
    //-------NOTE--------
    // useEffect(() => {
    //     // ... existing useEffect for fetching profile
    //   }, [username]);
    //   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'banner') => {
    //     const file = e.target.files?.[0];
    //     if (!file) return;
    //     const formData = new FormData();
    //     formData.append(type, file);
    //     try {
    //       const response = await http.post(`/users/${type}`, formData, {
    //         headers: { 'Content-Type': 'multipart/form-data' }
    //       });
    //       if (response.data.success) {
    //         setProfile(prev => {
    //           if (!prev) return null;
    //           return {
    //             ...prev,
    //             [type === 'avatar' ? 'avatarUrl' : 'bannerUrl']: response.data.url
    //           };
    //         });
    //         alert(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully!`);
    //       } else {
    //         alert(`Failed to update ${type}. Please try again.`);
    //       }
    //     } catch (error) {
    //       console.error(`Error uploading ${type}:`, error);
    //       alert(`An error occurred while uploading ${type}. Please try again.`);
    //     }
    //   };
    //   const handleInputChange = (field: keyof EditedProfile, value: string) => {
    //     setEditedProfile(prev => ({ ...prev, [field]: value }));
    //   };
    //   const handleSave = async () => {
    //     try {
    //       const response = await http.put(`/users/${profile?.id}`, editedProfile);
    //       if (response.data.success) {
    //         setProfile(prev => ({ ...prev, ...editedProfile } as UserProfile));
    //         alert('Profile updated successfully!');
    //       } else {
    //         alert('Failed to update profile. Please try again.');
    //       }
    //     } catch (error) {
    //       console.error('Error updating profile:', error);
    //       alert('An error occurred while updating profile. Please try again.');
    //     }
    //   };
    //   const handleClose = () => {
    //     // Reset edited profile or close edit mode
    //     setEditedProfile({
    //       bio: profile?.bio || '',
    //       location: profile?.location || '',
    //       birthDate: '', // Assuming birthDate is not in the original profile
    //       name: profile?.name || ''
    //     });
    //   };
    //   if (!profile) {
    //     return <div>Loading...</div>;
    //   }
    //-------NOTE-------
    //phần này fake data để custom giao diện
    var _a = react_1.useState({
        id: '1',
        name: 'tran hung',
        username: 'tranhung18h03',
        website: 'https://example.com',
        joinDate: 'February 2024',
        followersCount: 4,
        followingCount: 5,
        avatarUrl: avatar_default_png_1["default"],
        bannerUrl: 'https://example.com/banner.jpg',
        bio: '',
        location: '',
        birthDate: ''
    }), profile = _a[0], setProfile = _a[1];
    var _b = react_1.useState(false), isEditing = _b[0], setIsEditing = _b[1];
    var _c = react_1.useState(profile), editedProfile = _c[0], setEditedProfile = _c[1];
    var _d = react_1.useState('posts'), activeTab = _d[0], setActiveTab = _d[1];
    var username = react_router_dom_1.useParams().username;
    var navigate = react_router_dom_1.useNavigate();
    var handleInputChange = function (field, value) {
        setEditedProfile(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    };
    var handleFileChange = function (e, type) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                setEditedProfile(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a[type === 'avatar' ? 'avatarUrl' : 'bannerUrl'] = reader_1.result, _a)));
                });
            };
            reader_1.readAsDataURL(file);
        }
    };
    var handleSave = function () {
        setProfile(editedProfile);
        setIsEditing(false);
    };
    return (React.createElement("div", { className: profile_module_scss_1["default"].container },
        React.createElement(navbar_1["default"], { onPostClick: function () { } }),
        React.createElement("div", { className: profile_module_scss_1["default"].profile },
            React.createElement("div", { className: profile_module_scss_1["default"].profile__header },
                React.createElement(io_1.IoMdArrowRoundBack, { className: profile_module_scss_1["default"].profile__backIcon, onClick: function () { return navigate(-1); } }),
                React.createElement("div", null,
                    React.createElement("h2", { className: profile_module_scss_1["default"]['profile__header-name'] }, profile.name),
                    React.createElement("span", { className: profile_module_scss_1["default"].profile__post }, "1 post"))),
            isEditing ? (React.createElement("div", { className: profile_module_scss_1["default"].show },
                React.createElement("div", { className: profile_module_scss_1["default"].editProfile },
                    React.createElement("div", { className: profile_module_scss_1["default"].editHeader },
                        React.createElement(fa_1.FaTimes, { onClick: function () { return setIsEditing(false); }, className: profile_module_scss_1["default"].closeIcon }),
                        React.createElement("div", null,
                            React.createElement("h2", null, "Edit profile"),
                            React.createElement("button", { onClick: handleSave, className: profile_module_scss_1["default"].saveButton }, "Save"))),
                    React.createElement("div", { className: profile_module_scss_1["default"].editBanner },
                        React.createElement("img", { src: editedProfile.bannerUrl, className: profile_module_scss_1["default"].editBanner__Img }),
                        React.createElement("label", { className: profile_module_scss_1["default"].editBannerButton },
                            React.createElement(fa_1.FaCamera, null),
                            React.createElement("input", { type: "file", accept: "image/*", onChange: function (e) { return handleFileChange(e, 'banner'); } }))),
                    React.createElement("div", { className: profile_module_scss_1["default"].editAvatar },
                        React.createElement("img", { src: editedProfile.avatarUrl, alt: "Avatar" }),
                        React.createElement("label", { className: profile_module_scss_1["default"].editAvatarButton },
                            React.createElement(fa_1.FaCamera, null),
                            React.createElement("input", { type: "file", accept: "image/*", onChange: function (e) { return handleFileChange(e, 'avatar'); } }))),
                    React.createElement("div", { className: profile_module_scss_1["default"].editForm },
                        React.createElement("input", { type: "text", value: editedProfile.name, onChange: function (e) { return handleInputChange('name', e.target.value); }, placeholder: "Name" }),
                        React.createElement("textarea", { value: editedProfile.bio, onChange: function (e) { return handleInputChange('bio', e.target.value); }, placeholder: "Bio" }),
                        React.createElement("input", { type: "text", value: editedProfile.location, onChange: function (e) { return handleInputChange('location', e.target.value); }, placeholder: "Location" }),
                        React.createElement("input", { type: "text", value: editedProfile.website, onChange: function (e) { return handleInputChange('website', e.target.value); }, placeholder: "Website" }))))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { className: profile_module_scss_1["default"].profile__banner },
                    React.createElement("img", { src: profile.bannerUrl })),
                React.createElement("div", { className: profile_module_scss_1["default"].profile__info },
                    React.createElement("img", { src: profile.avatarUrl, alt: "Avatar", className: profile_module_scss_1["default"].profile__avatar }),
                    React.createElement("button", { onClick: function () { return setIsEditing(true); }, className: profile_module_scss_1["default"].editButton }, "Edit profile"),
                    React.createElement("h1", { className: profile_module_scss_1["default"].profile__name }, profile.name),
                    React.createElement("p", { className: profile_module_scss_1["default"].profile__username },
                        "@",
                        profile.username),
                    profile.bio && React.createElement("p", { className: profile_module_scss_1["default"].profile__bio }, profile.bio),
                    React.createElement("div", { className: profile_module_scss_1["default"].profile__details },
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
                    React.createElement("div", { className: profile_module_scss_1["default"].profile__followCounts },
                        React.createElement("span", null,
                            React.createElement("strong", null, profile.followingCount),
                            " Following"),
                        React.createElement("span", null,
                            React.createElement("strong", null, profile.followersCount),
                            " Followers"))))),
            React.createElement("div", { className: profile_module_scss_1["default"].profile__tabs }, ['Posts', 'Replies', 'Highlights', 'Media', 'Likes'].map(function (tab) { return (React.createElement("button", { key: tab, className: profile_module_scss_1["default"].profile__tab + " " + (activeTab === tab.toLowerCase() ? profile_module_scss_1["default"]['profile__tab--active'] : ''), onClick: function () { return setActiveTab(tab.toLowerCase()); } }, tab)); })),
            React.createElement("div", { className: profile_module_scss_1["default"].profile__content },
                React.createElement("div", null,
                    "Content for ",
                    activeTab))),
        React.createElement(slidebar_1["default"], null)));
}
exports["default"] = Profile;
