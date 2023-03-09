"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** @format */

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dribbble-button",
    style: {
      backgroundColor: '#eb4c89',
      color: 'white',
      fontFamily: 'Comic Sans MS',
      fontSize: '24px',
      border: 'none',
      padding: '16px',
      borderRadius: '8px'
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;