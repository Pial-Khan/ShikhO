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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZTBmN2I4Y2ZmMjc4ZGNlNTAyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUVPRyxPQUFRSDs7QUFFZixJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLHNCQUNJLDhEQUFDLHNDQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQSw0QkFDSSw4REFBQyxJQUFEO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsR0FBYjtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JLDhEQUFDLElBQUQ7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxRQUFiO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBWUksOERBQUMsSUFBRDtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFdBQWI7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0F0QkQ7O0tBQU1BO0FBd0JOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0FwcHN0b3JlfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmNvbnN0IHtJdGVtfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR5cGV3cml0ZXJcIj5BcHA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHlwZXdyaXRlclwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHlwZXdyaXRlclwiPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbIk1lbnUiLCJMaW5rIiwiQXBwc3RvcmUiLCJJdGVtIiwiVG9wTmF2Il0sInNvdXJjZVJvb3QiOiIifQ==