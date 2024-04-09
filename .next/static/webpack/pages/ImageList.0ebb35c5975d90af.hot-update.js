"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageList",{

/***/ "./pages/ImageList.js":
/*!****************************!*\
  !*** ./pages/ImageList.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test.json */ \"./test.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageList = ()=>{\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchImages();\n    }, []);\n    const fetchImages = async ()=>{\n        try {\n        // // const response = await axios.get('API'); \n        // // setImages(response.data); \n        // setImages(test.posts)\n        } catch (error) {\n            console.error(\"Error fetching images:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.imageUrl,\n                        alt: \"Image \".concat(index)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: image.comments.map((comment, commentIndex)=>// Accessing 'comment' property from each comment object\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: comment.comment\n                            }, commentIndex, false, {\n                                fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageList, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = ImageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageList);\nvar _c;\n$RefreshReg$(_c, \"ImageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDSztBQUUvQixNQUFNSyxZQUFZOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxjQUFjO1FBQ2xCLElBQUk7UUFDRiwrQ0FBK0M7UUFDL0MsZ0NBQWdDO1FBQ2hDLHdCQUF3QjtRQUMxQixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtrQkFDRUwsT0FBT00sR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ0g7O2tDQUNDLDhEQUFDSTt3QkFBSUMsS0FBS0gsTUFBTUksUUFBUTt3QkFBRUMsS0FBSyxTQUFlLE9BQU5KOzs7Ozs7a0NBQ3hDLDhEQUFDSztrQ0FDRU4sTUFBTU8sUUFBUSxDQUFDUixHQUFHLENBQUMsQ0FBQ1MsU0FBU0MsZUFDNUIsd0RBQXdEOzBDQUN4RCw4REFBQ0M7MENBQXVCRixRQUFRQSxPQUFPOytCQUE5QkM7Ozs7Ozs7Ozs7O2VBTExSOzs7Ozs7Ozs7O0FBWWxCO0dBaENNVDtLQUFBQTtBQWtDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbWFnZUxpc3QuanM/YjA3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHRlc3QgZnJvbSAnLi4vdGVzdC5qc29uJ1xyXG5cclxuY29uc3QgSW1hZ2VMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEltYWdlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnQVBJJyk7IFxyXG4gICAgICAvLyAvLyBzZXRJbWFnZXMocmVzcG9uc2UuZGF0YSk7IFxyXG4gICAgICAvLyBzZXRJbWFnZXModGVzdC5wb3N0cylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGltYWdlczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlLmltYWdlVXJsfSBhbHQ9e2BJbWFnZSAke2luZGV4fWB9IC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtpbWFnZS5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIC8vIEFjY2Vzc2luZyAnY29tbWVudCcgcHJvcGVydHkgZnJvbSBlYWNoIGNvbW1lbnQgb2JqZWN0XHJcbiAgICAgICAgICAgICAgPGxpIGtleT17Y29tbWVudEluZGV4fT57Y29tbWVudC5jb21tZW50fTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGVzdCIsIkltYWdlTGlzdCIsImltYWdlcyIsInNldEltYWdlcyIsImZldGNoSW1hZ2VzIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwidWwiLCJjb21tZW50cyIsImNvbW1lbnQiLCJjb21tZW50SW5kZXgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageList.js\n"));

/***/ })

});