"use strict";
exports.__esModule = true;
exports.MenuContext = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports.MenuContext = react_1.createContext({ index: 0 });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect;
    var _a = react_1.useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = classnames_1["default"]('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    };
    return (react_1["default"].createElement("ul", { className: classes, style: style },
        react_1["default"].createElement(exports.MenuContext.Provider, { value: passedContext }, children)));
};
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
};
exports["default"] = Menu;
