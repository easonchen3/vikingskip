"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var button_1 = require("./components/Button/button");
var menu_1 = require("./components//Menu/menu");
var menuItem_1 = require("./components/Menu/menuItem");
var icon_1 = require("./components/Icon/icon");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(icon_1["default"], { icon: "arrow-down", theme: "danger" }),
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(menu_1["default"], { defaultIndex: 0, onSelect: function (index) {
                    alert(index);
                }, mode: "vertical" },
                react_1["default"].createElement(menuItem_1["default"], { index: 0, disabled: true }, "Item"),
                react_1["default"].createElement(menuItem_1["default"], { index: 1 }, "Item"),
                react_1["default"].createElement(menuItem_1["default"], { index: 2 }, "Item")),
            react_1["default"].createElement(button_1["default"], { autoFocus: true, onClick: function (e) {
                    e.preventDefault();
                    alert(123);
                } }, "Hello"),
            react_1["default"].createElement(button_1["default"], { disabled: true, size: "sm" }, "Hello"),
            react_1["default"].createElement(button_1["default"], { btnType: "primary" }, "Hello"),
            react_1["default"].createElement(button_1["default"], { btnType: "danger" }, "Hello"),
            react_1["default"].createElement(button_1["default"], { btnType: "link", href: "http://www.baidu.com", target: "_blank" }, "\u767E\u5EA6"),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports["default"] = App;
