/*! For license information please see main.js.LICENSE.txt */
/******/ (() => {
    // webpackBootstrap
    /******/ "use strict";
    /******/    var leafPrototypes, getProto, __webpack_modules__ = {
        /***/ 27: 
        /***/ (module, __webpack_exports__, __webpack_require__) => {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */            });
            /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81), _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645), ___CSS_LOADER_EXPORT___ =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            /* harmony import */            
            // Module
            ___CSS_LOADER_EXPORT___.push([ module.id, ".togglePin {\n    transition: all .25s ease-in-out;\n    position: relative;\n }\n\n .togglePin-toggled {\n    transform: translate(1.3rem)\n }\n \n .togglePin-untoggled {\n    transform: translate(0rem);\n }\n", "" ]);
            // Exports
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            /***/        },
        /***/ 182: 
        /***/ (module, __webpack_exports__, __webpack_require__) => {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */            });
            /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81), _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645), ___CSS_LOADER_EXPORT___ =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            /* harmony import */            
            // Module
            ___CSS_LOADER_EXPORT___.push([ module.id, '/*\n! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.z-50 {\n  z-index: 50;\n}\n.m-10 {\n  margin: 2.5rem;\n}\n.m-2 {\n  margin: 0.5rem;\n}\n.m-5 {\n  margin: 1.25rem;\n}\n.m-auto {\n  margin: auto;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.-mb-px {\n  margin-bottom: -1px;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.hidden {\n  display: none;\n}\n.h-20 {\n  height: 5rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-full {\n  height: 100%;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-5\\/6 {\n  width: 83.333333%;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-\\[10rem\\] {\n  width: 10rem;\n}\n.w-\\[6rem\\] {\n  width: 6rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.table-fixed {\n  table-layout: fixed;\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n.flex-col {\n  flex-direction: column;\n}\n.place-items-center {\n  align-items: center;\n  justify-items: center;\n  place-items: center;\n}\n.content-center {\n  align-content: center;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-t-2 {\n  border-top-width: 2px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(209, 213, 219, 1);\n  border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n.border-indigo-900 {\n  --tw-border-opacity: 1;\n  border-color: rgba(49, 46, 129, 1);\n  border-color: rgba(49, 46, 129, var(--tw-border-opacity));\n}\n.border-teal-950 {\n  --tw-border-opacity: 1;\n  border-color: rgba(4, 47, 46, 1);\n  border-color: rgba(4, 47, 46, var(--tw-border-opacity));\n}\n.\\!bg-slate-500 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(100, 116, 139, 1) !important;\n  background-color: rgba(100, 116, 139, var(--tw-bg-opacity)) !important;\n}\n.bg-budget {\n  --tw-bg-opacity: 1;\n  background-color: rgba(129, 140, 248, 1);\n  background-color: rgba(129, 140, 248, var(--tw-bg-opacity));\n}\n.bg-budget-dark {\n  --tw-bg-opacity: 1;\n  background-color: rgba(49, 46, 129, 1);\n  background-color: rgba(49, 46, 129, var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(31, 41, 55, 1);\n  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.p-10 {\n  padding: 2.5rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-budget-dark {\n  --tw-text-opacity: 1;\n  color: rgba(49, 46, 129, 1);\n  color: rgba(49, 46, 129, var(--tw-text-opacity));\n}\n.text-budget-light {\n  --tw-text-opacity: 1;\n  color: rgba(199, 210, 254, 1);\n  color: rgba(199, 210, 254, var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, 1);\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.no-underline {\n  text-decoration-line: none;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n\nhtml, body, .budget-bg {\n    background-color: rgb(238, 242, 255);\n}\n\n.hover\\:bg-budget:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(129, 140, 248, 1);\n  background-color: rgba(129, 140, 248, var(--tw-bg-opacity));\n}\n\n.hover\\:text-budget-light:hover {\n  --tw-text-opacity: 1;\n  color: rgba(199, 210, 254, 1);\n  color: rgba(199, 210, 254, var(--tw-text-opacity));\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n@media (min-width: 768px) {\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:m-28 {\n    margin: 7rem;\n  }\n}\n\n', "" ]);
            // Exports
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            /***/        },
        /***/ 645: 
        /***/ module => {
            /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
            module.exports = function(cssWithMappingToString) {
                var list = [];
                // return the list of modules as css string
                                return list.toString = function toString() {
                    return this.map((function(item) {
                        var content = "", needLayer = "undefined" != typeof item[5];
                        return item[4] && (content += "@supports (".concat(item[4], ") {")), item[2] && (content += "@media ".concat(item[2], " {")), 
                        needLayer && (content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")), 
                        content += cssWithMappingToString(item), needLayer && (content += "}"), item[2] && (content += "}"), 
                        item[4] && (content += "}"), content;
                    })).join("");
                }, 
                // import a list of modules into the list
                list.i = function i(modules, media, dedupe, supports, layer) {
                    "string" == typeof modules && (modules = [ [ null, modules, undefined ] ]);
                    var alreadyImportedModules = {};
                    if (dedupe) for (var k = 0; k < this.length; k++) {
                        var id = this[k][0];
                        null != id && (alreadyImportedModules[id] = !0);
                    }
                    for (var _k = 0; _k < modules.length; _k++) {
                        var item = [].concat(modules[_k]);
                        dedupe && alreadyImportedModules[item[0]] || (void 0 !== layer && ("undefined" == typeof item[5] || (item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}")), 
                        item[5] = layer), media && (item[2] ? (item[1] = "@media ".concat(item[2], " {").concat(item[1], "}"), 
                        item[2] = media) : item[2] = media), supports && (item[4] ? (item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}"), 
                        item[4] = supports) : item[4] = "".concat(supports)), list.push(item));
                    }
                }, list;
            };
            /***/        },
        /***/ 81: 
        /***/ module => {
            module.exports = function(i) {
                return i[1];
            };
            /***/        },
        /***/ 448: 
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
            var aa = __webpack_require__(294), ca = __webpack_require__(840);
            function p(a) {
                for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
                return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var da = new Set, ea = {};
            function fa(a, b) {
                ha(a, b), ha(a + "Capture", b);
            }
            function ha(a, b) {
                for (ea[a] = b, a = 0; a < b.length; a++) da.add(b[a]);
            }
            var ia = !("undefined" == typeof window || "undefined" == typeof window.document || "undefined" == typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
            function v(a, b, c, d, e, f, g) {
                this.acceptsBooleans = 2 === b || 3 === b || 4 === b, this.attributeName = d, this.attributeNamespace = e, 
                this.mustUseProperty = c, this.propertyName = a, this.type = b, this.sanitizeURL = f, 
                this.removeEmptyString = g;
            }
            var z = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(a) {
                z[a] = new v(a, 0, !1, a, null, !1, !1);
            })), [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((function(a) {
                var b = a[0];
                z[b] = new v(b, 1, !1, a[1], null, !1, !1);
            })), [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
            })), [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a, null, !1, !1);
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(a) {
                z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
            })), [ "checked", "multiple", "muted", "selected" ].forEach((function(a) {
                z[a] = new v(a, 3, !0, a, null, !1, !1);
            })), [ "capture", "download" ].forEach((function(a) {
                z[a] = new v(a, 4, !1, a, null, !1, !1);
            })), [ "cols", "rows", "size", "span" ].forEach((function(a) {
                z[a] = new v(a, 6, !1, a, null, !1, !1);
            })), [ "rowSpan", "start" ].forEach((function(a) {
                z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
            }));
            var ra = /[\-:]([a-z])/g;
            function sa(a) {
                return a[1].toUpperCase();
            }
            function ta(a, b, c, d) {
                var e = z.hasOwnProperty(b) ? z[b] : null;
                (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) && (function qa(a, b, c, d) {
                    if (null == b || function pa(a, b, c, d) {
                        if (null !== c && 0 === c.type) return !1;
                        switch (typeof b) {
                          case "function":
                          case "symbol":
                            return !0;

                          case "boolean":
                            return !d && (null !== c ? !c.acceptsBooleans : "data-" !== (a = a.toLowerCase().slice(0, 5)) && "aria-" !== a);

                          default:
                            return !1;
                        }
                    }(a, b, c, d)) return !0;
                    if (d) return !1;
                    if (null !== c) switch (c.type) {
                      case 3:
                        return !b;

                      case 4:
                        return !1 === b;

                      case 5:
                        return isNaN(b);

                      case 6:
                        return isNaN(b) || 1 > b;
                    }
                    return !1;
                }(b, c, e, d) && (c = null), d || null === e ? function oa(a) {
                    return !!ja.call(ma, a) || !ja.call(la, a) && (ka.test(a) ? ma[a] = !0 : (la[a] = !0, 
                    !1));
                }(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 !== e.type && "" : c : (b = e.attributeName, 
                d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (c = 3 === (e = e.type) || 4 === e && !0 === c ? "" : "" + c, 
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, null, !1, !1);
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
            })), [ "xml:base", "xml:lang", "xml:space" ].forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
            })), [ "tabIndex", "crossOrigin" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
            })), z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), 
            [ "src", "href", "action", "formAction" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
            }));
            var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol["for"]("react.element"), wa = Symbol["for"]("react.portal"), ya = Symbol["for"]("react.fragment"), za = Symbol["for"]("react.strict_mode"), Aa = Symbol["for"]("react.profiler"), Ba = Symbol["for"]("react.provider"), Ca = Symbol["for"]("react.context"), Da = Symbol["for"]("react.forward_ref"), Ea = Symbol["for"]("react.suspense"), Fa = Symbol["for"]("react.suspense_list"), Ga = Symbol["for"]("react.memo"), Ha = Symbol["for"]("react.lazy");
            Symbol["for"]("react.scope"), Symbol["for"]("react.debug_trace_mode");
            var Ia = Symbol["for"]("react.offscreen");
            Symbol["for"]("react.legacy_hidden"), Symbol["for"]("react.cache"), Symbol["for"]("react.tracing_marker");
            var Ja = Symbol.iterator;
            function Ka(a) {
                return null === a || "object" != typeof a ? null : "function" == typeof (a = Ja && a[Ja] || a["@@iterator"]) ? a : null;
            }
            var La, A = Object.assign;
            function Ma(a) {
                if (void 0 === La) try {
                    throw Error();
                } catch (c) {
                    var b = c.stack.trim().match(/\n( *(at )?)/);
                    La = b && b[1] || "";
                }
                return "\n" + La + a;
            }
            var Na = !1;
            function Oa(a, b) {
                if (!a || Na) return "";
                Na = !0;
                var c = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (b) if (b = function() {
                        throw Error();
                    }, Object.defineProperty(b.prototype, "props", {
                        set: function() {
                            throw Error();
                        }
                    }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(b, []);
                        } catch (l) {
                            var d = l;
                        }
                        Reflect.construct(a, [], b);
                    } else {
                        try {
                            b.call();
                        } catch (l) {
                            d = l;
                        }
                        a.call(b.prototype);
                    } else {
                        try {
                            throw Error();
                        } catch (l) {
                            d = l;
                        }
                        a();
                    }
                } catch (l) {
                    if (l && d && "string" == typeof l.stack) {
                        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
                        for (;1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
                            if (1 !== g || 1 !== h) do {
                                if (g--, 0 > --h || e[g] !== f[h]) {
                                    var k = "\n" + e[g].replace(" at new ", " at ");
                                    return a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName)), 
                                    k;
                                }
                            } while (1 <= g && 0 <= h);
                            break;
                        }
                    }
                } finally {
                    Na = !1, Error.prepareStackTrace = c;
                }
                return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
            }
            function Pa(a) {
                switch (a.tag) {
                  case 5:
                    return Ma(a.type);

                  case 16:
                    return Ma("Lazy");

                  case 13:
                    return Ma("Suspense");

                  case 19:
                    return Ma("SuspenseList");

                  case 0:
                  case 2:
                  case 15:
                    return a = Oa(a.type, !1);

                  case 11:
                    return a = Oa(a.type.render, !1);

                  case 1:
                    return a = Oa(a.type, !0);

                  default:
                    return "";
                }
            }
            function Qa(a) {
                if (null == a) return null;
                if ("function" == typeof a) return a.displayName || a.name || null;
                if ("string" == typeof a) return a;
                switch (a) {
                  case ya:
                    return "Fragment";

                  case wa:
                    return "Portal";

                  case Aa:
                    return "Profiler";

                  case za:
                    return "StrictMode";

                  case Ea:
                    return "Suspense";

                  case Fa:
                    return "SuspenseList";
                }
                if ("object" == typeof a) switch (a.$$typeof) {
                  case Ca:
                    return (a.displayName || "Context") + ".Consumer";

                  case Ba:
                    return (a._context.displayName || "Context") + ".Provider";

                  case Da:
                    var b = a.render;
                    return (a = a.displayName) || (a = "" !== (a = b.displayName || b.name || "") ? "ForwardRef(" + a + ")" : "ForwardRef"), 
                    a;

                  case Ga:
                    return null !== (b = a.displayName || null) ? b : Qa(a.type) || "Memo";

                  case Ha:
                    b = a._payload, a = a._init;
                    try {
                        return Qa(a(b));
                    } catch (c) {}
                }
                return null;
            }
            function Ra(a) {
                var b = a.type;
                switch (a.tag) {
                  case 24:
                    return "Cache";

                  case 9:
                    return (b.displayName || "Context") + ".Consumer";

                  case 10:
                    return (b._context.displayName || "Context") + ".Provider";

                  case 18:
                    return "DehydratedFragment";

                  case 11:
                    return a = (a = b.render).displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

                  case 7:
                    return "Fragment";

                  case 5:
                    return b;

                  case 4:
                    return "Portal";

                  case 3:
                    return "Root";

                  case 6:
                    return "Text";

                  case 16:
                    return Qa(b);

                  case 8:
                    return b === za ? "StrictMode" : "Mode";

                  case 22:
                    return "Offscreen";

                  case 12:
                    return "Profiler";

                  case 21:
                    return "Scope";

                  case 13:
                    return "Suspense";

                  case 19:
                    return "SuspenseList";

                  case 25:
                    return "TracingMarker";

                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ("function" == typeof b) return b.displayName || b.name || null;
                    if ("string" == typeof b) return b;
                }
                return null;
            }
            function Sa(a) {
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "undefined":
                  case "object":
                    return a;

                  default:
                    return "";
                }
            }
            function Ta(a) {
                var b = a.type;
                return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
            }
            function Va(a) {
                a._valueTracker || (a._valueTracker = function Ua(a) {
                    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
                    if (!a.hasOwnProperty(b) && void 0 !== c && "function" == typeof c.get && "function" == typeof c.set) {
                        var e = c.get, f = c.set;
                        return Object.defineProperty(a, b, {
                            configurable: !0,
                            get: function() {
                                return e.call(this);
                            },
                            set: function(a) {
                                d = "" + a, f.call(this, a);
                            }
                        }), Object.defineProperty(a, b, {
                            enumerable: c.enumerable
                        }), {
                            getValue: function() {
                                return d;
                            },
                            setValue: function(a) {
                                d = "" + a;
                            },
                            stopTracking: function() {
                                a._valueTracker = null, delete a[b];
                            }
                        };
                    }
                }(a));
            }
            function Wa(a) {
                if (!a) return !1;
                var b = a._valueTracker;
                if (!b) return !0;
                var c = b.getValue(), d = "";
                return a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value), (a = d) !== c && (b.setValue(a), 
                !0);
            }
            function Xa(a) {
                if (void 0 === (a = a || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return a.activeElement || a.body;
                } catch (b) {
                    return a.body;
                }
            }
            function Ya(a, b) {
                var c = b.checked;
                return A({}, b, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != c ? c : a._wrapperState.initialChecked
                });
            }
            function Za(a, b) {
                var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
                c = Sa(null != b.value ? b.value : c), a._wrapperState = {
                    initialChecked: d,
                    initialValue: c,
                    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
                };
            }
            function ab(a, b) {
                null != (b = b.checked) && ta(a, "checked", b, !1);
            }
            function bb(a, b) {
                ab(a, b);
                var c = Sa(b.value), d = b.type;
                if (null != c) "number" === d ? (0 === c && "" === a.value || a.value != c) && (a.value = "" + c) : a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) return void a.removeAttribute("value");
                b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue)), 
                null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
            }
            function db(a, b, c) {
                if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                    var d = b.type;
                    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
                    b = "" + a._wrapperState.initialValue, c || b === a.value || (a.value = b), a.defaultValue = b;
                }
                "" !== (c = a.name) && (a.name = ""), a.defaultChecked = !!a._wrapperState.initialChecked, 
                "" !== c && (a.name = c);
            }
            function cb(a, b, c) {
                "number" === b && Xa(a.ownerDocument) === a || (null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c));
            }
            var eb = Array.isArray;
            function fb(a, b, c, d) {
                if (a = a.options, b) {
                    b = {};
                    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
                    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), 
                    e && d && (a[c].defaultSelected = !0);
                } else {
                    for (c = "" + Sa(c), b = null, e = 0; e < a.length; e++) {
                        if (a[e].value === c) return a[e].selected = !0, void (d && (a[e].defaultSelected = !0));
                        null !== b || a[e].disabled || (b = a[e]);
                    }
                    null !== b && (b.selected = !0);
                }
            }
            function gb(a, b) {
                if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
                return A({}, b, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + a._wrapperState.initialValue
                });
            }
            function hb(a, b) {
                var c = b.value;
                if (null == c) {
                    if (c = b.children, b = b.defaultValue, null != c) {
                        if (null != b) throw Error(p(92));
                        if (eb(c)) {
                            if (1 < c.length) throw Error(p(93));
                            c = c[0];
                        }
                        b = c;
                    }
                    null == b && (b = ""), c = b;
                }
                a._wrapperState = {
                    initialValue: Sa(c)
                };
            }
            function ib(a, b) {
                var c = Sa(b.value), d = Sa(b.defaultValue);
                null != c && ((c = "" + c) !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c)), 
                null != d && (a.defaultValue = "" + d);
            }
            function jb(a) {
                var b = a.textContent;
                b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
            }
            function kb(a) {
                switch (a) {
                  case "svg":
                    return "http://www.w3.org/2000/svg";

                  case "math":
                    return "http://www.w3.org/1998/Math/MathML";

                  default:
                    return "http://www.w3.org/1999/xhtml";
                }
            }
            function lb(a, b) {
                return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
            }
            var mb, nb = function(a) {
                return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return a(b, c);
                    }));
                } : a;
            }((function(a, b) {
                if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b; else {
                    for ((mb = mb || document.createElement("div")).innerHTML = "<svg>" + b.valueOf().toString() + "</svg>", 
                    b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
                    for (;b.firstChild; ) a.appendChild(b.firstChild);
                }
            }));
            function ob(a, b) {
                if (b) {
                    var c = a.firstChild;
                    if (c && c === a.lastChild && 3 === c.nodeType) return void (c.nodeValue = b);
                }
                a.textContent = b;
            }
            var pb = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, qb = [ "Webkit", "ms", "Moz", "O" ];
            function rb(a, b, c) {
                return null == b || "boolean" == typeof b || "" === b ? "" : c || "number" != typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
            }
            function sb(a, b) {
                for (var c in a = a.style, b) if (b.hasOwnProperty(c)) {
                    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
                    "float" === c && (c = "cssFloat"), d ? a.setProperty(c, e) : a[c] = e;
                }
            }
            Object.keys(pb).forEach((function(a) {
                qb.forEach((function(b) {
                    b = b + a.charAt(0).toUpperCase() + a.substring(1), pb[b] = pb[a];
                }));
            }));
            var tb = A({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ub(a, b) {
                if (b) {
                    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
                    if (null != b.dangerouslySetInnerHTML) {
                        if (null != b.children) throw Error(p(60));
                        if ("object" != typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
                    }
                    if (null != b.style && "object" != typeof b.style) throw Error(p(62));
                }
            }
            function vb(a, b) {
                if (-1 === a.indexOf("-")) return "string" == typeof b.is;
                switch (a) {
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    return !1;

                  default:
                    return !0;
                }
            }
            var wb = null;
            function xb(a) {
                return (a = a.target || a.srcElement || window).correspondingUseElement && (a = a.correspondingUseElement), 
                3 === a.nodeType ? a.parentNode : a;
            }
            var yb = null, zb = null, Ab = null;
            function Bb(a) {
                if (a = Cb(a)) {
                    if ("function" != typeof yb) throw Error(p(280));
                    var b = a.stateNode;
                    b && (b = Db(b), yb(a.stateNode, a.type, b));
                }
            }
            function Eb(a) {
                zb ? Ab ? Ab.push(a) : Ab = [ a ] : zb = a;
            }
            function Fb() {
                if (zb) {
                    var a = zb, b = Ab;
                    if (Ab = zb = null, Bb(a), b) for (a = 0; a < b.length; a++) Bb(b[a]);
                }
            }
            function Gb(a, b) {
                return a(b);
            }
            function Hb() {}
            var Ib = !1;
            function Jb(a, b, c) {
                if (Ib) return a(b, c);
                Ib = !0;
                try {
                    return Gb(a, b, c);
                } finally {
                    Ib = !1, (null !== zb || null !== Ab) && (Hb(), Fb());
                }
            }
            function Kb(a, b) {
                var c = a.stateNode;
                if (null === c) return null;
                var d = Db(c);
                if (null === d) return null;
                c = d[b];
                a: switch (b) {
                  case "onClick":
                  case "onClickCapture":
                  case "onDoubleClick":
                  case "onDoubleClickCapture":
                  case "onMouseDown":
                  case "onMouseDownCapture":
                  case "onMouseMove":
                  case "onMouseMoveCapture":
                  case "onMouseUp":
                  case "onMouseUpCapture":
                  case "onMouseEnter":
                    (d = !d.disabled) || (d = !("button" === (a = a.type) || "input" === a || "select" === a || "textarea" === a)), 
                    a = !d;
                    break a;

                  default:
                    a = !1;
                }
                if (a) return null;
                if (c && "function" != typeof c) throw Error(p(231, b, typeof c));
                return c;
            }
            var Lb = !1;
            if (ia) try {
                var Mb = {};
                Object.defineProperty(Mb, "passive", {
                    get: function() {
                        Lb = !0;
                    }
                }), window.addEventListener("test", Mb, Mb), window.removeEventListener("test", Mb, Mb);
            } catch (a) {
                Lb = !1;
            }
            function Nb(a, b, c, d, e, f, g, h, k) {
                var l = Array.prototype.slice.call(arguments, 3);
                try {
                    b.apply(c, l);
                } catch (m) {
                    this.onError(m);
                }
            }
            var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
                onError: function(a) {
                    Ob = !0, Pb = a;
                }
            };
            function Tb(a, b, c, d, e, f, g, h, k) {
                Ob = !1, Pb = null, Nb.apply(Sb, arguments);
            }
            function Vb(a) {
                var b = a, c = a;
                if (a.alternate) for (;b["return"]; ) b = b["return"]; else {
                    a = b;
                    do {
                        0 != (4098 & (b = a).flags) && (c = b["return"]), a = b["return"];
                    } while (a);
                }
                return 3 === b.tag ? c : null;
            }
            function Wb(a) {
                if (13 === a.tag) {
                    var b = a.memoizedState;
                    if (null === b && (null !== (a = a.alternate) && (b = a.memoizedState)), null !== b) return b.dehydrated;
                }
                return null;
            }
            function Xb(a) {
                if (Vb(a) !== a) throw Error(p(188));
            }
            function Zb(a) {
                return null !== (a = function Yb(a) {
                    var b = a.alternate;
                    if (!b) {
                        if (null === (b = Vb(a))) throw Error(p(188));
                        return b !== a ? null : a;
                    }
                    for (var c = a, d = b; ;) {
                        var e = c["return"];
                        if (null === e) break;
                        var f = e.alternate;
                        if (null === f) {
                            if (null !== (d = e["return"])) {
                                c = d;
                                continue;
                            }
                            break;
                        }
                        if (e.child === f.child) {
                            for (f = e.child; f; ) {
                                if (f === c) return Xb(e), a;
                                if (f === d) return Xb(e), b;
                                f = f.sibling;
                            }
                            throw Error(p(188));
                        }
                        if (c["return"] !== d["return"]) c = e, d = f; else {
                            for (var g = !1, h = e.child; h; ) {
                                if (h === c) {
                                    g = !0, c = e, d = f;
                                    break;
                                }
                                if (h === d) {
                                    g = !0, d = e, c = f;
                                    break;
                                }
                                h = h.sibling;
                            }
                            if (!g) {
                                for (h = f.child; h; ) {
                                    if (h === c) {
                                        g = !0, c = f, d = e;
                                        break;
                                    }
                                    if (h === d) {
                                        g = !0, d = f, c = e;
                                        break;
                                    }
                                    h = h.sibling;
                                }
                                if (!g) throw Error(p(189));
                            }
                        }
                        if (c.alternate !== d) throw Error(p(190));
                    }
                    if (3 !== c.tag) throw Error(p(188));
                    return c.stateNode.current === c ? a : b;
                }(a)) ? $b(a) : null;
            }
            function $b(a) {
                if (5 === a.tag || 6 === a.tag) return a;
                for (a = a.child; null !== a; ) {
                    var b = $b(a);
                    if (null !== b) return b;
                    a = a.sibling;
                }
                return null;
            }
            var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
            var oc = Math.clz32 ? Math.clz32 : function nc(a) {
                return a >>>= 0, 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
            }, pc = Math.log, qc = Math.LN2;
            var rc = 64, sc = 4194304;
            function tc(a) {
                switch (a & -a) {
                  case 1:
                    return 1;

                  case 2:
                    return 2;

                  case 4:
                    return 4;

                  case 8:
                    return 8;

                  case 16:
                    return 16;

                  case 32:
                    return 32;

                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return 4194240 & a;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return 130023424 & a;

                  case 134217728:
                    return 134217728;

                  case 268435456:
                    return 268435456;

                  case 536870912:
                    return 536870912;

                  case 1073741824:
                    return 1073741824;

                  default:
                    return a;
                }
            }
            function uc(a, b) {
                var c = a.pendingLanes;
                if (0 === c) return 0;
                var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = 268435455 & c;
                if (0 !== g) {
                    var h = g & ~e;
                    0 !== h ? d = tc(h) : 0 !== (f &= g) && (d = tc(f));
                } else 0 !== (g = c & ~e) ? d = tc(g) : 0 !== f && (d = tc(f));
                if (0 === d) return 0;
                if (0 !== b && b !== d && 0 == (b & e) && ((e = d & -d) >= (f = b & -b) || 16 === e && 0 != (4194240 & f))) return b;
                if (0 != (4 & d) && (d |= 16 & c), 0 !== (b = a.entangledLanes)) for (a = a.entanglements, 
                b &= d; 0 < b; ) e = 1 << (c = 31 - oc(b)), d |= a[c], b &= ~e;
                return d;
            }
            function vc(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 4:
                    return b + 250;

                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return b + 5e3;

                  default:
                    return -1;
                }
            }
            function xc(a) {
                return 0 !== (a = -1073741825 & a.pendingLanes) ? a : 1073741824 & a ? 1073741824 : 0;
            }
            function yc() {
                var a = rc;
                return 0 == (4194240 & (rc <<= 1)) && (rc = 64), a;
            }
            function zc(a) {
                for (var b = [], c = 0; 31 > c; c++) b.push(a);
                return b;
            }
            function Ac(a, b, c) {
                a.pendingLanes |= b, 536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0), 
                (a = a.eventTimes)[b = 31 - oc(b)] = c;
            }
            function Cc(a, b) {
                var c = a.entangledLanes |= b;
                for (a = a.entanglements; c; ) {
                    var d = 31 - oc(c), e = 1 << d;
                    e & b | a[d] & b && (a[d] |= b), c &= ~e;
                }
            }
            var C = 0;
            function Dc(a) {
                return 1 < (a &= -a) ? 4 < a ? 0 != (268435455 & a) ? 16 : 536870912 : 4 : 1;
            }
            var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Sc(a, b) {
                switch (a) {
                  case "focusin":
                  case "focusout":
                    Lc = null;
                    break;

                  case "dragenter":
                  case "dragleave":
                    Mc = null;
                    break;

                  case "mouseover":
                  case "mouseout":
                    Nc = null;
                    break;

                  case "pointerover":
                  case "pointerout":
                    Oc["delete"](b.pointerId);
                    break;

                  case "gotpointercapture":
                  case "lostpointercapture":
                    Pc["delete"](b.pointerId);
                }
            }
            function Tc(a, b, c, d, e, f) {
                return null === a || a.nativeEvent !== f ? (a = {
                    blockedOn: b,
                    domEventName: c,
                    eventSystemFlags: d,
                    nativeEvent: f,
                    targetContainers: [ e ]
                }, null !== b && (null !== (b = Cb(b)) && Fc(b)), a) : (a.eventSystemFlags |= d, 
                b = a.targetContainers, null !== e && -1 === b.indexOf(e) && b.push(e), a);
            }
            function Vc(a) {
                var b = Wc(a.target);
                if (null !== b) {
                    var c = Vb(b);
                    if (null !== c) if (13 === (b = c.tag)) {
                        if (null !== (b = Wb(c))) return a.blockedOn = b, void Ic(a.priority, (function() {
                            Gc(c);
                        }));
                    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) return void (a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null);
                }
                a.blockedOn = null;
            }
            function Xc(a) {
                if (null !== a.blockedOn) return !1;
                for (var b = a.targetContainers; 0 < b.length; ) {
                    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                    if (null !== c) return null !== (b = Cb(c)) && Fc(b), a.blockedOn = c, !1;
                    var d = new (c = a.nativeEvent).constructor(c.type, c);
                    wb = d, c.target.dispatchEvent(d), wb = null, b.shift();
                }
                return !0;
            }
            function Zc(a, b, c) {
                Xc(a) && c["delete"](b);
            }
            function $c() {
                Jc = !1, null !== Lc && Xc(Lc) && (Lc = null), null !== Mc && Xc(Mc) && (Mc = null), 
                null !== Nc && Xc(Nc) && (Nc = null), Oc.forEach(Zc), Pc.forEach(Zc);
            }
            function ad(a, b) {
                a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
            }
            function bd(a) {
                function b(b) {
                    return ad(b, a);
                }
                if (0 < Kc.length) {
                    ad(Kc[0], a);
                    for (var c = 1; c < Kc.length; c++) {
                        var d = Kc[c];
                        d.blockedOn === a && (d.blockedOn = null);
                    }
                }
                for (null !== Lc && ad(Lc, a), null !== Mc && ad(Mc, a), null !== Nc && ad(Nc, a), 
                Oc.forEach(b), Pc.forEach(b), c = 0; c < Qc.length; c++) (d = Qc[c]).blockedOn === a && (d.blockedOn = null);
                for (;0 < Qc.length && null === (c = Qc[0]).blockedOn; ) Vc(c), null === c.blockedOn && Qc.shift();
            }
            var cd = ua.ReactCurrentBatchConfig, dd = !0;
            function ed(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 1, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function gd(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 4, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function fd(a, b, c, d) {
                if (dd) {
                    var e = Yc(a, b, c, d);
                    if (null === e) hd(a, b, d, id, c), Sc(a, d); else if (function Uc(a, b, c, d, e) {
                        switch (b) {
                          case "focusin":
                            return Lc = Tc(Lc, a, b, c, d, e), !0;

                          case "dragenter":
                            return Mc = Tc(Mc, a, b, c, d, e), !0;

                          case "mouseover":
                            return Nc = Tc(Nc, a, b, c, d, e), !0;

                          case "pointerover":
                            var f = e.pointerId;
                            return Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e)), !0;

                          case "gotpointercapture":
                            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
                        }
                        return !1;
                    }(e, a, b, c, d)) d.stopPropagation(); else if (Sc(a, d), 4 & b && -1 < Rc.indexOf(a)) {
                        for (;null !== e; ) {
                            var f = Cb(e);
                            if (null !== f && Ec(f), null === (f = Yc(a, b, c, d)) && hd(a, b, d, id, c), f === e) break;
                            e = f;
                        }
                        null !== e && d.stopPropagation();
                    } else hd(a, b, d, null, c);
                }
            }
            var id = null;
            function Yc(a, b, c, d) {
                if (id = null, null !== (a = Wc(a = xb(d)))) if (null === (b = Vb(a))) a = null; else if (13 === (c = b.tag)) {
                    if (null !== (a = Wb(b))) return a;
                    a = null;
                } else if (3 === c) {
                    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
                    a = null;
                } else b !== a && (a = null);
                return id = a, null;
            }
            function jd(a) {
                switch (a) {
                  case "cancel":
                  case "click":
                  case "close":
                  case "contextmenu":
                  case "copy":
                  case "cut":
                  case "auxclick":
                  case "dblclick":
                  case "dragend":
                  case "dragstart":
                  case "drop":
                  case "focusin":
                  case "focusout":
                  case "input":
                  case "invalid":
                  case "keydown":
                  case "keypress":
                  case "keyup":
                  case "mousedown":
                  case "mouseup":
                  case "paste":
                  case "pause":
                  case "play":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointerup":
                  case "ratechange":
                  case "reset":
                  case "resize":
                  case "seeked":
                  case "submit":
                  case "touchcancel":
                  case "touchend":
                  case "touchstart":
                  case "volumechange":
                  case "change":
                  case "selectionchange":
                  case "textInput":
                  case "compositionstart":
                  case "compositionend":
                  case "compositionupdate":
                  case "beforeblur":
                  case "afterblur":
                  case "beforeinput":
                  case "blur":
                  case "fullscreenchange":
                  case "focus":
                  case "hashchange":
                  case "popstate":
                  case "select":
                  case "selectstart":
                    return 1;

                  case "drag":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "mousemove":
                  case "mouseout":
                  case "mouseover":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "scroll":
                  case "toggle":
                  case "touchmove":
                  case "wheel":
                  case "mouseenter":
                  case "mouseleave":
                  case "pointerenter":
                  case "pointerleave":
                    return 4;

                  case "message":
                    switch (ec()) {
                      case fc:
                        return 1;

                      case gc:
                        return 4;

                      case hc:
                      case ic:
                        return 16;

                      case jc:
                        return 536870912;

                      default:
                        return 16;
                    }

                  default:
                    return 16;
                }
            }
            var kd = null, ld = null, md = null;
            function nd() {
                if (md) return md;
                var a, d, b = ld, c = b.length, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
                for (a = 0; a < c && b[a] === e[a]; a++) ;
                var g = c - a;
                for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
                return md = e.slice(a, 1 < d ? 1 - d : void 0);
            }
            function od(a) {
                var b = a.keyCode;
                return "charCode" in a ? 0 === (a = a.charCode) && 13 === b && (a = 13) : a = b, 
                10 === a && (a = 13), 32 <= a || 13 === a ? a : 0;
            }
            function pd() {
                return !0;
            }
            function qd() {
                return !1;
            }
            function rd(a) {
                function b(b, d, e, f, g) {
                    for (var c in this._reactName = b, this._targetInst = e, this.type = d, this.nativeEvent = f, 
                    this.target = g, this.currentTarget = null, a) a.hasOwnProperty(c) && (b = a[c], 
                    this[c] = b ? b(f) : f[c]);
                    return this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd, 
                    this.isPropagationStopped = qd, this;
                }
                return A(b.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var a = this.nativeEvent;
                        a && (a.preventDefault ? a.preventDefault() : "unknown" != typeof a.returnValue && (a.returnValue = !1), 
                        this.isDefaultPrevented = pd);
                    },
                    stopPropagation: function() {
                        var a = this.nativeEvent;
                        a && (a.stopPropagation ? a.stopPropagation() : "unknown" != typeof a.cancelBubble && (a.cancelBubble = !0), 
                        this.isPropagationStopped = pd);
                    },
                    persist: function() {},
                    isPersistent: pd
                }), b;
            }
            var wd, xd, yd, sd = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(a) {
                    return a.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, td = rd(sd), ud = A({}, sd, {
                view: 0,
                detail: 0
            }), vd = rd(ud), Ad = A({}, ud, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: zd,
                button: 0,
                buttons: 0,
                relatedTarget: function(a) {
                    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
                },
                movementX: function(a) {
                    return "movementX" in a ? a.movementX : (a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, 
                    xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a), wd);
                },
                movementY: function(a) {
                    return "movementY" in a ? a.movementY : xd;
                }
            }), Bd = rd(Ad), Dd = rd(A({}, Ad, {
                dataTransfer: 0
            })), Fd = rd(A({}, ud, {
                relatedTarget: 0
            })), Hd = rd(A({}, sd, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), Id = A({}, sd, {
                clipboardData: function(a) {
                    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
                }
            }), Jd = rd(Id), Ld = rd(A({}, sd, {
                data: 0
            })), Md = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Nd = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Od = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Pd(a) {
                var b = this.nativeEvent;
                return b.getModifierState ? b.getModifierState(a) : !!(a = Od[a]) && !!b[a];
            }
            function zd() {
                return Pd;
            }
            var Qd = A({}, ud, {
                key: function(a) {
                    if (a.key) {
                        var b = Md[a.key] || a.key;
                        if ("Unidentified" !== b) return b;
                    }
                    return "keypress" === a.type ? 13 === (a = od(a)) ? "Enter" : String.fromCharCode(a) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: zd,
                charCode: function(a) {
                    return "keypress" === a.type ? od(a) : 0;
                },
                keyCode: function(a) {
                    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                },
                which: function(a) {
                    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                }
            }), Rd = rd(Qd), Td = rd(A({}, Ad, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), Vd = rd(A({}, ud, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: zd
            })), Xd = rd(A({}, sd, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), Yd = A({}, Ad, {
                deltaX: function(a) {
                    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
                },
                deltaY: function(a) {
                    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
                },
                deltaZ: 0,
                deltaMode: 0
            }), Zd = rd(Yd), $d = [ 9, 13, 27, 32 ], ae = ia && "CompositionEvent" in window, be = null;
            ia && "documentMode" in document && (be = document.documentMode);
            var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
            function ge(a, b) {
                switch (a) {
                  case "keyup":
                    return -1 !== $d.indexOf(b.keyCode);

                  case "keydown":
                    return 229 !== b.keyCode;

                  case "keypress":
                  case "mousedown":
                  case "focusout":
                    return !0;

                  default:
                    return !1;
                }
            }
            function he(a) {
                return "object" == typeof (a = a.detail) && "data" in a ? a.data : null;
            }
            var ie = !1;
            var le = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function me(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return "input" === b ? !!le[a.type] : "textarea" === b;
            }
            function ne(a, b, c, d) {
                Eb(d), 0 < (b = oe(b, "onChange")).length && (c = new td("onChange", "change", null, c, d), 
                a.push({
                    event: c,
                    listeners: b
                }));
            }
            var pe = null, qe = null;
            function re(a) {
                se(a, 0);
            }
            function te(a) {
                if (Wa(ue(a))) return a;
            }
            function ve(a, b) {
                if ("change" === a) return b;
            }
            var we = !1;
            if (ia) {
                var xe;
                if (ia) {
                    var ye = "oninput" in document;
                    if (!ye) {
                        var ze = document.createElement("div");
                        ze.setAttribute("oninput", "return;"), ye = "function" == typeof ze.oninput;
                    }
                    xe = ye;
                } else xe = !1;
                we = xe && (!document.documentMode || 9 < document.documentMode);
            }
            function Ae() {
                pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
            }
            function Be(a) {
                if ("value" === a.propertyName && te(qe)) {
                    var b = [];
                    ne(b, qe, a, xb(a)), Jb(re, b);
                }
            }
            function Ce(a, b, c) {
                "focusin" === a ? (Ae(), qe = c, (pe = b).attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
            }
            function De(a) {
                if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
            }
            function Ee(a, b) {
                if ("click" === a) return te(b);
            }
            function Fe(a, b) {
                if ("input" === a || "change" === a) return te(b);
            }
            var He = "function" == typeof Object.is ? Object.is : function Ge(a, b) {
                return a === b && (0 !== a || 1 / a == 1 / b) || a != a && b != b;
            };
            function Ie(a, b) {
                if (He(a, b)) return !0;
                if ("object" != typeof a || null === a || "object" != typeof b || null === b) return !1;
                var c = Object.keys(a), d = Object.keys(b);
                if (c.length !== d.length) return !1;
                for (d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
                }
                return !0;
            }
            function Je(a) {
                for (;a && a.firstChild; ) a = a.firstChild;
                return a;
            }
            function Ke(a, b) {
                var d, c = Je(a);
                for (a = 0; c; ) {
                    if (3 === c.nodeType) {
                        if (d = a + c.textContent.length, a <= b && d >= b) return {
                            node: c,
                            offset: b - a
                        };
                        a = d;
                    }
                    a: {
                        for (;c; ) {
                            if (c.nextSibling) {
                                c = c.nextSibling;
                                break a;
                            }
                            c = c.parentNode;
                        }
                        c = void 0;
                    }
                    c = Je(c);
                }
            }
            function Le(a, b) {
                return !(!a || !b) && (a === b || (!a || 3 !== a.nodeType) && (b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : !!a.compareDocumentPosition && !!(16 & a.compareDocumentPosition(b))));
            }
            function Me() {
                for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
                    try {
                        var c = "string" == typeof b.contentWindow.location.href;
                    } catch (d) {
                        c = !1;
                    }
                    if (!c) break;
                    b = Xa((a = b.contentWindow).document);
                }
                return b;
            }
            function Ne(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
            }
            function Oe(a) {
                var b = Me(), c = a.focusedElem, d = a.selectionRange;
                if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
                    if (null !== d && Ne(c)) if (b = d.start, void 0 === (a = d.end) && (a = b), "selectionStart" in c) c.selectionStart = b, 
                    c.selectionEnd = Math.min(a, c.value.length); else if ((a = (b = c.ownerDocument || document) && b.defaultView || window).getSelection) {
                        a = a.getSelection();
                        var e = c.textContent.length, f = Math.min(d.start, e);
                        d = void 0 === d.end ? f : Math.min(d.end, e), !a.extend && f > d && (e = d, d = f, 
                        f = e), e = Ke(c, f);
                        var g = Ke(c, d);
                        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && ((b = b.createRange()).setStart(e.node, e.offset), 
                        a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), 
                        a.addRange(b)));
                    }
                    for (b = [], a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({
                        element: a,
                        left: a.scrollLeft,
                        top: a.scrollTop
                    });
                    for ("function" == typeof c.focus && c.focus(), c = 0; c < b.length; c++) (a = b[c]).element.scrollLeft = a.left, 
                    a.element.scrollTop = a.top;
                }
            }
            var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
            function Ue(a, b, c) {
                var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
                Te || null == Qe || Qe !== Xa(d) || ("selectionStart" in (d = Qe) && Ne(d) ? d = {
                    start: d.selectionStart,
                    end: d.selectionEnd
                } : d = {
                    anchorNode: (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: d.anchorOffset,
                    focusNode: d.focusNode,
                    focusOffset: d.focusOffset
                }, Se && Ie(Se, d) || (Se = d, 0 < (d = oe(Re, "onSelect")).length && (b = new td("onSelect", "select", null, b, c), 
                a.push({
                    event: b,
                    listeners: d
                }), b.target = Qe)));
            }
            function Ve(a, b) {
                var c = {};
                return c[a.toLowerCase()] = b.toLowerCase(), c["Webkit" + a] = "webkit" + b, c["Moz" + a] = "moz" + b, 
                c;
            }
            var We = {
                animationend: Ve("Animation", "AnimationEnd"),
                animationiteration: Ve("Animation", "AnimationIteration"),
                animationstart: Ve("Animation", "AnimationStart"),
                transitionend: Ve("Transition", "TransitionEnd")
            }, Xe = {}, Ye = {};
            function Ze(a) {
                if (Xe[a]) return Xe[a];
                if (!We[a]) return a;
                var c, b = We[a];
                for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
                return a;
            }
            ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, 
            delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
            var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function ff(a, b) {
                df.set(a, b), fa(b, [ a ]);
            }
            for (var gf = 0; gf < ef.length; gf++) {
                var hf = ef[gf];
                ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
            }
            ff($e, "onAnimationEnd"), ff(af, "onAnimationIteration"), ff(bf, "onAnimationStart"), 
            ff("dblclick", "onDoubleClick"), ff("focusin", "onFocus"), ff("focusout", "onBlur"), 
            ff(cf, "onTransitionEnd"), ha("onMouseEnter", [ "mouseout", "mouseover" ]), ha("onMouseLeave", [ "mouseout", "mouseover" ]), 
            ha("onPointerEnter", [ "pointerout", "pointerover" ]), ha("onPointerLeave", [ "pointerout", "pointerover" ]), 
            fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), 
            fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), 
            fa("onBeforeInput", [ "compositionend", "keypress", "textInput", "paste" ]), fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), 
            fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), 
            fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
            function nf(a, b, c) {
                var d = a.type || "unknown-event";
                a.currentTarget = c, function Ub(a, b, c, d, e, f, g, h, k) {
                    if (Tb.apply(this, arguments), Ob) {
                        if (!Ob) throw Error(p(198));
                        var l = Pb;
                        Ob = !1, Pb = null, Qb || (Qb = !0, Rb = l);
                    }
                }(d, b, void 0, a), a.currentTarget = null;
            }
            function se(a, b) {
                b = 0 != (4 & b);
                for (var c = 0; c < a.length; c++) {
                    var d = a[c], e = d.event;
                    d = d.listeners;
                    a: {
                        var f = void 0;
                        if (b) for (var g = d.length - 1; 0 <= g; g--) {
                            var h = d[g], k = h.instance, l = h.currentTarget;
                            if (h = h.listener, k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l), f = k;
                        } else for (g = 0; g < d.length; g++) {
                            if (k = (h = d[g]).instance, l = h.currentTarget, h = h.listener, k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l), f = k;
                        }
                    }
                }
                if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
            }
            function D(a, b) {
                var c = b[of];
                void 0 === c && (c = b[of] = new Set);
                var d = a + "__bubble";
                c.has(d) || (pf(b, a, 2, !1), c.add(d));
            }
            function qf(a, b, c) {
                var d = 0;
                b && (d |= 4), pf(c, a, d, b);
            }
            var rf = "_reactListening" + Math.random().toString(36).slice(2);
            function sf(a) {
                if (!a[rf]) {
                    a[rf] = !0, da.forEach((function(b) {
                        "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
                    }));
                    var b = 9 === a.nodeType ? a : a.ownerDocument;
                    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
                }
            }
            function pf(a, b, c, d) {
                switch (jd(b)) {
                  case 1:
                    var e = ed;
                    break;

                  case 4:
                    e = gd;
                    break;

                  default:
                    e = fd;
                }
                c = e.bind(null, b, c, a), e = void 0, !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0), 
                d ? void 0 !== e ? a.addEventListener(b, c, {
                    capture: !0,
                    passive: e
                }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
                    passive: e
                }) : a.addEventListener(b, c, !1);
            }
            function hd(a, b, c, d, e) {
                var f = d;
                if (0 == (1 & b) && 0 == (2 & b) && null !== d) a: for (;;) {
                    if (null === d) return;
                    var g = d.tag;
                    if (3 === g || 4 === g) {
                        var h = d.stateNode.containerInfo;
                        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
                        if (4 === g) for (g = d["return"]; null !== g; ) {
                            var k = g.tag;
                            if ((3 === k || 4 === k) && ((k = g.stateNode.containerInfo) === e || 8 === k.nodeType && k.parentNode === e)) return;
                            g = g["return"];
                        }
                        for (;null !== h; ) {
                            if (null === (g = Wc(h))) return;
                            if (5 === (k = g.tag) || 6 === k) {
                                d = f = g;
                                continue a;
                            }
                            h = h.parentNode;
                        }
                    }
                    d = d["return"];
                }
                Jb((function() {
                    var d = f, e = xb(c), g = [];
                    a: {
                        var h = df.get(a);
                        if (void 0 !== h) {
                            var k = td, n = a;
                            switch (a) {
                              case "keypress":
                                if (0 === od(c)) break a;

                              case "keydown":
                              case "keyup":
                                k = Rd;
                                break;

                              case "focusin":
                                n = "focus", k = Fd;
                                break;

                              case "focusout":
                                n = "blur", k = Fd;
                                break;

                              case "beforeblur":
                              case "afterblur":
                                k = Fd;
                                break;

                              case "click":
                                if (2 === c.button) break a;

                              case "auxclick":
                              case "dblclick":
                              case "mousedown":
                              case "mousemove":
                              case "mouseup":
                              case "mouseout":
                              case "mouseover":
                              case "contextmenu":
                                k = Bd;
                                break;

                              case "drag":
                              case "dragend":
                              case "dragenter":
                              case "dragexit":
                              case "dragleave":
                              case "dragover":
                              case "dragstart":
                              case "drop":
                                k = Dd;
                                break;

                              case "touchcancel":
                              case "touchend":
                              case "touchmove":
                              case "touchstart":
                                k = Vd;
                                break;

                              case $e:
                              case af:
                              case bf:
                                k = Hd;
                                break;

                              case cf:
                                k = Xd;
                                break;

                              case "scroll":
                                k = vd;
                                break;

                              case "wheel":
                                k = Zd;
                                break;

                              case "copy":
                              case "cut":
                              case "paste":
                                k = Jd;
                                break;

                              case "gotpointercapture":
                              case "lostpointercapture":
                              case "pointercancel":
                              case "pointerdown":
                              case "pointermove":
                              case "pointerout":
                              case "pointerover":
                              case "pointerup":
                                k = Td;
                            }
                            var t = 0 != (4 & b), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                            t = [];
                            for (var u, w = d; null !== w; ) {
                                var F = (u = w).stateNode;
                                if (5 === u.tag && null !== F && (u = F, null !== x && (null != (F = Kb(w, x)) && t.push(tf(w, F, u)))), 
                                J) break;
                                w = w["return"];
                            }
                            0 < t.length && (h = new k(h, n, null, c, e), g.push({
                                event: h,
                                listeners: t
                            }));
                        }
                    }
                    if (0 == (7 & b)) {
                        if (k = "mouseout" === a || "pointerout" === a, (!(h = "mouseover" === a || "pointerover" === a) || c === wb || !(n = c.relatedTarget || c.fromElement) || !Wc(n) && !n[uf]) && (k || h) && (h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window, 
                        k ? (k = d, null !== (n = (n = c.relatedTarget || c.toElement) ? Wc(n) : null) && (n !== (J = Vb(n)) || 5 !== n.tag && 6 !== n.tag) && (n = null)) : (k = null, 
                        n = d), k !== n)) {
                            if (t = Bd, F = "onMouseLeave", x = "onMouseEnter", w = "mouse", "pointerout" !== a && "pointerover" !== a || (t = Td, 
                            F = "onPointerLeave", x = "onPointerEnter", w = "pointer"), J = null == k ? h : ue(k), 
                            u = null == n ? h : ue(n), (h = new t(F, w + "leave", k, c, e)).target = J, h.relatedTarget = u, 
                            F = null, Wc(e) === d && ((t = new t(x, w + "enter", n, c, e)).target = u, t.relatedTarget = J, 
                            F = t), J = F, k && n) b: {
                                for (x = n, w = 0, u = t = k; u; u = vf(u)) w++;
                                for (u = 0, F = x; F; F = vf(F)) u++;
                                for (;0 < w - u; ) t = vf(t), w--;
                                for (;0 < u - w; ) x = vf(x), u--;
                                for (;w--; ) {
                                    if (t === x || null !== x && t === x.alternate) break b;
                                    t = vf(t), x = vf(x);
                                }
                                t = null;
                            } else t = null;
                            null !== k && wf(g, h, k, t, !1), null !== n && null !== J && wf(g, J, n, t, !0);
                        }
                        if ("select" === (k = (h = d ? ue(d) : window).nodeName && h.nodeName.toLowerCase()) || "input" === k && "file" === h.type) var na = ve; else if (me(h)) if (we) na = Fe; else {
                            na = De;
                            var xa = Ce;
                        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                        switch (na && (na = na(a, d)) ? ne(g, na, c, e) : (xa && xa(a, h, d), "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value)), 
                        xa = d ? ue(d) : window, a) {
                          case "focusin":
                            (me(xa) || "true" === xa.contentEditable) && (Qe = xa, Re = d, Se = null);
                            break;

                          case "focusout":
                            Se = Re = Qe = null;
                            break;

                          case "mousedown":
                            Te = !0;
                            break;

                          case "contextmenu":
                          case "mouseup":
                          case "dragend":
                            Te = !1, Ue(g, c, e);
                            break;

                          case "selectionchange":
                            if (Pe) break;

                          case "keydown":
                          case "keyup":
                            Ue(g, c, e);
                        }
                        var $a;
                        if (ae) b: {
                            switch (a) {
                              case "compositionstart":
                                var ba = "onCompositionStart";
                                break b;

                              case "compositionend":
                                ba = "onCompositionEnd";
                                break b;

                              case "compositionupdate":
                                ba = "onCompositionUpdate";
                                break b;
                            }
                            ba = void 0;
                        } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
                        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (ld = "value" in (kd = e) ? kd.value : kd.textContent, 
                        ie = !0)), 0 < (xa = oe(d, ba)).length && (ba = new Ld(ba, a, null, c, e), g.push({
                            event: ba,
                            listeners: xa
                        }), $a ? ba.data = $a : null !== ($a = he(c)) && (ba.data = $a))), ($a = ce ? function je(a, b) {
                            switch (a) {
                              case "compositionend":
                                return he(b);

                              case "keypress":
                                return 32 !== b.which ? null : (fe = !0, ee);

                              case "textInput":
                                return (a = b.data) === ee && fe ? null : a;

                              default:
                                return null;
                            }
                        }(a, c) : function ke(a, b) {
                            if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, 
                            ie = !1, a) : null;
                            switch (a) {
                              case "paste":
                              default:
                                return null;

                              case "keypress":
                                if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                                    if (b.char && 1 < b.char.length) return b.char;
                                    if (b.which) return String.fromCharCode(b.which);
                                }
                                return null;

                              case "compositionend":
                                return de && "ko" !== b.locale ? null : b.data;
                            }
                        }(a, c)) && (0 < (d = oe(d, "onBeforeInput")).length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), 
                        g.push({
                            event: e,
                            listeners: d
                        }), e.data = $a));
                    }
                    se(g, b);
                }));
            }
            function tf(a, b, c) {
                return {
                    instance: a,
                    listener: b,
                    currentTarget: c
                };
            }
            function oe(a, b) {
                for (var c = b + "Capture", d = []; null !== a; ) {
                    var e = a, f = e.stateNode;
                    5 === e.tag && null !== f && (e = f, null != (f = Kb(a, c)) && d.unshift(tf(a, f, e)), 
                    null != (f = Kb(a, b)) && d.push(tf(a, f, e))), a = a["return"];
                }
                return d;
            }
            function vf(a) {
                if (null === a) return null;
                do {
                    a = a["return"];
                } while (a && 5 !== a.tag);
                return a || null;
            }
            function wf(a, b, c, d, e) {
                for (var f = b._reactName, g = []; null !== c && c !== d; ) {
                    var h = c, k = h.alternate, l = h.stateNode;
                    if (null !== k && k === d) break;
                    5 === h.tag && null !== l && (h = l, e ? null != (k = Kb(c, f)) && g.unshift(tf(c, k, h)) : e || null != (k = Kb(c, f)) && g.push(tf(c, k, h))), 
                    c = c["return"];
                }
                0 !== g.length && a.push({
                    event: b,
                    listeners: g
                });
            }
            var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
            function zf(a) {
                return ("string" == typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
            }
            function Af(a, b, c) {
                if (b = zf(b), zf(a) !== b && c) throw Error(p(425));
            }
            function Bf() {}
            var Cf = null, Df = null;
            function Ef(a, b) {
                return "textarea" === a || "noscript" === a || "string" == typeof b.children || "number" == typeof b.children || "object" == typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
            }
            var Ff = "function" == typeof setTimeout ? setTimeout : void 0, Gf = "function" == typeof clearTimeout ? clearTimeout : void 0, Hf = "function" == typeof Promise ? Promise : void 0, Jf = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== Hf ? function(a) {
                return Hf.resolve(null).then(a)["catch"](If);
            } : Ff;
            function If(a) {
                setTimeout((function() {
                    throw a;
                }));
            }
            function Kf(a, b) {
                var c = b, d = 0;
                do {
                    var e = c.nextSibling;
                    if (a.removeChild(c), e && 8 === e.nodeType) if ("/$" === (c = e.data)) {
                        if (0 === d) return a.removeChild(e), void bd(b);
                        d--;
                    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
                    c = e;
                } while (c);
                bd(b);
            }
            function Lf(a) {
                for (;null != a; a = a.nextSibling) {
                    var b = a.nodeType;
                    if (1 === b || 3 === b) break;
                    if (8 === b) {
                        if ("$" === (b = a.data) || "$!" === b || "$?" === b) break;
                        if ("/$" === b) return null;
                    }
                }
                return a;
            }
            function Mf(a) {
                a = a.previousSibling;
                for (var b = 0; a; ) {
                    if (8 === a.nodeType) {
                        var c = a.data;
                        if ("$" === c || "$!" === c || "$?" === c) {
                            if (0 === b) return a;
                            b--;
                        } else "/$" === c && b++;
                    }
                    a = a.previousSibling;
                }
                return null;
            }
            var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
            function Wc(a) {
                var b = a[Of];
                if (b) return b;
                for (var c = a.parentNode; c; ) {
                    if (b = c[uf] || c[Of]) {
                        if (c = b.alternate, null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
                            if (c = a[Of]) return c;
                            a = Mf(a);
                        }
                        return b;
                    }
                    c = (a = c).parentNode;
                }
                return null;
            }
            function Cb(a) {
                return !(a = a[Of] || a[uf]) || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
            }
            function ue(a) {
                if (5 === a.tag || 6 === a.tag) return a.stateNode;
                throw Error(p(33));
            }
            function Db(a) {
                return a[Pf] || null;
            }
            var Sf = [], Tf = -1;
            function Uf(a) {
                return {
                    current: a
                };
            }
            function E(a) {
                0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
            }
            function G(a, b) {
                Tf++, Sf[Tf] = a.current, a.current = b;
            }
            var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
            function Yf(a, b) {
                var c = a.type.contextTypes;
                if (!c) return Vf;
                var d = a.stateNode;
                if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
                var f, e = {};
                for (f in c) e[f] = b[f];
                return d && ((a = a.stateNode).__reactInternalMemoizedUnmaskedChildContext = b, 
                a.__reactInternalMemoizedMaskedChildContext = e), e;
            }
            function Zf(a) {
                return null != (a = a.childContextTypes);
            }
            function $f() {
                E(Wf), E(H);
            }
            function ag(a, b, c) {
                if (H.current !== Vf) throw Error(p(168));
                G(H, b), G(Wf, c);
            }
            function bg(a, b, c) {
                var d = a.stateNode;
                if (b = b.childContextTypes, "function" != typeof d.getChildContext) return c;
                for (var e in d = d.getChildContext()) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
                return A({}, c, d);
            }
            function cg(a) {
                return a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf, 
                Xf = H.current, G(H, a), G(Wf, Wf.current), !0;
            }
            function dg(a, b, c) {
                var d = a.stateNode;
                if (!d) throw Error(p(169));
                c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), 
                G(H, a)) : E(Wf), G(Wf, c);
            }
            var eg = null, fg = !1, gg = !1;
            function hg(a) {
                null === eg ? eg = [ a ] : eg.push(a);
            }
            function jg() {
                if (!gg && null !== eg) {
                    gg = !0;
                    var a = 0, b = C;
                    try {
                        var c = eg;
                        for (C = 1; a < c.length; a++) {
                            var d = c[a];
                            do {
                                d = d(!0);
                            } while (null !== d);
                        }
                        eg = null, fg = !1;
                    } catch (e) {
                        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
                    } finally {
                        C = b, gg = !1;
                    }
                }
                return null;
            }
            var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
            function tg(a, b) {
                kg[lg++] = ng, kg[lg++] = mg, mg = a, ng = b;
            }
            function ug(a, b, c) {
                og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, qg = a;
                var d = rg;
                a = sg;
                var e = 32 - oc(d) - 1;
                d &= ~(1 << e), c += 1;
                var f = 32 - oc(b) + e;
                if (30 < f) {
                    var g = e - e % 5;
                    f = (d & (1 << g) - 1).toString(32), d >>= g, e -= g, rg = 1 << 32 - oc(b) + e | c << e | d, 
                    sg = f + a;
                } else rg = 1 << f | c << e | d, sg = a;
            }
            function vg(a) {
                null !== a["return"] && (tg(a, 1), ug(a, 1, 0));
            }
            function wg(a) {
                for (;a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
                for (;a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], 
                og[pg] = null;
            }
            var xg = null, yg = null, I = !1, zg = null;
            function Ag(a, b) {
                var c = Bg(5, null, null, 0);
                c.elementType = "DELETED", c.stateNode = b, c["return"] = a, null === (b = a.deletions) ? (a.deletions = [ c ], 
                a.flags |= 16) : b.push(c);
            }
            function Cg(a, b) {
                switch (a.tag) {
                  case 5:
                    var c = a.type;
                    return null !== (b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b) && (a.stateNode = b, 
                    xg = a, yg = Lf(b.firstChild), !0);

                  case 6:
                    return null !== (b = "" === a.pendingProps || 3 !== b.nodeType ? null : b) && (a.stateNode = b, 
                    xg = a, yg = null, !0);

                  case 13:
                    return null !== (b = 8 !== b.nodeType ? null : b) && (c = null !== qg ? {
                        id: rg,
                        overflow: sg
                    } : null, a.memoizedState = {
                        dehydrated: b,
                        treeContext: c,
                        retryLane: 1073741824
                    }, (c = Bg(18, null, null, 0)).stateNode = b, c["return"] = a, a.child = c, xg = a, 
                    yg = null, !0);

                  default:
                    return !1;
                }
            }
            function Dg(a) {
                return 0 != (1 & a.mode) && 0 == (128 & a.flags);
            }
            function Eg(a) {
                if (I) {
                    var b = yg;
                    if (b) {
                        var c = b;
                        if (!Cg(a, b)) {
                            if (Dg(a)) throw Error(p(418));
                            b = Lf(c.nextSibling);
                            var d = xg;
                            b && Cg(a, b) ? Ag(d, c) : (a.flags = -4097 & a.flags | 2, I = !1, xg = a);
                        }
                    } else {
                        if (Dg(a)) throw Error(p(418));
                        a.flags = -4097 & a.flags | 2, I = !1, xg = a;
                    }
                }
            }
            function Fg(a) {
                for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a["return"];
                xg = a;
            }
            function Gg(a) {
                if (a !== xg) return !1;
                if (!I) return Fg(a), I = !0, !1;
                var b;
                if ((b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = "head" !== (b = a.type) && "body" !== b && !Ef(a.type, a.memoizedProps)), 
                b && (b = yg)) {
                    if (Dg(a)) throw Hg(), Error(p(418));
                    for (;b; ) Ag(a, b), b = Lf(b.nextSibling);
                }
                if (Fg(a), 13 === a.tag) {
                    if (!(a = null !== (a = a.memoizedState) ? a.dehydrated : null)) throw Error(p(317));
                    a: {
                        for (a = a.nextSibling, b = 0; a; ) {
                            if (8 === a.nodeType) {
                                var c = a.data;
                                if ("/$" === c) {
                                    if (0 === b) {
                                        yg = Lf(a.nextSibling);
                                        break a;
                                    }
                                    b--;
                                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                            }
                            a = a.nextSibling;
                        }
                        yg = null;
                    }
                } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
                return !0;
            }
            function Hg() {
                for (var a = yg; a; ) a = Lf(a.nextSibling);
            }
            function Ig() {
                yg = xg = null, I = !1;
            }
            function Jg(a) {
                null === zg ? zg = [ a ] : zg.push(a);
            }
            var Kg = ua.ReactCurrentBatchConfig;
            function Lg(a, b) {
                if (a && a.defaultProps) {
                    for (var c in b = A({}, b), a = a.defaultProps) void 0 === b[c] && (b[c] = a[c]);
                    return b;
                }
                return b;
            }
            var Mg = Uf(null), Ng = null, Og = null, Pg = null;
            function Qg() {
                Pg = Og = Ng = null;
            }
            function Rg(a) {
                var b = Mg.current;
                E(Mg), a._currentValue = b;
            }
            function Sg(a, b, c) {
                for (;null !== a; ) {
                    var d = a.alternate;
                    if ((a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b), 
                    a === c) break;
                    a = a["return"];
                }
            }
            function Tg(a, b) {
                Ng = a, Pg = Og = null, null !== (a = a.dependencies) && null !== a.firstContext && (0 != (a.lanes & b) && (Ug = !0), 
                a.firstContext = null);
            }
            function Vg(a) {
                var b = a._currentValue;
                if (Pg !== a) if (a = {
                    context: a,
                    memoizedValue: b,
                    next: null
                }, null === Og) {
                    if (null === Ng) throw Error(p(308));
                    Og = a, Ng.dependencies = {
                        lanes: 0,
                        firstContext: a
                    };
                } else Og = Og.next = a;
                return b;
            }
            var Wg = null;
            function Xg(a) {
                null === Wg ? Wg = [ a ] : Wg.push(a);
            }
            function Yg(a, b, c, d) {
                var e = b.interleaved;
                return null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c), b.interleaved = c, 
                Zg(a, d);
            }
            function Zg(a, b) {
                a.lanes |= b;
                var c = a.alternate;
                for (null !== c && (c.lanes |= b), c = a, a = a["return"]; null !== a; ) a.childLanes |= b, 
                null !== (c = a.alternate) && (c.childLanes |= b), c = a, a = a["return"];
                return 3 === c.tag ? c.stateNode : null;
            }
            var $g = !1;
            function ah(a) {
                a.updateQueue = {
                    baseState: a.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                };
            }
            function bh(a, b) {
                a = a.updateQueue, b.updateQueue === a && (b.updateQueue = {
                    baseState: a.baseState,
                    firstBaseUpdate: a.firstBaseUpdate,
                    lastBaseUpdate: a.lastBaseUpdate,
                    shared: a.shared,
                    effects: a.effects
                });
            }
            function ch(a, b) {
                return {
                    eventTime: a,
                    lane: b,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                };
            }
            function dh(a, b, c) {
                var d = a.updateQueue;
                if (null === d) return null;
                if (d = d.shared, 0 != (2 & K)) {
                    var e = d.pending;
                    return null === e ? b.next = b : (b.next = e.next, e.next = b), d.pending = b, Zg(a, c);
                }
                return null === (e = d.interleaved) ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b), 
                d.interleaved = b, Zg(a, c);
            }
            function eh(a, b, c) {
                if (null !== (b = b.updateQueue) && (b = b.shared, 0 != (4194240 & c))) {
                    var d = b.lanes;
                    c |= d &= a.pendingLanes, b.lanes = c, Cc(a, c);
                }
            }
            function fh(a, b) {
                var c = a.updateQueue, d = a.alternate;
                if (null !== d && c === (d = d.updateQueue)) {
                    var e = null, f = null;
                    if (null !== (c = c.firstBaseUpdate)) {
                        do {
                            var g = {
                                eventTime: c.eventTime,
                                lane: c.lane,
                                tag: c.tag,
                                payload: c.payload,
                                callback: c.callback,
                                next: null
                            };
                            null === f ? e = f = g : f = f.next = g, c = c.next;
                        } while (null !== c);
                        null === f ? e = f = b : f = f.next = b;
                    } else e = f = b;
                    return c = {
                        baseState: d.baseState,
                        firstBaseUpdate: e,
                        lastBaseUpdate: f,
                        shared: d.shared,
                        effects: d.effects
                    }, void (a.updateQueue = c);
                }
                null === (a = c.lastBaseUpdate) ? c.firstBaseUpdate = b : a.next = b, c.lastBaseUpdate = b;
            }
            function gh(a, b, c, d) {
                var e = a.updateQueue;
                $g = !1;
                var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
                if (null !== h) {
                    e.shared.pending = null;
                    var k = h, l = k.next;
                    k.next = null, null === g ? f = l : g.next = l, g = k;
                    var m = a.alternate;
                    null !== m && ((h = (m = m.updateQueue).lastBaseUpdate) !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, 
                    m.lastBaseUpdate = k));
                }
                if (null !== f) {
                    var q = e.baseState;
                    for (g = 0, m = l = k = null, h = f; ;) {
                        var r = h.lane, y = h.eventTime;
                        if ((d & r) === r) {
                            null !== m && (m = m.next = {
                                eventTime: y,
                                lane: 0,
                                tag: h.tag,
                                payload: h.payload,
                                callback: h.callback,
                                next: null
                            });
                            a: {
                                var n = a, t = h;
                                switch (r = b, y = c, t.tag) {
                                  case 1:
                                    if ("function" == typeof (n = t.payload)) {
                                        q = n.call(y, q, r);
                                        break a;
                                    }
                                    q = n;
                                    break a;

                                  case 3:
                                    n.flags = -65537 & n.flags | 128;

                                  case 0:
                                    if (null == (r = "function" == typeof (n = t.payload) ? n.call(y, q, r) : n)) break a;
                                    q = A({}, q, r);
                                    break a;

                                  case 2:
                                    $g = !0;
                                }
                            }
                            null !== h.callback && 0 !== h.lane && (a.flags |= 64, null === (r = e.effects) ? e.effects = [ h ] : r.push(h));
                        } else y = {
                            eventTime: y,
                            lane: r,
                            tag: h.tag,
                            payload: h.payload,
                            callback: h.callback,
                            next: null
                        }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
                        if (null === (h = h.next)) {
                            if (null === (h = e.shared.pending)) break;
                            h = (r = h).next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
                        }
                    }
                    if (null === m && (k = q), e.baseState = k, e.firstBaseUpdate = l, e.lastBaseUpdate = m, 
                    null !== (b = e.shared.interleaved)) {
                        e = b;
                        do {
                            g |= e.lane, e = e.next;
                        } while (e !== b);
                    } else null === f && (e.shared.lanes = 0);
                    hh |= g, a.lanes = g, a.memoizedState = q;
                }
            }
            function ih(a, b, c) {
                if (a = b.effects, b.effects = null, null !== a) for (b = 0; b < a.length; b++) {
                    var d = a[b], e = d.callback;
                    if (null !== e) {
                        if (d.callback = null, d = c, "function" != typeof e) throw Error(p(191, e));
                        e.call(d);
                    }
                }
            }
            var jh = (new aa.Component).refs;
            function kh(a, b, c, d) {
                c = null == (c = c(d, b = a.memoizedState)) ? b : A({}, b, c), a.memoizedState = c, 
                0 === a.lanes && (a.updateQueue.baseState = c);
            }
            var nh = {
                isMounted: function(a) {
                    return !!(a = a._reactInternals) && Vb(a) === a;
                },
                enqueueSetState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = L(), e = lh(a), f = ch(d, e);
                    f.payload = b, null != c && (f.callback = c), null !== (b = dh(a, f, e)) && (mh(b, a, e, d), 
                    eh(b, a, e));
                },
                enqueueReplaceState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = L(), e = lh(a), f = ch(d, e);
                    f.tag = 1, f.payload = b, null != c && (f.callback = c), null !== (b = dh(a, f, e)) && (mh(b, a, e, d), 
                    eh(b, a, e));
                },
                enqueueForceUpdate: function(a, b) {
                    a = a._reactInternals;
                    var c = L(), d = lh(a), e = ch(c, d);
                    e.tag = 2, null != b && (e.callback = b), null !== (b = dh(a, e, d)) && (mh(b, a, d, c), 
                    eh(b, a, d));
                }
            };
            function oh(a, b, c, d, e, f, g) {
                return "function" == typeof (a = a.stateNode).shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : !b.prototype || !b.prototype.isPureReactComponent || (!Ie(c, d) || !Ie(e, f));
            }
            function ph(a, b, c) {
                var d = !1, e = Vf, f = b.contextType;
                return "object" == typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, 
                f = (d = null != (d = b.contextTypes)) ? Yf(a, e) : Vf), b = new b(c, f), a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null, 
                b.updater = nh, a.stateNode = b, b._reactInternals = a, d && ((a = a.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, 
                a.__reactInternalMemoizedMaskedChildContext = f), b;
            }
            function qh(a, b, c, d) {
                a = b.state, "function" == typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d), 
                "function" == typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d), 
                b.state !== a && nh.enqueueReplaceState(b, b.state, null);
            }
            function rh(a, b, c, d) {
                var e = a.stateNode;
                e.props = c, e.state = a.memoizedState, e.refs = jh, ah(a);
                var f = b.contextType;
                "object" == typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, 
                e.context = Yf(a, f)), e.state = a.memoizedState, "function" == typeof (f = b.getDerivedStateFromProps) && (kh(a, b, f, c), 
                e.state = a.memoizedState), "function" == typeof b.getDerivedStateFromProps || "function" == typeof e.getSnapshotBeforeUpdate || "function" != typeof e.UNSAFE_componentWillMount && "function" != typeof e.componentWillMount || (b = e.state, 
                "function" == typeof e.componentWillMount && e.componentWillMount(), "function" == typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), 
                b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState), 
                "function" == typeof e.componentDidMount && (a.flags |= 4194308);
            }
            function sh(a, b, c) {
                if (null !== (a = c.ref) && "function" != typeof a && "object" != typeof a) {
                    if (c._owner) {
                        if (c = c._owner) {
                            if (1 !== c.tag) throw Error(p(309));
                            var d = c.stateNode;
                        }
                        if (!d) throw Error(p(147, a));
                        var e = d, f = "" + a;
                        return null !== b && null !== b.ref && "function" == typeof b.ref && b.ref._stringRef === f ? b.ref : (b = function(a) {
                            var b = e.refs;
                            b === jh && (b = e.refs = {}), null === a ? delete b[f] : b[f] = a;
                        }, b._stringRef = f, b);
                    }
                    if ("string" != typeof a) throw Error(p(284));
                    if (!c._owner) throw Error(p(290, a));
                }
                return a;
            }
            function th(a, b) {
                throw a = Object.prototype.toString.call(b), Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
            }
            function uh(a) {
                return (0, a._init)(a._payload);
            }
            function vh(a) {
                function b(b, c) {
                    if (a) {
                        var d = b.deletions;
                        null === d ? (b.deletions = [ c ], b.flags |= 16) : d.push(c);
                    }
                }
                function c(c, d) {
                    if (!a) return null;
                    for (;null !== d; ) b(c, d), d = d.sibling;
                    return null;
                }
                function d(a, b) {
                    for (a = new Map; null !== b; ) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), 
                    b = b.sibling;
                    return a;
                }
                function e(a, b) {
                    return (a = wh(a, b)).index = 0, a.sibling = null, a;
                }
                function f(b, c, d) {
                    return b.index = d, a ? null !== (d = b.alternate) ? (d = d.index) < c ? (b.flags |= 2, 
                    c) : d : (b.flags |= 2, c) : (b.flags |= 1048576, c);
                }
                function g(b) {
                    return a && null === b.alternate && (b.flags |= 2), b;
                }
                function h(a, b, c, d) {
                    return null === b || 6 !== b.tag ? ((b = xh(c, a.mode, d))["return"] = a, b) : ((b = e(b, c))["return"] = a, 
                    b);
                }
                function k(a, b, c, d) {
                    var f = c.type;
                    return f === ya ? m(a, b, c.props.children, d, c.key) : null !== b && (b.elementType === f || "object" == typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type) ? ((d = e(b, c.props)).ref = sh(a, b, c), 
                    d["return"] = a, d) : ((d = yh(c.type, c.key, c.props, null, a.mode, d)).ref = sh(a, b, c), 
                    d["return"] = a, d);
                }
                function l(a, b, c, d) {
                    return null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation ? ((b = zh(c, a.mode, d))["return"] = a, 
                    b) : ((b = e(b, c.children || []))["return"] = a, b);
                }
                function m(a, b, c, d, f) {
                    return null === b || 7 !== b.tag ? ((b = Ah(c, a.mode, d, f))["return"] = a, b) : ((b = e(b, c))["return"] = a, 
                    b);
                }
                function q(a, b, c) {
                    if ("string" == typeof b && "" !== b || "number" == typeof b) return (b = xh("" + b, a.mode, c))["return"] = a, 
                    b;
                    if ("object" == typeof b && null !== b) {
                        switch (b.$$typeof) {
                          case va:
                            return (c = yh(b.type, b.key, b.props, null, a.mode, c)).ref = sh(a, null, b), c["return"] = a, 
                            c;

                          case wa:
                            return (b = zh(b, a.mode, c))["return"] = a, b;

                          case Ha:
                            return q(a, (0, b._init)(b._payload), c);
                        }
                        if (eb(b) || Ka(b)) return (b = Ah(b, a.mode, c, null))["return"] = a, b;
                        th(a, b);
                    }
                    return null;
                }
                function r(a, b, c, d) {
                    var e = null !== b ? b.key : null;
                    if ("string" == typeof c && "" !== c || "number" == typeof c) return null !== e ? null : h(a, b, "" + c, d);
                    if ("object" == typeof c && null !== c) {
                        switch (c.$$typeof) {
                          case va:
                            return c.key === e ? k(a, b, c, d) : null;

                          case wa:
                            return c.key === e ? l(a, b, c, d) : null;

                          case Ha:
                            return r(a, b, (e = c._init)(c._payload), d);
                        }
                        if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
                        th(a, c);
                    }
                    return null;
                }
                function y(a, b, c, d, e) {
                    if ("string" == typeof d && "" !== d || "number" == typeof d) return h(b, a = a.get(c) || null, "" + d, e);
                    if ("object" == typeof d && null !== d) {
                        switch (d.$$typeof) {
                          case va:
                            return k(b, a = a.get(null === d.key ? c : d.key) || null, d, e);

                          case wa:
                            return l(b, a = a.get(null === d.key ? c : d.key) || null, d, e);

                          case Ha:
                            return y(a, b, c, (0, d._init)(d._payload), e);
                        }
                        if (eb(d) || Ka(d)) return m(b, a = a.get(c) || null, d, e, null);
                        th(b, d);
                    }
                    return null;
                }
                function n(e, g, h, k) {
                    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
                        u.index > w ? (x = u, u = null) : x = u.sibling;
                        var n = r(e, u, h[w], k);
                        if (null === n) {
                            null === u && (u = x);
                            break;
                        }
                        a && u && null === n.alternate && b(e, u), g = f(n, g, w), null === m ? l = n : m.sibling = n, 
                        m = n, u = x;
                    }
                    if (w === h.length) return c(e, u), I && tg(e, w), l;
                    if (null === u) {
                        for (;w < h.length; w++) null !== (u = q(e, h[w], k)) && (g = f(u, g, w), null === m ? l = u : m.sibling = u, 
                        m = u);
                        return I && tg(e, w), l;
                    }
                    for (u = d(e, u); w < h.length; w++) null !== (x = y(u, e, w, h[w], k)) && (a && null !== x.alternate && u["delete"](null === x.key ? w : x.key), 
                    g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
                    return a && u.forEach((function(a) {
                        return b(e, a);
                    })), I && tg(e, w), l;
                }
                function t(e, g, h, k) {
                    var l = Ka(h);
                    if ("function" != typeof l) throw Error(p(150));
                    if (null == (h = l.call(h))) throw Error(p(151));
                    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, 
                    n = h.next()) {
                        m.index > w ? (x = m, m = null) : x = m.sibling;
                        var t = r(e, m, n.value, k);
                        if (null === t) {
                            null === m && (m = x);
                            break;
                        }
                        a && m && null === t.alternate && b(e, m), g = f(t, g, w), null === u ? l = t : u.sibling = t, 
                        u = t, m = x;
                    }
                    if (n.done) return c(e, m), I && tg(e, w), l;
                    if (null === m) {
                        for (;!n.done; w++, n = h.next()) null !== (n = q(e, n.value, k)) && (g = f(n, g, w), 
                        null === u ? l = n : u.sibling = n, u = n);
                        return I && tg(e, w), l;
                    }
                    for (m = d(e, m); !n.done; w++, n = h.next()) null !== (n = y(m, e, w, n.value, k)) && (a && null !== n.alternate && m["delete"](null === n.key ? w : n.key), 
                    g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
                    return a && m.forEach((function(a) {
                        return b(e, a);
                    })), I && tg(e, w), l;
                }
                return function J(a, d, f, h) {
                    if ("object" == typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children), 
                    "object" == typeof f && null !== f) {
                        switch (f.$$typeof) {
                          case va:
                            a: {
                                for (var k = f.key, l = d; null !== l; ) {
                                    if (l.key === k) {
                                        if ((k = f.type) === ya) {
                                            if (7 === l.tag) {
                                                c(a, l.sibling), (d = e(l, f.props.children))["return"] = a, a = d;
                                                break a;
                                            }
                                        } else if (l.elementType === k || "object" == typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
                                            c(a, l.sibling), (d = e(l, f.props)).ref = sh(a, l, f), d["return"] = a, a = d;
                                            break a;
                                        }
                                        c(a, l);
                                        break;
                                    }
                                    b(a, l), l = l.sibling;
                                }
                                f.type === ya ? ((d = Ah(f.props.children, a.mode, h, f.key))["return"] = a, a = d) : ((h = yh(f.type, f.key, f.props, null, a.mode, h)).ref = sh(a, d, f), 
                                h["return"] = a, a = h);
                            }
                            return g(a);

                          case wa:
                            a: {
                                for (l = f.key; null !== d; ) {
                                    if (d.key === l) {
                                        if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                            c(a, d.sibling), (d = e(d, f.children || []))["return"] = a, a = d;
                                            break a;
                                        }
                                        c(a, d);
                                        break;
                                    }
                                    b(a, d), d = d.sibling;
                                }
                                (d = zh(f, a.mode, h))["return"] = a, a = d;
                            }
                            return g(a);

                          case Ha:
                            return J(a, d, (l = f._init)(f._payload), h);
                        }
                        if (eb(f)) return n(a, d, f, h);
                        if (Ka(f)) return t(a, d, f, h);
                        th(a, f);
                    }
                    return "string" == typeof f && "" !== f || "number" == typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), 
                    (d = e(d, f))["return"] = a, a = d) : (c(a, d), (d = xh(f, a.mode, h))["return"] = a, 
                    a = d), g(a)) : c(a, d);
                };
            }
            var Bh = vh(!0), Ch = vh(!1), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
            function Hh(a) {
                if (a === Dh) throw Error(p(174));
                return a;
            }
            function Ih(a, b) {
                switch (G(Gh, b), G(Fh, a), G(Eh, Dh), a = b.nodeType) {
                  case 9:
                  case 11:
                    b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
                    break;

                  default:
                    b = lb(b = (a = 8 === a ? b.parentNode : b).namespaceURI || null, a = a.tagName);
                }
                E(Eh), G(Eh, b);
            }
            function Jh() {
                E(Eh), E(Fh), E(Gh);
            }
            function Kh(a) {
                Hh(Gh.current);
                var b = Hh(Eh.current), c = lb(b, a.type);
                b !== c && (G(Fh, a), G(Eh, c));
            }
            function Lh(a) {
                Fh.current === a && (E(Eh), E(Fh));
            }
            var M = Uf(0);
            function Mh(a) {
                for (var b = a; null !== b; ) {
                    if (13 === b.tag) {
                        var c = b.memoizedState;
                        if (null !== c && (null === (c = c.dehydrated) || "$?" === c.data || "$!" === c.data)) return b;
                    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                        if (0 != (128 & b.flags)) return b;
                    } else if (null !== b.child) {
                        b.child["return"] = b, b = b.child;
                        continue;
                    }
                    if (b === a) break;
                    for (;null === b.sibling; ) {
                        if (null === b["return"] || b["return"] === a) return null;
                        b = b["return"];
                    }
                    b.sibling["return"] = b["return"], b = b.sibling;
                }
                return null;
            }
            var Nh = [];
            function Oh() {
                for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
                Nh.length = 0;
            }
            var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = !1, Th = !1, Uh = 0, Vh = 0;
            function Q() {
                throw Error(p(321));
            }
            function Wh(a, b) {
                if (null === b) return !1;
                for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
                return !0;
            }
            function Xh(a, b, c, d, e, f) {
                if (Rh = f, N = b, b.memoizedState = null, b.updateQueue = null, b.lanes = 0, Ph.current = null === a || null === a.memoizedState ? Yh : Zh, 
                a = c(d, e), Th) {
                    f = 0;
                    do {
                        if (Th = !1, Uh = 0, 25 <= f) throw Error(p(301));
                        f += 1, P = O = null, b.updateQueue = null, Ph.current = $h, a = c(d, e);
                    } while (Th);
                }
                if (Ph.current = ai, b = null !== O && null !== O.next, Rh = 0, P = O = N = null, 
                Sh = !1, b) throw Error(p(300));
                return a;
            }
            function bi() {
                var a = 0 !== Uh;
                return Uh = 0, a;
            }
            function ci() {
                var a = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === P ? N.memoizedState = P = a : P = P.next = a, P;
            }
            function di() {
                if (null === O) {
                    var a = N.alternate;
                    a = null !== a ? a.memoizedState : null;
                } else a = O.next;
                var b = null === P ? N.memoizedState : P.next;
                if (null !== b) P = b, O = a; else {
                    if (null === a) throw Error(p(310));
                    a = {
                        memoizedState: (O = a).memoizedState,
                        baseState: O.baseState,
                        baseQueue: O.baseQueue,
                        queue: O.queue,
                        next: null
                    }, null === P ? N.memoizedState = P = a : P = P.next = a;
                }
                return P;
            }
            function ei(a, b) {
                return "function" == typeof b ? b(a) : b;
            }
            function fi(a) {
                var b = di(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = O, e = d.baseQueue, f = c.pending;
                if (null !== f) {
                    if (null !== e) {
                        var g = e.next;
                        e.next = f.next, f.next = g;
                    }
                    d.baseQueue = e = f, c.pending = null;
                }
                if (null !== e) {
                    f = e.next, d = d.baseState;
                    var h = g = null, k = null, l = f;
                    do {
                        var m = l.lane;
                        if ((Rh & m) === m) null !== k && (k = k.next = {
                            lane: 0,
                            action: l.action,
                            hasEagerState: l.hasEagerState,
                            eagerState: l.eagerState,
                            next: null
                        }), d = l.hasEagerState ? l.eagerState : a(d, l.action); else {
                            var q = {
                                lane: m,
                                action: l.action,
                                hasEagerState: l.hasEagerState,
                                eagerState: l.eagerState,
                                next: null
                            };
                            null === k ? (h = k = q, g = d) : k = k.next = q, N.lanes |= m, hh |= m;
                        }
                        l = l.next;
                    } while (null !== l && l !== f);
                    null === k ? g = d : k.next = h, He(d, b.memoizedState) || (Ug = !0), b.memoizedState = d, 
                    b.baseState = g, b.baseQueue = k, c.lastRenderedState = d;
                }
                if (null !== (a = c.interleaved)) {
                    e = a;
                    do {
                        f = e.lane, N.lanes |= f, hh |= f, e = e.next;
                    } while (e !== a);
                } else null === e && (c.lanes = 0);
                return [ b.memoizedState, c.dispatch ];
            }
            function gi(a) {
                var b = di(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = c.dispatch, e = c.pending, f = b.memoizedState;
                if (null !== e) {
                    c.pending = null;
                    var g = e = e.next;
                    do {
                        f = a(f, g.action), g = g.next;
                    } while (g !== e);
                    He(f, b.memoizedState) || (Ug = !0), b.memoizedState = f, null === b.baseQueue && (b.baseState = f), 
                    c.lastRenderedState = f;
                }
                return [ f, d ];
            }
            function hi() {}
            function ii(a, b) {
                var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
                if (f && (d.memoizedState = e, Ug = !0), d = d.queue, ji(ki.bind(null, c, d, a), [ a ]), 
                d.getSnapshot !== b || f || null !== P && 1 & P.memoizedState.tag) {
                    if (c.flags |= 2048, li(9, mi.bind(null, c, d, e, b), void 0, null), null === R) throw Error(p(349));
                    0 != (30 & Rh) || ni(c, b, e);
                }
                return e;
            }
            function ni(a, b, c) {
                a.flags |= 16384, a = {
                    getSnapshot: b,
                    value: c
                }, null === (b = N.updateQueue) ? (b = {
                    lastEffect: null,
                    stores: null
                }, N.updateQueue = b, b.stores = [ a ]) : null === (c = b.stores) ? b.stores = [ a ] : c.push(a);
            }
            function mi(a, b, c, d) {
                b.value = c, b.getSnapshot = d, oi(b) && pi(a);
            }
            function ki(a, b, c) {
                return c((function() {
                    oi(b) && pi(a);
                }));
            }
            function oi(a) {
                var b = a.getSnapshot;
                a = a.value;
                try {
                    var c = b();
                    return !He(a, c);
                } catch (d) {
                    return !0;
                }
            }
            function pi(a) {
                var b = Zg(a, 1);
                null !== b && mh(b, a, 1, -1);
            }
            function qi(a) {
                var b = ci();
                return "function" == typeof a && (a = a()), b.memoizedState = b.baseState = a, a = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: ei,
                    lastRenderedState: a
                }, b.queue = a, a = a.dispatch = ri.bind(null, N, a), [ b.memoizedState, a ];
            }
            function li(a, b, c, d) {
                return a = {
                    tag: a,
                    create: b,
                    destroy: c,
                    deps: d,
                    next: null
                }, null === (b = N.updateQueue) ? (b = {
                    lastEffect: null,
                    stores: null
                }, N.updateQueue = b, b.lastEffect = a.next = a) : null === (c = b.lastEffect) ? b.lastEffect = a.next = a : (d = c.next, 
                c.next = a, a.next = d, b.lastEffect = a), a;
            }
            function si() {
                return di().memoizedState;
            }
            function ti(a, b, c, d) {
                var e = ci();
                N.flags |= a, e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
            }
            function ui(a, b, c, d) {
                var e = di();
                d = void 0 === d ? null : d;
                var f = void 0;
                if (null !== O) {
                    var g = O.memoizedState;
                    if (f = g.destroy, null !== d && Wh(d, g.deps)) return void (e.memoizedState = li(b, c, f, d));
                }
                N.flags |= a, e.memoizedState = li(1 | b, c, f, d);
            }
            function vi(a, b) {
                return ti(8390656, 8, a, b);
            }
            function ji(a, b) {
                return ui(2048, 8, a, b);
            }
            function wi(a, b) {
                return ui(4, 2, a, b);
            }
            function xi(a, b) {
                return ui(4, 4, a, b);
            }
            function yi(a, b) {
                return "function" == typeof b ? (a = a(), b(a), function() {
                    b(null);
                }) : null != b ? (a = a(), b.current = a, function() {
                    b.current = null;
                }) : void 0;
            }
            function zi(a, b, c) {
                return c = null != c ? c.concat([ a ]) : null, ui(4, 4, yi.bind(null, b, a), c);
            }
            function Ai() {}
            function Bi(a, b) {
                var c = di();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                return null !== d && null !== b && Wh(b, d[1]) ? d[0] : (c.memoizedState = [ a, b ], 
                a);
            }
            function Ci(a, b) {
                var c = di();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                return null !== d && null !== b && Wh(b, d[1]) ? d[0] : (a = a(), c.memoizedState = [ a, b ], 
                a);
            }
            function Di(a, b, c) {
                return 0 == (21 & Rh) ? (a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c) : (He(c, b) || (c = yc(), 
                N.lanes |= c, hh |= c, a.baseState = !0), b);
            }
            function Ei(a, b) {
                var c = C;
                C = 0 !== c && 4 > c ? c : 4, a(!0);
                var d = Qh.transition;
                Qh.transition = {};
                try {
                    a(!1), b();
                } finally {
                    C = c, Qh.transition = d;
                }
            }
            function Fi() {
                return di().memoizedState;
            }
            function Gi(a, b, c) {
                var d = lh(a);
                if (c = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Hi(a)) Ii(b, c); else if (null !== (c = Yg(a, b, c, d))) {
                    mh(c, a, d, L()), Ji(c, b, d);
                }
            }
            function ri(a, b, c) {
                var d = lh(a), e = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (Hi(a)) Ii(b, e); else {
                    var f = a.alternate;
                    if (0 === a.lanes && (null === f || 0 === f.lanes) && null !== (f = b.lastRenderedReducer)) try {
                        var g = b.lastRenderedState, h = f(g, c);
                        if (e.hasEagerState = !0, e.eagerState = h, He(h, g)) {
                            var k = b.interleaved;
                            return null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e), void (b.interleaved = e);
                        }
                    } catch (l) {}
                    null !== (c = Yg(a, b, e, d)) && (mh(c, a, d, e = L()), Ji(c, b, d));
                }
            }
            function Hi(a) {
                var b = a.alternate;
                return a === N || null !== b && b === N;
            }
            function Ii(a, b) {
                Th = Sh = !0;
                var c = a.pending;
                null === c ? b.next = b : (b.next = c.next, c.next = b), a.pending = b;
            }
            function Ji(a, b, c) {
                if (0 != (4194240 & c)) {
                    var d = b.lanes;
                    c |= d &= a.pendingLanes, b.lanes = c, Cc(a, c);
                }
            }
            var ai = {
                readContext: Vg,
                useCallback: Q,
                useContext: Q,
                useEffect: Q,
                useImperativeHandle: Q,
                useInsertionEffect: Q,
                useLayoutEffect: Q,
                useMemo: Q,
                useReducer: Q,
                useRef: Q,
                useState: Q,
                useDebugValue: Q,
                useDeferredValue: Q,
                useTransition: Q,
                useMutableSource: Q,
                useSyncExternalStore: Q,
                useId: Q,
                unstable_isNewReconciler: !1
            }, Yh = {
                readContext: Vg,
                useCallback: function(a, b) {
                    return ci().memoizedState = [ a, void 0 === b ? null : b ], a;
                },
                useContext: Vg,
                useEffect: vi,
                useImperativeHandle: function(a, b, c) {
                    return c = null != c ? c.concat([ a ]) : null, ti(4194308, 4, yi.bind(null, b, a), c);
                },
                useLayoutEffect: function(a, b) {
                    return ti(4194308, 4, a, b);
                },
                useInsertionEffect: function(a, b) {
                    return ti(4, 2, a, b);
                },
                useMemo: function(a, b) {
                    var c = ci();
                    return b = void 0 === b ? null : b, a = a(), c.memoizedState = [ a, b ], a;
                },
                useReducer: function(a, b, c) {
                    var d = ci();
                    return b = void 0 !== c ? c(b) : b, d.memoizedState = d.baseState = b, a = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: a,
                        lastRenderedState: b
                    }, d.queue = a, a = a.dispatch = Gi.bind(null, N, a), [ d.memoizedState, a ];
                },
                useRef: function(a) {
                    return a = {
                        current: a
                    }, ci().memoizedState = a;
                },
                useState: qi,
                useDebugValue: Ai,
                useDeferredValue: function(a) {
                    return ci().memoizedState = a;
                },
                useTransition: function() {
                    var a = qi(!1), b = a[0];
                    return a = Ei.bind(null, a[1]), ci().memoizedState = a, [ b, a ];
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(a, b, c) {
                    var d = N, e = ci();
                    if (I) {
                        if (void 0 === c) throw Error(p(407));
                        c = c();
                    } else {
                        if (c = b(), null === R) throw Error(p(349));
                        0 != (30 & Rh) || ni(d, b, c);
                    }
                    e.memoizedState = c;
                    var f = {
                        value: c,
                        getSnapshot: b
                    };
                    return e.queue = f, vi(ki.bind(null, d, f, a), [ a ]), d.flags |= 2048, li(9, mi.bind(null, d, f, c, b), void 0, null), 
                    c;
                },
                useId: function() {
                    var a = ci(), b = R.identifierPrefix;
                    if (I) {
                        var c = sg;
                        b = ":" + b + "R" + (c = (rg & ~(1 << 32 - oc(rg) - 1)).toString(32) + c), 0 < (c = Uh++) && (b += "H" + c.toString(32)), 
                        b += ":";
                    } else b = ":" + b + "r" + (c = Vh++).toString(32) + ":";
                    return a.memoizedState = b;
                },
                unstable_isNewReconciler: !1
            }, Zh = {
                readContext: Vg,
                useCallback: Bi,
                useContext: Vg,
                useEffect: ji,
                useImperativeHandle: zi,
                useInsertionEffect: wi,
                useLayoutEffect: xi,
                useMemo: Ci,
                useReducer: fi,
                useRef: si,
                useState: function() {
                    return fi(ei);
                },
                useDebugValue: Ai,
                useDeferredValue: function(a) {
                    return Di(di(), O.memoizedState, a);
                },
                useTransition: function() {
                    return [ fi(ei)[0], di().memoizedState ];
                },
                useMutableSource: hi,
                useSyncExternalStore: ii,
                useId: Fi,
                unstable_isNewReconciler: !1
            }, $h = {
                readContext: Vg,
                useCallback: Bi,
                useContext: Vg,
                useEffect: ji,
                useImperativeHandle: zi,
                useInsertionEffect: wi,
                useLayoutEffect: xi,
                useMemo: Ci,
                useReducer: gi,
                useRef: si,
                useState: function() {
                    return gi(ei);
                },
                useDebugValue: Ai,
                useDeferredValue: function(a) {
                    var b = di();
                    return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
                },
                useTransition: function() {
                    return [ gi(ei)[0], di().memoizedState ];
                },
                useMutableSource: hi,
                useSyncExternalStore: ii,
                useId: Fi,
                unstable_isNewReconciler: !1
            };
            function Ki(a, b) {
                try {
                    var c = "", d = b;
                    do {
                        c += Pa(d), d = d["return"];
                    } while (d);
                    var e = c;
                } catch (f) {
                    e = "\nError generating stack: " + f.message + "\n" + f.stack;
                }
                return {
                    value: a,
                    source: b,
                    stack: e,
                    digest: null
                };
            }
            function Li(a, b, c) {
                return {
                    value: a,
                    source: null,
                    stack: null != c ? c : null,
                    digest: null != b ? b : null
                };
            }
            function Mi(a, b) {
                try {
                    console.error(b.value);
                } catch (c) {
                    setTimeout((function() {
                        throw c;
                    }));
                }
            }
            var Ni = "function" == typeof WeakMap ? WeakMap : Map;
            function Oi(a, b, c) {
                (c = ch(-1, c)).tag = 3, c.payload = {
                    element: null
                };
                var d = b.value;
                return c.callback = function() {
                    Pi || (Pi = !0, Qi = d), Mi(0, b);
                }, c;
            }
            function Ri(a, b, c) {
                (c = ch(-1, c)).tag = 3;
                var d = a.type.getDerivedStateFromError;
                if ("function" == typeof d) {
                    var e = b.value;
                    c.payload = function() {
                        return d(e);
                    }, c.callback = function() {
                        Mi(0, b);
                    };
                }
                var f = a.stateNode;
                return null !== f && "function" == typeof f.componentDidCatch && (c.callback = function() {
                    Mi(0, b), "function" != typeof d && (null === Si ? Si = new Set([ this ]) : Si.add(this));
                    var c = b.stack;
                    this.componentDidCatch(b.value, {
                        componentStack: null !== c ? c : ""
                    });
                }), c;
            }
            function Ti(a, b, c) {
                var d = a.pingCache;
                if (null === d) {
                    d = a.pingCache = new Ni;
                    var e = new Set;
                    d.set(b, e);
                } else void 0 === (e = d.get(b)) && (e = new Set, d.set(b, e));
                e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
            }
            function Vi(a) {
                do {
                    var b;
                    if ((b = 13 === a.tag) && (b = null === (b = a.memoizedState) || null !== b.dehydrated), 
                    b) return a;
                    a = a["return"];
                } while (null !== a);
                return null;
            }
            function Wi(a, b, c, d, e) {
                return 0 == (1 & a.mode) ? (a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, 
                c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : ((b = ch(-1, 1)).tag = 2, 
                dh(c, b, 1))), c.lanes |= 1), a) : (a.flags |= 65536, a.lanes = e, a);
            }
            var Xi = ua.ReactCurrentOwner, Ug = !1;
            function Yi(a, b, c, d) {
                b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
            }
            function Zi(a, b, c, d, e) {
                c = c.render;
                var f = b.ref;
                return Tg(b, e), d = Xh(a, b, c, d, f, e), c = bi(), null === a || Ug ? (I && c && vg(b), 
                b.flags |= 1, Yi(a, b, d, e), b.child) : (b.updateQueue = a.updateQueue, b.flags &= -2053, 
                a.lanes &= ~e, $i(a, b, e));
            }
            function aj(a, b, c, d, e) {
                if (null === a) {
                    var f = c.type;
                    return "function" != typeof f || bj(f) || void 0 !== f.defaultProps || null !== c.compare || void 0 !== c.defaultProps ? ((a = yh(c.type, null, d, b, b.mode, e)).ref = b.ref, 
                    a["return"] = b, b.child = a) : (b.tag = 15, b.type = f, cj(a, b, f, d, e));
                }
                if (f = a.child, 0 == (a.lanes & e)) {
                    var g = f.memoizedProps;
                    if ((c = null !== (c = c.compare) ? c : Ie)(g, d) && a.ref === b.ref) return $i(a, b, e);
                }
                return b.flags |= 1, (a = wh(f, d)).ref = b.ref, a["return"] = b, b.child = a;
            }
            function cj(a, b, c, d, e) {
                if (null !== a) {
                    var f = a.memoizedProps;
                    if (Ie(f, d) && a.ref === b.ref) {
                        if (Ug = !1, b.pendingProps = d = f, 0 == (a.lanes & e)) return b.lanes = a.lanes, 
                        $i(a, b, e);
                        0 != (131072 & a.flags) && (Ug = !0);
                    }
                }
                return dj(a, b, c, d, e);
            }
            function ej(a, b, c) {
                var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
                if ("hidden" === d.mode) if (0 == (1 & b.mode)) b.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, G(fj, gj), gj |= c; else {
                    if (0 == (1073741824 & c)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, 
                    b.memoizedState = {
                        baseLanes: a,
                        cachePool: null,
                        transitions: null
                    }, b.updateQueue = null, G(fj, gj), gj |= a, null;
                    b.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, d = null !== f ? f.baseLanes : c, G(fj, gj), gj |= d;
                } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), 
                gj |= d;
                return Yi(a, b, e, c), b.child;
            }
            function hj(a, b) {
                var c = b.ref;
                (null === a && null !== c || null !== a && a.ref !== c) && (b.flags |= 512, b.flags |= 2097152);
            }
            function dj(a, b, c, d, e) {
                var f = Zf(c) ? Xf : H.current;
                return f = Yf(b, f), Tg(b, e), c = Xh(a, b, c, d, f, e), d = bi(), null === a || Ug ? (I && d && vg(b), 
                b.flags |= 1, Yi(a, b, c, e), b.child) : (b.updateQueue = a.updateQueue, b.flags &= -2053, 
                a.lanes &= ~e, $i(a, b, e));
            }
            function ij(a, b, c, d, e) {
                if (Zf(c)) {
                    var f = !0;
                    cg(b);
                } else f = !1;
                if (Tg(b, e), null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0; else if (null === a) {
                    var g = b.stateNode, h = b.memoizedProps;
                    g.props = h;
                    var k = g.context, l = c.contextType;
                    "object" == typeof l && null !== l ? l = Vg(l) : l = Yf(b, l = Zf(c) ? Xf : H.current);
                    var m = c.getDerivedStateFromProps, q = "function" == typeof m || "function" == typeof g.getSnapshotBeforeUpdate;
                    q || "function" != typeof g.UNSAFE_componentWillReceiveProps && "function" != typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l), 
                    $g = !1;
                    var r = b.memoizedState;
                    g.state = r, gh(b, d, g, e), k = b.memoizedState, h !== d || r !== k || Wf.current || $g ? ("function" == typeof m && (kh(b, c, m, d), 
                    k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" != typeof g.UNSAFE_componentWillMount && "function" != typeof g.componentWillMount || ("function" == typeof g.componentWillMount && g.componentWillMount(), 
                    "function" == typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), 
                    "function" == typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" == typeof g.componentDidMount && (b.flags |= 4194308), 
                    b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, 
                    d = h) : ("function" == typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
                } else {
                    g = b.stateNode, bh(a, b), h = b.memoizedProps, l = b.type === b.elementType ? h : Lg(b.type, h), 
                    g.props = l, q = b.pendingProps, r = g.context, "object" == typeof (k = c.contextType) && null !== k ? k = Vg(k) : k = Yf(b, k = Zf(c) ? Xf : H.current);
                    var y = c.getDerivedStateFromProps;
                    (m = "function" == typeof y || "function" == typeof g.getSnapshotBeforeUpdate) || "function" != typeof g.UNSAFE_componentWillReceiveProps && "function" != typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k), 
                    $g = !1, r = b.memoizedState, g.state = r, gh(b, d, g, e);
                    var n = b.memoizedState;
                    h !== q || r !== n || Wf.current || $g ? ("function" == typeof y && (kh(b, c, y, d), 
                    n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" != typeof g.UNSAFE_componentWillUpdate && "function" != typeof g.componentWillUpdate || ("function" == typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), 
                    "function" == typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), 
                    "function" == typeof g.componentDidUpdate && (b.flags |= 4), "function" == typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" != typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" != typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, 
                    d = l) : ("function" != typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" != typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    d = !1);
                }
                return kj(a, b, c, d, f, e);
            }
            function kj(a, b, c, d, e, f) {
                hj(a, b);
                var g = 0 != (128 & b.flags);
                if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
                d = b.stateNode, Xi.current = b;
                var h = g && "function" != typeof c.getDerivedStateFromError ? null : d.render();
                return b.flags |= 1, null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f), 
                b.memoizedState = d.state, e && dg(b, c, !0), b.child;
            }
            function lj(a) {
                var b = a.stateNode;
                b.pendingContext ? ag(0, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(0, b.context, !1), 
                Ih(a, b.containerInfo);
            }
            function mj(a, b, c, d, e) {
                return Ig(), Jg(e), b.flags |= 256, Yi(a, b, c, d), b.child;
            }
            var Aj, Bj, Cj, Dj, nj = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function oj(a) {
                return {
                    baseLanes: a,
                    cachePool: null,
                    transitions: null
                };
            }
            function pj(a, b, c) {
                var h, d = b.pendingProps, e = M.current, f = !1, g = 0 != (128 & b.flags);
                if ((h = g) || (h = (null === a || null !== a.memoizedState) && 0 != (2 & e)), h ? (f = !0, 
                b.flags &= -129) : null !== a && null === a.memoizedState || (e |= 1), G(M, 1 & e), 
                null === a) return Eg(b), null !== (a = b.memoizedState) && null !== (a = a.dehydrated) ? (0 == (1 & b.mode) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, 
                null) : (g = d.children, a = d.fallback, f ? (d = b.mode, f = b.child, g = {
                    mode: "hidden",
                    children: g
                }, 0 == (1 & d) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), 
                a = Ah(a, d, c, null), f["return"] = b, a["return"] = b, f.sibling = a, b.child = f, 
                b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g));
                if (null !== (e = a.memoizedState) && null !== (h = e.dehydrated)) return function sj(a, b, c, d, e, f, g) {
                    if (c) return 256 & b.flags ? (b.flags &= -257, tj(a, b, g, d = Li(Error(p(422))))) : null !== b.memoizedState ? (b.child = a.child, 
                    b.flags |= 128, null) : (f = d.fallback, e = b.mode, d = qj({
                        mode: "visible",
                        children: d.children
                    }, e, 0, null), (f = Ah(f, e, g, null)).flags |= 2, d["return"] = b, f["return"] = b, 
                    d.sibling = f, b.child = d, 0 != (1 & b.mode) && Bh(b, a.child, null, g), b.child.memoizedState = oj(g), 
                    b.memoizedState = nj, f);
                    if (0 == (1 & b.mode)) return tj(a, b, g, null);
                    if ("$!" === e.data) {
                        if (d = e.nextSibling && e.nextSibling.dataset) var h = d.dgst;
                        return d = h, tj(a, b, g, d = Li(f = Error(p(419)), d, void 0));
                    }
                    if (h = 0 != (g & a.childLanes), Ug || h) {
                        if (null !== (d = R)) {
                            switch (g & -g) {
                              case 4:
                                e = 2;
                                break;

                              case 16:
                                e = 8;
                                break;

                              case 64:
                              case 128:
                              case 256:
                              case 512:
                              case 1024:
                              case 2048:
                              case 4096:
                              case 8192:
                              case 16384:
                              case 32768:
                              case 65536:
                              case 131072:
                              case 262144:
                              case 524288:
                              case 1048576:
                              case 2097152:
                              case 4194304:
                              case 8388608:
                              case 16777216:
                              case 33554432:
                              case 67108864:
                                e = 32;
                                break;

                              case 536870912:
                                e = 268435456;
                                break;

                              default:
                                e = 0;
                            }
                            0 !== (e = 0 != (e & (d.suspendedLanes | g)) ? 0 : e) && e !== f.retryLane && (f.retryLane = e, 
                            Zg(a, e), mh(d, a, e, -1));
                        }
                        return uj(), tj(a, b, g, d = Li(Error(p(421))));
                    }
                    return "$?" === e.data ? (b.flags |= 128, b.child = a.child, b = vj.bind(null, a), 
                    e._reactRetry = b, null) : (a = f.treeContext, yg = Lf(e.nextSibling), xg = b, I = !0, 
                    zg = null, null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, 
                    sg = a.overflow, qg = b), b = rj(b, d.children), b.flags |= 4096, b);
                }(a, b, g, d, h, e, c);
                if (f) {
                    f = d.fallback, g = b.mode, h = (e = a.child).sibling;
                    var k = {
                        mode: "hidden",
                        children: d.children
                    };
                    return 0 == (1 & g) && b.child !== e ? ((d = b.child).childLanes = 0, d.pendingProps = k, 
                    b.deletions = null) : (d = wh(e, k)).subtreeFlags = 14680064 & e.subtreeFlags, null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null)).flags |= 2, 
                    f["return"] = b, d["return"] = b, d.sibling = f, b.child = d, d = f, f = b.child, 
                    g = null === (g = a.child.memoizedState) ? oj(c) : {
                        baseLanes: g.baseLanes | c,
                        cachePool: null,
                        transitions: g.transitions
                    }, f.memoizedState = g, f.childLanes = a.childLanes & ~c, b.memoizedState = nj, 
                    d;
                }
                return a = (f = a.child).sibling, d = wh(f, {
                    mode: "visible",
                    children: d.children
                }), 0 == (1 & b.mode) && (d.lanes = c), d["return"] = b, d.sibling = null, null !== a && (null === (c = b.deletions) ? (b.deletions = [ a ], 
                b.flags |= 16) : c.push(a)), b.child = d, b.memoizedState = null, d;
            }
            function rj(a, b) {
                return (b = qj({
                    mode: "visible",
                    children: b
                }, a.mode, 0, null))["return"] = a, a.child = b;
            }
            function tj(a, b, c, d) {
                return null !== d && Jg(d), Bh(b, a.child, null, c), (a = rj(b, b.pendingProps.children)).flags |= 2, 
                b.memoizedState = null, a;
            }
            function wj(a, b, c) {
                a.lanes |= b;
                var d = a.alternate;
                null !== d && (d.lanes |= b), Sg(a["return"], b, c);
            }
            function xj(a, b, c, d, e) {
                var f = a.memoizedState;
                null === f ? a.memoizedState = {
                    isBackwards: b,
                    rendering: null,
                    renderingStartTime: 0,
                    last: d,
                    tail: c,
                    tailMode: e
                } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, 
                f.tail = c, f.tailMode = e);
            }
            function yj(a, b, c) {
                var d = b.pendingProps, e = d.revealOrder, f = d.tail;
                if (Yi(a, b, d.children, c), 0 != (2 & (d = M.current))) d = 1 & d | 2, b.flags |= 128; else {
                    if (null !== a && 0 != (128 & a.flags)) a: for (a = b.child; null !== a; ) {
                        if (13 === a.tag) null !== a.memoizedState && wj(a, c, b); else if (19 === a.tag) wj(a, c, b); else if (null !== a.child) {
                            a.child["return"] = a, a = a.child;
                            continue;
                        }
                        if (a === b) break a;
                        for (;null === a.sibling; ) {
                            if (null === a["return"] || a["return"] === b) break a;
                            a = a["return"];
                        }
                        a.sibling["return"] = a["return"], a = a.sibling;
                    }
                    d &= 1;
                }
                if (G(M, d), 0 == (1 & b.mode)) b.memoizedState = null; else switch (e) {
                  case "forwards":
                    for (c = b.child, e = null; null !== c; ) null !== (a = c.alternate) && null === Mh(a) && (e = c), 
                    c = c.sibling;
                    null === (c = e) ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null), 
                    xj(b, !1, e, c, f);
                    break;

                  case "backwards":
                    for (c = null, e = b.child, b.child = null; null !== e; ) {
                        if (null !== (a = e.alternate) && null === Mh(a)) {
                            b.child = e;
                            break;
                        }
                        a = e.sibling, e.sibling = c, c = e, e = a;
                    }
                    xj(b, !0, c, null, f);
                    break;

                  case "together":
                    xj(b, !1, null, null, void 0);
                    break;

                  default:
                    b.memoizedState = null;
                }
                return b.child;
            }
            function jj(a, b) {
                0 == (1 & b.mode) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            }
            function $i(a, b, c) {
                if (null !== a && (b.dependencies = a.dependencies), hh |= b.lanes, 0 == (c & b.childLanes)) return null;
                if (null !== a && b.child !== a.child) throw Error(p(153));
                if (null !== b.child) {
                    for (c = wh(a = b.child, a.pendingProps), b.child = c, c["return"] = b; null !== a.sibling; ) a = a.sibling, 
                    (c = c.sibling = wh(a, a.pendingProps))["return"] = b;
                    c.sibling = null;
                }
                return b.child;
            }
            function Ej(a, b) {
                if (!I) switch (a.tailMode) {
                  case "hidden":
                    b = a.tail;
                    for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
                    null === c ? a.tail = null : c.sibling = null;
                    break;

                  case "collapsed":
                    c = a.tail;
                    for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
                    null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
                }
            }
            function S(a) {
                var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
                if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= 14680064 & e.subtreeFlags, 
                d |= 14680064 & e.flags, e["return"] = a, e = e.sibling; else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, 
                d |= e.subtreeFlags, d |= e.flags, e["return"] = a, e = e.sibling;
                return a.subtreeFlags |= d, a.childLanes = c, b;
            }
            function Fj(a, b, c) {
                var d = b.pendingProps;
                switch (wg(b), b.tag) {
                  case 2:
                  case 16:
                  case 15:
                  case 0:
                  case 11:
                  case 7:
                  case 8:
                  case 12:
                  case 9:
                  case 14:
                    return S(b), null;

                  case 1:
                  case 17:
                    return Zf(b.type) && $f(), S(b), null;

                  case 3:
                    return d = b.stateNode, Jh(), E(Wf), E(H), Oh(), d.pendingContext && (d.context = d.pendingContext, 
                    d.pendingContext = null), null !== a && null !== a.child || (Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 == (256 & b.flags) || (b.flags |= 1024, 
                    null !== zg && (Gj(zg), zg = null))), Bj(a, b), S(b), null;

                  case 5:
                    Lh(b);
                    var e = Hh(Gh.current);
                    if (c = b.type, null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, 
                    b.flags |= 2097152); else {
                        if (!d) {
                            if (null === b.stateNode) throw Error(p(166));
                            return S(b), null;
                        }
                        if (a = Hh(Eh.current), Gg(b)) {
                            d = b.stateNode, c = b.type;
                            var f = b.memoizedProps;
                            switch (d[Of] = b, d[Pf] = f, a = 0 != (1 & b.mode), c) {
                              case "dialog":
                                D("cancel", d), D("close", d);
                                break;

                              case "iframe":
                              case "object":
                              case "embed":
                                D("load", d);
                                break;

                              case "video":
                              case "audio":
                                for (e = 0; e < lf.length; e++) D(lf[e], d);
                                break;

                              case "source":
                                D("error", d);
                                break;

                              case "img":
                              case "image":
                              case "link":
                                D("error", d), D("load", d);
                                break;

                              case "details":
                                D("toggle", d);
                                break;

                              case "input":
                                Za(d, f), D("invalid", d);
                                break;

                              case "select":
                                d._wrapperState = {
                                    wasMultiple: !!f.multiple
                                }, D("invalid", d);
                                break;

                              case "textarea":
                                hb(d, f), D("invalid", d);
                            }
                            for (var g in ub(c, f), e = null, f) if (f.hasOwnProperty(g)) {
                                var h = f[g];
                                "children" === g ? "string" == typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", h ]) : "number" == typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", "" + h ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                            }
                            switch (c) {
                              case "input":
                                Va(d), db(d, f, !0);
                                break;

                              case "textarea":
                                Va(d), jb(d);
                                break;

                              case "select":
                              case "option":
                                break;

                              default:
                                "function" == typeof f.onClick && (d.onclick = Bf);
                            }
                            d = e, b.updateQueue = d, null !== d && (b.flags |= 4);
                        } else {
                            g = 9 === e.nodeType ? e : e.ownerDocument, "http://www.w3.org/1999/xhtml" === a && (a = kb(c)), 
                            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? ((a = g.createElement("div")).innerHTML = "<script><\/script>", 
                            a = a.removeChild(a.firstChild)) : "string" == typeof d.is ? a = g.createElement(c, {
                                is: d.is
                            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c), 
                            a[Of] = b, a[Pf] = d, Aj(a, b, !1, !1), b.stateNode = a;
                            a: {
                                switch (g = vb(c, d), c) {
                                  case "dialog":
                                    D("cancel", a), D("close", a), e = d;
                                    break;

                                  case "iframe":
                                  case "object":
                                  case "embed":
                                    D("load", a), e = d;
                                    break;

                                  case "video":
                                  case "audio":
                                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                                    e = d;
                                    break;

                                  case "source":
                                    D("error", a), e = d;
                                    break;

                                  case "img":
                                  case "image":
                                  case "link":
                                    D("error", a), D("load", a), e = d;
                                    break;

                                  case "details":
                                    D("toggle", a), e = d;
                                    break;

                                  case "input":
                                    Za(a, d), e = Ya(a, d), D("invalid", a);
                                    break;

                                  case "option":
                                  default:
                                    e = d;
                                    break;

                                  case "select":
                                    a._wrapperState = {
                                        wasMultiple: !!d.multiple
                                    }, e = A({}, d, {
                                        value: void 0
                                    }), D("invalid", a);
                                    break;

                                  case "textarea":
                                    hb(a, d), e = gb(a, d), D("invalid", a);
                                }
                                for (f in ub(c, e), h = e) if (h.hasOwnProperty(f)) {
                                    var k = h[f];
                                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? null != (k = k ? k.__html : void 0) && nb(a, k) : "children" === f ? "string" == typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" == typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                                }
                                switch (c) {
                                  case "input":
                                    Va(a), db(a, d, !1);
                                    break;

                                  case "textarea":
                                    Va(a), jb(a);
                                    break;

                                  case "option":
                                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                    break;

                                  case "select":
                                    a.multiple = !!d.multiple, null != (f = d.value) ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                    break;

                                  default:
                                    "function" == typeof e.onClick && (a.onclick = Bf);
                                }
                                switch (c) {
                                  case "button":
                                  case "input":
                                  case "select":
                                  case "textarea":
                                    d = !!d.autoFocus;
                                    break a;

                                  case "img":
                                    d = !0;
                                    break a;

                                  default:
                                    d = !1;
                                }
                            }
                            d && (b.flags |= 4);
                        }
                        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
                    }
                    return S(b), null;

                  case 6:
                    if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d); else {
                        if ("string" != typeof d && null === b.stateNode) throw Error(p(166));
                        if (c = Hh(Gh.current), Hh(Eh.current), Gg(b)) {
                            if (d = b.stateNode, c = b.memoizedProps, d[Of] = b, (f = d.nodeValue !== c) && null !== (a = xg)) switch (a.tag) {
                              case 3:
                                Af(d.nodeValue, c, 0 != (1 & a.mode));
                                break;

                              case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 != (1 & a.mode));
                            }
                            f && (b.flags |= 4);
                        } else (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d))[Of] = b, 
                        b.stateNode = d;
                    }
                    return S(b), null;

                  case 13:
                    if (E(M), d = b.memoizedState, null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                        if (I && null !== yg && 0 != (1 & b.mode) && 0 == (128 & b.flags)) Hg(), Ig(), b.flags |= 98560, 
                        f = !1; else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                            if (null === a) {
                                if (!f) throw Error(p(318));
                                if (!(f = null !== (f = b.memoizedState) ? f.dehydrated : null)) throw Error(p(317));
                                f[Of] = b;
                            } else Ig(), 0 == (128 & b.flags) && (b.memoizedState = null), b.flags |= 4;
                            S(b), f = !1;
                        } else null !== zg && (Gj(zg), zg = null), f = !0;
                        if (!f) return 65536 & b.flags ? b : null;
                    }
                    return 0 != (128 & b.flags) ? (b.lanes = c, b) : ((d = null !== d) !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 
                    0 != (1 & b.mode) && (null === a || 0 != (1 & M.current) ? 0 === T && (T = 3) : uj())), 
                    null !== b.updateQueue && (b.flags |= 4), S(b), null);

                  case 4:
                    return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;

                  case 10:
                    return Rg(b.type._context), S(b), null;

                  case 19:
                    if (E(M), null === (f = b.memoizedState)) return S(b), null;
                    if (d = 0 != (128 & b.flags), null === (g = f.rendering)) if (d) Ej(f, !1); else {
                        if (0 !== T || null !== a && 0 != (128 & a.flags)) for (a = b.child; null !== a; ) {
                            if (null !== (g = Mh(a))) {
                                for (b.flags |= 128, Ej(f, !1), null !== (d = g.updateQueue) && (b.updateQueue = d, 
                                b.flags |= 4), b.subtreeFlags = 0, d = c, c = b.child; null !== c; ) a = d, (f = c).flags &= 14680066, 
                                null === (g = f.alternate) ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, 
                                f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, 
                                f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, 
                                f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, 
                                f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                    lanes: a.lanes,
                                    firstContext: a.firstContext
                                }), c = c.sibling;
                                return G(M, 1 & M.current | 2), b.child;
                            }
                            a = a.sibling;
                        }
                        null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
                    } else {
                        if (!d) if (null !== (a = Mh(g))) {
                            if (b.flags |= 128, d = !0, null !== (c = a.updateQueue) && (b.updateQueue = c, 
                            b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), 
                            null;
                        } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, 
                        d = !0, Ej(f, !1), b.lanes = 4194304);
                        f.isBackwards ? (g.sibling = b.child, b.child = g) : (null !== (c = f.last) ? c.sibling = g : b.child = g, 
                        f.last = g);
                    }
                    return null !== f.tail ? (b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), 
                    b.sibling = null, c = M.current, G(M, d ? 1 & c | 2 : 1 & c), b) : (S(b), null);

                  case 22:
                  case 23:
                    return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), 
                    d && 0 != (1 & b.mode) ? 0 != (1073741824 & gj) && (S(b), 6 & b.subtreeFlags && (b.flags |= 8192)) : S(b), 
                    null;

                  case 24:
                  case 25:
                    return null;
                }
                throw Error(p(156, b.tag));
            }
            function Jj(a, b) {
                switch (wg(b), b.tag) {
                  case 1:
                    return Zf(b.type) && $f(), 65536 & (a = b.flags) ? (b.flags = -65537 & a | 128, 
                    b) : null;

                  case 3:
                    return Jh(), E(Wf), E(H), Oh(), 0 != (65536 & (a = b.flags)) && 0 == (128 & a) ? (b.flags = -65537 & a | 128, 
                    b) : null;

                  case 5:
                    return Lh(b), null;

                  case 13:
                    if (E(M), null !== (a = b.memoizedState) && null !== a.dehydrated) {
                        if (null === b.alternate) throw Error(p(340));
                        Ig();
                    }
                    return 65536 & (a = b.flags) ? (b.flags = -65537 & a | 128, b) : null;

                  case 19:
                    return E(M), null;

                  case 4:
                    return Jh(), null;

                  case 10:
                    return Rg(b.type._context), null;

                  case 22:
                  case 23:
                    return Ij(), null;

                  default:
                    return null;
                }
            }
            Aj = function(a, b) {
                for (var c = b.child; null !== c; ) {
                    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
                        c.child["return"] = c, c = c.child;
                        continue;
                    }
                    if (c === b) break;
                    for (;null === c.sibling; ) {
                        if (null === c["return"] || c["return"] === b) return;
                        c = c["return"];
                    }
                    c.sibling["return"] = c["return"], c = c.sibling;
                }
            }, Bj = function() {}, Cj = function(a, b, c, d) {
                var e = a.memoizedProps;
                if (e !== d) {
                    a = b.stateNode, Hh(Eh.current);
                    var g, f = null;
                    switch (c) {
                      case "input":
                        e = Ya(a, e), d = Ya(a, d), f = [];
                        break;

                      case "select":
                        e = A({}, e, {
                            value: void 0
                        }), d = A({}, d, {
                            value: void 0
                        }), f = [];
                        break;

                      case "textarea":
                        e = gb(a, e), d = gb(a, d), f = [];
                        break;

                      default:
                        "function" != typeof e.onClick && "function" == typeof d.onClick && (a.onclick = Bf);
                    }
                    for (l in ub(c, d), c = null, e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
                        var h = e[l];
                        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
                    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
                    for (l in d) {
                        var k = d[l];
                        if (h = null != e ? e[l] : void 0, d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
                            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), 
                            c[g] = "");
                            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                        } else c || (f || (f = []), f.push(l, c)), c = k; else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, 
                        h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" != typeof k && "number" != typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), 
                        f || h === k || (f = [])) : (f = f || []).push(l, k));
                    }
                    c && (f = f || []).push("style", c);
                    var l = f;
                    (b.updateQueue = l) && (b.flags |= 4);
                }
            }, Dj = function(a, b, c, d) {
                c !== d && (b.flags |= 4);
            };
            var Kj = !1, U = !1, Lj = "function" == typeof WeakSet ? WeakSet : Set, V = null;
            function Mj(a, b) {
                var c = a.ref;
                if (null !== c) if ("function" == typeof c) try {
                    c(null);
                } catch (d) {
                    W(a, b, d);
                } else c.current = null;
            }
            function Nj(a, b, c) {
                try {
                    c();
                } catch (d) {
                    W(a, b, d);
                }
            }
            var Oj = !1;
            function Qj(a, b, c) {
                var d = b.updateQueue;
                if (null !== (d = null !== d ? d.lastEffect : null)) {
                    var e = d = d.next;
                    do {
                        if ((e.tag & a) === a) {
                            var f = e.destroy;
                            e.destroy = void 0, void 0 !== f && Nj(b, c, f);
                        }
                        e = e.next;
                    } while (e !== d);
                }
            }
            function Rj(a, b) {
                if (null !== (b = null !== (b = b.updateQueue) ? b.lastEffect : null)) {
                    var c = b = b.next;
                    do {
                        if ((c.tag & a) === a) {
                            var d = c.create;
                            c.destroy = d();
                        }
                        c = c.next;
                    } while (c !== b);
                }
            }
            function Sj(a) {
                var b = a.ref;
                if (null !== b) {
                    var c = a.stateNode;
                    a.tag, a = c, "function" == typeof b ? b(a) : b.current = a;
                }
            }
            function Tj(a) {
                var b = a.alternate;
                null !== b && (a.alternate = null, Tj(b)), a.child = null, a.deletions = null, a.sibling = null, 
                5 === a.tag && (null !== (b = a.stateNode) && (delete b[Of], delete b[Pf], delete b[of], 
                delete b[Qf], delete b[Rf])), a.stateNode = null, a["return"] = null, a.dependencies = null, 
                a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, 
                a.updateQueue = null;
            }
            function Uj(a) {
                return 5 === a.tag || 3 === a.tag || 4 === a.tag;
            }
            function Vj(a) {
                a: for (;;) {
                    for (;null === a.sibling; ) {
                        if (null === a["return"] || Uj(a["return"])) return null;
                        a = a["return"];
                    }
                    for (a.sibling["return"] = a["return"], a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
                        if (2 & a.flags) continue a;
                        if (null === a.child || 4 === a.tag) continue a;
                        a.child["return"] = a, a = a.child;
                    }
                    if (!(2 & a.flags)) return a.stateNode;
                }
            }
            function Wj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode).insertBefore(a, c) : (b = c).appendChild(a), 
                null != (c = c._reactRootContainer) || null !== b.onclick || (b.onclick = Bf)); else if (4 !== d && null !== (a = a.child)) for (Wj(a, b, c), 
                a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
            }
            function Xj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && null !== (a = a.child)) for (Xj(a, b, c), 
                a = a.sibling; null !== a; ) Xj(a, b, c), a = a.sibling;
            }
            var X = null, Yj = !1;
            function Zj(a, b, c) {
                for (c = c.child; null !== c; ) ak(a, b, c), c = c.sibling;
            }
            function ak(a, b, c) {
                if (lc && "function" == typeof lc.onCommitFiberUnmount) try {
                    lc.onCommitFiberUnmount(kc, c);
                } catch (h) {}
                switch (c.tag) {
                  case 5:
                    U || Mj(c, b);

                  case 6:
                    var d = X, e = Yj;
                    X = null, Zj(a, b, c), Yj = e, null !== (X = d) && (Yj ? (a = X, c = c.stateNode, 
                    8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
                    break;

                  case 18:
                    null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), 
                    bd(a)) : Kf(X, c.stateNode));
                    break;

                  case 4:
                    d = X, e = Yj, X = c.stateNode.containerInfo, Yj = !0, Zj(a, b, c), X = d, Yj = e;
                    break;

                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    if (!U && (null !== (d = c.updateQueue) && null !== (d = d.lastEffect))) {
                        e = d = d.next;
                        do {
                            var f = e, g = f.destroy;
                            f = f.tag, void 0 !== g && (0 != (2 & f) || 0 != (4 & f)) && Nj(c, b, g), e = e.next;
                        } while (e !== d);
                    }
                    Zj(a, b, c);
                    break;

                  case 1:
                    if (!U && (Mj(c, b), "function" == typeof (d = c.stateNode).componentWillUnmount)) try {
                        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
                    } catch (h) {
                        W(c, b, h);
                    }
                    Zj(a, b, c);
                    break;

                  case 21:
                    Zj(a, b, c);
                    break;

                  case 22:
                    1 & c.mode ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
                    break;

                  default:
                    Zj(a, b, c);
                }
            }
            function bk(a) {
                var b = a.updateQueue;
                if (null !== b) {
                    a.updateQueue = null;
                    var c = a.stateNode;
                    null === c && (c = a.stateNode = new Lj), b.forEach((function(b) {
                        var d = ck.bind(null, a, b);
                        c.has(b) || (c.add(b), b.then(d, d));
                    }));
                }
            }
            function dk(a, b) {
                var c = b.deletions;
                if (null !== c) for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    try {
                        var f = a, g = b, h = g;
                        a: for (;null !== h; ) {
                            switch (h.tag) {
                              case 5:
                                X = h.stateNode, Yj = !1;
                                break a;

                              case 3:
                              case 4:
                                X = h.stateNode.containerInfo, Yj = !0;
                                break a;
                            }
                            h = h["return"];
                        }
                        if (null === X) throw Error(p(160));
                        ak(f, g, e), X = null, Yj = !1;
                        var k = e.alternate;
                        null !== k && (k["return"] = null), e["return"] = null;
                    } catch (l) {
                        W(e, b, l);
                    }
                }
                if (12854 & b.subtreeFlags) for (b = b.child; null !== b; ) ek(b, a), b = b.sibling;
            }
            function ek(a, b) {
                var c = a.alternate, d = a.flags;
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    if (dk(b, a), fk(a), 4 & d) {
                        try {
                            Qj(3, a, a["return"]), Rj(3, a);
                        } catch (t) {
                            W(a, a["return"], t);
                        }
                        try {
                            Qj(5, a, a["return"]);
                        } catch (t) {
                            W(a, a["return"], t);
                        }
                    }
                    break;

                  case 1:
                    dk(b, a), fk(a), 512 & d && null !== c && Mj(c, c["return"]);
                    break;

                  case 5:
                    if (dk(b, a), fk(a), 512 & d && null !== c && Mj(c, c["return"]), 32 & a.flags) {
                        var e = a.stateNode;
                        try {
                            ob(e, "");
                        } catch (t) {
                            W(a, a["return"], t);
                        }
                    }
                    if (4 & d && null != (e = a.stateNode)) {
                        var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                        if (a.updateQueue = null, null !== k) try {
                            "input" === h && "radio" === f.type && null != f.name && ab(e, f), vb(h, g);
                            var l = vb(h, f);
                            for (g = 0; g < k.length; g += 2) {
                                var m = k[g], q = k[g + 1];
                                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                            }
                            switch (h) {
                              case "input":
                                bb(e, f);
                                break;

                              case "textarea":
                                ib(e, f);
                                break;

                              case "select":
                                var r = e._wrapperState.wasMultiple;
                                e._wrapperState.wasMultiple = !!f.multiple;
                                var y = f.value;
                                null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                            }
                            e[Pf] = f;
                        } catch (t) {
                            W(a, a["return"], t);
                        }
                    }
                    break;

                  case 6:
                    if (dk(b, a), fk(a), 4 & d) {
                        if (null === a.stateNode) throw Error(p(162));
                        e = a.stateNode, f = a.memoizedProps;
                        try {
                            e.nodeValue = f;
                        } catch (t) {
                            W(a, a["return"], t);
                        }
                    }
                    break;

                  case 3:
                    if (dk(b, a), fk(a), 4 & d && null !== c && c.memoizedState.isDehydrated) try {
                        bd(b.containerInfo);
                    } catch (t) {
                        W(a, a["return"], t);
                    }
                    break;

                  case 4:
                  default:
                    dk(b, a), fk(a);
                    break;

                  case 13:
                    dk(b, a), fk(a), 8192 & (e = a.child).flags && (f = null !== e.memoizedState, e.stateNode.isHidden = f, 
                    !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B())), 
                    4 & d && bk(a);
                    break;

                  case 22:
                    if (m = null !== c && null !== c.memoizedState, 1 & a.mode ? (U = (l = U) || m, 
                    dk(b, a), U = l) : dk(b, a), fk(a), 8192 & d) {
                        if (l = null !== a.memoizedState, (a.stateNode.isHidden = l) && !m && 0 != (1 & a.mode)) for (V = a, 
                        m = a.child; null !== m; ) {
                            for (q = V = m; null !== V; ) {
                                switch (y = (r = V).child, r.tag) {
                                  case 0:
                                  case 11:
                                  case 14:
                                  case 15:
                                    Qj(4, r, r["return"]);
                                    break;

                                  case 1:
                                    Mj(r, r["return"]);
                                    var n = r.stateNode;
                                    if ("function" == typeof n.componentWillUnmount) {
                                        d = r, c = r["return"];
                                        try {
                                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                        } catch (t) {
                                            W(d, c, t);
                                        }
                                    }
                                    break;

                                  case 5:
                                    Mj(r, r["return"]);
                                    break;

                                  case 22:
                                    if (null !== r.memoizedState) {
                                        hk(q);
                                        continue;
                                    }
                                }
                                null !== y ? (y["return"] = r, V = y) : hk(q);
                            }
                            m = m.sibling;
                        }
                        a: for (m = null, q = a; ;) {
                            if (5 === q.tag) {
                                if (null === m) {
                                    m = q;
                                    try {
                                        e = q.stateNode, l ? "function" == typeof (f = e.style).setProperty ? f.setProperty("display", "none", "important") : f.display = "none" : (h = q.stateNode, 
                                        g = null != (k = q.memoizedProps.style) && k.hasOwnProperty("display") ? k.display : null, 
                                        h.style.display = rb("display", g));
                                    } catch (t) {
                                        W(a, a["return"], t);
                                    }
                                }
                            } else if (6 === q.tag) {
                                if (null === m) try {
                                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                                } catch (t) {
                                    W(a, a["return"], t);
                                }
                            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                                q.child["return"] = q, q = q.child;
                                continue;
                            }
                            if (q === a) break a;
                            for (;null === q.sibling; ) {
                                if (null === q["return"] || q["return"] === a) break a;
                                m === q && (m = null), q = q["return"];
                            }
                            m === q && (m = null), q.sibling["return"] = q["return"], q = q.sibling;
                        }
                    }
                    break;

                  case 19:
                    dk(b, a), fk(a), 4 & d && bk(a);

                  case 21:
                }
            }
            function fk(a) {
                var b = a.flags;
                if (2 & b) {
                    try {
                        a: {
                            for (var c = a["return"]; null !== c; ) {
                                if (Uj(c)) {
                                    var d = c;
                                    break a;
                                }
                                c = c["return"];
                            }
                            throw Error(p(160));
                        }
                        switch (d.tag) {
                          case 5:
                            var e = d.stateNode;
                            32 & d.flags && (ob(e, ""), d.flags &= -33), Xj(a, Vj(a), e);
                            break;

                          case 3:
                          case 4:
                            var g = d.stateNode.containerInfo;
                            Wj(a, Vj(a), g);
                            break;

                          default:
                            throw Error(p(161));
                        }
                    } catch (k) {
                        W(a, a["return"], k);
                    }
                    a.flags &= -3;
                }
                4096 & b && (a.flags &= -4097);
            }
            function ik(a, b, c) {
                V = a, jk(a, b, c);
            }
            function jk(a, b, c) {
                for (var d = 0 != (1 & a.mode); null !== V; ) {
                    var e = V, f = e.child;
                    if (22 === e.tag && d) {
                        var g = null !== e.memoizedState || Kj;
                        if (!g) {
                            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                            h = Kj;
                            var l = U;
                            if (Kj = g, (U = k) && !l) for (V = e; null !== V; ) k = (g = V).child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k["return"] = g, 
                            V = k) : kk(e);
                            for (;null !== f; ) V = f, jk(f, b, c), f = f.sibling;
                            V = e, Kj = h, U = l;
                        }
                        lk(a);
                    } else 0 != (8772 & e.subtreeFlags) && null !== f ? (f["return"] = e, V = f) : lk(a);
                }
            }
            function lk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (0 != (8772 & b.flags)) {
                        var c = b.alternate;
                        try {
                            if (0 != (8772 & b.flags)) switch (b.tag) {
                              case 0:
                              case 11:
                              case 15:
                                U || Rj(5, b);
                                break;

                              case 1:
                                var d = b.stateNode;
                                if (4 & b.flags && !U) if (null === c) d.componentDidMount(); else {
                                    var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                                }
                                var f = b.updateQueue;
                                null !== f && ih(b, f, d);
                                break;

                              case 3:
                                var g = b.updateQueue;
                                if (null !== g) {
                                    if (c = null, null !== b.child) switch (b.child.tag) {
                                      case 5:
                                      case 1:
                                        c = b.child.stateNode;
                                    }
                                    ih(b, g, c);
                                }
                                break;

                              case 5:
                                var h = b.stateNode;
                                if (null === c && 4 & b.flags) {
                                    c = h;
                                    var k = b.memoizedProps;
                                    switch (b.type) {
                                      case "button":
                                      case "input":
                                      case "select":
                                      case "textarea":
                                        k.autoFocus && c.focus();
                                        break;

                                      case "img":
                                        k.src && (c.src = k.src);
                                    }
                                }
                                break;

                              case 6:
                              case 4:
                              case 12:
                              case 19:
                              case 17:
                              case 21:
                              case 22:
                              case 23:
                              case 25:
                                break;

                              case 13:
                                if (null === b.memoizedState) {
                                    var l = b.alternate;
                                    if (null !== l) {
                                        var m = l.memoizedState;
                                        if (null !== m) {
                                            var q = m.dehydrated;
                                            null !== q && bd(q);
                                        }
                                    }
                                }
                                break;

                              default:
                                throw Error(p(163));
                            }
                            U || 512 & b.flags && Sj(b);
                        } catch (r) {
                            W(b, b["return"], r);
                        }
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    if (null !== (c = b.sibling)) {
                        c["return"] = b["return"], V = c;
                        break;
                    }
                    V = b["return"];
                }
            }
            function hk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var c = b.sibling;
                    if (null !== c) {
                        c["return"] = b["return"], V = c;
                        break;
                    }
                    V = b["return"];
                }
            }
            function kk(a) {
                for (;null !== V; ) {
                    var b = V;
                    try {
                        switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            var c = b["return"];
                            try {
                                Rj(4, b);
                            } catch (k) {
                                W(b, c, k);
                            }
                            break;

                          case 1:
                            var d = b.stateNode;
                            if ("function" == typeof d.componentDidMount) {
                                var e = b["return"];
                                try {
                                    d.componentDidMount();
                                } catch (k) {
                                    W(b, e, k);
                                }
                            }
                            var f = b["return"];
                            try {
                                Sj(b);
                            } catch (k) {
                                W(b, f, k);
                            }
                            break;

                          case 5:
                            var g = b["return"];
                            try {
                                Sj(b);
                            } catch (k) {
                                W(b, g, k);
                            }
                        }
                    } catch (k) {
                        W(b, b["return"], k);
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var h = b.sibling;
                    if (null !== h) {
                        h["return"] = b["return"], V = h;
                        break;
                    }
                    V = b["return"];
                }
            }
            var Wk, mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = !1, Qi = null, Si = null, wk = !1, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
            function L() {
                return 0 != (6 & K) ? B() : -1 !== Bk ? Bk : Bk = B();
            }
            function lh(a) {
                return 0 == (1 & a.mode) ? 1 : 0 != (2 & K) && 0 !== Z ? Z & -Z : null !== Kg.transition ? (0 === Ck && (Ck = yc()), 
                Ck) : 0 !== (a = C) ? a : a = void 0 === (a = window.event) ? 16 : jd(a.type);
            }
            function mh(a, b, c, d) {
                if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
                Ac(a, c, d), 0 != (2 & K) && a === R || (a === R && (0 == (2 & K) && (rk |= c), 
                4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 == (1 & b.mode) && (Hj = B() + 500, 
                fg && jg()));
            }
            function Ek(a, b) {
                var c = a.callbackNode;
                !function wc(a, b) {
                    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
                        var g = 31 - oc(f), h = 1 << g, k = e[g];
                        -1 === k ? 0 != (h & c) && 0 == (h & d) || (e[g] = vc(h, b)) : k <= b && (a.expiredLanes |= h), 
                        f &= ~h;
                    }
                }(a, b);
                var d = uc(a, a === R ? Z : 0);
                if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0; else if (b = d & -d, 
                a.callbackPriority !== b) {
                    if (null != c && bc(c), 1 === b) 0 === a.tag ? function ig(a) {
                        fg = !0, hg(a);
                    }(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf((function() {
                        0 == (6 & K) && jg();
                    })), c = null; else {
                        switch (Dc(d)) {
                          case 1:
                            c = fc;
                            break;

                          case 4:
                            c = gc;
                            break;

                          case 16:
                          default:
                            c = hc;
                            break;

                          case 536870912:
                            c = jc;
                        }
                        c = Gk(c, Hk.bind(null, a));
                    }
                    a.callbackPriority = b, a.callbackNode = c;
                }
            }
            function Hk(a, b) {
                if (Bk = -1, Ck = 0, 0 != (6 & K)) throw Error(p(327));
                var c = a.callbackNode;
                if (Ik() && a.callbackNode !== c) return null;
                var d = uc(a, a === R ? Z : 0);
                if (0 === d) return null;
                if (0 != (30 & d) || 0 != (d & a.expiredLanes) || b) b = Jk(a, d); else {
                    b = d;
                    var e = K;
                    K |= 2;
                    var f = Kk();
                    for (R === a && Z === b || (vk = null, Hj = B() + 500, Lk(a, b)); ;) try {
                        Mk();
                        break;
                    } catch (h) {
                        Nk(a, h);
                    }
                    Qg(), nk.current = f, K = e, null !== Y ? b = 0 : (R = null, Z = 0, b = T);
                }
                if (0 !== b) {
                    if (2 === b && (0 !== (e = xc(a)) && (d = e, b = Ok(a, e))), 1 === b) throw c = qk, 
                    Lk(a, 0), Dk(a, d), Ek(a, B()), c;
                    if (6 === b) Dk(a, d); else {
                        if (e = a.current.alternate, 0 == (30 & d) && !function Pk(a) {
                            for (var b = a; ;) {
                                if (16384 & b.flags) {
                                    var c = b.updateQueue;
                                    if (null !== c && null !== (c = c.stores)) for (var d = 0; d < c.length; d++) {
                                        var e = c[d], f = e.getSnapshot;
                                        e = e.value;
                                        try {
                                            if (!He(f(), e)) return !1;
                                        } catch (g) {
                                            return !1;
                                        }
                                    }
                                }
                                if (c = b.child, 16384 & b.subtreeFlags && null !== c) c["return"] = b, b = c; else {
                                    if (b === a) break;
                                    for (;null === b.sibling; ) {
                                        if (null === b["return"] || b["return"] === a) return !0;
                                        b = b["return"];
                                    }
                                    b.sibling["return"] = b["return"], b = b.sibling;
                                }
                            }
                            return !0;
                        }(e) && (2 === (b = Jk(a, d)) && (0 !== (f = xc(a)) && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, 
                        Lk(a, 0), Dk(a, d), Ek(a, B()), c;
                        switch (a.finishedWork = e, a.finishedLanes = d, b) {
                          case 0:
                          case 1:
                            throw Error(p(345));

                          case 2:
                          case 5:
                            Qk(a, uk, vk);
                            break;

                          case 3:
                            if (Dk(a, d), (130023424 & d) === d && 10 < (b = gk + 500 - B())) {
                                if (0 !== uc(a, 0)) break;
                                if (((e = a.suspendedLanes) & d) !== d) {
                                    L(), a.pingedLanes |= a.suspendedLanes & e;
                                    break;
                                }
                                a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
                                break;
                            }
                            Qk(a, uk, vk);
                            break;

                          case 4:
                            if (Dk(a, d), (4194240 & d) === d) break;
                            for (b = a.eventTimes, e = -1; 0 < d; ) {
                                var g = 31 - oc(d);
                                f = 1 << g, (g = b[g]) > e && (e = g), d &= ~f;
                            }
                            if (d = e, 10 < (d = (120 > (d = B() - d) ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d)) {
                                a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                                break;
                            }
                            Qk(a, uk, vk);
                            break;

                          default:
                            throw Error(p(329));
                        }
                    }
                }
                return Ek(a, B()), a.callbackNode === c ? Hk.bind(null, a) : null;
            }
            function Ok(a, b) {
                var c = tk;
                return a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256), 2 !== (a = Jk(a, b)) && (b = uk, 
                uk = c, null !== b && Gj(b)), a;
            }
            function Gj(a) {
                null === uk ? uk = a : uk.push.apply(uk, a);
            }
            function Dk(a, b) {
                for (b &= ~sk, b &= ~rk, a.suspendedLanes |= b, a.pingedLanes &= ~b, a = a.expirationTimes; 0 < b; ) {
                    var c = 31 - oc(b), d = 1 << c;
                    a[c] = -1, b &= ~d;
                }
            }
            function Fk(a) {
                if (0 != (6 & K)) throw Error(p(327));
                Ik();
                var b = uc(a, 0);
                if (0 == (1 & b)) return Ek(a, B()), null;
                var c = Jk(a, b);
                if (0 !== a.tag && 2 === c) {
                    var d = xc(a);
                    0 !== d && (b = d, c = Ok(a, d));
                }
                if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
                if (6 === c) throw Error(p(345));
                return a.finishedWork = a.current.alternate, a.finishedLanes = b, Qk(a, uk, vk), 
                Ek(a, B()), null;
            }
            function Rk(a, b) {
                var c = K;
                K |= 1;
                try {
                    return a(b);
                } finally {
                    0 === (K = c) && (Hj = B() + 500, fg && jg());
                }
            }
            function Sk(a) {
                null !== xk && 0 === xk.tag && 0 == (6 & K) && Ik();
                var b = K;
                K |= 1;
                var c = pk.transition, d = C;
                try {
                    if (pk.transition = null, C = 1, a) return a();
                } finally {
                    C = d, pk.transition = c, 0 == (6 & (K = b)) && jg();
                }
            }
            function Ij() {
                gj = fj.current, E(fj);
            }
            function Lk(a, b) {
                a.finishedWork = null, a.finishedLanes = 0;
                var c = a.timeoutHandle;
                if (-1 !== c && (a.timeoutHandle = -1, Gf(c)), null !== Y) for (c = Y["return"]; null !== c; ) {
                    var d = c;
                    switch (wg(d), d.tag) {
                      case 1:
                        null != (d = d.type.childContextTypes) && $f();
                        break;

                      case 3:
                        Jh(), E(Wf), E(H), Oh();
                        break;

                      case 5:
                        Lh(d);
                        break;

                      case 4:
                        Jh();
                        break;

                      case 13:
                      case 19:
                        E(M);
                        break;

                      case 10:
                        Rg(d.type._context);
                        break;

                      case 22:
                      case 23:
                        Ij();
                    }
                    c = c["return"];
                }
                if (R = a, Y = a = wh(a.current, null), Z = gj = b, T = 0, qk = null, sk = rk = hh = 0, 
                uk = tk = null, null !== Wg) {
                    for (b = 0; b < Wg.length; b++) if (null !== (d = (c = Wg[b]).interleaved)) {
                        c.interleaved = null;
                        var e = d.next, f = c.pending;
                        if (null !== f) {
                            var g = f.next;
                            f.next = e, d.next = g;
                        }
                        c.pending = d;
                    }
                    Wg = null;
                }
                return a;
            }
            function Nk(a, b) {
                for (;;) {
                    var c = Y;
                    try {
                        if (Qg(), Ph.current = ai, Sh) {
                            for (var d = N.memoizedState; null !== d; ) {
                                var e = d.queue;
                                null !== e && (e.pending = null), d = d.next;
                            }
                            Sh = !1;
                        }
                        if (Rh = 0, P = O = N = null, Th = !1, Uh = 0, ok.current = null, null === c || null === c["return"]) {
                            T = 1, qk = b, Y = null;
                            break;
                        }
                        a: {
                            var f = a, g = c["return"], h = c, k = b;
                            if (b = Z, h.flags |= 32768, null !== k && "object" == typeof k && "function" == typeof k.then) {
                                var l = k, m = h, q = m.tag;
                                if (0 == (1 & m.mode) && (0 === q || 11 === q || 15 === q)) {
                                    var r = m.alternate;
                                    r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, 
                                    m.memoizedState = null);
                                }
                                var y = Vi(g);
                                if (null !== y) {
                                    y.flags &= -257, Wi(y, g, h, 0, b), 1 & y.mode && Ti(f, l, b), k = l;
                                    var n = (b = y).updateQueue;
                                    if (null === n) {
                                        var t = new Set;
                                        t.add(k), b.updateQueue = t;
                                    } else n.add(k);
                                    break a;
                                }
                                if (0 == (1 & b)) {
                                    Ti(f, l, b), uj();
                                    break a;
                                }
                                k = Error(p(426));
                            } else if (I && 1 & h.mode) {
                                var J = Vi(g);
                                if (null !== J) {
                                    0 == (65536 & J.flags) && (J.flags |= 256), Wi(J, g, h, 0, b), Jg(Ki(k, h));
                                    break a;
                                }
                            }
                            f = k = Ki(k, h), 4 !== T && (T = 2), null === tk ? tk = [ f ] : tk.push(f), f = g;
                            do {
                                switch (f.tag) {
                                  case 3:
                                    f.flags |= 65536, b &= -b, f.lanes |= b, fh(f, Oi(0, k, b));
                                    break a;

                                  case 1:
                                    h = k;
                                    var w = f.type, u = f.stateNode;
                                    if (0 == (128 & f.flags) && ("function" == typeof w.getDerivedStateFromError || null !== u && "function" == typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                                        f.flags |= 65536, b &= -b, f.lanes |= b, fh(f, Ri(f, h, b));
                                        break a;
                                    }
                                }
                                f = f["return"];
                            } while (null !== f);
                        }
                        Tk(c);
                    } catch (na) {
                        b = na, Y === c && null !== c && (Y = c = c["return"]);
                        continue;
                    }
                    break;
                }
            }
            function Kk() {
                var a = nk.current;
                return nk.current = ai, null === a ? ai : a;
            }
            function uj() {
                0 !== T && 3 !== T && 2 !== T || (T = 4), null === R || 0 == (268435455 & hh) && 0 == (268435455 & rk) || Dk(R, Z);
            }
            function Jk(a, b) {
                var c = K;
                K |= 2;
                var d = Kk();
                for (R === a && Z === b || (vk = null, Lk(a, b)); ;) try {
                    Uk();
                    break;
                } catch (e) {
                    Nk(a, e);
                }
                if (Qg(), K = c, nk.current = d, null !== Y) throw Error(p(261));
                return R = null, Z = 0, T;
            }
            function Uk() {
                for (;null !== Y; ) Vk(Y);
            }
            function Mk() {
                for (;null !== Y && !cc(); ) Vk(Y);
            }
            function Vk(a) {
                var b = Wk(a.alternate, a, gj);
                a.memoizedProps = a.pendingProps, null === b ? Tk(a) : Y = b, ok.current = null;
            }
            function Tk(a) {
                var b = a;
                do {
                    var c = b.alternate;
                    if (a = b["return"], 0 == (32768 & b.flags)) {
                        if (null !== (c = Fj(c, b, gj))) return void (Y = c);
                    } else {
                        if (null !== (c = Jj(c, b))) return c.flags &= 32767, void (Y = c);
                        if (null === a) return T = 6, void (Y = null);
                        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
                    }
                    if (null !== (b = b.sibling)) return void (Y = b);
                    Y = b = a;
                } while (null !== b);
                0 === T && (T = 5);
            }
            function Qk(a, b, c) {
                var d = C, e = pk.transition;
                try {
                    pk.transition = null, C = 1, function Xk(a, b, c, d) {
                        do {
                            Ik();
                        } while (null !== xk);
                        if (0 != (6 & K)) throw Error(p(327));
                        c = a.finishedWork;
                        var e = a.finishedLanes;
                        if (null === c) return null;
                        if (a.finishedWork = null, a.finishedLanes = 0, c === a.current) throw Error(p(177));
                        a.callbackNode = null, a.callbackPriority = 0;
                        var f = c.lanes | c.childLanes;
                        if (function Bc(a, b) {
                            var c = a.pendingLanes & ~b;
                            a.pendingLanes = b, a.suspendedLanes = 0, a.pingedLanes = 0, a.expiredLanes &= b, 
                            a.mutableReadLanes &= b, a.entangledLanes &= b, b = a.entanglements;
                            var d = a.eventTimes;
                            for (a = a.expirationTimes; 0 < c; ) {
                                var e = 31 - oc(c), f = 1 << e;
                                b[e] = 0, d[e] = -1, a[e] = -1, c &= ~f;
                            }
                        }(a, f), a === R && (Y = R = null, Z = 0), 0 == (2064 & c.subtreeFlags) && 0 == (2064 & c.flags) || wk || (wk = !0, 
                        Gk(hc, (function() {
                            return Ik(), null;
                        }))), f = 0 != (15990 & c.flags), 0 != (15990 & c.subtreeFlags) || f) {
                            f = pk.transition, pk.transition = null;
                            var g = C;
                            C = 1;
                            var h = K;
                            K |= 4, ok.current = null, function Pj(a, b) {
                                if (Cf = dd, Ne(a = Me())) {
                                    if ("selectionStart" in a) var c = {
                                        start: a.selectionStart,
                                        end: a.selectionEnd
                                    }; else a: {
                                        var d = (c = (c = a.ownerDocument) && c.defaultView || window).getSelection && c.getSelection();
                                        if (d && 0 !== d.rangeCount) {
                                            c = d.anchorNode;
                                            var e = d.anchorOffset, f = d.focusNode;
                                            d = d.focusOffset;
                                            try {
                                                c.nodeType, f.nodeType;
                                            } catch (F) {
                                                c = null;
                                                break a;
                                            }
                                            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                                            b: for (;;) {
                                                for (var y; q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e), q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d), 
                                                3 === q.nodeType && (g += q.nodeValue.length), null !== (y = q.firstChild); ) r = q, 
                                                q = y;
                                                for (;;) {
                                                    if (q === a) break b;
                                                    if (r === c && ++l === e && (h = g), r === f && ++m === d && (k = g), null !== (y = q.nextSibling)) break;
                                                    r = (q = r).parentNode;
                                                }
                                                q = y;
                                            }
                                            c = -1 === h || -1 === k ? null : {
                                                start: h,
                                                end: k
                                            };
                                        } else c = null;
                                    }
                                    c = c || {
                                        start: 0,
                                        end: 0
                                    };
                                } else c = null;
                                for (Df = {
                                    focusedElem: a,
                                    selectionRange: c
                                }, dd = !1, V = b; null !== V; ) if (a = (b = V).child, 0 != (1028 & b.subtreeFlags) && null !== a) a["return"] = b, 
                                V = a; else for (;null !== V; ) {
                                    b = V;
                                    try {
                                        var n = b.alternate;
                                        if (0 != (1024 & b.flags)) switch (b.tag) {
                                          case 0:
                                          case 11:
                                          case 15:
                                          case 5:
                                          case 6:
                                          case 4:
                                          case 17:
                                            break;

                                          case 1:
                                            if (null !== n) {
                                                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
                                                x.__reactInternalSnapshotBeforeUpdate = w;
                                            }
                                            break;

                                          case 3:
                                            var u = b.stateNode.containerInfo;
                                            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                                            break;

                                          default:
                                            throw Error(p(163));
                                        }
                                    } catch (F) {
                                        W(b, b["return"], F);
                                    }
                                    if (null !== (a = b.sibling)) {
                                        a["return"] = b["return"], V = a;
                                        break;
                                    }
                                    V = b["return"];
                                }
                                return n = Oj, Oj = !1, n;
                            }(a, c), ek(c, a), Oe(Df), dd = !!Cf, Df = Cf = null, a.current = c, ik(c, a, e), 
                            dc(), K = h, C = g, pk.transition = f;
                        } else a.current = c;
                        if (wk && (wk = !1, xk = a, yk = e), f = a.pendingLanes, 0 === f && (Si = null), 
                        function mc(a) {
                            if (lc && "function" == typeof lc.onCommitFiberRoot) try {
                                lc.onCommitFiberRoot(kc, a, void 0, 128 == (128 & a.current.flags));
                            } catch (b) {}
                        }(c.stateNode), Ek(a, B()), null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], 
                        d(e.value, {
                            componentStack: e.stack,
                            digest: e.digest
                        });
                        if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
                        return 0 != (1 & yk) && 0 !== a.tag && Ik(), f = a.pendingLanes, 0 != (1 & f) ? a === Ak ? zk++ : (zk = 0, 
                        Ak = a) : zk = 0, jg(), null;
                    }(a, b, c, d);
                } finally {
                    pk.transition = e, C = d;
                }
                return null;
            }
            function Ik() {
                if (null !== xk) {
                    var a = Dc(yk), b = pk.transition, c = C;
                    try {
                        if (pk.transition = null, C = 16 > a ? 16 : a, null === xk) var d = !1; else {
                            if (a = xk, xk = null, yk = 0, 0 != (6 & K)) throw Error(p(331));
                            var e = K;
                            for (K |= 4, V = a.current; null !== V; ) {
                                var f = V, g = f.child;
                                if (0 != (16 & V.flags)) {
                                    var h = f.deletions;
                                    if (null !== h) {
                                        for (var k = 0; k < h.length; k++) {
                                            var l = h[k];
                                            for (V = l; null !== V; ) {
                                                var m = V;
                                                switch (m.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                    Qj(8, m, f);
                                                }
                                                var q = m.child;
                                                if (null !== q) q["return"] = m, V = q; else for (;null !== V; ) {
                                                    var r = (m = V).sibling, y = m["return"];
                                                    if (Tj(m), m === l) {
                                                        V = null;
                                                        break;
                                                    }
                                                    if (null !== r) {
                                                        r["return"] = y, V = r;
                                                        break;
                                                    }
                                                    V = y;
                                                }
                                            }
                                        }
                                        var n = f.alternate;
                                        if (null !== n) {
                                            var t = n.child;
                                            if (null !== t) {
                                                n.child = null;
                                                do {
                                                    var J = t.sibling;
                                                    t.sibling = null, t = J;
                                                } while (null !== t);
                                            }
                                        }
                                        V = f;
                                    }
                                }
                                if (0 != (2064 & f.subtreeFlags) && null !== g) g["return"] = f, V = g; else b: for (;null !== V; ) {
                                    if (0 != (2048 & (f = V).flags)) switch (f.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                        Qj(9, f, f["return"]);
                                    }
                                    var x = f.sibling;
                                    if (null !== x) {
                                        x["return"] = f["return"], V = x;
                                        break b;
                                    }
                                    V = f["return"];
                                }
                            }
                            var w = a.current;
                            for (V = w; null !== V; ) {
                                var u = (g = V).child;
                                if (0 != (2064 & g.subtreeFlags) && null !== u) u["return"] = g, V = u; else b: for (g = w; null !== V; ) {
                                    if (0 != (2048 & (h = V).flags)) try {
                                        switch (h.tag) {
                                          case 0:
                                          case 11:
                                          case 15:
                                            Rj(9, h);
                                        }
                                    } catch (na) {
                                        W(h, h["return"], na);
                                    }
                                    if (h === g) {
                                        V = null;
                                        break b;
                                    }
                                    var F = h.sibling;
                                    if (null !== F) {
                                        F["return"] = h["return"], V = F;
                                        break b;
                                    }
                                    V = h["return"];
                                }
                            }
                            if (K = e, jg(), lc && "function" == typeof lc.onPostCommitFiberRoot) try {
                                lc.onPostCommitFiberRoot(kc, a);
                            } catch (na) {}
                            d = !0;
                        }
                        return d;
                    } finally {
                        C = c, pk.transition = b;
                    }
                }
                return !1;
            }
            function Yk(a, b, c) {
                a = dh(a, b = Oi(0, b = Ki(c, b), 1), 1), b = L(), null !== a && (Ac(a, 1, b), Ek(a, b));
            }
            function W(a, b, c) {
                if (3 === a.tag) Yk(a, a, c); else for (;null !== b; ) {
                    if (3 === b.tag) {
                        Yk(b, a, c);
                        break;
                    }
                    if (1 === b.tag) {
                        var d = b.stateNode;
                        if ("function" == typeof b.type.getDerivedStateFromError || "function" == typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                            b = dh(b, a = Ri(b, a = Ki(c, a), 1), 1), a = L(), null !== b && (Ac(b, 1, a), Ek(b, a));
                            break;
                        }
                    }
                    b = b["return"];
                }
            }
            function Ui(a, b, c) {
                var d = a.pingCache;
                null !== d && d["delete"](b), b = L(), a.pingedLanes |= a.suspendedLanes & c, R === a && (Z & c) === c && (4 === T || 3 === T && (130023424 & Z) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c), 
                Ek(a, b);
            }
            function Zk(a, b) {
                0 === b && (0 == (1 & a.mode) ? b = 1 : (b = sc, 0 == (130023424 & (sc <<= 1)) && (sc = 4194304)));
                var c = L();
                null !== (a = Zg(a, b)) && (Ac(a, b, c), Ek(a, c));
            }
            function vj(a) {
                var b = a.memoizedState, c = 0;
                null !== b && (c = b.retryLane), Zk(a, c);
            }
            function ck(a, b) {
                var c = 0;
                switch (a.tag) {
                  case 13:
                    var d = a.stateNode, e = a.memoizedState;
                    null !== e && (c = e.retryLane);
                    break;

                  case 19:
                    d = a.stateNode;
                    break;

                  default:
                    throw Error(p(314));
                }
                null !== d && d["delete"](b), Zk(a, c);
            }
            function Gk(a, b) {
                return ac(a, b);
            }
            function al(a, b, c, d) {
                this.tag = a, this.key = c, this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null, 
                this.index = 0, this.ref = null, this.pendingProps = b, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, 
                this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, 
                this.alternate = null;
            }
            function Bg(a, b, c, d) {
                return new al(a, b, c, d);
            }
            function bj(a) {
                return !(!(a = a.prototype) || !a.isReactComponent);
            }
            function wh(a, b) {
                var c = a.alternate;
                return null === c ? ((c = Bg(a.tag, b, a.key, a.mode)).elementType = a.elementType, 
                c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, 
                c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = 14680064 & a.flags, 
                c.childLanes = a.childLanes, c.lanes = a.lanes, c.child = a.child, c.memoizedProps = a.memoizedProps, 
                c.memoizedState = a.memoizedState, c.updateQueue = a.updateQueue, b = a.dependencies, 
                c.dependencies = null === b ? null : {
                    lanes: b.lanes,
                    firstContext: b.firstContext
                }, c.sibling = a.sibling, c.index = a.index, c.ref = a.ref, c;
            }
            function yh(a, b, c, d, e, f) {
                var g = 2;
                if (d = a, "function" == typeof a) bj(a) && (g = 1); else if ("string" == typeof a) g = 5; else a: switch (a) {
                  case ya:
                    return Ah(c.children, e, f, b);

                  case za:
                    g = 8, e |= 8;
                    break;

                  case Aa:
                    return (a = Bg(12, c, b, 2 | e)).elementType = Aa, a.lanes = f, a;

                  case Ea:
                    return (a = Bg(13, c, b, e)).elementType = Ea, a.lanes = f, a;

                  case Fa:
                    return (a = Bg(19, c, b, e)).elementType = Fa, a.lanes = f, a;

                  case Ia:
                    return qj(c, e, f, b);

                  default:
                    if ("object" == typeof a && null !== a) switch (a.$$typeof) {
                      case Ba:
                        g = 10;
                        break a;

                      case Ca:
                        g = 9;
                        break a;

                      case Da:
                        g = 11;
                        break a;

                      case Ga:
                        g = 14;
                        break a;

                      case Ha:
                        g = 16, d = null;
                        break a;
                    }
                    throw Error(p(130, null == a ? a : typeof a, ""));
                }
                return (b = Bg(g, c, b, e)).elementType = a, b.type = d, b.lanes = f, b;
            }
            function Ah(a, b, c, d) {
                return (a = Bg(7, a, d, b)).lanes = c, a;
            }
            function qj(a, b, c, d) {
                return (a = Bg(22, a, d, b)).elementType = Ia, a.lanes = c, a.stateNode = {
                    isHidden: !1
                }, a;
            }
            function xh(a, b, c) {
                return (a = Bg(6, a, null, b)).lanes = c, a;
            }
            function zh(a, b, c) {
                return (b = Bg(4, null !== a.children ? a.children : [], a.key, b)).lanes = c, b.stateNode = {
                    containerInfo: a.containerInfo,
                    pendingChildren: null,
                    implementation: a.implementation
                }, b;
            }
            function bl(a, b, c, d, e) {
                this.tag = b, this.containerInfo = a, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, 
                this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, 
                this.callbackPriority = 0, this.eventTimes = zc(0), this.expirationTimes = zc(-1), 
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, 
                this.entanglements = zc(0), this.identifierPrefix = d, this.onRecoverableError = e, 
                this.mutableSourceEagerHydrationData = null;
            }
            function cl(a, b, c, d, e, f, g, h, k) {
                return a = new bl(a, b, c, h, k), 1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0, 
                f = Bg(3, null, null, b), a.current = f, f.stateNode = a, f.memoizedState = {
                    element: d,
                    isDehydrated: c,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, ah(f), a;
            }
            function el(a) {
                if (!a) return Vf;
                a: {
                    if (Vb(a = a._reactInternals) !== a || 1 !== a.tag) throw Error(p(170));
                    var b = a;
                    do {
                        switch (b.tag) {
                          case 3:
                            b = b.stateNode.context;
                            break a;

                          case 1:
                            if (Zf(b.type)) {
                                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                                break a;
                            }
                        }
                        b = b["return"];
                    } while (null !== b);
                    throw Error(p(171));
                }
                if (1 === a.tag) {
                    var c = a.type;
                    if (Zf(c)) return bg(a, c, b);
                }
                return b;
            }
            function fl(a, b, c, d, e, f, g, h, k) {
                return (a = cl(c, d, !0, a, 0, f, 0, h, k)).context = el(null), c = a.current, (f = ch(d = L(), e = lh(c))).callback = null != b ? b : null, 
                dh(c, f, e), a.current.lanes = e, Ac(a, e, d), Ek(a, d), a;
            }
            function gl(a, b, c, d) {
                var e = b.current, f = L(), g = lh(e);
                return c = el(c), null === b.context ? b.context = c : b.pendingContext = c, (b = ch(f, g)).payload = {
                    element: a
                }, null !== (d = void 0 === d ? null : d) && (b.callback = d), null !== (a = dh(e, b, g)) && (mh(a, e, g, f), 
                eh(a, e, g)), g;
            }
            function hl(a) {
                return (a = a.current).child ? (a.child.tag, a.child.stateNode) : null;
            }
            function il(a, b) {
                if (null !== (a = a.memoizedState) && null !== a.dehydrated) {
                    var c = a.retryLane;
                    a.retryLane = 0 !== c && c < b ? c : b;
                }
            }
            function jl(a, b) {
                il(a, b), (a = a.alternate) && il(a, b);
            }
            Wk = function(a, b, c) {
                if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0; else {
                    if (0 == (a.lanes & c) && 0 == (128 & b.flags)) return Ug = !1, function zj(a, b, c) {
                        switch (b.tag) {
                          case 3:
                            lj(b), Ig();
                            break;

                          case 5:
                            Kh(b);
                            break;

                          case 1:
                            Zf(b.type) && cg(b);
                            break;

                          case 4:
                            Ih(b, b.stateNode.containerInfo);
                            break;

                          case 10:
                            var d = b.type._context, e = b.memoizedProps.value;
                            G(Mg, d._currentValue), d._currentValue = e;
                            break;

                          case 13:
                            if (null !== (d = b.memoizedState)) return null !== d.dehydrated ? (G(M, 1 & M.current), 
                            b.flags |= 128, null) : 0 != (c & b.child.childLanes) ? pj(a, b, c) : (G(M, 1 & M.current), 
                            null !== (a = $i(a, b, c)) ? a.sibling : null);
                            G(M, 1 & M.current);
                            break;

                          case 19:
                            if (d = 0 != (c & b.childLanes), 0 != (128 & a.flags)) {
                                if (d) return yj(a, b, c);
                                b.flags |= 128;
                            }
                            if (null !== (e = b.memoizedState) && (e.rendering = null, e.tail = null, e.lastEffect = null), 
                            G(M, M.current), d) break;
                            return null;

                          case 22:
                          case 23:
                            return b.lanes = 0, ej(a, b, c);
                        }
                        return $i(a, b, c);
                    }(a, b, c);
                    Ug = 0 != (131072 & a.flags);
                } else Ug = !1, I && 0 != (1048576 & b.flags) && ug(b, ng, b.index);
                switch (b.lanes = 0, b.tag) {
                  case 2:
                    var d = b.type;
                    jj(a, b), a = b.pendingProps;
                    var e = Yf(b, H.current);
                    Tg(b, c), e = Xh(null, b, d, a, e, c);
                    var f = bi();
                    return b.flags |= 1, "object" == typeof e && null !== e && "function" == typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, 
                    b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, 
                    b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), 
                    e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, 
                    I && f && vg(b), Yi(null, b, e, c), b = b.child), b;

                  case 16:
                    d = b.elementType;
                    a: {
                        switch (jj(a, b), a = b.pendingProps, d = (e = d._init)(d._payload), b.type = d, 
                        e = b.tag = function $k(a) {
                            if ("function" == typeof a) return bj(a) ? 1 : 0;
                            if (null != a) {
                                if ((a = a.$$typeof) === Da) return 11;
                                if (a === Ga) return 14;
                            }
                            return 2;
                        }(d), a = Lg(d, a), e) {
                          case 0:
                            b = dj(null, b, d, a, c);
                            break a;

                          case 1:
                            b = ij(null, b, d, a, c);
                            break a;

                          case 11:
                            b = Zi(null, b, d, a, c);
                            break a;

                          case 14:
                            b = aj(null, b, d, Lg(d.type, a), c);
                            break a;
                        }
                        throw Error(p(306, d, ""));
                    }
                    return b;

                  case 0:
                    return d = b.type, e = b.pendingProps, dj(a, b, d, e = b.elementType === d ? e : Lg(d, e), c);

                  case 1:
                    return d = b.type, e = b.pendingProps, ij(a, b, d, e = b.elementType === d ? e : Lg(d, e), c);

                  case 3:
                    a: {
                        if (lj(b), null === a) throw Error(p(387));
                        d = b.pendingProps, e = (f = b.memoizedState).element, bh(a, b), gh(b, d, null, c);
                        var g = b.memoizedState;
                        if (d = g.element, f.isDehydrated) {
                            if (f = {
                                element: d,
                                isDehydrated: !1,
                                cache: g.cache,
                                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                                transitions: g.transitions
                            }, b.updateQueue.baseState = f, b.memoizedState = f, 256 & b.flags) {
                                b = mj(a, b, d, c, e = Ki(Error(p(423)), b));
                                break a;
                            }
                            if (d !== e) {
                                b = mj(a, b, d, c, e = Ki(Error(p(424)), b));
                                break a;
                            }
                            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), 
                            b.child = c; c; ) c.flags = -3 & c.flags | 4096, c = c.sibling;
                        } else {
                            if (Ig(), d === e) {
                                b = $i(a, b, c);
                                break a;
                            }
                            Yi(a, b, d, c);
                        }
                        b = b.child;
                    }
                    return b;

                  case 5:
                    return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, 
                    g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), 
                    hj(a, b), Yi(a, b, g, c), b.child;

                  case 6:
                    return null === a && Eg(b), null;

                  case 13:
                    return pj(a, b, c);

                  case 4:
                    return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), 
                    b.child;

                  case 11:
                    return d = b.type, e = b.pendingProps, Zi(a, b, d, e = b.elementType === d ? e : Lg(d, e), c);

                  case 7:
                    return Yi(a, b, b.pendingProps, c), b.child;

                  case 8:
                  case 12:
                    return Yi(a, b, b.pendingProps.children, c), b.child;

                  case 10:
                    a: {
                        if (d = b.type._context, e = b.pendingProps, f = b.memoizedProps, g = e.value, G(Mg, d._currentValue), 
                        d._currentValue = g, null !== f) if (He(f.value, g)) {
                            if (f.children === e.children && !Wf.current) {
                                b = $i(a, b, c);
                                break a;
                            }
                        } else for (null !== (f = b.child) && (f["return"] = b); null !== f; ) {
                            var h = f.dependencies;
                            if (null !== h) {
                                g = f.child;
                                for (var k = h.firstContext; null !== k; ) {
                                    if (k.context === d) {
                                        if (1 === f.tag) {
                                            (k = ch(-1, c & -c)).tag = 2;
                                            var l = f.updateQueue;
                                            if (null !== l) {
                                                var m = (l = l.shared).pending;
                                                null === m ? k.next = k : (k.next = m.next, m.next = k), l.pending = k;
                                            }
                                        }
                                        f.lanes |= c, null !== (k = f.alternate) && (k.lanes |= c), Sg(f["return"], c, b), 
                                        h.lanes |= c;
                                        break;
                                    }
                                    k = k.next;
                                }
                            } else if (10 === f.tag) g = f.type === b.type ? null : f.child; else if (18 === f.tag) {
                                if (null === (g = f["return"])) throw Error(p(341));
                                g.lanes |= c, null !== (h = g.alternate) && (h.lanes |= c), Sg(g, c, b), g = f.sibling;
                            } else g = f.child;
                            if (null !== g) g["return"] = f; else for (g = f; null !== g; ) {
                                if (g === b) {
                                    g = null;
                                    break;
                                }
                                if (null !== (f = g.sibling)) {
                                    f["return"] = g["return"], g = f;
                                    break;
                                }
                                g = g["return"];
                            }
                            f = g;
                        }
                        Yi(a, b, e.children, c), b = b.child;
                    }
                    return b;

                  case 9:
                    return e = b.type, d = b.pendingProps.children, Tg(b, c), d = d(e = Vg(e)), b.flags |= 1, 
                    Yi(a, b, d, c), b.child;

                  case 14:
                    return e = Lg(d = b.type, b.pendingProps), aj(a, b, d, e = Lg(d.type, e), c);

                  case 15:
                    return cj(a, b, b.type, b.pendingProps, c);

                  case 17:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), 
                    b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), 
                    kj(null, b, d, !0, a, c);

                  case 19:
                    return yj(a, b, c);

                  case 22:
                    return ej(a, b, c);
                }
                throw Error(p(156, b.tag));
            };
            var ll = "function" == typeof reportError ? reportError : function(a) {
                console.error(a);
            };
            function ml(a) {
                this._internalRoot = a;
            }
            function nl(a) {
                this._internalRoot = a;
            }
            function ol(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
            }
            function pl(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
            }
            function ql() {}
            function sl(a, b, c, d, e) {
                var f = c._reactRootContainer;
                if (f) {
                    var g = f;
                    if ("function" == typeof e) {
                        var h = e;
                        e = function() {
                            var a = hl(g);
                            h.call(a);
                        };
                    }
                    gl(b, g, a, e);
                } else g = function rl(a, b, c, d, e) {
                    if (e) {
                        if ("function" == typeof d) {
                            var f = d;
                            d = function() {
                                var a = hl(g);
                                f.call(a);
                            };
                        }
                        var g = fl(b, d, a, 0, null, !1, 0, "", ql);
                        return a._reactRootContainer = g, a[uf] = g.current, sf(8 === a.nodeType ? a.parentNode : a), 
                        Sk(), g;
                    }
                    for (;e = a.lastChild; ) a.removeChild(e);
                    if ("function" == typeof d) {
                        var h = d;
                        d = function() {
                            var a = hl(k);
                            h.call(a);
                        };
                    }
                    var k = cl(a, 0, !1, null, 0, !1, 0, "", ql);
                    return a._reactRootContainer = k, a[uf] = k.current, sf(8 === a.nodeType ? a.parentNode : a), 
                    Sk((function() {
                        gl(b, k, c, d);
                    })), k;
                }(c, b, a, e, d);
                return hl(g);
            }
            nl.prototype.render = ml.prototype.render = function(a) {
                var b = this._internalRoot;
                if (null === b) throw Error(p(409));
                gl(a, b, null, null);
            }, nl.prototype.unmount = ml.prototype.unmount = function() {
                var a = this._internalRoot;
                if (null !== a) {
                    this._internalRoot = null;
                    var b = a.containerInfo;
                    Sk((function() {
                        gl(null, a, null, null);
                    })), b[uf] = null;
                }
            }, nl.prototype.unstable_scheduleHydration = function(a) {
                if (a) {
                    var b = Hc();
                    a = {
                        blockedOn: null,
                        target: a,
                        priority: b
                    };
                    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
                    Qc.splice(c, 0, a), 0 === c && Vc(a);
                }
            }, Ec = function(a) {
                switch (a.tag) {
                  case 3:
                    var b = a.stateNode;
                    if (b.current.memoizedState.isDehydrated) {
                        var c = tc(b.pendingLanes);
                        0 !== c && (Cc(b, 1 | c), Ek(b, B()), 0 == (6 & K) && (Hj = B() + 500, jg()));
                    }
                    break;

                  case 13:
                    Sk((function() {
                        var b = Zg(a, 1);
                        if (null !== b) {
                            var c = L();
                            mh(b, a, 1, c);
                        }
                    })), jl(a, 1);
                }
            }, Fc = function(a) {
                if (13 === a.tag) {
                    var b = Zg(a, 134217728);
                    if (null !== b) mh(b, a, 134217728, L());
                    jl(a, 134217728);
                }
            }, Gc = function(a) {
                if (13 === a.tag) {
                    var b = lh(a), c = Zg(a, b);
                    if (null !== c) mh(c, a, b, L());
                    jl(a, b);
                }
            }, Hc = function() {
                return C;
            }, Ic = function(a, b) {
                var c = C;
                try {
                    return C = a, b();
                } finally {
                    C = c;
                }
            }, yb = function(a, b, c) {
                switch (b) {
                  case "input":
                    if (bb(a, c), b = c.name, "radio" === c.type && null != b) {
                        for (c = a; c.parentNode; ) c = c.parentNode;
                        for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]'), 
                        b = 0; b < c.length; b++) {
                            var d = c[b];
                            if (d !== a && d.form === a.form) {
                                var e = Db(d);
                                if (!e) throw Error(p(90));
                                Wa(d), bb(d, e);
                            }
                        }
                    }
                    break;

                  case "textarea":
                    ib(a, c);
                    break;

                  case "select":
                    null != (b = c.value) && fb(a, !!c.multiple, b, !1);
                }
            }, Gb = Rk, Hb = Sk;
            var tl = {
                usingClientEntryPoint: !1,
                Events: [ Cb, ue, Db, Eb, Fb, Rk ]
            }, ul = {
                findFiberByHostInstance: Wc,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            }, vl = {
                bundleType: ul.bundleType,
                version: ul.version,
                rendererPackageName: ul.rendererPackageName,
                rendererConfig: ul.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: ua.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(a) {
                    return null === (a = Zb(a)) ? null : a.stateNode;
                },
                findFiberByHostInstance: ul.findFiberByHostInstance || function kl() {
                    return null;
                },
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!wl.isDisabled && wl.supportsFiber) try {
                    kc = wl.inject(vl), lc = wl;
                } catch (a) {}
            }
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl, exports.createPortal = function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ol(b)) throw Error(p(200));
                return function dl(a, b, c) {
                    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: wa,
                        key: null == d ? null : "" + d,
                        children: a,
                        containerInfo: b,
                        implementation: c
                    };
                }(a, b, null, c);
            }, exports.createRoot = function(a, b) {
                if (!ol(a)) throw Error(p(299));
                var c = !1, d = "", e = ll;
                return null != b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), 
                void 0 !== b.onRecoverableError && (e = b.onRecoverableError)), b = cl(a, 1, !1, null, 0, c, 0, d, e), 
                a[uf] = b.current, sf(8 === a.nodeType ? a.parentNode : a), new ml(b);
            }, exports.findDOMNode = function(a) {
                if (null == a) return null;
                if (1 === a.nodeType) return a;
                var b = a._reactInternals;
                if (void 0 === b) {
                    if ("function" == typeof a.render) throw Error(p(188));
                    throw a = Object.keys(a).join(","), Error(p(268, a));
                }
                return a = null === (a = Zb(b)) ? null : a.stateNode;
            }, exports.flushSync = function(a) {
                return Sk(a);
            }, exports.hydrate = function(a, b, c) {
                if (!pl(b)) throw Error(p(200));
                return sl(null, a, b, !0, c);
            }, exports.hydrateRoot = function(a, b, c) {
                if (!ol(a)) throw Error(p(405));
                var d = null != c && c.hydratedSources || null, e = !1, f = "", g = ll;
                if (null != c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), 
                void 0 !== c.onRecoverableError && (g = c.onRecoverableError)), b = fl(b, null, a, 1, null != c ? c : null, e, 0, f, g), 
                a[uf] = b.current, sf(a), d) for (a = 0; a < d.length; a++) e = (e = (c = d[a])._getVersion)(c._source), 
                null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [ c, e ] : b.mutableSourceEagerHydrationData.push(c, e);
                return new nl(b);
            }, exports.render = function(a, b, c) {
                if (!pl(b)) throw Error(p(200));
                return sl(null, a, b, !1, c);
            }, exports.unmountComponentAtNode = function(a) {
                if (!pl(a)) throw Error(p(40));
                return !!a._reactRootContainer && (Sk((function() {
                    sl(null, null, a, !1, (function() {
                        a._reactRootContainer = null, a[uf] = null;
                    }));
                })), !0);
            }, exports.unstable_batchedUpdates = Rk, exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
                if (!pl(c)) throw Error(p(200));
                if (null == a || void 0 === a._reactInternals) throw Error(p(38));
                return sl(a, b, c, !1, d);
            }, exports.version = "18.2.0-next-9e3b772b8-20220608";
        }
        /***/ ,
        /***/ 935: 
        /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            // DCE check should happen before ReactDOM bundle executes so that
            // DevTools can report bad minification during injection.
            !function checkDCE() {
                /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    // Verify that the code above has been dead code eliminated (DCE'd).
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
                } catch (err) {
                    // DevTools shouldn't crash React, no matter what.
                    // We should still report in case we break this code.
                    console.error(err);
                }
            }(), module.exports = __webpack_require__(448);
        }
        /***/ ,
        /***/ 408: 
        /***/ (__unused_webpack_module, exports) => {
            /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            var l = Symbol["for"]("react.element"), n = Symbol["for"]("react.portal"), p = Symbol["for"]("react.fragment"), q = Symbol["for"]("react.strict_mode"), r = Symbol["for"]("react.profiler"), t = Symbol["for"]("react.provider"), u = Symbol["for"]("react.context"), v = Symbol["for"]("react.forward_ref"), w = Symbol["for"]("react.suspense"), x = Symbol["for"]("react.memo"), y = Symbol["for"]("react.lazy"), z = Symbol.iterator;
            var B = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }, C = Object.assign, D = {};
            function E(a, b, e) {
                this.props = a, this.context = b, this.refs = D, this.updater = e || B;
            }
            function F() {}
            function G(a, b, e) {
                this.props = a, this.context = b, this.refs = D, this.updater = e || B;
            }
            E.prototype.isReactComponent = {}, E.prototype.setState = function(a, b) {
                if ("object" != typeof a && "function" != typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            }, E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            }, F.prototype = E.prototype;
            var H = G.prototype = new F;
            H.constructor = G, C(H, E.prototype), H.isPureReactComponent = !0;
            var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
                current: null
            }, L = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), 
                b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e; else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in g = a.defaultProps) void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function O(a) {
                return "object" == typeof a && null !== a && a.$$typeof === l;
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" == typeof a && null !== a && null != a.key ? function escape(a) {
                    var b = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + a.replace(/[=:]/g, (function(a) {
                        return b[a];
                    }));
                }("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                "undefined" !== k && "boolean" !== k || (a = null);
                var h = !1;
                if (null === a) h = !0; else switch (k) {
                  case "string":
                  case "number":
                    h = !0;
                    break;

                  case "object":
                    switch (a.$$typeof) {
                      case l:
                      case n:
                        h = !0;
                    }
                }
                if (h) return c = c(h = a), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), 
                R(c, b, e, "", (function(a) {
                    return a;
                }))) : null != c && (O(c) && (c = function N(a, b) {
                    return {
                        $$typeof: l,
                        type: a.type,
                        key: b,
                        ref: a.ref,
                        props: a.props,
                        _owner: a._owner
                    };
                }(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), 
                b.push(c)), 1;
                if (h = 0, d = "" === d ? "." : d + ":", I(a)) for (var g = 0; g < a.length; g++) {
                    var f = d + Q(k = a[g], g);
                    h += R(k, b, e, f, c);
                } else if (f = function A(a) {
                    return null === a || "object" != typeof a ? null : "function" == typeof (a = z && a[z] || a["@@iterator"]) ? a : null;
                }(a), "function" == typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) h += R(k = k.value, b, e, f = d + Q(k, g++), c); else if ("object" === k) throw b = String(a), 
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                return R(a, d, "", "", (function(a) {
                    return b.call(e, a, c++);
                })), d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    (b = b()).then((function(b) {
                        0 !== a._status && -1 !== a._status || (a._status = 1, a._result = b);
                    }), (function(b) {
                        0 !== a._status && -1 !== a._status || (a._status = 2, a._result = b);
                    })), -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result["default"];
                throw a._result;
            }
            var U = {
                current: null
            }, V = {
                transition: null
            }, W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            exports.Children = {
                map: S,
                forEach: function(a, b, e) {
                    S(a, (function() {
                        b.apply(this, arguments);
                    }), e);
                },
                count: function(a) {
                    var b = 0;
                    return S(a, (function() {
                        b++;
                    })), b;
                },
                toArray: function(a) {
                    return S(a, (function(a) {
                        return a;
                    })) || [];
                },
                only: function(a) {
                    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                    return a;
                }
            }, exports.Component = E, exports.Fragment = p, exports.Profiler = r, exports.PureComponent = G, 
            exports.StrictMode = q, exports.Suspense = w, exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, 
            exports.cloneElement = function(a, b, e) {
                if (null == a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
                var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
                if (null != b) {
                    if (void 0 !== b.ref && (k = b.ref, h = K.current), void 0 !== b.key && (c = "" + b.key), 
                    a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) d.children = e; else if (1 < f) {
                    g = Array(f);
                    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
                    d.children = g;
                }
                return {
                    $$typeof: l,
                    type: a.type,
                    key: c,
                    ref: k,
                    props: d,
                    _owner: h
                };
            }, exports.createContext = function(a) {
                return (a = {
                    $$typeof: u,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: t,
                    _context: a
                }, a.Consumer = a;
            }, exports.createElement = M, exports.createFactory = function(a) {
                var b = M.bind(null, a);
                return b.type = a, b;
            }, exports.createRef = function() {
                return {
                    current: null
                };
            }, exports.forwardRef = function(a) {
                return {
                    $$typeof: v,
                    render: a
                };
            }, exports.isValidElement = O, exports.lazy = function(a) {
                return {
                    $$typeof: y,
                    _payload: {
                        _status: -1,
                        _result: a
                    },
                    _init: T
                };
            }, exports.memo = function(a, b) {
                return {
                    $$typeof: x,
                    type: a,
                    compare: void 0 === b ? null : b
                };
            }, exports.startTransition = function(a) {
                var b = V.transition;
                V.transition = {};
                try {
                    a();
                } finally {
                    V.transition = b;
                }
            }, exports.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.");
            }, exports.useCallback = function(a, b) {
                return U.current.useCallback(a, b);
            }, exports.useContext = function(a) {
                return U.current.useContext(a);
            }, exports.useDebugValue = function() {}, exports.useDeferredValue = function(a) {
                return U.current.useDeferredValue(a);
            }, exports.useEffect = function(a, b) {
                return U.current.useEffect(a, b);
            }, exports.useId = function() {
                return U.current.useId();
            }, exports.useImperativeHandle = function(a, b, e) {
                return U.current.useImperativeHandle(a, b, e);
            }, exports.useInsertionEffect = function(a, b) {
                return U.current.useInsertionEffect(a, b);
            }, exports.useLayoutEffect = function(a, b) {
                return U.current.useLayoutEffect(a, b);
            }, exports.useMemo = function(a, b) {
                return U.current.useMemo(a, b);
            }, exports.useReducer = function(a, b, e) {
                return U.current.useReducer(a, b, e);
            }, exports.useRef = function(a) {
                return U.current.useRef(a);
            }, exports.useState = function(a) {
                return U.current.useState(a);
            }, exports.useSyncExternalStore = function(a, b, e) {
                return U.current.useSyncExternalStore(a, b, e);
            }, exports.useTransition = function() {
                return U.current.useTransition();
            }, exports.version = "18.2.0";
        }
        /***/ ,
        /***/ 294: 
        /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = __webpack_require__(408);
        }
        /***/ ,
        /***/ 53: 
        /***/ (__unused_webpack_module, exports) => {
            /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            function f(a, b) {
                var c = a.length;
                a.push(b);
                a: for (;0 < c; ) {
                    var d = c - 1 >>> 1, e = a[d];
                    if (!(0 < g(e, b))) break a;
                    a[d] = b, a[c] = e, c = d;
                }
            }
            function h(a) {
                return 0 === a.length ? null : a[0];
            }
            function k(a) {
                if (0 === a.length) return null;
                var b = a[0], c = a.pop();
                if (c !== b) {
                    a[0] = c;
                    a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
                        var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
                        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, 
                        a[m] = c, d = m); else {
                            if (!(n < e && 0 > g(x, c))) break a;
                            a[d] = x, a[n] = c, d = n;
                        }
                    }
                }
                return b;
            }
            function g(a, b) {
                var c = a.sortIndex - b.sortIndex;
                return 0 !== c ? c : a.id - b.id;
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var l = performance;
                exports.unstable_now = function() {
                    return l.now();
                };
            } else {
                var p = Date, q = p.now();
                exports.unstable_now = function() {
                    return p.now() - q;
                };
            }
            var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" == typeof setTimeout ? setTimeout : null, E = "function" == typeof clearTimeout ? clearTimeout : null, F = "undefined" != typeof setImmediate ? setImmediate : null;
            function G(a) {
                for (var b = h(t); null !== b; ) {
                    if (null === b.callback) k(t); else {
                        if (!(b.startTime <= a)) break;
                        k(t), b.sortIndex = b.expirationTime, f(r, b);
                    }
                    b = h(t);
                }
            }
            function H(a) {
                if (B = !1, G(a), !A) if (null !== h(r)) A = !0, I(J); else {
                    var b = h(t);
                    null !== b && K(H, b.startTime - a);
                }
            }
            function J(a, b) {
                A = !1, B && (B = !1, E(L), L = -1), z = !0;
                var c = y;
                try {
                    for (G(b), v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
                        var d = v.callback;
                        if ("function" == typeof d) {
                            v.callback = null, y = v.priorityLevel;
                            var e = d(v.expirationTime <= b);
                            b = exports.unstable_now(), "function" == typeof e ? v.callback = e : v === h(r) && k(r), 
                            G(b);
                        } else k(r);
                        v = h(r);
                    }
                    if (null !== v) var w = !0; else {
                        var m = h(t);
                        null !== m && K(H, m.startTime - b), w = !1;
                    }
                    return w;
                } finally {
                    v = null, y = c, z = !1;
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var S, N = !1, O = null, L = -1, P = 5, Q = -1;
            function M() {
                return !(exports.unstable_now() - Q < P);
            }
            function R() {
                if (null !== O) {
                    var a = exports.unstable_now();
                    Q = a;
                    var b = !0;
                    try {
                        b = O(!0, a);
                    } finally {
                        b ? S() : (N = !1, O = null);
                    }
                } else N = !1;
            }
            if ("function" == typeof F) S = function() {
                F(R);
            }; else if ("undefined" != typeof MessageChannel) {
                var T = new MessageChannel, U = T.port2;
                T.port1.onmessage = R, S = function() {
                    U.postMessage(null);
                };
            } else S = function() {
                D(R, 0);
            };
            function I(a) {
                O = a, N || (N = !0, S());
            }
            function K(a, b) {
                L = D((function() {
                    a(exports.unstable_now());
                }), b);
            }
            exports.unstable_IdlePriority = 5, exports.unstable_ImmediatePriority = 1, exports.unstable_LowPriority = 4, 
            exports.unstable_NormalPriority = 3, exports.unstable_Profiling = null, exports.unstable_UserBlockingPriority = 2, 
            exports.unstable_cancelCallback = function(a) {
                a.callback = null;
            }, exports.unstable_continueExecution = function() {
                A || z || (A = !0, I(J));
            }, exports.unstable_forceFrameRate = function(a) {
                0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
            }, exports.unstable_getCurrentPriorityLevel = function() {
                return y;
            }, exports.unstable_getFirstCallbackNode = function() {
                return h(r);
            }, exports.unstable_next = function(a) {
                switch (y) {
                  case 1:
                  case 2:
                  case 3:
                    var b = 3;
                    break;

                  default:
                    b = y;
                }
                var c = y;
                y = b;
                try {
                    return a();
                } finally {
                    y = c;
                }
            }, exports.unstable_pauseExecution = function() {}, exports.unstable_requestPaint = function() {}, 
            exports.unstable_runWithPriority = function(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;

                  default:
                    a = 3;
                }
                var c = y;
                y = a;
                try {
                    return b();
                } finally {
                    y = c;
                }
            }, exports.unstable_scheduleCallback = function(a, b, c) {
                var d = exports.unstable_now();
                switch ("object" == typeof c && null !== c ? c = "number" == typeof (c = c.delay) && 0 < c ? d + c : d : c = d, 
                a) {
                  case 1:
                    var e = -1;
                    break;

                  case 2:
                    e = 250;
                    break;

                  case 5:
                    e = 1073741823;
                    break;

                  case 4:
                    e = 1e4;
                    break;

                  default:
                    e = 5e3;
                }
                return a = {
                    id: u++,
                    callback: b,
                    priorityLevel: a,
                    startTime: c,
                    expirationTime: e = c + e,
                    sortIndex: -1
                }, c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), 
                L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, 
                I(J))), a;
            }, exports.unstable_shouldYield = M, exports.unstable_wrapCallback = function(a) {
                var b = y;
                return function() {
                    var c = y;
                    y = b;
                    try {
                        return a.apply(this, arguments);
                    } finally {
                        y = c;
                    }
                };
            };
        }
        /***/ ,
        /***/ 840: 
        /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = __webpack_require__(53);
        }
        /***/ ,
        /***/ 379: 
        /***/ module => {
            var stylesInDOM = [];
            function getIndexByIdentifier(identifier) {
                for (var result = -1, i = 0; i < stylesInDOM.length; i++) if (stylesInDOM[i].identifier === identifier) {
                    result = i;
                    break;
                }
                return result;
            }
            function modulesToDom(list, options) {
                for (var idCountMap = {}, identifiers = [], i = 0; i < list.length; i++) {
                    var item = list[i], id = options.base ? item[0] + options.base : item[0], count = idCountMap[id] || 0, identifier = "".concat(id, " ").concat(count);
                    idCountMap[id] = count + 1;
                    var indexByIdentifier = getIndexByIdentifier(identifier), obj = {
                        css: item[1],
                        media: item[2],
                        sourceMap: item[3],
                        supports: item[4],
                        layer: item[5]
                    };
                    if (-1 !== indexByIdentifier) stylesInDOM[indexByIdentifier].references++, stylesInDOM[indexByIdentifier].updater(obj); else {
                        var updater = addElementStyle(obj, options);
                        options.byIndex = i, stylesInDOM.splice(i, 0, {
                            identifier,
                            updater,
                            references: 1
                        });
                    }
                    identifiers.push(identifier);
                }
                return identifiers;
            }
            function addElementStyle(obj, options) {
                var api = options.domAPI(options);
                api.update(obj);
                return function updater(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) return;
                        api.update(obj = newObj);
                    } else api.remove();
                };
            }
            module.exports = function(list, options) {
                var lastIdentifiers = modulesToDom(list = list || [], options = options || {});
                return function update(newList) {
                    newList = newList || [];
                    for (var i = 0; i < lastIdentifiers.length; i++) {
                        var index = getIndexByIdentifier(lastIdentifiers[i]);
                        stylesInDOM[index].references--;
                    }
                    for (var newLastIdentifiers = modulesToDom(newList, options), _i = 0; _i < lastIdentifiers.length; _i++) {
                        var _index = getIndexByIdentifier(lastIdentifiers[_i]);
                        0 === stylesInDOM[_index].references && (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
                    }
                    lastIdentifiers = newLastIdentifiers;
                };
            };
        }
        /***/ ,
        /***/ 569: 
        /***/ module => {
            var memo = {};
            /* istanbul ignore next  */            module.exports = 
            /* istanbul ignore next  */
            function insertBySelector(insert, style) {
                var target = function getTarget(target) {
                    if ("undefined" == typeof memo[target]) {
                        var styleTarget = document.querySelector(target);
                        // Special case to return head of iframe instead of iframe itself
                                                if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                            // This will throw an exception if access to iframe is blocked
                            // due to cross-origin restrictions
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            // istanbul ignore next
                            styleTarget = null;
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                }(insert);
                if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                target.appendChild(style);
            };
        }
        /***/ ,
        /***/ 216: 
        /***/ module => {
            module.exports = 
            /* istanbul ignore next  */
            function insertStyleElement(options) {
                var element = document.createElement("style");
                return options.setAttributes(element, options.attributes), options.insert(element, options.options), 
                element;
            };
        }
        /***/ ,
        /***/ 565: 
        /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = 
            /* istanbul ignore next  */
            function setAttributesWithoutAttributes(styleElement) {
                var nonce = __webpack_require__.nc;
                nonce && styleElement.setAttribute("nonce", nonce);
            };
        }
        /***/ ,
        /***/ 795: 
        /***/ module => {
            module.exports = 
            /* istanbul ignore next  */
            function domAPI(options) {
                if ("undefined" == typeof document) return {
                    update: function update() {},
                    remove: function remove() {}
                };
                var styleElement = options.insertStyleElement(options);
                return {
                    update: function update(obj) {
                        !
                        /* istanbul ignore next  */
                        function apply(styleElement, options, obj) {
                            var css = "";
                            obj.supports && (css += "@supports (".concat(obj.supports, ") {")), obj.media && (css += "@media ".concat(obj.media, " {"));
                            var needLayer = "undefined" != typeof obj.layer;
                            needLayer && (css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {")), 
                            css += obj.css, needLayer && (css += "}"), obj.media && (css += "}"), obj.supports && (css += "}");
                            var sourceMap = obj.sourceMap;
                            sourceMap && "undefined" != typeof btoa && (css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */")), 
                            // For old IE
                            /* istanbul ignore if  */
                            options.styleTagTransform(css, styleElement, options.options);
                        }(styleElement, options, obj);
                    },
                    remove: function remove() {
                        !function removeStyleElement(styleElement) {
                            // istanbul ignore if
                            if (null === styleElement.parentNode) return !1;
                            styleElement.parentNode.removeChild(styleElement);
                        }(styleElement);
                    }
                };
            };
        }
        /***/ ,
        /***/ 589: 
        /***/ module => {
            module.exports = 
            /* istanbul ignore next  */
            function styleTagTransform(css, styleElement) {
                if (styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                    for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                    styleElement.appendChild(document.createTextNode(css));
                }
            };
        }
        /***/
        /******/    }, __webpack_module_cache__ = {};
    /************************************************************************/
    /******/ // The module cache
    /******/    
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/        if (cachedModule !== undefined) 
        /******/ return cachedModule.exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/        var module = __webpack_module_cache__[moduleId] = {
            /******/ id: moduleId,
            /******/ // no module.loaded needed
            /******/ exports: {}
            /******/        };
        /******/
        /******/ // Execute the module function
        /******/        
        /******/
        /******/ // Return the exports of the module
        /******/ return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), 
        module.exports;
        /******/    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/    
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = module => {
        /******/ var getter = module && module.__esModule ? 
        /******/ () => module["default"]
        /******/ : () => module
        /******/;
        /******/ return __webpack_require__.d(getter, {
            a: getter
        }), getter;
        /******/    }, 
    /******/
    /******/ /* webpack/runtime/create fake namespace object */
    /******/ getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__
    /******/ , 
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 16: return value when it's Promise-like
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function(value, mode) {
        /******/ if (
        /******/ 1 & mode && (value = this(value)), 8 & mode) return value;
        /******/        if ("object" == typeof value && value) {
            /******/ if (4 & mode && value.__esModule) return value;
            /******/            if (16 & mode && "function" == typeof value.then) return value;
            /******/        }
        /******/        var ns = Object.create(null);
        /******/        __webpack_require__.r(ns);
        /******/ var def = {};
        /******/        leafPrototypes = leafPrototypes || [ null, getProto({}), getProto([]), getProto(getProto) ];
        /******/ for (var current = 2 & mode && value; "object" == typeof current && !~leafPrototypes.indexOf(current); current = getProto(current)) 
        /******/ Object.getOwnPropertyNames(current).forEach((key => def[key] = () => value[key]));
        /******/
        /******/        
        /******/ return def["default"] = () => value
        /******/ , __webpack_require__.d(ns, def), ns;
        /******/    }, 
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) 
        /******/ __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && 
        /******/ Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        })
        /******/;
        /******/    }, 
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/ , 
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = exports => {
        /******/ "undefined" != typeof Symbol && Symbol.toStringTag && 
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        })
        /******/ , Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }
    /******/ , 
    /******/ __webpack_require__.nc = undefined, 
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        // EXTERNAL MODULE: ./node_modules/react/index.js
        var react = __webpack_require__(294), react_namespaceObject =  __webpack_require__.t(react, 2), react_dom = __webpack_require__(935), injectStylesIntoStyleTag = __webpack_require__(379), injectStylesIntoStyleTag_default =  __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__(795), styleDomAPI_default =  __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__(569), insertBySelector_default =  __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__(565), setAttributesWithoutAttributes_default =  __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__(216), insertStyleElement_default =  __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__(589), styleTagTransform_default =  __webpack_require__.n(styleTagTransform), styles = __webpack_require__(182), options = {};
        options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), 
        options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), 
        options.insertStyleElement = insertStyleElement_default();
        injectStylesIntoStyleTag_default()(styles /* default */ .Z, options);
        /* harmony default export */        styles /* default */ .Z && styles /* default */ .Z.locals ? styles /* default */ .Z.locals : undefined;
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
        function class_names_t(...r) {
            return Array.from(new Set(r.flatMap((n => "string" == typeof n ? n.split(" ") : [])))).filter(Boolean).join(" ");
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
        function match_u(r, n, ...a) {
            if (r in n) {
                let e = n[r];
                return "function" == typeof e ? e(...a) : e;
            }
            let t = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e => `"${e}"`)).join(", ")}.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, match_u), t;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
        var S = (a => (a[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", 
        a[a.Static = 2] = "Static", a))(S || {}), render_j = (e => (e[e.Unmount = 0] = "Unmount", 
        e[e.Hidden = 1] = "Hidden", e))(render_j || {});
        function X({ourProps: r, theirProps: t, slot: e, defaultTag: a, features: s, visible: n = !0, name: f}) {
            let o = N(t, r);
            if (n) return c(o, e, a, f);
            let u = null != s ? s : 0;
            if (2 & u) {
                let {"static": l = !1, ...p} = o;
                if (l) return c(p, e, a, f);
            }
            if (1 & u) {
                let {unmount: l = !0, ...p} = o;
                return match_u(l ? 0 : 1, {
                    0: () => null,
                    1: () => c({
                        ...p,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, e, a, f)
                });
            }
            return c(o, e, a, f);
        }
        function c(r, t = {}, e, a) {
            let {as: s = e, children: n, refName: f = "ref", ...o} = g(r, [ "unmount", "static" ]), u = void 0 !== r.ref ? {
                [f]: r.ref
            } : {}, l = "function" == typeof n ? n(t) : n;
            "className" in o && o.className && "function" == typeof o.className && (o.className = o.className(t));
            let p = {};
            if (t) {
                let i = !1, m = [];
                for (let [y, d] of Object.entries(t)) "boolean" == typeof d && (i = !0), !0 === d && m.push(y);
                i && (p["data-headlessui-state"] = m.join(" "));
            }
            if (s === react.Fragment && Object.keys(R(o)).length > 0) {
                if (!(0, react.isValidElement)(l) || Array.isArray(l) && l.length > 1) throw new Error([ 'Passing props on "Fragment"!', "", `The current component <${a} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o).map((d => `  - ${d}`)).join("\n"), "", "You can apply a few solutions:", [ 'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element." ].map((d => `  - ${d}`)).join("\n") ].join("\n"));
                let i = l.props, m = "function" == typeof (null == i ? void 0 : i.className) ? (...d) => class_names_t(null == i ? void 0 : i.className(...d), o.className) : class_names_t(null == i ? void 0 : i.className, o.className), y = m ? {
                    className: m
                } : {};
                return (0, react.cloneElement)(l, Object.assign({}, N(l.props, R(g(o, [ "ref" ]))), p, u, function w(...r) {
                    return {
                        ref: r.every((t => null == t)) ? void 0 : t => {
                            for (let e of r) null != e && ("function" == typeof e ? e(t) : e.current = t);
                        }
                    };
                }(l.ref, u.ref), y));
            }
            return (0, react.createElement)(s, Object.assign({}, g(o, [ "ref" ]), s !== react.Fragment && u, s !== react.Fragment && p), l);
        }
        function N(...r) {
            if (0 === r.length) return {};
            if (1 === r.length) return r[0];
            let t = {}, e = {};
            for (let s of r) for (let n in s) n.startsWith("on") && "function" == typeof s[n] ? (null != e[n] || (e[n] = []), 
            e[n].push(s[n])) : t[n] = s[n];
            if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(e).map((s => [ s, void 0 ]))));
            for (let s in e) Object.assign(t, {
                [s](n, ...f) {
                    let o = e[s];
                    for (let u of o) {
                        if ((n instanceof Event || (null == n ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented) return;
                        u(n, ...f);
                    }
                }
            });
            return t;
        }
        function D(r) {
            var t;
            return Object.assign((0, react.forwardRef)(r), {
                displayName: null != (t = r.displayName) ? t : r.name
            });
        }
        function R(r) {
            let t = Object.assign({}, r);
            for (let e in t) void 0 === t[e] && delete t[e];
            return t;
        }
        function g(r, t = []) {
            let e = Object.assign({}, r);
            for (let a of t) a in e && delete e[a];
            return e;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
        let n = (0, react.createContext)(null);
        n.displayName = "OpenClosedContext";
        var open_closed_d = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", 
        e[e.Opening = 8] = "Opening", e))(open_closed_d || {});
        function C() {
            return (0, react.useContext)(n);
        }
        function open_closed_c({value: o, children: r}) {
            return react.createElement(n.Provider, {
                value: o
            }, r);
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
        var i = Object.defineProperty, r = (t, e, n) => (((t, e, n) => {
            e in t ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n;
        })(t, "symbol" != typeof e ? e + "" : e, n), n);
        let s = new class o {
            constructor() {
                r(this, "current", this.detect()), r(this, "handoffState", "pending"), r(this, "currentId", 0);
            }
            set(e) {
                this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
            }
            reset() {
                this.set(this.detect());
            }
            nextId() {
                return ++this.currentId;
            }
            get isServer() {
                return "server" === this.current;
            }
            get isClient() {
                return "client" === this.current;
            }
            detect() {
                return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client";
            }
            handoff() {
                "pending" === this.handoffState && (this.handoffState = "complete");
            }
            get isHandoffComplete() {
                return "complete" === this.handoffState;
            }
        }, use_iso_morphic_effect_l = (e, f) => {
            s.isServer ? (0, react.useEffect)(e, f) : (0, react.useLayoutEffect)(e, f);
        };
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
        function f() {
            let e = (0, react.useRef)(!1);
            return use_iso_morphic_effect_l((() => (e.current = !0, () => {
                e.current = !1;
            })), []), e;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
        function use_latest_value_s(e) {
            let r = (0, react.useRef)(e);
            return use_iso_morphic_effect_l((() => {
                r.current = e;
            }), [ e ]), r;
        }
        function use_server_handoff_complete_l() {
            let r = // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
            function use_server_handoff_complete_s() {
                let r = "undefined" == typeof document;
                return (o => o.useSyncExternalStore)(react_namespaceObject)((() => () => {}), (() => !1), (() => !r));
            }(), [e, n] = react.useState(s.isHandoffComplete);
            return e && !1 === s.isHandoffComplete && n(!1), react.useEffect((() => {
                !0 !== e && n(!0);
            }), [ e ]), react.useEffect((() => s.handoff()), []), !r && e;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
        let use_event_o = function(t) {
            let e = use_latest_value_s(t);
            return react.useCallback(((...r) => e.current(...r)), [ e ]);
        }, u = Symbol();
        function use_sync_refs_y(...t) {
            let n = (0, react.useRef)(t);
            (0, react.useEffect)((() => {
                n.current = t;
            }), [ t ]);
            let c = use_event_o((e => {
                for (let o of n.current) null != o && ("function" == typeof o ? o(e) : o.current = e);
            }));
            return t.every((e => null == e || (null == e ? void 0 : e[u]))) ? void 0 : c;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
        function disposables_o() {
            let n = [], r = {
                addEventListener: (e, t, s, a) => (e.addEventListener(t, s, a), r.add((() => e.removeEventListener(t, s, a)))),
                requestAnimationFrame(...e) {
                    let t = requestAnimationFrame(...e);
                    return r.add((() => cancelAnimationFrame(t)));
                },
                nextFrame: (...e) => r.requestAnimationFrame((() => r.requestAnimationFrame(...e))),
                setTimeout(...e) {
                    let t = setTimeout(...e);
                    return r.add((() => clearTimeout(t)));
                },
                microTask(...e) {
                    let t = {
                        current: !0
                    };
                    // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
                    return function micro_task_t(e) {
                        "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e)["catch"]((o => setTimeout((() => {
                            throw o;
                        }))));
                    }((() => {
                        t.current && e[0]();
                    })), r.add((() => {
                        t.current = !1;
                    }));
                },
                style(e, t, s) {
                    let a = e.style.getPropertyValue(t);
                    return Object.assign(e.style, {
                        [t]: s
                    }), this.add((() => {
                        Object.assign(e.style, {
                            [t]: a
                        });
                    }));
                },
                group(e) {
                    let t = disposables_o();
                    return e(t), this.add((() => t.dispose()));
                },
                add: e => (n.push(e), () => {
                    let t = n.indexOf(e);
                    if (t >= 0) for (let s of n.splice(t, 1)) s();
                }),
                dispose() {
                    for (let e of n.splice(0)) e();
                }
            };
            return r;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
        function transition_g(t, ...e) {
            t && e.length > 0 && t.classList.add(...e);
        }
        function v(t, ...e) {
            t && e.length > 0 && t.classList.remove(...e);
        }
        function M(t, e, n, m) {
            let a = n ? "enter" : "leave", u = disposables_o(), p = void 0 !== m ? // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/once.js
            function once_l(r) {
                let e = {
                    called: !1
                };
                return (...t) => {
                    if (!e.called) return e.called = !0, r(...t);
                };
            }(m) : () => {};
            "enter" === a && (t.removeAttribute("hidden"), t.style.display = "");
            let o = match_u(a, {
                enter: () => e.enter,
                leave: () => e.leave
            }), l = match_u(a, {
                enter: () => e.enterTo,
                leave: () => e.leaveTo
            }), r = match_u(a, {
                enter: () => e.enterFrom,
                leave: () => e.leaveFrom
            });
            return v(t, ...e.base, ...e.enter, ...e.enterTo, ...e.enterFrom, ...e.leave, ...e.leaveFrom, ...e.leaveTo, ...e.entered), 
            transition_g(t, ...e.base, ...o, ...r), u.nextFrame((() => {
                v(t, ...e.base, ...o, ...r), transition_g(t, ...e.base, ...o, ...l), function b(t, e) {
                    let n = disposables_o();
                    if (!t) return n.dispose;
                    let {transitionDuration: m, transitionDelay: a} = getComputedStyle(t), [u, p] = [ m, a ].map((l => {
                        let [r = 0] = l.split(",").filter(Boolean).map((i => i.includes("ms") ? parseFloat(i) : 1e3 * parseFloat(i))).sort(((i, T) => T - i));
                        return r;
                    })), o = u + p;
                    if (0 !== o) {
                        n.group((r => {
                            r.setTimeout((() => {
                                e(), r.dispose();
                            }), o), r.addEventListener(t, "transitionrun", (i => {
                                i.target === i.currentTarget && r.dispose();
                            }));
                        }));
                        let l = n.addEventListener(t, "transitionend", (r => {
                            r.target === r.currentTarget && (e(), l());
                        }));
                    } else e();
                    return n.add((() => e())), n.dispose;
                }(t, (() => (v(t, ...e.base, ...o), transition_g(t, ...e.base, ...e.entered), p())));
            })), u.dispose;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
        function use_disposables_p() {
            let [e] = (0, react.useState)(disposables_o);
            return (0, react.useEffect)((() => () => e.dispose()), [ e ]), e;
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-transition.js
        function E({immediate: t, container: s, direction: n, classes: u, onStart: a, onStop: c}) {
            let l = f(), d = use_disposables_p(), e = use_latest_value_s(n);
            use_iso_morphic_effect_l((() => {
                t && (e.current = "enter");
            }), [ t ]), use_iso_morphic_effect_l((() => {
                let r = disposables_o();
                d.add(r.dispose);
                let i = s.current;
                if (i && "idle" !== e.current && l.current) return r.dispose(), a.current(e.current), 
                r.add(M(i, u.current, "enter" === e.current, (() => {
                    r.dispose(), c.current(e.current);
                }))), r.dispose;
            }), [ n ]);
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-flags.js
        function use_flags_c(a = 0) {
            let [l, r] = (0, react.useState)(a), t = f(), o = (0, react.useCallback)((e => {
                t.current && r((u => u | e));
            }), [ l, t ]), m = (0, react.useCallback)((e => Boolean(l & e)), [ l ]), s = (0, 
            react.useCallback)((e => {
                t.current && r((u => u & ~e));
            }), [ r, t ]), g = (0, react.useCallback)((e => {
                t.current && r((u => u ^ e));
            }), [ r ]);
            return {
                flags: l,
                addFlag: o,
                hasFlag: m,
                removeFlag: s,
                toggleFlag: g
            };
        }
        // CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js
        function transition_S(t = "") {
            return t.split(" ").filter((n => n.trim().length > 1));
        }
        let _ = (0, react.createContext)(null);
        _.displayName = "TransitionContext";
        var be = (r => (r.Visible = "visible", r.Hidden = "hidden", r))(be || {});
        let transition_M = (0, react.createContext)(null);
        function U(t) {
            return "children" in t ? U(t.children) : t.current.filter((({el: n}) => null !== n.current)).filter((({state: n}) => "visible" === n)).length > 0;
        }
        function oe(t, n) {
            let r = use_latest_value_s(t), s = (0, react.useRef)([]), y = f(), D = use_disposables_p(), c = use_event_o(((i, e = render_j.Hidden) => {
                let a = s.current.findIndex((({el: o}) => o === i));
                -1 !== a && (match_u(e, {
                    [render_j.Unmount]() {
                        s.current.splice(a, 1);
                    },
                    [render_j.Hidden]() {
                        s.current[a].state = "hidden";
                    }
                }), D.microTask((() => {
                    var o;
                    !U(s) && y.current && (null == (o = r.current) || o.call(r));
                })));
            })), x = use_event_o((i => {
                let e = s.current.find((({el: a}) => a === i));
                return e ? "visible" !== e.state && (e.state = "visible") : s.current.push({
                    el: i,
                    state: "visible"
                }), () => c(i, render_j.Unmount);
            })), p = (0, react.useRef)([]), h = (0, react.useRef)(Promise.resolve()), u = (0, 
            react.useRef)({
                enter: [],
                leave: [],
                idle: []
            }), v = use_event_o(((i, e, a) => {
                p.current.splice(0), n && (n.chains.current[e] = n.chains.current[e].filter((([o]) => o !== i))), 
                null == n || n.chains.current[e].push([ i, new Promise((o => {
                    p.current.push(o);
                })) ]), null == n || n.chains.current[e].push([ i, new Promise((o => {
                    Promise.all(u.current[e].map((([f, P]) => P))).then((() => o()));
                })) ]), "enter" === e ? h.current = h.current.then((() => null == n ? void 0 : n.wait.current)).then((() => a(e))) : a(e);
            })), d = use_event_o(((i, e, a) => {
                Promise.all(u.current[e].splice(0).map((([o, f]) => f))).then((() => {
                    var o;
                    null == (o = p.current.shift()) || o();
                })).then((() => a(e)));
            }));
            return (0, react.useMemo)((() => ({
                children: s,
                register: x,
                unregister: c,
                onStart: v,
                onStop: d,
                wait: h,
                chains: u
            })), [ x, c, s, v, d, u, h ]);
        }
        function xe() {}
        transition_M.displayName = "NestingContext";
        let Pe = [ "beforeEnter", "afterEnter", "beforeLeave", "afterLeave" ];
        function se(t) {
            var r;
            let n = {};
            for (let s of Pe) n[s] = null != (r = t[s]) ? r : xe;
            return n;
        }
        let ae = S.RenderStrategy;
        let W = D((function He(t, n) {
            let {show: r, appear: s = !1, unmount: y = !0, ...D} = t, c = (0, react.useRef)(null), x = use_sync_refs_y(c, n);
            use_server_handoff_complete_l();
            let p = C();
            if (void 0 === r && null !== p && (r = (p & open_closed_d.Open) === open_closed_d.Open), 
            ![ !0, !1 ].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            let [h, u] = (0, react.useState)(r ? "visible" : "hidden"), v = oe((() => {
                u("hidden");
            })), [d, i] = (0, react.useState)(!0), e = (0, react.useRef)([ r ]);
            use_iso_morphic_effect_l((() => {
                !1 !== d && e.current[e.current.length - 1] !== r && (e.current.push(r), i(!1));
            }), [ e, r ]);
            let a = (0, react.useMemo)((() => ({
                show: r,
                appear: s,
                initial: d
            })), [ r, s, d ]);
            (0, react.useEffect)((() => {
                if (r) u("visible"); else if (U(v)) {
                    let T = c.current;
                    if (!T) return;
                    let l = T.getBoundingClientRect();
                    0 === l.x && 0 === l.y && 0 === l.width && 0 === l.height && u("hidden");
                } else u("hidden");
            }), [ r, v ]);
            let o = {
                unmount: y
            }, f = use_event_o((() => {
                var T;
                d && i(!1), null == (T = t.beforeEnter) || T.call(t);
            })), P = use_event_o((() => {
                var T;
                d && i(!1), null == (T = t.beforeLeave) || T.call(t);
            }));
            return react.createElement(transition_M.Provider, {
                value: v
            }, react.createElement(_.Provider, {
                value: a
            }, X({
                ourProps: {
                    ...o,
                    as: react.Fragment,
                    children: react.createElement(le, {
                        ref: x,
                        ...o,
                        ...D,
                        beforeEnter: f,
                        beforeLeave: P
                    })
                },
                theirProps: {},
                defaultTag: react.Fragment,
                features: ae,
                visible: "visible" === h,
                name: "Transition"
            })));
        })), le = D((function De(t, n) {
            var K, Q;
            let {beforeEnter: r, afterEnter: s, beforeLeave: y, afterLeave: D, enter: c, enterFrom: x, enterTo: p, entered: h, leave: u, leaveFrom: v, leaveTo: d, ...i} = t, e = (0, 
            react.useRef)(null), a = use_sync_refs_y(e, n), o = null == (K = i.unmount) || K ? render_j.Unmount : render_j.Hidden, {show: f, appear: P, initial: T} = function Se() {
                let t = (0, react.useContext)(_);
                if (null === t) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return t;
            }(), [l, j] = (0, react.useState)(f ? "visible" : "hidden"), q = function Ne() {
                let t = (0, react.useContext)(transition_M);
                if (null === t) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return t;
            }(), {register: O, unregister: V} = q;
            (0, react.useEffect)((() => O(e)), [ O, e ]), (0, react.useEffect)((() => {
                if (o === render_j.Hidden && e.current) return f && "visible" !== l ? void j("visible") : match_u(l, {
                    hidden: () => V(e),
                    visible: () => O(e)
                });
            }), [ l, e, O, V, f, o ]);
            let k = use_latest_value_s({
                base: transition_S(i.className),
                enter: transition_S(c),
                enterFrom: transition_S(x),
                enterTo: transition_S(p),
                entered: transition_S(h),
                leave: transition_S(u),
                leaveFrom: transition_S(v),
                leaveTo: transition_S(d)
            }), w = function Re(t) {
                let n = (0, react.useRef)(se(t));
                return (0, react.useEffect)((() => {
                    n.current = se(t);
                }), [ t ]), n;
            }({
                beforeEnter: r,
                afterEnter: s,
                beforeLeave: y,
                afterLeave: D
            }), G = use_server_handoff_complete_l();
            (0, react.useEffect)((() => {
                if (G && "visible" === l && null === e.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
            }), [ e, l, G ]);
            let z = P && f && T, Te = !G || T && !P ? "idle" : f ? "enter" : "leave", H = use_flags_c(0), de = use_event_o((g => match_u(g, {
                enter: () => {
                    H.addFlag(open_closed_d.Opening), w.current.beforeEnter();
                },
                leave: () => {
                    H.addFlag(open_closed_d.Closing), w.current.beforeLeave();
                },
                idle: () => {}
            }))), fe = use_event_o((g => match_u(g, {
                enter: () => {
                    H.removeFlag(open_closed_d.Opening), w.current.afterEnter();
                },
                leave: () => {
                    H.removeFlag(open_closed_d.Closing), w.current.afterLeave();
                },
                idle: () => {}
            }))), A = oe((() => {
                j("hidden"), V(e);
            }), q);
            E({
                immediate: z,
                container: e,
                classes: k,
                direction: Te,
                onStart: use_latest_value_s((g => {
                    A.onStart(e, g, de);
                })),
                onStop: use_latest_value_s((g => {
                    A.onStop(e, g, fe), "leave" === g && !U(A) && (j("hidden"), V(e));
                }))
            });
            let R = i, me = {
                ref: a
            };
            return z ? R = {
                ...R,
                className: class_names_t(i.className, ...k.current.enter, ...k.current.enterFrom)
            } : (R.className = class_names_t(i.className, null == (Q = e.current) ? void 0 : Q.className), 
            "" === R.className && delete R.className), react.createElement(transition_M.Provider, {
                value: A
            }, react.createElement(open_closed_c, {
                value: match_u(l, {
                    visible: open_closed_d.Open,
                    hidden: open_closed_d.Closed
                }) | H.flags
            }, X({
                ourProps: me,
                theirProps: R,
                defaultTag: "div",
                features: ae,
                visible: "visible" === l,
                name: "Transition.Child"
            })));
        })), Le = D((function Fe(t, n) {
            let r = null !== (0, react.useContext)(_), s = null !== C();
            return react.createElement(react.Fragment, null, !r && s ? react.createElement(W, {
                ref: n,
                ...t
            }) : react.createElement(le, {
                ref: n,
                ...t
            }));
        })), tt = Object.assign(W, {
            Child: Le,
            Root: W
        });
        // CONCATENATED MODULE: ./src/shared/types.ts
        var PurchaseCategory;
        !function(PurchaseCategory) {
            PurchaseCategory.Rent = "Rent", PurchaseCategory.Utilities = "Utilities", PurchaseCategory.Grocery = "Grocery", 
            PurchaseCategory.Dining = "Dining", PurchaseCategory.Dog = "Dog", PurchaseCategory.Car = "Car", 
            PurchaseCategory.Shopping = "Shopping", PurchaseCategory.Uncategorized = "Uncategorized";
        }(PurchaseCategory || (PurchaseCategory = {}));
        // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/components/toggleSwitch.css
        var toggleSwitch = __webpack_require__(27), toggleSwitch_options = {};
        toggleSwitch_options.styleTagTransform = styleTagTransform_default(), toggleSwitch_options.setAttributes = setAttributesWithoutAttributes_default(), 
        toggleSwitch_options.insert = insertBySelector_default().bind(null, "head"), toggleSwitch_options.domAPI = styleDomAPI_default(), 
        toggleSwitch_options.insertStyleElement = insertStyleElement_default();
        injectStylesIntoStyleTag_default()(toggleSwitch /* default */ .Z, toggleSwitch_options);
        /* harmony default export */        toggleSwitch /* default */ .Z && toggleSwitch /* default */ .Z.locals ? toggleSwitch /* default */ .Z.locals : undefined;
        // CONCATENATED MODULE: ./src/client/components/toggleSwitch.tsx
        var extendStatics, __extends = undefined && undefined.__extends || (extendStatics = function(d, b) {
            return extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
            }, extendStatics(d, b);
        }, function(d, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        }), ToggleSwitch = function(_super) {
            function ToggleSwitch(props) {
                var _this = _super.call(this, props) || this;
                return _this.state = {
                    value: !1
                }, _this.componentDidMount = function() {
                    _this.setState({
                        value: _this.props.value
                    });
                }, _this.onClickHandler = function() {
                    _this.props.disabled || (_this.props.onChange(!_this.state.value), _this.setState({
                        value: !_this.state.value
                    }));
                }, _this;
            }
            return __extends(ToggleSwitch, _super), ToggleSwitch.prototype.componentDidUpdate = function(prevProps) {
                this.props.value !== prevProps.value && this.setState({
                    value: this.props.value
                });
            }, ToggleSwitch.prototype.render = function() {
                var _this = this;
                return react.createElement("div", {
                    className: "toggleBox flex flex-col items-start h-6.5 w-12 rounded-full border-2 border-teal-950",
                    onClick: function() {
                        return _this.onClickHandler();
                    }
                }, react.createElement("div", {
                    className: "togglePin h-6 w-6 rounded-full " + (this.state.value ? "togglePin-toggled bg-budget" : "togglePin-untoggled bg-budget-dark") + (this.props.disabled ? " !bg-slate-500" : "")
                }), react.createElement("input", {
                    className: "hidden",
                    name: "archived",
                    checked: this.state.value,
                    type: "checkbox"
                }));
            }, ToggleSwitch;
        }(react.Component), amortizedFormInput_extends = undefined && undefined.__extends || function() {
            var extendStatics = function(d, b) {
                return extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                }, extendStatics(d, b);
            };
            return function(d, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), AmortizedFormInput = function(_super) {
            function AmortizedFormInput(props) {
                var _this = _super.call(this, props) || this;
                return _this.handleToggleSwitch = function() {
                    _this.props.setAmortized(!_this.props.amortized);
                }, _this.updateAmortizedLength = function(numOfMonths) {
                    _this.props.setAmortizedLength(numOfMonths);
                }, _this.increaseMonthsButton = function() {
                    var months = parseInt(_this.props.amortizedLength);
                    isNaN(months) && (months = 0), _this.updateAmortizedLength((months + 1).toString());
                }, _this.decreaseMonthsButton = function() {
                    var months = parseInt(_this.props.amortizedLength);
                    isNaN(months) && (months = 0), _this.updateAmortizedLength((months - 1).toString());
                }, _this;
            }
            return amortizedFormInput_extends(AmortizedFormInput, _super), AmortizedFormInput.prototype.render = function() {
                var _this = this;
                return react.createElement(react.Fragment, null, react.createElement("div", {
                    className: "flex flex-row m-2 items-center place-items-center"
                }, react.createElement("label", {
                    className: "mr-2"
                }, "Amortize?: "), react.createElement("input", {
                    value: JSON.stringify(this.props.amortized),
                    type: "text",
                    className: "hidden",
                    id: "amortized",
                    name: "amortized"
                }), react.createElement(ToggleSwitch, {
                    disabled: !1,
                    value: this.props.amortized,
                    onChange: function() {
                        return _this.props.setAmortized(!_this.props.amortized);
                    }
                })), this.props.amortized && react.createElement("div", null, react.createElement("label", null, "Number of Months to Amortize: "), react.createElement("input", {
                    name: "amortizedLength",
                    type: "text",
                    pattern: "^\\d*(\\.\\d{0,2})?$",
                    value: this.props.amortizedLength,
                    onChange: function(e) {
                        return _this.updateAmortizedLength(e.target.value);
                    }
                }), react.createElement("div", {
                    className: "flex flex-row  mt-3 items-center justify-center"
                }, react.createElement("button", {
                    type: "button",
                    onClick: this.decreaseMonthsButton,
                    className: "rounded-lg mr-3 px-4 py-2 text-white bg-budget-dark hover:bg-budget"
                }, "-"), react.createElement("button", {
                    type: "button",
                    onClick: this.increaseMonthsButton,
                    className: "rounded-lg px-4 py-2 text-white bg-budget-dark hover:bg-budget"
                }, "+"))));
            }, AmortizedFormInput;
        }(react.Component);
        /* harmony default export */ const amortizedFormInput = AmortizedFormInput;
        // CONCATENATED MODULE: ./src/client/components/gmailConfirmModal.tsx
        var gmailConfirmModal_extends = undefined && undefined.__extends || function() {
            var extendStatics = function(d, b) {
                return extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                }, extendStatics(d, b);
            };
            return function(d, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), GmailConfirmModal = function(_super) {
            function GmailConfirmModal(props) {
                var _this = _super.call(this, props) || this;
                return _this.state = {
                    tipAmount: "0",
                    originalAmount: "null",
                    originalDescription: "null"
                }, _this.submitModal = function(e) {
                    e.preventDefault(), _this.props.setVisability(!1, !0), _this.setState({
                        tipAmount: "0",
                        originalAmount: "null",
                        originalDescription: "null"
                    });
                }, _this.cancelModal = function() {
                    _this.setState({
                        tipAmount: "0",
                        originalAmount: "null",
                        originalDescription: "null"
                    }), _this.props.setVisability(!1, !1);
                }, _this.updateTipAmount = function(tipStr) {
                    var originalAmount = _this.state.originalAmount, originalDescription = _this.state.originalDescription;
                    "null" == originalAmount && (originalAmount = _this.props.currentAmount.toString(), 
                    _this.setState({
                        originalAmount: _this.props.currentAmount.toString()
                    })), "null" == _this.state.originalDescription && (originalDescription = _this.props.currentDescription.toString(), 
                    _this.setState({
                        originalDescription: _this.props.currentDescription.toString()
                    })), _this.setState({
                        tipAmount: tipStr
                    });
                    var newTotal = parseFloat(tipStr) + parseFloat(originalAmount);
                    _this.props.setDescription(originalDescription + " (Add. Tip: $" + tipStr + ")"), 
                    _this.props.setAmount(newTotal.toFixed(2).toString());
                }, _this.increaseTipButton = function() {
                    var tip = parseFloat(_this.state.tipAmount);
                    isNaN(tip) && (tip = 0), _this.updateTipAmount((tip + 1).toString());
                }, _this.decreaseTipButton = function() {
                    var tip = parseFloat(_this.state.tipAmount);
                    isNaN(tip) && (tip = 0), _this.updateTipAmount((tip - 1).toString());
                }, _this;
            }
            return gmailConfirmModal_extends(GmailConfirmModal, _super), GmailConfirmModal.prototype.render = function() {
                var _this = this;
                return react.createElement(react.Fragment, null, react.createElement(tt, {
                    show: this.props.visability,
                    enter: "transition-opacity duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition-opacity duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0"
                }, react.createElement("div", {
                    className: "flex justify-center transition-all w-full h-full text-budget-dark bg-gray-800 bg-opacity-50 items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                }, react.createElement("div", {
                    className: "relative w-auto my-6 mx-auto max-w-3xl"
                }, react.createElement("div", {
                    className: "border-0 rounded-xl shadow-lg relative flex flex-col w-full budget-bg outline-none focus:outline-none"
                }, react.createElement("div", {
                    className: "flex flex-col items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t "
                }, react.createElement("h3", {
                    className: "text-2xl font=semibold"
                }, "Confirm Category and Additional Tip"), react.createElement("form", {
                    onSubmit: this.submitModal
                }, react.createElement("div", {
                    className: "flex flex-col"
                }, react.createElement("div", {
                    className: "m-5"
                }, react.createElement("label", null, "Category: "), react.createElement("select", {
                    name: "category",
                    value: this.props.currentCategory,
                    onChange: function(e) {
                        return _this.props.setCategory(PurchaseCategory[e.target.value]);
                    },
                    required: !0
                }, Object.keys(PurchaseCategory).map((function(option, index) {
                    return react.createElement("option", {
                        key: index,
                        value: option
                    }, option);
                })))), react.createElement("div", null, react.createElement("label", null, "Additional Tip: "), react.createElement("input", {
                    type: "text",
                    pattern: "^\\d*(\\.\\d{0,2})?$",
                    value: this.state.tipAmount,
                    onChange: function(e) {
                        return _this.updateTipAmount(e.target.value);
                    }
                }), react.createElement("div", {
                    className: "flex flex-row  mt-3 items-center justify-center"
                }, react.createElement("button", {
                    type: "button",
                    onClick: this.decreaseTipButton,
                    className: "rounded-lg mr-3 px-4 py-2 text-white bg-budget-dark hover:bg-budget"
                }, "-"), react.createElement("button", {
                    type: "button",
                    onClick: this.increaseTipButton,
                    className: "rounded-lg px-4 py-2 text-white bg-budget-dark hover:bg-budget"
                }, "+"))), react.createElement("div", {
                    className: "flex flex-col m-5 items-center place-items-center"
                }, react.createElement(amortizedFormInput, {
                    amortizedLength: this.props.amortizedLength,
                    setAmortizedLength: this.props.setAmortizedLength,
                    amortized: this.props.amortized,
                    setAmortized: this.props.setAmortized
                }))), react.createElement("div", {
                    className: "flex flex-row items-center place-items-center"
                }, react.createElement("button", {
                    type: "button",
                    onClick: this.cancelModal,
                    className: "w-[10rem] mr-3 ml-auto bg-budget-dark hover:bg-budget px-5 p-2 text-sm rounded-full font-semibold text-white"
                }, "Cancel"), react.createElement("button", {
                    type: "submit",
                    className: "w-[10rem] m-auto bg-budget-dark hover:bg-budget px-5 p-2 text-sm rounded-full font-semibold text-white"
                }, "Submit")))))))));
            }, GmailConfirmModal;
        }(react.Component);
        /* harmony default export */ const gmailConfirmModal = GmailConfirmModal;
        // CONCATENATED MODULE: ./src/client/components/pendingTransactionsTab.tsx
        var pendingTransactionsTab_extends = undefined && undefined.__extends || function() {
            var extendStatics = function(d, b) {
                return extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                }, extendStatics(d, b);
            };
            return function(d, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), __assign = undefined && undefined.__assign || function() {
            return __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }, __assign.apply(this, arguments);
        }, __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : function adopt(value) {
                        return value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }));
                    }(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        }, __generator = undefined && undefined.__generator || function(thisArg, body) {
            var f, y, t, g, _ = {
                label: 0,
                sent: function() {
                    if (1 & t[0]) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return function step(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        for (;g && (g = 0, op[0] && (_ = 0)), _; ) try {
                            if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
                            0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                              case 0:
                              case 1:
                                t = op;
                                break;

                              case 4:
                                return _.label++, {
                                    value: op[1],
                                    done: !1
                                };

                              case 5:
                                _.label++, y = op[1], op = [ 0 ];
                                continue;

                              case 7:
                                op = _.ops.pop(), _.trys.pop();
                                continue;

                              default:
                                if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                    _ = 0;
                                    continue;
                                }
                                if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (6 === op[0] && _.label < t[1]) {
                                    _.label = t[1], t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2], _.ops.push(op);
                                    break;
                                }
                                t[2] && _.ops.pop(), _.trys.pop();
                                continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) {
                            op = [ 6, e ], y = 0;
                        } finally {
                            f = t = 0;
                        }
                        if (5 & op[0]) throw op[1];
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: !0
                        };
                    }([ n, v ]);
                };
            }
        }, __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
            if (pack || 2 === arguments.length) for (var ar, i = 0, l = from.length; i < l; i++) !ar && i in from || (ar || (ar = Array.prototype.slice.call(from, 0, i)), 
            ar[i] = from[i]);
            return to.concat(ar || Array.prototype.slice.call(from));
        }, PendingTransactionsTab = function(_super) {
            function PendingTransactionsTab(props) {
                var _this = _super.call(this, props) || this;
                return _this.state = {
                    unreadPurchases: _this.props.initialUnreadPurchases,
                    modalVisability: !1,
                    formAmount: "",
                    formCategory: PurchaseCategory.Uncategorized,
                    formDescription: "",
                    formThreadId: "",
                    formISODate: (new Date).toLocaleString(),
                    formPurchaseIndex: -1,
                    amortized: !1,
                    amortizedLength: "1",
                    processingPurchaseIndexes: []
                }, _this.resetForm = function() {
                    _this.setState((function(currState) {
                        return __assign(__assign({}, currState), {
                            formAmount: "",
                            formDescription: "",
                            formThreadId: "",
                            formISODate: (new Date).toLocaleString(),
                            formPurchaseIndex: -1,
                            amortized: !1,
                            amortizedLength: "1"
                        });
                    }));
                }, _this.setCategory = function(category) {
                    _this.setState({
                        formCategory: category
                    });
                }, _this.setAmount = function(amount) {
                    _this.setState({
                        formAmount: amount
                    });
                }, _this.setDescription = function(description) {
                    _this.setState({
                        formDescription: description
                    });
                }, _this.setAmortizedLength = function(numOfMonths) {
                    _this.setState({
                        amortizedLength: numOfMonths
                    });
                }, _this.setAmortized = function(amortized) {
                    _this.setState({
                        amortized
                    });
                }, _this.setModalVis = function(newVis, runSubmit) {
                    _this.setState({
                        modalVisability: newVis
                    }), runSubmit && (_this.setState((function(currState) {
                        return __assign(__assign({}, currState), {
                            processingPurchaseIndexes: __spreadArray(__spreadArray([], currState.processingPurchaseIndexes, !0), [ _this.state.formThreadId ], !1)
                        });
                    })), google.script.run.withSuccessHandler((function(resp) {
                        return _this.handleFormSuccess(resp);
                    })).withFailureHandler((function(resp) {
                        return _this.handleFailure(resp);
                    })).SubmitNewPurchase(document.getElementById("newPurchaseForm"))), 0 == newVis && _this.resetForm();
                }, _this.handleFormSuccess = function(purchase) {
                    _this.setState((function(currState) {
                        var _a, newUnreadPurchases = __spreadArray([], currState.unreadPurchases, !0);
                        purchase.threadId && newUnreadPurchases.splice(newUnreadPurchases.findIndex((function(pur) {
                            return pur.threadId == purchase.threadId;
                        })), 1);
                        var newProcessingPurchaseIndexes = __spreadArray([], currState.processingPurchaseIndexes, !0);
                        return newProcessingPurchaseIndexes.splice(currState.processingPurchaseIndexes.indexOf(null !== (_a = purchase.threadId) && void 0 !== _a ? _a : "-1"), 1), 
                        console.log(currState.processingPurchaseIndexes, newProcessingPurchaseIndexes), 
                        __assign(__assign({}, currState), {
                            unreadPurchases: newUnreadPurchases,
                            processingPurchaseIndexes: newProcessingPurchaseIndexes
                        });
                    }));
                }, _this.handleFailure = function(error) {
                    _this.setState((function(currState) {
                        var _a, newProcessingPurchaseIndexes = __spreadArray([], currState.processingPurchaseIndexes, !0);
                        return newProcessingPurchaseIndexes.splice(currState.processingPurchaseIndexes.indexOf(null !== (_a = _this.state.formThreadId) && void 0 !== _a ? _a : "-1")), 
                        console.log(currState.processingPurchaseIndexes, newProcessingPurchaseIndexes), 
                        __assign(__assign({}, currState), {
                            processingPurchaseIndexes: newProcessingPurchaseIndexes
                        });
                    })), alert("Error Occured: " + error.message);
                }, _this.setFormInputsWithPurchase = function(purchase, index) {
                    _this.setState((function(currState) {
                        return {
                            formAmount: purchase.amount,
                            formCategory: purchase.category || PurchaseCategory.Uncategorized,
                            formDescription: purchase.description,
                            formThreadId: purchase.threadId,
                            formISODate: purchase.isoDate,
                            formPurchaseIndex: index
                        };
                    })), _this.handleSubmit(null);
                }, _this.deletePurchase = function(purchase, index) {
                    console.log("deleting purchase:", purchase.description, purchase.threadId), _this.setState((function(currState) {
                        var _a, _b;
                        return console.log(currState.processingPurchaseIndexes, __spreadArray(__spreadArray([], currState.processingPurchaseIndexes, !0), [ null !== (_a = purchase.threadId) && void 0 !== _a ? _a : "-1" ], !1)), 
                        __assign(__assign({}, currState), {
                            processingPurchaseIndexes: __spreadArray(__spreadArray([], currState.processingPurchaseIndexes, !0), [ null !== (_b = purchase.threadId) && void 0 !== _b ? _b : "-1" ], !1)
                        });
                    })), purchase.purchaseIndex = index, google.script.run.withSuccessHandler((function(resp) {
                        return _this.handleFormSuccess(resp);
                    })).withFailureHandler((function(resp) {
                        return _this.handleFailure(resp);
                    })).MarkPurchaseAsRead(purchase);
                }, _this.handleSubmit = function(e) {
                    return __awaiter(_this, void 0, void 0, (function() {
                        var _this = this;
                        return __generator(this, (function(_a) {
                            return e ? (e.preventDefault(), this.setState((function(currState) {
                                return __assign(__assign({}, currState), {
                                    processingPurchaseIndexes: __spreadArray(__spreadArray([], currState.processingPurchaseIndexes, !0), [ "-1" ], !1)
                                });
                            })), google.script.run.withSuccessHandler((function(purchase) {
                                return _this.handleFormSuccess(purchase);
                            })).withFailureHandler((function(error) {
                                return _this.handleFailure(error);
                            })).SubmitNewPurchase(document.getElementById("newPurchaseForm")), this.resetForm()) : this.setModalVis(!0, !1), 
                            [ 2 ];
                        }));
                    }));
                }, _this;
            }
            return pendingTransactionsTab_extends(PendingTransactionsTab, _super), PendingTransactionsTab.prototype.render = function() {
                var _this = this;
                return react.createElement("div", {
                    className: "content-center"
                }, react.createElement("div", {
                    className: "text-budget-dark text-xl font-bold p-6"
                }, "Submit New Transaction"), react.createElement("form", {
                    id: "newPurchaseForm",
                    onSubmit: this.handleSubmit
                }, react.createElement("div", {
                    className: "m-5"
                }, react.createElement("label", null, "Transaction Amount: "), react.createElement("input", {
                    value: this.state.formAmount,
                    onChange: function(e) {
                        return _this.setAmount(e.target.value);
                    },
                    type: "text",
                    pattern: "^\\d*(\\.\\d{0,2})?$",
                    name: "amount",
                    required: !0
                })), react.createElement("div", {
                    className: "m-5"
                }, react.createElement("label", null, "Category: "), react.createElement("select", {
                    name: "category",
                    value: this.state.formCategory,
                    onChange: function(e) {
                        return _this.setCategory(PurchaseCategory[e.target.value]);
                    },
                    required: !0,
                    className: "bg-white"
                }, Object.keys(PurchaseCategory).map((function(option, index) {
                    return react.createElement("option", {
                        key: index,
                        value: option
                    }, option);
                })))), react.createElement("div", {
                    className: "m-5"
                }, react.createElement("label", null, "Description: "), react.createElement("input", {
                    value: this.state.formDescription,
                    onChange: function(e) {
                        return _this.setDescription(e.target.value);
                    },
                    type: "text",
                    name: "description",
                    required: !0
                })), react.createElement("div", {
                    className: "flex flex-col m-5 items-center place-items-center"
                }, react.createElement(amortizedFormInput, {
                    setAmortizedLength: this.setAmortizedLength,
                    amortizedLength: this.state.amortizedLength,
                    setAmortized: this.setAmortized,
                    amortized: this.state.amortized
                })), react.createElement("input", {
                    value: this.state.formThreadId,
                    type: "text",
                    className: "hidden",
                    id: "threadId",
                    name: "threadId"
                }), react.createElement("input", {
                    value: this.state.formISODate,
                    type: "text",
                    className: "hidden",
                    id: "isoDate",
                    name: "isoDate"
                }), react.createElement("input", {
                    type: "number",
                    value: this.state.formPurchaseIndex,
                    className: "hidden",
                    id: "purchaseIndex",
                    name: "purchaseIndex"
                }), react.createElement("div", {
                    className: "m-10"
                }, react.createElement("input", {
                    id: "submit",
                    type: "submit",
                    value: this.state.processingPurchaseIndexes.includes("-1") ? "Submitting..." : "Submit",
                    disabled: this.state.processingPurchaseIndexes.includes("-1"),
                    className: "w-[10rem] ".concat(this.state.processingPurchaseIndexes.includes("-1") ? "bg-budget" : " bg-budget-dark hover:bg-budget", " px-5 py-2 text-sm rounded-full font-semibold text-white")
                }))), react.createElement("div", {
                    className: "m-2 lg:m-28 border-t"
                }, react.createElement("div", {
                    className: "text-budget-dark text-xl font-bold p-6"
                }, "Approve Pending Transactions"), react.createElement("div", {
                    className: "flex flex-col"
                }, 0 == this.state.unreadPurchases.length ? "No Current Pending Transactions" : this.state.unreadPurchases.map((function(purchase, index) {
                    return react.createElement("div", {
                        className: "flex flex-row items-center border-t-2 border-indigo-900"
                    }, react.createElement("div", {
                        className: "flex flex-col w-5/6 items-start text-left"
                    }, react.createElement("span", {
                        className: "text-lg font-bold"
                    }, "Amount: $", purchase.amount), react.createElement("span", null, "Description: ", purchase.description), react.createElement("span", null, "Date: ", purchase.isoDate)), react.createElement("div", {
                        className: "flex flex-col md:flex-row"
                    }, react.createElement("button", {
                        onClick: function() {
                            return _this.setFormInputsWithPurchase(purchase, index);
                        },
                        disabled: _this.state.processingPurchaseIndexes.includes(purchase.threadId || ""),
                        className: "w-[6rem] m-2 ".concat(_this.state.processingPurchaseIndexes.includes(purchase.threadId || "") ? "bg-budget" : " bg-budget-dark hover:bg-budget", " px-5 py-2 text-sm rounded-full font-semibold text-white")
                    }, "Add"), react.createElement("button", {
                        onClick: function() {
                            return _this.deletePurchase(purchase, index);
                        },
                        disabled: _this.state.processingPurchaseIndexes.includes(purchase.threadId || ""),
                        className: "w-[6rem] m-2 ".concat(_this.state.processingPurchaseIndexes.includes(purchase.threadId || "") ? "bg-budget" : " bg-budget-dark hover:bg-budget", " px-5 py-2 text-sm rounded-full font-semibold text-white")
                    }, "Delete")));
                })))), react.createElement(gmailConfirmModal, {
                    visability: this.state.modalVisability,
                    setVisability: this.setModalVis,
                    setDescription: this.setDescription,
                    currentDescription: this.state.formDescription,
                    setAmount: this.setAmount,
                    currentAmount: this.state.formAmount,
                    setCategory: this.setCategory,
                    currentCategory: this.state.formCategory,
                    amortized: this.state.amortized,
                    setAmortized: this.setAmortized,
                    amortizedLength: this.state.amortizedLength,
                    setAmortizedLength: this.setAmortizedLength
                }));
            }, PendingTransactionsTab;
        }(react.Component);
        /* harmony default export */ const pendingTransactionsTab = PendingTransactionsTab;
        // CONCATENATED MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
        /*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
        function _arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function _defineProperties(e, r) {
            for (var t = 0; t < r.length; t++) {
                var o = r[t];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, _toPropertyKey(o.key), o);
            }
        }
        function _createForOfIteratorHelper(r, e) {
            var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (!t) {
                if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                    t && (r = t);
                    var n = 0, F = function() {};
                    return {
                        s: F,
                        n: function() {
                            return n >= r.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: r[n++]
                            };
                        },
                        e: function(r) {
                            throw r;
                        },
                        f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o, a = !0, u = !1;
            return {
                s: function() {
                    t = t.call(r);
                },
                n: function() {
                    var r = t.next();
                    return a = r.done, r;
                },
                e: function(r) {
                    u = !0, o = r;
                },
                f: function() {
                    try {
                        a || null == t["return"] || t["return"]();
                    } finally {
                        if (u) throw o;
                    }
                }
            };
        }
        function _defineProperty(e, r, t) {
            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                }))), t.push.apply(t, o);
            }
            return t;
        }
        function _objectSpread2(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                    _defineProperty(e, r, t[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }));
            }
            return e;
        }
        function _slicedToArray(r, e) {
            return function _arrayWithHoles(r) {
                if (Array.isArray(r)) return r;
            }(r) || function _iterableToArrayLimit(r, l) {
                var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (null != t) {
                    var e, n, i, u, a = [], f = !0, o = !1;
                    try {
                        if (i = (t = t.call(r)).next, 0 === l) {
                            if (Object(t) !== t) return;
                            f = !1;
                        } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                    } catch (r) {
                        o = !0, n = r;
                    } finally {
                        try {
                            if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                        } finally {
                            if (o) throw n;
                        }
                    }
                    return a;
                }
            }(r, e) || _unsupportedIterableToArray(r, e) || function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function _toConsumableArray(r) {
            return function _arrayWithoutHoles(r) {
                if (Array.isArray(r)) return _arrayLikeToArray(r);
            }(r) || function _iterableToArray(r) {
                if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
            }(r) || _unsupportedIterableToArray(r) || function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function _toPropertyKey(t) {
            var i = function _toPrimitive(t, r) {
                if ("object" != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != typeof i) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }(t, "string");
            return "symbol" == typeof i ? i : i + "";
        }
        function _typeof(o) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, _typeof(o);
        }
        function _unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }
        var noop = function noop() {}, _WINDOW = {}, _DOCUMENT = {}, _MUTATION_OBSERVER = null, _PERFORMANCE = {
            mark: noop,
            measure: noop
        };
        try {
            "undefined" != typeof window && (_WINDOW = window), "undefined" != typeof document && (_DOCUMENT = document), 
            "undefined" != typeof MutationObserver && (_MUTATION_OBSERVER = MutationObserver), 
            "undefined" != typeof performance && (_PERFORMANCE = performance);
        } catch (e) {}
 // eslint-disable-line no-empty
                var _so, _fl, _ref$userAgent = (_WINDOW.navigator || {}).userAgent, userAgent = void 0 === _ref$userAgent ? "" : _ref$userAgent, WINDOW = _WINDOW, DOCUMENT = _DOCUMENT, MUTATION_OBSERVER = _MUTATION_OBSERVER, PERFORMANCE = _PERFORMANCE, IS_DOM = (WINDOW.document, 
        !!DOCUMENT.documentElement && !!DOCUMENT.head && "function" == typeof DOCUMENT.addEventListener && "function" == typeof DOCUMENT.createElement), IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/"), z = {
            classic: {
                fa: "solid",
                fas: "solid",
                "fa-solid": "solid",
                far: "regular",
                "fa-regular": "regular",
                fal: "light",
                "fa-light": "light",
                fat: "thin",
                "fa-thin": "thin",
                fab: "brands",
                "fa-brands": "brands"
            },
            duotone: {
                fa: "solid",
                fad: "solid",
                "fa-solid": "solid",
                "fa-duotone": "solid",
                fadr: "regular",
                "fa-regular": "regular",
                fadl: "light",
                "fa-light": "light",
                fadt: "thin",
                "fa-thin": "thin"
            },
            sharp: {
                fa: "solid",
                fass: "solid",
                "fa-solid": "solid",
                fasr: "regular",
                "fa-regular": "regular",
                fasl: "light",
                "fa-light": "light",
                fast: "thin",
                "fa-thin": "thin"
            },
            "sharp-duotone": {
                fa: "solid",
                fasds: "solid",
                "fa-solid": "solid",
                fasdr: "regular",
                "fa-regular": "regular",
                fasdl: "light",
                "fa-light": "light",
                fasdt: "thin",
                "fa-thin": "thin"
            },
            slab: {
                "fa-regular": "regular",
                faslr: "regular"
            },
            "slab-press": {
                "fa-regular": "regular",
                faslpr: "regular"
            },
            thumbprint: {
                "fa-light": "light",
                fatl: "light"
            },
            whiteboard: {
                "fa-semibold": "semibold",
                fawsb: "semibold"
            },
            notdog: {
                "fa-solid": "solid",
                fans: "solid"
            },
            "notdog-duo": {
                "fa-solid": "solid",
                fands: "solid"
            },
            etch: {
                "fa-solid": "solid",
                faes: "solid"
            },
            jelly: {
                "fa-regular": "regular",
                fajr: "regular"
            },
            "jelly-fill": {
                "fa-regular": "regular",
                fajfr: "regular"
            },
            "jelly-duo": {
                "fa-regular": "regular",
                fajdr: "regular"
            },
            chisel: {
                "fa-regular": "regular",
                facr: "regular"
            }
        }, G = [ "fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press" ], a = "classic", fontawesome_svg_core_o = "duotone", t = "sharp-duotone", h = "jelly", l = "notdog-duo", p = "slab-press", e = "thumbprint", oo = [ a, fontawesome_svg_core_o, "sharp", t, "chisel", "etch", h, "jelly-duo", "jelly-fill", "notdog", l, "slab", p, e, "whiteboard" ], Co = (_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_so = {}, a, "Classic"), fontawesome_svg_core_o, "Duotone"), "sharp", "Sharp"), t, "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), h, "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), "notdog", "Notdog"), 
        _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_so, l, "Notdog Duo"), "slab", "Slab"), p, "Slab Press"), e, "Thumbprint"), "whiteboard", "Whiteboard"), 
        new Map([ [ "classic", {
            defaultShortPrefixId: "fas",
            defaultStyleId: "solid",
            styleIds: [ "solid", "regular", "light", "thin", "brands" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "duotone", {
            defaultShortPrefixId: "fad",
            defaultStyleId: "solid",
            styleIds: [ "solid", "regular", "light", "thin" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "sharp", {
            defaultShortPrefixId: "fass",
            defaultStyleId: "solid",
            styleIds: [ "solid", "regular", "light", "thin" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "sharp-duotone", {
            defaultShortPrefixId: "fasds",
            defaultStyleId: "solid",
            styleIds: [ "solid", "regular", "light", "thin" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "chisel", {
            defaultShortPrefixId: "facr",
            defaultStyleId: "regular",
            styleIds: [ "regular" ],
            futureStyleIds: [],
            defaultFontWeight: 400
        } ], [ "etch", {
            defaultShortPrefixId: "faes",
            defaultStyleId: "solid",
            styleIds: [ "solid" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "jelly", {
            defaultShortPrefixId: "fajr",
            defaultStyleId: "regular",
            styleIds: [ "regular" ],
            futureStyleIds: [],
            defaultFontWeight: 400
        } ], [ "jelly-duo", {
            defaultShortPrefixId: "fajdr",
            defaultStyleId: "regular",
            styleIds: [ "regular" ],
            futureStyleIds: [],
            defaultFontWeight: 400
        } ], [ "jelly-fill", {
            defaultShortPrefixId: "fajfr",
            defaultStyleId: "regular",
            styleIds: [ "regular" ],
            futureStyleIds: [],
            defaultFontWeight: 400
        } ], [ "notdog", {
            defaultShortPrefixId: "fans",
            defaultStyleId: "solid",
            styleIds: [ "solid" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "notdog-duo", {
            defaultShortPrefixId: "fands",
            defaultStyleId: "solid",
            styleIds: [ "solid" ],
            futureStyleIds: [],
            defaultFontWeight: 900
        } ], [ "slab", {
            defaultShortPrefixId: "faslr",
            defaultStyleId: "regular",
            styleIds: [ "regular" ],
            futureStyleIds: [],
            defaultFontWeight: 400
        } ], [ "slab-press", {
            defaultShortPrefixId: "faslpr",
            defaultStyleId: "regular",
            styleIds: [ "regular" ],
            futureStyleIds: [],
            defaultFontWeight: 400
        } ], [ "thumbprint", {
            defaultShortPrefixId: "fatl",
            defaultStyleId: "light",
            styleIds: [ "light" ],
            futureStyleIds: [],
            defaultFontWeight: 300
        } ], [ "whiteboard", {
            defaultShortPrefixId: "fawsb",
            defaultStyleId: "semibold",
            styleIds: [ "semibold" ],
            futureStyleIds: [],
            defaultFontWeight: 600
        } ] ])), zo = [ "fak", "fa-kit", "fakd", "fa-kit-duotone" ], Oo_kit = {
            fak: "kit",
            "fa-kit": "kit"
        }, Oo_kit_duotone = {
            fakd: "kit-duotone",
            "fa-kit-duotone": "kit-duotone"
        }, dt_kit = (_defineProperty(_defineProperty({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), 
        {
            kit: "fak"
        }), dt_kit_duotone = {
            "kit-duotone": "fakd"
        }, l$1_GROUP = "duotone-group", l$1_SWAP_OPACITY = "swap-opacity", l$1_PRIMARY = "primary", l$1_SECONDARY = "secondary", Go$1 = (_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_fl = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), "notdog", "Notdog"), 
        _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_fl, "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "whiteboard", "Whiteboard"), 
        _defineProperty(_defineProperty({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), 
        {
            classic: {
                fab: "fa-brands",
                fad: "fa-duotone",
                fal: "fa-light",
                far: "fa-regular",
                fas: "fa-solid",
                fat: "fa-thin"
            },
            duotone: {
                fadr: "fa-regular",
                fadl: "fa-light",
                fadt: "fa-thin"
            },
            sharp: {
                fass: "fa-solid",
                fasr: "fa-regular",
                fasl: "fa-light",
                fast: "fa-thin"
            },
            "sharp-duotone": {
                fasds: "fa-solid",
                fasdr: "fa-regular",
                fasdl: "fa-light",
                fasdt: "fa-thin"
            },
            slab: {
                faslr: "fa-regular"
            },
            "slab-press": {
                faslpr: "fa-regular"
            },
            whiteboard: {
                fawsb: "fa-semibold"
            },
            thumbprint: {
                fatl: "fa-light"
            },
            notdog: {
                fans: "fa-solid"
            },
            "notdog-duo": {
                fands: "fa-solid"
            },
            etch: {
                faes: "fa-solid"
            },
            jelly: {
                fajr: "fa-regular"
            },
            "jelly-fill": {
                fajfr: "fa-regular"
            },
            "jelly-duo": {
                fajdr: "fa-regular"
            },
            chisel: {
                facr: "fa-regular"
            }
        }), $o$1 = [ "fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr" ].concat([ "fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press" ], [ "fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold" ]), K$1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], M$1 = K$1.concat([ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]), Ho$1 = [].concat(_toConsumableArray(Object.keys({
            classic: [ "fas", "far", "fal", "fat", "fad" ],
            duotone: [ "fadr", "fadl", "fadt" ],
            sharp: [ "fass", "fasr", "fasl", "fast" ],
            "sharp-duotone": [ "fasds", "fasdr", "fasdl", "fasdt" ],
            slab: [ "faslr" ],
            "slab-press": [ "faslpr" ],
            whiteboard: [ "fawsb" ],
            thumbprint: [ "fatl" ],
            notdog: [ "fans" ],
            "notdog-duo": [ "fands" ],
            etch: [ "faes" ],
            jelly: [ "fajr" ],
            "jelly-fill": [ "fajfr" ],
            "jelly-duo": [ "fajdr" ],
            chisel: [ "facr" ]
        })), [ "solid", "regular", "light", "thin", "duotone", "brands", "semibold" ], [ "aw", "fw", "pull-left", "pull-right" ], [ "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", l$1_GROUP, l$1_SWAP_OPACITY, l$1_PRIMARY, l$1_SECONDARY ]).concat(K$1.map((function(o) {
            return "".concat(o, "x");
        }))).concat(M$1.map((function(o) {
            return "w-".concat(o);
        }))), UNITS_IN_GRID = 16, DEFAULT_CSS_PREFIX = "fa", DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa", DATA_FA_I2SVG = "data-fa-i2svg", DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element", DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending", DATA_PREFIX = "data-prefix", DATA_ICON = "data-icon", MUTATION_APPROACH_ASYNC = "async", TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [ "HTML", "HEAD", "STYLE", "SCRIPT" ], PSEUDO_ELEMENTS = [ "::before", "::after", ":before", ":after" ], PRODUCTION = function() {
            try {
                return !0;
            } catch (e$$1) {
                return !1;
            }
        }();
        function familyProxy(obj) {
            // Defaults to the classic family if family is not available
            return new Proxy(obj, {
                get: function get(target, prop) {
                    return prop in target ? target[prop] : target[a];
                }
            });
        }
        var _PREFIX_TO_STYLE = _objectSpread2({}, z);
        // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
        // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
        // {'fa-duotone': 'duotone'}
                _PREFIX_TO_STYLE[a] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
            "fa-duotone": "duotone"
        }), z[a]), Oo_kit), Oo_kit_duotone);
        var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE), _STYLE_TO_PREFIX = _objectSpread2({}, {
            chisel: {
                regular: "facr"
            },
            classic: {
                brands: "fab",
                light: "fal",
                regular: "far",
                solid: "fas",
                thin: "fat"
            },
            duotone: {
                light: "fadl",
                regular: "fadr",
                solid: "fad",
                thin: "fadt"
            },
            etch: {
                solid: "faes"
            },
            jelly: {
                regular: "fajr"
            },
            "jelly-duo": {
                regular: "fajdr"
            },
            "jelly-fill": {
                regular: "fajfr"
            },
            notdog: {
                solid: "fans"
            },
            "notdog-duo": {
                solid: "fands"
            },
            sharp: {
                light: "fasl",
                regular: "fasr",
                solid: "fass",
                thin: "fast"
            },
            "sharp-duotone": {
                light: "fasdl",
                regular: "fasdr",
                solid: "fasds",
                thin: "fasdt"
            },
            slab: {
                regular: "faslr"
            },
            "slab-press": {
                regular: "faslpr"
            },
            thumbprint: {
                light: "fatl"
            },
            whiteboard: {
                semibold: "fawsb"
            }
        });
        // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
        // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
        _STYLE_TO_PREFIX[a] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
            duotone: "fad"
        }), _STYLE_TO_PREFIX[a]), dt_kit), dt_kit_duotone);
        var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX), _PREFIX_TO_LONG_STYLE = _objectSpread2({}, Go$1);
        _PREFIX_TO_LONG_STYLE[a] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[a]), {
            fak: "fa-kit"
        });
        var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE), _LONG_STYLE_TO_PREFIX = _objectSpread2({}, {
            classic: {
                "fa-brands": "fab",
                "fa-duotone": "fad",
                "fa-light": "fal",
                "fa-regular": "far",
                "fa-solid": "fas",
                "fa-thin": "fat"
            },
            duotone: {
                "fa-regular": "fadr",
                "fa-light": "fadl",
                "fa-thin": "fadt"
            },
            sharp: {
                "fa-solid": "fass",
                "fa-regular": "fasr",
                "fa-light": "fasl",
                "fa-thin": "fast"
            },
            "sharp-duotone": {
                "fa-solid": "fasds",
                "fa-regular": "fasdr",
                "fa-light": "fasdl",
                "fa-thin": "fasdt"
            },
            slab: {
                "fa-regular": "faslr"
            },
            "slab-press": {
                "fa-regular": "faslpr"
            },
            whiteboard: {
                "fa-semibold": "fawsb"
            },
            thumbprint: {
                "fa-light": "fatl"
            },
            notdog: {
                "fa-solid": "fans"
            },
            "notdog-duo": {
                "fa-solid": "fands"
            },
            etch: {
                "fa-solid": "faes"
            },
            jelly: {
                "fa-regular": "fajr"
            },
            "jelly-fill": {
                "fa-regular": "fajfr"
            },
            "jelly-duo": {
                "fa-regular": "fajdr"
            },
            chisel: {
                "fa-regular": "facr"
            }
        });
        _LONG_STYLE_TO_PREFIX[a] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[a]), {
            "fa-kit": "fak"
        });
        familyProxy(_LONG_STYLE_TO_PREFIX);
        var ICON_SELECTION_SYNTAX_PATTERN = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, LAYERS_TEXT_CLASSNAME = "fa-layers-text", FONT_FAMILY_PATTERN = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i, ATTRIBUTES_WATCHED_FOR_MUTATION = (familyProxy(_objectSpread2({}, {
            classic: {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal",
                100: "fat"
            },
            duotone: {
                900: "fad",
                400: "fadr",
                300: "fadl",
                100: "fadt"
            },
            sharp: {
                900: "fass",
                400: "fasr",
                300: "fasl",
                100: "fast"
            },
            "sharp-duotone": {
                900: "fasds",
                400: "fasdr",
                300: "fasdl",
                100: "fasdt"
            },
            slab: {
                400: "faslr"
            },
            "slab-press": {
                400: "faslpr"
            },
            whiteboard: {
                600: "fawsb"
            },
            thumbprint: {
                300: "fatl"
            },
            notdog: {
                900: "fans"
            },
            "notdog-duo": {
                900: "fands"
            },
            etch: {
                900: "faes"
            },
            chisel: {
                400: "facr"
            },
            jelly: {
                400: "fajr"
            },
            "jelly-fill": {
                400: "fajfr"
            },
            "jelly-duo": {
                400: "fajdr"
            }
        })), [ "class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask" ]), DUOTONE_CLASSES = {
            GROUP: "duotone-group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary"
        }, RESERVED_CLASSES = [].concat(_toConsumableArray([ "kit" ]), _toConsumableArray(Ho$1)), initial = WINDOW.FontAwesomeConfig || {};
        if (DOCUMENT && "function" == typeof DOCUMENT.querySelector) {
            [ [ "data-family-prefix", "familyPrefix" ], [ "data-css-prefix", "cssPrefix" ], [ "data-family-default", "familyDefault" ], [ "data-style-default", "styleDefault" ], [ "data-replacement-class", "replacementClass" ], [ "data-auto-replace-svg", "autoReplaceSvg" ], [ "data-auto-add-css", "autoAddCss" ], [ "data-search-pseudo-elements", "searchPseudoElements" ], [ "data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings" ], [ "data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan" ], [ "data-observe-mutations", "observeMutations" ], [ "data-mutate-approach", "mutateApproach" ], [ "data-keep-original-source", "keepOriginalSource" ], [ "data-measure-performance", "measurePerformance" ], [ "data-show-missing-icons", "showMissingIcons" ] ].forEach((function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), attr = _ref2[0], key = _ref2[1], val = function coerce(val) {
                    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
                    // We'll assume that this is an indication that it should be toggled to true
                    return "" === val || "false" !== val && ("true" === val || val);
                }(function getAttrConfig(attr) {
                    var element = DOCUMENT.querySelector("script[" + attr + "]");
                    if (element) return element.getAttribute(attr);
                }(attr));
                val !== undefined && null !== val && (initial[key] = val);
            }));
        }
        var _default = {
            styleDefault: "solid",
            familyDefault: a,
            cssPrefix: DEFAULT_CSS_PREFIX,
            replacementClass: DEFAULT_REPLACEMENT_CLASS,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            searchPseudoElements: !1,
            searchPseudoElementsWarnings: !0,
            searchPseudoElementsFullScan: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0
        };
        // familyPrefix is deprecated but we must still support it if present
                initial.familyPrefix && (initial.cssPrefix = initial.familyPrefix);
        var _config = _objectSpread2(_objectSpread2({}, _default), initial);
        _config.autoReplaceSvg || (_config.observeMutations = !1);
        var config = {};
        Object.keys(_default).forEach((function(key) {
            Object.defineProperty(config, key, {
                enumerable: !0,
                set: function set(val) {
                    _config[key] = val, _onChangeCb.forEach((function(cb) {
                        return cb(config);
                    }));
                },
                get: function get() {
                    return _config[key];
                }
            });
        })), 
        // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
        Object.defineProperty(config, "familyPrefix", {
            enumerable: !0,
            set: function set(val) {
                _config.cssPrefix = val, _onChangeCb.forEach((function(cb) {
                    return cb(config);
                }));
            },
            get: function get() {
                return _config.cssPrefix;
            }
        }), WINDOW.FontAwesomeConfig = config;
        var _onChangeCb = [];
        var d$2 = UNITS_IN_GRID, meaninglessTransform = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };
        function nextUniqueId() {
            for (var size = 12, id = ""; size-- > 0; ) id += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
            return id;
        }
        function toArray(obj) {
            for (var array = [], i = (obj || []).length >>> 0; i--; ) array[i] = obj[i];
            return array;
        }
        function classArray(node) {
            return node.classList ? toArray(node.classList) : (node.getAttribute("class") || "").split(" ").filter((function(i) {
                return i;
            }));
        }
        function htmlEscape(str) {
            return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        function joinStyles(styles) {
            return Object.keys(styles || {}).reduce((function(acc, styleName) {
                return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
            }), "");
        }
        function transformIsMeaningful(transform) {
            return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
        }
        var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';
        function css() {
            var dcp = DEFAULT_CSS_PREFIX, drc = DEFAULT_REPLACEMENT_CLASS, fp = config.cssPrefix, rc = config.replacementClass, s = baseStyles;
            if (fp !== dcp || rc !== drc) {
                var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g"), customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g"), rPatt = new RegExp("\\.".concat(drc), "g");
                s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
            }
            return s;
        }
        var _cssInserted = !1;
        function ensureCss() {
            config.autoAddCss && !_cssInserted && (!function insertCss(css) {
                if (css && IS_DOM) {
                    var style = DOCUMENT.createElement("style");
                    style.setAttribute("type", "text/css"), style.innerHTML = css;
                    for (var headChildren = DOCUMENT.head.childNodes, beforeChild = null, i = headChildren.length - 1; i > -1; i--) {
                        var child = headChildren[i], tagName = (child.tagName || "").toUpperCase();
                        [ "STYLE", "LINK" ].indexOf(tagName) > -1 && (beforeChild = child);
                    }
                    return DOCUMENT.head.insertBefore(style, beforeChild), css;
                }
            }(css()), _cssInserted = !0);
        }
        var InjectCSS = {
            mixout: function mixout() {
                return {
                    dom: {
                        css,
                        insertCss: ensureCss
                    }
                };
            },
            hooks: function hooks() {
                return {
                    beforeDOMElementCreation: function beforeDOMElementCreation() {
                        ensureCss();
                    },
                    beforeI2svg: function beforeI2svg() {
                        ensureCss();
                    }
                };
            }
        }, w$2 = WINDOW || {};
        w$2.___FONT_AWESOME___ || (w$2.___FONT_AWESOME___ = {}), w$2.___FONT_AWESOME___.styles || (w$2.___FONT_AWESOME___.styles = {}), 
        w$2.___FONT_AWESOME___.hooks || (w$2.___FONT_AWESOME___.hooks = {}), w$2.___FONT_AWESOME___.shims || (w$2.___FONT_AWESOME___.shims = []);
        var namespace = w$2.___FONT_AWESOME___, functions = [], _listener = function listener() {
            DOCUMENT.removeEventListener("DOMContentLoaded", _listener), loaded = 1, functions.map((function(fn) {
                return fn();
            }));
        }, loaded = !1;
        function toHtml(abstractNodes) {
            var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = void 0 === _abstractNodes$attrib ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = void 0 === _abstractNodes$childr ? [] : _abstractNodes$childr;
            return "string" == typeof abstractNodes ? htmlEscape(abstractNodes) : "<".concat(tag, " ").concat(function joinAttributes(attributes) {
                return Object.keys(attributes || {}).reduce((function(acc, attributeName) {
                    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
                }), "").trim();
            }(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
        }
        function iconFromMapping(mapping, prefix, iconName) {
            if (mapping && mapping[prefix] && mapping[prefix][iconName]) return {
                prefix,
                iconName,
                icon: mapping[prefix][iconName]
            };
        }
        /**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */        IS_DOM && ((loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState)) || DOCUMENT.addEventListener("DOMContentLoaded", _listener));
        var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
            var i, key, result, keys = Object.keys(subject), length = keys.length, iterator = thisContext !== undefined ? function bindInternal4(func, thisContext) {
                return function(a, b, c, d) {
                    return func.call(thisContext, a, b, c, d);
                };
            }(fn, thisContext) : fn;
            for (initialValue === undefined ? (i = 1, result = subject[keys[0]]) : (i = 0, result = initialValue); i < length; i++) result = iterator(result, subject[key = keys[i]], key, subject);
            return result;
        };
        /**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */        
        /**
 * Return hexadecimal string for a unicode character
 * Returns `null` when more than one character (not bytes!) are passed
 * For example: 'K' → '7B'
 */
        function toHex(unicode) {
            return 1 !== _toConsumableArray(unicode).length ? null : unicode.codePointAt(0).toString(16);
        }
        function normalizeIcons(icons) {
            return Object.keys(icons).reduce((function(acc, iconName) {
                var icon = icons[iconName];
                return !!icon.icon ? acc[icon.iconName] = icon.icon : acc[iconName] = icon, acc;
            }), {});
        }
        function defineIcons(prefix, icons) {
            var _params$skipHooks = (arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}).skipHooks, skipHooks = void 0 !== _params$skipHooks && _params$skipHooks, normalized = normalizeIcons(icons);
            "function" != typeof namespace.hooks.addPack || skipHooks ? namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized) : namespace.hooks.addPack(prefix, normalizeIcons(icons))
            /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */ , "fas" === prefix && defineIcons("fa", icons);
        }
        var fontawesome_svg_core_styles = namespace.styles, shims = namespace.shims, FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE), PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((function(acc, familyId) {
            return acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]), acc;
        }), {}), _defaultUsablePrefix = null, _byUnicode = {}, _byLigature = {}, _byOldName = {}, _byOldUnicode = {}, _byAlias = {};
        function getIconName(cssPrefix, cls) {
            var parts = cls.split("-"), prefix = parts[0], iconName = parts.slice(1).join("-");
            return prefix !== cssPrefix || "" === iconName || function isReserved(name) {
                return ~RESERVED_CLASSES.indexOf(name);
            }(iconName) ? null : iconName;
        }
        var build = function build() {
            var lookup = function lookup(reducer) {
                return reduce(fontawesome_svg_core_styles, (function(o$$1, style, prefix) {
                    return o$$1[prefix] = reduce(style, reducer, {}), o$$1;
                }), {});
            };
            _byUnicode = lookup((function(acc, icon, iconName) {
                (icon[3] && (acc[icon[3]] = iconName), icon[2]) && icon[2].filter((function(a$$1) {
                    return "number" == typeof a$$1;
                })).forEach((function(alias) {
                    acc[alias.toString(16)] = iconName;
                }));
                return acc;
            })), _byLigature = lookup((function(acc, icon, iconName) {
                (acc[iconName] = iconName, icon[2]) && icon[2].filter((function(a$$1) {
                    return "string" == typeof a$$1;
                })).forEach((function(alias) {
                    acc[alias] = iconName;
                }));
                return acc;
            })), _byAlias = lookup((function(acc, icon, iconName) {
                var aliases = icon[2];
                return acc[iconName] = iconName, aliases.forEach((function(alias) {
                    acc[alias] = iconName;
                })), acc;
            }));
            // If we have a Kit, we can't determine if regular is available since we
            // could be auto-fetching it. We'll have to assume that it is available.
            var hasRegular = "far" in fontawesome_svg_core_styles || config.autoFetchSvg, shimLookups = reduce(shims, (function(acc, shim) {
                var maybeNameMaybeUnicode = shim[0], prefix = shim[1], iconName = shim[2];
                return "far" !== prefix || hasRegular || (prefix = "fas"), "string" == typeof maybeNameMaybeUnicode && (acc.names[maybeNameMaybeUnicode] = {
                    prefix,
                    iconName
                }), "number" == typeof maybeNameMaybeUnicode && (acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
                    prefix,
                    iconName
                }), acc;
            }), {
                names: {},
                unicodes: {}
            });
            _byOldName = shimLookups.names, _byOldUnicode = shimLookups.unicodes, _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
                family: config.familyDefault
            });
        };
        function byUnicode(prefix, unicode) {
            return (_byUnicode[prefix] || {})[unicode];
        }
        function byAlias(prefix, alias) {
            return (_byAlias[prefix] || {})[alias];
        }
        function byOldName(name) {
            return _byOldName[name] || {
                prefix: null,
                iconName: null
            };
        }
        function getDefaultUsablePrefix() {
            return _defaultUsablePrefix;
        }
        !function onChange(cb) {
            return _onChangeCb.push(cb), function() {
                _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
            };
        }((function(c$$1) {
            _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
                family: config.familyDefault
            });
        })), build();
        var emptyCanonicalIcon = function emptyCanonicalIcon() {
            return {
                prefix: null,
                iconName: null,
                rest: []
            };
        };
        function getCanonicalPrefix(styleOrPrefix) {
            var _params$family = (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}).family, family = void 0 === _params$family ? a : _params$family, style = PREFIX_TO_STYLE[family][styleOrPrefix];
            // handles the exception of passing in only a family of 'duotone' with no style
            if (family === fontawesome_svg_core_o && !styleOrPrefix) return "fad";
            var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style], defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
            return prefix || defined || null;
        }
        function sortedUniqueValues(arr) {
            return arr.sort().filter((function(value, index, arr) {
                return arr.indexOf(value) === index;
            }));
        }
        var _faCombinedClasses = $o$1.concat(zo);
        function getCanonicalIcon(values) {
            var _params$skipLookups = (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}).skipLookups, skipLookups = void 0 !== _params$skipLookups && _params$skipLookups, givenPrefix = null, faStyleOrFamilyClasses = sortedUniqueValues(values.filter((function(cls) {
                return _faCombinedClasses.includes(cls);
            }))), nonStyleOrFamilyClasses = sortedUniqueValues(values.filter((function(cls) {
                return !_faCombinedClasses.includes(cls);
            }))), _faStyles$ = _slicedToArray(faStyleOrFamilyClasses.filter((function(cls) {
                return givenPrefix = cls, !G.includes(cls);
            })), 1)[0], styleFromValues = void 0 === _faStyles$ ? null : _faStyles$, family = function getFamilyId(values) {
                var family = a, famProps = FAMILY_NAMES.reduce((function(acc, familyId) {
                    return acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId), acc;
                }), {});
                return oo.forEach((function(familyId) {
                    (values.includes(famProps[familyId]) || values.some((function(v$$1) {
                        return PREFIXES_FOR_FAMILY[familyId].includes(v$$1);
                    }))) && (family = familyId);
                })), family;
            }(faStyleOrFamilyClasses), canonical = _objectSpread2(_objectSpread2({}, function moveNonFaClassesToRest(classNames) {
                var rest = [], iconName = null;
                return classNames.forEach((function(cls) {
                    var result = getIconName(config.cssPrefix, cls);
                    result ? iconName = result : cls && rest.push(cls);
                })), {
                    iconName,
                    rest
                };
            }(nonStyleOrFamilyClasses)), {}, {
                prefix: getCanonicalPrefix(styleFromValues, {
                    family
                })
            });
            return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), function getDefaultCanonicalPrefix(prefixOptions) {
                var values = prefixOptions.values, family = prefixOptions.family, canonical = prefixOptions.canonical, _prefixOptions$givenP = prefixOptions.givenPrefix, givenPrefix = void 0 === _prefixOptions$givenP ? "" : _prefixOptions$givenP, _prefixOptions$styles = prefixOptions.styles, styles = void 0 === _prefixOptions$styles ? {} : _prefixOptions$styles, _prefixOptions$config = prefixOptions.config, config$$1 = void 0 === _prefixOptions$config ? {} : _prefixOptions$config, isDuotoneFamily = family === fontawesome_svg_core_o, valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad"), defaultFamilyIsDuotone = "duotone" === config$$1.familyDefault, canonicalPrefixIsDuotone = "fad" === canonical.prefix || "fa-duotone" === canonical.prefix;
                !isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone) && (canonical.prefix = "fad");
                (values.includes("fa-brands") || values.includes("fab")) && (canonical.prefix = "fab");
                if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
                    if (Object.keys(styles).find((function(key) {
                        return newCanonicalStyles.includes(key);
                    })) || config$$1.autoFetchSvg) {
                        var defaultPrefix = Co.get(family).defaultShortPrefixId;
                        canonical.prefix = defaultPrefix, canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
                    }
                }
                "fa" !== canonical.prefix && "fa" !== givenPrefix || (
                // The fa prefix is not canonical. So if it has made it through until this point
                // we will shift it to the correct prefix.
                canonical.prefix = getDefaultUsablePrefix() || "fas");
                return canonical;
            }({
                values,
                family,
                styles: fontawesome_svg_core_styles,
                config,
                canonical,
                givenPrefix
            })), function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
                var prefix = canonical.prefix, iconName = canonical.iconName;
                if (skipLookups || !prefix || !iconName) return {
                    prefix,
                    iconName
                };
                var shim = "fa" === givenPrefix ? byOldName(iconName) : {}, aliasIconName = byAlias(prefix, iconName);
                iconName = shim.iconName || aliasIconName || iconName, prefix = shim.prefix || prefix, 
                "far" !== prefix || fontawesome_svg_core_styles.far || !fontawesome_svg_core_styles.fas || config.autoFetchSvg || (
                // Allow a fallback from the regular style to solid if regular is not available
                // but only if we aren't auto-fetching SVGs
                prefix = "fas");
                return {
                    prefix,
                    iconName
                };
            }(skipLookups, givenPrefix, canonical));
        }
        var newCanonicalFamilies = oo.filter((function(familyId) {
            return familyId !== a || familyId !== fontawesome_svg_core_o;
        })), newCanonicalStyles = Object.keys(Go$1).filter((function(key) {
            return key !== a;
        })).map((function(key) {
            return Object.keys(Go$1[key]);
        })).flat();
        var Library =  function() {
            return function _createClass(e, r, t) {
                return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
            }((function Library() {
                !function _classCallCheck(a, n) {
                    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
                }(this, Library), this.definitions = {};
            }), [ {
                key: "add",
                value: function add() {
                    for (var _this = this, _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) definitions[_key] = arguments[_key];
                    var additions = definitions.reduce(this._pullDefinitions, {});
                    Object.keys(additions).forEach((function(key) {
                        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]), 
                        defineIcons(key, additions[key]);
                        // To keep support for older Classic styles, also add longer prefixes
                        var longPrefix = PREFIX_TO_LONG_STYLE[a][key];
                        longPrefix && defineIcons(longPrefix, additions[key]), build();
                    }));
                }
            }, {
                key: "reset",
                value: function reset() {
                    this.definitions = {};
                }
            }, {
                key: "_pullDefinitions",
                value: function _pullDefinitions(additions, definition) {
                    var normalized = definition.prefix && definition.iconName && definition.icon ? {
                        0: definition
                    } : definition;
                    return Object.keys(normalized).map((function(key) {
                        var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon = _normalized$key.icon, aliases = icon[2];
                        additions[prefix] || (additions[prefix] = {}), aliases.length > 0 && aliases.forEach((function(alias) {
                            "string" == typeof alias && (additions[prefix][alias] = icon);
                        })), additions[prefix][iconName] = icon;
                    })), additions;
                }
            } ]);
        }(), _plugins = [], _hooks = {}, providers = {}, defaultProviderKeys = Object.keys(providers);
        function chainHooks(hook, accumulator) {
            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
            return (_hooks[hook] || []).forEach((function(hookFn) {
                accumulator = hookFn.apply(null, [ accumulator ].concat(args));
            })), accumulator;
        }
        function callHooks(hook) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
            return (_hooks[hook] || []).forEach((function(hookFn) {
                hookFn.apply(null, args);
            })), undefined;
        }
        function callProvided() {
            var hook = arguments[0], args = Array.prototype.slice.call(arguments, 1);
            return providers[hook] ? providers[hook].apply(null, args) : undefined;
        }
        function findIconDefinition(iconLookup) {
            "fa" === iconLookup.prefix && (iconLookup.prefix = "fas");
            var iconName = iconLookup.iconName, prefix = iconLookup.prefix || getDefaultUsablePrefix();
            if (iconName) return iconName = byAlias(prefix, iconName) || iconName, iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
        }
        var library = new Library, dom = {
            i2svg: function i2svg() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return IS_DOM ? (callHooks("beforeI2svg", params), callProvided("pseudoElements2svg", params), 
                callProvided("i2svg", params)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
            },
            watch: function watch() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, autoReplaceSvgRoot = params.autoReplaceSvgRoot;
                !1 === config.autoReplaceSvg && (config.autoReplaceSvg = !0), config.observeMutations = !0, 
                function domready(fn) {
                    IS_DOM && (loaded ? setTimeout(fn, 0) : functions.push(fn));
                }((function() {
                    autoReplace({
                        autoReplaceSvgRoot
                    }), callHooks("watch", params);
                }));
            }
        }, parse = {
            icon: function icon(_icon) {
                if (null === _icon) return null;
                if ("object" === _typeof(_icon) && _icon.prefix && _icon.iconName) return {
                    prefix: _icon.prefix,
                    iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
                };
                if (Array.isArray(_icon) && 2 === _icon.length) {
                    var iconName = 0 === _icon[1].indexOf("fa-") ? _icon[1].slice(3) : _icon[1], prefix = getCanonicalPrefix(_icon[0]);
                    return {
                        prefix,
                        iconName: byAlias(prefix, iconName) || iconName
                    };
                }
                if ("string" == typeof _icon && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
                    var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
                        skipLookups: !0
                    });
                    return {
                        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
                        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
                    };
                }
                if ("string" == typeof _icon) {
                    var _prefix = getDefaultUsablePrefix();
                    return {
                        prefix: _prefix,
                        iconName: byAlias(_prefix, _icon) || _icon
                    };
                }
            }
        }, api = {
            noAuto: function noAuto() {
                config.autoReplaceSvg = !1, config.observeMutations = !1, callHooks("noAuto");
            },
            config,
            dom,
            parse,
            library,
            findIconDefinition,
            toHtml
        }, autoReplace = function autoReplace() {
            var _params$autoReplaceSv = (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}).autoReplaceSvgRoot, autoReplaceSvgRoot = void 0 === _params$autoReplaceSv ? DOCUMENT : _params$autoReplaceSv;
            (Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg && api.dom.i2svg({
                node: autoReplaceSvgRoot
            });
        };
        function domVariants(val, abstractCreator) {
            return Object.defineProperty(val, "abstract", {
                get: abstractCreator
            }), Object.defineProperty(val, "html", {
                get: function get() {
                    return val.abstract.map((function(a) {
                        return toHtml(a);
                    }));
                }
            }), Object.defineProperty(val, "node", {
                get: function get() {
                    if (!IS_DOM) return undefined;
                    var container = DOCUMENT.createElement("div");
                    return container.innerHTML = val.html, container.children;
                }
            }), val;
        }
        function makeInlineSvgAbstract(params) {
            var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, maskId = params.maskId, extra = params.extra, _params$watchable = params.watchable, watchable = void 0 !== _params$watchable && _params$watchable, _ref = mask.found ? mask : main, width = _ref.width, height = _ref.height, attrClass = [ config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : "" ].filter((function(c) {
                return -1 === extra.classes.indexOf(c);
            })).filter((function(c) {
                return "" !== c || !!c;
            })).concat(extra.classes).join(" "), content = {
                children: [],
                attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
                    "data-prefix": prefix,
                    "data-icon": iconName,
                    "class": attrClass,
                    role: extra.attributes.role || "img",
                    viewBox: "0 0 ".concat(width, " ").concat(height)
                })
            };
            (
            // If any of these attributes are present, don't assume the icon is decorative
            function isLabeled(attributes) {
                return [ "aria-label", "aria-labelledby", "title", "role" ].some((function(label) {
                    return label in attributes;
                }));
            })(extra.attributes) || extra.attributes["aria-hidden"] || (content.attributes["aria-hidden"] = "true"), 
            watchable && (content.attributes[DATA_FA_I2SVG] = "");
            var args = _objectSpread2(_objectSpread2({}, content), {}, {
                prefix,
                iconName,
                main,
                mask,
                maskId,
                transform,
                symbol,
                styles: _objectSpread2({}, extra.styles)
            }), _ref2 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
                children: [],
                attributes: {}
            } : callProvided("generateAbstractIcon", args) || {
                children: [],
                attributes: {}
            }, children = _ref2.children, attributes = _ref2.attributes;
            return args.children = children, args.attributes = attributes, symbol ? function asSymbol(_ref) {
                var prefix = _ref.prefix, iconName = _ref.iconName, children = _ref.children, attributes = _ref.attributes, symbol = _ref.symbol, id = !0 === symbol ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
                return [ {
                    tag: "svg",
                    attributes: {
                        style: "display: none;"
                    },
                    children: [ {
                        tag: "symbol",
                        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
                            id
                        }),
                        children
                    } ]
                } ];
            }(args) : function asIcon(_ref) {
                var children = _ref.children, main = _ref.main, mask = _ref.mask, attributes = _ref.attributes, styles = _ref.styles, transform = _ref.transform;
                if (transformIsMeaningful(transform) && main.found && !mask.found) {
                    var offset = {
                        x: main.width / main.height / 2,
                        y: .5
                    };
                    attributes.style = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
                        "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
                    }));
                }
                return [ {
                    tag: "svg",
                    attributes,
                    children
                } ];
            }(args);
        }
        function makeLayersTextAbstract(params) {
            var content = params.content, width = params.width, height = params.height, transform = params.transform, extra = params.extra, _params$watchable2 = params.watchable, watchable = void 0 !== _params$watchable2 && _params$watchable2, attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
                "class": extra.classes.join(" ")
            });
            watchable && (attributes[DATA_FA_I2SVG] = "");
            var styles = _objectSpread2({}, extra.styles);
            transformIsMeaningful(transform) && (styles.transform = function transformForCss(_ref2) {
                var transform = _ref2.transform, _ref2$width = _ref2.width, width = void 0 === _ref2$width ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = void 0 !== _ref2$startCentered && _ref2$startCentered, val = "";
                return val += startCentered && IS_IE ? "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ") : startCentered ? "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ") : "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) "), 
                val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") "), 
                val + "rotate(".concat(transform.rotate, "deg) ");
            }({
                transform,
                startCentered: !0,
                width,
                height
            }), styles["-webkit-transform"] = styles.transform);
            var styleString = joinStyles(styles);
            styleString.length > 0 && (attributes.style = styleString);
            var val = [];
            return val.push({
                tag: "span",
                attributes,
                children: [ content ]
            }), val;
        }
        var styles$1 = namespace.styles;
        function asFoundIcon(icon) {
            var width = icon[0], height = icon[1], vectorData = _slicedToArray(icon.slice(4), 1)[0];
            return {
                found: !0,
                width,
                height,
                icon: Array.isArray(vectorData) ? {
                    tag: "g",
                    attributes: {
                        "class": "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
                    },
                    children: [ {
                        tag: "path",
                        attributes: {
                            "class": "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
                            fill: "currentColor",
                            d: vectorData[0]
                        }
                    }, {
                        tag: "path",
                        attributes: {
                            "class": "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
                            fill: "currentColor",
                            d: vectorData[1]
                        }
                    } ]
                } : {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: vectorData
                    }
                }
            };
        }
        var missingIconResolutionMixin = {
            found: !1,
            width: 512,
            height: 512
        };
        function findIcon(iconName, prefix) {
            var givenPrefix = prefix;
            return "fa" === prefix && null !== config.styleDefault && (prefix = getDefaultUsablePrefix()), 
            new Promise((function(resolve, reject) {
                if ("fa" === givenPrefix) {
                    var shim = byOldName(iconName) || {};
                    iconName = shim.iconName || iconName, prefix = shim.prefix || prefix;
                }
                if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) return resolve(asFoundIcon(styles$1[prefix][iconName]));
                !function maybeNotifyMissing(iconName, prefix) {
                    PRODUCTION || config.showMissingIcons || !iconName || console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
                }(iconName, prefix), resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
                    icon: config.showMissingIcons && iconName && callProvided("missingIconAbstract") || {}
                }));
            }));
        }
        var noop$1 = function noop() {}, p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
            mark: noop$1,
            measure: noop$1
        }, end = function end(name) {
            p$2.mark("".concat('FA "7.0.1"', " ").concat(name, " ends")), p$2.measure("".concat('FA "7.0.1"', " ").concat(name), "".concat('FA "7.0.1"', " ").concat(name, " begins"), "".concat('FA "7.0.1"', " ").concat(name, " ends"));
        }, perf = {
            begin: function begin(name) {
                return p$2.mark("".concat('FA "7.0.1"', " ").concat(name, " begins")), function() {
                    return end(name);
                };
            },
            end
        }, noop$2 = function noop() {};
        function isWatched(node) {
            return "string" == typeof (node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null);
        }
        function createElementNS(tag) {
            return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
        }
        function createElement(tag) {
            return DOCUMENT.createElement(tag);
        }
        function convertSVG(abstractObj) {
            var _params$ceFn = (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}).ceFn, ceFn = void 0 === _params$ceFn ? "svg" === abstractObj.tag ? createElementNS : createElement : _params$ceFn;
            if ("string" == typeof abstractObj) return DOCUMENT.createTextNode(abstractObj);
            var tag = ceFn(abstractObj.tag);
            return Object.keys(abstractObj.attributes || []).forEach((function(key) {
                tag.setAttribute(key, abstractObj.attributes[key]);
            })), (abstractObj.children || []).forEach((function(child) {
                tag.appendChild(convertSVG(child, {
                    ceFn
                }));
            })), tag;
        }
        var mutators = {
            replace: function replace(mutation) {
                var node = mutation[0];
                if (node.parentNode) if (mutation[1].forEach((function(abstract) {
                    node.parentNode.insertBefore(convertSVG(abstract), node);
                })), null === node.getAttribute(DATA_FA_I2SVG) && config.keepOriginalSource) {
                    var comment = DOCUMENT.createComment(function nodeAsComment(node) {
                        var comment = " ".concat(node.outerHTML, " ");
                        /* BEGIN.ATTRIBUTION */                        
                        /* END.ATTRIBUTION */
                        return "".concat(comment, "Font Awesome fontawesome.com ");
                    }(node));
                    node.parentNode.replaceChild(comment, node);
                } else node.remove();
            },
            nest: function nest(mutation) {
                var node = mutation[0], abstract = mutation[1];
                // If we already have a replaced node we do not want to continue nesting within it.
                // Short-circuit to the standard replacement
                if (~classArray(node).indexOf(config.replacementClass)) return mutators.replace(mutation);
                var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
                if (delete abstract[0].attributes.id, abstract[0].attributes["class"]) {
                    var splitClasses = abstract[0].attributes["class"].split(" ").reduce((function(acc, cls) {
                        return cls === config.replacementClass || cls.match(forSvg) ? acc.toSvg.push(cls) : acc.toNode.push(cls), 
                        acc;
                    }), {
                        toNode: [],
                        toSvg: []
                    });
                    abstract[0].attributes["class"] = splitClasses.toSvg.join(" "), 0 === splitClasses.toNode.length ? node.removeAttribute("class") : node.setAttribute("class", splitClasses.toNode.join(" "));
                }
                var newInnerHTML = abstract.map((function(a) {
                    return toHtml(a);
                })).join("\n");
                node.setAttribute(DATA_FA_I2SVG, ""), node.innerHTML = newInnerHTML;
            }
        };
        function performOperationSync(op) {
            op();
        }
        function perform(mutations, callback) {
            var callbackFunction = "function" == typeof callback ? callback : noop$2;
            if (0 === mutations.length) callbackFunction(); else {
                var frame = performOperationSync;
                config.mutateApproach === MUTATION_APPROACH_ASYNC && (frame = WINDOW.requestAnimationFrame || performOperationSync), 
                frame((function() {
                    var mutator = function getMutator() {
                        return !0 === config.autoReplaceSvg ? mutators.replace : mutators[config.autoReplaceSvg] || mutators.replace;
                    }(), mark = perf.begin("mutate");
                    mutations.map(mutator), mark(), callbackFunction();
                }));
            }
        }
        var disabled = !1;
        function disableObservation() {
            disabled = !0;
        }
        function enableObservation() {
            disabled = !1;
        }
        var mo = null;
        function observe(options) {
            if (MUTATION_OBSERVER && config.observeMutations) {
                var _options$treeCallback = options.treeCallback, treeCallback = void 0 === _options$treeCallback ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = void 0 === _options$nodeCallback ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = void 0 === _options$pseudoElemen ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = void 0 === _options$observeMutat ? DOCUMENT : _options$observeMutat;
                mo = new MUTATION_OBSERVER((function(objects) {
                    if (!disabled) {
                        var defaultPrefix = getDefaultUsablePrefix();
                        toArray(objects).forEach((function(mutationRecord) {
                            if ("childList" === mutationRecord.type && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0]) && (config.searchPseudoElements && pseudoElementsCallback(mutationRecord.target), 
                            treeCallback(mutationRecord.target)), "attributes" === mutationRecord.type && mutationRecord.target.parentNode && config.searchPseudoElements && pseudoElementsCallback([ mutationRecord.target ], !0), 
                            "attributes" === mutationRecord.type && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) if ("class" === mutationRecord.attributeName && function hasPrefixAndIcon(node) {
                                var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null, icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
                                return prefix && icon;
                            }(mutationRecord.target)) {
                                var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
                                mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix), iconName && mutationRecord.target.setAttribute(DATA_ICON, iconName);
                            } else (function hasBeenReplaced(node) {
                                return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
                            })(mutationRecord.target) && nodeCallback(mutationRecord.target);
                        }));
                    }
                })), IS_DOM && mo.observe(observeMutationsRoot, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0
                });
            }
        }
        function classParser(node) {
            var existingPrefix = node.getAttribute("data-prefix"), existingIconName = node.getAttribute("data-icon"), innerText = node.innerText !== undefined ? node.innerText.trim() : "", val = getCanonicalIcon(classArray(node));
            return val.prefix || (val.prefix = getDefaultUsablePrefix()), existingPrefix && existingIconName && (val.prefix = existingPrefix, 
            val.iconName = existingIconName), val.iconName && val.prefix || (val.prefix && innerText.length > 0 && (val.iconName = function byLigature(prefix, ligature) {
                return (_byLigature[prefix] || {})[ligature];
            }(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText))), 
            !val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE && (val.iconName = node.firstChild.data)), 
            val;
        }
        function parseMeta(node) {
            var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                styleParser: !0
            }, _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest, extraAttributes = function attributesParser(node) {
                return toArray(node.attributes).reduce((function(acc, attr) {
                    return "class" !== acc.name && "style" !== acc.name && (acc[attr.name] = attr.value), 
                    acc;
                }), {});
            }(node), pluginMeta = chainHooks("parseNodeAttributes", {}, node), extraStyles = parser.styleParser ? function styleParser(node) {
                var style = node.getAttribute("style"), val = [];
                return style && (val = style.split(";").reduce((function(acc, style) {
                    var styles = style.split(":"), prop = styles[0], value = styles.slice(1);
                    return prop && value.length > 0 && (acc[prop] = value.join(":").trim()), acc;
                }), {})), val;
            }(node) : [];
            return _objectSpread2({
                iconName,
                prefix,
                transform: meaninglessTransform,
                mask: {
                    iconName: null,
                    prefix: null,
                    rest: []
                },
                maskId: null,
                symbol: !1,
                extra: {
                    classes: extraClasses,
                    styles: extraStyles,
                    attributes: extraAttributes
                }
            }, pluginMeta);
        }
        var styles$2 = namespace.styles;
        function generateMutation(node) {
            var nodeMeta = "nest" === config.autoReplaceSvg ? parseMeta(node, {
                styleParser: !1
            }) : parseMeta(node);
            return ~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME) ? callProvided("generateLayersText", node, nodeMeta) : callProvided("generateSvgReplacementMutation", node, nodeMeta);
        }
        function onTree(root) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (!IS_DOM) return Promise.resolve();
            var htmlClassList = DOCUMENT.documentElement.classList, hclAdd = function hclAdd(suffix) {
                return htmlClassList.add("".concat("fontawesome-i2svg", "-").concat(suffix));
            }, hclRemove = function hclRemove(suffix) {
                return htmlClassList.remove("".concat("fontawesome-i2svg", "-").concat(suffix));
            }, prefixes = config.autoFetchSvg ? function getKnownPrefixes() {
                return [].concat(_toConsumableArray(zo), _toConsumableArray($o$1));
            }() : G.concat(Object.keys(styles$2));
            prefixes.includes("fa") || prefixes.push("fa");
            var prefixesDomQuery = [ ".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])") ].concat(prefixes.map((function(p$$1) {
                return ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])");
            }))).join(", ");
            if (0 === prefixesDomQuery.length) return Promise.resolve();
            var candidates = [];
            try {
                candidates = toArray(root.querySelectorAll(prefixesDomQuery));
            } catch (e$$1) {
                // noop
            }
            if (!(candidates.length > 0)) return Promise.resolve();
            hclAdd("pending"), hclRemove("complete");
            var mark = perf.begin("onTree"), mutations = candidates.reduce((function(acc, node) {
                try {
                    var mutation = generateMutation(node);
                    mutation && acc.push(mutation);
                } catch (e$$1) {
                    PRODUCTION || "MissingIcon" === e$$1.name && console.error(e$$1);
                }
                return acc;
            }), []);
            return new Promise((function(resolve, reject) {
                Promise.all(mutations).then((function(resolvedMutations) {
                    perform(resolvedMutations, (function() {
                        hclAdd("active"), hclAdd("complete"), hclRemove("pending"), "function" == typeof callback && callback(), 
                        mark(), resolve();
                    }));
                }))["catch"]((function(e$$1) {
                    mark(), reject(e$$1);
                }));
            }));
        }
        function onNode(node) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            generateMutation(node).then((function(mutation) {
                mutation && perform([ mutation ], callback);
            }));
        }
        var render = function render(iconDefinition) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _params$transform = params.transform, transform = void 0 === _params$transform ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = void 0 !== _params$symbol && _params$symbol, _params$mask = params.mask, mask = void 0 === _params$mask ? null : _params$mask, _params$maskId = params.maskId, maskId = void 0 === _params$maskId ? null : _params$maskId, _params$classes = params.classes, classes = void 0 === _params$classes ? [] : _params$classes, _params$attributes = params.attributes, attributes = void 0 === _params$attributes ? {} : _params$attributes, _params$styles = params.styles, styles = void 0 === _params$styles ? {} : _params$styles;
            if (iconDefinition) {
                var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon = iconDefinition.icon;
                return domVariants(_objectSpread2({
                    type: "icon"
                }, iconDefinition), (function() {
                    return callHooks("beforeDOMElementCreation", {
                        iconDefinition,
                        params
                    }), makeInlineSvgAbstract({
                        icons: {
                            main: asFoundIcon(icon),
                            mask: mask ? asFoundIcon(mask.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix,
                        iconName,
                        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
                        symbol,
                        maskId,
                        extra: {
                            attributes,
                            styles,
                            classes
                        }
                    });
                }));
            }
        }, ReplaceElements = {
            mixout: function mixout() {
                return {
                    icon: (next = render, function(maybeIconDefinition) {
                        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {}), mask = params.mask;
                        return mask && (mask = (mask || {}).icon ? mask : findIconDefinition(mask || {})), 
                        next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
                            mask
                        }));
                    })
                };
                var next;
            },
            hooks: function hooks() {
                return {
                    mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                        return accumulator.treeCallback = onTree, accumulator.nodeCallback = onNode, accumulator;
                    }
                };
            },
            provides: function provides(providers$$1) {
                providers$$1.i2svg = function(params) {
                    var _params$node = params.node, node = void 0 === _params$node ? DOCUMENT : _params$node, _params$callback = params.callback;
                    return onTree(node, void 0 === _params$callback ? function() {} : _params$callback);
                }, providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
                    var iconName = nodeMeta.iconName, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
                    return new Promise((function(resolve, reject) {
                        Promise.all([ findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
                            found: !1,
                            width: 512,
                            height: 512,
                            icon: {}
                        }) ]).then((function(_ref) {
                            var _ref2 = _slicedToArray(_ref, 2), main = _ref2[0], mask = _ref2[1];
                            resolve([ node, makeInlineSvgAbstract({
                                icons: {
                                    main,
                                    mask
                                },
                                prefix,
                                iconName,
                                transform,
                                symbol,
                                maskId,
                                extra,
                                watchable: !0
                            }) ]);
                        }))["catch"](reject);
                    }));
                }, providers$$1.generateAbstractIcon = function(_ref3) {
                    var nextChild, children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styleString = joinStyles(_ref3.styles);
                    return styleString.length > 0 && (attributes.style = styleString), transformIsMeaningful(transform) && (nextChild = callProvided("generateAbstractTransformGrouping", {
                        main,
                        transform,
                        containerWidth: main.width,
                        iconWidth: main.width
                    })), children.push(nextChild || main.icon), {
                        children,
                        attributes
                    };
                };
            }
        }, Layers = {
            mixout: function mixout() {
                return {
                    layer: function layer(assembler) {
                        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _params$classes = params.classes, classes = void 0 === _params$classes ? [] : _params$classes;
                        return domVariants({
                            type: "layer"
                        }, (function() {
                            callHooks("beforeDOMElementCreation", {
                                assembler,
                                params
                            });
                            var children = [];
                            return assembler((function(args) {
                                Array.isArray(args) ? args.map((function(a) {
                                    children = children.concat(a.abstract);
                                })) : children = children.concat(args.abstract);
                            })), [ {
                                tag: "span",
                                attributes: {
                                    "class": [ "".concat(config.cssPrefix, "-layers") ].concat(_toConsumableArray(classes)).join(" ")
                                },
                                children
                            } ];
                        }));
                    }
                };
            }
        }, LayersCounter = {
            mixout: function mixout() {
                return {
                    counter: function counter(content) {
                        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _params$title = params.title, title = void 0 === _params$title ? null : _params$title, _params$classes = params.classes, classes = void 0 === _params$classes ? [] : _params$classes, _params$attributes = params.attributes, attributes = void 0 === _params$attributes ? {} : _params$attributes, _params$styles = params.styles, styles = void 0 === _params$styles ? {} : _params$styles;
                        return domVariants({
                            type: "counter",
                            content
                        }, (function() {
                            return callHooks("beforeDOMElementCreation", {
                                content,
                                params
                            }), function makeLayersCounterAbstract(params) {
                                var content = params.content, extra = params.extra, attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
                                    "class": extra.classes.join(" ")
                                }), styleString = joinStyles(extra.styles);
                                styleString.length > 0 && (attributes.style = styleString);
                                var val = [];
                                return val.push({
                                    tag: "span",
                                    attributes,
                                    children: [ content ]
                                }), val;
                            }({
                                content: content.toString(),
                                title,
                                extra: {
                                    attributes,
                                    styles,
                                    classes: [ "".concat(config.cssPrefix, "-layers-counter") ].concat(_toConsumableArray(classes))
                                }
                            });
                        }));
                    }
                };
            }
        }, LayersText = {
            mixout: function mixout() {
                return {
                    text: function text(content) {
                        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _params$transform = params.transform, transform = void 0 === _params$transform ? meaninglessTransform : _params$transform, _params$classes = params.classes, classes = void 0 === _params$classes ? [] : _params$classes, _params$attributes = params.attributes, attributes = void 0 === _params$attributes ? {} : _params$attributes, _params$styles = params.styles, styles = void 0 === _params$styles ? {} : _params$styles;
                        return domVariants({
                            type: "text",
                            content
                        }, (function() {
                            return callHooks("beforeDOMElementCreation", {
                                content,
                                params
                            }), makeLayersTextAbstract({
                                content,
                                transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
                                extra: {
                                    attributes,
                                    styles,
                                    classes: [ "".concat(config.cssPrefix, "-layers-text") ].concat(_toConsumableArray(classes))
                                }
                            });
                        }));
                    }
                };
            },
            provides: function provides(providers$$1) {
                providers$$1.generateLayersText = function(node, nodeMeta) {
                    var transform = nodeMeta.transform, extra = nodeMeta.extra, width = null, height = null;
                    if (IS_IE) {
                        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10), boundingClientRect = node.getBoundingClientRect();
                        width = boundingClientRect.width / computedFontSize, height = boundingClientRect.height / computedFontSize;
                    }
                    return Promise.resolve([ node, makeLayersTextAbstract({
                        content: node.innerHTML,
                        width,
                        height,
                        transform,
                        extra,
                        watchable: !0
                    }) ]);
                };
            }
        }, CLEAN_CONTENT_PATTERN = new RegExp('"', "ug"), SECONDARY_UNICODE_RANGE = [ 1105920, 1112319 ], _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
            FontAwesome: {
                normal: "fas",
                400: "fas"
            }
        }), {
            "Font Awesome 7 Free": {
                900: "fas",
                400: "far"
            },
            "Font Awesome 7 Pro": {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal",
                100: "fat"
            },
            "Font Awesome 7 Brands": {
                400: "fab",
                normal: "fab"
            },
            "Font Awesome 7 Duotone": {
                900: "fad",
                400: "fadr",
                normal: "fadr",
                300: "fadl",
                100: "fadt"
            },
            "Font Awesome 7 Sharp": {
                900: "fass",
                400: "fasr",
                normal: "fasr",
                300: "fasl",
                100: "fast"
            },
            "Font Awesome 7 Sharp Duotone": {
                900: "fasds",
                400: "fasdr",
                normal: "fasdr",
                300: "fasdl",
                100: "fasdt"
            },
            "Font Awesome 7 Jelly": {
                400: "fajr",
                normal: "fajr"
            },
            "Font Awesome 7 Jelly Fill": {
                400: "fajfr",
                normal: "fajfr"
            },
            "Font Awesome 7 Jelly Duo": {
                400: "fajdr",
                normal: "fajdr"
            },
            "Font Awesome 7 Slab": {
                400: "faslr",
                normal: "faslr"
            },
            "Font Awesome 7 Slab Press": {
                400: "faslpr",
                normal: "faslpr"
            },
            "Font Awesome 7 Thumbprint": {
                300: "fatl",
                normal: "fatl"
            },
            "Font Awesome 7 Notdog": {
                900: "fans",
                normal: "fans"
            },
            "Font Awesome 7 Notdog Duo": {
                900: "fands",
                normal: "fands"
            },
            "Font Awesome 7 Etch": {
                900: "faes",
                normal: "faes"
            },
            "Font Awesome 7 Chisel": {
                400: "facr",
                normal: "facr"
            },
            "Font Awesome 7 Whiteboard": {
                600: "fawsb",
                normal: "fawsb"
            }
        }), {
            "Font Awesome 5 Free": {
                900: "fas",
                400: "far"
            },
            "Font Awesome 5 Pro": {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal"
            },
            "Font Awesome 5 Brands": {
                400: "fab",
                normal: "fab"
            },
            "Font Awesome 5 Duotone": {
                900: "fad"
            }
        }), {
            "Font Awesome Kit": {
                400: "fak",
                normal: "fak"
            },
            "Font Awesome Kit Duotone": {
                400: "fakd",
                normal: "fakd"
            }
        }), FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((function(acc, key) {
            return acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key], acc;
        }), {}), FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((function(acc, fontFamily) {
            var weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
            return acc[fontFamily] = weights[900] || _toConsumableArray(Object.entries(weights))[0][1], 
            acc;
        }), {});
        function replaceForPosition(node, position) {
            var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
            return new Promise((function(resolve, reject) {
                if (null !== node.getAttribute(pendingAttribute)) 
                // This node is already being processed
                return resolve();
                var alreadyProcessedPseudoElement = toArray(node.children).filter((function(c$$1) {
                    return c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
                }))[0], styles = WINDOW.getComputedStyle(node, position), fontFamily = styles.getPropertyValue("font-family"), fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN), fontWeight = styles.getPropertyValue("font-weight"), content = styles.getPropertyValue("content");
                if (alreadyProcessedPseudoElement && !fontFamilyMatch) 
                // If we've already processed it but the current computed style does not result in a font-family,
                // that probably means that a class name that was previously present to make the icon has been
                // removed. So we now should delete the icon.
                return node.removeChild(alreadyProcessedPseudoElement), resolve();
                if (fontFamilyMatch && "none" !== content && "" !== content) {
                    var _content = styles.getPropertyValue("content"), prefix = function getPrefix(fontFamily, fontWeight) {
                        var fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase(), fontWeightInteger = parseInt(fontWeight), fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
                        return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
                    }(fontFamily, fontWeight), hexValue = 
                    // Return hex value of *first* character in `content`
                    function hexValueFromContent(content) {
                        return toHex(_toConsumableArray(content.replace(CLEAN_CONTENT_PATTERN, ""))[0] || "");
                    }
                    // Check if it's a secondary Duotone layer, by checking if:
                    // - Unicode value in `content` is repeated
                    // - Unicode value in `content` is above 0x10000
                    // - The "ss01" font feature is enabled on the `content`
                    (_content), isV4 = fontFamilyMatch[0].startsWith("FontAwesome"), isSecondary = function isSecondaryLayer(styles) {
                        var hasStylisticSet = styles.getPropertyValue("font-feature-settings").includes("ss01"), cleaned = styles.getPropertyValue("content").replace(CLEAN_CONTENT_PATTERN, ""), codePoint = cleaned.codePointAt(0), isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1], isDoubled = 2 === cleaned.length && cleaned[0] === cleaned[1];
                        return isPrependTen || isDoubled || hasStylisticSet;
                    }(styles), iconName = byUnicode(prefix, hexValue), iconIdentifier = iconName;
                    if (isV4) {
                        var iconName4 = function byOldUnicode(unicode) {
                            var oldUnicode = _byOldUnicode[unicode], newUnicode = byUnicode("fas", unicode);
                            return oldUnicode || (newUnicode ? {
                                prefix: "fas",
                                iconName: newUnicode
                            } : null) || {
                                prefix: null,
                                iconName: null
                            };
                        }(hexValue);
                        iconName4.iconName && iconName4.prefix && (iconName = iconName4.iconName, prefix = iconName4.prefix);
                    }
                    // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
                    // already done so with the same prefix and iconName
                                        if (!iconName || isSecondary || alreadyProcessedPseudoElement && alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) === prefix && alreadyProcessedPseudoElement.getAttribute(DATA_ICON) === iconIdentifier) resolve(); else {
                        node.setAttribute(pendingAttribute, iconIdentifier), alreadyProcessedPseudoElement && 
                        // Delete the old one, since we're replacing it with a new one
                        node.removeChild(alreadyProcessedPseudoElement);
                        var meta = function blankMeta() {
                            return {
                                iconName: null,
                                prefix: null,
                                transform: meaninglessTransform,
                                symbol: !1,
                                mask: {
                                    iconName: null,
                                    prefix: null,
                                    rest: []
                                },
                                maskId: null,
                                extra: {
                                    classes: [],
                                    styles: {},
                                    attributes: {}
                                }
                            };
                        }(), extra = meta.extra;
                        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position, findIcon(iconName, prefix).then((function(main) {
                            var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
                                icons: {
                                    main,
                                    mask: emptyCanonicalIcon()
                                },
                                prefix,
                                iconName: iconIdentifier,
                                extra,
                                watchable: !0
                            })), element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
                            "::before" === position ? node.insertBefore(element, node.firstChild) : node.appendChild(element), 
                            element.outerHTML = abstract.map((function(a$$1) {
                                return toHtml(a$$1);
                            })).join("\n"), node.removeAttribute(pendingAttribute), resolve();
                        }))["catch"](reject);
                    }
                } else resolve();
            }));
        }
        function replace(node) {
            return Promise.all([ replaceForPosition(node, "::before"), replaceForPosition(node, "::after") ]);
        }
        function processable(node) {
            return !(node.parentNode === document.head || ~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) || node.getAttribute(DATA_FA_PSEUDO_ELEMENT) || node.parentNode && "svg" === node.parentNode.tagName);
        }
        var hasPseudoElement = function hasPseudoElement(selector) {
            return !!selector && PSEUDO_ELEMENTS.some((function(pseudoSelector) {
                return selector.includes(pseudoSelector);
            }));
        }, parseCSSRuleForPseudos = function parseCSSRuleForPseudos(selectorText) {
            if (!selectorText) return [];
            var selectorSet = new Set, selectors = selectorText.split(/,(?![^()]*\))/).map((function(s$$1) {
                return s$$1.trim();
            }));
            selectors = selectors.flatMap((function(selector) {
                return selector.includes("(") ? selector : selector.split(",").map((function(s$$1) {
                    return s$$1.trim();
                }));
            }));
            var _step, _iterator = _createForOfIteratorHelper(selectors);
            try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var selector = _step.value;
                    if (hasPseudoElement(selector)) {
                        // Remove pseudo-elements from the selector
                        var selectorWithoutPseudo = PSEUDO_ELEMENTS.reduce((function(acc, pseudoSelector) {
                            return acc.replace(pseudoSelector, "");
                        }), selector);
                        "" !== selectorWithoutPseudo && "*" !== selectorWithoutPseudo && selectorSet.add(selectorWithoutPseudo);
                    }
                }
            } catch (err) {
                _iterator.e(err);
            } finally {
                _iterator.f();
            }
            return selectorSet;
        };
        // Return selectors from all available stylesheets that have
        // pseudo-elements defined.
                function searchPseudoElements(root) {
            var useAsNodeList = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
            if (IS_DOM) {
                var nodeList;
                if (useAsNodeList) nodeList = root; else if (config.searchPseudoElementsFullScan) nodeList = root.querySelectorAll("*"); else {
                    // Get elements that have pseudo elements defined in the CSS
                    var _step2, selectorSet = new Set, _iterator2 = _createForOfIteratorHelper(document.styleSheets);
                    try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                            var stylesheet = _step2.value;
                            try {
                                var _step3, _iterator3 = _createForOfIteratorHelper(stylesheet.cssRules);
                                try {
                                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                        var _step4, rule = _step3.value, _iterator4 = _createForOfIteratorHelper(parseCSSRuleForPseudos(rule.selectorText));
                                        try {
                                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                                var selector = _step4.value;
                                                selectorSet.add(selector);
                                            }
                                        } catch (err) {
                                            _iterator4.e(err);
                                        } finally {
                                            _iterator4.f();
                                        }
                                    }
                                } catch (err) {
                                    _iterator3.e(err);
                                } finally {
                                    _iterator3.f();
                                }
                            } catch (e$$1) {
                                config.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(stylesheet.href, " (").concat(e$$1.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'));
                            }
                        }
                    } catch (err) {
                        _iterator2.e(err);
                    } finally {
                        _iterator2.f();
                    }
                    if (!selectorSet.size) return;
                    var cleanSelectors = Array.from(selectorSet).join(", ");
                    try {
                        nodeList = root.querySelectorAll(cleanSelectors);
                    } catch (_unused) {}
 // eslint-disable-line no-empty
                                }
                return new Promise((function(resolve, reject) {
                    var operations = toArray(nodeList).filter(processable).map(replace), end = perf.begin("searchPseudoElements");
                    disableObservation(), Promise.all(operations).then((function() {
                        end(), enableObservation(), resolve();
                    }))["catch"]((function() {
                        end(), enableObservation(), reject();
                    }));
                }));
            }
        }
        var PseudoElements = {
            hooks: function hooks() {
                return {
                    mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                        return accumulator.pseudoElementsCallback = searchPseudoElements, accumulator;
                    }
                };
            },
            provides: function provides(providers) {
                providers.pseudoElements2svg = function(params) {
                    var _params$node = params.node, node = void 0 === _params$node ? DOCUMENT : _params$node;
                    config.searchPseudoElements && searchPseudoElements(node);
                };
            }
        }, _unwatched = !1, parseTransformString = function parseTransformString(transformString) {
            return transformString.toLowerCase().split(" ").reduce((function(acc, n) {
                var parts = n.toLowerCase().split("-"), first = parts[0], rest = parts.slice(1).join("-");
                if (first && "h" === rest) return acc.flipX = !0, acc;
                if (first && "v" === rest) return acc.flipY = !0, acc;
                if (rest = parseFloat(rest), isNaN(rest)) return acc;
                switch (first) {
                  case "grow":
                    acc.size = acc.size + rest;
                    break;

                  case "shrink":
                    acc.size = acc.size - rest;
                    break;

                  case "left":
                    acc.x = acc.x - rest;
                    break;

                  case "right":
                    acc.x = acc.x + rest;
                    break;

                  case "up":
                    acc.y = acc.y - rest;
                    break;

                  case "down":
                    acc.y = acc.y + rest;
                    break;

                  case "rotate":
                    acc.rotate = acc.rotate + rest;
                }
                return acc;
            }), {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            });
        }, PowerTransforms = {
            mixout: function mixout() {
                return {
                    parse: {
                        transform: function transform(transformString) {
                            return parseTransformString(transformString);
                        }
                    }
                };
            },
            hooks: function hooks() {
                return {
                    parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                        var transformString = node.getAttribute("data-fa-transform");
                        return transformString && (accumulator.transform = parseTransformString(transformString)), 
                        accumulator;
                    }
                };
            },
            provides: function provides(providers) {
                providers.generateAbstractTransformGrouping = function(_ref) {
                    var main = _ref.main, transform = _ref.transform, containerWidth = _ref.containerWidth, iconWidth = _ref.iconWidth, outer = {
                        transform: "translate(".concat(containerWidth / 2, " 256)")
                    }, innerTranslate = "translate(".concat(32 * transform.x, ", ").concat(32 * transform.y, ") "), innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") "), innerRotate = "rotate(".concat(transform.rotate, " 0 0)"), operations = {
                        outer,
                        inner: {
                            transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
                        },
                        path: {
                            transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
                        }
                    };
                    return {
                        tag: "g",
                        attributes: _objectSpread2({}, operations.outer),
                        children: [ {
                            tag: "g",
                            attributes: _objectSpread2({}, operations.inner),
                            children: [ {
                                tag: main.icon.tag,
                                children: main.icon.children,
                                attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
                            } ]
                        } ]
                    };
                };
            }
        }, ALL_SPACE = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        };
        function fillBlack(abstract) {
            var force = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
            return abstract.attributes && (abstract.attributes.fill || force) && (abstract.attributes.fill = "black"), 
            abstract;
        }
        var Masks = {
            hooks: function hooks() {
                return {
                    parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                        var maskData = node.getAttribute("data-fa-mask"), mask = maskData ? getCanonicalIcon(maskData.split(" ").map((function(i) {
                            return i.trim();
                        }))) : emptyCanonicalIcon();
                        return mask.prefix || (mask.prefix = getDefaultUsablePrefix()), accumulator.mask = mask, 
                        accumulator.maskId = node.getAttribute("data-fa-mask-id"), accumulator;
                    }
                };
            },
            provides: function provides(providers) {
                providers.generateAbstractMask = function(_ref) {
                    var abstract, children = _ref.children, attributes = _ref.attributes, main = _ref.main, mask = _ref.mask, explicitMaskId = _ref.maskId, transform = _ref.transform, mainWidth = main.width, mainPath = main.icon, maskWidth = mask.width, maskPath = mask.icon, trans = function transformForSvg(_ref) {
                        var transform = _ref.transform, containerWidth = _ref.containerWidth, iconWidth = _ref.iconWidth, outer = {
                            transform: "translate(".concat(containerWidth / 2, " 256)")
                        }, innerTranslate = "translate(".concat(32 * transform.x, ", ").concat(32 * transform.y, ") "), innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") "), innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
                        return {
                            outer,
                            inner: {
                                transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
                            },
                            path: {
                                transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
                            }
                        };
                    }({
                        transform,
                        containerWidth: maskWidth,
                        iconWidth: mainWidth
                    }), maskRect = {
                        tag: "rect",
                        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
                            fill: "white"
                        })
                    }, maskInnerGroupChildrenMixin = mainPath.children ? {
                        children: mainPath.children.map(fillBlack)
                    } : {}, maskInnerGroup = {
                        tag: "g",
                        attributes: _objectSpread2({}, trans.inner),
                        children: [ fillBlack(_objectSpread2({
                            tag: mainPath.tag,
                            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
                        }, maskInnerGroupChildrenMixin)) ]
                    }, maskOuterGroup = {
                        tag: "g",
                        attributes: _objectSpread2({}, trans.outer),
                        children: [ maskInnerGroup ]
                    }, maskId = "mask-".concat(explicitMaskId || nextUniqueId()), clipId = "clip-".concat(explicitMaskId || nextUniqueId()), maskTag = {
                        tag: "mask",
                        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
                            id: maskId,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [ maskRect, maskOuterGroup ]
                    }, defs = {
                        tag: "defs",
                        children: [ {
                            tag: "clipPath",
                            attributes: {
                                id: clipId
                            },
                            children: (abstract = maskPath, "g" === abstract.tag ? abstract.children : [ abstract ])
                        }, maskTag ]
                    };
                    return children.push(defs, {
                        tag: "rect",
                        attributes: _objectSpread2({
                            fill: "currentColor",
                            "clip-path": "url(#".concat(clipId, ")"),
                            mask: "url(#".concat(maskId, ")")
                        }, ALL_SPACE)
                    }), {
                        children,
                        attributes
                    };
                };
            }
        }, MissingIconIndicator = {
            provides: function provides(providers) {
                var reduceMotion = !1;
                WINDOW.matchMedia && (reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches), 
                providers.missingIconAbstract = function() {
                    var gChildren = [], FILL = {
                        fill: "currentColor"
                    }, ANIMATION_BASE = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s"
                    };
                    // Ring
                    gChildren.push({
                        tag: "path",
                        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        })
                    });
                    var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
                        attributeName: "opacity"
                    }), dot = {
                        tag: "circle",
                        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                            cx: "256",
                            cy: "364",
                            r: "28"
                        }),
                        children: []
                    };
                    return reduceMotion || dot.children.push({
                        tag: "animate",
                        attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
                            attributeName: "r",
                            values: "28;14;28;28;14;28;"
                        })
                    }, {
                        tag: "animate",
                        attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                            values: "1;0;1;1;0;1;"
                        })
                    }), gChildren.push(dot), gChildren.push({
                        tag: "path",
                        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                            opacity: "1",
                            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                        }),
                        children: reduceMotion ? [] : [ {
                            tag: "animate",
                            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                                values: "1;0;0;0;0;1;"
                            })
                        } ]
                    }), reduceMotion || 
                    // Exclamation
                    gChildren.push({
                        tag: "path",
                        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                            opacity: "0",
                            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                        }),
                        children: [ {
                            tag: "animate",
                            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                                values: "0;0;1;1;0;0;"
                            })
                        } ]
                    }), {
                        tag: "g",
                        attributes: {
                            "class": "missing"
                        },
                        children: gChildren
                    };
                };
            }
        };
        !function registerPlugins(nextPlugins, _ref) {
            var obj = _ref.mixoutsTo;
            return _plugins = nextPlugins, _hooks = {}, Object.keys(providers).forEach((function(k) {
                -1 === defaultProviderKeys.indexOf(k) && delete providers[k];
            })), _plugins.forEach((function(plugin) {
                var mixout = plugin.mixout ? plugin.mixout() : {};
                if (Object.keys(mixout).forEach((function(tk) {
                    "function" == typeof mixout[tk] && (obj[tk] = mixout[tk]), "object" === _typeof(mixout[tk]) && Object.keys(mixout[tk]).forEach((function(sk) {
                        obj[tk] || (obj[tk] = {}), obj[tk][sk] = mixout[tk][sk];
                    }));
                })), plugin.hooks) {
                    var hooks = plugin.hooks();
                    Object.keys(hooks).forEach((function(hook) {
                        _hooks[hook] || (_hooks[hook] = []), _hooks[hook].push(hooks[hook]);
                    }));
                }
                plugin.provides && plugin.provides(providers);
            })), obj;
        }([ InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, {
            mixout: function mixout() {
                return {
                    dom: {
                        unwatch: function unwatch() {
                            disableObservation(), _unwatched = !0;
                        }
                    }
                };
            },
            hooks: function hooks() {
                return {
                    bootstrap: function bootstrap() {
                        observe(chainHooks("mutationObserverCallbacks", {}));
                    },
                    noAuto: function noAuto() {
                        !function disconnect() {
                            mo && mo.disconnect();
                        }();
                    },
                    watch: function watch(params) {
                        var observeMutationsRoot = params.observeMutationsRoot;
                        _unwatched ? enableObservation() : observe(chainHooks("mutationObserverCallbacks", {
                            observeMutationsRoot
                        }));
                    }
                };
            }
        }, PowerTransforms, Masks, MissingIconIndicator, {
            hooks: function hooks() {
                return {
                    parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                        var symbolData = node.getAttribute("data-fa-symbol"), symbol = null !== symbolData && ("" === symbolData || symbolData);
                        return accumulator.symbol = symbol, accumulator;
                    }
                };
            }
        } ], {
            mixoutsTo: api
        });
        var config$1 = api.config, parse$1 = api.parse, icon = api.icon;
        function camelize(string) {
            // CONCATENATED MODULE: ./node_modules/@fortawesome/react-fontawesome/dist/index.js
            // src/components/FontAwesomeIcon.tsx
            // src/utils/camelize.ts
            return function _isNumerical(object) {
                return (object -= 0) == object;
            }(string) ? string : (string = string.replaceAll(/[_-]+(.)?/g, ((_, chr) => chr ? chr.toUpperCase() : ""))).charAt(0).toLowerCase() + string.slice(1);
        }
        // src/converter.ts
                var styleCache =  new Map, STYLE_CACHE_LIMIT = 1e3;
        function styleToObject(style) {
            if (styleCache.has(style)) return styleCache.get(style);
            const result = {};
            let start = 0;
            const len = style.length;
            for (;start < len; ) {
                const semicolonIndex = style.indexOf(";", start), end = -1 === semicolonIndex ? len : semicolonIndex, pair = style.slice(start, end).trim();
                if (pair) {
                    const colonIndex = pair.indexOf(":");
                    if (colonIndex > 0) {
                        const rawProp = pair.slice(0, colonIndex).trim(), value = pair.slice(colonIndex + 1).trim();
                        if (rawProp && value) {
                            const prop = camelize(rawProp);
                            result[prop.startsWith("webkit") ? (val = prop, val.charAt(0).toUpperCase() + val.slice(1)) : prop] = value;
                        }
                    }
                }
                start = end + 1;
            }
            var val;
            if (styleCache.size === STYLE_CACHE_LIMIT) {
                const oldestKey = styleCache.keys().next().value;
                oldestKey && styleCache["delete"](oldestKey);
            }
            return styleCache.set(style, result), result;
        }
        var useAccessibilityId = (id, hasAccessibleProps) => {
            const generatedId = (0, react.useId)();
            return id || (hasAccessibleProps ? generatedId : void 0);
        };
        // src/logger.ts
                "undefined" != typeof process && process.env.FA_VERSION;
        var SVG_CORE_VERSION = 
        // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
        // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
        // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
        "searchPseudoElementsFullScan" in config$1 ? "7.0.0" : "6.0.0", IS_VERSION_7_OR_LATER = Number.parseInt(SVG_CORE_VERSION) >= 7, ANIMATION_CLASSES_beat = "fa-beat", ANIMATION_CLASSES_fade = "fa-fade", ANIMATION_CLASSES_beatFade = "fa-beat-fade", ANIMATION_CLASSES_bounce = "fa-bounce", ANIMATION_CLASSES_shake = "fa-shake", ANIMATION_CLASSES_spin = "fa-spin", ANIMATION_CLASSES_spinPulse = "fa-spin-pulse", ANIMATION_CLASSES_spinReverse = "fa-spin-reverse", ANIMATION_CLASSES_pulse = "fa-pulse", PULL_CLASSES = {
            left: "fa-pull-left",
            right: "fa-pull-right"
        }, ROTATE_CLASSES = {
            90: "fa-rotate-90",
            180: "fa-rotate-180",
            270: "fa-rotate-270"
        }, SIZE_CLASSES = {
            "2xs": "fa-2xs",
            xs: "fa-xs",
            sm: "fa-sm",
            lg: "fa-lg",
            xl: "fa-xl",
            "2xl": "fa-2xl",
            "1x": "fa-1x",
            "2x": "fa-2x",
            "3x": "fa-3x",
            "4x": "fa-4x",
            "5x": "fa-5x",
            "6x": "fa-6x",
            "7x": "fa-7x",
            "8x": "fa-8x",
            "9x": "fa-9x",
            "10x": "fa-10x"
        }, STYLE_CLASSES_border = "fa-border", STYLE_CLASSES_fixedWidth = "fa-fw", STYLE_CLASSES_flip = "fa-flip", STYLE_CLASSES_flipHorizontal = "fa-flip-horizontal", STYLE_CLASSES_flipVertical = "fa-flip-vertical", STYLE_CLASSES_inverse = "fa-inverse", STYLE_CLASSES_rotateBy = "fa-rotate-by", STYLE_CLASSES_swapOpacity = "fa-swap-opacity", STYLE_CLASSES_widthAuto = "fa-width-auto";
        function normalizeIconArgs(icon) {
            if (icon) return (icon => "object" == typeof icon && "icon" in icon && !!icon.icon)(icon) ? icon : parse$1.icon(icon);
        }
        // src/utils/typed-object-keys.ts
                // src/components/FontAwesomeIcon.tsx
        var logger = new class {
            constructor(scope = "react-fontawesome") {
                this.enabled = !1;
                let IS_DEV = !1;
                try {
                    IS_DEV = "undefined" != typeof process && !1;
                } catch {}
                this.scope = scope, this.enabled = IS_DEV;
            }
            /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */            log(...args) {
                this.enabled && console.log(`[${this.scope}]`, ...args);
            }
            /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */            warn(...args) {
                this.enabled && console.warn(`[${this.scope}]`, ...args);
            }
            /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */            error(...args) {
                this.enabled && console.error(`[${this.scope}]`, ...args);
            }
        }("FontAwesomeIcon"), DEFAULT_PROPS = {
            border: !1,
            className: "",
            mask: void 0,
            maskId: void 0,
            fixedWidth: !1,
            inverse: !1,
            flip: !1,
            icon: void 0,
            listItem: !1,
            pull: void 0,
            pulse: !1,
            rotation: void 0,
            rotateBy: !1,
            size: void 0,
            spin: !1,
            spinPulse: !1,
            spinReverse: !1,
            beat: !1,
            fade: !1,
            beatFade: !1,
            bounce: !1,
            shake: !1,
            symbol: !1,
            title: "",
            titleId: void 0,
            transform: void 0,
            swapOpacity: !1,
            widthAuto: !1
        }, DEFAULT_PROP_KEYS = new Set(Object.keys(DEFAULT_PROPS)), FontAwesomeIcon = react.forwardRef(((props, ref) => {
            const allProps = {
                ...DEFAULT_PROPS,
                ...props
            }, {icon: iconArgs, mask: maskArgs, symbol, title, titleId: titleIdFromProps, maskId: maskIdFromProps, transform} = allProps, maskId = useAccessibilityId(maskIdFromProps, Boolean(maskArgs)), titleId = useAccessibilityId(titleIdFromProps, Boolean(title)), iconLookup = normalizeIconArgs(iconArgs);
            if (!iconLookup) return logger.error("Icon lookup is undefined", iconArgs), null;
            const classList = 
            // src/utils/get-class-list-from-props.ts
            function getClassListFromProps(props) {
                const {beat, fade, beatFade, bounce, shake, spin, spinPulse, spinReverse, pulse, fixedWidth, inverse, border, flip, size, rotation, pull, swapOpacity, rotateBy, widthAuto, className} = props, result = [];
                return className && result.push(...className.split(" ")), beat && result.push(ANIMATION_CLASSES_beat), 
                fade && result.push(ANIMATION_CLASSES_fade), beatFade && result.push(ANIMATION_CLASSES_beatFade), 
                bounce && result.push(ANIMATION_CLASSES_bounce), shake && result.push(ANIMATION_CLASSES_shake), 
                spin && result.push(ANIMATION_CLASSES_spin), spinReverse && result.push(ANIMATION_CLASSES_spinReverse), 
                spinPulse && result.push(ANIMATION_CLASSES_spinPulse), pulse && result.push(ANIMATION_CLASSES_pulse), 
                fixedWidth && result.push(STYLE_CLASSES_fixedWidth), inverse && result.push(STYLE_CLASSES_inverse), 
                border && result.push(STYLE_CLASSES_border), !0 === flip && result.push(STYLE_CLASSES_flip), 
                "horizontal" !== flip && "both" !== flip || result.push(STYLE_CLASSES_flipHorizontal), 
                "vertical" !== flip && "both" !== flip || result.push(STYLE_CLASSES_flipVertical), 
                null != size && result.push(SIZE_CLASSES[size]), null != rotation && 0 !== rotation && result.push(ROTATE_CLASSES[rotation]), 
                null != pull && result.push(PULL_CLASSES[pull]), swapOpacity && result.push(STYLE_CLASSES_swapOpacity), 
                IS_VERSION_7_OR_LATER ? (rotateBy && result.push(STYLE_CLASSES_rotateBy), widthAuto && result.push(STYLE_CLASSES_widthAuto), 
                result) : result;
            }(allProps), transformProps = "string" == typeof transform ? parse$1.transform(transform) : transform, normalizedMaskArgs = normalizeIconArgs(maskArgs), renderedIcon = icon(iconLookup, {
                ...classList.length > 0 && {
                    classes: classList
                },
                ...transformProps && {
                    transform: transformProps
                },
                ...normalizedMaskArgs && {
                    mask: normalizedMaskArgs
                },
                symbol,
                title,
                titleId,
                maskId
            });
            if (!renderedIcon) return logger.error("Could not find icon", iconLookup), null;
            const {abstract} = renderedIcon, extraProps = {
                ref
            };
            for (const key of function typedObjectKeys(obj) {
                return Object.keys(obj);
            }(allProps)) DEFAULT_PROP_KEYS.has(key) || (extraProps[key] = allProps[key]);
            return convertCurry(abstract[0], extraProps);
        }));
        FontAwesomeIcon.displayName = "FontAwesomeIcon";
        var convertCurry = function convert(createElement, element, extraProps = {}) {
            if ("string" == typeof element) return element;
            const children = (element.children || []).map((child => convert(createElement, child))), elementAttributes = element.attributes || {}, attrs = {};
            for (const [key, val] of Object.entries(elementAttributes)) switch (!0) {
              case "class" === key:
                attrs.className = val, delete elementAttributes["class"];
                break;

              case "style" === key:
                attrs.style = styleToObject(String(val));
                break;

              case key.startsWith("aria-"):
              case key.startsWith("data-"):
                attrs[key.toLowerCase()] = val;
                break;

              default:
                attrs[camelize(key)] = val;
            }
            const {style: existingStyle, "aria-label": ariaLabel, ...remaining} = extraProps;
            return existingStyle && (attrs.style = attrs.style ? {
                ...attrs.style,
                ...existingStyle
            } : existingStyle), ariaLabel && (attrs["aria-label"] = ariaLabel, attrs["aria-hidden"] = "false"), 
            createElement(element.tag, {
                ...remaining,
                ...attrs
            }, ...children);
        }.bind(null, react.createElement), faArrowsRotate = {
            prefix: "fas",
            iconName: "arrows-rotate",
            icon: [ 512, 512, [ 128472, "refresh", "sync" ], "f021", "M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z" ]
        }, monthlySummaryTab_extends = undefined && undefined.__extends || function() {
            var extendStatics = function(d, b) {
                return extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                }, extendStatics(d, b);
            };
            return function(d, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }();
        /* harmony default export */ const monthlySummaryTab = function(_super) {
            function MonthlySummaryTab(props) {
                return _super.call(this, props) || this;
            }
            return monthlySummaryTab_extends(MonthlySummaryTab, _super), MonthlySummaryTab.prototype.render = function() {
                var _this = this;
                return react.createElement("div", {
                    className: "content-center"
                }, react.createElement("div", {
                    className: "flex flex-col items-center"
                }, react.createElement("span", {
                    className: "text-budget-dark font-bold text-xl p-6"
                }, react.createElement("div", null, "This Month's Category Totals"), react.createElement("button", {
                    onClick: function() {
                        return _this.props.reloadData();
                    }
                }, react.createElement(FontAwesomeIcon, {
                    icon: faArrowsRotate
                }))), react.createElement("table", {
                    className: "table-fixed text-budget-dark"
                }, react.createElement("tr", null, react.createElement("th", null, "Category"), react.createElement("th", null, "Dollar Total")), Object.keys(PurchaseCategory).map((function(category, index) {
                    return react.createElement("tr", null, react.createElement("td", null, category), react.createElement("td", null, _this.props.loading ? "Loading..." : "$" + (_this.props.categories[category] == undefined ? 0 : parseFloat(_this.props.categories[category]).toFixed(2))));
                })), react.createElement("tr", null, react.createElement("td", null, "Month Grand Total:"), react.createElement("td", null, Object.keys(this.props.categories).length > 0 ? "$" + Object.keys(this.props.categories).reduce((function(prev, curr) {
                    return (parseFloat(prev) + parseFloat(_this.props.categories[curr])).toFixed(2);
                }), "0") : "Loading...")), react.createElement("tr", null, react.createElement("td", null, "Total Last Month (at this time):"), react.createElement("td", null, this.props.prevMonthTotal < 0 ? "Loading..." : "$" + this.props.prevMonthTotal.toFixed(2))))), react.createElement("div", {
                    className: "m-2 lg:m-28 border-t"
                }, react.createElement("div", {
                    className: "text-budget-dark text-xl font-bold p-6"
                }, "This Month's Purchases"), 0 == this.props.purchases.length ? "No Submitted Transactions Yet" : this.props.purchases.map((function(purchase, index) {
                    return react.createElement("div", {
                        className: "flex flex-row items-center justify-center border-t-2 border-indigo-900"
                    }, react.createElement("div", {
                        className: "flex flex-col text-budget-dark text-center w-5/6 items-center"
                    }, react.createElement("span", {
                        className: "text-lg font-bold"
                    }, purchase.category ? purchase.category + ": " : "", "$", purchase.amount), react.createElement("span", {
                        className: "text-lg"
                    }, purchase.description), react.createElement("span", {
                        className: "text-sm"
                    }, purchase.isoDate)));
                }))));
            }, MonthlySummaryTab;
        }(react.Component);
        // CONCATENATED MODULE: ./src/client/components/root.tsx
        var root_extends = undefined && undefined.__extends || function() {
            var extendStatics = function(d, b) {
                return extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                }, extendStatics(d, b);
            };
            return function(d, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), Root = function(_super) {
            function Root(props) {
                var _this = _super.call(this, props) || this;
                return _this.state = {
                    activeTabName: "pendingTransactionsTab",
                    loading: !1,
                    purchases: [],
                    categories: {},
                    prevMonthTotal: -1,
                    unreadPurchases: []
                }, _this.componentDidMount = function() {
                    _this.setLoading = _this.setLoading.bind(_this), _this.reloadData();
                }, _this.reloadData = function() {
                    _this.setLoading(!0), google.script.run.withSuccessHandler(_this.handleSuccess).withFailureHandler(_this.handleFailure).ReloadData();
                }, _this.handleSuccess = function(resultStr) {
                    var result = JSON.parse(resultStr);
                    _this.setState({
                        purchases: result.purchases,
                        categories: result.categories,
                        prevMonthTotal: result.prevMonthTotal,
                        unreadPurchases: result.unreadPurchases
                    }), _this.setLoading(!1);
                }, _this.setLoading = function(value) {
                    _this.setState({
                        loading: value
                    });
                }, _this.updateUnreadPurchases = function(unreadPurchases) {
                    _this.setState({
                        unreadPurchases
                    });
                }, _this.handleFailure = function(error) {
                    _this.setLoading(!1), alert("Error Occured: " + error.message);
                }, _this;
            }
            return root_extends(Root, _super), Root.prototype.setActiveTab = function(tabName) {
                this.setState({
                    activeTabName: tabName
                });
            }, Root.prototype.render = function() {
                var _this = this;
                return react.createElement("div", {
                    className: "h-full"
                }, react.createElement("div", {
                    className: "flex flex-row items-center p-10"
                }, react.createElement("div", {
                    className: "flex flex-row items-start w-1/2"
                }, react.createElement("span", {
                    className: "text-budget-dark text-4xl"
                }, "eBudget")), react.createElement("div", {
                    className: "flex flex-row-reverse w-1/2"
                }, react.createElement("span", {
                    className: "text-budget-light text-lg"
                }, react.createElement("a", {
                    className: "no-underline",
                    href: "https://crspradlin.dev",
                    target: "_new"
                }, "crspradlin")))), react.createElement("div", {
                    className: "h-20 flex flex-row text-center justify-center"
                }, react.createElement("ul", {
                    className: "flex border-b"
                }, react.createElement("li", {
                    className: "-mb-px mr-1"
                }, react.createElement("button", {
                    className: "text-xl inline-block py-2 px-4 font-semibold ".concat("pendingTransactionsTab" === this.state.activeTabName ? "border-l border-t border-r rounded-t text-budget-dark" : "text-gray-400 hover:text-budget-light"),
                    disabled: this.state.loading,
                    onClick: function() {
                        return _this.setActiveTab("pendingTransactionsTab");
                    }
                }, "Pending Transactions")), react.createElement("li", {
                    className: "mr-1"
                }, react.createElement("button", {
                    className: "text-xl inline-block py-2 px-4 font-semibold ".concat("monthlySummaryTab" === this.state.activeTabName ? "border-l border-t border-r rounded-t text-budget-dark" : "text-gray-400 hover:text-budget-light"),
                    disabled: this.state.loading,
                    onClick: function() {
                        return _this.setActiveTab("monthlySummaryTab");
                    }
                }, "Monthly Summary")))), react.createElement("div", {
                    className: "h-full flex flex-col text-center"
                }, this.state.loading ? react.createElement(react.Fragment, null, react.createElement("div", {
                    className: "flex justify-center items-center h-full"
                }, react.createElement(FontAwesomeIcon, {
                    icon: faArrowsRotate,
                    size: "2xl",
                    className: "animate-spin"
                }))) : react.createElement(react.Fragment, null, react.createElement("div", {
                    style: {
                        display: "pendingTransactionsTab" === this.state.activeTabName ? "block" : "none"
                    }
                }, react.createElement(pendingTransactionsTab, {
                    reloadData: this.reloadData,
                    loading: this.state.loading,
                    setLoading: this.setLoading,
                    initialUnreadPurchases: this.state.unreadPurchases
                })), react.createElement("div", {
                    style: {
                        display: "monthlySummaryTab" === this.state.activeTabName ? "block" : "none"
                    }
                }, react.createElement(monthlySummaryTab, {
                    reloadData: this.reloadData,
                    loading: this.state.loading,
                    purchases: this.state.purchases,
                    categories: this.state.categories,
                    prevMonthTotal: this.state.prevMonthTotal
                })))));
            }, Root;
        }(react.Component);
        // CONCATENATED MODULE: ./src/client/index.tsx
        react_dom.render(react.createElement(Root, null), document.getElementById("root"));
    })();
})
/******/ ();