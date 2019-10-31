var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [@routeAnimations]=\"prepareRoute(outlet)\"> \n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button>\n    {{triviaValue}}\n</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resultdisplay/resultdisplay.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resultdisplay/resultdisplay.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel class = \"main\" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n        <mat-panel-title class = \"title\">\n            {{triviaValue}} <br>\n        </mat-panel-title>\n        <mat-panel-title>\n            Category: {{category}} <br>\n            Question: {{question}}\n        </mat-panel-title>\n        <mat-panel-title>\n            Air Date: {{date}} <br>\n        </mat-panel-title>\n        <mat-panel-description>\n            {{panelOpenState ? 'Open' : 'Close'}}\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>Answer: {{answer}}</p>\n</mat-expansion-panel>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/result/result.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/result/result.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"mains\">\n        <div class = \"selectionColumn\">\n                <mat-form-field class=\"parameterComponents\">\n                        <input matInput [(ngModel)]=\"min\" [matDatepicker]=\"minDate\" placeholder=\"Choose a minimum date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"minDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #minDate></mat-datepicker>\n                </mat-form-field>\n    \n                <mat-form-field class=\"parameterComponents\">\n                    <input matInput [(ngModel)]=\"max\" [matDatepicker]=\"maxDate\" placeholder=\"Maximum date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"maxDate\"></mat-datepicker-toggle>\n                    <mat-datepicker #maxDate></mat-datepicker>\n                </mat-form-field>\n    \n                <mat-form-field class=\"parameterComponents\">\n                    <mat-label>Question Value</mat-label>\n                    <mat-select [(ngModel)]=\"pointsSelected\">\n                        <mat-option *ngFor=\"let point of points\" [value]=\"point.value\">\n                            {{point.viewValue}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"primary\" (click)=\"filter()\">Filter</button>\n                <button mat-raised-button color=\"primary\" (click)=\"reset()\">Reset</button>\n                <button mat-raised-button color=\"primary\" (click)=\"goBack()\">Back to Category Screen</button>\n        </div> \n    </div>\n\n<mat-accordion>\n    <mat-spinner *ngIf=\"loading === true\" class='loadingIcon'></mat-spinner>\n    <app-resultdisplay *ngFor=\"let data of resultData\" [question] = \"data.question\" [answer] = \"data.answer\" [category] = \"data.category_id\" [triviaValue] = \"data.value\" [date] = \"data.airdate\"></app-resultdisplay>\n</mat-accordion>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"titleContainer\">\n    <h1><br>Troogle</h1>\n    <h4>Trivia questions search engine</h4>\n</div>\n<div class = \"mains\">\n    <mat-spinner *ngIf=\"loading === true\" class='loadingIcon'></mat-spinner>\n    <mat-form-field class=\"parameterComponents\">\n        <mat-label class = \"dropDownList\" >Select a category</mat-label>\n        <mat-select class = \"dropDownList\" [(ngModel)]=\"categorySelected\">\n            <mat-option *ngFor=\"let category of categoryOptions\" [value]=\"category.id\">\n                {{category.title}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field><br>\n    <button mat-raised-button color=\"primary\" (click)=\"click()\">Search</button>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/result/result.component */ "./src/app/pages/result/result.component.ts");
            /* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
            var routes = [
                { path: 'result/:categoryID', component: _pages_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"], data: { animation: 'isRight' } },
                { path: 'start', component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], data: { animation: 'isLeft' } },
                { path: '', redirectTo: '/start', pathMatch: 'full' },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animations */ "./src/route-animations.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Trivia';
                }
                AppComponent.prototype.prepareRoute = function (outlet) {
                    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
                };
                AppComponent.prototype.ngOnInit = function () {
                    particlesJS.load('particles-js', '../assets/particles.json', function () { console.log('callback - particles.js config loaded'); });
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    animations: [
                        _route_animations__WEBPACK_IMPORTED_MODULE_2__["slider"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
            /* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
            /* harmony import */ var _pages_result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/result/result.component */ "./src/app/pages/result/result.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _components_resultdisplay_resultdisplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/resultdisplay/resultdisplay.component */ "./src/app/components/resultdisplay/resultdisplay.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                        _pages_start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                        _pages_result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"],
                        _components_resultdisplay_resultdisplay_component__WEBPACK_IMPORTED_MODULE_13__["ResultdisplayComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/card/card.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/card/card.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button {\n    width: 300px;\n    height: 200px;\n    border-radius: 50px 20px;\n    font-size: 40px;\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpREFBaUQ7QUFDckQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/card/card.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/card/card.component.ts ***!
          \***************************************************/
        /*! exports provided: CardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function () { return CardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CardComponent = /** @class */ (function () {
                function CardComponent() {
                }
                CardComponent.prototype.ngOnInit = function () {
                };
                return CardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CardComponent.prototype, "triviaValue", void 0);
            CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")).default]
                })
            ], CardComponent);
            /***/ 
        }),
        /***/ "./src/app/components/resultdisplay/resultdisplay.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/resultdisplay/resultdisplay.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main{\n    margin-top: 30px;\n}\n\n.title {\n    font-size: 40px;\n}\n\n.expansion{\n    height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRkaXNwbGF5L3Jlc3VsdGRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRkaXNwbGF5L3Jlc3VsdGRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuLmV4cGFuc2lvbntcbiAgICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/resultdisplay/resultdisplay.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/resultdisplay/resultdisplay.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ResultdisplayComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultdisplayComponent", function () { return ResultdisplayComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ResultdisplayComponent = /** @class */ (function () {
                function ResultdisplayComponent() {
                }
                ResultdisplayComponent.prototype.ngOnInit = function () {
                };
                return ResultdisplayComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResultdisplayComponent.prototype, "question", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResultdisplayComponent.prototype, "answer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResultdisplayComponent.prototype, "category", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResultdisplayComponent.prototype, "date", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResultdisplayComponent.prototype, "triviaValue", void 0);
            ResultdisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-resultdisplay',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resultdisplay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resultdisplay/resultdisplay.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resultdisplay.component.css */ "./src/app/components/resultdisplay/resultdisplay.component.css")).default]
                })
            ], ResultdisplayComponent);
            /***/ 
        }),
        /***/ "./src/app/core/data.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/core/data.service.ts ***!
          \**************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DataService = /** @class */ (function () {
                function DataService(http) {
                    this.http = http;
                    this.baseURL = "https://cors-anywhere.herokuapp.com/http://jservice.io";
                    this.category = [];
                    this.clues = [];
                }
                DataService.prototype.getClues = function (category, value, min_date, max_date) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var param2;
                        return __generator(this, function (_a) {
                            param2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                            if (value != null) {
                                param2 = param2.append('value', value);
                            }
                            if (min_date != null) {
                                param2 = param2.append('min_date', min_date);
                            }
                            if (max_date != null) {
                                param2 = param2.append('max_date', max_date);
                            }
                            param2 = param2.append('category', category);
                            // params = params.append('var2', val2);
                            return [2 /*return*/, this.http.get(this.baseURL + "/api/clues", { params: param2 })];
                        });
                    });
                };
                DataService.prototype.getCategories = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var params;
                        return __generator(this, function (_a) {
                            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                            params = params.append('count', '100');
                            params = params.append('offset', '1');
                            return [2 /*return*/, this.http.get(this.baseURL + "/api/categories", { params: params })];
                        });
                    });
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
                //http://jservice.io/popular/18418
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/pages/result/result.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/pages/result/result.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n    margin-left: 50px;\n    margin-top: 30px;\n}\n\n.mains\n{\n     padding: 30px;\n     text-align: center;\n}\n\nbutton {\n    margin-left: 20px;\n}\n\n.parameterComponents {\n    font-size:15px;\n}\n\n.loadingIcon{\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7S0FFSyxhQUFhO0tBQ2Isa0JBQWtCO0FBQ3ZCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWFpbnNcbntcbiAgICAgcGFkZGluZzogMzBweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wYXJhbWV0ZXJDb21wb25lbnRzIHtcbiAgICBmb250LXNpemU6MTVweDtcbn1cblxuLmxvYWRpbmdJY29ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogc2hvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/result/result.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pages/result/result.component.ts ***!
          \**************************************************/
        /*! exports provided: ResultComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function () { return ResultComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/core/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ResultComponent = /** @class */ (function () {
                function ResultComponent(dataService, route, router) {
                    this.dataService = dataService;
                    this.route = route;
                    this.router = router;
                    this.points = [
                        { value: null, viewValue: 'All' },
                        { value: 100, viewValue: '100' },
                        { value: 200, viewValue: '200' },
                        { value: 300, viewValue: '300' },
                        { value: 400, viewValue: '400' },
                        { value: 500, viewValue: '500' },
                        { value: 600, viewValue: '600' },
                        { value: 700, viewValue: '700' },
                        { value: 800, viewValue: '800' },
                        { value: 900, viewValue: '900' },
                        { value: 1000, viewValue: '1000' },
                    ];
                    this.resultData = [
                    // {
                    //     "id": 1,
                    //     "answer": "Election Day",
                    //     "question": "1st Tuesday after the 1st Monday in November",
                    //     "value": 100,
                    //     "airdate": "1985-02-08T12:00:00.000Z",
                    //     "category_id": 1,
                    //     "game_id": null,
                    //     "invalid_count": 1
                    // }
                    ];
                    this.loading = true;
                }
                ResultComponent.prototype.ngOnInit = function () {
                    this.getData();
                };
                ResultComponent.prototype.filter = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a, _b, _c, _d, extractedData;
                        var _this = this;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    this.loading = true;
                                    if (!(this.min != null && this.max != null)) return [3 /*break*/, 3];
                                    _a = this;
                                    return [4 /*yield*/, this.formatDate(this.min)];
                                case 1:
                                    _a.minParam = _e.sent();
                                    //console.log(this.minParam);
                                    _b = this;
                                    return [4 /*yield*/, this.formatDate(this.max)];
                                case 2:
                                    //console.log(this.minParam);
                                    _b.maxParam = _e.sent();
                                    _e.label = 3;
                                case 3:
                                    if (!(this.min != null && this.max == null)) return [3 /*break*/, 5];
                                    _c = this;
                                    return [4 /*yield*/, this.formatDate(this.min)];
                                case 4:
                                    _c.maxParam = _e.sent();
                                    this.minParam = null;
                                    _e.label = 5;
                                case 5:
                                    if (!(this.min == null && this.max != null)) return [3 /*break*/, 7];
                                    _d = this;
                                    return [4 /*yield*/, this.formatDate(this.max)];
                                case 6:
                                    _d.minParam = _e.sent();
                                    this.maxParam = null;
                                    _e.label = 7;
                                case 7: return [4 /*yield*/, this.dataService.getClues(this.route.snapshot.params['categoryID'], this.pointsSelected, this.minParam, this.maxParam)];
                                case 8:
                                    extractedData = _e.sent();
                                    extractedData.subscribe(function (data) {
                                        _this.resultData = data;
                                        _this.removeDateFormat();
                                        _this.loading = false;
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ResultComponent.prototype.getData = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var extractedData;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.loading = true;
                                    return [4 /*yield*/, this.dataService.getClues(this.route.snapshot.params['categoryID'], this.pointsSelected, this.min, this.max)];
                                case 1:
                                    extractedData = _a.sent();
                                    extractedData.subscribe(function (data) {
                                        _this.resultData = data;
                                        _this.removeDateFormat();
                                        _this.loading = false;
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ResultComponent.prototype.goBack = function () {
                    this.router.navigate(["/start"]);
                };
                ResultComponent.prototype.reset = function () {
                    this.maxParam = null;
                    this.minParam = null;
                    this.min = null;
                    this.max = null;
                    this.pointsSelected = null;
                    this.getData();
                };
                ResultComponent.prototype.removeDateFormat = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var i, date;
                        return __generator(this, function (_a) {
                            for (i = 0; i < this.resultData.length; i++) {
                                date = this.resultData[i].airdate;
                                date = date.substring(0, date.indexOf('T'));
                                this.resultData[i].airdate = date;
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                ResultComponent.prototype.formatDate = function (date) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var month, day, year, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, date.getMonth()];
                                case 1:
                                    month = (_a.sent()) + 1;
                                    if (month < 10) {
                                        month = "0" + month.toString();
                                    }
                                    else {
                                        month = month.toString();
                                    }
                                    return [4 /*yield*/, date.getDate().toString()];
                                case 2:
                                    day = _a.sent();
                                    if (day < 10) {
                                        day = "0" + day.toString();
                                    }
                                    else {
                                        day = day.toString();
                                    }
                                    return [4 /*yield*/, date.getFullYear().toString()];
                                case 3:
                                    year = (_a.sent());
                                    result = year + "-" + month + "-" + day + "T12:00:00.000Z";
                                    return [2 /*return*/, result];
                            }
                        });
                    });
                };
                ResultComponent.prototype.ngOnDestroy = function () {
                    this.resultData = [];
                };
                return ResultComponent;
            }());
            ResultComponent.ctorParameters = function () { return [
                { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-result',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/result/result.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result.component.css */ "./src/app/pages/result/result.component.css")).default]
                })
            ], ResultComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/start/start.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/pages/start/start.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".searchContainer {\n    position: fixed;\n    top: 50%;\n    left: 40%;\n}\n\n.searchBar {\n    margin-top: 10%;\n    font-size: 30px;\n}\n\n.parameterComponents{\n    font-size:40px;\n    width: 500px;\n}\n\n.titleContainer{\n    /* margin-top: 20%; */\n    /* height: 100%;  */\n    text-align:center; \n    width:100%;\n}\n\n.titleContainer h1 {\n    /* vertical-align:middle; */\n    font-size: 60px;\n}\n\n@font-face {\n    font-family: 'Quicksand';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url(https://fonts.gstatic.com/s/quicksand/v19/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-xDwxUD2GFw.woff) format('woff');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n.dropDownList {\n    font-size: 20px;\n}\n\n.textColorOrange {\n    background-color: rgb(49, 37, 22);\n    background-image: linear-gradient(to bottom, rgba(218, 134, 0, 0.6), transparent);\n    color:transparent;\n    font-size: 30px;\n    -webkit-background-clip: text;\n            background-clip: text;\n}\n\n.titleContainer h4 {\n    /* vertical-align:middle; */\n    font-family: 'Quicksand', 'sans-serif';\n    font-size: 30px;\n}\n\n.mains\n{\n     padding: 30px;\n     text-align: center;\n}\n\n.loadingIcon{\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBIQUEwSDtJQUMxSCx5S0FBeUs7QUFDN0s7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlGQUFpRjtJQUNqRixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isc0NBQXNDO0lBQ3RDLGVBQWU7QUFDbkI7O0FBRUE7O0tBRUssYUFBYTtLQUNiLGtCQUFrQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNDAlO1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLnBhcmFtZXRlckNvbXBvbmVudHN7XG4gICAgZm9udC1zaXplOjQwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuLnRpdGxlQ29udGFpbmVye1xuICAgIC8qIG1hcmdpbi10b3A6IDIwJTsgKi9cbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICAqL1xuICAgIHRleHQtYWxpZ246Y2VudGVyOyBcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4udGl0bGVDb250YWluZXIgaDEge1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgKi9cbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9xdWlja3NhbmQvdjE5LzZ4Sy1kU1phTTlpRThLYnBSQV9MSjN6OG1IOUJPSnZna1A4bzU4YS14RHd4VUQyR0Z3LndvZmYpIGZvcm1hdCgnd29mZicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG4uZHJvcERvd25MaXN0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4udGV4dENvbG9yT3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDM3LCAyMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTgsIDEzNCwgMCwgMC42KSwgdHJhbnNwYXJlbnQpO1xuICAgIGNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG4udGl0bGVDb250YWluZXIgaDQge1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgKi9cbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsICdzYW5zLXNlcmlmJztcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5tYWluc1xue1xuICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nSWNvbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgb3ZlcmZsb3c6IHNob3c7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/start/start.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/start/start.component.ts ***!
          \************************************************/
        /*! exports provided: StartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function () { return StartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/core/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var StartComponent = /** @class */ (function () {
                function StartComponent(dataService, router) {
                    this.dataService = dataService;
                    this.router = router;
                    this.loading = true;
                    this.categoryOptions = [
                        { title: "For Halloween, 19th c. Louisianans made a midnight 'dumb supper', a meal eaten without doing this, & waited for a ghost to join", id: "18042" },
                        { title: "Halloween: Trick Or Treat", id: "12391" },
                        { title: "Halloween", id: "4839" },
                        { title: "It Happened On Halloween", id: "5783" },
                        { title: "happy halloween", id: "10807" },
                        { title: "Potpourriiii", id: "306" },
                        { title: "Stupid Answers", id: "136" },
                        { title: "Sports", id: "42" },
                        { title: "Animals", id: "21" },
                        { title: "Scary Movies", id: "652" },
                    ];
                }
                StartComponent.prototype.click = function () {
                    //console.log(this.categorySelected);
                    this.router.navigate(["/result/" + this.categorySelected]);
                };
                StartComponent.prototype.ngOnInit = function () {
                    this.getCategories();
                };
                StartComponent.prototype.getCategories = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var extractedData;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.dataService.getCategories()];
                                case 1:
                                    extractedData = _a.sent();
                                    extractedData.subscribe(function (data) {
                                        _this.categoryOptions = data;
                                        _this.loading = false;
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return StartComponent;
            }());
            StartComponent.ctorParameters = function () { return [
                { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-start',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.css */ "./src/app/pages/start/start.component.css")).default]
                })
            ], StartComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "./src/route-animations.ts": 
        /*!*********************************!*\
          !*** ./src/route-animations.ts ***!
          \*********************************/
        /*! exports provided: slider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function () { return slider; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var left = [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%'
                    })
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
                    ])
                ]),
            ];
            var right = [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%'
                    })
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '-100%' })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '100%' }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '0%' }))
                    ])
                ]),
            ];
            var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => isLeft', left),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => isRight', right),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('isRight => *', left),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('isLeft => *', right)
            ]);
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/VincentTran/Documents/CS/FullStackProject/Trivia/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map