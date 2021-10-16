"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/productType.js":
/*!*********************************!*\
  !*** ./reducers/productType.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"PRODUCT_TYPE_REQUEST\": function() { return /* binding */ PRODUCT_TYPE_REQUEST; },\n/* harmony export */   \"PRODUCT_TYPE_SUCCESS\": function() { return /* binding */ PRODUCT_TYPE_SUCCESS; },\n/* harmony export */   \"PRODUCT_TYPE_FAILURE\": function() { return /* binding */ PRODUCT_TYPE_FAILURE; }\n/* harmony export */ });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = {\n  types: [],\n  //\n  st_typeLoading: false,\n  st_typeDone: false,\n  st_typeError: null\n};\nvar PRODUCT_TYPE_REQUEST = \"PRODUCT_TYPE_REQUEST\";\nvar PRODUCT_TYPE_SUCCESS = \"PRODUCT_TYPE_SUCCESS\";\nvar PRODUCT_TYPE_FAILURE = \"PRODUCT_TYPE_FAILURE\";\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return (0,immer__WEBPACK_IMPORTED_MODULE_0__.default)(state, function (draft) {\n    switch (action.type) {\n      case PRODUCT_TYPE_REQUEST:\n        draft.st_typeLoading = true;\n        draft.st_typeDone = false;\n        draft.st_typeError = null;\n        break;\n\n      case PRODUCT_TYPE_SUCCESS:\n        draft.st_typeLoading = false;\n        draft.st_typeDone = true;\n        draft.st_typeError = null;\n        draft.st_typeError = action.data;\n        break;\n\n      case PRODUCT_TYPE_FAILURE:\n        draft.st_typeLoading = false;\n        draft.st_typeDone = false;\n        draft.st_typeError = action.data;\n        break;\n\n      default:\n        break;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wcm9kdWN0VHlwZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBRztBQUMxQkMsRUFBQUEsS0FBSyxFQUFFLEVBRG1CO0FBRTFCO0FBQ0FDLEVBQUFBLGNBQWMsRUFBRSxLQUhVO0FBSTFCQyxFQUFBQSxXQUFXLEVBQUUsS0FKYTtBQUsxQkMsRUFBQUEsWUFBWSxFQUFFO0FBTFksQ0FBckI7QUFRQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7O0FBRVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxLQUFELHVFQUFTVCxZQUFUO0FBQUEsTUFBdUJVLE1BQXZCO0FBQUEsU0FDZFgsOENBQU8sQ0FBQ1UsS0FBRCxFQUFRLFVBQUNFLEtBQUQsRUFBVztBQUN4QixZQUFRRCxNQUFNLENBQUNFLElBQWY7QUFDRSxXQUFLUCxvQkFBTDtBQUNFTSxRQUFBQSxLQUFLLENBQUNULGNBQU4sR0FBdUIsSUFBdkI7QUFDQVMsUUFBQUEsS0FBSyxDQUFDUixXQUFOLEdBQW9CLEtBQXBCO0FBQ0FRLFFBQUFBLEtBQUssQ0FBQ1AsWUFBTixHQUFxQixJQUFyQjtBQUNBOztBQUVGLFdBQUtFLG9CQUFMO0FBQ0VLLFFBQUFBLEtBQUssQ0FBQ1QsY0FBTixHQUF1QixLQUF2QjtBQUNBUyxRQUFBQSxLQUFLLENBQUNSLFdBQU4sR0FBb0IsSUFBcEI7QUFDQVEsUUFBQUEsS0FBSyxDQUFDUCxZQUFOLEdBQXFCLElBQXJCO0FBQ0FPLFFBQUFBLEtBQUssQ0FBQ1AsWUFBTixHQUFxQk0sTUFBTSxDQUFDRyxJQUE1QjtBQUNBOztBQUVGLFdBQUtOLG9CQUFMO0FBQ0VJLFFBQUFBLEtBQUssQ0FBQ1QsY0FBTixHQUF1QixLQUF2QjtBQUNBUyxRQUFBQSxLQUFLLENBQUNSLFdBQU4sR0FBb0IsS0FBcEI7QUFDQVEsUUFBQUEsS0FBSyxDQUFDUCxZQUFOLEdBQXFCTSxNQUFNLENBQUNHLElBQTVCO0FBQ0E7O0FBRUY7QUFDRTtBQXJCSjtBQXVCRCxHQXhCTSxDQURPO0FBQUEsQ0FBaEI7O0FBMkJBLCtEQUFlTCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Byb2R1Y3RUeXBlLmpzPzY5ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHR5cGVzOiBbXSxcbiAgLy9cbiAgc3RfdHlwZUxvYWRpbmc6IGZhbHNlLFxuICBzdF90eXBlRG9uZTogZmFsc2UsXG4gIHN0X3R5cGVFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBQUk9EVUNUX1RZUEVfUkVRVUVTVCA9IFwiUFJPRFVDVF9UWVBFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1RZUEVfU1VDQ0VTUyA9IFwiUFJPRFVDVF9UWVBFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1RZUEVfRkFJTFVSRSA9IFwiUFJPRFVDVF9UWVBFX0ZBSUxVUkVcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFBST0RVQ1RfVFlQRV9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5zdF90eXBlTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnN0X3R5cGVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnN0X3R5cGVFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFBST0RVQ1RfVFlQRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zdF90eXBlTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zdF90eXBlRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnN0X3R5cGVFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnN0X3R5cGVFcnJvciA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBQUk9EVUNUX1RZUEVfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc3RfdHlwZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc3RfdHlwZURvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc3RfdHlwZUVycm9yID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sIm5hbWVzIjpbInByb2R1Y2UiLCJpbml0aWFsU3RhdGUiLCJ0eXBlcyIsInN0X3R5cGVMb2FkaW5nIiwic3RfdHlwZURvbmUiLCJzdF90eXBlRXJyb3IiLCJQUk9EVUNUX1RZUEVfUkVRVUVTVCIsIlBST0RVQ1RfVFlQRV9TVUNDRVNTIiwiUFJPRFVDVF9UWVBFX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJkcmFmdCIsInR5cGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/productType.js\n");

/***/ })

});