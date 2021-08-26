"use strict";
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\e_learning(MERN)\\client\\pages\\register.js";



const Register = () => {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Pial");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("pial@gmail.com");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("123456");

  const handleSubmit = async e => {
    e.preventDefault(); //console.table({name, email, password});

    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`http://localhost:8000/api/register`, {
      name,
      email,
      password
    });
    console.log("REGISTER RESPONSE", data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jumbotron text-center bg-primary square p-5",
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container text-center col-md-4 offset-md-4 pb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control mb-4 p-4",
          value: name,
          onChange: e => setName(e.target.value),
          placeholder: "Enter name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "email",
          className: "form-control mb-4 p-4",
          value: email,
          onChange: e => setEmail(e.target.value),
          placeholder: "Enter email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          className: "form-control mb-4 p-4",
          value: password,
          onChange: e => setPassword(e.target.value),
          placeholder: "Enter password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-block btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFFBQUs7QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFpQkosK0NBQVEsQ0FBQyxNQUFELENBQTlCO0FBQ0EsUUFBSztBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW1CTiwrQ0FBUSxDQUFDLGdCQUFELENBQWhDO0FBQ0EsUUFBSztBQUFBLE9BQUNPLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQXlCUiwrQ0FBUSxDQUFDLFFBQUQsQ0FBdEM7O0FBRUEsUUFBTVMsWUFBWSxHQUFHLE1BQU9DLENBQVAsSUFBYztBQUNqQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRGlDLENBRWpDOztBQUNBLFVBQU07QUFBQ0MsTUFBQUE7QUFBRCxRQUFTLE1BQU1YLGlEQUFBLENBQVksb0NBQVosRUFBaUQ7QUFDcEVFLE1BQUFBLElBRG9FO0FBRXBFRSxNQUFBQSxLQUZvRTtBQUdwRUUsTUFBQUE7QUFIb0UsS0FBakQsQ0FBckI7QUFLQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNILElBQWpDO0FBQ0QsR0FURDs7QUFVQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFHLDZDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsNkJBQ0k7QUFBTSxnQkFBUSxFQUFFSCxZQUFoQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBSyxFQUFJTixJQUZYO0FBR0Usa0JBQVEsRUFBS08sQ0FBRCxJQUFPTixPQUFPLENBQUNNLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBSDVCO0FBSUUscUJBQVcsRUFBRSxZQUpmO0FBS0Usa0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBUUk7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUNFLG1CQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFLLEVBQUlaLEtBRlg7QUFHRSxrQkFBUSxFQUFLSyxDQUFELElBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FIN0I7QUFJRSxxQkFBVyxFQUFFLGFBSmY7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosZUFlSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGVBQUssRUFBSVYsUUFGWDtBQUdFLGtCQUFRLEVBQUtHLENBQUQsSUFBT0YsV0FBVyxDQUFDRSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUhoQztBQUlFLHFCQUFXLEVBQUUsZ0JBSmY7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkosZUFzQkk7QUFBUSxjQUFJLEVBQUcsUUFBZjtBQUF3QixtQkFBUyxFQUFDLDJCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBLGtCQURKO0FBcUNILENBcEREOztBQXFEQSxpRUFBZWYsUUFBZjs7Ozs7Ozs7OztBQ3hEQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3RbbmFtZSwgc2V0TmFtZV0gPXVzZVN0YXRlKFwiUGlhbFwiKTtcclxuICAgIGNvbnN0W2VtYWlsLCBzZXRFbWFpbF0gPXVzZVN0YXRlKFwicGlhbEBnbWFpbC5jb21cIik7XHJcbiAgICBjb25zdFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID11c2VTdGF0ZShcIjEyMzQ1NlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4gIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvL2NvbnNvbGUudGFibGUoe25hbWUsIGVtYWlsLCBwYXNzd29yZH0pO1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyYCwge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJFR0lTVEVSIFJFU1BPTlNFXCIsIGRhdGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwianVtYm90cm9uIHRleHQtY2VudGVyIGJnLXByaW1hcnkgc3F1YXJlIHAtNVwiPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PiBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9eyAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9XCJFbnRlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9XCJFbnRlciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiUmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9