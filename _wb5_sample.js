/**
 * top-level this need to be the exports object
 */
RuntimeGlobals.returnExportsFromRuntime = "return-exports-from-runtime";

const returnExportsFromRuntime = runtimeRequirements.has(
    RuntimeGlobals.returnExportsFromRuntime
);

buf2.push(
    returnExportsFromRuntime
        ? "// Load entry module and return exports"
        : "// Load entry module"
);

const mayReturn =
    --i === 0 && returnExportsFromRuntime ? "return " : "";

buf2.push(
    "// This entry module used 'exports' so it can't be inlined"
);
result.allowInlineStartup = false;

// todo: remove above

(() => { // webpackBootstrap
    "use strict";
    var __webpack_modules__ = ({

        /***/ "../packages/content-recommended-categories/src/app/app.component.css":
        /*!****************************************************************************!*\\
          !*** ../packages/content-recommended-categories/src/app/app.component.css ***!
          \\****************************************************************************/
        /*! namespace exports */
        /*! export default [provided] [no usage info] [missing usage info prevents renaming] */
        /*! other exports [not provided] [no usage info] */
        /*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
            });
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (".hello3 {\\n  background: green;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BhY2thZ2VzL2NvbnRlbnQtcmVjb21tZW5kZWQtY2F0ZWdvcmllcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Ii4uL3BhY2thZ2VzL2NvbnRlbnQtcmVjb21tZW5kZWQtY2F0ZWdvcmllcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlbGxvMyB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuIl19 */");

            /***/
        })

    });
    /************************************************************************/
// The module cache
    var __webpack_module_cache__ = {};

// The require function
    function __webpack_require__(moduleId) {
// Check if module is in cache
        if (__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports;
        }
// Create a new module (and put it into the cache)
        var module = __webpack_module_cache__[moduleId] = {
// no module.id needed
// no module.loaded needed
            exports: {}
        };

// Execute the module function
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
        return module.exports;
    }

    /************************************************************************/
    /* webpack/runtime/define property getters */
    (() => {
// define getter functions for harmony exports
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
                }
            }
        };
    })();

    /* webpack/runtime/hasOwnProperty shorthand */
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    })();

    /* webpack/runtime/make namespace object */
    (() => {
// define __esModule on exports
        __webpack_require__.r = (exports) => {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            }
            Object.defineProperty(exports, '__esModule', {value: true});
        };
    })();

    /************************************************************************/
// startup
// Load entry module
    __webpack_require__("../packages/content-recommended-categories/src/app/app.component.css");
    // todo: desired output
    return  __webpack_require__("../packages/content-recommended-categories/src/app/app.component.css");
// This entry module used 'exports' so it can't be inlined
})();
