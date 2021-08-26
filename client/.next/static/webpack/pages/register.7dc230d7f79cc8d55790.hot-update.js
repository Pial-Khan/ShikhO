"use strict";
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_e_learning_MERN_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_e_learning_MERN_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_e_learning_MERN_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_e_learning_MERN_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\e_learning(MERN)\\client\\pages\\register.js",
    _this = undefined,
    _s = $RefreshSig$();




var Register = function Register() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Pial"),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("pial@gmail.com"),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("123456"),
      password = _useState3[0],
      setPassword = _useState3[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,E_e_learning_MERN_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_e_learning_MERN_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var _yield$axios$post, data;

      return E_e_learning_MERN_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); //console.table({name, email, password});

              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:8000/api/register", {
                name: name,
                email: email,
                password: password
              });

            case 3:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              console.log("REGISTER RESPONSE", data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jumbotron text-center bg-primary square p-5",
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container text-center col-md-4 offset-md-4 pb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control mb-4 p-4",
          value: name,
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          placeholder: "Enter name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "email",
          className: "form-control mb-4 p-4",
          value: email,
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: "Enter email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          className: "form-control mb-4 p-4",
          value: password,
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          placeholder: "Enter password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-block btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Register, "XJD8mpv05LZmhnke1Agk7vQlWHY=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuN2RjMjMwZDdmNzljYzhkNTU3OTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNHRiwrQ0FBUSxDQUFDLE1BQUQsQ0FEWDtBQUFBLE1BQ2JHLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLG1CQUVLSiwrQ0FBUSxDQUFDLGdCQUFELENBRmI7QUFBQSxNQUViSyxLQUZhO0FBQUEsTUFFTkMsUUFGTTs7QUFBQSxtQkFHV04sK0NBQVEsQ0FBQyxRQUFELENBSG5CO0FBQUEsTUFHYk8sUUFIYTtBQUFBLE1BR0hDLFdBSEc7O0FBS25CLE1BQU1DLFlBQVk7QUFBQSxtUUFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEbUIsQ0FFbkI7O0FBRm1CO0FBQUEscUJBR0VWLGlEQUFBLHVDQUFpRDtBQUNwRUUsZ0JBQUFBLElBQUksRUFBSkEsSUFEb0U7QUFFcEVFLGdCQUFBQSxLQUFLLEVBQUxBLEtBRm9FO0FBR3BFRSxnQkFBQUEsUUFBUSxFQUFSQTtBQUhvRSxlQUFqRCxDQUhGOztBQUFBO0FBQUE7QUFHWk0sY0FBQUEsSUFIWSxxQkFHWkEsSUFIWTtBQVFuQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLElBQWpDOztBQVJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUcsNkNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFHSTtBQUFLLGVBQVMsRUFBQyxpREFBZjtBQUFBLDZCQUNJO0FBQU0sZ0JBQVEsRUFBRUEsWUFBaEI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGVBQUssRUFBSU4sSUFGWDtBQUdFLGtCQUFRLEVBQUksa0JBQUNPLENBQUQ7QUFBQSxtQkFBT04sT0FBTyxDQUFDTSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsV0FIZDtBQUlFLHFCQUFXLEVBQUUsWUFKZjtBQUtFLGtCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVFJO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBSyxFQUFJWixLQUZYO0FBR0Usa0JBQVEsRUFBSSxrQkFBQ0ssQ0FBRDtBQUFBLG1CQUFPSixRQUFRLENBQUNJLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxXQUhkO0FBSUUscUJBQVcsRUFBRSxhQUpmO0FBS0Usa0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBZUk7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUNFLG1CQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFLLEVBQUlWLFFBRlg7QUFHRSxrQkFBUSxFQUFJLGtCQUFDRyxDQUFEO0FBQUEsbUJBQU9GLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxXQUhkO0FBSUUscUJBQVcsRUFBRSxnQkFKZjtBQUtFLGtCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSixlQXNCSTtBQUFRLGNBQUksRUFBRyxRQUFmO0FBQXdCLG1CQUFTLEVBQUMsMkJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQSxrQkFESjtBQXFDSCxDQXBERDs7R0FBTWY7O0tBQUFBO0FBcUROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0W25hbWUsIHNldE5hbWVdID11c2VTdGF0ZShcIlBpYWxcIik7XHJcbiAgICBjb25zdFtlbWFpbCwgc2V0RW1haWxdID11c2VTdGF0ZShcInBpYWxAZ21haWwuY29tXCIpO1xyXG4gICAgY29uc3RbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9dXNlU3RhdGUoXCIxMjM0NTZcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+ICB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy9jb25zb2xlLnRhYmxlKHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9KTtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9yZWdpc3RlcmAsIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJFR0lTVEVSIFJFU1BPTlNFXCIsIGRhdGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwianVtYm90cm9uIHRleHQtY2VudGVyIGJnLXByaW1hcnkgc3F1YXJlIHAtNVwiPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PiBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9eyAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9XCJFbnRlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9XCJFbnRlciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=