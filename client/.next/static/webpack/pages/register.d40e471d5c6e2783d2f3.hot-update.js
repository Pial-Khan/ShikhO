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
                name: name
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
      lineNumber: 19,
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
          lineNumber: 23,
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
          lineNumber: 30,
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
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-block btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuZDQwZTQ3MWQ1YzZlMjc4M2QyZjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNHRiwrQ0FBUSxDQUFDLE1BQUQsQ0FEWDtBQUFBLE1BQ2JHLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLG1CQUVLSiwrQ0FBUSxDQUFDLGdCQUFELENBRmI7QUFBQSxNQUViSyxLQUZhO0FBQUEsTUFFTkMsUUFGTTs7QUFBQSxtQkFHV04sK0NBQVEsQ0FBQyxRQUFELENBSG5CO0FBQUEsTUFHYk8sUUFIYTtBQUFBLE1BR0hDLFdBSEc7O0FBS25CLE1BQU1DLFlBQVk7QUFBQSxtUUFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEbUIsQ0FFbkI7O0FBRm1CO0FBQUEscUJBR0VWLGlEQUFBLHVDQUFpRDtBQUNwRUUsZ0JBQUFBLElBQUksRUFBSkE7QUFEb0UsZUFBakQsQ0FIRjs7QUFBQTtBQUFBO0FBR1pVLGNBQUFBLElBSFkscUJBR1pBLElBSFk7QUFNbkJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixJQUFqQzs7QUFObUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFRQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFHLDZDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxlQUFTLEVBQUMsaURBQWY7QUFBQSw2QkFDSTtBQUFNLGdCQUFRLEVBQUVBLFlBQWhCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUNFLG1CQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFLLEVBQUlOLElBRlg7QUFHRSxrQkFBUSxFQUFJLGtCQUFDTyxDQUFEO0FBQUEsbUJBQU9OLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLFdBSGQ7QUFJRSxxQkFBVyxFQUFFLFlBSmY7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGVBQUssRUFBSVosS0FGWDtBQUdFLGtCQUFRLEVBQUksa0JBQUNLLENBQUQ7QUFBQSxtQkFBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsV0FIZDtBQUlFLHFCQUFXLEVBQUUsYUFKZjtBQUtFLGtCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQWVJO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBSyxFQUFJVixRQUZYO0FBR0Usa0JBQVEsRUFBSSxrQkFBQ0csQ0FBRDtBQUFBLG1CQUFPRixXQUFXLENBQUNFLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsV0FIZDtBQUlFLHFCQUFXLEVBQUUsZ0JBSmY7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkosZUFzQkk7QUFBUSxjQUFJLEVBQUcsUUFBZjtBQUF3QixtQkFBUyxFQUFDLDJCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUEsa0JBREo7QUFxQ0gsQ0FsREQ7O0dBQU1mOztLQUFBQTtBQW1ETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdFtuYW1lLCBzZXROYW1lXSA9dXNlU3RhdGUoXCJQaWFsXCIpO1xyXG4gICAgY29uc3RbZW1haWwsIHNldEVtYWlsXSA9dXNlU3RhdGUoXCJwaWFsQGdtYWlsLmNvbVwiKTtcclxuICAgIGNvbnN0W3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPXVzZVN0YXRlKFwiMTIzNDU2XCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiAge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vY29uc29sZS50YWJsZSh7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSk7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVnaXN0ZXJgLCB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJSRUdJU1RFUiBSRVNQT05TRVwiLCBkYXRhKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSBcImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxdWFyZSBwLTVcIj5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPXsgKGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPVwiRW50ZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID17IChlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9eyAoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPVwiRW50ZXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiUmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9