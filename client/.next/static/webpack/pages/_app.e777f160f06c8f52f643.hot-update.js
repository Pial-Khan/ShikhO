"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\e_learning(MERN)\\client\\components\\TopNav.js",
    _this = undefined;




var Item = antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item;

var TopNav = function TopNav() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    mode: "horizontal",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "typewriter",
          children: "App"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "typewriter",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/register",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "typewriter",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = TopNav;
/* harmony default export */ __webpack_exports__["default"] = (TopNav);

var _c;

$RefreshReg$(_c, "TopNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNzc3ZjE2MGYwNmM4ZjUyZjY0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUVPSSxPQUFRSjs7QUFFZixJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLHNCQUNJLDhEQUFDLHNDQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQSw0QkFDSSw4REFBQyxJQUFEO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsR0FBYjtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JLDhEQUFDLElBQUQ7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxRQUFiO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBWUksOERBQUMsSUFBRDtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFdBQWI7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0F0QkQ7O0tBQU1BO0FBd0JOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0FwcHN0b3JlT3V0bGluZWQsIGxvZ2l9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5cclxuY29uc3Qge0l0ZW19ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHlwZXdyaXRlclwiPkFwcDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0eXBld3JpdGVyXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0eXBld3JpdGVyXCI+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuXHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjsiXSwibmFtZXMiOlsiTWVudSIsIkxpbmsiLCJBcHBzdG9yZU91dGxpbmVkIiwibG9naSIsIkl0ZW0iLCJUb3BOYXYiXSwic291cmNlUm9vdCI6IiJ9