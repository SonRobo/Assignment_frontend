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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test.json */ \"./test.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageList = ()=>{\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchImages();\n    }, []);\n    const fetchImages = async ()=>{\n        try {\n            // const response = await axios.get('API'); \n            // setImages(response.data.posts); \n            setImages(_test_json__WEBPACK_IMPORTED_MODULE_2__.posts);\n        } catch (error) {\n            console.error(\"Error fetching images:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.imageUrl,\n                        alt: \"Image \".concat(index)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: image.comments.map((comment, commentIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Comments\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: [\n                                            comment.userId,\n                                            \": \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    comment.comment\n                                ]\n                            }, commentIndex, true, {\n                                fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\onedriveson1305\\\\OneDrive\\\\Desktop\\\\nextjs-blog\\\\pages\\\\ImageList.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageList, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = ImageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageList);\nvar _c;\n$RefreshReg$(_c, \"ImageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDSztBQUUvQixNQUFNSyxZQUFZOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxjQUFjO1FBQ2xCLElBQUk7WUFDRiw0Q0FBNEM7WUFDNUMsbUNBQW1DO1lBQ25DRCxVQUFVSCw2Q0FBVTtRQUN0QixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtrQkFDRU4sT0FBT08sR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ0g7O2tDQUNDLDhEQUFDSTt3QkFBSUMsS0FBS0gsTUFBTUksUUFBUTt3QkFBRUMsS0FBSyxTQUFlLE9BQU5KOzs7Ozs7a0NBQ3hDLDhEQUFDSztrQ0FDRU4sTUFBTU8sUUFBUSxDQUFDUixHQUFHLENBQUMsQ0FBQ1MsU0FBU0MsNkJBQzVCLDhEQUFDQzs7a0RBQ0MsOERBQUNDO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBOzs0Q0FBR0gsUUFBUUksTUFBTTs0Q0FBQzs7Ozs7OztvQ0FBT0osUUFBUUEsT0FBTzs7K0JBRmxDQzs7Ozs7Ozs7Ozs7ZUFKTFI7Ozs7Ozs7Ozs7QUFjbEI7R0FsQ01WO0tBQUFBO0FBb0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ltYWdlTGlzdC5qcz9iMDc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgdGVzdCBmcm9tICcuLi90ZXN0Lmpzb24nXHJcblxyXG5jb25zdCBJbWFnZUxpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdBUEknKTsgXHJcbiAgICAgIC8vIHNldEltYWdlcyhyZXNwb25zZS5kYXRhLnBvc3RzKTsgXHJcbiAgICAgIHNldEltYWdlcyh0ZXN0LnBvc3RzKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW1hZ2VzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UuaW1hZ2VVcmx9IGFsdD17YEltYWdlICR7aW5kZXh9YH0gLz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2ltYWdlLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17Y29tbWVudEluZGV4fT5cclxuICAgICAgICAgICAgICAgIDxiPkNvbW1lbnRzPC9iPlxyXG4gICAgICAgICAgICAgICAgPGI+e2NvbW1lbnQudXNlcklkfTogPC9iPntjb21tZW50LmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0ZXN0IiwiSW1hZ2VMaXN0IiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiZmV0Y2hJbWFnZXMiLCJwb3N0cyIsImVycm9yIiwiY29uc29sZSIsImRpdiIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsInVsIiwiY29tbWVudHMiLCJjb21tZW50IiwiY29tbWVudEluZGV4IiwibGkiLCJiIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ImageList.js\n"));

/***/ })

});