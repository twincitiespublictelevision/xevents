(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * ACTIONS
 */
Object.defineProperty(exports, "__esModule", { value: true });
var XSysActions;
(function (XSysActions) {
    XSysActions["Register"] = "REGISTER";
    XSysActions["Unregister"] = "UNREGISTER";
    XSysActions["Fire"] = "FIRE";
})(XSysActions = exports.XSysActions || (exports.XSysActions = {}));
/**
 * EVENTS
 */
var XSysEvents;
(function (XSysEvents) {
    XSysEvents["Registered"] = "REGISTERED";
    XSysEvents["Unregistered"] = "UNREGISTERED";
})(XSysEvents = exports.XSysEvents || (exports.XSysEvents = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(0);
function isValidAction(action) {
    return [types_1.XSysActions.Register, types_1.XSysActions.Unregister, types_1.XSysActions.Fire].indexOf(action) !== -1;
}
function makeMessage(action, value) {
    return {
        ns: 'XEVENT',
        action: action,
        value: value
    };
}
exports.makeMessage = makeMessage;
function readMessage(data) {
    if (data) {
        var ns = data.ns, action = data.action, value = data.value;
        if (ns === 'XEVENT' && isValidAction(action) && value) {
            return data;
        }
    }
    return undefined;
}
exports.readMessage = readMessage;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function randomKey() {
    return Math.floor((Date.now() + Math.random() * 10000)).toString(36);
}
exports.randomKey = randomKey;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(0);
var message_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(2);
function serialize(fn) {
    return "(function() { return " + fn.toString() + "; })()";
}
function hasSWSupport() {
    return 'serviceWorker' in navigator;
}
function getSWController() {
    return __awaiter(this, void 0, void 0, function () {
        var registration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!hasSWSupport()) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.serviceWorker.ready];
                case 1:
                    registration = _a.sent();
                    return [2 /*return*/, registration.active];
                case 2: return [2 /*return*/, null];
            }
        });
    });
}
var DEFAULT_OPTIONS = {
    repeat: 0,
    state: {}
};
function register(event, handler, options) {
    return __awaiter(this, void 0, void 0, function () {
        var message, returnKey, returnMessage, controller;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = message_1.makeMessage(types_1.XSysActions.Register, {
                        event: event,
                        handler: serialize(handler),
                        options: __assign(__assign({}, DEFAULT_OPTIONS), options)
                    });
                    returnKey = helpers_1.randomKey();
                    returnMessage = new Promise(function (resolve, reject) {
                        var listener = function (e) {
                            if (e.data.event === types_1.XSysEvents.Registered && typeof e.data[returnKey] === 'string') {
                                var key = e.data[returnKey];
                                resolve(key);
                                window.removeEventListener('message', listener);
                            }
                        };
                        window.addEventListener('message', listener);
                    });
                    return [4 /*yield*/, getSWController()];
                case 1:
                    controller = _a.sent();
                    if (controller) {
                        controller.postMessage(message);
                    }
                    return [2 /*return*/, returnMessage];
            }
        });
    });
}
function unregister(event, key) {
    return __awaiter(this, void 0, void 0, function () {
        var message, returnMessage, controller;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = message_1.makeMessage(types_1.XSysActions.Unregister, { event: event, key: key });
                    returnMessage = new Promise(function (resolve, reject) {
                        var listener = function (e) {
                            if (e.data.event === types_1.XSysEvents.Unregistered && e.data.key === key) {
                                resolve(key);
                                window.removeEventListener('message', listener);
                            }
                        };
                        window.addEventListener('message', listener);
                    });
                    return [4 /*yield*/, getSWController()];
                case 1:
                    controller = _a.sent();
                    if (controller) {
                        controller.postMessage(message);
                    }
                    return [2 /*return*/, returnMessage];
            }
        });
    });
}
function fire(event, data) {
    return __awaiter(this, void 0, void 0, function () {
        var message, controller;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = message_1.makeMessage(types_1.XSysActions.Fire, { event: event, data: data });
                    return [4 /*yield*/, getSWController()];
                case 1:
                    controller = _a.sent();
                    if (controller) {
                        controller.postMessage(message);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = {
    register: register,
    unregister: unregister,
    fire: fire
};


/***/ })
/******/ ])["default"]));