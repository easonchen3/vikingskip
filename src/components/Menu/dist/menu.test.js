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
var react_2 = require("@testing-library/react");
var menu_1 = require("./menu");
var menuItem_1 = require("./menuItem");
var testPorps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
};
var testVerProps = {
    defaultIndex: 0,
    mode: 'vertical'
};
var generateMenu = function (props) {
    return (react_1["default"].createElement(menu_1["default"], __assign({}, props),
        react_1["default"].createElement(menuItem_1["default"], { index: 0 }, "active"),
        react_1["default"].createElement(menuItem_1["default"], { disabled: true, index: 1 }, "disabled"),
        react_1["default"].createElement(menuItem_1["default"], { index: 2 }, "xyz")));
};
var wrapper, menuElement, activeElement, disabledElement;
describe('test Menu and MenuItem component', function () {
    beforeEach(function () {
        wrapper = react_2.render(generateMenu(testPorps));
    });
    it('should render correct Menu and MenuItem based on default props', function () { });
    it('click items should change active and call the right callback', function () { });
    it('should render vertical model when mode is set to vertical', function () { });
});
