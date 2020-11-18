(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@haiku/core/dom/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@haiku/core/dom/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */

module.exports = __webpack_require__(/*! ./../lib/adapters/dom */ "./node_modules/@haiku/core/lib/adapters/dom/index.js").default;


/***/ }),

/***/ "./node_modules/@haiku/core/dom/vue/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@haiku/core/dom/vue/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */

module.exports = __webpack_require__(/*! ./../../lib/adapters/vue-dom */ "./node_modules/@haiku/core/lib/adapters/vue-dom/index.js").default;


/***/ }),

/***/ "./node_modules/@haiku/core/index.js":
/*!*******************************************!*\
  !*** ./node_modules/@haiku/core/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */

module.exports = __webpack_require__(/*! ./lib/HaikuGlobal */ "./node_modules/@haiku/core/lib/HaikuGlobal.js").default;


/***/ }),

/***/ "./node_modules/@haiku/core/lib/Config.js":
/*!************************************************!*\
  !*** ./node_modules/@haiku/core/lib/Config.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var interactionModes_1 = __webpack_require__(/*! ./helpers/interactionModes */ "./node_modules/@haiku/core/lib/helpers/interactionModes.js");
exports.DEFAULTS = {
    alwaysComputeSizing: false,
    automount: true,
    autoplay: true,
    children: null,
    clock: {},
    contextMenu: 'enabled',
    eventHandlers: null,
    folder: null,
    forceFlush: false,
    frame: null,
    freeze: false,
    helpers: null,
    hooks: null,
    interactionMode: interactionModes_1.InteractionMode.LIVE,
    loop: false,
    mixpanel: '6f31d4f99cf71024ce27c3e404a79a61',
    overflow: null,
    overflowX: null,
    overflowY: null,
    placeholder: null,
    position: 'relative',
    preserve3d: 'auto',
    seed: null,
    sizing: null,
    states: null,
    timelines: null,
    timestamp: null,
    vanities: null,
};
/**
 * Configuration from HaikuContext is forwarded to all HaikuComponent instances in its tree.
 * For child instances, certain settings (such as `loop`) give unexpected behavior and
 * other settings (such as `states`) don't make much sense to pass down. This specifies the
 * settings that are considered safe to forward from the context to all subcomponents.
 */
var CHILD_SAFE_CONFIG = {
    alwaysComputeSizing: true,
    clock: true,
    contextMenu: true,
    folder: true,
    freeze: true,
    interactionMode: true,
    mixpanel: true,
    overflow: true,
    overflowX: true,
    overflowY: true,
    preserve3d: true,
    seed: true,
    sizing: true,
    timestamp: true,
};
var buildChildSafeConfig = function (config) {
    var out = {};
    for (var key in config) {
        if (CHILD_SAFE_CONFIG[key]) {
            out[key] = config[key];
        }
    }
    return out;
};
function seed() {
    return Math.random().toString(36).slice(2);
}
var CONFIG_KEYS_TO_MERGE = {
    states: true,
    eventHandlers: true,
    timelines: true,
    helpers: true,
    vanities: true,
    initialStates: true,
};
function build() {
    var argums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argums[_i] = arguments[_i];
    }
    var config = {};
    var args = argums.slice();
    args.unshift(exports.DEFAULTS);
    args.forEach(function (incoming) {
        if (!incoming || typeof incoming !== 'object') {
            return;
        }
        for (var key in incoming) {
            if (incoming[key] === undefined) {
                continue;
            }
            if (CONFIG_KEYS_TO_MERGE[key]) {
                if (!config[key]) {
                    config[key] = {};
                }
                config[key] = __assign({}, config[key], incoming[key]);
            }
            else {
                config[key] = incoming[key];
            }
        }
    });
    // Validations
    if (config.overflow && (config.overflowX || config.overflowY)) {
        console.warn('[haiku core] `overflow` overrides `overflowY`/`overflowX`');
        config.overflowX = null;
        config.overflowY = null;
    }
    return config;
}
exports.default = {
    build: build,
    seed: seed,
    DEFAULTS: exports.DEFAULTS,
    buildChildSafeConfig: buildChildSafeConfig,
};
//# sourceMappingURL=Config.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuBase.js":
/*!***************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuBase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HaikuGlobal_1 = __webpack_require__(/*! ./HaikuGlobal */ "./node_modules/@haiku/core/lib/HaikuGlobal.js");
exports.GLOBAL_LISTENER_KEY = '*';
exports.GENERIC_EVENT_KEY = 'event';
var upperCaseFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
var camelize = function (str) {
    return str.replace(/\W+/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return (index === 0) ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
var upsertInstanceRegistry = function (className) {
    if (!HaikuGlobal_1.default.models[className]) {
        HaikuGlobal_1.default.models[className] = [];
    }
    return HaikuGlobal_1.default.models[className];
};
var getInstanceRegistry = function (instance) {
    var className = instance.getClassName();
    return upsertInstanceRegistry(className);
};
var addInstanceToGlobalModelRegistry = function (instance) {
    getInstanceRegistry(instance).push(instance);
    return ++HaikuGlobal_1.default.idCounter;
};
var removeInstanceFromGlobalModelRegistry = function (instance) {
    var registry = getInstanceRegistry(instance);
    for (var i = 0; i < registry.length; i++) {
        if (registry[i] === instance) {
            registry.splice(i, 1);
            return;
        }
    }
};
var HaikuBase = /** @class */ (function () {
    function HaikuBase() {
        this.cache = {};
        this.$id = addInstanceToGlobalModelRegistry(this);
        this.listeners = {};
    }
    HaikuBase.prototype.getId = function () {
        return this.$id;
    };
    HaikuBase.prototype.getPrimaryKey = function () {
        return this.getClassName() + ":" + this.getId();
    };
    HaikuBase.prototype.getClassName = function () {
        return this.constructor.__name__;
    };
    HaikuBase.prototype.cacheSet = function (key, value) {
        this.cache[key] = value;
    };
    HaikuBase.prototype.cacheGet = function (key) {
        return this.cache[key];
    };
    HaikuBase.prototype.cacheFetch = function (key, provider) {
        var valueExisting = this.cacheGet(key);
        if (valueExisting !== undefined) {
            return valueExisting;
        }
        var valueProvided = provider();
        this.cacheSet(key, valueProvided);
        return valueProvided;
    };
    HaikuBase.prototype.cacheUnset = function (key) {
        this.cache[key] = undefined;
    };
    HaikuBase.prototype.cacheClear = function () {
        this.cache = {};
    };
    HaikuBase.prototype.subcacheGet = function (key) {
        return this.cacheGet(key);
    };
    HaikuBase.prototype.subcacheEnsure = function (key) {
        if (!this.cacheGet(key)) {
            this.cacheSet(key, {});
        }
    };
    HaikuBase.prototype.subcacheClear = function (key) {
        this.cacheSet(key, {});
    };
    HaikuBase.prototype.on = function (key, listener) {
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(listener);
    };
    HaikuBase.prototype.addEventListener = function (key, listener) {
        this.on(key, listener);
    };
    HaikuBase.prototype.off = function (key, listener) {
        if (!this.listeners[key]) {
            return;
        }
        for (var i = this.listeners[key].length - 1; i >= 0; i--) {
            if (this.listeners[key][i] === listener) {
                this.listeners[key].splice(i, 1);
            }
        }
    };
    HaikuBase.prototype.removeEventListener = function (key, listener) {
        this.off(key, listener);
    };
    HaikuBase.prototype.removeListener = function (key, listener) {
        this.off(key, listener);
    };
    HaikuBase.prototype.emitToListeners = function (key, args) {
        if (this.listeners[key]) {
            for (var i = 0; i < this.listeners[key].length; i++) {
                this.listeners[key][i].apply(null, args);
            }
        }
    };
    HaikuBase.prototype.emitToGenericListeners = function (key, args) {
        if (this.listeners[exports.GLOBAL_LISTENER_KEY]) {
            for (var i = 0; i < this.listeners[exports.GLOBAL_LISTENER_KEY].length; i++) {
                this.listeners[exports.GLOBAL_LISTENER_KEY][i].apply(null, [key].concat(args));
            }
        }
    };
    HaikuBase.prototype.emitToAncestors = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return; // no-op; Implemented by subclass
    };
    HaikuBase.prototype.emit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // Specific direct listeners (this.on('foo:bar'))
        this.emitToListeners(key, args);
        // Specific config object listeners (`onHaikuEventFooBar`)
        this.emitToConfigHandlers(key, args);
        // Generic direct listeners (this.on('*'))
        this.emitToGenericListeners(key, args);
        // Emit up the chain
        this.emitToAncestors.apply(this, [key].concat(args));
        var allArgs = [key].concat(args);
        // Generic config object listeners ('event', 'onEvent', 'onHaikuEvent')
        // for when the subscription name isn't known in advance, e.g. custom events
        this.emitToConfigHandlers(exports.GENERIC_EVENT_KEY, allArgs);
    };
    HaikuBase.prototype.emitToConfigHandlers = function (key, args) {
        if (!this.config) {
            return;
        }
        // 'somebody:Did-Thing' -> 'somebodyDidThing'
        var keyCamelCase = upperCaseFirstLetter(camelize(key));
        // 'somebodyDidThing' -> 'onSomebodyDidThing'
        var keyCamelCaseWithOnPrefix = "on" + keyCamelCase;
        if (typeof this.config[keyCamelCaseWithOnPrefix] === 'function') {
            this.config[keyCamelCaseWithOnPrefix].apply(null, args);
        }
        // 'somebodyDidThing' -> 'onHaikuSomebodyDidThing' (legacy)
        var keyCamelCaseWithOnHaikuPrefix = "onHaiku" + keyCamelCase;
        if (typeof this.config[keyCamelCaseWithOnHaikuPrefix] === 'function') {
            this.config[keyCamelCaseWithOnHaikuPrefix].apply(null, args);
        }
    };
    HaikuBase.prototype.matchesCriteria = function (criteria) {
        if (!criteria) {
            return false;
        }
        var answer = true;
        for (var key in criteria) {
            if (this[key] !== criteria[key]) {
                answer = false;
            }
        }
        return answer;
    };
    HaikuBase.prototype.destroy = function () {
        removeInstanceFromGlobalModelRegistry(this);
    };
    HaikuBase.getRegistryForClass = function (klass) {
        return upsertInstanceRegistry(klass.__name__);
    };
    return HaikuBase;
}());
exports.default = HaikuBase;
//# sourceMappingURL=HaikuBase.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuClock.js":
/*!****************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuClock.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuBase_1 = __webpack_require__(/*! ./HaikuBase */ "./node_modules/@haiku/core/lib/HaikuBase.js");
var HaikuGlobal_1 = __webpack_require__(/*! ./HaikuGlobal */ "./node_modules/@haiku/core/lib/HaikuGlobal.js");
var assign_1 = __webpack_require__(/*! ./vendor/assign */ "./node_modules/@haiku/core/lib/vendor/assign/index.js");
var raf_1 = __webpack_require__(/*! ./vendor/raf */ "./node_modules/@haiku/core/lib/vendor/raf/index.js");
var NUMBER = 'number';
var DEFAULT_OPTIONS = {
    // frameDuration: Number
    // Time to elapse per frame (ms)
    frameDuration: 16.666,
    // frameDelay: Number
    // How long to wait between each tick (ms)
    frameDelay: 16.666,
    // marginOfErrorForDelta: Number
    // A bit of grace when calculating whether a new frame should be run
    marginOfErrorForDelta: 1.0,
    // run: Boolean
    // Whether or not the clock should run by default
    run: true,
};
// The global animation harness is a singleton
// We don't want to create new ones even on reload
if (!HaikuGlobal_1.default.HaikuGlobalAnimationHarness) {
    var queue_1 = [];
    var frame_1 = function () {
        var length = queue_1.length;
        for (var i = 0; i < length; i++) {
            queue_1[i]();
        }
        HaikuGlobal_1.default.HaikuGlobalAnimationHarness.raf = raf_1.default.request(frame_1);
    };
    HaikuGlobal_1.default.HaikuGlobalAnimationHarness = {
        // Array of functions to call on every rAF tick
        queue: queue_1,
        // The main frame function, loops through all those who
        // need an animation tick and calls them
        frame: frame_1,
        // Need a mechanism to cancel the rAF loop, or else some contexts
        // (e.g. tests) will have leaked handles
        cancel: function () {
            if (HaikuGlobal_1.default.HaikuGlobalAnimationHarness.raf) {
                raf_1.default.cancel(HaikuGlobal_1.default.HaikuGlobalAnimationHarness.raf);
            }
        },
    };
    // Trigger the loop to start; we'll push frame functions into its queue later
    HaikuGlobal_1.default.HaikuGlobalAnimationHarness.frame();
}
// tslint:disable:variable-name
var HaikuClock = /** @class */ (function (_super) {
    __extends(HaikuClock, _super);
    function HaikuClock(tickables, options) {
        var _this = _super.call(this) || this;
        _this.boundRunner = function () {
            _this.run();
        };
        _this._tickables = tickables;
        _this.assignOptions(options);
        _this._isRunning = false;
        _this.reinitialize();
        if (_this.options.run) {
            // Bind to avoid `this`-detachment when called by raf
            HaikuGlobal_1.default.HaikuGlobalAnimationHarness.queue.push(_this.boundRunner);
        }
        // Tests and others may need this to cancel the rAF loop, to avoid leaked handles
        _this.GLOBAL_ANIMATION_HARNESS = HaikuGlobal_1.default.HaikuGlobalAnimationHarness;
        return _this;
    }
    HaikuClock.prototype.reinitialize = function () {
        this._numLoopsRun = 0;
        this._localFramesElapsed = 0;
        this._localTimeElapsed = 0;
        this._deltaSinceLastTick = 0;
        this._localExplicitlySetTime = null;
        return this;
    };
    HaikuClock.prototype.addTickable = function (tickable) {
        this._tickables.push(tickable);
        return this;
    };
    HaikuClock.prototype.assignOptions = function (options) {
        this.options = assign_1.default(this.options || {}, DEFAULT_OPTIONS, options || {});
        return this;
    };
    HaikuClock.prototype.run = function () {
        if (this.isRunning()) {
            // If time is "controlled" we are locked to an explicitly set local time, so no math is needed.
            if (this.isTimeControlled()) {
                this.tick();
            }
            else {
                // If we got here, we need to evaluate the time elapsed, and determine if we've waited long enough for a frame
                this._numLoopsRun++;
                var prevTime = this._localTimeElapsed;
                var nextTime = prevTime + this.options.frameDuration;
                var deltaSinceLastTick = nextTime - prevTime + this._deltaSinceLastTick;
                if (deltaSinceLastTick >=
                    this.options.frameDelay - this.options.marginOfErrorForDelta) {
                    this.tick();
                    this._localFramesElapsed++;
                    this._localTimeElapsed = nextTime;
                    this._deltaSinceLastTick = 0; // Must reset delta when frame has been completed
                }
                else {
                    // If we got here, this loop is faster than the desired speed; wait till next call
                    this._deltaSinceLastTick = deltaSinceLastTick;
                }
            }
        }
    };
    HaikuClock.prototype.tick = function () {
        for (var i = 0; i < this._tickables.length; i++) {
            this._tickables[i].performTick();
        }
    };
    HaikuClock.prototype.getTime = function () {
        return this.getExplicitTime();
    };
    HaikuClock.prototype.setTime = function (time) {
        this._localExplicitlySetTime = parseInt(time || 0, 10);
        return this;
    };
    HaikuClock.prototype.getFPS = function () {
        return Math.round(1000 / this.options.frameDuration);
    };
    /**
     * @method getExplicitTime
     * @description Return either the running time or the controlled time, depending on whether this
     * clock is in control mode or not.
     */
    HaikuClock.prototype.getExplicitTime = function () {
        if (this.isTimeControlled()) {
            return this.getControlledTime();
        }
        return this.getRunningTime();
    };
    /**
     * @method getControlledTime
     * @description Return the value of time that has been explicitly controlled.
     */
    HaikuClock.prototype.getControlledTime = function () {
        return this._localExplicitlySetTime;
    };
    HaikuClock.prototype.isTimeControlled = function () {
        return typeof this._localExplicitlySetTime === NUMBER;
    };
    /**
     * @method getRunningTime
     * @description Return the running time, which is the value of time that has elapsed whether or
     * not time has been 'controlled' in control mode.
     */
    HaikuClock.prototype.getRunningTime = function () {
        return this._localTimeElapsed;
    };
    HaikuClock.prototype.isRunning = function () {
        return this._isRunning;
    };
    HaikuClock.prototype.start = function () {
        this._isRunning = true;
        return this;
    };
    HaikuClock.prototype.stop = function () {
        this._isRunning = false;
        return this;
    };
    HaikuClock.prototype.getFrameDuration = function () {
        return this.options.frameDuration;
    };
    HaikuClock.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        for (var i = 0; i < HaikuGlobal_1.default.HaikuGlobalAnimationHarness.queue.length; i++) {
            if (HaikuGlobal_1.default.HaikuGlobalAnimationHarness.queue[i] === this.boundRunner) {
                HaikuGlobal_1.default.HaikuGlobalAnimationHarness.queue.splice(i, 1);
                return;
            }
        }
    };
    Object.defineProperty(HaikuClock.prototype, "frameDuration", {
        get: function () {
            return this.options.frameDuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuClock.prototype, "frameDelay", {
        get: function () {
            return this.options.frameDelay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuClock.prototype, "time", {
        get: function () {
            return this.getExplicitTime();
        },
        enumerable: true,
        configurable: true
    });
    HaikuClock.__name__ = 'HaikuClock';
    return HaikuClock;
}(HaikuBase_1.default));
exports.default = HaikuClock;
//# sourceMappingURL=HaikuClock.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuComponent.js":
/*!********************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuComponent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(/*! ./api */ "./node_modules/@haiku/core/lib/api/index.js");
var Config_1 = __webpack_require__(/*! ./Config */ "./node_modules/@haiku/core/lib/Config.js");
var HaikuBase_1 = __webpack_require__(/*! ./HaikuBase */ "./node_modules/@haiku/core/lib/HaikuBase.js");
var HaikuElement_1 = __webpack_require__(/*! ./HaikuElement */ "./node_modules/@haiku/core/lib/HaikuElement.js");
var HaikuHelpers_1 = __webpack_require__(/*! ./HaikuHelpers */ "./node_modules/@haiku/core/lib/HaikuHelpers.js");
var HaikuNode_1 = __webpack_require__(/*! ./HaikuNode */ "./node_modules/@haiku/core/lib/HaikuNode.js");
var HaikuTimeline_1 = __webpack_require__(/*! ./HaikuTimeline */ "./node_modules/@haiku/core/lib/HaikuTimeline.js");
var ColorUtils_1 = __webpack_require__(/*! ./helpers/ColorUtils */ "./node_modules/@haiku/core/lib/helpers/ColorUtils.js");
var consoleErrorOnce_1 = __webpack_require__(/*! ./helpers/consoleErrorOnce */ "./node_modules/@haiku/core/lib/helpers/consoleErrorOnce.js");
var interactionModes_1 = __webpack_require__(/*! ./helpers/interactionModes */ "./node_modules/@haiku/core/lib/helpers/interactionModes.js");
var isMutableProperty_1 = __webpack_require__(/*! ./helpers/isMutableProperty */ "./node_modules/@haiku/core/lib/helpers/isMutableProperty.js");
var KeyframeUtils_1 = __webpack_require__(/*! ./helpers/KeyframeUtils */ "./node_modules/@haiku/core/lib/helpers/KeyframeUtils.js");
var PathUtils_1 = __webpack_require__(/*! ./helpers/PathUtils */ "./node_modules/@haiku/core/lib/helpers/PathUtils.js");
var SVGPoints_1 = __webpack_require__(/*! ./helpers/SVGPoints */ "./node_modules/@haiku/core/lib/helpers/SVGPoints.js");
var Layout3D_1 = __webpack_require__(/*! ./Layout3D */ "./node_modules/@haiku/core/lib/Layout3D.js");
var Migration_1 = __webpack_require__(/*! ./Migration */ "./node_modules/@haiku/core/lib/Migration.js");
var enhance_1 = __webpack_require__(/*! ./reflection/enhance */ "./node_modules/@haiku/core/lib/reflection/enhance.js");
var functionToRFO_1 = __webpack_require__(/*! ./reflection/functionToRFO */ "./node_modules/@haiku/core/lib/reflection/functionToRFO.js");
var StateTransitionManager_1 = __webpack_require__(/*! ./StateTransitionManager */ "./node_modules/@haiku/core/lib/StateTransitionManager.js");
var Transitions_1 = __webpack_require__(/*! ./Transitions */ "./node_modules/@haiku/core/lib/Transitions.js");
var assign_1 = __webpack_require__(/*! ./vendor/assign */ "./node_modules/@haiku/core/lib/vendor/assign/index.js");
var invert_1 = __webpack_require__(/*! ./vendor/gl-mat4/invert */ "./node_modules/@haiku/core/lib/vendor/gl-mat4/invert.js");
var FUNCTION = 'function';
var KEYFRAME_ZERO = 0;
var OBJECT = 'object';
var MAX_INT = 2147483646;
var SCOPE_STRATA = { div: 'div', svg: 'svg' };
var CDN_ROOT_STR = 'HAIKU|CDN|PROJECT|ROOT'.split('|').join('_'); // Split to avoid server-side munging
// HACK: Required until DOM subtree-hydration race is fixed
var ALWAYS_UPDATED_PROPERTIES = { 'controlFlow.placeholder': true };
var parseD = function (value) {
    // in case of d="" for any reason, don't try to expand this otherwise this will choke
    // #TODO: arguably we should preprocess SVGs before things get this far; try svgo?
    if (!value || value.length === 0) {
        return [];
    }
    // Allow points to return an array for convenience, and let downstream marshal it
    if (Array.isArray(value)) {
        return value;
    }
    return SVGPoints_1.default.pathToPoints(value);
};
var generateD = function (value) {
    if (typeof value === 'string') {
        return value;
    }
    return SVGPoints_1.default.pointsToPath(value);
};
var parseColor = function (value) {
    return ColorUtils_1.default.parseString(value);
};
var generateColor = function (value) {
    return ColorUtils_1.default.generateString(value);
};
var parsePoints = function (value) {
    if (Array.isArray(value)) {
        return value;
    }
    return SVGPoints_1.default.polyPointsStringToPoints(value);
};
var generatePoints = function (value) {
    if (typeof value === 'string') {
        return value;
    }
    return SVGPoints_1.default.pointsToPolyString(value);
};
var isFunction = function (value) {
    return typeof value === FUNCTION;
};
var INJECTABLES = {};
var pkg = __webpack_require__(/*! ./../package.json */ "./node_modules/@haiku/core/package.json");
exports.VERSION = pkg.version;
var STRING_TYPE = 'string';
var OBJECT_TYPE = 'object';
var HAIKU_ID_ATTRIBUTE = 'haiku-id';
var DEFAULT_TIMELINE_NAME = 'Default';
var CSS_QUERY_MAPPING = {
    name: 'elementName',
    attributes: 'attributes',
    children: 'children',
};
// tslint:disable:variable-name function-name
var HaikuComponent = /** @class */ (function (_super) {
    __extends(HaikuComponent, _super);
    function HaikuComponent(bytecode, context, host, config, container) {
        var _this = _super.call(this) || this;
        _this.parsedValueClusters = {};
        _this.needsExpand = true;
        _this.patches = [];
        if (!bytecode.template) {
            console.warn('[haiku core] adding missing template object');
            bytecode.template = { elementName: 'div', attributes: {}, children: [] };
        }
        if (!bytecode.timelines) {
            console.warn('[haiku core] adding missing timelines object');
            bytecode.timelines = {};
        }
        if (!bytecode.timelines[DEFAULT_TIMELINE_NAME]) {
            console.warn('[haiku core] adding missing default timeline');
            bytecode.timelines[DEFAULT_TIMELINE_NAME] = {};
        }
        if (!context) {
            throw new Error('Component requires a context');
        }
        if (!config) {
            throw new Error('Config options required');
        }
        if (!config.seed) {
            throw new Error('Seed value must be provided');
        }
        _this.PLAYER_VERSION = exports.VERSION; // #LEGACY
        _this.CORE_VERSION = exports.VERSION;
        _this.context = context;
        _this.container = container;
        _this.host = host;
        _this.guests = {};
        _this.bytecode = (config.hotEditingMode)
            ? bytecode
            : exports.clone(bytecode, _this); // Important because migrations mutate the bytecode
        assertTemplate(_this.bytecode.template);
        // Allow users to expose methods that can be called in event handlers
        if (_this.bytecode.methods) {
            for (var methodNameGiven in _this.bytecode.methods) {
                if (!_this[methodNameGiven]) {
                    _this[methodNameGiven] = _this.bytecode.methods[methodNameGiven].bind(_this);
                }
            }
        }
        _this._states = {}; // Storage for getter/setter actions in userland logic
        _this.state = {}; // Public accessor object, e.g. this.state.foo = 1
        // Instantiate StateTransitions. Responsible to store and execute any state transition.
        _this.stateTransitionManager = new StateTransitionManager_1.default(_this);
        _this.hooks = {};
        _this.helpers = Object.assign({}, _this.bytecode.helpers, {
            data: {},
        });
        // `assignConfig` calls bindStates because our incoming config, which
        // could occur at any point during runtime, e.g. in React, may need to update internal states, etc.
        // It also may populate hooks and helpers if passed in via configuration.
        _this.assignConfig(config);
        // Flag used internally to determine whether we need to re-render the full tree or can survive by just patching
        _this.doesNeedFullFlush = false;
        // If true, will continually flush the entire tree until explicitly set to false again
        _this.doAlwaysFlush = false;
        // If true, the component will assign 3D-preservation setting if one hasn't been set explicitly.
        // If config.preserve3d is 'auto', the migration pre-phase will try to detect whether 3d is needed.
        _this.doPreserve3d = (_this.config.preserve3d === true) ? true : false;
        // Dictionary of event handler names to handler functions; used to efficiently manage multiple subscriptions
        _this.registeredEventHandlers = {};
        // The last HaikuElement in this scope to be hovered; used to help manage hover/unhover
        _this.lastHoveredElement = null;
        // Flag to determine whether this component should continue doing any work
        _this.isDeactivated = false;
        // Flag to indicate whether we are sleeping, an ephemeral condition where no rendering occurs
        _this.isSleeping = false;
        _this.helpers = {
            data: {},
        };
        var helpers = Object.assign({}, HaikuHelpers_1.default.helpers, _this.getHelpers());
        for (var helperName in helpers) {
            _this.helpers[helperName] = helpers[helperName];
        }
        _this.helpers.now = function () {
            if (_this.isLiveMode()) {
                return (_this.config.timestamp || 1) + (_this.helpers.data.lastTimelineTime || 1);
            }
            return 1;
        };
        _this.helpers.rand = function () {
            if (_this.isLiveMode()) {
                var scopeKey = [
                    _this.helpers.data.lastTimelineName,
                    _this.helpers.data.lastTimelineTime,
                    _this.helpers.data.lastPropertyName,
                    _this.helpers.data.lastFlexId,
                ].join('|');
                var randKey = _this.config.seed + "@" + scopeKey;
                var keyInt = stringToInt(randKey);
                var outFloat = ((keyInt + 1) % MAX_INT) / MAX_INT;
                return outFloat;
            }
            return 1;
        };
        _this.helpers.find = function (selector) {
            return _this.querySelectorAll(selector);
        };
        var migrationOptions = {
            attrsHyphToCamel: exports.ATTRS_HYPH_TO_CAMEL,
            // During editing, we handle mutations directly in the app.
            mutations: config.hotEditingMode ? undefined : {
                // Random seed for adding instance uniqueness to ids at runtime.
                referenceUniqueness: (config.hotEditingMode)
                    ? undefined // During editing, Haiku.app pads ids unless this is undefined
                    : Math.random().toString(36).slice(2),
                haikuRoot: _this.getProjectRootPathWithTerminatingSlash(),
            },
        };
        try {
            Migration_1.runMigrationsPrePhase(_this, migrationOptions);
        }
        catch (exception) {
            console.warn('[haiku core] caught error during migration pre-phase', exception);
        }
        // Ensure full tree is are properly set up and all render nodes are connected to their models
        _this.render(__assign({}, _this.config));
        try {
            // If the bytecode we got happens to be in an outdated format, we automatically update it to the latest.
            Migration_1.runMigrationsPostPhase(_this, migrationOptions, exports.VERSION);
        }
        catch (exception) {
            console.warn('[haiku core] caught error during migration post-phase', exception);
        }
        _this.hydrateMutableTimelines();
        if (!_this.host) {
            _this.routeEventToHandlerAndEmit(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:did-initialize', [_this]);
        }
        else {
            _this.routeEventToHandlerAndEmitWithoutBubbling(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:did-initialize', [_this]);
        }
        // #FIXME: some handlers may still reference `_bytecode` directly.
        _this._bytecode = _this.bytecode;
        return _this;
    }
    /**
     * @description Track elements that are at the horizon of what we want to render, i.e., a list of
     * virtual elements that we don't want to make any updates lower than in the tree.
     */
    HaikuComponent.prototype.markHorizonElement = function (virtualElement) {
        if (virtualElement && virtualElement.attributes) {
            virtualElement.__horizon = true;
        }
    };
    /**
     * @description Returns true/false whether this element is one that we don't want to make any
     *  updates further down its tree.
     */
    HaikuComponent.prototype.isHorizonElement = function (virtualElement) {
        if (virtualElement && virtualElement.attributes) {
            return virtualElement.__horizon;
        }
        return false;
    };
    HaikuComponent.prototype.isLiveMode = function () {
        return interactionModes_1.isLiveMode(this.config.interactionMode);
    };
    HaikuComponent.prototype.isEditMode = function () {
        return !this.isLiveMode();
    };
    HaikuComponent.prototype.registerGuest = function (subcomponent) {
        this.guests[subcomponent.getId()] = subcomponent;
    };
    HaikuComponent.prototype.visitGuestHierarchy = function (visitor) {
        visitor(this, this.$id, this.host);
        for (var $id in this.guests) {
            this.guests[$id].visitGuestHierarchy(visitor);
        }
    };
    HaikuComponent.prototype.visitGuests = function (visitor) {
        for (var $id in this.guests) {
            visitor(this.guests[$id], $id);
        }
    };
    // If the component needs to remount itself for some reason, make sure we fire the right events
    HaikuComponent.prototype.callRemount = function (incomingConfig, skipMarkForFullFlush) {
        var _this = this;
        if (skipMarkForFullFlush === void 0) { skipMarkForFullFlush = false; }
        this.visitGuestHierarchy(function (guest) {
            if (guest === _this) {
                guest.routeEventToHandlerAndEmit(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:will-mount', [guest]);
            }
            else {
                guest.routeEventToHandlerAndEmitWithoutBubbling(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:will-mount', [guest]);
            }
        });
        // Note!: Only update config if we actually got incoming options!
        if (incomingConfig) {
            this.assignConfig(incomingConfig);
        }
        if (!skipMarkForFullFlush) {
            this.markForFullFlush();
            this.clearCaches(null);
        }
        // If autoplay is not wanted, stop the all timelines immediately after we've mounted
        // (We have to mount first so that the component displays, but then pause it at that state.)
        // If you don't want the component to show up at all, use options.automount=false.
        var timelineInstances = this.getTimelines();
        for (var timelineName in timelineInstances) {
            var timelineInstance = timelineInstances[timelineName];
            if (this.config.autoplay) {
                if (timelineName === DEFAULT_TIMELINE_NAME) {
                    // Assume we want to start the timeline from the beginning upon remount.
                    // NOTE:
                    // timeline.play() will normally trigger markForFullFlush because it assumes we need to render
                    // from the get-go. However, in case of a callRemount, we might not want to do that since it can be kind of
                    // like running the first frame twice. So we pass the option into play so it can conditionally skip the
                    // markForFullFlush step.
                    if (!timelineInstance.isPaused()) {
                        timelineInstance.play({ skipMarkForFullFlush: skipMarkForFullFlush });
                    }
                }
            }
            else {
                timelineInstance.pause();
            }
        }
        this.context.contextMount();
        this.visitGuestHierarchy(function (guest) {
            if (guest === _this) {
                guest.routeEventToHandlerAndEmit(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:did-mount', [guest]);
            }
            else {
                guest.routeEventToHandlerAndEmitWithoutBubbling(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:did-mount', [guest]);
            }
        });
    };
    HaikuComponent.prototype.destroy = function () {
        var _this = this;
        _super.prototype.destroy.call(this);
        // Destroy all timelines we host.
        var timelineInstances = this.getTimelines();
        for (var timelineName in timelineInstances) {
            var timelineInstance = timelineInstances[timelineName];
            timelineInstance.destroy();
        }
        this.visitGuestHierarchy(function (component) {
            // Clean up HaikuComponent dependents.
            // TODO: is this step necessary?
            if (component !== _this) {
                component.destroy();
            }
        });
        this.visitDescendants(function (child) {
            // Clean up HaikuElement dependents.
            child.destroy();
        });
    };
    HaikuComponent.prototype.callUnmount = function () {
        var _this = this;
        // Since we're unmounting, pause all animations to avoid unnecessary calc while detached
        var timelineInstances = this.getTimelines();
        for (var timelineName in timelineInstances) {
            var timelineInstance = timelineInstances[timelineName];
            timelineInstance.pause();
        }
        this.context.contextUnmount();
        this.visitGuestHierarchy(function (guest) {
            if (guest === _this) {
                guest.routeEventToHandlerAndEmit(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:will-unmount', [guest]);
            }
            else {
                guest.routeEventToHandlerAndEmitWithoutBubbling(HaikuBase_1.GLOBAL_LISTENER_KEY, 'component:will-unmount', [guest]);
            }
        });
    };
    HaikuComponent.prototype.assignConfig = function (incomingConfig) {
        this.config = Config_1.default.build(this.config || {}, incomingConfig || {});
        // Don't assign the context config if we're a guest component;
        // assume only the top-level component should have this power
        if (this.host) {
            // Don't forget to update the configuration values shared by the context,
            // but skip component assignment so we don't end up in an infinite loop
            this.context.assignConfig(this.config, { skipComponentAssign: true });
        }
        var timelines = this.getTimelines();
        for (var name_1 in timelines) {
            var timeline = timelines[name_1];
            timeline.assignOptions(this.config);
        }
        this.bindStates();
        assign_1.default(this.hooks, this.config.hooks);
        assign_1.default(this.helpers, this.config.helpers);
        assign_1.default(this.bytecode.timelines, this.config.timelines);
        return this;
    };
    HaikuComponent.prototype.set = function (key, value) {
        this.callHook('state:change', { state: key, from: this.state[key], to: value });
        this.state[key] = value;
        return this;
    };
    HaikuComponent.prototype.get = function (key) {
        return this.state[key];
    };
    HaikuComponent.prototype.setState = function (states, transitionParameter) {
        // Do not set any state if invalid
        if (!states || typeof states !== 'object') {
            return this;
        }
        // Set states is delegated to stateTransitionManager
        this.stateTransitionManager.setState(states, transitionParameter);
        return this;
    };
    HaikuComponent.prototype.getStates = function () {
        return this.state;
    };
    HaikuComponent.prototype.clearCaches = function (options) {
        if (options === void 0) { options = {}; }
        // HaikuBase implements a general-purpose caching mechanism which we also call here
        this.cacheClear();
        this.needsExpand = true;
        // Don't forget to repopulate the states with originals when we clear cache
        if (options.clearStates) {
            this.clearStates();
        }
        this.hydrateMutableTimelines();
        this.parsedValueClusters = {};
        // Our managed timeline instances may have their own privately cached properties
        var timelines = this.fetchTimelines();
        for (var timelineName in timelines) {
            timelines[timelineName].cacheClear();
        }
    };
    HaikuComponent.prototype.cacheNodeWithSelectorKey = function (node) {
        if (!node || typeof node !== 'object') {
            return;
        }
        if (node.attributes && node.attributes[HAIKU_ID_ATTRIBUTE]) {
            var selector = "haiku:" + node.attributes[HAIKU_ID_ATTRIBUTE];
            var key = this.nodesCacheKey(selector);
            var collection = this.cacheGet(key) || [];
            if (collection.indexOf(node) === -1) {
                collection.push(node);
            }
            this.cacheSet(key, collection);
        }
    };
    HaikuComponent.prototype.clearStates = function () {
        this._states = {};
        this.bindStates();
    };
    HaikuComponent.prototype.getClock = function () {
        return this.context.clock;
    };
    HaikuComponent.prototype.getTemplate = function () {
        return this.bytecode.template;
    };
    HaikuComponent.prototype.getHelpers = function () {
        return this.bytecode.helpers;
    };
    HaikuComponent.prototype.getTimelines = function () {
        var _this = this;
        return this.cacheFetch('getTimelines', function () {
            return _this.fetchTimelines();
        });
    };
    HaikuComponent.prototype.fetchTimelines = function () {
        var names = Object.keys(this.bytecode.timelines);
        for (var i = 0; i < names.length; i++) {
            var name_2 = names[i];
            if (!name_2) {
                continue;
            }
            var existing = HaikuTimeline_1.default.where({
                name: name_2,
                component: this,
            })[0];
            if (!existing) {
                HaikuTimeline_1.default.create(this, name_2, this.config);
            }
        }
        var out = {};
        var timelines = HaikuTimeline_1.default.where({ component: this });
        for (var j = 0; j < timelines.length; j++) {
            var timeline = timelines[j];
            out[timeline.getName()] = timeline;
        }
        return out;
    };
    HaikuComponent.prototype.getTimeline = function (name) {
        return this.getTimelines()[name];
    };
    HaikuComponent.prototype.fetchTimeline = function (name, descriptor) {
        var found = this.getTimeline(name);
        if (found) {
            return found;
        }
        return HaikuTimeline_1.default.create(this, name, this.config);
    };
    HaikuComponent.prototype.getDefaultTimeline = function () {
        var timelines = this.getTimelines();
        return timelines[DEFAULT_TIMELINE_NAME];
    };
    HaikuComponent.prototype.stopAllTimelines = function () {
        var timelines = this.getTimelines();
        for (var name_3 in timelines) {
            this.stopTimeline(name_3);
        }
    };
    HaikuComponent.prototype.startAllTimelines = function () {
        var timelines = this.getTimelines();
        for (var name_4 in timelines) {
            this.startTimeline(name_4);
        }
    };
    HaikuComponent.prototype.startTimeline = function (timelineName) {
        var descriptor = this.getTimelineDescriptor(timelineName);
        var existing = this.fetchTimeline(timelineName, descriptor);
        if (existing) {
            existing.start();
        }
    };
    HaikuComponent.prototype.stopTimeline = function (timelineName) {
        var descriptor = this.getTimelineDescriptor(timelineName);
        var existing = this.fetchTimeline(timelineName, descriptor);
        if (existing) {
            existing.stop();
        }
    };
    /**
     * @description Convenience alias for HaikuTimeline#gotoAndPlay
     */
    HaikuComponent.prototype.gotoAndPlay = function (amount, unit) {
        if (unit === void 0) { unit = "fr" /* Frame */; }
        this.getDefaultTimeline().gotoAndPlay(amount, unit);
    };
    /**
     * @description Convenience alias for HaikuTimeline#gotoAndStop
     */
    HaikuComponent.prototype.gotoAndStop = function (amount, unit) {
        if (unit === void 0) { unit = "fr" /* Frame */; }
        this.getDefaultTimeline().gotoAndStop(amount, unit);
    };
    /**
     * @description Convenience alias for HaikuTimeline#pause
     */
    HaikuComponent.prototype.pause = function () {
        this.getDefaultTimeline().pause();
    };
    /**
     * @description Convenience alias for HaikuTimeline#stop
     */
    HaikuComponent.prototype.stop = function () {
        this.getDefaultTimeline().stop();
    };
    /**
     * @description Convenience alias for HaikuTimeline#seek
     */
    HaikuComponent.prototype.seek = function (amount, unit) {
        if (unit === void 0) { unit = "fr" /* Frame */; }
        this.getDefaultTimeline().seek(amount, unit);
    };
    /**
     * @description Convenience alias for HaikuTimeline#start
     */
    HaikuComponent.prototype.start = function () {
        this.getDefaultTimeline().start();
    };
    /**
     * @description Convenience alias for HaikuTimeline#play
     */
    HaikuComponent.prototype.play = function (options) {
        if (options === void 0) { options = {}; }
        this.getDefaultTimeline().play();
    };
    HaikuComponent.prototype.getTimelineDescriptor = function (timelineName) {
        return this.bytecode.timelines[timelineName];
    };
    HaikuComponent.prototype.getInjectables = function () {
        var injectables = {};
        assign_1.default(injectables, this.getSummonablesSchema());
        // Local states get precedence over global summonables, so assign them last
        for (var key in this._states) {
            var type = this._states[key] && this._states[key].type;
            if (!type) {
                type = typeof this._states[key];
            }
            injectables[key] = type;
        }
        return injectables;
    };
    /**
     * @method _deactivate
     * @description When hot-reloading a component during editing, this can be used to
     * ensure that this component doesn't keep updating after its replacement is loaded.
     */
    HaikuComponent.prototype.deactivate = function () {
        this.isDeactivated = true;
    };
    HaikuComponent.prototype.activate = function () {
        this.isDeactivated = false;
    };
    HaikuComponent.prototype.sleepOn = function () {
        this.isSleeping = true;
    };
    HaikuComponent.prototype.sleepOff = function () {
        this.isSleeping = false;
    };
    /**
     * @method dump
     * @description Dump serializable info about this object
     */
    HaikuComponent.prototype.dump = function () {
        var metadata = this.getBytecodeMetadata();
        return metadata.relpath + ":" + this.getComponentId();
    };
    HaikuComponent.prototype.getBytecodeMetadata = function () {
        return this.bytecode.metadata;
    };
    HaikuComponent.prototype.getBytecodeRelpath = function () {
        var metadata = this.getBytecodeMetadata();
        return metadata && metadata.relpath;
    };
    HaikuComponent.prototype.getBytecodeProject = function () {
        var metadata = this.getBytecodeMetadata();
        return metadata && metadata.project;
    };
    HaikuComponent.prototype.getBytecodeOrganization = function () {
        var metadata = this.getBytecodeMetadata();
        return metadata && metadata.organization;
    };
    HaikuComponent.prototype.getAddressableProperties = function (out) {
        var _this = this;
        if (out === void 0) { out = {}; }
        if (!this.bytecode.states) {
            return out;
        }
        var _loop_2 = function (name_5) {
            var state = this_1.bytecode.states[name_5];
            out[name_5] = {
                name: name_5,
                type: 'state',
                prefix: name_5,
                suffix: undefined,
                fallback: state.value,
                typedef: state.type,
                mock: state.mock,
                target: this_1,
                value: function () {
                    return _this.state[name_5]; // The current live value of this state as seen by the app
                },
            };
        };
        var this_1 = this;
        for (var name_5 in this.bytecode.states) {
            _loop_2(name_5);
        }
        return out;
    };
    HaikuComponent.prototype.bindStates = function () {
        var allStates = assign_1.default({}, this.bytecode.states, this.config.states);
        for (var stateSpecName in allStates) {
            var stateSpec = allStates[stateSpecName];
            // 'null' is the signal for an empty prop, not undefined.
            if (!stateSpec || stateSpec.value === undefined) {
                console.error('Property `' +
                    stateSpecName +
                    '` cannot be undefined; use null for empty states');
                continue;
            }
            if (!this._states.hasOwnProperty(stateSpecName) || this.config.states.hasOwnProperty(stateSpecName)) {
                this._states[stateSpecName] = stateSpec.value;
                this.defineSettableState(stateSpec, stateSpecName);
            }
        }
    };
    HaikuComponent.prototype.defineSettableState = function (stateSpec, stateSpecName) {
        var _this = this;
        // Note: We define the getter/setter on the object itself, but the storage occurs on the pass-in statesTargetObject
        Object.defineProperty(this.state, stateSpecName, {
            configurable: true,
            enumerable: true,
            get: function () {
                return _this._states[stateSpecName];
            },
            set: function (inputValue) {
                if (stateSpec.setter) {
                    // Important: We call the setter with a binding of the component, so it can access methods on `this`
                    _this._states[stateSpecName] = stateSpec.setter.call(_this, inputValue);
                }
                else {
                    _this._states[stateSpecName] = inputValue;
                }
                if (!_this.isDeactivated) {
                    _this.emit('state:set', stateSpecName, _this._states[stateSpecName]);
                }
                return _this._states[stateSpecName];
            },
        });
    };
    HaikuComponent.prototype.allEventHandlers = function () {
        return assign_1.default({}, this.bytecode.eventHandlers, this.config.eventHandlers);
    };
    HaikuComponent.prototype.eachEventHandler = function (iteratee) {
        var eventHandlers = this.allEventHandlers();
        for (var eventSelector in eventHandlers) {
            for (var eventName in eventHandlers[eventSelector]) {
                var descriptor = eventHandlers[eventSelector][eventName];
                if (!descriptor || !descriptor.handler) {
                    continue;
                }
                iteratee(eventSelector, eventName, descriptor);
            }
        }
    };
    HaikuComponent.prototype.routeEventToHandler = function (eventSelectorGiven, eventNameGiven, eventArgs) {
        var _this = this;
        if (this.isDeactivated) {
            return;
        }
        this.eachEventHandler(function (eventSelector, eventName, _a) {
            var handler = _a.handler;
            if (eventNameGiven === eventName) {
                if (eventSelectorGiven === eventSelector ||
                    eventSelectorGiven === HaikuBase_1.GLOBAL_LISTENER_KEY) {
                    _this.callEventHandler(eventSelector, eventName, handler, eventArgs);
                    return;
                }
            }
        });
    };
    HaikuComponent.prototype.setHook = function (hookName, hookFn) {
        this.hooks[hookName] = hookFn;
    };
    HaikuComponent.prototype.callHook = function (hookName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        if (typeof this.hooks[hookName] === 'function') {
            (_a = this.hooks)[hookName].apply(_a, args);
        }
    };
    HaikuComponent.prototype.callEventHandler = function (eventsSelector, eventName, handler, eventArgs) {
        // Only fire the event listeners if the component is in 'live' interaction mode,
        // i.e., not currently being edited inside the Haiku authoring environment
        // However, some components rely on specific event hooks firing in Edit mode, too — they can
        // whitelist their "edit mode" event names through `options`
        if (!this.isLiveMode() &&
            !(this.bytecode.options &&
                this.bytecode.options.editModeEvents &&
                this.bytecode.options.editModeEvents[eventName])) {
            return;
        }
        this.callHook('action:before', this, eventName, eventsSelector, eventArgs);
        try {
            handler.apply(this, [this].concat(eventArgs));
        }
        catch (exception) {
            consoleErrorOnce_1.default(exception);
        }
        this.callHook('action:after', this, eventName, eventsSelector, eventArgs);
    };
    HaikuComponent.prototype.routeEventToHandlerAndEmit = function (eventSelectorGiven, eventNameGiven, eventArgs) {
        if (this.isDeactivated) {
            return;
        }
        this.routeEventToHandler(eventSelectorGiven, eventNameGiven, eventArgs);
        this.emit.apply(this, [eventNameGiven].concat(eventArgs));
    };
    HaikuComponent.prototype.routeEventToHandlerAndEmitWithoutBubbling = function (eventSelectorGiven, eventNameGiven, eventArgs) {
        if (this.isDeactivated) {
            return;
        }
        this.routeEventToHandler(eventSelectorGiven, eventNameGiven, eventArgs);
        this.emitWithoutBubbling.apply(this, [eventNameGiven].concat(eventArgs));
    };
    HaikuComponent.prototype.routeEventToHandlerAndEmitWithoutBubblingAndWithoutGlobalHandlers = function (eventSelectorGiven, eventNameGiven, eventArgs) {
        if (this.isDeactivated) {
            return;
        }
        this.routeEventToHandler(eventSelectorGiven, eventNameGiven, eventArgs);
        this.emitToListeners(eventNameGiven, eventArgs);
        this.emitToGenericListeners(eventNameGiven, eventArgs);
    };
    /**
     * @description A more expressive form of `emit` that allows the user to route
     * events to specific collections of elements/components in the tree using labels,
     * selectors, etc. This method is provided in lieu of providing an individual method
     * for every possible topology.
     */
    HaikuComponent.prototype.send = function (route, name) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        // Send to parent
        if (route === 'emit' ||
            route === 'up' ||
            route === 'parent' ||
            route === '<' // Cute: '>' is the opposite of CSS children selector '<'
        ) {
            this.emit.apply(this, [name].concat(args));
            return;
        }
        // Send to children
        if (route === 'down' ||
            route === 'children' ||
            route === '>' // CSS children selector
        ) {
            this.visitGuests(function (guest) {
                guest.emitWithoutBubbling.apply(guest, [name].concat(args));
            });
            return;
        }
        // Send to siblings
        if (route === 'sideways' ||
            route === 'siblings' ||
            route === '~' // CSS sibling selector
        ) {
            if (this.host) {
                this.host.visitGuests(function (guest) {
                    if (guest !== _this) {
                        guest.emitWithoutBubbling.apply(guest, [name].concat(args));
                    }
                });
            }
            return;
        }
        // Send to everyone
        if (route === '*') {
            this.top.visitGuestHierarchy(function (guest) {
                if (guest !== _this) {
                    guest.emitWithoutBubbling.apply(guest, [name].concat(args));
                }
            });
        }
    };
    HaikuComponent.prototype.emitToAncestors = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.host) {
            // 1. Emit to listeners on the "wrapper" div
            this.host.routeEventToHandler("haiku:" + exports.getNodeCompositeId(this.parentNode), name, [this].concat(args));
            // 2. For convenience, emit to listeners on the root component of the hosts
            this.host.routeEventToHandler("haiku:" + exports.getNodeCompositeId(this.host), name, [this].concat(args));
        }
    };
    HaikuComponent.prototype.emitWithoutBubbling = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.routeEventToHandler(HaikuBase_1.GLOBAL_LISTENER_KEY, key, args);
        this.emitToListeners(key, args);
        this.emitToGenericListeners(key, args);
    };
    HaikuComponent.prototype.markForFullFlush = function () {
        this.doesNeedFullFlush = true;
    };
    HaikuComponent.prototype.unmarkForFullFlush = function () {
        this.doesNeedFullFlush = false;
    };
    HaikuComponent.prototype.shouldPerformFullFlush = function () {
        return this.doesNeedFullFlush || this.doAlwaysFlush;
    };
    HaikuComponent.prototype.expandIfNeeded = function () {
        if (this.needsExpand) {
            expandNode(this.bytecode.template, this.container);
            this.needsExpand = false;
        }
    };
    HaikuComponent.prototype.performFullFlushRenderWithRenderer = function (renderer, options) {
        if (options === void 0) { options = {}; }
        this.context.getContainer(true); // Force recalc of container
        // Since we will produce a full tree, we don't need a further full flush.
        this.unmarkForFullFlush();
        this.needsExpand = true;
        this.render(options);
        // Untyped code paths downstream depend on the output of this method
        return renderer.render(this.container, this.bytecode.template, this);
    };
    HaikuComponent.prototype.performPatchRenderWithRenderer = function (renderer, options, skipCache) {
        if (options === void 0) { options = {}; }
        if (renderer.shouldCreateContainer) {
            this.context.getContainer(true); // Force recalc of container
        }
        var patches = this.patch(options, skipCache);
        renderer.patch(this, patches);
        for (var $id in this.guests) {
            var guest = this.guests[$id];
            if (guest.shouldPerformFullFlush() && guest.target) {
                guest.performFullFlushRenderWithRenderer(renderer, options);
            }
            else {
                guest.performPatchRenderWithRenderer(renderer, options, skipCache);
            }
        }
    };
    HaikuComponent.prototype.render = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // We register ourselves with our host here because render is guaranteed to be called
        // both in our constructor and in the case that we were deactivated/reactivated.
        // This must run before the isDeactivated check since we may use the registry to activate later.
        if (this.host) {
            this.host.registerGuest(this);
        }
        if (this.isDeactivated) {
            // If deactivated, pretend like there is nothing to render
            return;
        }
        this.clearCaches();
        HaikuElement_1.default.findOrCreateByNode(this.container);
        if (!this.container.__memory.subcomponent) {
            // A semantically different thing than .subcomponent/.instance
            this.container.__memory.containee = this;
        }
        hydrateNode(this.bytecode.template, // node
        this.container, // parent
        this, // instance (component)
        this.context, this.host, 'div', // scope (the default is a div)
        options, true);
        this.applyLocalBehaviors(false, // isPatchOperation
        false);
        if (this.context.renderer.mount) {
            this.eachEventHandler(function (eventSelector, eventName) {
                var registrationKey = eventSelector + ":" + eventName;
                if (_this.registeredEventHandlers[registrationKey]) {
                    return;
                }
                _this.registeredEventHandlers[registrationKey] = true;
                _this.context.renderer.mountEventListener(_this, eventSelector, eventName, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.routeEventToHandlerAndEmit(eventSelector, eventName, args);
                });
            });
        }
        this.applyGlobalBehaviors(options);
        // But also note we need to call subcomponent renders *after* our own behaviors,
        // because we need the parent-to-child states to be set prior to this render call,
        // otherwise the changes they produce won't be available for this render frame.
        for (var $id in this.guests) {
            this.guests[$id].render(__assign({}, this.guests[$id].config, Config_1.default.buildChildSafeConfig(options)));
        }
        this.expandIfNeeded();
        return this.bytecode.template;
    };
    HaikuComponent.prototype.patch = function (options, skipCache) {
        if (options === void 0) { options = {}; }
        if (skipCache === void 0) { skipCache = false; }
        if (this.isDeactivated) {
            // If deactivated, pretend like there is nothing to render
            return {};
        }
        this.applyLocalBehaviors(true, // isPatchOperation
        skipCache);
        this.applyGlobalBehaviors(options);
        var patches = {};
        this.expandIfNeeded();
        for (var i = 0; i < this.patches.length; i++) {
            var node = this.patches[i];
            computeAndApplyLayout(node, node.__memory.parent);
            patches[exports.getNodeCompositeId(node)] = node;
        }
        this.patches = [];
        return patches;
    };
    HaikuComponent.prototype.applyGlobalBehaviors = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.host && options.sizing) {
            var didSizingChange = computeAndApplyPresetSizing(this.bytecode.template, this.container, options.sizing);
            if (didSizingChange) {
                this.patches.push(this.bytecode.template);
            }
        }
    };
    HaikuComponent.prototype.applyLocalBehaviors = function (isPatchOperation, skipCache) {
        if (skipCache === void 0) { skipCache = false; }
        var globalClockTime = this.context.clock.getExplicitTime();
        var manaTree = this.manaTreeCached();
        for (var timelineName in this.bytecode.timelines) {
            var timelineInstance = this.getTimeline(timelineName);
            timelineInstance.executePreUpdateHooks(globalClockTime);
            var timelineTime = timelineInstance.getTime(); // Bounded time
            var timelineDescriptor = this.bytecode.timelines[timelineName];
            var mutableTimelineDescriptor = isPatchOperation
                ? this.mutableTimelines[timelineName]
                : timelineDescriptor;
            if (!mutableTimelineDescriptor) {
                mutableTimelineDescriptor = {};
            }
            for (var behaviorSelector in mutableTimelineDescriptor) {
                var matchingElementsForBehavior = this.findMatchingNodesByCSSSelector(manaTree, behaviorSelector);
                if (!matchingElementsForBehavior || matchingElementsForBehavior.length < 1) {
                    continue;
                }
                var propertiesGroup = mutableTimelineDescriptor[behaviorSelector];
                if (!propertiesGroup) {
                    continue;
                }
                // This is our opportunity to group property operations that need to be in order
                var propertyOperations = collatePropertyGroup(propertiesGroup);
                for (var i = 0; i < matchingElementsForBehavior.length; i++) {
                    var matchingElement = matchingElementsForBehavior[i];
                    var compositeId = exports.getNodeCompositeId(matchingElement);
                    for (var j = 0; j < propertyOperations.length; j++) {
                        var propertyGroup = propertyOperations[j];
                        for (var propertyName in propertyGroup) {
                            var keyframeCluster = propertyGroup[propertyName];
                            var grabbedValue = this.grabValue(timelineName, compositeId, matchingElement, propertyName, keyframeCluster, timelineTime, isPatchOperation, skipCache);
                            var computedValue = grabbedValue.computedValue, didValueChangeSinceLastRequest = grabbedValue.didValueChangeSinceLastRequest, didValueOriginateFromExplicitKeyframeDefinition = grabbedValue.didValueOriginateFromExplicitKeyframeDefinition;
                            if (computedValue === undefined) {
                                continue;
                            }
                            // We always apply the property if...
                            if (
                            // - This is a full render
                            !isPatchOperation ||
                                // - The value in question has changed
                                didValueChangeSinceLastRequest ||
                                // - The value is in the whitelist of always-updated properties
                                ALWAYS_UPDATED_PROPERTIES[propertyName] ||
                                (
                                // - The value was explicitly defined as a keyframe and...
                                didValueOriginateFromExplicitKeyframeDefinition && (
                                // - We haven't yet reached the end
                                (timelineTime < timelineInstance.getMaxTime()) ||
                                    // - The timeline is looping (we won't be hanging on the final keyframe)
                                    timelineInstance.isLooping() ||
                                    // - We just reached the final keyframe (but haven't already visited it)
                                    timelineInstance.getLastFrame() !== timelineInstance.getBoundedFrame()))) {
                                this.applyPropertyToNode(matchingElement, propertyName, computedValue, timelineInstance);
                                if (isPatchOperation) {
                                    this.patches.push(matchingElement);
                                }
                            }
                        }
                    }
                }
            }
            timelineInstance.executePostUpdateHooks(globalClockTime);
        }
    };
    HaikuComponent.prototype.getProjectRootPathWithTerminatingSlash = function () {
        var metadata = this.getBytecodeMetadata();
        // If root is set and is not precisely this known magic string,
        // assume the root actually defines a root path somewhere on the web we can resolve to.
        if (metadata && metadata.root && metadata.root !== CDN_ROOT_STR) {
            return metadata.root;
        }
        // Try to use a locally defined folder (i.e. during editing in Haiku),
        // or fallback to a local path and hope we resolve to something meaningful.
        return this.config.folder || (metadata && metadata.folder) || './';
    };
    HaikuComponent.prototype.applyPropertyToNode = function (node, name, value, timeline) {
        var sender = (node.__memory.instance) ? node.__memory.instance : this; // Who sent the command
        var receiver = node.__memory.subcomponent;
        var type = (receiver && receiver.tagName) || node.elementName;
        var addressables = receiver && receiver.getAddressableProperties();
        var addressee = addressables && addressables[name] !== undefined && receiver;
        if (addressee) {
            // Note: Even though we apply the value to addressables of the subcomponent,
            // we still proceed with application of properties directly to the wrapper.
            // This is as a convenience, so that if a subcomponent wants to handle any property
            // applied to its wrapper than it can do so, e.g. sizeAbsolute.x/sizeAbsolute.y.
            addressee.set(name, value);
        }
        var vanity = exports.getVanity(type, name);
        if (vanity) {
            return vanity(name, node, value, this.context, timeline, receiver, sender);
        }
        var parts = name.split('.');
        if (parts[0] === 'style' && parts[1]) {
            return setStyle(parts[1], node, value);
        }
        return setAttribute(name, node, value);
    };
    HaikuComponent.prototype.findElementsByHaikuId = function (componentId) {
        return this.findMatchingNodesByCSSSelector(this.manaTreeCached(), "haiku:" + componentId);
    };
    HaikuComponent.prototype.nodesCacheKey = function (selector) {
        return 'nodes:' + selector;
    };
    HaikuComponent.prototype.manaTreeCached = function () {
        var _this = this;
        return this.cacheFetch('flatManaTree', function () { return HaikuNode_1.manaFlattenTree(_this.bytecode.template, CSS_QUERY_MAPPING); });
    };
    HaikuComponent.prototype.findMatchingNodesByCSSSelector = function (manaTree, selector) {
        var nodes = this.cacheFetch(this.nodesCacheKey(selector), function () { return HaikuNode_1.cssQueryList(manaTree, selector, CSS_QUERY_MAPPING); });
        var out = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var repeatees = findRespectiveRepeatees(node);
            // If the node in question is the descendant of a repeater, we need to find all repeated
            // copies of it inside the host repeater. If any repeatees are returned that means the
            // element is in fact a repeater, otherwise it is not a repeater, so just use the node.
            if (repeatees.length > 0) {
                out.push.apply(out, repeatees);
            }
            else {
                out.push(node);
            }
        }
        return out;
    };
    HaikuComponent.prototype.hydrateMutableTimelines = function () {
        this.mutableTimelines = {};
        if (this.bytecode.timelines) {
            for (var timelineName in this.bytecode.timelines) {
                for (var selector in this.bytecode.timelines[timelineName]) {
                    for (var propertyName in this.bytecode.timelines[timelineName][selector]) {
                        if (isMutableProperty_1.default(this.bytecode.timelines[timelineName][selector][propertyName], propertyName)) {
                            if (!this.mutableTimelines[timelineName]) {
                                this.mutableTimelines[timelineName] = {};
                            }
                            if (!this.mutableTimelines[timelineName][selector]) {
                                this.mutableTimelines[timelineName][selector] = {};
                            }
                            this.mutableTimelines[timelineName][selector][propertyName] =
                                this.bytecode.timelines[timelineName][selector][propertyName];
                        }
                    }
                }
            }
        }
    };
    HaikuComponent.prototype.addHotComponent = function (hotComponent) {
        if (!this.bytecode.timelines ||
            !this.bytecode.timelines[hotComponent.timelineName] ||
            !this.bytecode.timelines[hotComponent.timelineName][hotComponent.selector]) {
            return;
        }
        var propertyGroup = this.bytecode.timelines[hotComponent.timelineName][hotComponent.selector];
        if (!this.mutableTimelines[hotComponent.timelineName]) {
            this.mutableTimelines[hotComponent.timelineName] = {};
        }
        if (!this.mutableTimelines[hotComponent.timelineName][hotComponent.selector]) {
            this.mutableTimelines[hotComponent.timelineName][hotComponent.selector] = {};
        }
        Object.assign(this.mutableTimelines[hotComponent.timelineName][hotComponent.selector], hotComponent.propertyNames.reduce(function (hotProperties, propertyName) { return (hotProperties[propertyName] = propertyGroup[propertyName], hotProperties); }, {}));
    };
    HaikuComponent.prototype.controlTime = function (timelineName, timelineTime) {
        var explicitTime = this.context.clock.getExplicitTime();
        var timelineInstances = this.getTimelines();
        for (var localTimelineName in timelineInstances) {
            if (localTimelineName === timelineName) {
                var timelineInstance = timelineInstances[timelineName];
                timelineInstance.controlTime(timelineTime, explicitTime);
            }
        }
        for (var $id in this.guests) {
            this.guests[$id].controlTime(timelineName, 0);
        }
    };
    HaikuComponent.prototype.getPropertiesGroup = function (timelineName, flexId) {
        return (this.bytecode &&
            this.bytecode.timelines &&
            this.bytecode.timelines[timelineName] &&
            this.bytecode.timelines[timelineName]["haiku:" + flexId]);
    };
    /**
     * Execute state transitions.
     */
    HaikuComponent.prototype.tickStateTransitions = function () {
        this.stateTransitionManager.tickStateTransitions();
    };
    /**
     * Reset states to initial values by using State Transitions. Default to linear
     */
    HaikuComponent.prototype.resetStatesToInitialValuesWithTransition = function (duration, curve) {
        if (curve === void 0) { curve = api_1.Curve.Linear; }
        // Build initial states
        var initialStates = assign_1.default({}, this.bytecode.states, this.config.states);
        for (var key in initialStates) {
            initialStates[key] = initialStates[key].value;
        }
        // Create state transition to initial state values
        this.stateTransitionManager.setState(initialStates, { curve: curve, duration: duration });
    };
    Object.defineProperty(HaikuComponent.prototype, "top", {
        /**
         * @description Get the topmost component in the hierarchy.
         */
        get: function () {
            if (this.host) {
                return this.host.top;
            }
            return this;
        },
        enumerable: true,
        configurable: true
    });
    HaikuComponent.prototype.getRootComponent = function () {
        if (this.host) {
            return this.host.getRootComponent();
        }
        return this;
    };
    HaikuComponent.prototype.emitFromRootComponent = function (eventName, attachedObject) {
        this.getRootComponent().emit(eventName, __assign({}, attachedObject, { componentTitle: this.title }));
    };
    HaikuComponent.prototype.evaluate = function (expr) {
        // Make all injectables available within the scope of the function we'll create below,
        // so users can freely evaluate an expression like this.evaluate('$user.mouse.x');
        try {
            // tslint:disable-next-line:no-function-constructor-with-string-args
            var fn = new Function('$children', '$clock', '$component', '$container', '$context', '$core', '$element', '$host', '$if', '$index', '$mount', '$parent', '$payload', '$placeholder', '$repeat', '$state', '$timeline', '$top', '$tree', '$user', '$window', "return " + expr + ";\n");
            return fn(this.summon('$children'), this.summon('$clock'), this.summon('$component'), this.summon('$container'), this.summon('$context'), this.summon('$core'), this.summon('$element'), this.summon('$host'), this.summon('$if'), this.summon('$index'), this.summon('$mount'), this.summon('$parent'), this.summon('$payload'), this.summon('$placeholder'), this.summon('$repeat'), this.summon('$state'), this.summon('$timeline'), this.summon('$top'), this.summon('$tree'), this.summon('$user'), this.summon('$window'));
        }
        catch (exception) {
            console.warn("[haiku core] could not evaluate " + expr, exception);
        }
    };
    HaikuComponent.prototype.summon = function (injectable) {
        if (INJECTABLES[injectable] && INJECTABLES[injectable].summon) {
            var out = {};
            INJECTABLES[injectable].summon(out, // injectees
            this, // component
            this.bytecode.template, // node
            DEFAULT_TIMELINE_NAME);
            return out[injectable];
        }
    };
    HaikuComponent.prototype.evaluateExpression = function (fn, timelineName, flexId, matchingElement, propertyName, keyframeMs, keyframeCluster) {
        enhance_1.default(fn, null);
        // We'll store the result of this evaluation in this variable
        // (so we can cache it in case unexpected subsequent calls)
        var evaluation;
        if (fn.specification === true) {
            // This function is of an unknown kind, so just evaluate it normally without magic dependency injection
            evaluation = safeCall(fn, this, this._states);
        }
        else if (!Array.isArray(fn.specification.params)) {
            // If for some reason we got a non-array params, just evaluate
            evaluation = safeCall(fn, this, this._states);
        }
        else if (fn.specification.params.length < 1) {
            // If for some reason we got 0 params, just evaluate it
            evaluation = safeCall(fn, this, this._states);
        }
        else {
            if (fn.specification.params.length < 1) {
                // If the summon isn't in the destructured object format, just evaluate it
                evaluation = safeCall(fn, this, this._states);
            }
            else {
                var summoneesArray = this.summonSummonables(fn.specification.params, timelineName, flexId, matchingElement, propertyName, keyframeMs, keyframeCluster);
                var previousSummoneesArray = this.getPreviousSummonees(timelineName, flexId, propertyName, keyframeMs);
                if (areSummoneesDifferent(previousSummoneesArray, summoneesArray)) {
                    this.cacheSummonees(timelineName, flexId, propertyName, keyframeMs, summoneesArray);
                    evaluation = safeApply(fn, this, summoneesArray);
                }
                else {
                    // Since nothing is different, return the previous evaluation
                    evaluation = this.getPreviousEvaluation(timelineName, flexId, propertyName, keyframeMs);
                }
            }
        }
        // If the output is literally `NaN`, that is almost certainly useless and not what the user
        // intended. This can happen commonly when editing in Haiku.app and creating dynamic behavior
        // based on state payloads whose fields may be missing, especially with controlFlow.repeat.
        if (Number.isNaN(evaluation)) {
            evaluation = 1;
        }
        // Same for Infinity; as it's more likely than not that this is a mistake
        if (typeof evaluation === 'number' && !isFinite(evaluation)) {
            evaluation = 1;
        }
        // Store the result so we can return it on the next run without re-eval
        if (fn.specification && fn.specification !== true) {
            this.cacheEvaluation(timelineName, flexId, propertyName, keyframeMs, evaluation);
        }
        return evaluation;
    };
    HaikuComponent.prototype.summonSummonables = function (paramsArray, timelineName, flexId, matchingElement, propertyName, keyframeMs, keyframeCluster) {
        var summonablesArray = [];
        // Temporary storage, just creating one object here to avoid excessive allocations
        var summonStorage = {};
        for (var i = 0; i < paramsArray.length; i++) {
            var summonsEntry = paramsArray[i];
            // We'll store the output of the summons in this var, whether we're dealing with
            // a complex nested summonable or a flat one
            var summonsOutput = void 0;
            // In case of a string, we will treat it as the key for the object to summon
            if (typeof summonsEntry === 'string') {
                // Treat the entry as the key to a known injectable
                if (INJECTABLES[summonsEntry]) {
                    summonStorage[summonsEntry] = undefined; // Clear out the old value before populating with the new one
                    INJECTABLES[summonsEntry].summon(summonStorage, this, matchingElement, timelineName);
                    summonsOutput = summonStorage[summonsEntry];
                }
                else {
                    summonsOutput = this.state[summonsEntry];
                }
            }
            // Whatever the request format was, populate the result in here
            if (summonsOutput !== undefined) {
                summonablesArray[i] = summonsOutput;
            }
        }
        return summonablesArray;
    };
    HaikuComponent.prototype.fetchParsedValueCluster = function (timelineName, flexId, matchingElement, outputName, cluster, isPatchOperation, skipCache) {
        var parseeWithKeys = this.getParseeWithKeys(timelineName, flexId, outputName, cluster);
        if (!cluster) {
            return parseeWithKeys;
        }
        var skipStableParsees = isPatchOperation && !skipCache;
        if (skipStableParsees && this.clusterParseeIsStable(parseeWithKeys)) {
            return parseeWithKeys;
        }
        for (var i = 0; i < parseeWithKeys.keys.length; i++) {
            var ms = parseeWithKeys.keys[i];
            var descriptor = cluster[ms];
            if ((skipStableParsees && parseeWithKeys.parsee[ms] && !parseeWithKeys.parsee[ms].expression) ||
                descriptor === undefined) {
                continue;
            }
            if (isFunction(descriptor.value)) {
                parseeWithKeys.parsee[ms] = {
                    expression: true,
                    value: this.evaluateExpression(descriptor.value, timelineName, flexId, matchingElement, outputName, ms, cluster),
                };
            }
            else {
                parseeWithKeys.parsee[ms] = {
                    expression: false,
                    value: descriptor.value,
                };
            }
            if (descriptor.curve) {
                parseeWithKeys.parsee[ms].curve = descriptor.curve;
            }
        }
        if (parseeWithKeys.keys.length > 1) {
            var parser = this.getParser(outputName);
            if (!parser &&
                // tslint:disable-next-line:triple-equals
                parseFloat(parseeWithKeys.parsee[parseeWithKeys.keys[0]].value) ==
                    parseeWithKeys.parsee[parseeWithKeys.keys[0]].value) {
                parser = parseFloat;
            }
            if (!parser) {
                return parseeWithKeys;
            }
            for (var j = 0; j < parseeWithKeys.keys.length; j++) {
                var ms2 = parseeWithKeys.keys[j];
                parseeWithKeys.parsee[ms2].value = parser(parseeWithKeys.parsee[ms2].value);
            }
            if (outputName === 'd') {
                PathUtils_1.synchronizePathStructure.apply(void 0, parseeWithKeys.keys.map(function (ms) { return parseeWithKeys.parsee[ms].value; }));
            }
        }
        return parseeWithKeys;
    };
    HaikuComponent.prototype.generateFinalValueFromParsedValue = function (timelineName, flexId, matchingElement, outputName, computedValue) {
        if (computedValue === undefined) {
            return;
        }
        var generator = this.getGenerator(outputName);
        if (generator) {
            return generator(computedValue);
        }
        return computedValue;
    };
    HaikuComponent.prototype.grabValue = function (timelineName, flexId, matchingElement, propertyName, keyframeCluster, timelineTime, isPatchOperation, skipCache) {
        // Used by $helpers to calculate scope-specific values;
        this.helpers.data = {
            lastTimelineName: timelineName,
            lastFlexId: flexId,
            lastPropertyName: propertyName,
            lastTimelineTime: timelineTime,
        };
        var parsedValueCluster = this.fetchParsedValueCluster(timelineName, flexId, matchingElement, propertyName, keyframeCluster, isPatchOperation, skipCache);
        // If there is no property of that name, we would have gotten nothing back, so we can't forward this to Transitions
        // since it expects to receive a populated cluster object
        if (!parsedValueCluster) {
            return {
                computedValue: undefined,
                didValueChangeSinceLastRequest: false,
                didValueOriginateFromExplicitKeyframeDefinition: false,
            };
        }
        var computedValueForTime;
        if (!parsedValueCluster.parsee[KEYFRAME_ZERO]) {
            parsedValueCluster.parsee[KEYFRAME_ZERO] = {
                value: exports.getFallback(matchingElement && matchingElement.elementName, propertyName),
            };
        }
        computedValueForTime = Transitions_1.calculateValue(parsedValueCluster.parsee, timelineTime, parsedValueCluster.keys);
        // When expressions and other dynamic functionality is in play, data may be missing resulting in
        // properties lacking defined values; in this case we try to do the right thing and fallback
        // to a known usable value for the field. Especially needed with controlFlow.repeat.
        if (computedValueForTime === undefined) {
            computedValueForTime = exports.getFallback(matchingElement && matchingElement.elementName, propertyName);
        }
        var computedValue = this.generateFinalValueFromParsedValue(timelineName, flexId, matchingElement, propertyName, computedValueForTime);
        var previousValue = this.cacheGet("values:" + timelineName + "|" + flexId + "|" + propertyName);
        this.cacheSet("values:" + timelineName + "|" + flexId + "|" + propertyName, computedValue);
        var didValueChangeSinceLastRequest = computedValue !== previousValue;
        return {
            computedValue: computedValue,
            didValueChangeSinceLastRequest: didValueChangeSinceLastRequest,
            didValueOriginateFromExplicitKeyframeDefinition: keyframeCluster && !!keyframeCluster[Math.round(timelineTime)],
        };
    };
    HaikuComponent.prototype.getPreviousSummonees = function (timelineName, flexId, propertyName, keyframeMs) {
        return this.cacheGet("summonees:" + timelineName + "|" + flexId + "|" + propertyName + "|" + keyframeMs);
    };
    HaikuComponent.prototype.cacheSummonees = function (timelineName, flexId, propertyName, keyframeMs, summonees) {
        this.cacheSet("summonees:" + timelineName + "|" + flexId + "|" + propertyName + "|" + keyframeMs, summonees);
        return summonees;
    };
    HaikuComponent.prototype.getPreviousEvaluation = function (timelineName, flexId, propertyName, keyframeMs) {
        return this.cacheGet("evaluation:" + timelineName + "|" + flexId + "|" + propertyName + "|" + keyframeMs);
    };
    HaikuComponent.prototype.cacheEvaluation = function (timelineName, flexId, propertyName, keyframeMs, evaluation) {
        this.cacheSet("evaluation:" + timelineName + "|" + flexId + "|" + propertyName + "|" + keyframeMs, evaluation);
        return evaluation;
    };
    HaikuComponent.prototype.getParseeWithKeys = function (timelineName, flexId, outputName, cluster) {
        if (!this.parsedValueClusters[timelineName]) {
            this.parsedValueClusters[timelineName] = {};
        }
        if (!this.parsedValueClusters[timelineName][flexId]) {
            this.parsedValueClusters[timelineName][flexId] = {};
        }
        if (!this.parsedValueClusters[timelineName][flexId][outputName]) {
            this.parsedValueClusters[timelineName][flexId][outputName] = {
                // The parsee object is mutated in place downstream
                parsee: {},
                keys: cluster ? KeyframeUtils_1.getSortedKeyframes(cluster) : [],
            };
        }
        return this.parsedValueClusters[timelineName][flexId][outputName];
    };
    HaikuComponent.prototype.clusterParseeIsStable = function (parsedValueCluster) {
        return parsedValueCluster.keys.every(function (ms) { return parsedValueCluster.parsee[ms] && !parsedValueCluster.parsee[ms].expression; });
    };
    HaikuComponent.prototype.didChangeValue = function (timelineName, flexId, matchingElement, outputName, outputValue) {
        var answer = false;
        var change = this.cacheGet("changes:" + timelineName + "|" + flexId + "|" + outputName);
        if (change === undefined || change !== outputValue) {
            this.cacheSet("changes:" + timelineName + "|" + flexId + "|" + outputName, outputValue);
            answer = true;
        }
        return answer;
    };
    HaikuComponent.prototype.getSummonablesSchema = function () {
        var summonablesSchema = {};
        for (var key in INJECTABLES) {
            summonablesSchema[key] = INJECTABLES[key].schema;
        }
        return summonablesSchema;
    };
    HaikuComponent.prototype.transformContextPointToLocalPoint = function (point) {
        if (this.layoutAncestryMatrices) {
            var matrix = Layout3D_1.default.multiplyArrayOfMatrices(this.layoutAncestryMatrices.reverse());
            var inverse = invert_1.default([], matrix);
            if (inverse !== null) {
                HaikuElement_1.default.transformPointInPlace(point, inverse);
            }
        }
        return point;
    };
    HaikuComponent.prototype.getParser = function (outputName) {
        var foundParser = HaikuComponent.PARSERS[outputName];
        return foundParser && foundParser.parse;
    };
    HaikuComponent.prototype.getGenerator = function (outputName) {
        var foundGenerator = HaikuComponent.PARSERS[outputName];
        return foundGenerator && foundGenerator.generate;
    };
    HaikuComponent.__name__ = 'HaikuComponent';
    HaikuComponent.PLAYER_VERSION = exports.VERSION; // #LEGACY
    HaikuComponent.CORE_VERSION = exports.VERSION;
    HaikuComponent.INJECTABLES = INJECTABLES;
    // When editing a component, any of these appearing inside an expression will trigger a warning.
    // This is kept in the core so it's easier to compare these to the built-in injectables and
    // other special treatment for JavaScript globals. "single source of truth" etc.
    HaikuComponent.FORBIDDEN_EXPRESSION_TOKENS = {
        // Keywords
        new: true,
        this: true,
        with: true,
        delete: true,
        export: true,
        extends: true,
        super: true,
        class: true,
        abstract: true,
        interface: true,
        static: true,
        label: true,
        goto: true,
        private: true,
        import: true,
        public: true,
        // Future keywords
        do: true,
        native: true,
        package: true,
        transient: true,
        implements: true,
        protected: true,
        throws: true,
        synchronized: true,
        final: true,
        // Common globals
        window: true,
        document: true,
        global: true,
        // Danger
        eval: true,
        uneval: true,
        Function: true,
        EvalError: true,
        // Module stuff to forbid
        require: true,
        module: true,
        exports: true,
        Module: true,
        // Sandbox
        arguments: true,
        callee: true,
        // Identifiers on built-in global objects
        prototpye: true,
        __proto__: true,
        freeze: true,
        setPrototypeOf: true,
        constructor: true,
        defineProperties: true,
        defineProperty: true,
    };
    HaikuComponent.PARSERS = {
        'style.stroke': { parse: parseColor, generate: generateColor },
        'style.fill': { parse: parseColor, generate: generateColor },
        'style.backgroundColor': { parse: parseColor, generate: generateColor },
        'style.borderBottomColor': { parse: parseColor, generate: generateColor },
        'style.borderColor': { parse: parseColor, generate: generateColor },
        'style.borderLeftColor': { parse: parseColor, generate: generateColor },
        'style.borderRightColor': { parse: parseColor, generate: generateColor },
        'style.borderTopColor': { parse: parseColor, generate: generateColor },
        'style.floodColor': { parse: parseColor, generate: generateColor },
        'style.lightingColor': { parse: parseColor, generate: generateColor },
        'style.stopColor': { parse: parseColor, generate: generateColor },
        stroke: { parse: parseColor, generate: generateColor },
        fill: { parse: parseColor, generate: generateColor },
        floodColor: { parse: parseColor, generate: generateColor },
        lightingColor: { parse: parseColor, generate: generateColor },
        stopColor: { parse: parseColor, generate: generateColor },
        backgroundColor: { parse: parseColor, generate: generateColor },
        animateColor: { parse: parseColor, generate: generateColor },
        feColor: { parse: parseColor, generate: generateColor },
        // Note the hyphenated duplicates, for convenience
        'flood-color': { parse: parseColor, generate: generateColor },
        'lighting-color': { parse: parseColor, generate: generateColor },
        'stop-color': { parse: parseColor, generate: generateColor },
        'background-color': { parse: parseColor, generate: generateColor },
        'animate-color': { parse: parseColor, generate: generateColor },
        'fe-color': { parse: parseColor, generate: generateColor },
        d: { parse: parseD, generate: generateD },
        points: { parse: parsePoints, generate: generatePoints },
    };
    HaikuComponent.all = function () { return HaikuBase_1.default.getRegistryForClass(HaikuComponent); };
    return HaikuComponent;
}(HaikuElement_1.default));
exports.default = HaikuComponent;
var getNodeFlexId = function (node) {
    var domId = (node &&
        node.attributes &&
        node.attributes.id);
    var haikuId = (node &&
        node.attributes &&
        node.attributes[HAIKU_ID_ATTRIBUTE]);
    return haikuId || domId;
};
exports.getNodeCompositeId = function (node) {
    var flexId = getNodeFlexId(node);
    // Treat the 0th repeater as the original (source) element
    return (node.__memory && node.__memory.repeatee && node.__memory.repeatee.index)
        ? flexId + "'" + node.__memory.repeatee.index
        : flexId;
};
var collatePropertyGroup = function (propertiesGroup) {
    var collation = [
        {},
        {},
        {},
        {},
    ];
    for (var propertyName in propertiesGroup) {
        if (propertyName === 'controlFlow.if') {
            collation[0][propertyName] = propertiesGroup[propertyName];
        }
        else if (propertyName === 'controlFlow.repeat') {
            collation[1][propertyName] = propertiesGroup[propertyName];
        }
        else if (propertyName === 'controlFlow.placeholder') {
            collation[2][propertyName] = propertiesGroup[propertyName];
        }
        else {
            collation[3][propertyName] = propertiesGroup[propertyName];
        }
    }
    return collation;
};
function isBytecode(thing) {
    return thing && typeof thing === OBJECT_TYPE && thing.template;
}
function assertTemplate(template) {
    if (!template) {
        throw new Error('Empty template not allowed');
    }
    if (typeof template === OBJECT_TYPE) {
        if (template.attributes) {
            if (!template.attributes[HAIKU_ID_ATTRIBUTE]) {
                console.warn('[haiku core] bytecode template has no id');
            }
        }
        else {
            console.warn('[haiku core] bytecode template has no attributes');
        }
        if (!template.elementName) {
            console.warn('[haiku core] unexpected bytecode template format');
        }
        return template;
    }
    throw new Error('Unknown bytecode template format');
}
var needsVirtualChildren = function (child) { return typeof child === 'object' &&
    child.__memory &&
    ((child.__memory.if && !child.__memory.if.answer) ||
        (child.__memory.repeater && !!child.__memory.repeater.repeatees)); };
var reduceNodeMemoryChildren = function (children, out, doIncludeRepeatees) {
    if (out === void 0) { out = []; }
    if (doIncludeRepeatees === void 0) { doIncludeRepeatees = false; }
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (!child) {
            continue;
        }
        if (typeof child === 'object' && child.__memory) {
            // Do not include any children that have been removed due to $if-logic
            if (child.__memory.if && !child.__memory.if.answer) {
                continue;
            }
            // If the child is a repeater, use the $repeats instead of itself
            if (doIncludeRepeatees &&
                child.__memory.repeater &&
                child.__memory.repeater.repeatees) {
                reduceNodeMemoryChildren(child.__memory.repeater.repeatees, out, false);
                continue;
            }
            // If we got this far, the child is structurally normal
            out.push(child);
        }
        else {
            out.push(child);
        }
    }
    return out;
};
var assembleNodeMemoryChildren = function (node, subtree) {
    if (subtree) {
        return [subtree];
    }
    if (node.__memory.placeholder) {
        return [];
    }
    // To avoid creating garbage, only allow allocations here if we actually need virtual children.
    if (!node.children || !node.children.some(needsVirtualChildren)) {
        return;
    }
    return reduceNodeMemoryChildren(node.children, [], true);
};
var expandNode = function (node, parent) {
    if (!node || typeof node !== 'object' || !node.__memory) {
        return;
    }
    var children = node.children;
    // Special case if our current original is the wrapper of a subcomponent.
    var subtree = node.__memory.subcomponent && node.__memory.subcomponent.bytecode.template;
    var assembled = assembleNodeMemoryChildren(node, subtree);
    // Don't just overwrite, since node.__memory.children may've been set to vanity 'content'
    if (assembled) {
        node.__memory.children = assembled;
    }
    if (node.__memory.children) {
        children = node.__memory.children;
    }
    /**
     * When we compute layout, we have the following chicken/egg problem:
     * 1. Nodes which are "auto"-sized consume their children's size to calculate their own size.
     * 2. Nodes with a SIZE_PROPORTIONAL depend on parent absolute size to compute their target size. (DEPRECATED)
     * 3. Nodes with an "auto"-sized parent consume their parent's bounds to calculate a translation offset.
     *
     * Thus, we perform the layout steps in the following order:
     * 1. Compute the current node's layout.
     *   1.a. If the current node is "auto"-sized, compute the size of the children. For each child,
     *        we compute its bounding rect using its *local* transform (not using its parent size).
     *        This is sufficient to obtain a bounding box in local coordinate space with respect to
     *        an unknown container. We then use all of the rects to determine the outermost bbox,
     *        which in turn is used to determine the current node's size.
     *   1.b. If the current node is numerically sized, use that size.
     * 2. Expand all children of the current node. By now, the parent should have a numeric size.
     *   2.a. For SIZE_PROPORTIONAL nodes, compute the layout as proportion of the parent size.
     *   2.b. For other nodes, compute its local size.
     *   2.c. If the parent was "auto"-sized, it should have its bounds precalculated from the
     *        previous pass. When this is the case, use the bounds to calculate an offset value
     *        by which translation will be offset, aligning all children to be perfectly flush
     *        with their container, no matter what size it is.
     */
    computeAndApplyLayout(node, parent);
    if (children) {
        for (var j = 0; j < children.length; j++) {
            // Special case: The subtree of the subcomponent doesn't need to be re-expanded.
            if (children[j] !== subtree) {
                expandNode(children[j], node);
            }
        }
    }
};
var computeAndApplyLayout = function (node, parent) {
    // Don't assume the node has/needs a layout, for example, control-flow injectees
    if (node.layout) {
        node.layout.computed = HaikuElement_1.default.computeLayout(node, parent);
    }
};
var hydrateNode = function (node, parent, component, context, host, scope, options, doConnectInstanceToNode) {
    if (options === void 0) { options = {}; }
    // Nothing to expand if the node happens to be text or unexpected type
    if (!node || typeof node !== 'object') {
        return;
    }
    // Hydrate a HaikuElement representation of all nodes in the tree.
    // The instance is cached as node.__memory.element for performance purposes.
    HaikuElement_1.default.findOrCreateByNode(node);
    component.cacheNodeWithSelectorKey(node);
    // Platform-specific renderers may depend on access to the parent.
    node.__memory.parent = parent;
    // So renderers can detect when different layout behavior is needed.
    node.__memory.scope = scope || 'div';
    // Give it a pointer back to the host context; used by HaikuElement
    node.__memory.context = context;
    Layout3D_1.default.initializeNodeAttributes(node, doConnectInstanceToNode);
    // Give instances a pointer to their node and vice versa
    if (doConnectInstanceToNode) {
        node.__memory.instance = component;
        // In the case that the node represents the root of an instance, treat the instance as the element;
        // connect their references and override the equivalent action in findOrCreateByNode.
        HaikuElement_1.default.connectNodeWithElement(node, node.__memory.instance);
    }
    // If the element name is missing it should still be safe to hydrate the children
    if (typeof node.elementName === STRING_TYPE || !node.elementName) {
        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                hydrateNode(node.children[i], // node
                node, // parent
                component, // instance (component)
                context, host, SCOPE_STRATA[node.elementName] || scope, // scope
                options, false);
            }
        }
        return;
    }
    if (isBytecode(node.elementName)) {
        // Example structure showing how nodes and instances are related:
        // <div root> instance id=1
        //   <div>
        //     <div>
        //       <div wrap> subcomponent (instance id=2)
        //         <div root> instance id=2
        //           ...
        if (!node.__memory.subcomponent) {
            var config = Config_1.default.buildChildSafeConfig(__assign({}, context.config, options));
            // Note: .render and thus .hydrateNode are called by the constructor,
            // automatically connecting the root node to itself (see stanza above).
            node.__memory.subcomponent = new HaikuComponent(node.elementName, context, // context
            component, __assign({ loop: true }, config), node);
            // Very important, as the guests collection is used in rendering/patching
            component.registerGuest(node.__memory.subcomponent);
        }
        else {
            // Reassigning is necessary since these objects may have changed between
            // renders in the editing environment
            node.__memory.subcomponent.context = context; // context
            node.__memory.subcomponent.host = component; // host
            node.__memory.subcomponent.container = node; // container
            // Very important, as the guests collection is used in rendering/patching
            component.registerGuest(node.__memory.subcomponent);
            // Don't re-start any nested timelines that have been explicitly paused
            if (!node.__memory.subcomponent.getDefaultTimeline().isPaused()) {
                node.__memory.subcomponent.startTimeline(DEFAULT_TIMELINE_NAME);
            }
        }
        return;
    }
    // In case we got a __reference node or other unknown
    console.warn('[haiku core] cannot hydrate node');
};
var computeAndApplyPresetSizing = function (element, container, mode) {
    var elementWidth = element.layout.sizeAbsolute.x;
    var elementHeight = element.layout.sizeAbsolute.y;
    // Some browsers does not work correctly with matrix3d transforms on SVGs
    // with resulting subpixel rendering, so let's round up the size to avoid
    // browser problems
    var containerWidth = Math.ceil(container.layout.computed.size.x);
    var containerHeight = Math.ceil(container.layout.computed.size.y);
    // I.e., the amount by which we'd have to multiply the element's scale to make it
    // exactly the same size as its container (without going above it)
    var scaleDiffX = containerWidth / elementWidth;
    var scaleDiffY = containerHeight / elementHeight;
    // This makes sure that the sizing occurs with respect to a correct and consistent origin point,
    // but only if the user didn't happen to explicitly set this value (we allow their override).
    if (!element.attributes.style['transform-origin']) {
        element.attributes.style['transform-origin'] = '0% 0% 0px';
    }
    // IMPORTANT: If any value has been changed on the element, you must set this to true.
    // Otherwise the changed object won't go into the deltas dictionary, and the element won't update.
    var changed = false;
    switch (mode) {
        // Make the base element its default scale, which is just a multiplier of one. This is the default.
        case 'normal':
            if (element.layout.scale.x !== 1.0 || element.layout.scale.y !== 1.0) {
                changed = true;
                element.layout.scale.x = element.layout.scale.y = 1.0;
            }
            break;
        // Stretch the element to fit the container on both x and y dimensions (distortion allowed)
        case 'stretch':
            if (scaleDiffX !== element.layout.scale.x) {
                changed = true;
                element.layout.scale.x = scaleDiffX;
            }
            if (scaleDiffY !== element.layout.scale.y) {
                changed = true;
                element.layout.scale.y = scaleDiffY;
            }
            break;
        // CONTAIN algorithm
        // see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size?v=example
        // A keyword that scales the image as large as possible and maintains image aspect ratio
        // (image doesn't get squished). Image is letterboxed within the container.
        // When the image and container have different dimensions, the empty areas (either top/bottom of left/right)
        // are filled with the background-color.
        case 'contain':
        case true: // (Legacy.)
            var containScaleToUse = null;
            // We're looking for the larger of the two scales that still allows both dimensions to fit in the box
            // The rounding is necessary to avoid precision issues, where we end up comparing e.g. 2.0000000000001 to 2
            if (~~(scaleDiffX * elementWidth) <= containerWidth &&
                ~~(scaleDiffX * elementHeight) <= containerHeight) {
                containScaleToUse = scaleDiffX;
            }
            if (~~(scaleDiffY * elementWidth) <= containerWidth &&
                ~~(scaleDiffY * elementHeight) <= containerHeight) {
                if (containScaleToUse === null) {
                    containScaleToUse = scaleDiffY;
                }
                else {
                    if (scaleDiffY >= containScaleToUse) {
                        containScaleToUse = scaleDiffY;
                    }
                }
            }
            if (element.layout.scale.x !== containScaleToUse) {
                changed = true;
                element.layout.scale.x = containScaleToUse;
            }
            if (element.layout.scale.y !== containScaleToUse) {
                changed = true;
                element.layout.scale.y = containScaleToUse;
            }
            // Offset the translation so that the element remains centered within the letterboxing
            var containTranslationOffsetX = -(containScaleToUse * elementWidth - containerWidth) / 2;
            var containTranslationOffsetY = -(containScaleToUse * elementHeight - containerHeight) / 2;
            if (element.layout.translation.x !== containTranslationOffsetX) {
                changed = true;
                element.layout.translation.x = containTranslationOffsetX;
            }
            if (element.layout.translation.y !== containTranslationOffsetY) {
                changed = true;
                element.layout.translation.y = containTranslationOffsetY;
            }
            break;
        // COVER algorithm (inverse of CONTAIN)
        // see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size?v=example
        // A keyword that is the inverse of contain. Scales the image as large as possible and maintains
        // image aspect ratio (image doesn't get squished). The image "covers" the entire width or height
        // of the container. When the image and container have different dimensions, the image is clipped
        // either left/right or top/bottom.
        case 'cover':
            var coverScaleToUse = null;
            // We're looking for the smaller of two scales that ensures the entire box is covered.
            // The rounding is necessary to avoid precision issues, where we end up comparing e.g. 2.0000000000001 to 2
            if (~~(scaleDiffX * elementHeight) >= containerHeight) {
                coverScaleToUse = scaleDiffX;
            }
            else if (~~(scaleDiffY * elementWidth) >= containerWidth) {
                coverScaleToUse = scaleDiffY;
            }
            else {
                coverScaleToUse = Math.max(scaleDiffX, scaleDiffY);
            }
            if (element.layout.scale.x !== coverScaleToUse) {
                changed = true;
                element.layout.scale.x = coverScaleToUse;
            }
            if (element.layout.scale.y !== coverScaleToUse) {
                changed = true;
                element.layout.scale.y = coverScaleToUse;
            }
            // Offset the translation so that the element remains centered despite clipping
            var coverTranslationOffsetX = -(coverScaleToUse * elementWidth - containerWidth) / 2;
            var coverTranslationOffsetY = -(coverScaleToUse * elementHeight - containerHeight) / 2;
            if (element.layout.translation.x !== coverTranslationOffsetX) {
                changed = true;
                element.layout.translation.x = coverTranslationOffsetX;
            }
            if (element.layout.translation.y !== coverTranslationOffsetY) {
                changed = true;
                element.layout.translation.y = coverTranslationOffsetY;
            }
            break;
    }
    return changed;
};
exports.clone = function (value, binding) {
    if (!value) {
        return value;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'function') {
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return value.call.apply(value, [binding].concat(args));
        };
        // Core decorates injectee functions with metadata properties
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                fn[key] = exports.clone(value[key], binding);
            }
        }
        fn.__rfo = functionToRFO_1.default(value).__function;
        return fn;
    }
    if (Array.isArray(value)) {
        return value.map(function (el) { return exports.clone(el, binding); });
    }
    // Don't try to clone anything other than plain objects
    if (typeof value === 'object' && value.constructor === Object) {
        var out = {};
        for (var key in value) {
            if (!value.hasOwnProperty(key) || key.slice(0, 2) === '__') {
                continue;
            }
            // If it looks like guest bytecode, don't clone it since
            // (a) we're passing down *our* function binding, which will break event handling and
            // (b) each HaikuComponent#constructor calls clone() on its own anyway
            if (key === 'elementName' && typeof value[key] !== 'string') {
                out[key] = value[key];
            }
            else {
                out[key] = exports.clone(value[key], binding);
            }
        }
        return out;
    }
    return value;
};
var setStyle = function (subkey, element, value) {
    element.attributes.style[subkey] = value;
};
var setAttribute = function (key, element, value) {
    var final = exports.ATTRS_CAMEL_TO_HYPH[key] || key;
    element.attributes[final] = value;
};
var isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
var isInteger = function (x) {
    return x % 1 === 0;
};
var REACT_MATCHING_OPTIONS = {
    name: 'type',
    attributes: 'props',
};
var HAIKU_MATCHING_OPTIONS = {
    name: 'elementName',
    attributes: 'attributes',
};
var querySelectSubtree = function (surrogate, value) {
    // First try the Haiku format
    if (HaikuNode_1.cssMatchOne(surrogate, value, HAIKU_MATCHING_OPTIONS)) {
        return surrogate;
    }
    // If no match yet, try the React format (TODO: Does this belong here?)
    if (HaikuNode_1.cssMatchOne(surrogate, value, REACT_MATCHING_OPTIONS)) {
        return surrogate;
    }
    // Visit the descendants (if any) and see if we have a match there
    var children = (surrogate.children || // Haiku's format
        (surrogate.props && surrogate.props.children) // React's format
    );
    // If no children, we definitely don't have a match in this subtree
    if (!children) {
        return null;
    }
    // Check for arrays first since arrays pass the typeof object check
    if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var found = querySelectSubtree(children[i], value);
            // First time a match is found, break the loop and return it
            if (found) {
                return found;
            }
        }
    }
    // React may store 'children' as a single object
    if (typeof children === 'object') {
        return querySelectSubtree(children, value);
    }
};
var querySelectSurrogates = function (surrogates, value) {
    if (Array.isArray(surrogates)) {
        // Return the first match we locate in the collection
        return surrogates.map(function (surrogate) { return querySelectSurrogates(surrogate, value); })[0];
    }
    if (surrogates && typeof surrogates === 'object') {
        return querySelectSubtree(surrogates, value);
    }
};
var selectSurrogate = function (surrogates, value) {
    // If the placeholder value is intended as an array index
    if (Array.isArray(surrogates) && isNumeric(value) && isInteger(value)) {
        if (surrogates[value]) {
            return surrogates[value];
        }
    }
    // If the placeholder value is intended as a key
    if (surrogates && typeof surrogates === 'object' && typeof value === 'string') {
        if (surrogates[value]) {
            return surrogates[value];
        }
    }
    return querySelectSurrogates(surrogates, value + '');
};
var getCanonicalPlaybackValue = function (value) {
    if (typeof value !== 'object') {
        return {
            Default: value,
        };
    }
    return value;
};
/**
 * 'Vanities' are functions that provide special handling for applied properties.
 * So for example, if a component wants to apply 'foo.bar'=3 to a <div> in its template,
 * the renderer will look in the vanities dictionary to see if there is a
 * vanity 'foo.bar' available, and if so, pass the value 3 into that function.
 * The function, in turn, knows how to apply that value to the virtual element passed into
 * it. In the future these will be defined by components themselves as inputs; for now,
 * we are keeping a whitelist of possible vanity handlers which the renderer directly
 * loads and calls.
 */
exports.getVanity = function (elementName, propertyName) {
    if (elementName) {
        if (exports.VANITIES[elementName] && exports.VANITIES[elementName][propertyName]) {
            return exports.VANITIES[elementName][propertyName];
        }
    }
    return exports.VANITIES['*'][propertyName];
};
/**
 * Ensures layout before applying a layout vanity.
 */
var ensureLayout = function (node) {
    if (!node.layout) {
        Layout3D_1.default.initializeNodeLayout(node);
    }
};
exports.LAYOUT_3D_VANITIES = {
    // Layout has a couple of special values that relate to display
    // but not to position:
    shown: function (_, element, value) {
        ensureLayout(element);
        element.layout.shown = value;
    },
    // Opacity needs to have its opacity *layout* property set
    // as opposed to its element attribute so the renderer can make a decision about
    // where to put it based on the rendering medium's rules
    opacity: function (_, element, value) {
        ensureLayout(element);
        element.layout.opacity = value;
    },
    // If you really want to set what we call 'position' then
    // we do so on the element's attributes; this is mainly to
    // enable the x/y positioning system for SVG elements.
    'position.x': function (name, element, value) {
        ensureLayout(element);
        element.attributes.x = value;
    },
    'position.y': function (name, element, value) {
        ensureLayout(element);
        element.attributes.y = value;
    },
    // Everything that follows is a standard 3-coord component
    // relating to the element's position in space
    'rotation.x': function (_, element, value) {
        ensureLayout(element);
        element.layout.rotation.x = value;
    },
    'rotation.y': function (_, element, value) {
        ensureLayout(element);
        element.layout.rotation.y = value;
    },
    'rotation.z': function (_, element, value) {
        ensureLayout(element);
        element.layout.rotation.z = value;
    },
    'offset.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.offset.x = value;
    },
    'offset.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.offset.y = value;
    },
    'offset.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.offset.z = value;
    },
    'origin.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.origin.x = value;
    },
    'origin.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.origin.y = value;
    },
    'origin.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.origin.z = value;
    },
    'scale.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.scale.x = value;
    },
    'scale.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.scale.y = value;
    },
    'scale.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.scale.z = value;
    },
    'sizeAbsolute.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeAbsolute.x = value;
    },
    'sizeAbsolute.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeAbsolute.y = value;
    },
    'sizeAbsolute.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeAbsolute.z = value;
    },
    'sizeDifferential.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeDifferential.x = value;
    },
    'sizeDifferential.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeDifferential.y = value;
    },
    'sizeDifferential.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeDifferential.z = value;
    },
    'sizeMode.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeMode.x = value;
    },
    'sizeMode.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeMode.y = value;
    },
    'sizeMode.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeMode.z = value;
    },
    'sizeProportional.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeProportional.x = value;
    },
    'sizeProportional.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeProportional.y = value;
    },
    'sizeProportional.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.sizeProportional.z = value;
    },
    'shear.xy': function (name, element, value) {
        ensureLayout(element);
        element.layout.shear.xy = value;
    },
    'shear.xz': function (name, element, value) {
        ensureLayout(element);
        element.layout.shear.xz = value;
    },
    'shear.yz': function (name, element, value) {
        ensureLayout(element);
        element.layout.shear.yz = value;
    },
    'translation.x': function (name, element, value) {
        ensureLayout(element);
        element.layout.translation.x = value;
    },
    'translation.y': function (name, element, value) {
        ensureLayout(element);
        element.layout.translation.y = value;
    },
    'translation.z': function (name, element, value) {
        ensureLayout(element);
        element.layout.translation.z = value;
    },
};
exports.VANITIES = {
    '*': __assign({}, exports.LAYOUT_3D_VANITIES, { 
        // CSS style properties that need special handling
        'style.WebkitTapHighlightColor': function (_, element, value) {
            element.attributes.style.webkitTapHighlightColor = value;
        }, 
        // Text and other inner-content related vanities
        content: function (name, element, value, context, timeline, receiver, sender) {
            element.__memory.children = [value];
            // If we don't do this, then content changes resulting from setState calls
            // don't have the effect of flushing the content, and the rendered text doesn't change.
            // DEMO: bind-numeric-state-to-text
            // TODO: What is the best way to make this less expensive (while still functional)?
            sender.patches.push(element);
        }, 
        // Playback-related vanities that involve controlling timeline or clock time
        playback: function (name, element, value, context, timeline, receiver, sender) {
            var canonicalValue = getCanonicalPlaybackValue(value);
            for (var timelineName in canonicalValue) {
                var timelineInstance = receiver && receiver.getTimeline(timelineName);
                if (timelineInstance) {
                    timelineInstance.setPlaybackStatus(canonicalValue[timelineName]);
                }
            }
        }, 
        // Control-flow vanities that alter the output structure of the component
        'controlFlow.placeholder': function (name, element, value, context, timeline, receiver, sender) {
            // For MVP's sake, structural behaviors not rendered during hot editing.
            if (sender.config.hotEditingMode) {
                return;
            }
            if (value === null || value === undefined) {
                return;
            }
            if (typeof value !== 'number' && typeof value !== 'string') {
                return;
            }
            var surrogates;
            // Surrogates can be passed in as:
            //   - React children (an array)
            //   - A React subtree (we'll use query selectors to match)
            //   - A Haiku subtree (we'll use query selectors to match)
            //   - Key/value pairs
            if (context.config.children) {
                surrogates = context.config.children;
                if (!Array.isArray(surrogates)) {
                    surrogates = [surrogates];
                }
            }
            else if (context.config.placeholder) {
                surrogates = context.config.placeholder;
            }
            if (!surrogates) {
                return;
            }
            var surrogate = selectSurrogate(surrogates, value);
            if (surrogate === null || surrogate === undefined) {
                return;
            }
            if (!element.__memory.placeholder) {
                element.__memory.placeholder = {};
            }
            element.__memory.placeholder.value = value;
            // If we are running via a framework adapter, allow that framework to provide its own placeholder mechanism.
            // This is necessary e.g. in React where their element format needs to be converted into our 'mana' format
            if (context.config.vanities['controlFlow.placeholder']) {
                context.config.vanities['controlFlow.placeholder'](element, surrogate, value, context, timeline, receiver, sender);
            }
            else {
                element.__memory.placeholder.surrogate = surrogate;
            }
        }, 'controlFlow.repeat': function (name, element, value, context, timeline, receiver, sender) {
            var instructions;
            if (Array.isArray(value)) {
                instructions = value;
            }
            else if (isNumeric(value)) {
                var arr = [];
                for (var i = 0; i < value; i++) {
                    arr.push({}); // Empty repeat payload spec
                }
                instructions = arr;
            }
            else {
                return;
            }
            if (element.__memory.repeatee) {
                // Don't repeat the repeatee of an existing repeater
                if (element.__memory.repeatee.index > 0) {
                    return;
                }
            }
            if (element.__memory.repeater) {
                if (element.__memory.repeater.changed) {
                    element.__memory.repeater.changed = false;
                }
                else {
                    // Save CPU by avoiding recomputing a repeat when we've already done so.
                    // Although upstream HaikuComponent#applyLocalBehaviors does do diff comparisons,
                    // it intentionally skips this comparison for complex properties i.e. arrays
                    // and objects due to the intractability of smartly comparing for all cases.
                    // We do a comparison that is fairly sensible in the repeat-exclusive case.
                    if (isSameRepeatBehavior(element.__memory.repeater.instructions, instructions)) {
                        return;
                    }
                }
            }
            if (!element.__memory.repeater) {
                element.__memory.repeater = {};
            }
            element.__memory.repeater.instructions = instructions;
            // Structural behaviors are not rendered during hot editing.
            if (sender.config.hotEditingMode) {
                // If we got at least one instruction, render that by default into the repeater
                if (instructions.length > 0) {
                    element.__memory.repeatee = {
                        instructions: instructions,
                        index: 0,
                        payload: instructions[0],
                        source: element,
                    };
                    applyPayloadToNode(element, instructions[0], sender, timeline);
                    sender.patches.push(element);
                    expandNode(element, element.__memory.parent);
                }
                return;
            }
            if (!element.__memory.repeater.repeatees) {
                element.__memory.repeater.repeatees = [];
            }
            else {
                // If the instructions have decreased on this run, remove the excess repeatees
                element.__memory.repeater.repeatees.splice(instructions.length);
            }
            instructions.forEach(function (payload, index) {
                var repeatee = (index === 0)
                    ? element // The first element should be the source element
                    : element.__memory.repeater.repeatees[index] || exports.clone(element, sender);
                // We have to initialize the element's component instance, etc.
                hydrateNode(repeatee, element.__memory.parent, // parent
                sender, // component
                sender.context, // context
                sender, // host
                element.__memory.scope, // scope (use same scope as source node)
                sender.config, // options
                false);
                repeatee.__memory.repeatee = {
                    index: index,
                    instructions: instructions,
                    payload: payload,
                    source: element,
                };
                applyPayloadToNode(repeatee, payload, sender, timeline);
                element.__memory.repeater.repeatees[index] = repeatee;
            });
            sender.patches.push(element);
            expandNode(element, element.__memory.parent);
        }, 'controlFlow.if': function (name, element, value, context, timeline, receiver, sender) {
            // For MVP's sake, structural behaviors not rendered during hot editing.
            if (sender.config.hotEditingMode) {
                return;
            }
            // Assume our if-answer is only false if we got an explicit false value
            var answer = value !== false;
            if (element.__memory.if) {
                // Save CPU by avoiding recomputing an if when we've already done so.
                if (isSameIfBehavior(element.__memory.if.answer, answer)) {
                    return;
                }
            }
            element.__memory.if = {
                answer: answer,
            };
            // Ensure that a change in repeat will trigger the necessary re-repeat
            if (element.__memory.repeater) {
                element.__memory.repeater.changed = true;
            }
            sender.markForFullFlush();
        } }),
};
var applyPayloadToNode = function (node, payload, sender, timeline) {
    // Apply the repeat payload to the element as if it were a normal timeline output
    for (var propertyName in payload) {
        // Control-flow occurs after presentational behaviors, meaning we are overriding
        // whatever may have been set on the source element instance.
        sender.applyPropertyToNode(node, // matchingElement
        propertyName, payload[propertyName], // finalValue
        timeline);
    }
};
var isSameIfBehavior = function (prev, next) {
    return prev === next;
};
var isSameRepeatBehavior = function (prevs, nexts) {
    if (prevs === nexts) {
        return true;
    }
    if (prevs.length !== nexts.length) {
        return false;
    }
    var answer = true;
    for (var i = 0; i < prevs.length; i++) {
        if (!answer) {
            break;
        }
        var prev = prevs[i];
        var next = nexts[i];
        if (prev === next) {
            continue;
        }
        for (var key in next) {
            if (next[key] !== prev[key]) {
                answer = false;
                break;
            }
        }
    }
    return answer;
};
var findRespectiveRepeatees = function (target) {
    var repeatees = [];
    // Required to fix a race condition that can occur during copy+paste in Haiku.app
    if (!target.__memory) {
        return repeatees;
    }
    // The host repeatee of the given target node, if the target is a repeater's descendant
    var host;
    if (target.__memory.repeatee) {
        host = target;
    }
    else {
        // Note that we do not ascend beyond the nearest host component instance
        HaikuNode_1.ascend(target, function (node) {
            if (node.__memory.repeatee) {
                host = node;
            }
        });
    }
    // If we've found a host repeatee, the target is a descendant of a repeater,
    // and we need to find its respective node within each repeatee.
    if (host) {
        var repeater = host.__memory.repeatee.source;
        if (repeater.__memory.repeater.repeatees) {
            repeater.__memory.repeater.repeatees.forEach(function (repeatee) {
                HaikuNode_1.visit(repeatee, function (candidate) {
                    if (areNodesRespective(target, candidate)) {
                        repeatees.push(candidate);
                    }
                });
            });
        }
    }
    return repeatees;
};
var areNodesRespective = function (n1, n2) {
    if (n1 === n2) {
        return true;
    }
    // We assume that all nodes within the tree of a component have unique haiku-ids, and that
    // these haiku-ids are not directly modified within repeater groups
    if (
    // If the haiku-id attribute is empty, assume the comparison isn't valid
    n1.attributes[HAIKU_ID_ATTRIBUTE] &&
        n1.attributes[HAIKU_ID_ATTRIBUTE] === n2.attributes[HAIKU_ID_ATTRIBUTE]) {
        return true;
    }
    return false;
};
exports.getFallback = function (elementName, propertyName) {
    if (elementName) {
        if (LAYOUT_COORDINATE_SYSTEM_FALLBACKS[elementName] &&
            LAYOUT_COORDINATE_SYSTEM_FALLBACKS[elementName][propertyName] !== undefined) {
            return LAYOUT_COORDINATE_SYSTEM_FALLBACKS[elementName][propertyName];
        }
        if (exports.FALLBACKS[elementName] && exports.FALLBACKS[elementName][propertyName] !== undefined) {
            return exports.FALLBACKS[elementName][propertyName];
        }
    }
    return exports.FALLBACKS['*'][propertyName];
};
var LAYOUT_COORDINATE_SYSTEM_FALLBACKS = {
    svg: {
        'origin.x': 0.5,
        'origin.y': 0.5,
        'origin.z': 0.5,
    },
};
var LAYOUT_DEFAULTS = Layout3D_1.default.createLayoutSpec();
exports.FALLBACKS = {
    '*': {
        shown: LAYOUT_DEFAULTS.shown,
        opacity: LAYOUT_DEFAULTS.opacity,
        content: '',
        'offset.x': LAYOUT_DEFAULTS.offset.x,
        'offset.y': LAYOUT_DEFAULTS.offset.y,
        'offset.z': LAYOUT_DEFAULTS.offset.z,
        'origin.x': LAYOUT_DEFAULTS.origin.x,
        'origin.y': LAYOUT_DEFAULTS.origin.y,
        'origin.z': LAYOUT_DEFAULTS.origin.z,
        'translation.x': LAYOUT_DEFAULTS.translation.x,
        'translation.y': LAYOUT_DEFAULTS.translation.y,
        'translation.z': LAYOUT_DEFAULTS.translation.z,
        'rotation.x': LAYOUT_DEFAULTS.rotation.x,
        'rotation.y': LAYOUT_DEFAULTS.rotation.y,
        'rotation.z': LAYOUT_DEFAULTS.rotation.z,
        'scale.x': LAYOUT_DEFAULTS.scale.x,
        'scale.y': LAYOUT_DEFAULTS.scale.y,
        'scale.z': LAYOUT_DEFAULTS.scale.z,
        'shear.xy': LAYOUT_DEFAULTS.shear.xy,
        'shear.xz': LAYOUT_DEFAULTS.shear.xz,
        'shear.yz': LAYOUT_DEFAULTS.shear.yz,
        'sizeAbsolute.x': LAYOUT_DEFAULTS.sizeAbsolute.x,
        'sizeAbsolute.y': LAYOUT_DEFAULTS.sizeAbsolute.y,
        'sizeAbsolute.z': LAYOUT_DEFAULTS.sizeAbsolute.z,
        'sizeProportional.x': LAYOUT_DEFAULTS.sizeProportional.x,
        'sizeProportional.y': LAYOUT_DEFAULTS.sizeProportional.y,
        'sizeProportional.z': LAYOUT_DEFAULTS.sizeProportional.z,
        'sizeDifferential.x': LAYOUT_DEFAULTS.sizeDifferential.x,
        'sizeDifferential.y': LAYOUT_DEFAULTS.sizeDifferential.y,
        'sizeDifferential.z': LAYOUT_DEFAULTS.sizeDifferential.z,
        'sizeMode.x': LAYOUT_DEFAULTS.sizeMode.x,
        'sizeMode.y': LAYOUT_DEFAULTS.sizeMode.y,
        'sizeMode.z': LAYOUT_DEFAULTS.sizeMode.z,
        'style.overflowX': 'hidden',
        'style.overflowY': 'hidden',
        'style.zIndex': 1,
        'style.WebkitTapHighlightColor': 'rgba(0,0,0,0)',
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        r: 0,
        cx: 0,
        cy: 0,
        rx: 0,
        ry: 0,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        playback: "loop" /* LOOP */,
        'controlFlow.repeat': null,
        'controlFlow.placeholder': null,
    },
};
exports.LAYOUT_3D_SCHEMA = {
    shown: 'boolean',
    opacity: 'number',
    'offset.x': 'number',
    'offset.y': 'number',
    'offset.z': 'number',
    'origin.x': 'number',
    'origin.y': 'number',
    'origin.z': 'number',
    'translation.x': 'number',
    'translation.y': 'number',
    'translation.z': 'number',
    'rotation.x': 'number',
    'rotation.y': 'number',
    'rotation.z': 'number',
    'scale.x': 'number',
    'scale.y': 'number',
    'scale.z': 'number',
    'shear.xy': 'number',
    'shear.xz': 'number',
    'shear.yz': 'number',
    'sizeAbsolute.x': 'number',
    'sizeAbsolute.y': 'number',
    'sizeAbsolute.z': 'number',
    'sizeProportional.x': 'number',
    'sizeProportional.y': 'number',
    'sizeProportional.z': 'number',
    'sizeDifferential.x': 'number',
    'sizeDifferential.y': 'number',
    'sizeDifferential.z': 'number',
    'sizeMode.x': 'number',
    'sizeMode.y': 'number',
    'sizeMode.z': 'number',
};
exports.ATTRS_CAMEL_TO_HYPH = {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    panose1: 'panose-1',
    paintOrder: 'paint-order',
    pointerEvents: 'pointer-events',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
};
var PositionSchema = {
    x: 'number',
    y: 'number',
    z: 'number',
};
exports.ATTRS_HYPH_TO_CAMEL = {};
for (var camel in exports.ATTRS_CAMEL_TO_HYPH) {
    exports.ATTRS_HYPH_TO_CAMEL[exports.ATTRS_CAMEL_TO_HYPH[camel]] = camel;
}
INJECTABLES.$element = {
    schema: {
        offset: PositionSchema,
        attributes: {},
        tagName: 'string',
        matrix: [],
        opacity: 'number',
        origin: PositionSchema,
        rotation: PositionSchema,
        scale: PositionSchema,
        shown: 'boolean',
        size: { x: 'number', y: 'number' },
        sizeAbsolute: PositionSchema,
        sizeProportional: PositionSchema,
        translation: PositionSchema,
    },
    summon: function (injectees, component, node) {
        injectees.$element = HaikuElement_1.default.findOrCreateByNode(node);
    },
};
INJECTABLES.$window = {
    schema: {},
    summon: function (injectees) {
        injectees.$window = (typeof window !== 'undefined') ? window : {};
    },
};
INJECTABLES.$mount = {
    schema: {},
    summon: function (injectees, component) {
        injectees.$mount = component.context.renderer.mount;
    },
};
INJECTABLES.$timeline = {
    schema: {},
    summon: function (injectees, component, node, timelineName) {
        injectees.$timeline = component.getTimeline(timelineName);
    },
};
INJECTABLES.$clock = {
    schema: {
        destroy: 'function',
        getExplicitTime: 'function',
        getFrameDuration: 'function',
        getTime: 'function',
        setTime: 'function',
        isRunning: 'function',
        run: 'function',
        start: 'function',
        assignOptions: 'function',
    },
    summon: function (injectees, component) {
        injectees.$clock = component.getClock();
    },
};
INJECTABLES.$core = {
    schema: {
        options: Config_1.DEFAULTS,
        timeline: INJECTABLES.$timeline.schema,
        clock: INJECTABLES.$clock.schema,
    },
    summon: function (injectees, component, node, timelineName) {
        injectees.$core = {
            component: component,
            context: component.context,
            options: component.config,
            timeline: component.getTimeline(timelineName),
            clock: component.getClock(),
        };
    },
};
INJECTABLES.$context = {
    schema: {},
    summon: function (injectees, component) {
        injectees.$context = component.context;
    },
};
INJECTABLES.$component = {
    schema: INJECTABLES.$element.schema,
    summon: function (injectees, component) {
        injectees.$component = component;
    },
};
INJECTABLES.$host = {
    schema: {},
    summon: function (injectees, component) {
        injectees.$host = component.host;
    },
};
INJECTABLES.$top = {
    schema: {},
    summon: function (injectees, component) {
        injectees.$host = component.top;
    },
};
INJECTABLES.$state = {
    schema: {},
    summon: function (injectees, component) {
        injectees.$state = component.state;
    },
};
INJECTABLES.$parent = {
    schema: INJECTABLES.$element.schema,
    summon: function (injectees, component, node) {
        injectees.$parent = HaikuElement_1.default.findOrCreateByNode(node).parent;
    },
};
INJECTABLES.$container = {
    schema: INJECTABLES.$element.schema,
    summon: function (injectees, component, node) {
        var element = HaikuElement_1.default.findOrCreateByNode(node);
        injectees.$container = element.owner;
    },
};
INJECTABLES.$children = {
    schema: INJECTABLES.$element.schema.children,
    summon: function (injectees, component, node) {
        injectees.$children = HaikuElement_1.default.findOrCreateByNode(node).children;
    },
};
INJECTABLES.$tree = {
    schema: {
        parent: INJECTABLES.$element.schema,
        chidren: INJECTABLES.$element.schema.children,
        component: INJECTABLES.$element.schema,
        root: INJECTABLES.$element.schema,
        element: INJECTABLES.$element.schema,
    },
    summon: function (injectees, component, node) {
        var element = HaikuElement_1.default.findOrCreateByNode(node);
        injectees.$tree = {
            element: element,
            component: component,
            parent: element.parent,
            children: element.children,
            root: element.owner,
        };
    },
};
INJECTABLES.$user = {
    schema: {
        mouse: {
            x: 'number',
            y: 'number',
            down: 'boolean',
            buttons: [],
        },
        mouches: [],
        keys: {},
        touches: [],
        pan: {
            x: 'number',
            y: 'number',
        },
    },
    summon: function (injectees, component, node) {
        if (component.isLiveMode()) {
            injectees.$user = component.context.getGlobalUserState();
            // If we're inside another component, produce mouse coords in terms
            // of our own coordinate space
            if (component.host) {
                Object.assign(injectees.$user.mouse, component.transformContextPointToLocalPoint(Object.assign({}, injectees.$user.mouse)));
            }
        }
        else {
            injectees.$user = {
                mouse: {
                    x: 1,
                    y: 1,
                    down: 0,
                    buttons: [0, 0, 0],
                },
                pan: {
                    x: 0,
                    y: 0,
                },
                keys: {},
                touches: [],
                mouches: [],
            };
        }
    },
};
var getRepeatHostNode = function (node) {
    if (!node) {
        return;
    }
    if (node.__memory.repeatee) {
        return node;
    }
    return getRepeatHostNode(node.__memory && node.__memory.parent);
};
var getIfHostNode = function (node) {
    if (!node) {
        return;
    }
    if (node.__memory.if) {
        return node;
    }
    return getIfHostNode(node.__memory && node.__memory.parent);
};
INJECTABLES.$flow = {
    schema: {},
    summon: function (injectees, component, node) {
        if (!injectees.$flow) {
            injectees.$flow = {};
        }
        var repeatNode = getRepeatHostNode(node);
        injectees.$flow.repeat = (repeatNode && repeatNode.__memory.repeatee) || {
            instructions: [],
            payload: {},
            source: repeatNode,
            index: 0,
        };
        var ifNode = getIfHostNode(node);
        injectees.$flow.if = (ifNode && ifNode.__memory.if) || {
            answer: null,
        };
        injectees.$flow.placeholder = node.__memory.placeholder || {
            value: null,
            surrogate: null,
        };
    },
};
INJECTABLES.$repeat = {
    schema: {},
    summon: function (injectees, component, node) {
        if (!injectees.$repeat) {
            injectees.$repeat = {};
        }
        var repeatNode = getRepeatHostNode(node);
        injectees.$repeat = (repeatNode && repeatNode.__memory.repeatee) || {
            instructions: [],
            payload: {},
            source: repeatNode,
            index: 0,
        };
    },
};
INJECTABLES.$if = {
    schema: {},
    summon: function (injectees, component, node) {
        if (!injectees.$if) {
            injectees.$if = {};
        }
        var ifNode = getIfHostNode(node);
        injectees.$if = (ifNode && ifNode.__memory.if) || {
            answer: null,
        };
    },
};
INJECTABLES.$placeholder = {
    schema: {},
    summon: function (injectees, component, node) {
        if (!injectees.$placeholder) {
            injectees.$placeholder = {};
        }
        injectees.$placeholder = node.__memory.placeholder || {
            value: null,
            surrogate: null,
        };
    },
};
INJECTABLES.$index = {
    schema: {},
    summon: function (injectees, component, node) {
        var repeatNode = getRepeatHostNode(node);
        injectees.$index = (repeatNode &&
            repeatNode.__memory.repeatee &&
            repeatNode.__memory.repeatee.index) || 0;
    },
};
INJECTABLES.$payload = {
    schema: {},
    summon: function (injectees, component, node) {
        var repeatNode = getRepeatHostNode(node);
        injectees.$payload = (repeatNode &&
            repeatNode.__memory.repeatee &&
            repeatNode.__memory.repeatee.payload) || {};
    },
};
INJECTABLES.$helpers = {
    schema: {
        now: 'function',
        rand: 'function',
        find: 'function',
    },
    summon: function (injectees, component) {
        injectees.$helpers = component.helpers;
    },
};
// List of JavaScript global built-in objects that we want to provide as an injectable.
// In the future, we might end up passing in modified versions of these objects/functions.
var BUILTIN_INJECTABLES = {
    Infinity: Infinity,
    NaN: NaN,
    Object: Object,
    Boolean: Boolean,
    Math: Math,
    Date: Date,
    JSON: JSON,
    Number: Number,
    String: String,
    RegExp: RegExp,
    Array: Array,
    isFinite: isFinite,
    isNaN: isNaN,
    parseFloat: parseFloat,
    parseInt: parseInt,
    decodeURI: decodeURI,
    decodeURIComponent: decodeURIComponent,
    encodeURI: encodeURI,
    encodeURIComponent: encodeURIComponent,
    // escape,
    // unescape,
    Error: Error,
    ReferenceError: ReferenceError,
    SyntaxError: SyntaxError,
    TypeError: TypeError,
    undefined: void (0),
};
var _loop_1 = function (builtinInjectableKey) {
    INJECTABLES[builtinInjectableKey] = {
        summon: function (injectees) {
            injectees[builtinInjectableKey] = BUILTIN_INJECTABLES[builtinInjectableKey];
        },
    };
};
for (var builtinInjectableKey in BUILTIN_INJECTABLES) {
    _loop_1(builtinInjectableKey);
}
/**
 * When evaluating expressions written by the user, don't crash everything.
 * Log the error (but only once, since we're animating) and then return a
 * fairly safe all-purpose value (1).
 */
var safeCall = function (fn, hostInstance, hostStates) {
    try {
        return fn.call(hostInstance, hostStates);
    }
    catch (exception) {
        consoleErrorOnce_1.default(exception);
        return 1;
    }
};
var safeApply = function (fn, hostInstance, summoneesArray) {
    try {
        return fn.apply(hostInstance, summoneesArray);
    }
    catch (exception) {
        consoleErrorOnce_1.default(exception);
        return 1;
    }
};
var areSummoneesDifferent = function (previous, incoming) {
    if (Array.isArray(previous) && Array.isArray(incoming)) {
        if (previous.length !== incoming.length) {
            return true;
        }
        // Do a shallow comparison of elements. We don't go deep because:
        //   - It easily becomes too expensive to do this while rendering
        //   - We can avoid needing to check for recursion
        for (var i = 0; i < previous.length; i++) {
            // Assume that objects are different since we don't want to do a deep comparison
            if (previous[i] && typeof previous[i] === 'object') {
                return true;
            }
            if (previous[i] !== incoming[i]) {
                return true;
            }
        }
        for (var j = 0; j < previous.length; j++) {
            // Assume that objects are different since we don't want to do a deep comparison
            if (incoming[j] && typeof incoming[j] === 'object') {
                return true;
            }
            if (incoming[j] !== previous[j]) {
                return true;
            }
        }
        return false;
    }
    if (typeof previous === OBJECT && typeof incoming === OBJECT) {
        if (previous === null && incoming === null) {
            return false;
        }
        if (previous === null) {
            return true;
        }
        if (incoming === null) {
            return true;
        }
        // Do a shallow comparison of properties. We don't go deep because:
        //   - It easily becomes too expensive to do this while rendering
        //   - We can avoid needing to check for recursion
        for (var pkey in previous) {
            if (previous[pkey] !== incoming[pkey]) {
                return true;
            }
        }
        for (var ikey in incoming) {
            if (incoming[ikey] !== previous[ikey]) {
                return true;
            }
        }
        return false;
    }
    return previous !== incoming;
};
var stringToInt = function (str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
};
//# sourceMappingURL=HaikuComponent.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuContext.js":
/*!******************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuContext.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = __webpack_require__(/*! ./Config */ "./node_modules/@haiku/core/lib/Config.js");
var HaikuBase_1 = __webpack_require__(/*! ./HaikuBase */ "./node_modules/@haiku/core/lib/HaikuBase.js");
var HaikuClock_1 = __webpack_require__(/*! ./HaikuClock */ "./node_modules/@haiku/core/lib/HaikuClock.js");
var HaikuComponent_1 = __webpack_require__(/*! ./HaikuComponent */ "./node_modules/@haiku/core/lib/HaikuComponent.js");
var pkg = __webpack_require__(/*! ./../package.json */ "./node_modules/@haiku/core/package.json");
var VERSION = pkg.version;
/**
 * @class HaikuContext
 * @description Represents the root of a Haiku component tree within an application.
 * A Haiku component tree may contain many components, but there is only one context.
 * The context is where information shared by all components in the tree should go, e.g. clock time.
 */
// tslint:disable:variable-name
var HaikuContext = /** @class */ (function (_super) {
    __extends(HaikuContext, _super);
    function HaikuContext(mount, renderer, platform, bytecode, config) {
        var _this = _super.call(this) || this;
        if (!renderer) {
            throw new Error('Context requires a renderer');
        }
        if (!bytecode) {
            throw new Error('Context requires bytecode');
        }
        _this.PLAYER_VERSION = VERSION; // #LEGACY
        _this.CORE_VERSION = VERSION;
        _this.assignConfig(config || {}, null);
        _this.mount = mount;
        // Make some Haiku internals available on the mount object for hot editing hooks, or for debugging convenience.
        if (_this.mount && !_this.mount.haiku) {
            _this.mount.haiku = {
                context: _this,
            };
        }
        _this.renderer = renderer;
        // Initialize sets up top-level dom listeners so we don't run it if we don't have a mount
        if (_this.mount && _this.renderer.initialize) {
            _this.renderer.initialize();
        }
        _this.platform = platform;
        // List of tickable objects managed by this context. These are invoked on every clock tick.
        // These are removed when context unmounts and re-added in case of re-mount
        _this.tickables = [];
        // Our own tick method is the main driver for animation inside of this context
        _this.tickables.push({ performTick: _this.tick.bind(_this) });
        if (_this.config.frame) {
            _this.tickables.push({ performTick: _this.config.frame });
        }
        _this.clock = new HaikuClock_1.default(_this.tickables, _this.config.clock || {});
        // We need to start the loop even if we aren't autoplaying,
        // because we still need time to be calculated even if we don't 'tick'.
        _this.clock.run();
        _this.container = _this.renderer.createContainer({
            elementName: bytecode,
            attributes: {},
            children: [bytecode.template],
        });
        _this.component = new HaikuComponent_1.default(bytecode, _this, // context
        null, // host
        _this.config, _this.container);
        // If configured, bootstrap the Haiku right-click context menu
        if (_this.mount && _this.renderer.menuize && _this.config.contextMenu !== 'disabled') {
            _this.renderer.menuize(_this.component);
        }
        // By default, Haiku tracks usage by transmitting component metadata to Mixpanel when initialized.
        // Developers can disable this by setting the `mixpanel` option to a falsy value.
        // To transmit metadata to your own Mixpanel account, set the `mixpanel` option to your Mixpanel API token.
        // Don't set up Mixpanel if we're running on localhost since we don't want test data to be tracked
        if (_this.mount &&
            _this.platform &&
            _this.platform.location &&
            _this.platform.location.hostname !== 'localhost' &&
            _this.platform.location.hostname !== '0.0.0.0') {
            // If configured, initialize Mixpanel with the given API token
            if (_this.renderer.mixpanel && _this.config.mixpanel) {
                _this.renderer.mixpanel(_this.config.mixpanel, _this.component);
            }
        }
        // Just a counter for the number of clock ticks that have occurred; used to determine first-frame for mounting
        _this.ticks = 0;
        // Assuming the user wants the app to mount immediately (the default), let's do the mount.
        if (_this.config.automount) {
            // Starting the clock has the effect of doing a render at time 0, a.k.a., mounting!
            _this.component.getClock().start();
        }
        return _this;
    }
    /**
     * @method getRootComponent
     * @description Returns the HaikuComponent managed by this context.
     */
    HaikuContext.prototype.getRootComponent = function () {
        return this.component;
    };
    /**
     * @method getClock
     * @description Returns the HaikuClock instance associated with this context.
     */
    HaikuContext.prototype.getClock = function () {
        return this.clock;
    };
    /**
     * @method contextMount
     * @description Adds this context the global update loop.
     */
    HaikuContext.prototype.contextMount = function () {
        if (this.unmountedTickables) {
            // Gotta remember to _remove_ the tickables so we don't end up with dupes if we re-mount later
            var unmounted = this.unmountedTickables.splice(0);
            for (var i = 0; i < unmounted.length; i++) {
                this.addTickable(unmounted[i]);
            }
        }
    };
    /**
     * @method contextUnmount
     * @description Removes this context from global update loop.
     */
    HaikuContext.prototype.contextUnmount = function () {
        this.unmountedTickables = this.tickables.splice(0);
    };
    HaikuContext.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.component.destroy();
        this.renderer.destroy();
        this.clock.destroy();
    };
    /**
     * @method addTickable
     * @description Add a tickable object to the list of those that will be called on every clock tick.
     * This only adds if the given object isn't already present in the list.
     */
    HaikuContext.prototype.addTickable = function (tickable) {
        var alreadyAdded = false;
        for (var i = 0; i < this.tickables.length; i++) {
            if (tickable === this.tickables[i]) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) {
            this.tickables.push(tickable);
        }
    };
    /**
     * @method assignConfig
     * @description Updates internal configuration options, assigning those passed in.
     * Also updates the configuration of the clock instance and managed component instance.
     */
    HaikuContext.prototype.assignConfig = function (config, options) {
        this.config = __assign({}, config);
        if (this.clock) { // This method may run before the clock is initialized
            this.clock.assignOptions(this.config.clock);
        }
        if (this.component) { // This method may run before the managed component is initialized
            if (!options || !options.skipComponentAssign) { // Avoid an infinite loop if the managed component is updating us
                this.component.assignConfig(this.config);
            }
        }
    };
    /**
     * @method getContainer
     * @description Returns the container, a virtual-element-like object that provides sizing
     * constraints at the topmost/outermost level from which the descendant layout can be calculated.
     */
    HaikuContext.prototype.getContainer = function (doForceRecalc) {
        if (doForceRecalc === void 0) { doForceRecalc = false; }
        if (doForceRecalc || this.renderer.shouldCreateContainer) {
            this.renderer.createContainer(this.container); // The container is mutated in place
        }
        return this.container;
    };
    /**
     * @method performFullFlushRender
     * @description Updates the entire component tree, flushing updates to the rendering medium.
     */
    HaikuContext.prototype.performFullFlushRender = function () {
        if (!this.mount) {
            return;
        }
        this.component.performFullFlushRenderWithRenderer(this.renderer, this.config);
    };
    /**
     * @method performPatchRender
     * @description Updates the component tree, but only updating properties we know have changed.
     */
    HaikuContext.prototype.performPatchRender = function (skipCache) {
        if (skipCache === void 0) { skipCache = false; }
        if (!this.mount) {
            return;
        }
        this.component.performPatchRenderWithRenderer(this.renderer, this.config, skipCache);
    };
    /**
     * @method updateMountRootStyles
     * @description Reconciles the properties of the rendering medium's mount element with any
     * configuration options that have been passed in, e.g. CSS overflow settings.
     */
    HaikuContext.prototype.updateMountRootStyles = function () {
        if (!this.mount) {
            return;
        }
        // We can assume the mount has only one child since we only mount one component into it (#?)
        var root = this.mount && this.mount.children[0];
        if (root) {
            if (this.config.position && root.style.position !== this.config.position) {
                root.style.position = this.config.position;
            }
            if (this.config.overflow) {
                root.style.overflow = this.config.overflow;
            }
            else {
                if (this.config.overflowX &&
                    root.style.overflowX !== this.config.overflowX) {
                    root.style.overflowX = this.config.overflowX;
                }
                if (this.config.overflowY &&
                    root.style.overflowY !== this.config.overflowY) {
                    root.style.overflowY = this.config.overflowY;
                }
            }
        }
    };
    /**
     * @method tick
     * @description Advances the component animation by one tick. Note that one tick is not necessarily
     * equivalent to one frame. If the animation frame loop is running too fast, the clock may wait before
     * incrementing the frame number. In other words, a tick implies an update but not necessarily a change.
     */
    HaikuContext.prototype.tick = function (skipCache) {
        var _this = this;
        if (skipCache === void 0) { skipCache = false; }
        try {
            var flushed = false;
            // Only continue ticking and updating if our root component is still activated and awake;
            // this is mainly a hacky internal hook used during hot editing inside Haiku Desktop
            if (!this.component.isDeactivated && !this.component.isSleeping) {
                // This incrementation MUST occur before the blocks below, especially #callRemount,
                // because #callRemount (and friends?) may result in a 'component:will-mount' action
                // firing, which in turn may call this.pause()/this.gotoAndStop(). Internally those
                // methods rely on #tick(), which means they can result in an infinite remount loop.
                var ticks = this.ticks;
                this.ticks++;
                // Perform any necessary updates that have to occur in all copmonents in the scene
                this.component.visitGuestHierarchy(function (component) {
                    // State transitions are bound to clock time, so we update them on every tick
                    component.tickStateTransitions();
                    // The top-level component isn't controlled through playback status, so we must skip it
                    // otherwise its behavior will not reflect the playback setting specified via options
                    if (component === _this.component) {
                        return;
                    }
                });
                // After we've hydrated the tree the first time, we can proceed with patches --
                // unless the component indicates it wants a full flush per its internal settings.
                if (this.component.shouldPerformFullFlush() || this.config.forceFlush || ticks < 1) {
                    this.performFullFlushRender();
                    flushed = true;
                }
                else {
                    this.performPatchRender(skipCache);
                }
                // We update the mount root *after* we complete the render pass because configuration
                // from the top level should unset anything that the component set.
                // Specifically important wrt overflow, where the component probably defines
                // overflowX/overflowY: hidden, but our configuration might define them as visible.
                this.updateMountRootStyles();
                // Do any initialization that may need to occur if we happen to be on the very first tick
                if (ticks < 1) {
                    // If this is the 0th (first) tick, notify anybody listening that we've mounted
                    // If we've already flushed, _don't_ request to trigger a re-flush (second arg)
                    this.component.callRemount(null, flushed);
                }
            }
        }
        catch (exception) {
            console.warn('[haiku core] caught error during tick', exception);
            if (this.component) {
                this.component.deactivate();
            }
        }
    };
    /**
     * @method getGlobalUserState
     * @description Since the core renderer is medium-agnostic, we rely on the renderer to provide data
     * about the current user (the mouse position, for example). This method is just a convenience wrapper.
     */
    HaikuContext.prototype.getGlobalUserState = function () {
        return this.renderer && this.renderer.getUser && this.renderer.getUser();
    };
    /**
     * @function createComponentFactory
     * @description Returns a factory function that can create a HaikuComponent and run it upon a mount.
     * The created instance runs using the passed-in renderer, bytecode, options, and platform.
     */
    HaikuContext.createComponentFactory = function (rendererClass, bytecode, haikuConfigFromFactoryCreator, platform) {
        if (!rendererClass) {
            throw new Error('A runtime renderer class object is required');
        }
        if (!bytecode) {
            throw new Error('A runtime `bytecode` object is required');
        }
        // Note that haiku Config may be passed at this level, or below at the factory invocation level.
        var haikuConfigFromTop = Config_1.default.build({
            // The seed value should remain constant from here on, because it is used for PRNG
            seed: Config_1.default.seed(),
            // The now-value is used to compute a current date with respect to the current time
            timestamp: Date.now(),
        }, 
        // The bytecode itself may contain configuration for playback, etc., but is lower precedence than config passed in
        bytecode && bytecode.options, haikuConfigFromFactoryCreator);
        /**
         * @function HaikuComponentFactory
         * @description Creates a HaikuContext instance, with a component, and returns the component.
         * The (renderer, bytecode) pair are bootstrapped into the given mount element, and played.
         */
        var HaikuComponentFactory = function (mount, haikuConfigFromFactory) {
            // Merge any config received "late" with the config we might have already gotten during bootstrapping
            var haikuConfigMerged = Config_1.default.build(haikuConfigFromTop, haikuConfigFromFactory);
            // Previously these were initialized in the scope above, but I moved them here which seemed to resolve
            // an initialization/mounting issue when running in React.
            var renderer = new rendererClass(mount, haikuConfigMerged);
            var context = new HaikuContext(mount, renderer, platform, bytecode, haikuConfigMerged);
            var component = context.getRootComponent();
            // These properties are added for convenience as hot editing hooks inside Haiku Desktop (and elsewhere?).
            // It's a bit hacky to just expose these in this way, but it proves pretty convenient downstream.
            HaikuComponentFactory.bytecode = bytecode;
            HaikuComponentFactory.renderer = renderer;
            // Note that these ones could theoretically change if this factory was called more than once; use with care
            HaikuComponentFactory.mount = mount;
            HaikuComponentFactory.context = context;
            HaikuComponentFactory.component = component;
            // Finally, return the HaikuComponent instance which can also be used for programmatic behavior
            return component;
        };
        HaikuComponentFactory.PLAYER_VERSION = VERSION; // #LEGACY
        HaikuComponentFactory.CORE_VERSION = VERSION;
        return HaikuComponentFactory;
    };
    // Also expose so we can programatically choose an instance on the page
    HaikuContext.PLAYER_VERSION = VERSION; // #LEGACY
    HaikuContext.CORE_VERSION = VERSION; // #LEGACY
    HaikuContext.__name__ = 'HaikuContext';
    return HaikuContext;
}(HaikuBase_1.default));
exports.default = HaikuContext;
//# sourceMappingURL=HaikuContext.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuElement.js":
/*!******************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuElement.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuBase_1 = __webpack_require__(/*! ./HaikuBase */ "./node_modules/@haiku/core/lib/HaikuBase.js");
var HaikuNode_1 = __webpack_require__(/*! ./HaikuNode */ "./node_modules/@haiku/core/lib/HaikuNode.js");
var Layout3D_1 = __webpack_require__(/*! ./Layout3D */ "./node_modules/@haiku/core/lib/Layout3D.js");
exports.HAIKU_ID_ATTRIBUTE = 'haiku-id';
exports.HAIKU_TITLE_ATTRIBUTE = 'haiku-title';
exports.HAIKU_VAR_ATTRIBUTE = 'haiku-var';
exports.HAIKU_SOURCE_ATTRIBUTE = 'haiku-source';
exports.HAIKU_LOCKED_ATTRIBUTE = 'haiku-locked';
var SVG_PRIMITIVE_NAMES = {
    rect: true,
    line: true,
    circle: true,
    ellipse: true,
    path: true,
    polygon: true,
    polyline: true,
};
var DEFAULT_DEPTH = 0;
var DEFAULT_TAG_NAME = 'div';
var COMPONENT_PSEUDO_TAG_NAME = DEFAULT_TAG_NAME;
var SIZING_AXES = ['x', 'y', 'z'];
var TEXT_PSEUDO_TAG_NAME = '__text__';
var CSS_QUERY_MAPPING = {
    name: 'elementName',
    attributes: 'attributes',
    children: 'children',
};
var LAYOUT_DEFAULTS = Layout3D_1.default.createLayoutSpec();
var HaikuElement = /** @class */ (function (_super) {
    __extends(HaikuElement, _super);
    function HaikuElement() {
        var _this = _super.call(this) || this;
        _this.isHovered = false;
        return _this;
    }
    Object.defineProperty(HaikuElement.prototype, "childNodes", {
        get: function () {
            return (this.node &&
                ((this.memory && this.memory.children) || this.node.children)) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "children", {
        get: function () {
            return this.childNodes.map(function (childNode) {
                return HaikuElement.findOrCreateByNode(childNode);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "attributes", {
        get: function () {
            return (this.node && this.node.attributes) || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "type", {
        get: function () {
            return (this.node && this.node.elementName) || DEFAULT_TAG_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "title", {
        get: function () {
            return this.attributes[exports.HAIKU_TITLE_ATTRIBUTE];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "source", {
        get: function () {
            return this.attributes[exports.HAIKU_SOURCE_ATTRIBUTE];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "id", {
        get: function () {
            return this.attributes.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "className", {
        get: function () {
            return this.attributes.class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "tagName", {
        get: function () {
            if (this.isTextNode()) {
                return TEXT_PSEUDO_TAG_NAME;
            }
            if (this.isComponent()) {
                return COMPONENT_PSEUDO_TAG_NAME;
            }
            return this.type || DEFAULT_TAG_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "nodeType", {
        get: function () {
            if (this.isTextNode()) {
                return 3;
            }
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "subcomponent", {
        /**
         * @method subcomponent
         * @description Returns the HaikuComponent instance that manages nodes below this one.
         * This node is considered the 'wrapper' node and its child is considered the 'root'.
         */
        get: function () {
            return this.memory && this.memory.subcomponent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "instance", {
        /**
         * @method instance
         * @description Returns the HaikuComponent instance that manages this node and those beneath.
         * This node is considered the 'root' node of the instance.
         */
        get: function () {
            return this.memory && this.memory.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "containee", {
        /**
         * @method containee
         * @description Returns the HaikuComponent instance into which this node was passed as a container.
         */
        get: function () {
            return this.memory && this.memory.containee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "owner", {
        get: function () {
            if (this.instance) {
                return this.instance;
            }
            return this.parent && this.parent.owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "top", {
        get: function () {
            return this.instanceContext && this.instanceContext.component;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "instanceContext", {
        get: function () {
            return this.memory && this.memory.context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "parentNode", {
        get: function () {
            return this.memory && this.memory.parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "memory", {
        get: function () {
            return this.node && this.node.__memory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "parent", {
        get: function () {
            return this.parentNode && HaikuElement.findOrCreateByNode(this.parentNode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "layout", {
        get: function () {
            return this.node && this.node.layout && this.node.layout.computed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "layoutMatrix", {
        get: function () {
            return (this.layout && this.layout.matrix) || Layout3D_1.default.createMatrix();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "layoutAncestry", {
        get: function () {
            var ancestry = [];
            if (this.layout) {
                ancestry.unshift(this.layout);
            }
            // tslint:disable-next-line:no-this-assignment
            var ancestor = this;
            while (ancestor.parent) {
                ancestor = ancestor.parent;
                var layout = ancestor.layout;
                if (layout) {
                    ancestry.unshift(layout);
                }
            }
            return ancestry;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "layoutAncestryMatrices", {
        get: function () {
            return this.layoutAncestry.filter(function (layout) { return !!layout.matrix; }).map(function (layout) { return layout.matrix; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "rootSVG", {
        get: function () {
            var parent = this.parent;
            while (parent) {
                if (parent.type === 'svg') {
                    return parent;
                }
                parent = parent.parent;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "isChildOfDefs", {
        get: function () {
            var parent = this.parent;
            while (parent) {
                if (parent.type === 'defs') {
                    return true;
                }
                parent = parent.parent;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    HaikuElement.prototype.getTranscludedElement = function () {
        if (this.type !== 'use') {
            return this;
        }
        var href = this.attributes['xlink:href'] || this.attributes.href;
        if (!href) {
            return;
        }
        var rootSVG = this.rootSVG;
        if (!rootSVG) {
            return;
        }
        var address = href.substr(1);
        var out;
        this.rootSVG.visit(function (desc) {
            if (desc.id === address) {
                out = desc;
                return false;
            }
        });
        return out;
    };
    Object.defineProperty(HaikuElement.prototype, "rawLayout", {
        get: function () {
            return this.node && this.node.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "shown", {
        get: function () {
            return this.layout && this.layout.shown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "opacity", {
        get: function () {
            return this.layout && this.layout.opacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "shear", {
        get: function () {
            return this.layout && this.layout.shear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "matrix", {
        get: function () {
            return this.layout && this.layout.matrix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "translation", {
        get: function () {
            return (this.layout && this.layout.translation) || __assign({}, LAYOUT_DEFAULTS.translation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "rotation", {
        get: function () {
            return (this.layout && this.layout.rotation) || __assign({}, LAYOUT_DEFAULTS.rotation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "scale", {
        get: function () {
            return (this.layout && this.layout.scale) || __assign({}, LAYOUT_DEFAULTS.scale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "origin", {
        get: function () {
            return (this.layout && this.layout.origin) || __assign({}, LAYOUT_DEFAULTS.origin);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "offset", {
        get: function () {
            return (this.layout && this.layout.offset) || __assign({}, LAYOUT_DEFAULTS.offset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "targets", {
        get: function () {
            return (this.memory && this.memory.targets) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "target", {
        get: function () {
            // Assume the most recently added target is the canonical target due to an implementation
            // detail in the Haiku editing environment; FIXME. On 3 Jun 2018 was changed from the first
            // added to the last added one to fix a bug related to ungrouping
            return this.targets[this.targets.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "rotationX", {
        get: function () {
            return this.rotation && this.rotation.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "rotationY", {
        get: function () {
            return this.rotation && this.rotation.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "rotationZ", {
        get: function () {
            return this.rotation && this.rotation.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "scaleX", {
        get: function () {
            return this.scale && this.scale.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "scaleY", {
        get: function () {
            return this.scale && this.scale.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "scaleZ", {
        get: function () {
            return this.scale && this.scale.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "positionX", {
        get: function () {
            return this.translation && this.translation.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "positionY", {
        get: function () {
            return this.translation && this.translation.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "positionZ", {
        get: function () {
            return this.translation && this.translation.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "translationX", {
        get: function () {
            return this.translation && this.translation.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "translationY", {
        get: function () {
            return this.translation && this.translation.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "translationZ", {
        get: function () {
            return this.translation && this.translation.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "originX", {
        get: function () {
            return this.origin && this.origin.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "originY", {
        get: function () {
            return this.origin && this.origin.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "originZ", {
        get: function () {
            return this.origin && this.origin.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "offsetX", {
        get: function () {
            return this.offset && this.offset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "offsetY", {
        get: function () {
            return this.offset && this.offset.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "offsetZ", {
        get: function () {
            return this.offset && this.offset.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizePrecomputed", {
        /**
         * @description Returns the size as computed when the layout was last rendered.
         */
        get: function () {
            return this.layout && this.layout.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizePrecomputedX", {
        get: function () {
            return this.sizePrecomputed && this.sizePrecomputed.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizePrecomputedY", {
        get: function () {
            return this.sizePrecomputed && this.sizePrecomputed.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizePrecomputedZ", {
        get: function () {
            return this.sizePrecomputed && this.sizePrecomputed.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "size", {
        get: function () {
            return {
                x: this.sizeX,
                y: this.sizeY,
                z: this.sizeZ,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeX", {
        get: function () {
            return this.computeSizeX();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeY", {
        get: function () {
            return this.computeSizeY();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeZ", {
        get: function () {
            return this.computeSizeZ();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "width", {
        get: function () {
            return this.sizeX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "height", {
        get: function () {
            return this.sizeY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "depth", {
        get: function () {
            return this.sizeZ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "attributeWidth", {
        get: function () {
            if (this.attributes && this.attributes.width) {
                return Number(this.attributes.width);
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "attributeHeight", {
        get: function () {
            if (this.attributes && this.attributes.height) {
                return Number(this.attributes.height);
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeAbsolute", {
        get: function () {
            return (this.rawLayout && this.rawLayout.sizeAbsolute) || __assign({}, LAYOUT_DEFAULTS.sizeAbsolute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeAbsoluteX", {
        get: function () {
            return this.sizeAbsolute && this.sizeAbsolute.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeAbsoluteY", {
        get: function () {
            return this.sizeAbsolute && this.sizeAbsolute.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeAbsoluteZ", {
        get: function () {
            return this.sizeAbsolute && this.sizeAbsolute.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeMode", {
        get: function () {
            return this.rawLayout && this.rawLayout.sizeMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeModeX", {
        get: function () {
            return this.sizeMode && this.sizeMode.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeModeY", {
        get: function () {
            return this.sizeMode && this.sizeMode.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeModeZ", {
        get: function () {
            return this.sizeMode && this.sizeMode.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeProportional", {
        get: function () {
            return (this.rawLayout && this.rawLayout.sizeProportional) || __assign({}, LAYOUT_DEFAULTS.sizeProportional);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeProportionalX", {
        get: function () {
            return this.sizeProportional && this.sizeProportional.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeProportionalY", {
        get: function () {
            return this.sizeProportional && this.sizeProportional.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeProportionalZ", {
        get: function () {
            return this.sizeProportional && this.sizeProportional.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeDifferential", {
        get: function () {
            return (this.rawLayout && this.rawLayout.sizeDifferential) || __assign({}, LAYOUT_DEFAULTS.sizeDifferential);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeDifferentialX", {
        get: function () {
            return this.sizeDifferential && this.sizeDifferential.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeDifferentialY", {
        get: function () {
            return this.sizeDifferential && this.sizeDifferential.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "sizeDifferentialZ", {
        get: function () {
            return this.sizeDifferential && this.sizeDifferential.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "properties", {
        get: function () {
            return {
                shown: this.shown,
                opacity: this.opacity,
                offset: this.offset,
                origin: this.origin,
                translation: this.translation,
                rotation: this.rotation,
                scale: this.scale,
                shear: this.shear,
                sizeMode: this.sizeMode,
                sizeProportional: this.sizeProportional,
                sizeDifferential: this.sizeDifferential,
                sizeAbsolute: this.sizeAbsolute,
                size: this.size,
                matrix: this.matrix,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuElement.prototype, "componentId", {
        get: function () {
            return this.getComponentId();
        },
        enumerable: true,
        configurable: true
    });
    HaikuElement.prototype.computeSize = function () {
        return {
            x: this.computeSizeX(),
            y: this.computeSizeY(),
            z: this.computeSizeZ(),
        };
    };
    HaikuElement.prototype.computeBoundsForAxis = function (axis) {
        if (axis === 'x') {
            return this.computeContentBoundsX();
        }
        if (axis === 'y') {
            return this.computeContentBoundsY();
        }
        if (axis === 'z') {
            return this.computeContentBoundsZ();
        }
    };
    HaikuElement.prototype.computeContentBounds = function () {
        return __assign({}, this.computeContentBoundsX(), this.computeContentBoundsY(), this.computeContentBoundsZ());
    };
    HaikuElement.prototype.computeContentBoundsX = function () {
        if (typeof this.sizeAbsolute.x === 'number') {
            return {
                left: null,
                right: null,
            };
        }
        var lefts = [];
        var rights = [];
        var children = this.children;
        if (children.length < 1) {
            return {
                left: null,
                right: null,
            };
        }
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            // These fields should account for the child's translation, rotation, scale, etc.
            var _a = child.getLocallyTransformedBoundingClientRect(), left = _a.left, right = _a.right;
            lefts.push(left);
            rights.push(right);
        }
        return {
            left: Math.min.apply(Math, lefts),
            right: Math.max.apply(Math, rights),
        };
    };
    HaikuElement.prototype.computeContentBoundsY = function () {
        if (typeof this.sizeAbsolute.y === 'number') {
            return {
                top: null,
                bottom: null,
            };
        }
        var tops = [];
        var bottoms = [];
        var children = this.children;
        if (children.length < 1) {
            return {
                top: null,
                bottom: null,
            };
        }
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            // These fields should account for the child's translation, rotation, scale, etc.
            var _a = child.getLocallyTransformedBoundingClientRect(), top_1 = _a.top, bottom = _a.bottom;
            tops.push(top_1);
            bottoms.push(bottom);
        }
        return {
            top: Math.min.apply(Math, tops),
            bottom: Math.max.apply(Math, bottoms),
        };
    };
    HaikuElement.prototype.computeContentBoundsZ = function () {
        return {
            front: null,
            back: null,
        };
    };
    HaikuElement.prototype.computeSizeForAxis = function (axis) {
        if (axis === 'x') {
            return this.computeSizeX();
        }
        if (axis === 'y') {
            return this.computeSizeY();
        }
        if (axis === 'z') {
            return this.computeSizeZ();
        }
    };
    /**
     * @description For elements that only have a single child, we can save some computation
     * by looking up their defined absolute size instead of computing their bounding box.
     * In particular this is useful in the case of the component wrapper div and its one child.
     */
    HaikuElement.prototype.getOnlyChildSize = function (axis) {
        var children = this.children;
        if (children.length !== 1) {
            return;
        }
        var child = children[0];
        if (!child || typeof child !== 'object') {
            return;
        }
        if (typeof child.sizeAbsolute[axis] === 'number') {
            return child.sizeAbsolute[axis];
        }
        return child.getOnlyChildSize(axis);
    };
    HaikuElement.prototype.computeSizeX = function () {
        // SVG primitives use native SVG layout instead of our system
        if (this.isSvgPrimitive() && typeof this.attributeWidth === 'number') {
            return this.attributeWidth;
        }
        if (typeof this.sizeAbsolute.x === 'number') {
            return this.sizeAbsolute.x;
        }
        var onlyChildSize = this.getOnlyChildSize('x');
        if (typeof onlyChildSize === 'number') {
            return onlyChildSize;
        }
        var _a = this.computeContentBoundsX(), left = _a.left, right = _a.right;
        return right - left;
    };
    HaikuElement.prototype.computeSizeY = function () {
        // SVG primitives use native SVG layout instead of our system
        if (this.isSvgPrimitive() && typeof this.attributeHeight === 'number') {
            return this.attributeHeight;
        }
        if (typeof this.sizeAbsolute.y === 'number') {
            return this.sizeAbsolute.y;
        }
        var onlyChildSize = this.getOnlyChildSize('y');
        if (typeof onlyChildSize === 'number') {
            return onlyChildSize;
        }
        var _a = this.computeContentBoundsY(), top = _a.top, bottom = _a.bottom;
        return bottom - top;
    };
    HaikuElement.prototype.computeSizeZ = function () {
        if (typeof this.sizeAbsolute.z === 'number') {
            return this.sizeAbsolute.z;
        }
        var onlyChildSize = this.getOnlyChildSize('z');
        if (typeof onlyChildSize === 'number') {
            return onlyChildSize;
        }
        var _a = this.computeContentBoundsZ(), front = _a.front, back = _a.back;
        return back - front;
    };
    HaikuElement.prototype.getComponentId = function () {
        return this.attributes[exports.HAIKU_ID_ATTRIBUTE];
    };
    HaikuElement.prototype.isSimpleNode = function () {
        return !this.isComponent();
    };
    HaikuElement.prototype.isTextNode = function () {
        return typeof this.node !== 'object';
    };
    HaikuElement.prototype.isComponent = function () {
        return !!this.instance;
    };
    HaikuElement.prototype.isWrapper = function () {
        return !!this.subcomponent;
    };
    HaikuElement.prototype.isSvgPrimitive = function () {
        return !!SVG_PRIMITIVE_NAMES[this.tagName];
    };
    HaikuElement.prototype.componentMatches = function (selector) {
        if (!this.isComponent()) {
            return false;
        }
        var trimmed = selector.trim();
        var source = this.source;
        var title = this.title;
        var id = this.id;
        return (trimmed === COMPONENT_PSEUDO_TAG_NAME ||
            trimmed === source ||
            trimmed === title ||
            trimmed === id);
    };
    HaikuElement.prototype.matches = function (selector) {
        return (this.componentMatches(selector) ||
            HaikuNode_1.cssMatchOne(this.node, selector, CSS_QUERY_MAPPING));
    };
    HaikuElement.prototype.visit = function (iteratee, filter) {
        var result = iteratee(this);
        if (result !== false) {
            return this.visitDescendants(iteratee, filter);
        }
        return result;
    };
    HaikuElement.prototype.visitDescendants = function (iteratee, filter) {
        if (this.parent && this.parent.isWrapper()) {
            // Avoids traversing down into a subcomponent.
            return true;
        }
        var children = filter ? this.children.filter(filter) : this.children;
        for (var i = 0; i < children.length; i++) {
            var result = children[i].visit(iteratee, filter);
            if (result === false) {
                return result;
            }
        }
        return true;
    };
    HaikuElement.prototype.querySelector = function (selector) {
        var _this = this;
        return this.cacheFetch("querySelector:" + selector, function () {
            var out;
            _this.visitDescendants(function (element) {
                if (element.matches(selector)) {
                    out = element;
                    // Returning `false` short-circuits the visitor
                    return false;
                }
            });
            return out;
        });
    };
    HaikuElement.prototype.querySelectorAll = function (selector) {
        var _this = this;
        return this.cacheFetch("querySelectorAll:" + selector, function () {
            var out = [];
            _this.visitDescendants(function (element) {
                if (element.matches(selector)) {
                    out.push(element);
                }
            });
            return out;
        });
    };
    HaikuElement.prototype.getRawBoundingBoxPoints = function () {
        var _a = this.computeSize(), x = _a.x, y = _a.y;
        return [
            { x: 0, y: 0, z: 0 }, { x: x / 2, y: 0, z: 0 }, { x: x, y: 0, z: 0 },
            { x: 0, y: y / 2, z: 0 }, { x: x / 2, y: y / 2, z: 0 }, { x: x, y: y / 2, z: 0 },
            { y: y, x: 0, z: 0 }, { y: y, x: x / 2, z: 0 }, { y: y, x: x, z: 0 },
        ];
    };
    HaikuElement.prototype.getLocallyTransformedBoundingBoxPoints = function () {
        return HaikuElement.transformPointsInPlace(this.getRawBoundingBoxPoints(), HaikuElement.computeLayout(this.node, null).matrix);
    };
    HaikuElement.prototype.getLocallyTransformedBoundingClientRect = function () {
        var points = this.getLocallyTransformedBoundingBoxPoints();
        return HaikuElement.getRectFromPoints(points);
    };
    HaikuElement.prototype.getNearestDefinedNonZeroAncestorSizeX = function () {
        var x = this.sizeAbsolute.x;
        if (typeof x === 'number' && x > 0) {
            return x;
        }
        if (this.parent) {
            return this.parent.getNearestDefinedNonZeroAncestorSizeX();
        }
        return 1;
    };
    HaikuElement.prototype.getNearestDefinedNonZeroAncestorSizeY = function () {
        var y = this.sizeAbsolute.y;
        if (typeof y === 'number' && y > 0) {
            return y;
        }
        if (this.parent) {
            return this.parent.getNearestDefinedNonZeroAncestorSizeY();
        }
        return 1;
    };
    HaikuElement.prototype.getNearestDefinedNonZeroAncestorSizeZ = function () {
        var z = this.sizeAbsolute.z;
        if (typeof z === 'number' && z > 0) {
            return z;
        }
        if (this.parent) {
            return this.parent.getNearestDefinedNonZeroAncestorSizeZ();
        }
        return 1;
    };
    HaikuElement.prototype.triggerHover = function (event) {
        var manager = this.top;
        // In case of the root container of a render tree
        if (!manager) {
            manager = this.containee;
        }
        // Not sure how we'd get here, but if we do, skip this process
        if (!manager || manager.isDeactivated) {
            return;
        }
        // tslint:disable-next-line:no-this-assignment
        var hoverable = this;
        // If no last hovered element, there's nothing to unhover.
        var mustUnhover = manager.lastHoveredElement !== undefined;
        var hovers = [];
        while (hoverable) {
            // If the last hovered element is an ancestor,
            // we _don't_ want to unhover it—that's the
            // annoying browser behavior we're trying to
            // "fix" in the first place.
            if (mustUnhover && manager.lastHoveredElement === hoverable) {
                mustUnhover = false;
            }
            // If we are hovered here, by virtue of this algorithm we are hovered above.
            if (hoverable.isHovered) {
                break;
            }
            hovers.push(hoverable);
            hoverable.isHovered = true;
            hoverable = hoverable.parent;
        }
        hovers.forEach(function (hov) {
            var delegator = HaikuElement.getElementEventDelegator(hov);
            if (delegator && !delegator.isDeactivated) {
                delegator.routeEventToHandlerAndEmitWithoutBubblingAndWithoutGlobalHandlers(hov.selector, 'hover', [hov, hov.target, event]);
            }
        });
        var unhovers = [];
        // We must be in a different branch of the tree.
        if (mustUnhover) {
            var unhoverable = manager.lastHoveredElement;
            // Stop until we hit the common hovered ancestor (wherever we break'ed above).
            while (unhoverable && unhoverable !== hoverable) {
                unhovers.push(unhoverable);
                unhoverable.isHovered = false;
                unhoverable = unhoverable.parent;
            }
        }
        unhovers.forEach(function (unhov) {
            var delegator = HaikuElement.getElementEventDelegator(unhov);
            if (delegator && !delegator.isDeactivated) {
                delegator.routeEventToHandlerAndEmitWithoutBubblingAndWithoutGlobalHandlers(unhov.selector, 'unhover', [unhov, unhov.target, event]);
            }
        });
        manager.lastHoveredElement = this;
    };
    Object.defineProperty(HaikuElement.prototype, "selector", {
        get: function () {
            return "haiku:" + this.getComponentId();
        },
        enumerable: true,
        configurable: true
    });
    HaikuElement.prototype.dump = function () {
        return this.$id + ":<" + this.tagName + ">(" + (this.getComponentId() || '[container]') + ")";
    };
    HaikuElement.getElementEventDelegator = function (el) {
        if (!el) {
            return;
        }
        if (el.isComponent()) {
            return el;
        }
        return el.owner;
    };
    HaikuElement.transformVectorByMatrix = function (out, v, m) {
        out[0] = m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12];
        out[1] = m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13];
        out[2] = m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14];
        return out;
    };
    HaikuElement.getRectFromPoints = function (points) {
        var top = Math.min(points[0].y, points[2].y, points[6].y, points[8].y);
        var bottom = Math.max(points[0].y, points[2].y, points[6].y, points[8].y);
        var left = Math.min(points[0].x, points[2].x, points[6].x, points[8].x);
        var right = Math.max(points[0].x, points[2].x, points[6].x, points[8].x);
        var width = Math.abs(bottom - top);
        var height = Math.abs(right - left);
        return {
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: width,
            height: height,
        };
    };
    HaikuElement.getBoundingBoxPoints = function (points) {
        var x1 = points[0].x;
        var y1 = points[0].y;
        var x2 = points[0].x;
        var y2 = points[0].y;
        points.forEach(function (point) {
            if (point.x < x1) {
                x1 = point.x;
            }
            else if (point.x > x2) {
                x2 = point.x;
            }
            if (point.y < y1) {
                y1 = point.y;
            }
            else if (point.y > y2) {
                y2 = point.y;
            }
        });
        var w = x2 - x1;
        var h = y2 - y1;
        return [
            { x: x1, y: y1, z: 0 }, { x: x1 + w / 2, y: y1, z: 0 }, { x: x2, y: y1, z: 0 },
            { x: x1, y: y1 + h / 2, z: 0 }, { x: x1 + w / 2, y: y1 + h / 2, z: 0 }, { x: x2, y: y1 + h / 2, z: 0 },
            { x: x1, y: y2, z: 0 }, { x: x1 + w / 2, y: y2, z: 0 }, { x: x2, y: y2, z: 0 },
        ];
    };
    HaikuElement.transformPointsInPlace = function (points, matrix) {
        for (var i = 0; i < points.length; i++) {
            HaikuElement.transformPointInPlace(points[i], matrix);
        }
        return points;
    };
    HaikuElement.transformPointInPlace = function (point, matrix) {
        var offset = HaikuElement.transformVectorByMatrix([], [point.x, point.y, point.z], matrix);
        point.x = offset[0];
        point.y = offset[1];
        point.z = offset[2];
        return point;
    };
    HaikuElement.getAncestry = function (ancestors, element) {
        ancestors.unshift(element);
        if (element.parent) {
            HaikuElement.getAncestry(ancestors, element.parent);
        }
        return ancestors;
    };
    // tslint:disable-next-line:variable-name
    HaikuElement.__name__ = 'HaikuElement';
    HaikuElement.findByNode = function (node) {
        var registry = HaikuBase_1.default.getRegistryForClass(HaikuElement);
        for (var i = 0; i < registry.length; i++) {
            if (registry[i].node === node) {
                return registry[i];
            }
        }
        return;
    };
    HaikuElement.connectNodeWithElement = function (node, element) {
        // In case the element wasn't initialized yet
        if (element) {
            element.node = node;
        }
        // In case we got a string or null node
        if (node && typeof node === 'object') {
            // The purpose of the __memory object is to allow a mutable reference to be
            // passed around even when the node's base attributes are cloned. Also
            // to consolidate a host of __* properties which were becoming unweildy.
            //
            // Important: Platform-specific renderers may attach properties to this object;
            // for example the HaikuDOMRenderer attaches list of .targets (DOM nodes).
            if (!node.__memory) {
                node.__memory = {};
            }
            node.__memory.element = element;
        }
    };
    HaikuElement.createByNode = function (node) {
        var element = new HaikuElement();
        HaikuElement.connectNodeWithElement(node, element);
        return element;
    };
    HaikuElement.findOrCreateByNode = function (node) {
        var found;
        if (node && typeof node === 'object') {
            found = node.__memory && node.__memory.element;
        }
        if (!found) {
            found = HaikuElement.findByNode(node);
        }
        if (found) {
            HaikuElement.connectNodeWithElement(node, found);
            return found;
        }
        return HaikuElement.createByNode(node);
    };
    HaikuElement.useAutoSizing = function (givenValue) {
        return (givenValue === Layout3D_1.AUTO_SIZING_TOKEN ||
            // Legacy. Because HaikuComponent#render gets called before Migration.runMigrations,
            // the legacy value won't be correctly migrated to 'auto' by the time this gets called
            // for the very first time, so we keep it around for backwards compat. Jun 22, 2018.
            givenValue === true);
    };
    HaikuElement.computeLayout = function (targetNode, parentNode) {
        var layoutSpec = targetNode.layout;
        var targetSize = {
            x: null,
            y: null,
            z: null,
        };
        var parentBounds = (parentNode &&
            parentNode.layout &&
            parentNode.layout.computed &&
            parentNode.layout.computed.bounds);
        var targetBounds = {
            left: null,
            top: null,
            right: null,
            bottom: null,
            front: null,
            back: null,
        };
        var leftOffset = 0;
        var topOffset = 0;
        if (parentBounds) {
            if (typeof parentBounds.left === 'number') {
                leftOffset += parentBounds.left;
            }
            if (typeof parentBounds.top === 'number') {
                topOffset += parentBounds.top;
            }
        }
        var targetElement = HaikuElement.findOrCreateByNode(targetNode);
        // We'll define this later if any axes are requesting SIZE_PROPORTIONAL. It isn't needed for SIZE_ABSOLUTE.
        var parentsizeAbsolute;
        for (var i = 0; i < SIZING_AXES.length; i++) {
            var sizeAxis = SIZING_AXES[i];
            switch (layoutSpec.sizeMode[sizeAxis]) {
                case Layout3D_1.SIZE_PROPORTIONAL:
                    if (!parentsizeAbsolute) {
                        parentsizeAbsolute = (parentNode &&
                            parentNode.layout &&
                            parentNode.layout.computed &&
                            parentNode.layout.computed.size) || { x: 0, y: 0, z: 0 };
                        if (parentsizeAbsolute.z === undefined || parentsizeAbsolute.z === null) {
                            parentsizeAbsolute.z = DEFAULT_DEPTH;
                        }
                        if (parentsizeAbsolute.x === 0 && parentsizeAbsolute.y === 0 && parentsizeAbsolute.z === 0) {
                            // Size must be inherited from an ancestor above parent. Traverse upward until we find it.
                            var traversalParentNode = targetNode;
                            while (traversalParentNode) {
                                traversalParentNode = traversalParentNode.__memory && traversalParentNode.__memory.parent;
                                if (traversalParentNode && traversalParentNode.layout && traversalParentNode.layout.computed) {
                                    Object.assign(parentsizeAbsolute, traversalParentNode.layout.computed.size);
                                    break;
                                }
                            }
                        }
                    }
                    // Size is calculated as: parentSizeValue * sizeProportional + sizeProportional.
                    targetSize[sizeAxis] = parentsizeAbsolute[sizeAxis] * layoutSpec.sizeProportional[sizeAxis] +
                        layoutSpec.sizeDifferential[sizeAxis];
                    break;
                case Layout3D_1.SIZE_ABSOLUTE:
                    var givenValue = layoutSpec.sizeAbsolute[sizeAxis];
                    // Implements "auto"-sizing: Use content size if available, otherwise fallback to parent
                    if (HaikuElement.useAutoSizing(givenValue)) {
                        targetSize[sizeAxis] = targetElement.computeSizeForAxis(sizeAxis);
                        Object.assign(targetBounds, targetElement.computeBoundsForAxis(sizeAxis));
                    }
                    else {
                        targetSize[sizeAxis] = givenValue; // Assume the given value is numeric
                    }
                    break;
            }
        }
        var virtualSpec = __assign({}, layoutSpec, { offset: {
                x: layoutSpec.offset.x - leftOffset,
                y: layoutSpec.offset.y - topOffset,
                z: layoutSpec.offset.z,
            } });
        var targetMatrix = Layout3D_1.default.computeMatrix(virtualSpec, targetSize);
        return {
            shown: layoutSpec.shown,
            opacity: layoutSpec.opacity,
            offset: layoutSpec.offset,
            origin: layoutSpec.origin,
            translation: layoutSpec.translation,
            rotation: layoutSpec.rotation,
            scale: layoutSpec.scale,
            shear: layoutSpec.shear,
            sizeMode: layoutSpec.sizeMode,
            sizeProportional: layoutSpec.sizeProportional,
            sizeDifferential: layoutSpec.sizeDifferential,
            sizeAbsolute: layoutSpec.sizeAbsolute,
            size: targetSize,
            matrix: targetMatrix,
            bounds: targetBounds,
        };
    };
    return HaikuElement;
}(HaikuBase_1.default));
exports.default = HaikuElement;
//# sourceMappingURL=HaikuElement.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuGlobal.js":
/*!*****************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuGlobal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var enhance_1 = __webpack_require__(/*! ./reflection/enhance */ "./node_modules/@haiku/core/lib/reflection/enhance.js");
var inject_1 = __webpack_require__(/*! ./reflection/inject */ "./node_modules/@haiku/core/lib/reflection/inject.js");
var VERSION = __webpack_require__(/*! ./../package.json */ "./node_modules/@haiku/core/package.json").version;
function buildRoot() {
    // We need a global harness so we can...
    // - have a single rAF loop even if we've got multiple Haiku Contexts on the same page
    // - expose some global APIs that we hope to make available for all components
    var ROOT = {};
    // Window gets highest precedence since most likely we're running in DOM
    if (typeof window !== 'undefined') {
        ROOT = window;
    }
    else if (typeof global !== 'undefined') {
        ROOT = global;
    }
    else {
        // On the off-chance there is no real global, just use the orig object
    }
    if (!ROOT.haiku) {
        ROOT.haiku = {};
    }
    // Avoid loading entities for incompatible versions.
    if (!ROOT.haiku[VERSION]) {
        ROOT.haiku[VERSION] = {};
    }
    if (!ROOT.haiku[VERSION].models) {
        ROOT.haiku[VERSION].models = {};
    }
    if (!ROOT.haiku[VERSION].idCounter) {
        // Legacy: we start the ID counter at 1000 to avoid edge case ID collisions when there are copies of Haiku
        // sitting on the same page.
        ROOT.haiku[VERSION].idCounter = 1000;
    }
    if (!ROOT.haiku[VERSION].enhance) {
        /**
         * @function enhance
         * @description Given a function, decorate it with a .specification property that
         * contains a descriptor of the serialized form of the function, including its params.
         * This is used by the renderer as part of its automatic dependency injection mechanism.
         */
        ROOT.haiku[VERSION].enhance = enhance_1.default;
    }
    if (!ROOT.haiku[VERSION].inject) {
        /**
         * @function inject
         * @description Variadic function that takes a function as the first argument and
         * a collection of injection parameters as the remaining arguments, which are in turn
         * used to 'enhance' (see above) the function, specifying the parameters it wants injected.
         */
        ROOT.haiku[VERSION].inject = inject_1.default;
    }
    return ROOT.haiku[VERSION];
}
var haiku = buildRoot();
exports.default = haiku;
//# sourceMappingURL=HaikuGlobal.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuHelpers.js":
/*!******************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuHelpers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var pkg = __webpack_require__(/*! ./../package.json */ "./node_modules/@haiku/core/package.json");
var VERSION = pkg.version;
// We need a global harness so we can attach helpers
var MAIN = ((typeof window !== 'undefined')
    ? window
    : (typeof global !== 'undefined')
        ? global
        : {});
if (!MAIN.HaikuHelpers) {
    MAIN.HaikuHelpers = {};
}
// Different versions may have different helpers, so keep that in mind...
if (!MAIN.HaikuHelpers[VERSION]) {
    MAIN.HaikuHelpers[VERSION] = {
        helpers: {},
    };
}
var exp = MAIN.HaikuHelpers[VERSION];
exp.register = function (name, method) {
    exp.helpers[name] = method;
    return exp;
};
exports.default = exp;
//# sourceMappingURL=HaikuHelpers.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuNode.js":
/*!***************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuNode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var Layout3D_1 = __webpack_require__(/*! ./Layout3D */ "./node_modules/@haiku/core/lib/Layout3D.js");
var array_unique_1 = __webpack_require__(/*! ./vendor/array-unique */ "./node_modules/@haiku/core/lib/vendor/array-unique/index.js");
var uniq = array_unique_1.default.uniq;
var ALT_CLASS_NAME_ATTR = 'className'; // Ease of React integration
var ATTR_EXEC_RE = /\[([a-zA-Z0-9]+)([$|^~])?(=)?"?(.+?)?"?( i)?]/;
var ATTR_PREFIX = '[';
var CLASS_NAME_ATTR = 'class';
var CLASS_PREFIX = '.';
var FUNCTION = 'function';
var HAIKU_ID_ATTRIBUTE = 'haiku-id';
var HAIKU_PREFIX = 'haiku:';
var ID_PREFIX = '#';
var PIECE_SEPARATOR = ',';
var SPACE = ' ';
var getFnName = function (fn) {
    if (fn.name) {
        return fn.name;
    }
    var str = fn.toString();
    //                  | | <-- this space is always here via toString()
    var reg = /function ([^(]*)/;
    var ex = reg.exec(str);
    return ex && ex[1];
};
exports.parseAttrSelector = function (selector) {
    var matches = ATTR_EXEC_RE.exec(selector);
    if (!matches) {
        return null;
    }
    return {
        key: matches[1],
        operator: matches[3] && (matches[2] || '') + matches[3],
        value: matches[4],
        insensitive: !!matches[5],
    };
};
exports.cssMatchByAttribute = function (node, attrKeyToMatch, attrOperator, attrValueToMatch, options) {
    var attributes = node[options.attributes];
    if (attributes) {
        var attrValue = attributes[attrKeyToMatch];
        // If no operator, do a simple presence check ([foo])
        if (!attrOperator) {
            return !!attrValue;
        }
        switch (attrOperator) {
            case '=':
                return attrValueToMatch === attrValue;
            // case '~=':
            // case '|=':
            // case '^=':
            // case '$=':
            // case '*=':
            default:
                console.warn('Operator `' + attrOperator + '` not supported yet');
                return false;
        }
    }
};
exports.cssMatchByClass = function (node, className, options) {
    var attributes = node[options.attributes];
    if (attributes) {
        var foundClassName = attributes[CLASS_NAME_ATTR];
        if (!foundClassName) {
            foundClassName = attributes[ALT_CLASS_NAME_ATTR];
        }
        if (foundClassName) {
            var classPieces = foundClassName.split(SPACE);
            if (classPieces.indexOf(className) !== -1) {
                return true;
            }
        }
    }
};
exports.cssMatchByHaiku = function (node, haikuString, options) {
    var attributes = node[options.attributes];
    if (!attributes) {
        return false;
    }
    if (!attributes[HAIKU_ID_ATTRIBUTE]) {
        return false;
    }
    return attributes[HAIKU_ID_ATTRIBUTE] === haikuString;
};
exports.cssMatchById = function (node, id, options) {
    var attributes = node[options.attributes];
    if (attributes) {
        if (attributes.id === id) {
            return true;
        }
    }
};
exports.cssMatchByTagName = function (node, tagName, options) {
    var val = node[options.name];
    if (val) {
        if (typeof val === 'string' && val === tagName) {
            return true;
        }
        if (typeof val === FUNCTION) {
            // Allow function constructors to act as the tag name
            if (getFnName(val) === tagName) {
                return true;
            }
        }
        if (typeof val === 'object') {
            // Allow for things like instances to act as the tag name
            if (val.name === tagName || val.tagName === tagName) {
                return true;
            }
        }
    }
};
exports.cssMatchOne = function (node, piece, options) {
    if (piece.slice(0, 6) === HAIKU_PREFIX) {
        return exports.cssMatchByHaiku(node, piece.slice(6), options);
    }
    if (piece[0] === ID_PREFIX) {
        return exports.cssMatchById(node, piece.slice(1, piece.length), options);
    }
    if (piece[0] === CLASS_PREFIX) {
        return exports.cssMatchByClass(node, piece.slice(1, piece.length), options);
    }
    if (piece[0] === ATTR_PREFIX) {
        var parsedAttr = exports.parseAttrSelector(piece);
        if (!parsedAttr) {
            return false;
        }
        return exports.cssMatchByAttribute(node, parsedAttr.key, parsedAttr.operator, parsedAttr.value, options);
    }
    return exports.cssMatchByTagName(node, piece, options);
};
exports.cssQueryList = function (list, query, options) {
    var matches = [];
    var pieces = query.split(PIECE_SEPARATOR);
    for (var i = 0; i < pieces.length; i++) {
        var piece = pieces[i].trim();
        for (var j = 0; j < list.length; j++) {
            var node = list[j];
            if (exports.cssMatchOne(node, piece, options)) {
                matches.push(node);
            }
        }
    }
    return matches;
};
exports.cssQueryTree = function (node, query, options) {
    if (!node || typeof node !== 'object') {
        return [];
    }
    return exports.cssQueryList(exports.manaFlattenTree(node, options), query, options);
};
exports.manaFlattenTree = function (node, options, unique, list, depth, index) {
    if (unique === void 0) { unique = true; }
    if (list === void 0) { list = []; }
    if (depth === void 0) { depth = 0; }
    if (index === void 0) { index = 0; }
    list.push(node);
    // Don't recurse down into the children of nested components, which should be 'invisible' to us.
    // Nested components are indicated when their name is not a string, e.g. a component descriptor.
    if (depth < 1 || typeof node[options.name] === 'string') {
        var children = node[options.children];
        if (!children || typeof children === 'string') {
            return list;
        }
        if (Array.isArray(children)) {
            var copies = children.slice(0);
            // Without this, we'll have an infinite loop since the source child appears in both the
            // original children and the snapshotted children arrays.
            uniq(copies);
            for (var i = 0; i < copies.length; i++) {
                exports.manaFlattenTree(copies[i], options, false, list, depth + 1, i);
            }
        }
        else if (typeof children === 'object') {
            list.push(children);
            return list;
        }
    }
    return unique ? uniq(list) : list;
};
exports.visitManaTree = function (locator, mana, visitor, parent, index) {
    if (!mana || typeof mana === 'string') {
        return null;
    }
    visitor(mana.elementName, mana.attributes, mana.children, mana, locator, parent, index);
    if (!mana.children) {
        return null;
    }
    for (var i = 0; i < mana.children.length; i++) {
        var child = mana.children[i];
        exports.visitManaTree(locator + '.' + i, child, visitor, mana, i);
    }
};
exports.visit = function (mana, visitor, parent) {
    if (!mana || typeof mana !== 'object') {
        return;
    }
    visitor(mana, parent);
    var children = ((mana.__memory && mana.__memory.children) || mana.children);
    if (children) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child && child.__memory && child.__memory.instance) {
                continue;
            }
            exports.visit(child, visitor, mana);
        }
    }
};
exports.ascend = function (mana, ascender) {
    if (!mana || typeof mana !== 'object') {
        return;
    }
    ascender(mana);
    if (mana.__memory) {
        // Don't ascend beyond the scope of the host component instance
        if (!mana.__memory.instance && mana.__memory.parent) {
            exports.ascend(mana.__memory.parent, ascender);
        }
    }
};
exports.cloneNodeShallow = function (node) {
    if (!node) {
        return node;
    }
    return __assign({}, node, { attributes: exports.cloneAttributes(node.attributes), layout: Layout3D_1.default.clone(node.layout) });
};
exports.cloneAttributes = function (attributes) {
    if (!attributes) {
        return attributes;
    }
    var out = __assign({}, attributes);
    if (attributes.style) {
        out.style = Object.assign({}, attributes.style);
    }
    return out;
};
//# sourceMappingURL=HaikuNode.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/HaikuTimeline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@haiku/core/lib/HaikuTimeline.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuBase_1 = __webpack_require__(/*! ./HaikuBase */ "./node_modules/@haiku/core/lib/HaikuBase.js");
var getActionsMaxTime_1 = __webpack_require__(/*! ./helpers/getActionsMaxTime */ "./node_modules/@haiku/core/lib/helpers/getActionsMaxTime.js");
var getTimelineMaxTime_1 = __webpack_require__(/*! ./helpers/getTimelineMaxTime */ "./node_modules/@haiku/core/lib/helpers/getTimelineMaxTime.js");
var Tokenizer_1 = __webpack_require__(/*! ./reflection/Tokenizer */ "./node_modules/@haiku/core/lib/reflection/Tokenizer.js");
var assign_1 = __webpack_require__(/*! ./vendor/assign */ "./node_modules/@haiku/core/lib/vendor/assign/index.js");
var NUMBER = 'number';
var DEFAULT_OPTIONS = {
    // loop: Boolean
    // Determines whether this timeline should loop (start at its beginning when finished)
    loop: true,
};
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["Millisecond"] = "ms";
    TimeUnit["Frame"] = "fr";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var PlaybackFlag;
(function (PlaybackFlag) {
    PlaybackFlag["ONCE"] = "once";
    PlaybackFlag["PLAY"] = "play";
    PlaybackFlag["LOOP"] = "loop";
    PlaybackFlag["STOP"] = "stop";
    PlaybackFlag["SEEK"] = "seek";
})(PlaybackFlag = exports.PlaybackFlag || (exports.PlaybackFlag = {}));
var makePlaybackProc = function (body) {
    // tslint:disable-next-line:no-function-constructor-with-string-args
    return new Function('$time', body);
};
var PLAYBACK_FLAGS = {
    once: true,
    play: true,
    loop: true,
    stop: true,
    seek: true,
};
// tslint:disable:variable-name
var HaikuTimeline = /** @class */ (function (_super) {
    __extends(HaikuTimeline, _super);
    function HaikuTimeline(component, name, options) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.name = name;
        _this.assignOptions(options || {});
        _this.globalClockTime = 0;
        _this.localElapsedTime = 0;
        _this.localControlledTime = null; // Only set this to a number if time is 'controlled'
        _this.areUpdatesFrozen = !!_this.options.freeze;
        _this.isTimelineLooping = !!_this.options.loop;
        _this.isTimelinePlaying = true;
        _this.offsetCalculator = null;
        _this.lastFrame = null;
        _this.numLoops = 0;
        return _this;
    }
    HaikuTimeline.prototype.getMs = function (amount, unit) {
        switch (unit) {
            case "fr" /* Frame */:
                return Math.round(this.getFrameDuration() * amount);
            case "ms" /* Millisecond */:
            default:
                // The only currently valid alternative to TimeUnit.Frame is TimeUnit.Millisecond.
                return amount;
        }
    };
    HaikuTimeline.prototype.getFrameDuration = function () {
        return this.component.getClock().getFrameDuration();
    };
    HaikuTimeline.prototype.assignOptions = function (options) {
        this.options = assign_1.default(this.options || {}, DEFAULT_OPTIONS, options || {});
    };
    HaikuTimeline.prototype.ensureClockIsRunning = function () {
        var clock = this.component.getClock();
        if (!clock.isRunning()) {
            clock.start();
        }
    };
    /**
     * @method setComponent
     * @description Internal hook to allow Haiku to hot swap on-stage components during editing.
     */
    HaikuTimeline.prototype.setComponent = function (component) {
        this.component = component;
    };
    HaikuTimeline.prototype.doUpdateWithGlobalClockTime = function (globalClockTime) {
        if (this.isFrozen()) {
            return;
        }
        var prevGlobalClockTime = this.getClockTime();
        var deltaGlobalClockTime = globalClockTime - prevGlobalClockTime;
        this.globalClockTime = globalClockTime;
        // If we update with the global clock time while a timeline is paused, the next
        // time we resume playing it will "jump forward" to the time that has elapsed.
        if (this.isPaused()) {
            return;
        }
        this.doUpdateWithTimeDelta(deltaGlobalClockTime);
    };
    HaikuTimeline.prototype.doUpdateWithTimeDelta = function (deltaClockTime) {
        var ceilTime = this.getCeilTime();
        var prevElapsedTime = this.getElapsedTime();
        var newElapsedTime = prevElapsedTime + deltaClockTime;
        var didLoop = HaikuTimeline.didTimeLoop(prevElapsedTime, newElapsedTime, ceilTime);
        this.setElapsedTime(newElapsedTime);
        // If we are a looping timeline, reset to zero once we've gone past our max
        if (this.isLooping() && didLoop) {
            this.numLoops++;
            // Avoid log DoS for too-short timelines
            if (this.getMaxTime() > 200) {
                this.component.callHook('timeline:loop', {
                    localElapsedTime: newElapsedTime,
                    maxExplicitlyDefinedTime: this.getMaxTime(),
                    globalClockTime: this.getClockTime(),
                    boundedFrame: this.getBoundedFrame(),
                    loopCount: this.numLoops,
                });
            }
        }
    };
    HaikuTimeline.prototype.executePreUpdateHooks = function (globalClockTime) {
        this.doUpdateWithGlobalClockTime(globalClockTime);
    };
    HaikuTimeline.prototype.executePostUpdateHooks = function (globalClockTime) {
        if (this.isFrozen() || this.isPaused()) {
            return;
        }
        var frame = this.getBoundedFrame();
        var time = Math.round(this.getBoundedTime());
        this.component.routeEventToHandlerAndEmitWithoutBubbling(HaikuBase_1.GLOBAL_LISTENER_KEY, "timeline:" + this.getName() + ":" + frame, [frame, time]);
        // Allow users to subscribe to the 'frame' event globally
        this.component.routeEventToHandlerAndEmitWithoutBubbling(HaikuBase_1.GLOBAL_LISTENER_KEY, 'frame', [frame, time]);
        // Deprecated; please use the 'frame' event instead. This is used by the Haiku Share Page.
        this.emit('tick', frame, time);
        this.lastFrame = frame;
    };
    HaikuTimeline.prototype.getLastFrame = function () {
        return this.lastFrame;
    };
    HaikuTimeline.prototype.controlTime = function (controlledTimeToSet, newGlobalClockTime) {
        this.setControlledTime(parseInt(controlledTimeToSet || 0, 10));
        // Need to update the properties so that accessors like .getFrame() work after this update.
        this.doUpdateWithGlobalClockTime(newGlobalClockTime);
    };
    HaikuTimeline.prototype.isTimeControlled = function () {
        return typeof this.getControlledTime() === NUMBER;
    };
    /**
     * @method getName
     * @description Return the name of this timeline
     */
    HaikuTimeline.prototype.getName = function () {
        return this.name;
    };
    /**
     * @method getMaxTime
     * @description Return the maximum time that this timeline will reach, in ms.
     */
    HaikuTimeline.prototype.getMaxTime = function () {
        var _this = this;
        return this.cacheFetch('getMaxTime', function () {
            var descriptorMax = _this.getMaxKeyframeTime();
            var actionsMax = _this.getMaxActionsTime();
            return Math.max(descriptorMax, actionsMax);
        });
    };
    HaikuTimeline.prototype.getMaxKeyframeTime = function () {
        return getTimelineMaxTime_1.default(this.getDescriptor());
    };
    HaikuTimeline.prototype.getMaxActionsTime = function () {
        return Math.round(getActionsMaxTime_1.default(this.name, this.component.bytecode.eventHandlers, this.getFrameDuration()));
    };
    HaikuTimeline.prototype.getDescriptor = function () {
        return this.component.getTimelineDescriptor(this.name);
    };
    /**
     * @description The millisecond value for the beginning of one frame past the max.
     */
    HaikuTimeline.prototype.getCeilTime = function () {
        return this.getMaxTime() + this.getMs(1, "fr" /* Frame */);
    };
    /**
     * @method getClockTime
     * @description fseek the global clock time that this timeline is at, in ms,
     * whether or not our local time matches it or it has exceeded our max.
     * This value is ultimately managed by the clock and passed in.
     */
    HaikuTimeline.prototype.getClockTime = function () {
        return this.globalClockTime;
    };
    /**
     * @method getElapsedTime
     * @description Return the amount of time that has elapsed on this timeline since
     * it started updating, up to the most recent time update it received from the clock.
     * Note that for inactive ftimelines, this value will cease increasing as of the last update.
     */
    HaikuTimeline.prototype.getElapsedTime = function () {
        return this.localElapsedTime;
    };
    HaikuTimeline.prototype.setElapsedTime = function (t) {
        this.localElapsedTime = t;
    };
    /**
     * @description If time has been explicitly set here via time control, this value will
     * be the number of that setting.
     */
    HaikuTimeline.prototype.getControlledTime = function () {
        return this.localControlledTime;
    };
    HaikuTimeline.prototype.setControlledTime = function (t) {
        this.localControlledTime = t;
    };
    /**
     * @description Return the locally elapsed time, or the maximum time of this timeline,
     * whichever is smaller. Useful if you want to know what the "effective" time of this
     * timeline is, not necessarily how much has elapsed in an absolute sense. This is used
     * in the renderer to determine what value to calculate "now" deterministically.
     */
    HaikuTimeline.prototype.getBoundedTime = function () {
        var max = this.getMaxTime();
        var time = (this.isTimeControlled())
            ? this.getControlledTime()
            : this.getElapsedTime();
        if (this.offsetCalculator) {
            try {
                time = this.offsetCalculator.call(this, time);
            }
            catch (exception) {
                // no-op
            }
        }
        if (this.isLooping()) {
            var looped = HaikuTimeline.modulo(Math.round(time), this.getCeilTime());
            return looped;
        }
        // Don't allow negative time
        if (time < 0.000001) {
            time = 0;
        }
        return Math.min(time, max);
    };
    /**
     * @description Convenience wrapper. Currently returns the bounded time. There's an argument
     * that this should return the elapsed time, though. #TODO
     */
    HaikuTimeline.prototype.getTime = function () {
        return this.getBoundedTime();
    };
    /**
     * @description Return the current frame up to the maximum frame available for this timeline's duration.
     */
    HaikuTimeline.prototype.getBoundedFrame = function () {
        var time = this.getTime(); // Returns the bounded time
        var timeStep = this.component.getClock().getFrameDuration();
        return Math.round(time / timeStep);
    };
    /**
     * @method getUnboundedFrame
     * @description Return the current frame, even if it is above the maximum frame.
     */
    HaikuTimeline.prototype.getUnboundedFrame = function () {
        var time = this.getElapsedTime(); // The elapsed time can go larger than the max time; see timeline.js
        var timeStep = this.component.getClock().getFrameDuration();
        return Math.round(time / timeStep);
    };
    /**
     * @method getFrame
     * @description Return the bounded frame.
     * There's an argument that this should return the absolute frame. #TODO
     */
    HaikuTimeline.prototype.getFrame = function () {
        return this.getBoundedFrame();
    };
    /**
     * @method isPlaying
     * @description Returns T/F if the timeline is playing
     */
    HaikuTimeline.prototype.isPlaying = function () {
        return this.isTimelinePlaying;
    };
    HaikuTimeline.prototype.setPlaying = function (isPlaying) {
        if (isPlaying === void 0) { isPlaying = true; }
        this.isTimelinePlaying = !!isPlaying;
    };
    HaikuTimeline.prototype.isPaused = function () {
        return !this.isPlaying();
    };
    /**
     * @method isFinished
     * @description Returns T/F if the timeline is finished.
     * If this timeline is set to loop, it is never "finished".
     */
    HaikuTimeline.prototype.isFinished = function () {
        if (this.isLooping() || this.isTimeControlled()) {
            return false;
        }
        return this.getElapsedTime() > this.getMaxTime();
    };
    HaikuTimeline.prototype.isUnfinished = function () {
        return !this.isFinished();
    };
    HaikuTimeline.prototype.getDuration = function () {
        return this.getMaxTime() || 0;
    };
    HaikuTimeline.prototype.setRepeat = function (bool) {
        if (bool === void 0) { bool = true; }
        this.isTimelineLooping = !!bool;
    };
    HaikuTimeline.prototype.getRepeat = function () {
        return this.isTimelineLooping;
    };
    HaikuTimeline.prototype.isRepeating = function () {
        return this.getRepeat();
    };
    HaikuTimeline.prototype.isLooping = function () {
        return this.isRepeating();
    };
    /**
     * @method isFrozen
     * @description Returns T/F if the timeline is frozen
     */
    HaikuTimeline.prototype.isFrozen = function () {
        return this.areUpdatesFrozen;
    };
    HaikuTimeline.prototype.freeze = function () {
        this.areUpdatesFrozen = true;
    };
    HaikuTimeline.prototype.unfreeze = function () {
        this.areUpdatesFrozen = false;
    };
    HaikuTimeline.prototype.start = function () {
        this.startSoftly(0);
        this.emit('start');
    };
    HaikuTimeline.prototype.startSoftly = function (maybeElapsedTime) {
        this.setPlaying(true);
        this.setElapsedTime(maybeElapsedTime || 0);
    };
    HaikuTimeline.prototype.stop = function () {
        this.stopSoftly();
        this.emit('stop');
    };
    HaikuTimeline.prototype.stopSoftly = function () {
        this.setPlaying(false);
    };
    HaikuTimeline.prototype.pause = function () {
        this.pauseSoftly();
        this.emit('pause');
    };
    HaikuTimeline.prototype.pauseSoftly = function () {
        this.setPlaying(false);
    };
    HaikuTimeline.prototype.play = function (options) {
        if (options === void 0) { options = {}; }
        this.playSoftly();
        if (!options || !options.skipMarkForFullFlush) {
            this.component.markForFullFlush();
        }
        this.emit('play');
    };
    HaikuTimeline.prototype.playSoftly = function () {
        this.ensureClockIsRunning();
        this.setPlaying(true);
        // When playing after exiting controlled-time mode, start from the last controlled time.
        if (this.isTimeControlled()) {
            this.setElapsedTime(this.getControlledTime());
            // To properly exit controlled-time mode, we need to set controlled time to null.
            this.setControlledTime(null);
        }
    };
    HaikuTimeline.prototype.seek = function (amount, unit) {
        if (unit === void 0) { unit = "fr" /* Frame */; }
        var ms = this.getMs(amount, unit);
        this.seekSoftly(ms);
        this.component.markForFullFlush();
        this.emit('seek', ms);
    };
    HaikuTimeline.prototype.seekSoftly = function (ms) {
        this.ensureClockIsRunning();
        this.controlTime(ms, this.component.getClock().getTime());
        this.setElapsedTime(this.getControlledTime());
    };
    HaikuTimeline.prototype.gotoAndPlay = function (amount, unit) {
        if (unit === void 0) { unit = "fr" /* Frame */; }
        var ms = this.getMs(amount, unit);
        this.seekSoftly(ms);
        this.play(null);
    };
    HaikuTimeline.prototype.gotoAndStop = function (amount, unit) {
        if (unit === void 0) { unit = "fr" /* Frame */; }
        this.seekSoftly(this.getMs(amount, unit));
        if (this.component && this.component.context && this.component.context.tick) {
            this.component.context.tick();
        }
        this.pause();
    };
    HaikuTimeline.prototype.setPlaybackStatus = function (input) {
        var _a = this.parsePlaybackStatus(input), flag = _a.flag, time = _a.time, proc = _a.proc;
        if (flag === "loop" /* LOOP */) {
            this.setRepeat(true);
        }
        if (flag === "once" /* ONCE */) {
            this.setRepeat(false);
        }
        // If the sending timeline is frozen, don't inadvertently unfreeze its component's guests
        if (flag === "loop" /* LOOP */ || // In the current API, loop also connotes play
            flag === "once" /* ONCE */ ||
            flag === "play" /* PLAY */) {
            if (!this.isPlaying()) {
                this.play();
            }
        }
        if (flag === "stop" /* STOP */) {
            if (this.isPlaying()) {
                this.stop();
            }
        }
        if (flag === "seek" /* SEEK */) {
            this.seek(time || 0, "ms" /* Millisecond */);
        }
        if (typeof proc === 'function') {
            this.offsetCalculator = proc;
        }
    };
    HaikuTimeline.prototype.parsePlaybackStatus = function (input) {
        if (!input) {
            return {
                flag: "loop" /* LOOP */,
            };
        }
        // If an object, assume it takes the format of a flag payload
        if (typeof input === 'object') {
            return input;
        }
        if (typeof input === 'number' && Tokenizer_1.isNumeric(input)) {
            return {
                flag: "seek" /* SEEK */,
                // Assume the input is frames and convert to our internal format, milliseconds
                time: this.getMs(Number(input), "fr" /* Frame */),
            };
        }
        if (typeof input === 'string') {
            var tokens = this.cacheFetch("getPlaybackStatusTokens:" + input, function () {
                return Tokenizer_1.tokenizeDirective(input).map(function (_a) {
                    var value = _a.value;
                    return value;
                });
            });
            // If no tokens, assume the default: A looping timeline
            if (tokens.length < 1) {
                return {
                    flag: "loop" /* LOOP */,
                };
            }
            // Fast-path if we got a single playback flag string
            if (tokens.length === 1 && PLAYBACK_FLAGS[tokens[0]]) {
                return {
                    flag: tokens[0],
                };
            }
            var finals = [];
            // Convert any known number-unit tuples in the token stream into their canonical
            // ms-based time value. For example [100,ms]->[100], or [10]->[166] (frames to ms).
            for (var i = 0; i < tokens.length; i++) {
                var curr = tokens[i];
                var next = tokens[i + 1];
                if (typeof curr === 'number') {
                    if (next === 'ms') {
                        finals.push(this.getMs(curr, "ms" /* Millisecond */));
                        i++;
                        continue;
                    }
                    if (next === 'fr') {
                        finals.push(this.getMs(curr, "fr" /* Frame */));
                        i++;
                        continue;
                    }
                    // Frames are assumed to be the default that an end-user would write
                    if (next !== 'fr') {
                        finals.push(this.getMs(curr, "fr" /* Frame */));
                        continue;
                    }
                }
                finals.push(curr);
            }
            if (finals.length > 1) {
                // E.g. if we got +100, make it loop+100
                if (!PLAYBACK_FLAGS[finals[0]]) {
                    finals.unshift("loop" /* LOOP */);
                }
            }
            var expr = finals.map(function (val) {
                if (PLAYBACK_FLAGS[val]) {
                    return '$time';
                }
                return val;
            }).join(' ');
            var proc = void 0;
            try {
                proc = makePlaybackProc("return " + expr + ";");
            }
            catch (exception) {
                // no-op
            }
            var out = {
                proc: proc,
                flag: finals[0],
            };
            return out;
        }
        return {
            flag: "loop" /* LOOP */,
        };
    };
    /**
     * @deprecated
     * TODO: Please change this to a getter.
     */
    HaikuTimeline.prototype.duration = function () {
        return this.getDuration();
    };
    Object.defineProperty(HaikuTimeline.prototype, "repeat", {
        get: function () {
            return this.getRepeat();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuTimeline.prototype, "time", {
        get: function () {
            return this.getTime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuTimeline.prototype, "max", {
        get: function () {
            return this.getMaxTime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaikuTimeline.prototype, "frame", {
        get: function () {
            return this.getFrame();
        },
        enumerable: true,
        configurable: true
    });
    HaikuTimeline.__name__ = 'HaikuTimeline';
    HaikuTimeline.all = function () { return HaikuBase_1.default.getRegistryForClass(HaikuTimeline); };
    HaikuTimeline.where = function (criteria) {
        var all = HaikuTimeline.all();
        return all.filter(function (timeline) {
            return timeline.matchesCriteria(criteria);
        });
    };
    HaikuTimeline.create = function (component, name, config) {
        return new HaikuTimeline(component, name, config);
    };
    /**
     * @description Modulus, but returns zero if the second number is zero,
     * and calculates an appropriate "cycle" if the number is negative.
     */
    HaikuTimeline.modulo = function (n, ceil) {
        if (ceil === 0) {
            return 0;
        }
        return ((n % ceil) + ceil) % ceil;
    };
    /**
     * @description Given a previous elapsed time (a), a new elapsed time (b), and a max
     * time (max), determine whether the given timeline has looped between (a) and (b).
     *
     * E.g.:
     *   0----------100
     *        62        103  true
     *
     *   0----------100
     *        62    100  true
     *
     *   0----------100
     *        62   99  false
     *
     *   0----------100
     *              100  110  false
     *
     *   0----------100
     *               101  110  false
     *
     *   0----------100
     *              100
     *              100  false
     *
     *   0----------100
     *   0          100  false
     *
     *   0----------100
     *   0
     *   0  false
     */
    HaikuTimeline.didTimeLoop = function (a, b, ceil) {
        var ma = HaikuTimeline.modulo(a, ceil);
        var mb = HaikuTimeline.modulo(b, ceil);
        return mb < ma;
    };
    return HaikuTimeline;
}(HaikuBase_1.default));
exports.default = HaikuTimeline;
//# sourceMappingURL=HaikuTimeline.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/Interpolate.js":
/*!*****************************************************!*\
  !*** ./node_modules/@haiku/core/lib/Interpolate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var just_curves_1 = __webpack_require__(/*! ./vendor/just-curves */ "./node_modules/@haiku/core/lib/vendor/just-curves/index.js");
var cubicBezier_1 = __webpack_require__(/*! ./vendor/just-curves/internal/cubicBezier */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/cubicBezier.js");
var CENT = 1.0;
var OBJECT = 'object';
var NUMBER = 'number';
var STRING = 'string';
var PERCENT_REGEX = /^\d+(\.\d+)?%$/;
var PERCENT_SYMBOL = '%';
var isString = function (value) { return typeof value === STRING; };
function percentOfTime(t0, t1, tnow) {
    var span = t1 - t0;
    if (span === 0) {
        return CENT;
    } // No divide-by-zero
    var remaining = t1 - tnow;
    return CENT - remaining / span;
}
function valueAtPercent(v0, v1, pc) {
    var span = v1 - v0;
    var gain = span * pc;
    return v0 + gain;
}
function interpolateValue(v0, v1, t0, t1, tnow, curve) {
    var pc = percentOfTime(t0, t1, tnow);
    if (pc > CENT) {
        pc = CENT;
    }
    if (curve) {
        pc = curve(pc);
    }
    return valueAtPercent(v0, v1, pc);
}
exports.interpolate = function (now, curve, started, ends, origin, destination) {
    // Return early if we aren't tweening anything.
    if (origin === destination) {
        return origin;
    }
    var curveFunc;
    if (typeof curve === 'string') {
        // If curve is a string, transform into a function using justCurves
        curveFunc = just_curves_1.default[curve];
    }
    else if (Array.isArray(curve)) {
        // If curve is an array defining a Bezier curve, create a proper function
        curveFunc = cubicBezier_1.cubicBezier(curve[0], curve[1], curve[2], curve[3]);
    }
    else {
        // TODO: handle the case of custom functions, concerns for not enabling this
        // as of right now:
        // - serialization issues in all their various forms
        // (copy/paste, subcomponent, undo/redo, flush to disk)
        // - need to make sure not to crash if the function doesn’t return a number
        // (without a `typeof` check on every tick)
        curveFunc = curve;
    }
    if (typeof curveFunc !== 'function') {
        return origin;
    }
    if (Array.isArray(origin) && Array.isArray(destination)) {
        var arrayOutput = [];
        for (var i = 0; i < origin.length; i++) {
            arrayOutput[i] = exports.interpolate(now, curveFunc, started, ends, origin[i], destination[i]);
        }
        return arrayOutput;
    }
    if (origin && typeof origin === OBJECT && destination && typeof destination === OBJECT) {
        var objectOutput = {};
        for (var key in origin) {
            objectOutput[key] = exports.interpolate(now, curveFunc, started, ends, origin[key], destination[key]);
        }
        return objectOutput;
    }
    if (typeof origin === NUMBER && typeof destination === NUMBER) {
        return interpolateValue(origin, destination, started, ends, now, curveFunc);
    }
    if (isString(origin) &&
        isString(destination) &&
        PERCENT_REGEX.test(origin) &&
        PERCENT_REGEX.test(destination)) {
        return interpolateValue(parseFloat(origin), parseFloat(destination), started, ends, now, curveFunc) + PERCENT_SYMBOL;
    }
    return origin;
};
//# sourceMappingURL=Interpolate.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/Layout3D.js":
/*!**************************************************!*\
  !*** ./node_modules/@haiku/core/lib/Layout3D.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var ELEMENTS_2D = {
    circle: true,
    ellipse: true,
    foreignObject: true,
    g: true,
    image: true,
    line: true,
    mesh: true,
    path: true,
    polygon: true,
    polyline: true,
    rect: true,
    // svg: true, // Since we host <svg> only underneath <div> it should be fine to set this?
    switch: true,
    symbol: true,
    text: true,
    textPath: true,
    tspan: true,
    unknown: true,
    use: true,
};
exports.AUTO_SIZING_TOKEN = 'auto';
// Coordinate (0, 0, 0) is the top left of the screen
exports.SIZE_PROPORTIONAL = 0; // A percentage of the parent
exports.SIZE_ABSOLUTE = 1; // A fixed size in screen pixels
var IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
// Used for rendering downstream
var FORMATS = {
    THREE: 3,
    TWO: 2,
};
var DIV = 'div';
var SVG = 'svg';
var TYPE_STRING = 'string';
var virtualElementIsLayoutContainer = function (virtualElement) {
    // A virtual element is a layout container if the element is a component…
    return typeof virtualElement.elementName !== TYPE_STRING ||
        // …or if it is a layout container defining its own coordinate system.
        virtualElement.elementName === SVG ||
        virtualElement.elementName === DIV;
};
var initializeNodeAttributes = function (node, isRootNode) {
    if (!node || typeof node !== 'object') {
        return;
    }
    if (!node.attributes) {
        node.attributes = {};
    }
    if (!node.attributes.style) {
        node.attributes.style = {};
    }
    node.isRootNode = isRootNode;
    return node;
};
var initializeNodeLayout = function (node) {
    node.layout = createLayoutSpec(!node.isRootNode && virtualElementIsLayoutContainer(node));
    node.layout.matrix = createMatrix();
    node.layout.format = ELEMENTS_2D[node.elementName]
        ? FORMATS.TWO
        : FORMATS.THREE;
};
var createMatrix = function () { return copyMatrix(IDENTITY); };
var copyMatrix = function (m) { return m.slice(); };
var multiplyMatrices = function (a, b) { return [
    a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12],
    a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13],
    a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14],
    a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15],
    a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12],
    a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13],
    a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14],
    a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15],
    a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
    a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13],
    a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14],
    a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15],
    a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12],
    a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13],
    a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
    a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15],
]; };
var multiplyArrayOfMatrices = function (arrayOfMatrices) {
    var product = createMatrix();
    for (var i = 0; i < arrayOfMatrices.length; i++) {
        product = multiplyMatrices(product, arrayOfMatrices[i]);
    }
    return product;
};
var computeOrthonormalBasisMatrix = function (rotation, shear) {
    var orthonormalBasisLayout = __assign({}, createLayoutSpec(), { rotation: rotation,
        shear: shear });
    var ignoredSize = { x: 0, y: 0, z: 0 };
    return computeMatrix(orthonormalBasisLayout, ignoredSize);
};
var computeScaledBasisMatrix = function (rotation, scale, shear) {
    var scaledBasisLayout = __assign({}, createLayoutSpec(), { rotation: rotation,
        scale: scale,
        shear: shear });
    var ignoredSize = { x: 0, y: 0, z: 0 };
    return computeMatrix(scaledBasisLayout, ignoredSize);
};
var clone = function (layout) {
    if (!layout) {
        return layout;
    }
    var out = {
        shown: layout.shown,
        opacity: layout.opacity,
        mount: Object.assign({}, layout.mount),
        offset: Object.assign({}, layout.offset),
        origin: Object.assign({}, layout.origin),
        translation: Object.assign({}, layout.translation),
        rotation: Object.assign({}, layout.rotation),
        scale: Object.assign({}, layout.scale),
        shear: Object.assign({}, layout.shear),
        sizeMode: Object.assign({}, layout.sizeMode),
        sizeProportional: Object.assign({}, layout.sizeProportional),
        sizeDifferential: Object.assign({}, layout.sizeDifferential),
        sizeAbsolute: Object.assign({}, layout.sizeAbsolute),
        size: null,
        matrix: null,
        computed: null,
    };
    if (layout.computed) {
        out.computed = clone(layout.computed);
    }
    // Handle either a raw layout (no size or matrix) or a computed one (has size and matrix)
    if (layout.matrix) {
        out.matrix = layout.matrix.map(function (n) { return n; });
    }
    if (layout.size) {
        out.size = Object.assign({}, layout.size);
    }
    return out;
};
/**
 * The code below includes modified code from https://github.com/famous/engine
 *
 * The original code was released under the MIT license.
 *
 * MIT License (MIT)
 *
 * Copyright (c) 2015 Famous Industries Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var createLayoutSpec = function (createCoordinateSystem) { return ({
    shown: true,
    opacity: 1.0,
    offset: { x: 0, y: 0, z: 0 },
    origin: createCoordinateSystem ? { x: 0.5, y: 0.5, z: 0.5 } : { x: 0, y: 0, z: 0 },
    translation: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    shear: { xy: 0, xz: 0, yz: 0 },
    sizeMode: {
        x: exports.SIZE_PROPORTIONAL,
        y: exports.SIZE_PROPORTIONAL,
        z: exports.SIZE_PROPORTIONAL,
    },
    sizeProportional: { x: 1, y: 1, z: 1 },
    sizeDifferential: { x: 0, y: 0, z: 0 },
    sizeAbsolute: { x: 0, y: 0, z: 0 },
}); };
var computeMatrix = function (layoutSpec, targetSize) {
    var originX = layoutSpec.origin.x * targetSize.x;
    var originY = layoutSpec.origin.y * targetSize.y;
    var originZ = layoutSpec.origin.z * targetSize.z;
    // We represent the matrix in column-major order, a convention in graphics programming.
    var m = createMatrix();
    // Only if necessary, apply rotation from Euler angles in order: Z then Y then X.
    if (layoutSpec.rotation.x || layoutSpec.rotation.y || layoutSpec.rotation.z) {
        var sx = Math.sin(layoutSpec.rotation.x);
        var sy = Math.sin(layoutSpec.rotation.y);
        var sz = Math.sin(layoutSpec.rotation.z);
        var cx = Math.cos(layoutSpec.rotation.x);
        var cy = Math.cos(layoutSpec.rotation.y);
        var cz = Math.cos(layoutSpec.rotation.z);
        var cxcz = cx * cz;
        var cxsz = cx * sz;
        var sxcz = sx * cz;
        var sxsz = sx * sz;
        m[0] = cy * cz;
        m[4] = sy * sxcz - cxsz;
        m[8] = sy * cxcz + sxsz;
        m[1] = cy * sz;
        m[5] = sy * sxsz + cxcz;
        m[9] = sy * cxsz - sxcz;
        m[2] = -sy;
        m[6] = cy * sx;
        m[10] = cy * cx;
    }
    // Only if necessary, apply shear.
    if (layoutSpec.shear.xy || layoutSpec.shear.xz || layoutSpec.shear.yz) {
        var shearXzProxy = layoutSpec.shear.xy * layoutSpec.shear.yz + layoutSpec.shear.xz;
        m[8] += layoutSpec.shear.yz * m[4] + shearXzProxy * m[0];
        m[9] += layoutSpec.shear.yz * m[5] + shearXzProxy * m[1];
        m[10] += layoutSpec.shear.yz * m[6] + shearXzProxy * m[2];
        m[4] += layoutSpec.shear.xy * m[0];
        m[5] += layoutSpec.shear.xy * m[1];
        m[6] += layoutSpec.shear.xy * m[2];
    }
    // Multiply nontrivial scale through.
    if (layoutSpec.scale.x !== 1) {
        m[0] *= layoutSpec.scale.x;
        m[1] *= layoutSpec.scale.x;
        m[2] *= layoutSpec.scale.x;
    }
    if (layoutSpec.scale.y !== 1) {
        m[4] *= layoutSpec.scale.y;
        m[5] *= layoutSpec.scale.y;
        m[6] *= layoutSpec.scale.y;
    }
    if (layoutSpec.scale.z !== 1) {
        m[8] *= layoutSpec.scale.z;
        m[9] *= layoutSpec.scale.z;
        m[10] *= layoutSpec.scale.z;
    }
    m[12] =
        layoutSpec.offset.x +
            layoutSpec.translation.x -
            (m[0] * originX + m[4] * originY + m[8] * originZ);
    m[13] =
        layoutSpec.offset.y +
            layoutSpec.translation.y -
            (m[1] * originX + m[5] * originY + m[9] * originZ);
    m[14] =
        layoutSpec.offset.z +
            layoutSpec.translation.z -
            (m[2] * originX + m[6] * originY + m[10] * originZ);
    return m;
};
exports.default = {
    multiplyArrayOfMatrices: multiplyArrayOfMatrices,
    clone: clone,
    computeMatrix: computeMatrix,
    computeOrthonormalBasisMatrix: computeOrthonormalBasisMatrix,
    computeScaledBasisMatrix: computeScaledBasisMatrix,
    createLayoutSpec: createLayoutSpec,
    createMatrix: createMatrix,
    copyMatrix: copyMatrix,
    initializeNodeAttributes: initializeNodeAttributes,
    initializeNodeLayout: initializeNodeLayout,
    virtualElementIsLayoutContainer: virtualElementIsLayoutContainer,
    FORMATS: FORMATS,
    SIZE_ABSOLUTE: exports.SIZE_ABSOLUTE,
    SIZE_PROPORTIONAL: exports.SIZE_PROPORTIONAL,
};
//# sourceMappingURL=Layout3D.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/Migration.js":
/*!***************************************************!*\
  !*** ./node_modules/@haiku/core/lib/Migration.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuNode_1 = __webpack_require__(/*! ./HaikuNode */ "./node_modules/@haiku/core/lib/HaikuNode.js");
var compareSemver_1 = __webpack_require__(/*! ./helpers/compareSemver */ "./node_modules/@haiku/core/lib/helpers/compareSemver.js");
var migrateAutoSizing_1 = __webpack_require__(/*! ./helpers/migrateAutoSizing */ "./node_modules/@haiku/core/lib/helpers/migrateAutoSizing.js");
var applyCssLayout_1 = __webpack_require__(/*! ./layout/applyCssLayout */ "./node_modules/@haiku/core/lib/layout/applyCssLayout.js");
var functionToRFO_1 = __webpack_require__(/*! ./reflection/functionToRFO */ "./node_modules/@haiku/core/lib/reflection/functionToRFO.js");
var reifyRFO_1 = __webpack_require__(/*! ./reflection/reifyRFO */ "./node_modules/@haiku/core/lib/reflection/reifyRFO.js");
var UpgradeVersionRequirement;
(function (UpgradeVersionRequirement) {
    UpgradeVersionRequirement["OriginSupport"] = "3.2.0";
    UpgradeVersionRequirement["TimelineDefaultFrames"] = "3.2.23";
    UpgradeVersionRequirement["CamelAutoSizingOffset3DOmnibus"] = "3.5.2";
})(UpgradeVersionRequirement || (UpgradeVersionRequirement = {}));
var HAIKU_ID_ATTRIBUTE = 'haiku-id';
var HAIKU_SOURCE_ATTRIBUTE = 'haiku-source';
var HAIKU_VAR_ATTRIBUTE = 'haiku-var';
var HAIKU_ROOT_DEFAULT_REGEX = /^web\+haikuroot:\/\//;
var HAIKU_ROOT_DEFAULT = 'web+haikuroot://';
var SRC_ATTRIBUTE = 'src';
var HREF_ATTRIBUTE = 'href';
var XLINKHREF_ATTRIBUTE = 'xlink:href';
var requiresUpgrade = function (coreVersion, requiredVersion) { return !coreVersion ||
    compareSemver_1.default(coreVersion, requiredVersion) < 0; };
var areKeyframesDefined = function (keyframeGroup) {
    return (keyframeGroup &&
        Object.keys(keyframeGroup).length > 0);
};
var ensure3dPreserved = function (node) {
    if (!node || !node.attributes || !node.attributes.style) {
        return;
    }
    var changed = false;
    // Only preserve 3D behavior if the node hasn't been *explicitly* defined yet
    if (!node.attributes.style.transformStyle) {
        node.attributes.style.transformStyle = 'preserve-3d';
        changed = true;
        if (!node.attributes.style.perspective) {
            node.attributes.style.perspective = 'inherit';
        }
    }
    return changed;
};
/**
 * Migrations are a mechanism to modify our bytecode from legacy format to the current format.
 * This always runs against production components' bytecode to ensure their data is a format
 * that the current version of the engine knows how to handle. There are two phases to migration:
 * the pre-phase, which runs before an initial .render call, and a post-phase, which runs after.
 */
exports.runMigrationsPrePhase = function (component, options) {
    var bytecode = component.bytecode;
    if (!bytecode.states) {
        bytecode.states = {};
    }
    if (!bytecode.metadata) {
        bytecode.metadata = {};
    }
    var coreVersion = bytecode.metadata.core || bytecode.metadata.player;
    // Convert the properties array to the states dictionary
    if (bytecode.properties) {
        var properties = bytecode.properties;
        delete bytecode.properties;
        for (var i = 0; i < properties.length; i++) {
            var propertySpec = properties[i];
            var updatedSpec = {};
            if (propertySpec.value !== undefined) {
                updatedSpec.value = propertySpec.value;
            }
            if (propertySpec.type !== undefined) {
                updatedSpec.type = propertySpec.type;
            }
            if (propertySpec.setter !== undefined) {
                updatedSpec.set = propertySpec.setter;
            }
            if (propertySpec.getter !== undefined) {
                updatedSpec.get = propertySpec.getter;
            }
            if (propertySpec.set !== undefined) {
                updatedSpec.set = propertySpec.set;
            }
            if (propertySpec.get !== undefined) {
                updatedSpec.get = propertySpec.get;
            }
            bytecode.states[propertySpec.name] = updatedSpec;
        }
    }
    // Convert the eventHandlers array into a dictionary
    // [{selector:'foo',name:'onclick',handler:function}] => {'foo':{'onclick':{handler:function}}}
    if (Array.isArray(bytecode.eventHandlers)) {
        var eventHandlers = bytecode.eventHandlers;
        delete bytecode.eventHandlers;
        bytecode.eventHandlers = {};
        for (var j = 0; j < eventHandlers.length; j++) {
            var eventHandlerSpec = eventHandlers[j];
            if (!bytecode.eventHandlers[eventHandlerSpec.selector]) {
                bytecode.eventHandlers[eventHandlerSpec.selector] = {};
            }
            bytecode.eventHandlers[eventHandlerSpec.selector][eventHandlerSpec.name] = {
                handler: eventHandlerSpec.handler,
            };
        }
    }
    if (bytecode.timelines) {
        // Expand all bytecode properties represented as shorthand.
        for (var timelineName in bytecode.timelines) {
            for (var selector in bytecode.timelines[timelineName]) {
                for (var property in bytecode.timelines[timelineName][selector]) {
                    if (bytecode.timelines[timelineName][selector][property] === null) {
                        delete bytecode.timelines[timelineName][selector][property];
                    }
                    else if (typeof bytecode.timelines[timelineName][selector][property] !== 'object') {
                        bytecode.timelines[timelineName][selector][property] = {
                            0: {
                                value: bytecode.timelines[timelineName][selector][property],
                            },
                        };
                    }
                }
            }
        }
    }
    var needsOmnibusUpgrade = requiresUpgrade(coreVersion, "3.5.2" /* CamelAutoSizingOffset3DOmnibus */);
    var referencesToUpdate = {};
    if (bytecode.template) {
        // y-overflow + preserve-3d leads to various rendering bugs, so for now, disable when overflow is available.
        // #FIXME
        var autoPreserve3d_1 = component.config.preserve3d === 'auto' && component.config.overflowY !== 'visible';
        HaikuNode_1.visitManaTree('0', bytecode.template, function (_, attributes) {
            if (typeof attributes !== 'object') {
                return;
            }
            if (options.mutations) {
                if (attributes.id) {
                    var prev = attributes.id;
                    var next = prev + '-' + options.mutations.referenceUniqueness;
                    attributes.id = next;
                    referencesToUpdate["#" + prev] = "#" + next;
                    referencesToUpdate['url(#' + prev + ')'] = 'url(#' + next + ')';
                }
            }
        }, null, 0);
        HaikuNode_1.visitManaTree('0', bytecode.template, function (elementName, attributes) {
            if (typeof attributes !== 'object') {
                return;
            }
            var timelineProperties = bytecode.timelines.Default["haiku:" + attributes[HAIKU_ID_ATTRIBUTE]] || {};
            // Hoist xlink:href up to the timeline if not already done. Older versions of Haiku installed xlink:href in the
            // attributes dictionary.
            if (attributes[XLINKHREF_ATTRIBUTE]) {
                timelineProperties[XLINKHREF_ATTRIBUTE] = { 0: { value: attributes[XLINKHREF_ATTRIBUTE] } };
                delete attributes[XLINKHREF_ATTRIBUTE];
            }
            if (options.mutations) {
                for (var property in timelineProperties) {
                    if (property !== SRC_ATTRIBUTE && property !== XLINKHREF_ATTRIBUTE && property !== HREF_ATTRIBUTE) {
                        continue;
                    }
                    for (var keyframe in timelineProperties[property]) {
                        var value = timelineProperties[property][keyframe].value;
                        if (HAIKU_ROOT_DEFAULT_REGEX.test(value)) {
                            timelineProperties[property][keyframe].value = value.replace(HAIKU_ROOT_DEFAULT, options.mutations.haikuRoot);
                        }
                        else if (referencesToUpdate[value]) {
                            timelineProperties[property][keyframe].value = referencesToUpdate[value];
                        }
                    }
                }
            }
            // Switch the legacy 'source' attribute to the new 'haiku-source'
            if (attributes.source) {
                attributes[HAIKU_SOURCE_ATTRIBUTE] = attributes.source;
                delete attributes.source;
            }
            if (attributes.identifier) {
                attributes[HAIKU_VAR_ATTRIBUTE] = attributes.identifier;
                delete attributes.identifier;
            }
            // Legacy backgroundColor was a root prop; in newer versions it's style.backgroundColor.
            // We only want to update this if the user *hasn't* explicitly set style.backroundColor.
            if (timelineProperties.backgroundColor && !timelineProperties['style.backgroundColor']) {
                timelineProperties['style.backgroundColor'] = timelineProperties.backgroundColor;
                delete timelineProperties.backgroundColor;
            }
            if (needsOmnibusUpgrade) {
                var transformStyleGroup = timelineProperties['style.transformStyle'];
                if (transformStyleGroup && transformStyleGroup[0] && transformStyleGroup[0].value === 'flat') {
                    delete timelineProperties['style.transformStyle'];
                }
                var perspectiveGroup = timelineProperties['style.perspective'];
                if (perspectiveGroup && perspectiveGroup[0] && perspectiveGroup[0].value === 'none') {
                    delete timelineProperties['style.perspective'];
                }
                // Retire sizing layout from any SVG sizeable in favor of explicit properties.
                if (typeof elementName === 'string' && applyCssLayout_1.SVG_SIZEABLES[elementName]) {
                    if (timelineProperties['sizeAbsolute.x']) {
                        timelineProperties.width = { 0: { value: timelineProperties['sizeAbsolute.x'][0].value } };
                        delete timelineProperties['sizeAbsolute.x'];
                        delete timelineProperties['sizeMode.x'];
                    }
                    if (timelineProperties['sizeAbsolute.y']) {
                        timelineProperties.height = { 0: { value: timelineProperties['sizeAbsolute.y'][0].value } };
                        delete timelineProperties['sizeAbsolute.y'];
                        delete timelineProperties['sizeMode.y'];
                    }
                    if (timelineProperties['sizeProportional.x']) {
                        timelineProperties.width = {
                            0: { value: Number(timelineProperties['sizeProportional.x'][0].value) * 100 + "%" },
                        };
                        delete timelineProperties['sizeProportional.x'];
                        delete timelineProperties['sizeMode.x'];
                    }
                    if (timelineProperties['sizeProportional.y']) {
                        timelineProperties.height = {
                            0: { value: Number(timelineProperties['sizeProportional.y'][0].value) * 100 + "%" },
                        };
                        delete timelineProperties['sizeProportional.y'];
                        delete timelineProperties['sizeMode.y'];
                    }
                }
            }
            // If we see that any 3D transformations are applied, automatically override flat perspective
            // if it hasn't been automatically set, so that 3D perspective "just works"
            if (!component.doPreserve3d &&
                autoPreserve3d_1 && (areKeyframesDefined(timelineProperties['rotation.x']) ||
                areKeyframesDefined(timelineProperties['rotation.y']) ||
                areKeyframesDefined(timelineProperties['translation.z']) ||
                areKeyframesDefined(timelineProperties['scale.z']))) {
                component.doPreserve3d = true;
            }
            if (!bytecode.timelines.Default["haiku:" + attributes[HAIKU_ID_ATTRIBUTE]] &&
                Object.keys(timelineProperties).length > 0) {
                // Update with our hot object if we inadvertently created this object during migration.
                bytecode.timelines.Default["haiku:" + attributes[HAIKU_ID_ATTRIBUTE]] = timelineProperties;
            }
        }, null, 0);
    }
    if (bytecode.timelines) {
        // Although not ideal, it's likely beneficial to do another pass through the timelines to fill in
        // reference uniqueness. This may allow us to avoid a rerender below.
        for (var timelineName in bytecode.timelines) {
            for (var selector in bytecode.timelines[timelineName]) {
                if (needsOmnibusUpgrade) {
                    // Migrate auto-sizing.
                    migrateAutoSizing_1.default(bytecode.timelines[timelineName][selector]);
                }
                // Ensure ID-based selectors like #box work.
                if (referencesToUpdate[selector]) {
                    bytecode.timelines[timelineName][referencesToUpdate[selector]] = bytecode.timelines[timelineName][selector];
                    delete bytecode.timelines[timelineName][selector];
                    selector = referencesToUpdate[selector];
                }
                for (var propertyName in bytecode.timelines[timelineName][selector]) {
                    if (needsOmnibusUpgrade) {
                        // Migrate camel-case property names.
                        var camelVariant = options.attrsHyphToCamel[propertyName];
                        if (camelVariant) {
                            bytecode.timelines[timelineName][selector][camelVariant] =
                                bytecode.timelines[timelineName][selector][propertyName];
                            delete bytecode.timelines[timelineName][selector][propertyName];
                        }
                    }
                    for (var keyframeMs in bytecode.timelines[timelineName][selector][propertyName]) {
                        var keyframeDesc = bytecode.timelines[timelineName][selector][propertyName][keyframeMs];
                        if (keyframeDesc && referencesToUpdate[keyframeDesc.value]) {
                            keyframeDesc.value = referencesToUpdate[keyframeDesc.value];
                        }
                    }
                }
            }
        }
    }
};
exports.runMigrationsPostPhase = function (component, options, version) {
    var bytecode = component.bytecode;
    var coreVersion = bytecode.metadata.core || bytecode.metadata.player;
    var needsRerender = false;
    if (component.doPreserve3d) {
        var node = component.node;
        if (node) {
            var didNodePreserve3dChange = ensure3dPreserved(node);
            if (didNodePreserve3dChange) {
                component.patches.push(node);
            }
        }
        // The wrapper also needs preserve-3d set for 3d-preservation to work
        var parent_1 = component.parentNode; // This should be the "wrapper div" node
        if (parent_1) {
            var didParentPreserve3dChange = ensure3dPreserved(parent_1);
            if (didParentPreserve3dChange) {
                component.patches.push(parent_1);
            }
        }
    }
    var needsCamelAutoSizingOffsetOmnibus = requiresUpgrade(coreVersion, "3.5.2" /* CamelAutoSizingOffset3DOmnibus */);
    if (needsCamelAutoSizingOffsetOmnibus) {
        var alsoMigrateOrigin_1 = requiresUpgrade(coreVersion, "3.2.0" /* OriginSupport */);
        component.visit(function (element) {
            var offsetX = 0;
            var offsetY = 0;
            var timelineProperties = bytecode.timelines.Default["haiku:" + element.getComponentId()];
            if (!timelineProperties) {
                return;
            }
            // Note: the migrations below are incorrect if align properties were ever defined on an element with explicit
            // size. Since in practice this never happened, this is fine.
            if (timelineProperties['align.x']) {
                var alignX = timelineProperties['align.x'][0] && timelineProperties['align.x'][0].value;
                if (typeof alignX === 'number') {
                    offsetX += alignX * element.getNearestDefinedNonZeroAncestorSizeX();
                }
            }
            if (timelineProperties['align.y']) {
                var alignY = timelineProperties['align.y'][0] && timelineProperties['align.y'][0].value;
                if (typeof alignY === 'number') {
                    offsetY += alignY * element.getNearestDefinedNonZeroAncestorSizeY();
                }
            }
            if (timelineProperties['mount.x']) {
                var mountX = timelineProperties['mount.x'][0] && timelineProperties['mount.x'][0].value;
                if (typeof mountX === 'number') {
                    offsetX -= mountX * element.getNearestDefinedNonZeroAncestorSizeX();
                }
            }
            if (timelineProperties['mount.y']) {
                var mountY = timelineProperties['mount.y'][0] && timelineProperties['mount.y'][0].value;
                if (typeof mountY === 'number') {
                    offsetY -= mountY * element.getNearestDefinedNonZeroAncestorSizeY();
                }
            }
            if (alsoMigrateOrigin_1) {
                // Prior to explicit origin support, we were applying a default origin of (0, 0, 0) for all objects, then
                // allowing the browser default for SVG elements (50%, 50%, 0px) be the effective transform-origin. This led to
                // inaccuracies in the layout system, specifically related to addressing translation on SVG elements and
                // addressing origin in general. Since as of the introduction of explicit origin support we had not made layout
                // offset addressable in Haiku, we can "backport" to the old coordinate system by simply offsetting layout
                // by its "origin error".
                if (element.tagName === 'svg') {
                    offsetX += 0.5 * element.getNearestDefinedNonZeroAncestorSizeX();
                    offsetY += 0.5 * element.getNearestDefinedNonZeroAncestorSizeY();
                }
                else {
                    offsetX += element.originX * element.getNearestDefinedNonZeroAncestorSizeX();
                    offsetY += element.originY * element.getNearestDefinedNonZeroAncestorSizeY();
                }
            }
            if (offsetX !== 0) {
                timelineProperties['offset.x'] = { 0: { value: offsetX } };
                needsRerender = true;
            }
            if (offsetY !== 0) {
                timelineProperties['offset.y'] = { 0: { value: offsetY } };
                needsRerender = true;
            }
            delete timelineProperties['align.x'];
            delete timelineProperties['align.y'];
            delete timelineProperties['align.z'];
            delete timelineProperties['mount.x'];
            delete timelineProperties['mount.y'];
            delete timelineProperties['mount.z'];
        });
    }
    component.eachEventHandler(function (eventSelector, eventName, _a) {
        var handler = _a.handler;
        if (!handler) {
            console.warn("Unable to migrate event handler for " + eventSelector + " " + eventName + " in " + component.$id);
            return;
        }
        var rfo = handler.__rfo || functionToRFO_1.default(handler).__function;
        var params = rfo.params;
        var body = rfo.body;
        var changed = false;
        if (requiresUpgrade(coreVersion, "3.2.23" /* TimelineDefaultFrames */)) {
            (['.seek(', '.gotoAndPlay(', '.gotoAndStop(']).forEach(function (methodSignature) {
                for (var cursor = 0; cursor < body.length; ++cursor) {
                    if (body.substring(cursor, cursor + methodSignature.length) !== methodSignature) {
                        continue;
                    }
                    changed = true;
                    // We have matched e.g. this.getDefaultTimeline().seek( at the string index of ".seek(".
                    // Using the assumption that the method arguments do not contain string arguments with parentheses inside,
                    // we can apply a simple parenthesis-balancing algorithm here.
                    cursor += methodSignature.length;
                    var openParens = 1;
                    while (openParens > 0 && cursor < body.length) {
                        if (body[cursor] === '(') {
                            openParens++;
                        }
                        else if (body[cursor] === ')') {
                            openParens--;
                        }
                        ++cursor;
                    }
                    // Essentially, replace .seek(foo) with .seek(foo, 'ms').
                    body = body.slice(0, cursor - 1) + ", 'ms')" + body.slice(cursor);
                }
            });
        }
        if (params.length < 4) {
            params = ['component', 'element', 'target', 'event'];
            changed = true;
        }
        if (changed) {
            bytecode.eventHandlers[eventSelector][eventName].handler = reifyRFO_1.default(__assign({}, rfo, { params: params,
                body: body }));
        }
    });
    if (needsRerender) {
        component.clearCaches();
        component.markForFullFlush();
    }
    // Ensure the bytecode metadata core version is recent.
    bytecode.metadata.core = version;
};
//# sourceMappingURL=Migration.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/StateTransitionManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/StateTransitionManager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(/*! ./api */ "./node_modules/@haiku/core/lib/api/index.js");
var Interpolate_1 = __webpack_require__(/*! ./Interpolate */ "./node_modules/@haiku/core/lib/Interpolate.js");
var StateTransitionManager = /** @class */ (function () {
    function StateTransitionManager(component) {
        this.component = component;
        // Store running state transitions
        this.transitions = {};
        this.clock = this.component.getClock();
        this.states = this.component.state;
    }
    /**
     * Create a new state transition.
     */
    StateTransitionManager.prototype.setState = function (transitionEnd, parameter) {
        var _a, _b, _c, _d;
        // If not a transition, execute it right away
        if (!parameter) {
            for (var key in transitionEnd) {
                delete this.transitions[key];
            }
            for (var key in transitionEnd) {
                var from = this.states[key];
                var to = transitionEnd[key];
                if (from !== to) {
                    this.component.callHook('state:change', {
                        from: from,
                        to: to,
                        state: key,
                    });
                }
            }
            this.setStates(transitionEnd);
            return;
        }
        // Get current time
        var currentTime = this.clock.getTime();
        // Set default values than assign parameters
        var transitionParameter = { duration: 0, curve: api_1.Curve.Linear, queue: false };
        Object.assign(transitionParameter, parameter);
        // Copy current states as transition start (needed to calculate interpolation)
        for (var key in transitionEnd) {
            // Ignore state if it doesn't pre exist
            if (key in this.states) {
                var from = this.states[key];
                var to = transitionEnd[key];
                // queued transitions are add into queue
                // If parameter.queue is true, it is a queued setState
                // If state transition for key is not created, process like a queued SetState
                if (transitionParameter.queue && this.transitions[key]) {
                    if (from !== to) {
                        this.component.callHook('state:change', {
                            from: from,
                            to: to,
                            queued: true,
                            state: key,
                            duration: transitionParameter.duration,
                        });
                    }
                    this.transitions[key].push({
                        transitionParameter: transitionParameter,
                        transitionEnd: (_a = {}, _a[key] = to, _a),
                        transitionStart: (_b = {}, _b[key] = from, _b),
                        startTime: currentTime,
                        endTime: currentTime + transitionParameter.duration,
                        duration: transitionParameter.duration,
                    });
                    // non queued transitions are overwrite transition queue
                }
                else {
                    if (from !== to) {
                        this.component.callHook('state:change', {
                            from: from,
                            to: to,
                            started: true,
                            state: key,
                            duration: transitionParameter.duration,
                        });
                    }
                    this.transitions[key] = [{
                            transitionParameter: transitionParameter,
                            transitionEnd: (_c = {}, _c[key] = to, _c),
                            transitionStart: (_d = {}, _d[key] = from, _d),
                            startTime: currentTime,
                            endTime: currentTime + transitionParameter.duration,
                            duration: transitionParameter.duration,
                        }];
                }
            }
        }
        // Make sure state is update on setState call
        this.tickStateTransitions();
    };
    // We technically could call HaikuComponent::setStates, but passing only
    // state parameters instead whole HaikuComponent to contructor make this class
    // less coupled
    StateTransitionManager.prototype.setStates = function (states) {
        for (var key in states) {
            this.states[key] = states[key];
        }
    };
    StateTransitionManager.prototype.isExpired = function (transition, currentTime) {
        return this.clock.getTime() >= transition.endTime;
    };
    /**
     * Should be called on every tick. It cleans expired state transitions
     * and execute interpolation of running state transitions.
     */
    StateTransitionManager.prototype.tickStateTransitions = function () {
        var _a;
        var currentTime = this.clock.getTime();
        var interpolatedStates = {};
        // For each state, process state transition queue
        for (var stateName in this.transitions) {
            // On queued states, only first transition is processed, other transitions are in queue.
            if (this.transitions[stateName].length > 0) {
                var transition = this.transitions[stateName][0];
                if (this.isExpired(transition, currentTime)) {
                    this.component.callHook('state:change', {
                        finished: true,
                        state: stateName,
                        to: transition.transitionEnd[stateName],
                        duration: transition.duration,
                    });
                    // If expired, assign transitionEnd.
                    // NOTE: In the future, with custom transition function implemented calculating
                    // interpolation at endTime will be necessary (eg. a user defined curve that at
                    // endTime isn't 100%, but let's say 60%)
                    Object.assign(interpolatedStates, transition.transitionEnd);
                    // Remove expired transition.
                    this.transitions[stateName].splice(0, 1);
                    if (transition.transitionParameter.onComplete instanceof Function) {
                        transition.transitionParameter.onComplete();
                    }
                    // Update next queued state transition or delete empty transition vector for performance reasons
                    if (this.transitions[stateName].length > 0) {
                        this.component.callHook('state:change', {
                            started: true,
                            state: stateName,
                            to: this.transitions[stateName][0].transitionEnd[stateName],
                        });
                        this.transitions[stateName][0].transitionStart = (_a = {}, _a[stateName] = interpolatedStates[stateName], _a);
                        this.transitions[stateName][0].startTime = currentTime;
                        this.transitions[stateName][0].endTime = currentTime + this.transitions[stateName][0].duration;
                    }
                    else {
                        delete this.transitions[stateName];
                    }
                }
                else {
                    // Calculate interpolated states.
                    Object.assign(interpolatedStates, Interpolate_1.interpolate(currentTime, transition.transitionParameter.curve, transition.startTime, transition.endTime, transition.transitionStart, transition.transitionEnd));
                }
            }
        }
        this.setStates(interpolatedStates);
    };
    /**
     * Delete every running transition
     */
    StateTransitionManager.prototype.deleteAllStateTransitions = function () {
        this.transitions = {};
    };
    Object.defineProperty(StateTransitionManager.prototype, "numQueuedTransitions", {
        get: function () {
            var numQueuedTransition = 0;
            for (var stateName in this.transitions) {
                numQueuedTransition += this.transitions[stateName].length;
            }
            return numQueuedTransition;
        },
        enumerable: true,
        configurable: true
    });
    return StateTransitionManager;
}());
exports.default = StateTransitionManager;
//# sourceMappingURL=StateTransitionManager.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/Transitions.js":
/*!*****************************************************!*\
  !*** ./node_modules/@haiku/core/lib/Transitions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyframeUtils_1 = __webpack_require__(/*! ./helpers/KeyframeUtils */ "./node_modules/@haiku/core/lib/helpers/KeyframeUtils.js");
var Interpolate_1 = __webpack_require__(/*! ./Interpolate */ "./node_modules/@haiku/core/lib/Interpolate.js");
// 0:    { value: { ... } }
// 2500: { value: { ... } }
// 5000: { value: { ... } }
var getKeyframesList = function (sorted, nowValue) {
    for (var i = 0; i < sorted.length; i++) {
        var j = i + 1;
        var current = sorted[i];
        var next = sorted[j];
        if (current <= nowValue) {
            if (next > nowValue) {
                return [current, next];
            }
            if (j >= sorted.length) {
                return [current];
            }
        }
    }
};
exports.calculateValue = function (keyframeGroup, nowValue, sortedKeyframes) {
    if (!sortedKeyframes) {
        // tslint:disable-next-line:no-parameter-reassignment
        sortedKeyframes = KeyframeUtils_1.getSortedKeyframes(keyframeGroup);
    }
    var keyframesList = getKeyframesList(sortedKeyframes, nowValue);
    if (!keyframesList || keyframesList.length < 1) {
        return;
    }
    var currentKeyframe = keyframesList[0];
    var currentTransition = keyframeGroup[currentKeyframe];
    var nextKeyframe = keyframesList[1];
    var nextTransition = keyframeGroup[nextKeyframe];
    var finalValue = getTransitionValue(currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue);
    return finalValue;
};
var getTransitionValue = function (currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue) {
    var currentValue = currentTransition.value;
    if (!currentTransition.curve) {
        return currentValue;
    } // No curve indicates immediate transition
    if (!nextTransition) {
        return currentValue;
    } // We have gone past the final transition
    var finalValue = Interpolate_1.interpolate(nowValue, currentTransition.curve, currentKeyframe, nextKeyframe, currentValue, nextTransition.value);
    return finalValue;
};
//# sourceMappingURL=Transitions.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/adapters/dom/HaikuDOMAdapter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/adapters/dom/HaikuDOMAdapter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuContext_1 = __webpack_require__(/*! ../../HaikuContext */ "./node_modules/@haiku/core/lib/HaikuContext.js");
var dom_1 = __webpack_require__(/*! ../../renderers/dom */ "./node_modules/@haiku/core/lib/renderers/dom/index.js");
var pkg = __webpack_require__(/*! ./../../../package.json */ "./node_modules/@haiku/core/package.json");
var VERSION = pkg.version;
/**
 * Example ways in which the export of this module is invoked:
 *
 * // via embed snippet
 * window.HaikuPlayer['2.0.125'](require('./code/main/code.js')) // #LEGACY
 * window.HaikuCore['2.0.125'](require('./code/main/code.js'))
 *
 * // via module require
 * var HaikuDOMAdapter = require('@haiku/core/dom')
 * module.exports = HaikuDOMAdapter(require('./code/main/code.js'))
 */
/**
 * @function HaikuDOMAdapter
 * @description Given a bytecode object, return a factory function which can create a DOM-playable component.
 */
// tslint:disable-next-line:variable-name
var HaikuDOMAdapter = function (bytecode, config, safeWindow) {
    if (!config) {
        // tslint:disable-next-line:no-parameter-reassignment
        config = {};
    }
    if (!safeWindow) {
        if (typeof window !== 'undefined') {
            // tslint:disable-next-line:no-parameter-reassignment
            safeWindow = window;
        }
    }
    return HaikuContext_1.default.createComponentFactory(dom_1.default, bytecode, config, // Note: Full config object, of which options is one property!
    safeWindow);
};
HaikuDOMAdapter.defineOnWindow = function () {
    // Allow multiple instances of different versions to exist on the same page
    if (typeof window !== 'undefined') {
        if (!window.HaikuResolve) {
            var haikuResolutions_1 = {};
            window.HaikuResolve = function (playerVersion) {
                if (haikuResolutions_1[playerVersion]) {
                    return haikuResolutions_1[playerVersion];
                }
                var matches = playerVersion.match(/^(\d+)\.(\d+)\.(\d+)$/).map(Number);
                if (!matches) {
                    return;
                }
                var _ = matches[0], major = matches[1], minor = matches[2], patch = matches[3];
                var compatibleVersions = Object.keys(window.HaikuCore)
                    .map(function (semver) { return semver.split('.').map(Number); })
                    .filter(function (semverParts) {
                    if (semverParts.length !== 3 || semverParts[0] !== major) {
                        return false;
                    }
                    return semverParts[1] >= minor && ((semverParts[1] > minor) ? true : semverParts[2] >= patch);
                });
                if (compatibleVersions.length === 0) {
                    return;
                }
                compatibleVersions.sort(function (_a, _b) {
                    var __ = _a[0], aMinor = _a[1], aPatch = _a[2];
                    var ___ = _b[0], bMinor = _b[1], bPatch = _b[2];
                    if (aMinor < bMinor) {
                        return -1;
                    }
                    if (aMinor > bMinor) {
                        return 1;
                    }
                    return aPatch < bPatch ? -1 : 1;
                });
                return haikuResolutions_1[playerVersion] =
                    window.HaikuCore[compatibleVersions[compatibleVersions.length - 1].join('.')];
            };
        }
        if (!window.HaikuCore) {
            window.HaikuCore = {};
        }
        window.HaikuCore[VERSION] = HaikuDOMAdapter;
    }
};
HaikuDOMAdapter.defineOnWindow();
exports.default = HaikuDOMAdapter;
//# sourceMappingURL=HaikuDOMAdapter.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/adapters/dom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/adapters/dom/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuDOMAdapter_1 = __webpack_require__(/*! ./HaikuDOMAdapter */ "./node_modules/@haiku/core/lib/adapters/dom/HaikuDOMAdapter.js");
exports.default = HaikuDOMAdapter_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/adapters/vue-dom/HaikuVueDOMAdapter.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/adapters/vue-dom/HaikuVueDOMAdapter.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-line-length */
/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var getParsedProperty_1 = __webpack_require__(/*! ../../helpers/getParsedProperty */ "./node_modules/@haiku/core/lib/helpers/getParsedProperty.js");
var StringUtils_1 = __webpack_require__(/*! ../../helpers/StringUtils */ "./node_modules/@haiku/core/lib/helpers/StringUtils.js");
var clearProps = function (props) {
    var result = {};
    for (var verboseKeyName in props) {
        if (props[verboseKeyName] === undefined) {
            continue;
        }
        Object.assign(result, getParsedProperty_1.default(props, verboseKeyName));
    }
    return result;
};
var allProps = function (vueComponent) {
    return Object.assign(clearProps(vueComponent.$props), {
        ref: vueComponent.$el,
        onHaikuComponentWillInitialize: function (component) {
            vueComponent.$emit('haikuComponentWillInitialize', component);
        },
        onHaikuComponentDidMount: function (component) {
            vueComponent.$emit('haikuComponentDidMount', component);
        },
        onHaikuComponentWillMount: function (component) {
            vueComponent.$emit('haikuComponentWillMount', component);
        },
        onHaikuComponentDidInitialize: function (component) {
            vueComponent.$emit('haikuComponentDidInitialize', component);
        },
        onHaikuComponentWillUnmount: function (component) {
            vueComponent.$emit('haikuComponentWillUnmount', component);
        },
        children: vueComponent.$slots.default
            ? vueComponent.$slots.default.filter(function (node) { return node.tag !== undefined; })
            : [],
        vanities: {
            'controlFlow.placeholder': function (element, surrogate, value, context, timeline, receiver, sender) {
                if (element.__memory.placeholder.surrogate === surrogate || !element.__memory.targets) {
                    return;
                }
                var node = element.__memory.targets[0];
                if (node) {
                    var vueElement = surrogate.elm;
                    var div = document.createElement('div');
                    node.parentNode.replaceChild(div, node);
                    node.style.visibility = 'hidden';
                    if (vueElement) {
                        div.appendChild(vueElement);
                    }
                    window.requestAnimationFrame(function () {
                        element.__memory.placeholder.surrogate = surrogate;
                        node.style.visibility = 'visible';
                    });
                    sender.markHorizonElement(element);
                    sender.markForFullFlush();
                }
            },
        },
    });
};
// tslint:disable-next-line:function-name
function HaikuVueDOMAdapter(haikuComponentFactory) {
    return {
        props: {
            // We use null (which is the equivalent of 'any') for Boolean values
            // because Vue does typecasting for us, which sets undefined to false.
            automount: null,
            autoplay: null,
            forceFlush: null,
            freeze: null,
            loop: null,
            alwaysComputeSizing: null,
            seed: String,
            sizing: String,
            timestamp: Number,
            frame: Function,
            clock: Object,
            preserve3d: String,
            contextMenu: String,
            position: String,
            overflowX: String,
            overflowY: String,
            overflow: String,
            mixpanel: String,
            interactionMode: Object,
            states: Object,
            eventHandlers: Object,
            timelines: Object,
            vanities: Object,
            children: Array,
            placeholder: Object,
            // LEGACY
            haikuOptions: Object,
        },
        mounted: function () {
            this.haiku = haikuComponentFactory(this.$el, allProps(this));
        },
        updated: function () {
            this.haiku.assignConfig(allProps(this));
        },
        destroyed: function () {
            this.haiku.callUnmount();
        },
        render: function (createElement) {
            return createElement('div', {
                attrs: {
                    id: "haiku-vueroot-" + StringUtils_1.randomString(24),
                },
                style: {
                    position: 'relative',
                    margin: 0,
                    padding: 0,
                    border: 0,
                    width: '100%',
                    height: '100%',
                    transform: 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)',
                },
            }, this.$slots.default);
        },
    };
}
exports.default = HaikuVueDOMAdapter;
//# sourceMappingURL=HaikuVueDOMAdapter.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/adapters/vue-dom/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/adapters/vue-dom/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuVueDOMAdapter_1 = __webpack_require__(/*! ./HaikuVueDOMAdapter */ "./node_modules/@haiku/core/lib/adapters/vue-dom/HaikuVueDOMAdapter.js");
exports.default = HaikuVueDOMAdapter_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/api/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@haiku/core/lib/api/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Curve;
(function (Curve) {
    Curve["EaseInBack"] = "easeInBack";
    Curve["EaseInCirc"] = "easeInCirc";
    Curve["EaseInCubic"] = "easeInCubic";
    Curve["EaseInExpo"] = "easeInExpo";
    Curve["EaseInQuad"] = "easeInQuad";
    Curve["EaseInQuart"] = "easeInQuart";
    Curve["EaseInBounce"] = "easeInBounce";
    Curve["EaseInElastic"] = "easeInElastic";
    Curve["EaseInQuint"] = "easeInQuint";
    Curve["EaseInSine"] = "easeInSine";
    Curve["EaseOutBack"] = "easeOutBack";
    Curve["EaseOutCirc"] = "easeOutCirc";
    Curve["EaseOutCubic"] = "easeOutCubic";
    Curve["EaseOutExpo"] = "easeOutExpo";
    Curve["EaseOutQuad"] = "easeOutQuad";
    Curve["EaseOutQuart"] = "easeOutQuart";
    Curve["EaseOutBounce"] = "easeOutBounce";
    Curve["EaseOutElastic"] = "easeOutElastic";
    Curve["EaseOutQuint"] = "easeOutQuint";
    Curve["EaseOutSine"] = "easeOutSine";
    Curve["EaseInOutBack"] = "easeInOutBack";
    Curve["EaseInOutCirc"] = "easeInOutCirc";
    Curve["EaseInOutCubic"] = "easeInOutCubic";
    Curve["EaseInOutExpo"] = "easeInOutExpo";
    Curve["EaseInOutQuad"] = "easeInOutQuad";
    Curve["EaseInOutQuart"] = "easeInOutQuart";
    Curve["EaseInOutBounce"] = "easeInOutBounce";
    Curve["EaseInOutElastic"] = "easeInOutElastic";
    Curve["EaseInOutQuint"] = "easeInOutQuint";
    Curve["EaseInOutSine"] = "easeInOutSine";
    Curve["Linear"] = "linear";
})(Curve = exports.Curve || (exports.Curve = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/ColorUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/ColorUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
var color_string_1 = __webpack_require__(/*! ../vendor/color-string */ "./node_modules/@haiku/core/lib/vendor/color-string/index.js");
var STRING = 'string';
var OBJECT = 'object';
function parseString(str) {
    if (!str) {
        return null;
    }
    if (typeof str === OBJECT || (typeof str === STRING && str.trim().slice(0, 3) === 'url')) {
        return str;
    }
    return color_string_1.get(String(str));
}
function generateString(desc) {
    if (typeof desc === STRING) {
        return desc;
    }
    if (!desc) {
        return 'none';
    }
    return color_string_1.to(desc.model, desc.value);
}
exports.default = {
    parseString: parseString,
    generateString: generateString,
};
//# sourceMappingURL=ColorUtils.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/KeyframeUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/KeyframeUtils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sortNumeric = function (a, b) { return a - b; };
exports.getSortedKeyframes = function (propertyGroup) {
    return Object.keys(propertyGroup).map(Number).sort(sortNumeric);
};
//# sourceMappingURL=KeyframeUtils.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/PathUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/PathUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-line-length */
Object.defineProperty(exports, "__esModule", { value: true });
var SVGPathReversal_1 = __webpack_require__(/*! ../vendor/svg-path-reversal/SVGPathReversal */ "./node_modules/@haiku/core/lib/vendor/svg-path-reversal/SVGPathReversal.js");
var SVGPoints_1 = __webpack_require__(/*! ./SVGPoints */ "./node_modules/@haiku/core/lib/helpers/SVGPoints.js");
exports.splitSegmentInSVGPoints = function (points, pt1Index, pt2Index, t) {
    if (pt2Index === points.length) {
        // tslint:disable-next-line
        pt2Index = 0;
    }
    var h1;
    var h2;
    if (points[pt2Index].curve) {
        h1 = { x: points[pt2Index].curve.x1, y: points[pt2Index].curve.y1 };
        h2 = { x: points[pt2Index].curve.x2, y: points[pt2Index].curve.y2 };
    }
    else {
        h1 = points[pt1Index];
        h2 = points[pt2Index];
    }
    var newPts = exports.cubicBezierSplit(t, points[pt1Index], h1, h2, points[pt2Index]);
    if (points[pt2Index].curve) {
        points[pt2Index].curve.x1 = newPts[1][1].x;
        points[pt2Index].curve.y1 = newPts[1][1].y;
        points[pt2Index].curve.x2 = newPts[1][2].x;
        points[pt2Index].curve.y2 = newPts[1][2].y;
    }
    var newCurve = null;
    if (points[pt2Index].curve) {
        newCurve = {
            type: 'cubic',
            x1: newPts[0][1].x,
            y1: newPts[0][1].y,
            x2: newPts[0][2].x,
            y2: newPts[0][2].y,
        };
    }
    var newPoint = {
        x: newPts[0][3].x,
        y: newPts[0][3].y,
        curve: newCurve,
    };
    points.splice(pt2Index, 0, newPoint);
};
// NOTE: See Bezier curve splitting here: https://pomax.github.io/bezierinfo/#matrixsplit
exports.cubicBezierSplit = function (t, anchor1, handle1, handle2, anchor2) {
    var cubicSegmentMatrix1 = [
        1,
        0,
        0,
        0,
        -(t - 1),
        t,
        0,
        0,
        Math.pow(t - 1, 2),
        -2 * t * (t - 1),
        t * t,
        0,
        -Math.pow(t - 1, 3),
        3 * t * Math.pow(t - 1, 2),
        -3 * t * t * (t - 1),
        t * t * t,
    ];
    var x1 = exports.mat4_multiply_vec4(cubicSegmentMatrix1, { x: anchor1.x, y: handle1.x, z: handle2.x, w: anchor2.x });
    var y1 = exports.mat4_multiply_vec4(cubicSegmentMatrix1, { x: anchor1.y, y: handle1.y, z: handle2.y, w: anchor2.y });
    var cubicSegmentMatrix2 = [
        -Math.pow(t - 1, 3),
        3 * t * Math.pow(t - 1, 2),
        -3 * t * t * (t - 1),
        t * t * t,
        0,
        Math.pow(t - 1, 2),
        -2 * t * (t - 1),
        t * t,
        0,
        0,
        -(t - 1),
        t,
        0,
        0,
        0,
        1,
    ];
    var x2 = exports.mat4_multiply_vec4(cubicSegmentMatrix2, { x: anchor1.x, y: handle1.x, z: handle2.x, w: anchor2.x });
    var y2 = exports.mat4_multiply_vec4(cubicSegmentMatrix2, { x: anchor1.y, y: handle1.y, z: handle2.y, w: anchor2.y });
    return [
        [{ x: x1.x, y: y1.x }, { x: x1.y, y: y1.y }, { x: x1.z, y: y1.z }, { x: x1.w, y: y1.w }],
        [{ x: x2.x, y: y2.x }, { x: x2.y, y: y2.y }, { x: x2.z, y: y2.z }, { x: x2.w, y: y2.w }],
    ];
};
exports.distance = function (a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};
// tslint:disable-next-line:variable-name
exports.mat4_multiply_vec4 = function (m, v) {
    return {
        x: v.x * m[0] + v.y * m[1] + v.z * m[2] + v.w * m[3],
        y: v.x * m[4] + v.y * m[5] + v.z * m[6] + v.w * m[7],
        z: v.x * m[8] + v.y * m[9] + v.z * m[10] + v.w * m[11],
        w: v.x * m[12] + v.y * m[13] + v.z * m[14] + v.w * m[15],
    };
};
exports.polygonArea = function (points) {
    var area = 0;
    var a;
    var b = points[points.length - 1];
    for (var i = 0; i < points.length; i++) {
        a = b;
        b = points[i];
        area += a.y * b.x - a.x * b.y;
    }
    return area / 2;
};
exports.polygonLength = function (points) {
    var perimeter = 0;
    var a;
    var b = points[points.length - 1];
    for (var i = 0; i < points.length; i++) {
        a = b;
        b = points[i];
        perimeter += exports.distance(a, b);
    }
    return perimeter;
};
exports.distributeTotalVertices = function (path, totalVertices) {
    var pointsToAdd = totalVertices - path.length;
    if (pointsToAdd <= 0) {
        return;
    }
    // Find the length of every segment (approximate)
    // NOTE: This computes distance across the vertices, not along the actual bezier curve.
    // A possible improvement would be finding true distance along the curve, but at a much
    // higher computational cost.
    var segments = [];
    for (var i = 0; i < path.length; i++) {
        segments.push({
            index: i,
            length: exports.distance(path[i], path[(i + 1) % path.length]),
            splits: 0,
        });
    }
    var addedPoints = 0;
    while (addedPoints < pointsToAdd) {
        // Sort by length, accounting for number of splits
        segments.sort(function (a, b) { return (a.length / (a.splits || 1) - b.length / (b.splits || 1)); });
        // Split the longest segment again
        segments[segments.length - 1].splits++;
        addedPoints++;
    }
    // Apply the splits
    segments.sort(function (a, b) { return (a.index - b.index); });
    var inserted = 0;
    for (var i = 0; i < segments.length; i++) {
        while (segments[i].splits > 0) {
            // NOTE: This splits at linear values for t
            // A possible improvement would be finding truly equidistant points along the curve
            // at much higher computational cost.
            exports.splitSegmentInSVGPoints(path, i + inserted, (i + inserted + 1) % path.length, 1 / (segments[i].splits + 1));
            inserted++;
            segments[i].splits--;
        }
    }
};
exports.rotatePathForSmallestDistance = function (source, dest) {
    if (source.length !== dest.length) {
        throw new Error('Mismatched source and destination length.');
    }
    var moveToPopped = false;
    if (source[0].moveTo && dest[0].moveTo) {
        source.shift();
        dest.shift();
        moveToPopped = true;
    }
    var smallestOffset = 0;
    var minDistance = Infinity;
    for (var rotationOffset = 0; rotationOffset < source.length; rotationOffset++) {
        var distanceSum = 0;
        for (var i = 0; i < source.length; i++) {
            var dist = exports.distance(source[i], dest[(rotationOffset + i) % dest.length]);
            distanceSum += dist;
        }
        if (distanceSum < minDistance) {
            minDistance = distanceSum;
            smallestOffset = rotationOffset;
        }
    }
    if (smallestOffset === 0) {
        if (moveToPopped) {
            source.unshift({
                x: source[source.length - 1].x,
                y: source[source.length - 1].y,
                moveTo: true,
            });
            dest.unshift({
                x: dest[dest.length - 1].x,
                y: dest[dest.length - 1].y,
                moveTo: true,
            });
        }
        return;
    }
    var closed = dest[dest.length - 1].closed;
    var spliced = dest.splice(0, smallestOffset);
    dest.splice.apply(dest, [source.length, 0].concat(spliced));
    // Clean up
    if (closed) {
        dest[dest.length - 1].closed = true;
    }
    if (moveToPopped) {
        source.unshift({
            x: source[source.length - 1].x,
            y: source[source.length - 1].y,
            moveTo: true,
        });
        dest.unshift({
            x: dest[dest.length - 1].x,
            y: dest[dest.length - 1].y,
            moveTo: true,
        });
    }
    for (var i = 0; i < dest.length; i++) {
        if (i < dest.length - 1 && dest[i].closed) {
            delete dest[i].closed;
        }
        if (i > 0 && dest[i].moveTo) {
            delete dest[i].moveTo;
        }
    }
};
exports.ensurePathClockwise = function (path) {
    if (exports.polygonArea(path) > 0) {
        var reversed = SVGPathReversal_1.reverseNormalizedPath(SVGPathReversal_1.normalizePath(SVGPoints_1.default.pointsToPath(path)));
        path.splice(0, path.length);
        var reversedPoints = SVGPoints_1.default.pathToPoints(reversed);
        for (var i = 0; i < reversedPoints.length; i++) {
            path.push(reversedPoints[i]);
        }
    }
};
exports.normalizePointCurves = function (path) {
    for (var i = 1; i < path.length; i++) {
        if (path[i].curve) {
            // Convert quadratic to cubic bezier
            if (path[i].curve.type === 'quadratic') {
                var newCurve = {
                    type: 'cubic',
                };
                newCurve.x1 = path[i - 1].x + 2 / 3 * (path[i].curve.x1 - path[i - 1].x);
                newCurve.y1 = path[i - 1].y + 2 / 3 * (path[i].curve.y1 - path[i - 1].y);
                newCurve.x2 = path[i].x + 2 / 3 * (path[i].curve.x1 - path[i].x);
                newCurve.y2 = path[i].y + 2 / 3 * (path[i].curve.y2 - path[i].y);
                path[i].curve = newCurve;
            }
            else if (path[i].curve.type === 'arc') {
                console.warn('Paths with arcs are not yet supported.');
            }
            continue;
        }
        path[i].curve = {
            type: 'cubic',
            x1: path[i - 1].x,
            y1: path[i - 1].y,
            x2: path[i].x,
            y2: path[i].y,
        };
    }
};
exports.isMultiShape = function (path) {
    for (var i = 0; i < path.length; i++) {
        if (path[i].closed && i < path.length - 1) {
            return true;
        }
    }
    return false;
};
exports.synchronizePathStructure = function () {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    // Multi-shape not yet supported for magic-morph
    if (paths.some(exports.isMultiShape)) {
        return;
    }
    var maxVerts = Math.max.apply(Math, paths.map(function (path) { return path.length; }));
    var validPaths = paths.filter(function (path) { return path.length && !path.some(function (_a) {
        var x = _a.x, y = _a.y;
        return isNaN(x) || isNaN(y);
    }); });
    validPaths.forEach(function (path) {
        exports.ensurePathClockwise(path);
        exports.distributeTotalVertices(path, maxVerts);
        exports.normalizePointCurves(path);
    });
    for (var i = 0; i < validPaths.length - 1; i++) {
        exports.rotatePathForSmallestDistance(validPaths[i], validPaths[i + 1]);
    }
};
//# sourceMappingURL=PathUtils.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/SVGPoints.js":
/*!***********************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/SVGPoints.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var svg_points_1 = __webpack_require__(/*! ../vendor/svg-points */ "./node_modules/@haiku/core/lib/vendor/svg-points/index.js");
var parseCssValueString_1 = __webpack_require__(/*! ./parseCssValueString */ "./node_modules/@haiku/core/lib/helpers/parseCssValueString.js");
// In leiu of good math, this gives pretty good results for converting arcs to cubic beziers
var MAGIC_BEZIER_ARC_RATIO = 1.8106602;
var SVG_TYPES = {
    g: true,
    rect: true,
    polyline: true,
    polygon: true,
    path: true,
    line: true,
    ellipse: true,
    circle: true,
};
var SVG_POINT_NUMERIC_FIELDS = {
    cx: true,
    cy: true,
    r: true,
    rx: true,
    ry: true,
    x1: true,
    x2: true,
    x: true,
    y: true,
};
var SVG_POINT_COMMAND_FIELDS = {
    d: true,
    points: true,
};
var SVG_COMMAND_TYPES = {
    path: true,
    polyline: true,
    polygon: true,
};
function polyPointsStringToPoints(pointsString) {
    if (!pointsString) {
        return [];
    }
    if (Array.isArray(pointsString)) {
        return pointsString;
    }
    // Normalize "x1,y1 x2,y2" syntax to "x1 y1 x2 y2" syntax before splitting.
    var chunkedPoints = [];
    var points = pointsString.trim().replace(/,/g, ' ').split(/\s+/g).map(Number);
    for (var i = 0; i < points.length; i += 2) {
        chunkedPoints.push(points.slice(i, i + 2));
    }
    return chunkedPoints;
}
function pointsToPolyString(points) {
    if (!points) {
        return '';
    }
    if (typeof points === 'string') {
        return points;
    }
    var arr = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        var seg = point.join(',');
        arr.push(seg);
    }
    return arr.join(' ');
}
function rectToPoints(x, y, width, height, rxIn, ryIn) {
    var rx = rxIn;
    var ry = ryIn;
    if (rx || ry) {
        if (rx && isNaN(ry)) {
            ry = rx;
        } // Assume equal radius if ry is not defined (SVG)
        if (isNaN(rx)) {
            rx = 0;
        }
        if (isNaN(ry)) {
            ry = 0;
        }
        return [
            {
                y: y,
                x: x + rx,
                moveTo: true,
            },
            {
                y: y,
                x: x + width - rx,
            },
            {
                x: x + width,
                y: y + ry,
                curve: {
                    type: 'cubic',
                    x1: x + width - rx + rx / MAGIC_BEZIER_ARC_RATIO,
                    y1: y,
                    x2: x + width,
                    y2: y + ry / MAGIC_BEZIER_ARC_RATIO,
                },
            },
            {
                x: x + width,
                y: y + height - ry,
            },
            {
                x: x + width - rx,
                y: y + height,
                curve: {
                    type: 'cubic',
                    x1: x + width,
                    y1: y + height - ry / MAGIC_BEZIER_ARC_RATIO,
                    x2: x + width - rx + rx / MAGIC_BEZIER_ARC_RATIO,
                    y2: y + height,
                },
            },
            {
                x: x + rx,
                y: y + height,
            },
            {
                x: x,
                y: y + height - ry,
                curve: {
                    type: 'cubic',
                    x1: x + rx - rx / MAGIC_BEZIER_ARC_RATIO,
                    y1: y + height,
                    x2: x,
                    y2: y + height - ry / MAGIC_BEZIER_ARC_RATIO,
                },
            },
            {
                x: x,
                y: y + ry,
            },
            {
                y: y,
                x: x + rx,
                closed: true,
                curve: {
                    type: 'cubic',
                    x1: x,
                    y1: y + ry - ry / MAGIC_BEZIER_ARC_RATIO,
                    x2: x + rx - rx / MAGIC_BEZIER_ARC_RATIO,
                    y2: y,
                },
            },
        ];
    }
    // Non-rounded rect
    return [
        {
            x: x,
            y: y,
            moveTo: true,
        },
        {
            y: y,
            x: x + width,
        },
        {
            x: x + width,
            y: y + height,
        },
        {
            x: x,
            y: y + height,
            closed: true,
        },
        {
            x: x,
            y: y,
        },
    ];
}
function circleToPoints(cx, cy, r) {
    return ellipseToPoints(cx, cy, r, r);
}
function ellipseToPoints(cx, cy, rx, ry) {
    return [
        {
            x: cx,
            y: cy - ry,
            moveTo: true,
        },
        {
            x: cx + rx,
            y: cy,
            curve: {
                type: 'cubic',
                x1: cx + rx / MAGIC_BEZIER_ARC_RATIO,
                y1: cy - ry,
                x2: cx + rx,
                y2: cy - ry / MAGIC_BEZIER_ARC_RATIO,
            },
        },
        {
            x: cx,
            y: cy + ry,
            curve: {
                type: 'cubic',
                x1: cx + rx,
                y1: cy + ry / MAGIC_BEZIER_ARC_RATIO,
                x2: cx + rx / MAGIC_BEZIER_ARC_RATIO,
                y2: cy + ry,
            },
        },
        {
            x: cx - rx,
            y: cy,
            curve: {
                type: 'cubic',
                x1: cx - rx / MAGIC_BEZIER_ARC_RATIO,
                y1: cy + ry,
                x2: cx - rx,
                y2: cy + ry / MAGIC_BEZIER_ARC_RATIO,
            },
        },
        {
            x: cx,
            y: cy - ry,
            closed: true,
            curve: {
                type: 'cubic',
                x1: cx - rx,
                y1: cy - ry / MAGIC_BEZIER_ARC_RATIO,
                x2: cx - rx / MAGIC_BEZIER_ARC_RATIO,
                y2: cy - ry,
            },
        },
    ];
}
function lineToPoints(x1, y1, x2, y2) {
    var shape = { x1: x1, y1: y1, x2: x2, y2: y2, type: 'line' };
    return svg_points_1.default.toPoints(shape);
}
function pathToPoints(pathString) {
    if (!pathString) {
        return [];
    }
    var shape = { type: 'path', d: pathString };
    return svg_points_1.default.toPoints(shape);
}
function pointsToPath(pointsArray) {
    return svg_points_1.default.toPath(pointsArray);
}
function manaToPoints(mana) {
    if (typeof mana.elementName === 'string' &&
        SVG_TYPES[mana.elementName] &&
        mana.elementName !== 'rect' &&
        mana.elementName !== 'g') {
        var shape = { type: mana.elementName };
        if (SVG_COMMAND_TYPES[shape.type]) {
            for (var f2 in SVG_POINT_COMMAND_FIELDS) {
                if (mana.attributes[f2]) {
                    shape[f2] = mana.attributes[f2];
                }
            }
        }
        else {
            for (var f1 in SVG_POINT_NUMERIC_FIELDS) {
                if (mana.attributes[f1]) {
                    shape[f1] = Number(mana.attributes[f1]);
                }
            }
        }
        return svg_points_1.default.toPoints(shape);
    }
    // div, rect, svg ...
    var width = parseCssValueString_1.default((mana.layout &&
        mana.layout.computed &&
        mana.layout.computed.size &&
        mana.layout.computed.size.x) ||
        (mana.rect && mana.rect.width) ||
        (mana.attributes &&
            mana.attributes.style &&
            mana.attributes.style.width) ||
        (mana.attributes && mana.attributes.width) ||
        (mana.attributes && mana.attributes.x) ||
        0, null).value;
    var height = parseCssValueString_1.default((mana.layout &&
        mana.layout.computed &&
        mana.layout.computed.size &&
        mana.layout.computed.size.y) ||
        (mana.rect && mana.rect.height) ||
        (mana.attributes &&
            mana.attributes.style &&
            mana.attributes.style.height) ||
        (mana.attributes && mana.attributes.height) ||
        (mana.attributes && mana.attributes.y) ||
        0, null).value;
    var left = parseCssValueString_1.default((mana.rect && mana.rect.left) ||
        (mana.attributes.style && mana.attributes.style.left) ||
        mana.attributes.x ||
        0, null).value;
    var top = parseCssValueString_1.default((mana.rect && mana.rect.top) ||
        (mana.attributes.style && mana.attributes.style.top) ||
        mana.attributes.y ||
        0, null).value;
    return svg_points_1.default.toPoints({
        width: width,
        height: height,
        type: 'rect',
        x: left,
        y: top,
    });
}
exports.default = {
    rectToPoints: rectToPoints,
    circleToPoints: circleToPoints,
    ellipseToPoints: ellipseToPoints,
    lineToPoints: lineToPoints,
    pathToPoints: pathToPoints,
    pointsToPath: pointsToPath,
    polyPointsStringToPoints: polyPointsStringToPoints,
    pointsToPolyString: pointsToPolyString,
    manaToPoints: manaToPoints,
};
//# sourceMappingURL=SVGPoints.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/StringUtils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/StringUtils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Quick-and-dirty way to generate unique DOM-friendly ids on the fly...
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
exports.randomString = function (len) {
    var str = '';
    while (str.length < len) {
        str += exports.ALPHABET[Math.floor(Math.random() * exports.ALPHABET.length)];
    }
    return str;
};
//# sourceMappingURL=StringUtils.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/compareSemver.js":
/*!***************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/compareSemver.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2017. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple semver comparitor function for semvers.
 *
 * Used for determining if a semver a = x.y.z is less than, greater than, or equal to a semver b = x'.y'.z'. Returns 1
 * if a > b, -1 if a < b, or 0 if they are equal.
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
var compareSemver = function (a, b) {
    var semverA = a.split('.');
    var semverB = b.split('.');
    if (semverA.length !== 3 || semverB.length !== 3) {
        throw new Error("Invalid semver comparison: " + a + ", " + b);
    }
    for (var i = 0; i < 3; ++i) {
        if (semverA[i] < semverB[i]) {
            return -1;
        }
        if (semverA[i] > semverB[i]) {
            return 1;
        }
    }
    return 0;
};
exports.default = compareSemver;
//# sourceMappingURL=compareSemver.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/consoleErrorOnce.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/consoleErrorOnce.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function generateLogger() {
    var CONSOLE_ERRORS = {};
    return function consoleErrorOnce(err) {
        var str = err && err.message.toString();
        if (!CONSOLE_ERRORS[str]) {
            CONSOLE_ERRORS[str] = true;
            console.error(err);
        }
    };
}
exports.default = generateLogger();
//# sourceMappingURL=consoleErrorOnce.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/getActionsMaxTime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/getActionsMaxTime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name, actions, mspf) {
    var max = 0;
    if (!actions) {
        return max;
    }
    for (var selector in actions) {
        for (var eventName in actions[selector]) {
            var _a = eventName.split(':'), _ = _a[0], // always "timeline"
            timelineNameOfListener = _a[1], frameKeyOfListener = _a[2];
            // Skip non-frame-listener events
            if (!timelineNameOfListener || !frameKeyOfListener) {
                continue;
            }
            // Skip frame listeners for timelines other than us
            if (timelineNameOfListener !== name) {
                continue;
            }
            var frameOfListener = Number(frameKeyOfListener);
            var timeOfListener = frameOfListener * mspf;
            if (timeOfListener > max) {
                max = timeOfListener;
            }
        }
    }
    return max;
});
//# sourceMappingURL=getActionsMaxTime.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/getParsedProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/getParsedProperty.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HAIKU_CONFIG_PROPS_RENAME_MAPPING = {
    haikuOptions: 'options',
    haikuStates: 'states',
    haikuInitialStates: 'states',
    haikuEventHandlers: 'eventHandlers',
    haikuTimelines: 'timelines',
    haikuVanities: 'vanities',
};
/**
 * Parses a specific property specified by `verboseKeyName` from the `props`
 * object, renaming and merging legacy props as necessary.
 * This method is mainly used by the React and Vue adapters.
 * @param props
 * @param verboseKeyName
 * @returns {Object}
 */
var getParsedProperty = function (props, verboseKeyName) {
    var result = {};
    var haikuConfigRemappedKey = HAIKU_CONFIG_PROPS_RENAME_MAPPING[verboseKeyName];
    var haikuConfigFinalKey = haikuConfigRemappedKey || verboseKeyName;
    // Special case: Options used to be a separate object, so if we see this legacy
    // format, just merge it in with the root level of the new options
    if (haikuConfigFinalKey === 'options') {
        for (var optionsSubKey in props[verboseKeyName]) {
            result[optionsSubKey] = props[verboseKeyName][optionsSubKey];
        }
    }
    else {
        result[haikuConfigFinalKey] = props[verboseKeyName];
    }
    return result;
};
exports.default = getParsedProperty;
//# sourceMappingURL=getParsedProperty.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/getTimelineMaxTime.js":
/*!********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/getTimelineMaxTime.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getTimelineMaxTime(descriptor) {
    var max = 0;
    for (var selector in descriptor) {
        var group = descriptor[selector];
        for (var output in group) {
            var keyframes = group[output];
            if (typeof keyframes !== 'object') {
                // In case this is run before migrations, continue (non-object keyframes means only 0-keyframe).
                continue;
            }
            var keys = Object.keys(keyframes);
            for (var i = 0; i < keys.length; i++) {
                var key = parseInt(keys[i], 10);
                if (key > max) {
                    max = key;
                }
            }
        }
    }
    return max;
}
exports.default = getTimelineMaxTime;
//# sourceMappingURL=getTimelineMaxTime.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/interactionModes.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/interactionModes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interaction mode types.
 * @namespace {object}
 */
// tslint:disable-next-line:no-namespace
var InteractionMode;
(function (InteractionMode) {
    InteractionMode.EDIT = 0; // Default mode, all is editable
    InteractionMode.LIVE = 1; // Live mode
})(InteractionMode = exports.InteractionMode || (exports.InteractionMode = {}));
/**
 * @method isPreviewMode
 * @argument mode The mode to compare, must ve a valid InteractionMode type.
 * @description Utility that returns a boolean indicating if the provided
 * mode is 'preview' mode.
 * @returns boolean
 */
function isPreviewMode(mode) {
    return mode === InteractionMode.LIVE;
}
exports.isPreviewMode = isPreviewMode;
/**
 * @method isLiveMode
 * @argument mode The mode to compare, must ve a valid InteractionMode type.
 * @description Utility that returns a boolean indicating if the provided
 * mode is 'preview' mode.
 * @returns boolean
 */
function isLiveMode(mode) {
    return isPreviewMode(mode);
}
exports.isLiveMode = isLiveMode;
//# sourceMappingURL=interactionModes.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/isMutableProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/isMutableProperty.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @method isMutableProperty
 * @description Mechanism to determine if a property is mutated within the timeline.
 */
function isMutableProperty(property, propertyName) {
    // For now, we can use a "naive" set of sufficient (but not necessary) conditions for immutability of a property:
    //   1. Has exactly one keyframe.
    //   2. The keyframe is "0".
    //   3. The value at keyframe "0" is not a function (and so it cannot be mutated by changes in the state container).
    // Although there is a more complete definition of immutability, this is enough to identify a property which is
    // "likely mutable".
    return Object.keys(property).length !== 1
        || !property.hasOwnProperty('0')
        || typeof property[0].value === 'function'
        || /^controlFlow/.test(propertyName);
}
exports.default = isMutableProperty;
//# sourceMappingURL=isMutableProperty.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/migrateAutoSizing.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/migrateAutoSizing.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layout3D_1 = __webpack_require__(/*! ../Layout3D */ "./node_modules/@haiku/core/lib/Layout3D.js");
var migrateAutoSizing = function (propertyGroup) {
    migrateAutoSizingForProperty(propertyGroup, 'sizeAbsolute.x');
    migrateAutoSizingForProperty(propertyGroup, 'sizeAbsolute.y');
};
var migrateAutoSizingForProperty = function (propertyGroup, propertyName) {
    if (propertyGroup[propertyName]) {
        for (var keyframeMs in propertyGroup[propertyName]) {
            if (propertyGroup[propertyName][keyframeMs].value === true) {
                propertyGroup[propertyName][keyframeMs].value = Layout3D_1.AUTO_SIZING_TOKEN;
            }
        }
    }
};
exports.default = migrateAutoSizing;
//# sourceMappingURL=migrateAutoSizing.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/parseCssValueString.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/parseCssValueString.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function parseCssValueString(str, optionalPropertyHint) {
    if (typeof str === 'number') {
        return {
            value: str,
            unit: null,
        };
    }
    if (str === null || str === undefined) {
        return {
            value: null,
            unit: null,
        };
    }
    var num;
    var nmatch = str.match(/([+-]?[\d|.]+)/);
    if (nmatch) {
        num = Number(nmatch[0]);
    }
    else {
        num = 0;
    }
    var unit;
    var smatch = str.match(/(em|px|%|turn|deg|in)/);
    if (smatch) {
        unit = smatch[0];
    }
    else {
        if (optionalPropertyHint && optionalPropertyHint.match(/rotate/)) {
            unit = 'deg';
        }
        else {
            unit = null;
        }
    }
    return {
        unit: unit,
        value: num,
    };
}
exports.default = parseCssValueString;
//# sourceMappingURL=parseCssValueString.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/helpers/transformValueIsEssentiallyInt.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/helpers/transformValueIsEssentiallyInt.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true iff a transform value is "essentially" a specified basis int.
 */
exports.transformValueIsEssentiallyInt = function (transformValue, basis) { return Math.abs(transformValue - basis) < 1e-6; };
//# sourceMappingURL=transformValueIsEssentiallyInt.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/layout/applyCssLayout.js":
/*!***************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/layout/applyCssLayout.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Layout3D_1 = __webpack_require__(/*! ../Layout3D */ "./node_modules/@haiku/core/lib/Layout3D.js");
var formatTransform_1 = __webpack_require__(/*! ./formatTransform */ "./node_modules/@haiku/core/lib/layout/formatTransform.js");
var scopeOfElement_1 = __webpack_require__(/*! ./scopeOfElement */ "./node_modules/@haiku/core/lib/layout/scopeOfElement.js");
var SVG = 'svg';
function hasExplicitStyle(domElement, key) {
    if (!domElement.haiku) {
        return false;
    }
    if (!domElement.haiku.explicitStyles) {
        return false;
    }
    return domElement.haiku.explicitStyles[key] !== undefined;
}
/**
 * SVG tags which can receive width and height styles.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height}
 */
exports.SVG_SIZEABLES = {
    feBlend: true,
    feColorMatrix: true,
    feComponentTransfer: true,
    feComposite: true,
    feConvolveMatrix: true,
    feDiffuseLighting: true,
    feDisplacementMap: true,
    feDropShadow: true,
    feFlood: true,
    feGaussianBlur: true,
    feImage: true,
    feMerge: true,
    feMorphology: true,
    feOffset: true,
    feSpecularLighting: true,
    feTile: true,
    feTurbulence: true,
    filter: true,
    foreignObject: true,
    image: true,
    mask: true,
    pattern: true,
    rect: true,
    use: true,
};
function applyCssLayout(domElement, virtualElement, nodeLayout, computedLayout, context) {
    // No point continuing if there's no computedLayout contents
    if (computedLayout.opacity === undefined && !computedLayout.size && !computedLayout.matrix) {
        return;
    }
    var elementScope = scopeOfElement_1.default(virtualElement);
    if (nodeLayout.shown === false) {
        if (domElement.style.visibility !== 'hidden') {
            domElement.style.visibility = 'hidden';
        }
    }
    else if (nodeLayout.shown === true) {
        if (domElement.style.visibility !== 'visible') {
            domElement.style.visibility = 'visible';
        }
    }
    if (!hasExplicitStyle(domElement, 'opacity')) {
        // No opacity defined means use whatever the previously defined opacity was
        if (computedLayout.opacity === undefined) {
            // no-op
        }
        else {
            var finalOpacity = void 0;
            if (computedLayout.opacity >= 0.999) {
                finalOpacity = 1;
            }
            else if (computedLayout.opacity <= 0.0001) {
                finalOpacity = 0;
            }
            else {
                finalOpacity = computedLayout.opacity;
            }
            var opacityString = '' + finalOpacity;
            if (domElement.style.opacity !== opacityString) {
                domElement.style.opacity = opacityString;
            }
        }
    }
    if (computedLayout.size) {
        if (elementScope === SVG) {
            // Only set width/height attributes on SVG elements that can potentially receive them
            // (and do something with them).
            if (exports.SVG_SIZEABLES[virtualElement.elementName]) {
                if (computedLayout.size.x !== undefined &&
                    domElement.getAttribute('width') === null &&
                    domElement.getAttribute('width') !== computedLayout.size.x) {
                    domElement.setAttribute('width', computedLayout.size.x);
                }
                if (computedLayout.size.y !== undefined &&
                    domElement.getAttribute('height') === null &&
                    domElement.getAttribute('height') !== computedLayout.size.y) {
                    domElement.setAttribute('height', computedLayout.size.y);
                }
            }
        }
        else {
            if (!hasExplicitStyle(domElement, 'width')) {
                if (computedLayout.size.x !== undefined) {
                    var sizeXString = parseFloat(computedLayout.size.x.toFixed(2)) + 'px';
                    if (domElement.style.width !== sizeXString) {
                        domElement.style.width = sizeXString;
                    }
                }
                if (computedLayout.size.y !== undefined) {
                    var sizeYString = parseFloat(computedLayout.size.y.toFixed(2)) + 'px';
                    if (domElement.style.height !== sizeYString) {
                        domElement.style.height = sizeYString;
                    }
                }
            }
        }
    }
    if (Layout3D_1.default.virtualElementIsLayoutContainer(virtualElement) && !domElement.style.transformOrigin) {
        // Reset the transform-origin so that our layout system can be self-contained.
        domElement.style.transformOrigin = '0% 0% 0px';
    }
    if (computedLayout.matrix) {
        var matrixString = formatTransform_1.default(computedLayout.matrix, nodeLayout.format);
        if (matrixString === domElement.haiku.cachedTransform) {
            return;
        }
        domElement.haiku.cachedTransform = matrixString;
        if (elementScope === SVG &&
            // IE doesn't support using transform on the CSS style in SVG elements, so if we are in SVG, and if we are
            // inside an IE context, use the transform attribute itself. Always prefer the transform attribute for 2D inner
            // SVG attributes, which have more consistent cross-browser behavior.
            (nodeLayout.format === Layout3D_1.default.FORMATS.TWO ||
                context.config.platform.isIE ||
                context.config.platform.isEdge)) {
            domElement.setAttribute('transform', matrixString);
        }
        else if (!hasExplicitStyle(domElement, 'transform') && !domElement.getAttribute('transform')) {
            // A domElement might have an explicit transform override set, in which case, don't
            // attach the style transform to this node, because we will likely clobber what they've set
            domElement.style.transform = matrixString;
        }
    }
}
exports.default = applyCssLayout;
//# sourceMappingURL=applyCssLayout.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/layout/formatTransform.js":
/*!****************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/layout/formatTransform.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file contains modified code from https://github.com/famous/engine
 *
 * The original code was released under the MIT license.
 *
 * MIT License (MIT)
 *
 * Copyright (c) 2015 Famous Industries Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var transformValueIsEssentiallyInt_1 = __webpack_require__(/*! ../helpers/transformValueIsEssentiallyInt */ "./node_modules/@haiku/core/lib/helpers/transformValueIsEssentiallyInt.js");
var Layout3D_1 = __webpack_require__(/*! ../Layout3D */ "./node_modules/@haiku/core/lib/Layout3D.js");
var TRANSFORM_ZERO = '0';
var TRANSFORM_COMMA = ',';
var simplifyTransform = function (transform) { return transformValueIsEssentiallyInt_1.transformValueIsEssentiallyInt(transform, 0) ? TRANSFORM_ZERO : transform; };
function formatTransform(transform, format) {
    if (format === Layout3D_1.default.FORMATS.TWO) {
        // Example: matrix(1,0,0,0,0,1)
        // 2d matrix is: matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
        // Modify via: matrix(a,b,c,d,tx,ty) <= matrix3d(a,b,0,0,c,d,0,0,0,0,1,0,tx,ty,0,1)
        return "matrix(" + [
            transform[0],
            transform[1],
            transform[4],
            transform[5],
            transform[12],
            transform[13],
        ].map(simplifyTransform).join(TRANSFORM_COMMA) + ")";
    }
    // Example: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
    return "matrix3d(" + transform.map(simplifyTransform).join(TRANSFORM_COMMA) + ")";
}
exports.default = formatTransform;
//# sourceMappingURL=formatTransform.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/layout/scopeOfElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/layout/scopeOfElement.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function scopeOfElement(mana) {
    if (mana.__memory.scope) {
        return mana.__memory.scope;
    }
    if (mana.__memory && mana.__memory.parent) {
        return scopeOfElement(mana.__memory.parent);
    }
    return null;
}
exports.default = scopeOfElement;
//# sourceMappingURL=scopeOfElement.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/JavaScriptIdentifier.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/JavaScriptIdentifier.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ReservedWords_1 = __webpack_require__(/*! ./ReservedWords */ "./node_modules/@haiku/core/lib/reflection/ReservedWords.js");
var WRAP_PREFIX = '_$';
var WRAP_SUFFIX = '$_';
var VALIDITY_REGEX = /(^[^a-zA-Z_\$])|([^a-zA-Z_\$0-9])/g;
function charReplacer(c) {
    return WRAP_PREFIX + c.charCodeAt(0) + WRAP_SUFFIX;
}
function isInt(value) {
    return !isNaN(parseInt(value, 10)) && parseInt(value, 10) === parseFloat(value);
}
/**
 * @function toIdentifier
 * @description Converts arbitrary text into a valid JavaScript identifier.
 * This operation should be reversible.
 */
function toIdentifier(str) {
    var out = str;
    out = out.replace(VALIDITY_REGEX, charReplacer);
    if (ReservedWords_1.default.WORDS[out]) {
        return "" + WRAP_PREFIX + out + WRAP_SUFFIX;
    }
    return out;
}
exports.toIdentifier = toIdentifier;
/**
 * @function toText
 * @description Inverse of toIdentifier
 */
function toText(str) {
    return str.replace(/_\$([a-zA-Z_0-9]+)\$_/g, function (full) {
        var part = full.slice(2, full.length - 2);
        // Ignore JavaScript keywords that we may have wrapped
        if (isInt(part)) {
            return String.fromCharCode(parseInt(part, 10));
        }
        return part;
    });
}
exports.toText = toText;
//# sourceMappingURL=JavaScriptIdentifier.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/ReservedWords.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/ReservedWords.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Just a dictionary of all JavaScript reserved words (current and future).
 * This is used during code generation to ensure that neither element attributes
 * nor user-defined states collide with known keywords which will cause problems
 * with codegen and runtime exceptions.
 */
/* tslint:disable */
var WORDS = {
    'enum': true,
    'function': true,
    'implements': true,
    'with': true,
    'abstract': true,
    'arguments': true,
    'await': true,
    'boolean': true,
    'break': true,
    'byte': true,
    'case': true,
    'catch': true,
    'char': true,
    'class': true,
    'const': true,
    'continue': true,
    'debugger': true,
    'default': true,
    'delete': true,
    'do': true,
    'double': true,
    'else': true,
    'eval': true,
    'export': true,
    'extends': true,
    'false': true,
    'final': true,
    'finally': true,
    'float': true,
    'for': true,
    'goto': true,
    'if': true,
    'import': true,
    'in': true,
    'instanceof': true,
    'int': true,
    'interface': true,
    'let': true,
    'long': true,
    'native': true,
    'new': true,
    'null': true,
    'package': true,
    'private': true,
    'protected': true,
    'public': true,
    'return': true,
    'short': true,
    'static': true,
    'super': true,
    'switch': true,
    'synchronized': true,
    'this': true,
    'throw': true,
    'throws': true,
    'transient': true,
    'true': true,
    'try': true,
    'typeof': true,
    'undefined': true,
    'var': true,
    'void': true,
    'volatile': true,
    'while': true,
    'yield': true,
};
/* tslint:enable */
var isReserved = function (word) {
    return WORDS[word];
};
exports.default = {
    isReserved: isReserved,
    WORDS: WORDS,
};
//# sourceMappingURL=ReservedWords.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/Tokenizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/Tokenizer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = function (source, regexps) {
    var tokens = [];
    var chunk = source;
    var total = chunk.length;
    var iterations = 0;
    while (chunk.length > 0) {
        for (var i = 0; i < regexps.length; i++) {
            var regexp = regexps[i];
            var match = regexp.re.exec(chunk);
            if (match) {
                var value = match[0];
                tokens.push({ value: value, type: regexp.type });
                // Need to slice the chunk at the value match length
                chunk = chunk.slice(match[0].length, chunk.length);
                break;
            }
        }
        // We've probably failed to parse correctly if we get here
        if (iterations++ > total) {
            throw new Error("Unable to tokenize expression " + source);
        }
    }
    return tokens;
};
// Order matters
var PARAMETERS_REGEXPS = [
    { type: 'whitespace', re: /^[\s]+/ },
    { type: 'paren_open', re: /^\(/ },
    { type: 'paren_close', re: /^\)/ },
    { type: 'square_open', re: /^\[/ },
    { type: 'square_close', re: /^]/ },
    { type: 'curly_open', re: /^\{/ },
    { type: 'curly_close', re: /^\}/ },
    { type: 'rest', re: /^\.\.\./ },
    { type: 'colon', re: /^:/ },
    { type: 'comma', re: /^,/ },
    { type: 'identifier', re: /^[a-zA-Z0-9_$]+/ },
];
exports.tokenizeParameters = function (source) {
    return exports.tokenize(source, PARAMETERS_REGEXPS);
};
var SYMBOLS = '~!@#$%^&*-_=+/|:\'<,>.?'.split('').join('\\');
var DIRECTIVE_REGEXPS = [
    { type: 'whitespace', re: /^[\s]+/ },
    { type: 'paren_open', re: /^\(/ },
    { type: 'paren_close', re: /^\)/ },
    // If you want to count -123 as a negative number, use ^-?\d at column 56
    { type: 'number', re: /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i },
    { type: 'symbol', re: new RegExp('^([$' + SYMBOLS + '][$' + SYMBOLS + ']*)([^\\n\\S]*:(?!:))?') },
    { type: 'identifier', re: new RegExp('^([$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)([^\\n\\S]*:(?!:))?') },
];
exports.tokenizeDirective = function (source) {
    var tokens = exports.tokenize(source, DIRECTIVE_REGEXPS).filter(function (token) {
        return token.type !== 'whitespace';
    });
    tokens.forEach(function (token) {
        if (token.type === 'number') {
            token.value = Number(token.value);
        }
    });
    return tokens;
};
exports.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
//# sourceMappingURL=Tokenizer.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/enhance.js":
/*!************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/enhance.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var functionToRFO_1 = __webpack_require__(/*! ./functionToRFO */ "./node_modules/@haiku/core/lib/reflection/functionToRFO.js");
function enhance(fn, params) {
    // Only create a specification if we don't already have one
    if (!fn.specification) {
        var rfo = functionToRFO_1.default(fn);
        if (rfo && rfo.__function) {
            // Cache this so we don't expensively parse each time
            fn.specification = rfo.__function;
            // Allow an explicit list of params to override ours
            if (params) {
                fn.specification.params = params;
            }
        }
        else {
            // Signal that this function is of an unknown kind
            // so future runs don't try to parse this one again
            fn.specification = true;
        }
    }
}
exports.default = enhance;
//# sourceMappingURL=enhance.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/functionSpecificationToFunction.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/functionSpecificationToFunction.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var marshalParams_1 = __webpack_require__(/*! ./marshalParams */ "./node_modules/@haiku/core/lib/reflection/marshalParams.js");
function functionSpecificationToFunction(name, params, body, type) {
    if (type === void 0) { type = 'FunctionExpression'; }
    var fn;
    if (type === 'ArrowFunctionExpression') {
        // tslint:disable-next-line:no-function-constructor-with-string-args
        fn = new Function('\n' +
            'return ' +
            (name || '') +
            '(' +
            marshalParams_1.default(params) +
            ') => {\n' +
            '  ' +
            (body || '') +
            '\n' +
            '}\n')();
    }
    else {
        // tslint:disable-next-line:no-function-constructor-with-string-args
        fn = new Function('\n' +
            'return function ' +
            (name || '') +
            '(' +
            marshalParams_1.default(params) +
            ') {\n' +
            '  ' +
            (body || '') +
            '\n' +
            '}\n')();
    }
    return fn;
}
exports.default = functionSpecificationToFunction;
//# sourceMappingURL=functionSpecificationToFunction.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/functionToRFO.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/functionToRFO.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Tokenizer_1 = __webpack_require__(/*! ./Tokenizer */ "./node_modules/@haiku/core/lib/reflection/Tokenizer.js");
function nth(n, type, arr) {
    var none = { value: null, type: 'void' };
    if (arr.length < 1 || n > arr.length) {
        return none;
    }
    var f = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].type === type) {
            f += 1;
        }
        if (f === n) {
            return arr[i];
        }
    }
    return none;
}
function tokensToParams(tokens) {
    if (tokens.length < 1) {
        return [];
    }
    // HACK: Rather than property ast-ize this, we're just going to go through it linearly and make JSON.
    var json = '';
    var frag = '';
    var next;
    var token = tokens.shift();
    var scopes = [];
    while (token) {
        switch (token.type) {
            case 'whitespace':
                frag = ' ';
                break;
            case 'comma':
                frag = ',';
                break;
            case 'colon':
                frag = ':';
                break;
            // Treat parens as an 'array' scope, e.g. at top level of function signature arguments
            case 'paren_open':
                frag = '[';
                scopes.push('square');
                break;
            case 'paren_close':
                frag = ']';
                scopes.pop();
                break;
            case 'square_open':
                frag = '[';
                scopes.push('square');
                break;
            case 'square_close':
                frag = ']';
                scopes.pop();
                break;
            case 'curly_open':
                frag = '{';
                scopes.push('curly');
                break;
            case 'curly_close':
                frag = '}';
                scopes.pop();
                break;
            case 'rest':
                next = tokens.shift();
                frag = JSON.stringify({ __rest: next.value });
                break;
            case 'identifier':
                frag = '"' + token.value + '"';
                // If the next token is a comma, we are a self-referential property
                if (tokens[0] &&
                    (tokens[0].type === 'comma' ||
                        tokens[0].type === 'square_close' ||
                        tokens[0].type === 'curly_close')) {
                    // Handle differently inside array vs object, e.g.:
                    // { a: a, b: b } vs [ a, b, c ]
                    var scope = scopes[scopes.length - 1];
                    if (scope === 'square') {
                        frag += '';
                    }
                    else {
                        frag += ':"' + token.value + '"';
                    }
                }
                break;
            default:
                frag = '';
        }
        json += frag;
        token = tokens.shift();
    }
    return JSON.parse(json);
}
function signatureToParams(signature) {
    var tokens = Tokenizer_1.tokenizeParameters(signature);
    var clean = [];
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].type !== 'whitespace') {
            clean.push(tokens[i]);
        }
    }
    try {
        return tokensToParams(clean);
    }
    catch (exception) {
        console.warn("Unable to parse signature " + signature, exception);
        return [];
    }
}
function functionToRFO(fn) {
    var str = fn.toString();
    // HACK: Remove paren wrapping if any was provided
    if (str[str.length - 1] === ')') {
        if (str[0] === '(') {
            str = str.slice(1);
        }
    }
    var pidx1 = str.indexOf('(');
    var pidx2 = str.indexOf(')');
    var prefix = str.slice(0, pidx1);
    var signature = str.slice(pidx1, pidx2 + 1);
    var suffix = str.slice(pidx2 + 1, str.length);
    var body = suffix.slice(suffix.indexOf('{') + 1, suffix.length - 1).trim(); // Don't include braces or padding
    var type = suffix.match(/^\s*=>\s*{/)
        ? 'ArrowFunctionExpression'
        : 'FunctionExpression';
    var name = nth(2, 'identifier', Tokenizer_1.tokenizeParameters(prefix)).value;
    var params = signatureToParams(signature);
    var spec = {
        type: type,
        name: name,
        params: params,
        body: body,
    };
    // If the runtime function is labeled as an injectee, we *must* indicate as much
    // in the specification so that serialization back to code wraps it properly
    if (fn.injectee) {
        spec.injectee = true;
    }
    return {
        __function: spec,
    };
}
exports.default = functionToRFO;
//# sourceMappingURL=functionToRFO.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/inject.js":
/*!***********************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/inject.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var enhance_1 = __webpack_require__(/*! ./enhance */ "./node_modules/@haiku/core/lib/reflection/enhance.js");
function inject() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var fn = args.shift();
    if (typeof fn !== 'function') {
        console.warn('[haiku core] Inject expects a function as the first argument');
        return fn;
    }
    if (args.length > 0) {
        enhance_1.default(fn, args);
    }
    else {
        enhance_1.default(fn, null); // If no args here, let 'enhance' try to parse them out
    }
    // Used by Haiku.app
    fn.injectee = true;
    return fn;
}
exports.default = inject;
//# sourceMappingURL=inject.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/marshalParams.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/marshalParams.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var JavaScriptIdentifier_1 = __webpack_require__(/*! ./JavaScriptIdentifier */ "./node_modules/@haiku/core/lib/reflection/JavaScriptIdentifier.js");
var data = {
    baddies: 0,
};
function arrayParamToString(param) {
    var pieces = [];
    for (var i = 0; i < param.length; i++) {
        pieces.push(stringifyParam(param[i], null));
    }
    return '[ ' + pieces.join(', ') + ' ]';
}
function objectParamToString(param) {
    var pieces = [];
    // Special case, an object that describes a rest parameter
    if (param.__rest) {
        return '...' + param.__rest;
    }
    for (var key in param) {
        pieces.push(stringifyParam(param[key], key));
    }
    return '{ ' + pieces.join(', ') + ' }';
}
function stringifyParam(param, key) {
    if (param && typeof param === 'string') {
        return JavaScriptIdentifier_1.toIdentifier(param);
    }
    if (param && Array.isArray(param)) {
        // Let `a: []` be a signal that we only want to access 'a'
        if (param.length < 1) {
            return key;
        }
        if (key) {
            // e.g.: a, a: [...] <~ To allow reference to the destructure root
            return key + ', ' + key + ': ' + arrayParamToString(param);
        }
        return arrayParamToString(param);
    }
    if (param && typeof param === 'object') {
        // Let `a: {}` be a signal that we only want to access 'a'
        if (Object.keys(param).length < 1) {
            return key;
        }
        if (key) {
            // e.g. a, a: { ... } <~ To allow reference to the destructure root
            return key + ', ' + key + ': ' + objectParamToString(param);
        }
        return objectParamToString(param);
    }
    // In case we get something we just can't handle, create something unique and noticeably ugly.
    return '__' + data.baddies++ + '__';
}
function marshalParams(params) {
    return params
        .map(function (param) {
        // Need wrap function to avoid passing the index (key) to stringifyParam, which uses that to detect something
        return stringifyParam(param, null);
    })
        .join(', ');
}
exports.default = marshalParams;
//# sourceMappingURL=marshalParams.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/reflection/reifyRFO.js":
/*!*************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/reflection/reifyRFO.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var functionSpecificationToFunction_1 = __webpack_require__(/*! ./functionSpecificationToFunction */ "./node_modules/@haiku/core/lib/reflection/functionSpecificationToFunction.js");
var inject_1 = __webpack_require__(/*! ./inject */ "./node_modules/@haiku/core/lib/reflection/inject.js");
function reifyRFO(rfo) {
    var fn = functionSpecificationToFunction_1.default(rfo.name || '', rfo.params, rfo.body, rfo.type);
    // Upstream can signal that this function needs to become 'injected'
    // in order to function properly using this flag
    if (rfo.injectee) {
        inject_1.default.apply(null, [fn].concat(rfo.params));
    }
    return fn;
}
exports.default = reifyRFO;
//# sourceMappingURL=reifyRFO.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/HaikuDOMRenderer.js":
/*!************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/HaikuDOMRenderer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuBase_1 = __webpack_require__(/*! ../../HaikuBase */ "./node_modules/@haiku/core/lib/HaikuBase.js");
var HaikuComponent_1 = __webpack_require__(/*! ../../HaikuComponent */ "./node_modules/@haiku/core/lib/HaikuComponent.js");
var assign_1 = __webpack_require__(/*! ../../vendor/assign */ "./node_modules/@haiku/core/lib/vendor/assign/index.js");
var applyLayout_1 = __webpack_require__(/*! ./applyLayout */ "./node_modules/@haiku/core/lib/renderers/dom/applyLayout.js");
var assignAttributes_1 = __webpack_require__(/*! ./assignAttributes */ "./node_modules/@haiku/core/lib/renderers/dom/assignAttributes.js");
var createRightClickMenu_1 = __webpack_require__(/*! ./createRightClickMenu */ "./node_modules/@haiku/core/lib/renderers/dom/createRightClickMenu.js");
var createSvgElement_1 = __webpack_require__(/*! ./createSvgElement */ "./node_modules/@haiku/core/lib/renderers/dom/createSvgElement.js");
var createTextNode_1 = __webpack_require__(/*! ./createTextNode */ "./node_modules/@haiku/core/lib/renderers/dom/createTextNode.js");
var getElementSize_1 = __webpack_require__(/*! ./getElementSize */ "./node_modules/@haiku/core/lib/renderers/dom/getElementSize.js");
var getLocalDomEventPosition_1 = __webpack_require__(/*! ./getLocalDomEventPosition */ "./node_modules/@haiku/core/lib/renderers/dom/getLocalDomEventPosition.js");
var getTypeAsString_1 = __webpack_require__(/*! ./getTypeAsString */ "./node_modules/@haiku/core/lib/renderers/dom/getTypeAsString.js");
var isBlankString_1 = __webpack_require__(/*! ./isBlankString */ "./node_modules/@haiku/core/lib/renderers/dom/isBlankString.js");
var isTextNode_1 = __webpack_require__(/*! ./isTextNode */ "./node_modules/@haiku/core/lib/renderers/dom/isTextNode.js");
var normalizeName_1 = __webpack_require__(/*! ./normalizeName */ "./node_modules/@haiku/core/lib/renderers/dom/normalizeName.js");
var removeElement_1 = __webpack_require__(/*! ./removeElement */ "./node_modules/@haiku/core/lib/renderers/dom/removeElement.js");
var replaceElementWithText_1 = __webpack_require__(/*! ./replaceElementWithText */ "./node_modules/@haiku/core/lib/renderers/dom/replaceElementWithText.js");
var isNil = function (v) {
    return v === undefined || v === null;
};
var connectTarget = function (virtualNode, domElement) {
    if (virtualNode && typeof virtualNode === 'object') {
        // This normally happens in HaikuComponent.hydrateNode, but we might be operating
        // as a thin-renderer where no hydration has occurred; so do the bootstrapping here.
        if (!virtualNode.__memory) {
            virtualNode.__memory = {};
        }
        // A virtual node can have multiple targets in the DOM due to an implementation
        // detail in the Haiku editing environment; FIXME
        if (!virtualNode.__memory.targets) {
            virtualNode.__memory.targets = [];
        }
        if (virtualNode.__memory.targets.indexOf(domElement) === -1) {
            virtualNode.__memory.targets.push(domElement);
        }
    }
};
// tslint:disable:variable-name
var HaikuDOMRenderer = /** @class */ (function (_super) {
    __extends(HaikuDOMRenderer, _super);
    function HaikuDOMRenderer(mount, config) {
        var _this = _super.call(this) || this;
        _this.shouldListenerReceiveEvent = function (name, rewritten, event, match, mount) {
            if (name === 'hover' || name === 'unhover') {
                return event.target === match;
            }
            if (name === 'keyup' || name === 'keydown' || name === 'keypress') {
                // See not about keyboard handling in HaikuDOMRenderer#decideMountElement
                if (mount === _this.getWindow()) {
                    return true;
                }
            }
            // Since we subscribe to events from the root element, we rewrite these as 'mouseover' and 'mouseout'
            // so we can adequately capture "bubbled" enters/leaves to meet the 99% expectation of users. Then
            // we mimic the bubbling logic here so the semantics align with normal DOM semantics
            if (name === 'mouseenter' || name === 'mouseleave') {
                return (match === event.target &&
                    ( // Don't fire if the user's mouse went from inside the child into the target
                    !match.contains ||
                        !match.contains(event.relatedTarget)));
            }
            return (match === event.target ||
                (match.contains && match.contains(event.target)));
        };
        _this.mount = mount;
        _this.user = {
            mouse: {
                x: 0,
                y: 0,
                down: 0,
                buttons: [0, 0, 0],
            },
            keys: {},
            touches: [],
            mouches: [],
        };
        _this.config = config;
        _this.shouldCreateContainer = true;
        // Ensure we don't conflict with existing content in the mount
        _this.clear();
        return _this;
    }
    HaikuDOMRenderer.prototype.clear = function () {
        if (this.mount) {
            while (this.mount.firstChild) {
                this.mount.removeChild(this.mount.firstChild);
            }
        }
    };
    HaikuDOMRenderer.prototype.getMountForComponent = function (component) {
        // The component without a host is the root component, and uses this node.
        if (!component.host) {
            return this.mount;
        }
        return component.target && component.target.parentNode;
    };
    HaikuDOMRenderer.prototype.render = function (virtualContainer, virtualTree, component) {
        return HaikuDOMRenderer.renderTree(
        // The injected mount is for the case that the caller wants to render into a node
        // other than the root node of the context, for example calling render on a subcomponent
        this.getMountForComponent(component), virtualContainer, [virtualTree], component, false, // isPatchOperation
        false);
    };
    HaikuDOMRenderer.prototype.patch = function (component, deltas) {
        // The component upstream may use an empty value to indicate a no-op
        if (!deltas || Object.keys(deltas).length < 1) {
            return;
        }
        for (var compositeId in deltas) {
            var virtualElement = deltas[compositeId];
            var parentVirtualElement = virtualElement.__memory && virtualElement.__memory.parent;
            var domTargets = virtualElement.__memory && virtualElement.__memory.targets;
            if (!domTargets) {
                continue;
            }
            for (var i = 0; i < domTargets.length; i++) {
                var domTarget = domTargets[i];
                if (!domTarget.parentNode) {
                    continue;
                }
                HaikuDOMRenderer.updateElement(domTarget, // DOM node
                virtualElement, // mana node
                domTarget.parentNode, // DOM node
                parentVirtualElement, // mana node
                component, true);
            }
        }
    };
    HaikuDOMRenderer.prototype.menuize = function (component) {
        return createRightClickMenu_1.default(this.mount, component);
    };
    HaikuDOMRenderer.prototype.mixpanel = function (mixpanelToken, component) {
        return mixpanelInit(mixpanelToken, component);
    };
    HaikuDOMRenderer.prototype.hasSizing = function () {
        return this.config && this.config.sizing && this.config.sizing !== 'normal';
    };
    HaikuDOMRenderer.prototype.getZoom = function () {
        return ((this.config && this.config.zoom) || 1.0);
    };
    HaikuDOMRenderer.prototype.getPan = function () {
        return {
            x: (this.config && this.config.pan && this.config.pan.x) || 0,
            y: (this.config && this.config.pan && this.config.pan.y) || 0,
        };
    };
    HaikuDOMRenderer.prototype.createContainer = function (out) {
        if (out === void 0) { out = {}; }
        var size;
        if (this.mount) {
            size = getElementSize_1.default(this.mount);
        }
        else {
            console.warn('[haiku dom renderer] mount empty; using fallback size');
            size = { x: 1, y: 1 };
        }
        out.layout = {
            computed: {
                size: size,
            },
        };
        if (!this.hasSizing() || !this.config.alwaysComputeSizing) {
            this.shouldCreateContainer = false;
        }
        return out;
    };
    HaikuDOMRenderer.prototype.getDocument = function () {
        return this.mount.ownerDocument;
    };
    HaikuDOMRenderer.prototype.getWindow = function () {
        var doc = this.getDocument();
        return doc.defaultView || doc.parentWindow;
    };
    HaikuDOMRenderer.prototype.initialize = function () {
        var _this = this;
        var user = this.user;
        var setMouse = function (mouseEvent) {
            // Since the mount itself might be subject to sizing styles that we cannot
            // use to calculate appropriately, use the top element i.e. the 'artboard'
            var topElement = _this.mount.childNodes[0];
            if (topElement) {
                var pos = getLocalDomEventPosition_1.default(mouseEvent, topElement);
                user.mouse.x = pos.x;
                user.mouse.y = pos.y;
            }
        };
        var setTouches = function (touchEvent) {
            user.touches.splice(0);
            // Since the mount itself might be subject to sizing styles that we cannot
            // use to calculate appropriately, use the top element i.e. the 'artboard'
            var topElement = _this.mount.childNodes[0];
            if (topElement) {
                for (var i = 0; i < touchEvent.touches.length; i++) {
                    var touch = touchEvent.touches[i];
                    var pos = getLocalDomEventPosition_1.default(touch, topElement);
                    user.touches.push(pos);
                }
            }
        };
        var setMouches = function () {
            user.mouches.splice(0);
            // Only treat a mouse like a touch if it is down.
            if (user.mouse.down) {
                user.mouches.push(user.mouse);
            }
            user.mouches.push.apply(user.mouches, user.touches);
        };
        var clearKey = function () {
            for (var which in user.keys) {
                user.keys[which] = 0;
            }
        };
        var clearMouse = function () {
            user.mouse.down = 0;
            user.touches.splice(0);
            for (var i = 0; i < user.mouse.buttons.length; i++) {
                user.mouse.buttons[i] = 0;
            }
        };
        var clearMouch = function () {
            user.mouches.splice(0);
        };
        var clearTouch = function () {
            user.touches.splice(0);
        };
        var doc = this.getDocument();
        var win = this.getWindow();
        this.mount.addEventListener('mousedown', function (mouseEvent) {
            ++user.mouse.down;
            ++user.mouse.buttons[mouseEvent.button];
            setMouse(mouseEvent);
            setMouches();
        });
        this.mount.addEventListener('mouseup', function (mouseEvent) {
            clearMouse();
            clearMouch();
            setMouches();
        });
        var lastMoveTarget;
        // NOTE: if there are perf or interop issues that arise from
        //       attaching event listeners directly to host window,
        //       could expose a haikuOption for reverting to "attach to mount" behavior
        win.addEventListener('mousemove', function (mouseEvent) {
            setMouse(mouseEvent);
            setMouches();
            if (lastMoveTarget !== mouseEvent.target) {
                lastMoveTarget = mouseEvent.target;
                var moveElement = void 0;
                // If the move has taken us outside of our component, use the mount
                if (_this.mount.contains(mouseEvent.target)) {
                    moveElement = _this.getHaikuElementFromTarget(mouseEvent.target);
                }
                else {
                    moveElement = _this.getHaikuElementFromTarget(_this.mount);
                }
                if (moveElement) {
                    moveElement.triggerHover(mouseEvent);
                }
            }
        });
        win.addEventListener('mouseenter', function (mouseEvent) {
            clearMouse();
            clearMouch();
        });
        win.addEventListener('mouseleave', function (mouseEvent) {
            clearMouse();
            clearMouch();
        });
        this.mount.addEventListener('wheel', function (mouseEvent) {
            setMouse(mouseEvent);
            setMouches();
        }, {
            passive: true,
        });
        doc.addEventListener('keydown', function (keyEvent) {
            if (user.keys[keyEvent.which] === undefined) {
                user.keys[keyEvent.which] = 0;
            }
            ++user.keys[keyEvent.which];
        });
        doc.addEventListener('keyup', function (keyEvent) {
            if (user.keys[keyEvent.which] === undefined) {
                user.keys[keyEvent.which] = 0;
            }
            // Known Mac "feature" where keyup never fires while meta key (91) is down
            // When right-click menu is toggled we don't get all mouseup events
            if (keyEvent.which === 91 || keyEvent.which === 17) {
                clearKey();
            }
            user.keys[keyEvent.which] = 0;
        });
        // If there's any sizing mode that requires computation of container size
        // and alwaysComputeSizing is *disabled*, make an "overriding" assumption
        // that we probably want to recompute the container when media queries change.
        if (this.hasSizing() && !this.config.alwaysComputeSizing) {
            win.addEventListener('resize', function () {
                _this.shouldCreateContainer = true;
            });
            win.addEventListener('orientationchange', function () {
                _this.shouldCreateContainer = true;
            });
        }
        win.addEventListener('blur', function (blurEvent) {
            clearKey();
            clearMouse();
            clearTouch();
            clearMouch();
        });
        win.addEventListener('focus', function (blurEvent) {
            clearKey();
            clearMouse();
            clearTouch();
            clearMouch();
        });
        win.addEventListener('touchstart', function (touchEvent) {
            setTouches(touchEvent);
            setMouches();
        }, {
            passive: true,
        });
        win.addEventListener('touchend', function (touchEvent) {
            clearTouch();
            clearMouch();
        });
        win.addEventListener('touchmove', function (touchEvent) {
            setTouches(touchEvent);
            setMouches();
        }, {
            passive: true,
        });
        win.addEventListener('touchenter', function (touchEvent) {
            clearTouch();
            clearMouch();
        });
        win.addEventListener('touchleave', function (touchEvent) {
            clearTouch();
            clearMouch();
        });
    };
    HaikuDOMRenderer.prototype.decideMountElement = function (component, selector, name) {
        // For keyboard events, if subscribed to the component, and if the component is the runtime root,
        // we automatically attach its handler to window, as this is the 98%-case desired behavior
        if (name === 'keyup' || name === 'keydown' || name === 'keypress') {
            if (!component.host && "haiku:" + component.getComponentId() === selector) {
                var win = this.getWindow();
                return win;
            }
        }
        // Otherwise, fallthrough and assume we want to listen to our own mount element
        return this.mount;
    };
    HaikuDOMRenderer.prototype.mountEventListener = function (component, selector, name, listener) {
        var _this = this;
        var rewritten = name;
        if (name === 'mouseenter') {
            rewritten = 'mouseover';
        }
        else if (name === 'mouseleave') {
            rewritten = 'mouseout';
        }
        // Convert haiku:* selectors into proper attribute selectors
        var query = selector;
        if (selector.slice(0, 6) === 'haiku:') {
            query = "[haiku-id=\"" + selector.slice(6) + "\"]";
        }
        var mount = this.decideMountElement(component, selector, name);
        // Since elements inside out tree may be added or removed at will, event listener
        // management (i.e. cleanup and re-registration) becomes a problem. Rather than solve
        // that tangle, we register listeners on our mount element, which is assumed to
        // remain through the lifespan of the component, and then delegate the events as
        // appropriate per their respective specifications.
        mount.addEventListener(rewritten, function (domEvent) {
            // If no explicit selector/target for the event, just fire the listener
            if (!selector || selector === HaikuBase_1.GLOBAL_LISTENER_KEY ||
                !domEvent || !domEvent.target) {
                listener(null, _this.wrapEvent(name, domEvent, null, component));
                return;
            }
            // If no queryable node has been rendered, we can't perform a match
            if (!component.target || !component.target.parentNode) {
                return;
            }
            // If the event originated from the element or its descendants
            var match = component.target.parentNode.querySelector(query);
            if (match) {
                if (_this.shouldListenerReceiveEvent(name, rewritten, domEvent, match, mount)) {
                    listener(_this.getHaikuElementFromTarget(match), domEvent.target, _this.wrapEvent(name, domEvent, match, component));
                    return;
                }
            }
        });
    };
    HaikuDOMRenderer.prototype.getHaikuElementFromTarget = function (target) {
        return (target &&
            target.haiku &&
            target.haiku.element &&
            target.haiku.element.__memory &&
            target.haiku.element.__memory.element);
    };
    /**
     * @description An opportunity to return an event aligned with our own API semantics.
     * Keep in mind that the three elements involved here may be different:
     *   this.mount - the host node for the component, the node we actually attach listeners to.
     *   event.target - the element on which the event actually originated
     *   elementListenedTo - the element that the user is listening to the event on
     */
    HaikuDOMRenderer.prototype.wrapEvent = function (eventName, nativeEvent, elementListenedTo, hostComponent) {
        return nativeEvent;
    };
    HaikuDOMRenderer.prototype.getUser = function () {
        var zoom = this.getZoom();
        var pan = this.getPan();
        return {
            zoom: zoom,
            pan: pan,
            mouse: {
                x: (this.user.mouse.x) / zoom,
                y: (this.user.mouse.y) / zoom,
                z: 0,
                down: this.user.mouse.down,
                buttons: this.user.mouse.buttons.slice(),
            },
            keys: __assign({}, this.user.keys),
            touches: this.user.touches.slice(),
            mouches: this.user.mouches.slice(),
        };
    };
    HaikuDOMRenderer.createTagNode = function (domElement, virtualElement, parentVirtualElement, component) {
        var tagName = normalizeName_1.default(getTypeAsString_1.default(virtualElement));
        var compositeId = HaikuComponent_1.getNodeCompositeId(virtualElement);
        var newDomElement;
        if (SVG_ELEMENT_NAMES[tagName]) {
            // SVG
            newDomElement = createSvgElement_1.default(domElement, tagName);
        }
        else {
            // Normal DOM
            newDomElement = domElement.ownerDocument.createElement(tagName);
        }
        // This didn't happen in renderTree because the element didn't exist yet.
        if (!newDomElement.haiku) {
            newDomElement.haiku = {
                // This is used to detect whether the element's host component has changed.
                // Don't remove this without understanding the effect on Haiku.app.
                component: component,
                explicitStyles: {},
            };
        }
        component.subcacheEnsure(compositeId);
        var incomingKey = virtualElement.key ||
            (virtualElement.attributes && virtualElement.attributes.key);
        if (incomingKey !== undefined && incomingKey !== null) {
            newDomElement.haiku.key = incomingKey;
        }
        // updateElement recurses down into setAttributes, etc.
        HaikuDOMRenderer.updateElement(newDomElement, virtualElement, domElement, parentVirtualElement, component, null);
        return newDomElement;
    };
    HaikuDOMRenderer.appendChild = function (alreadyChildElement, virtualElement, parentDomElement, parentVirtualElement, component) {
        var domElementToInsert = isTextNode_1.default(virtualElement)
            ? createTextNode_1.default(parentDomElement, virtualElement)
            : HaikuDOMRenderer.createTagNode(parentDomElement, virtualElement, parentVirtualElement, component);
        applyLayout_1.default(domElementToInsert, virtualElement, component);
        parentDomElement.appendChild(domElementToInsert);
        return domElementToInsert;
    };
    HaikuDOMRenderer.replaceElement = function (domElement, virtualElement, parentDomNode, parentVirtualElement, component) {
        var compositeId = HaikuComponent_1.getNodeCompositeId(virtualElement);
        component.subcacheClear(compositeId);
        var newElement = isTextNode_1.default(virtualElement)
            ? createTextNode_1.default(domElement, virtualElement)
            : HaikuDOMRenderer.createTagNode(domElement, virtualElement, parentVirtualElement, component);
        applyLayout_1.default(newElement, virtualElement, component);
        parentDomNode.replaceChild(newElement, domElement);
        return newElement;
    };
    HaikuDOMRenderer.updateElement = function (domElement, virtualElement, parentNode, parentVirtualElement, component, isPatchOperation) {
        var compositeId = HaikuComponent_1.getNodeCompositeId(virtualElement);
        // If a text node, go straight to 'replace' since we don't know the tag name
        if (isTextNode_1.default(virtualElement)) {
            replaceElementWithText_1.default(domElement, virtualElement, component);
            return virtualElement;
        }
        if (!domElement.haiku) {
            domElement.haiku = {
                // This is used to detect whether the element's host component has changed.
                // Don't remove this without understanding the effect on Haiku.app.
                component: component,
                explicitStyles: {},
            };
        }
        component.subcacheEnsure(compositeId);
        if (!domElement.haiku.element) {
            // Must clone so we get a correct picture of differences in attributes between runs, e.g. for detecting attribute
            // removals
            domElement.haiku.element = HaikuDOMRenderer.cloneVirtualElement(virtualElement);
        }
        var domTagName = domElement.tagName.toLowerCase().trim();
        var elName = normalizeName_1.default(getTypeAsString_1.default(virtualElement));
        var virtualElementTagName = elName.toLowerCase().trim();
        var incomingKey = virtualElement.key || (virtualElement.attributes && virtualElement.attributes.key);
        var existingKey = domElement.haiku && domElement.haiku.key;
        var isKeyDifferent = incomingKey !== null && incomingKey !== undefined && incomingKey !== existingKey;
        // For so-called 'horizon' elements, we assume that we've ceded control to another renderer,
        // so the most we want to do is update the attributes and layout properties, but leave the rest alone
        if (!component.isHorizonElement(virtualElement)) {
            if (domTagName !== virtualElementTagName) {
                return HaikuDOMRenderer.replaceElement(domElement, virtualElement, parentNode, parentVirtualElement, component);
            }
            if (isKeyDifferent) {
                return HaikuDOMRenderer.replaceElement(domElement, virtualElement, parentNode, parentVirtualElement, component);
            }
        }
        if (virtualElement.attributes && typeof virtualElement.attributes === 'object') {
            assignAttributes_1.default(domElement, virtualElement, component, isPatchOperation);
        }
        applyLayout_1.default(domElement, virtualElement, component);
        if (incomingKey !== undefined && incomingKey !== null) {
            domElement.haiku.key = incomingKey;
        }
        var instance = (virtualElement &&
            virtualElement.__memory &&
            virtualElement.__memory.instance) || component;
        var children = (virtualElement.__memory && virtualElement.__memory.children) || virtualElement.children;
        if (Array.isArray(children)) {
            // For performance, we don't render children during a patch operation, except in the case
            // that we have some text content, which we (hack) need to always assume needs an update.
            // TODO: Fix this hack and make smarter
            var doSkipChildren = (isPatchOperation &&
                children[0] instanceof Object);
            HaikuDOMRenderer.renderTree(domElement, virtualElement, children, instance, isPatchOperation, doSkipChildren);
        }
        else if (!children) {
            // In case of falsy virtual children, we still need to remove elements that were already there
            HaikuDOMRenderer.renderTree(domElement, virtualElement, [], instance, isPatchOperation, null);
        }
        return domElement;
    };
    HaikuDOMRenderer.renderTree = function (domElement, virtualElement, virtualChildren, component, isPatchOperation, doSkipChildren) {
        connectTarget(virtualElement, domElement);
        var compositeId = HaikuComponent_1.getNodeCompositeId(virtualElement);
        if (!domElement.haiku) {
            domElement.haiku = {
                // This is used to detect whether the element's host component has changed.
                // Don't remove this without understanding the effect on Haiku.app.
                component: component,
                explicitStyles: {},
            };
        }
        domElement.haiku.virtual = virtualElement;
        // Must clone so we get a correct picture of differences in attributes
        // between runs, e.g. for detecting attribute removals
        domElement.haiku.element = HaikuDOMRenderer.cloneVirtualElement(virtualElement);
        component.subcacheEnsure(compositeId);
        if (!Array.isArray(virtualChildren)) {
            return domElement;
        }
        // For so-called 'horizon' elements, we assume that we've ceded control to another renderer,
        // so the most we want to do is update the attributes and layout properties, but leave the rest alone
        if (component.isHorizonElement(virtualElement)) {
            return domElement;
        }
        // During patch renders we don't want to drill down and update children as
        // we're just going to end up doing a lot of unnecessary DOM writes
        if (doSkipChildren) {
            return domElement;
        }
        while (virtualChildren.length > 0 && isBlankString_1.default(virtualChildren[0])) {
            virtualChildren.shift();
        }
        // Store a copy of the array here, otherwise we can hit a race where as we remove
        // elements from the DOM, the childNodes array gets shifted and the indices get offset, leading
        // to removals not occurring properly
        var domChildNodes = [];
        for (var k = 0; k < domElement.childNodes.length; k++) {
            domChildNodes[k] = domElement.childNodes[k];
        }
        var max = virtualChildren.length;
        if (max < domChildNodes.length) {
            max = domChildNodes.length;
        }
        for (var i = 0; i < max; i++) {
            var virtualChild = virtualChildren[i];
            var domChild = domChildNodes[i];
            if (isNil(virtualChild) && !domChild) {
                // empty
            }
            else if (isNil(virtualChild) && domChild) {
                removeElement_1.default(domChild, compositeId, component);
            }
            else {
                if (!domChild) {
                    var insertedElement = HaikuDOMRenderer.appendChild(null, virtualChild, domElement, virtualElement, component);
                    connectTarget(virtualChild, insertedElement);
                }
                else {
                    // Circumstances in which we want to completely *replace* the element:
                    // - We see that our cached target element is not the one at this location
                    // - We see that the DOM id doesn't match the incoming one
                    // - we see that the haiku-id doesn't match the incoming one.
                    // If we now have an element that is different, we need to trigger a full re-render
                    // of itself and all of its children, because e.g. url(#...) references will retain pointers to
                    // old elements and this is the only way to clear the DOM to get a correct render.
                    var shouldReplace = HaikuDOMRenderer.shouldElementBeReplaced(domChild, virtualChild, component);
                    if (shouldReplace) {
                        var newElement = HaikuDOMRenderer.replaceElement(domChild, virtualChild, domElement, virtualElement, component);
                        connectTarget(virtualChild, newElement);
                    }
                    else {
                        HaikuDOMRenderer.updateElement(domChild, virtualChild, domElement, virtualElement, component, isPatchOperation);
                        connectTarget(virtualChild, domChild);
                    }
                }
            }
        }
        return domElement;
    };
    HaikuDOMRenderer.shouldElementBeReplaced = function (domElement, virtualElement, component) {
        if (domElement.haiku) {
            var compositeIdNew = HaikuComponent_1.getNodeCompositeId(virtualElement);
            var compositeIdOld = HaikuComponent_1.getNodeCompositeId(domElement.haiku.element);
            if (compositeIdNew !== compositeIdOld) {
                return true;
            }
            if (domElement.haiku.component) {
                // If the element carried at this node has a different host component,
                // we should do a full replacement, since the cache of the two instances
                // are different and may result in different (cached) rendering output
                if (domElement.haiku.component !== component) {
                    return true;
                }
            }
        }
        return false;
    };
    HaikuDOMRenderer.cloneAttributes = function (attributes) {
        if (!attributes) {
            return {};
        }
        var clone = {};
        for (var key in attributes) {
            clone[key] = attributes[key];
        }
        return clone;
    };
    HaikuDOMRenderer.cloneVirtualElement = function (virtualElement) {
        return {
            elementName: virtualElement.elementName,
            attributes: HaikuDOMRenderer.cloneAttributes(virtualElement.attributes),
            children: (virtualElement.__memory && virtualElement.__memory.children) || virtualElement.children,
            __memory: virtualElement.__memory,
        };
    };
    HaikuDOMRenderer.__name__ = 'HaikuDOMRenderer';
    return HaikuDOMRenderer;
}(HaikuBase_1.default));
exports.default = HaikuDOMRenderer;
var SVG_ELEMENT_NAMES = {
    a: true,
    altGlyph: true,
    altGlyphDef: true,
    altGlyphItem: true,
    animate: true,
    animateColor: true,
    animateMotion: true,
    animateTransform: true,
    circle: true,
    clipPath: true,
    'color-profile': true,
    cursor: true,
    defs: true,
    desc: true,
    discard: true,
    ellipse: true,
    feBlend: true,
    feColorMatrix: true,
    feComponentTransfer: true,
    feComposite: true,
    feConvolveMatrix: true,
    feDiffuseLighting: true,
    feDisplacementMap: true,
    feDistantLight: true,
    feFlood: true,
    feFuncA: true,
    feFuncB: true,
    feFuncG: true,
    feFuncR: true,
    feGaussianBlur: true,
    feImage: true,
    feMerge: true,
    feMergeNode: true,
    feMorphology: true,
    feOffset: true,
    fePointLight: true,
    feSpecularLighting: true,
    feSpotLight: true,
    feTile: true,
    feTurbulence: true,
    filter: true,
    font: true,
    'font-face': true,
    'font-face-format': true,
    'font-face-name': true,
    'font-face-src': true,
    'font-face-uri': true,
    foreignObject: true,
    g: true,
    glyph: true,
    glyphRef: true,
    hkern: true,
    image: true,
    line: true,
    linearGradient: true,
    marker: true,
    mask: true,
    metadata: true,
    'missing-glyph': true,
    mpath: true,
    path: true,
    pattern: true,
    polygon: true,
    polyline: true,
    radialGradient: true,
    rect: true,
    script: true,
    set: true,
    stop: true,
    style: true,
    svg: true,
    switch: true,
    symbol: true,
    text: true,
    textPath: true,
    title: true,
    tref: true,
    tspan: true,
    use: true,
    view: true,
    vkern: true,
};
/* tslint:disable */
var mixpanelSnippetInjector = new Function("\n  (function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+\"=([^&]*)\")))?l[1]:null};g&&c(g,\"state\")&&(i=JSON.parse(decodeURIComponent(c(g,\"state\"))),\"mpeditor\"===i.action&&(b.sessionStorage.setItem(\"_mpcehash\",g),history.replaceState(i.desiredHash||\"\",e.title,j.pathname+j.search)))}catch(m){}var k,h;window['mixpanel']=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(\".\");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,\n  0)))}}var d=a;\"undefined\"!==typeof f?d=a[f]=[]:f=\"mixpanel\";d.people=d.people||[];d.toString=function(b){var a=\"mixpanel\";\"mixpanel\"!==f&&(a+=\".\"+f);b||(a+=\" (stub)\");return a};d.people.toString=function(){return d.toString(1)+\".people (stub)\"};k=\"disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user\".split(\" \");\n  for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;}})(document,window.mixpanel||[]);\n");
var mixpanelInit = function (mixpanelToken, component) {
    // Only initialize Mixpanel if we're running in the browser
    if (typeof window !== 'undefined') {
        // Don't initialize multiple times if multiple components are on the page
        if (!window.mixpanel) {
            mixpanelSnippetInjector();
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
            head.appendChild(script);
            window.mixpanel.init(mixpanelToken, { ip: false });
        }
        var metadata = (component.bytecode && component.bytecode.metadata) || {};
        window.mixpanel.track('component:initialize', assign_1.default({
            platform: 'dom',
        }, metadata));
    }
};
//# sourceMappingURL=HaikuDOMRenderer.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/applyLayout.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/applyLayout.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var applyCssLayout_1 = __webpack_require__(/*! ../../layout/applyCssLayout */ "./node_modules/@haiku/core/lib/layout/applyCssLayout.js");
var modernizr_1 = __webpack_require__(/*! ../../vendor/modernizr */ "./node_modules/@haiku/core/lib/vendor/modernizr/index.js");
var getWindowsBrowserVersion_1 = __webpack_require__(/*! ./getWindowsBrowserVersion */ "./node_modules/@haiku/core/lib/renderers/dom/getWindowsBrowserVersion.js");
var isEdge_1 = __webpack_require__(/*! ./isEdge */ "./node_modules/@haiku/core/lib/renderers/dom/isEdge.js");
var isIE_1 = __webpack_require__(/*! ./isIE */ "./node_modules/@haiku/core/lib/renderers/dom/isIE.js");
var isMobile_1 = __webpack_require__(/*! ./isMobile */ "./node_modules/@haiku/core/lib/renderers/dom/isMobile.js");
var isTextNode_1 = __webpack_require__(/*! ./isTextNode */ "./node_modules/@haiku/core/lib/renderers/dom/isTextNode.js");
var safeWindow = typeof window !== 'undefined' && window;
var PLATFORM_INFO = {
    hasWindow: !!safeWindow,
    isMobile: isMobile_1.default(safeWindow),
    isIE: isIE_1.default(safeWindow),
    isEdge: isEdge_1.default(safeWindow),
    windowsBrowserVersion: getWindowsBrowserVersion_1.default(safeWindow),
    hasPreserve3d: modernizr_1.default.hasPreserve3d(safeWindow),
};
function applyLayout(domElement, virtualElement, component) {
    if (isTextNode_1.default(virtualElement)) {
        return domElement;
    }
    if (virtualElement.layout) {
        var computedLayout = virtualElement.layout.computed;
        // No computed layout means the el is not shown
        if (!computedLayout) {
            if (domElement.style.display !== 'none') {
                domElement.style.display = 'none';
            }
        }
        else {
            if (domElement.style.display !== 'block') {
                domElement.style.display = 'block';
            }
            component.config.platform = PLATFORM_INFO;
            applyCssLayout_1.default(domElement, virtualElement, virtualElement.layout, computedLayout, component);
        }
    }
    return domElement;
}
exports.default = applyLayout;
//# sourceMappingURL=applyLayout.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/assignAttributes.js":
/*!************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/assignAttributes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var assignClass_1 = __webpack_require__(/*! ./assignClass */ "./node_modules/@haiku/core/lib/renderers/dom/assignClass.js");
var assignStyle_1 = __webpack_require__(/*! ./assignStyle */ "./node_modules/@haiku/core/lib/renderers/dom/assignStyle.js");
var STYLE = 'style';
var OBJECT = 'object';
var CLASS = 'class';
var CLASS_NAME = 'className';
var NS = 'http://www.w3.org/1999/xlink';
var XLINK_HREF = 'xlink:href';
var setAttribute = function (domElement, virtualElement, key, val) {
    if (key === XLINK_HREF) {
        var p0 = domElement.getAttributeNS(NS, key);
        if (p0 !== val) {
            domElement.setAttributeNS(NS, key, val);
        }
    }
    else {
        var p1 = domElement.getAttribute(key);
        if (p1 !== val) {
            domElement.setAttribute(key, val);
        }
    }
};
function assignAttributes(domElement, virtualElement, component, isPatchOperation) {
    if (!isPatchOperation) {
        // Remove any attributes from the previous run that aren't present this time around
        if (domElement.haiku && domElement.haiku.element) {
            for (var oldKey in domElement.haiku.element.attributes) {
                var oldValue = domElement.haiku.element.attributes[oldKey];
                var newValue = virtualElement.attributes[oldKey];
                if (oldKey !== STYLE) {
                    // Removal of old styles is handled downstream; see assignStyle()
                    if (newValue === null || newValue === undefined || oldValue !== newValue) {
                        domElement.removeAttribute(oldKey);
                    }
                }
            }
        }
    }
    for (var key in virtualElement.attributes) {
        var anotherNewValue = virtualElement.attributes[key];
        if (key === STYLE &&
            anotherNewValue &&
            typeof anotherNewValue === OBJECT) {
            if (Object.keys(anotherNewValue).length > 0) {
                assignStyle_1.default(domElement, anotherNewValue, component, isPatchOperation);
            }
            continue;
        }
        if ((key === CLASS || key === CLASS_NAME) && anotherNewValue) {
            assignClass_1.default(domElement, anotherNewValue);
            continue;
        }
        // It's (almost?) never beneficial to write `NaN` to a DOM attribute here;
        // this is a very hot path, and the result is a deluge of not-catchable errors.
        if (Number.isNaN(anotherNewValue)) {
            continue;
        }
        setAttribute(domElement, virtualElement, key, anotherNewValue);
    }
    return domElement;
}
exports.default = assignAttributes;
//# sourceMappingURL=assignAttributes.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/assignClass.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/assignClass.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function assignClass(domElement, className) {
    if (domElement.className !== className) {
        domElement.setAttribute('class', className);
    }
    return domElement;
}
exports.default = assignClass;
//# sourceMappingURL=assignClass.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/assignStyle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/assignStyle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function assignStyle(domElement, style, component, isPatchOperation) {
    if (!isPatchOperation) {
        // If we have an element from a previous run, remove any old styles that aren't part of the new one
        if (domElement.haiku &&
            domElement.haiku.element &&
            domElement.haiku.element.attributes &&
            domElement.haiku.element.attributes.style) {
            for (var oldStyleKey in domElement.haiku.element.attributes.style) {
                var newStyleValue = style[oldStyleKey];
                if (newStyleValue === null || newStyleValue === undefined) {
                    domElement.style.removeProperty(oldStyleKey);
                }
            }
        }
    }
    for (var key in style) {
        var newProp = style[key];
        var previousProp = domElement.haiku.explicitStyles[key];
        if (previousProp !== newProp) {
            domElement.haiku.explicitStyles[key] = style[key];
            domElement.style[key] = style[key];
        }
    }
    return domElement;
}
exports.default = assignStyle;
//# sourceMappingURL=assignStyle.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/createRightClickMenu.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/createRightClickMenu.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MENU_GLOBAL_ID = 'haiku-right-click-menu';
var WIDTH = 167;
/* tslint:disable */
var haikuIcon = '' +
    '<svg style="transform:translateY(3px);margin-right:3px;" width="13px" height="13px" viewBox="0 0 9 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '        <g id="menu" transform="translate(-9.000000, -50.000000)" fill-rule="nonzero" fill="#899497">' +
    '            <g id="favicon" transform="translate(9.000000, 50.000000)">' +
    '                <path d="M5.74649098,4.70558699 L5.74649098,5.7788098 C5.74649098,5.91256161 5.63820821,6.02098888 5.50463465,6.02098888 C5.46594093,6.02098888 5.42936949,6.0118902 5.39693775,5.99571295 C5.39186133,5.99396865 5.38680829,5.99204493 5.38178599,5.98993877 L2.13374851,4.62783436 C2.06585827,4.62681598 2.00074372,4.59703732 1.95556434,4.54557114 C1.89645814,4.50141795 1.85818531,4.43085101 1.85818531,4.35133305 L1.85818531,1.57454768 C1.85079926,1.56515108 1.8440022,1.55516354 1.83787126,1.54461783 L1.68370002,1.48221012 L0.983781643,1.19888682 L0.983781643,7.82711613 L1.85818531,8.18107016 L1.85818531,5.95344076 C1.85818531,5.94997543 1.858258,5.94652709 1.85840193,5.9430972 C1.85672094,5.90820764 1.86258618,5.87240498 1.87695925,5.83803981 C1.92855792,5.7146704 2.07026431,5.65654454 2.19346932,5.70821207 L5.45803735,7.07733924 L5.52116709,7.10578612 C5.64702981,7.11429403 5.74649098,7.21922045 5.74649098,7.34740828 L5.74649098,7.82711613 L6.61247795,8.17766313 L6.62089465,8.18107016 L6.62089465,4.31849373 L5.74649098,4.70558699 Z M5.26277832,4.81941585 L3.49887951,4.07970322 L2.78717926,4.37673832 L5.26277832,5.41491119 L5.26277832,4.81941585 Z M2.34189798,6.29557771 L2.34189798,8.21792436 L3.21630165,7.86397033 L3.21630165,6.66226962 L2.34189798,6.29557771 Z M2.10489107,8.84091277 C2.10327842,8.84094453 2.10166189,8.84096049 2.10004164,8.84096049 C2.03531005,8.84096049 1.97651801,8.81549628 1.93311099,8.77402594 L1.68370002,8.67306569 L0.701593132,8.27551396 C0.587217854,8.25628853 0.500068976,8.15667879 0.500068976,8.03668718 L0.500068976,8.02395302 C0.499977217,8.01997372 0.499976799,8.01598483 0.500068976,8.01198924 L0.500068976,0.83309739 C0.499984517,0.829434725 0.499977444,0.825763881 0.500048734,0.822087163 C0.499977444,0.818410445 0.499984517,0.814739601 0.500068976,0.811076936 L0.500068976,0.808477267 C0.500068976,0.734695385 0.533019284,0.66861973 0.584988773,0.624200019 C0.607223642,0.603893466 0.633376716,0.587129584 0.662911804,0.575173935 L2.00126808,0.0334143141 C2.06884262,-0.00448997495 2.15253254,-0.011953956 2.22949057,0.0203769852 L3.48533098,0.547969766 C3.4886593,0.547833737 3.49200497,0.54776506 3.49536665,0.54776506 C3.62894021,0.54776506 3.73722298,0.656192325 3.73722298,0.789944134 L3.73722298,0.821385651 C3.73731302,0.82532856 3.73731342,0.829280598 3.73722298,0.833238872 L3.73722298,2.40767185 L5.26277832,1.79239207 L5.26277832,0.83309739 C5.26269386,0.829434725 5.26268678,0.825763881 5.26275807,0.822087163 C5.26268678,0.818410445 5.26269386,0.814739601 5.26277832,0.811076936 L5.26277832,0.789944134 C5.26277832,0.660231597 5.36461961,0.55433711 5.49260447,0.548059437 L6.76397742,0.0334143141 C6.83155196,-0.00448997495 6.91524188,-0.011953956 6.99219991,0.0203769852 L8.30051205,0.570013732 C8.41385044,0.590099999 8.49993232,0.689222468 8.49993232,0.808477267 L8.49993232,0.821385589 C8.50002236,0.825328562 8.50002276,0.829280602 8.49993232,0.833238878 L8.49993232,8.03668718 C8.49993232,8.12601922 8.45162927,8.20405443 8.37974945,8.24603352 C8.3570412,8.26726508 8.33012837,8.28475773 8.2996029,8.29711428 L6.99757749,8.82416735 C6.91291064,8.85844005 6.82080599,8.84496071 6.75103698,8.79637735 L6.41724228,8.661259 L5.42562114,8.25985596 C5.34756383,8.22825877 5.29312904,8.1630773 5.27221467,8.08767347 C5.26662904,8.06827265 5.26340051,8.04787145 5.26285962,8.02680084 C5.26269203,8.02187767 5.26266414,8.01693859 5.26277832,8.01198924 L5.26277832,7.52049562 L5.25953529,7.51903428 L5.26277832,7.51181809 L5.26277832,7.52048475 L3.70001431,6.86512047 L3.70001431,8.03470119 C3.70001431,8.04191065 3.69969971,8.04904653 3.6990835,8.05609582 C3.69873979,8.1589341 3.63726868,8.25619133 3.53617314,8.29711428 L2.23486815,8.82387573 C2.19216118,8.84116329 2.14756179,8.84630123 2.10489107,8.84091277 Z M7.10460732,8.21821598 L8.01621965,7.84920008 L8.01621965,1.21243815 L7.10460732,1.58145405 L7.10460732,2.39098426 C7.10460732,2.46741667 7.06924708,2.53557924 7.0140137,2.5799642 C6.98940081,2.61105066 6.95679973,2.63650623 6.91764171,2.65284921 L4.12647169,3.81777145 L5.37396115,4.34092148 L6.74176427,3.73540324 C6.86393122,3.68132067 7.00675126,3.73664611 7.06076176,3.85897608 C7.06205348,3.86190175 7.06328271,3.86483924 7.06445002,3.86778706 C7.08982637,3.90609857 7.10460732,3.95205809 7.10460732,4.00147448 L7.10460732,8.21821598 Z M6.62089465,1.57454768 C6.6135086,1.56515108 6.60671153,1.55516354 6.6005806,1.54461783 L6.44640936,1.48221012 L5.74649098,1.19888682 L5.74649098,1.76114471 L6.62089465,2.11509874 L6.62089465,1.57454768 Z M2.34189798,4.03783399 L3.25351031,3.65736362 L3.25351031,1.21243815 L2.34189798,1.58145405 L2.34189798,4.03783399 Z M3.73722298,2.92984272 L3.73722298,3.45548138 L6.10302085,2.46809239 L5.50003848,2.22400828 C5.49794123,2.22315933 5.49586104,2.22228613 5.49379809,2.22138914 L3.73722298,2.92984272 Z M6.20555471,0.822087163 L6.64164504,0.998614246 L6.89809383,1.10242338 L7.57200867,0.829626174 L6.89232837,0.544084781 L6.20555471,0.822087163 Z M1.44284537,0.822087163 L1.8789357,0.998614246 L2.13538449,1.10242338 L2.80929933,0.829626174 L2.12961903,0.544084781 L1.44284537,0.822087163 Z" id="Combined-Shape"></path>' +
    '            </g>' +
    '        </g>' +
    '    </g>' +
    '</svg>';
var sharePageIcon = '' +
    '<svg style="transform:translate(-1px, 3px);margin-right:1px;" width="14px" height="14px" viewBox="0 0 11 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '      <g id="menu" transform="translate(-8.000000, -32.000000)">' +
    '          <g id="0884-focus" transform="translate(8.500000, 32.000000)">' +
    '              <rect id="Rectangle-3" fill="#899497" x="4.72222222" y="0" width="1" height="1.66666667" rx="0.5"></rect>' +
    '              <rect id="Rectangle-3-Copy" fill="#899497" x="4.72222222" y="8.33333333" width="1" height="1.66666667" rx="0.5"></rect>' +
    '              <g id="Group" transform="translate(5.000000, 5.555556) rotate(90.000000) translate(-5.000000, -5.555556) translate(3.888889, 0.555556)" fill="#899497">' +
    '                  <rect id="Rectangle-3-Copy-3" x="0.277777778" y="0" width="1" height="1.66666667" rx="0.5"></rect>' +
    '                  <rect id="Rectangle-3-Copy-2" x="0.277777778" y="8.33333333" width="1" height="1.66666667" rx="0.5"></rect>' +
    '              </g>' +
    '              <circle id="Oval" stroke="#899497" stroke-width="0.66" cx="5" cy="5" r="3.33333333"></circle>' +
    '              <circle id="Oval-2" fill="#899497" cx="5" cy="5" r="1.11111111"></circle>' +
    '          </g>' +
    '      </g>' +
    '  </g>' +
    '</svg>';
var forkIcon = '' +
    '<svg style="margin-right:5px;transform:translate(1px,3px);" width="11px" height="13px" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">' +
    '    <g fill="#899497" fill-rule="evenodd">' +
    '        <path d="M1.764 2.506c.544 0 .964-.394.964-.853 0-.46-.42-.853-.964-.853S.8 1.194.8 1.653c0 .459.42.853.964.853zm0 .8C.79 3.306 0 2.566 0 1.653S.79 0 1.764 0s1.764.74 1.764 1.653-.79 1.653-1.764 1.653zm7.472-.8c.544 0 .964-.394.964-.853 0-.46-.42-.853-.964-.853s-.964.394-.964.853c0 .459.42.853.964.853zm0 .8c-.974 0-1.764-.74-1.764-1.653S8.262 0 9.236 0 11 .74 11 1.653s-.79 1.653-1.764 1.653zM1.764 13.2c.544 0 .964-.394.964-.853 0-.459-.42-.853-.964-.853s-.964.394-.964.853c0 .46.42.853.964.853zm0 .8C.79 14 0 13.26 0 12.347s.79-1.653 1.764-1.653 1.764.74 1.764 1.653S2.738 14 1.764 14z"/>' +
    '        <path d="M9.636 3.028h-.8v-.421h.8v1.497c0 2.241-1.525 2.711-5.326 2.711-1.307 0-2.01.707-2.193 2.252l-.795-.094c.229-1.928 1.253-2.958 2.988-2.958 3.34 0 4.526-.365 4.526-1.911V2.61c0-.003 0-.003.8-.004v.422z"/>' +
    '        <path d="M1.33 3h.8v8h-.8z"/>' +
    '    </g>' +
    '</svg>';
/* tslint:enable */
// Haiku servers will substitute the _actual_ full string in any js file,
// so it's split into pieces here to avoid that build step
var SUBSTITUTION_STRING = 'HAIKU' + '_' + 'SHARE' + '_' + 'UUID';
function setBoxShadow(el, color) {
    el.style['-webkit-box-shadow'] = '0 1px 4px 0 ' + color;
    el.style['-moz-box-shadow'] = '0 1px 4px 0 ' + color;
    el.style['box-shadow'] = '0 1px 4px 0 ' + color;
}
function px(num) {
    return num + 'px';
}
function findOrCreateMenuElement(doc) {
    var menu = doc.getElementById(MENU_GLOBAL_ID);
    if (menu) {
        return menu;
    }
    menu = doc.createElement('div');
    menu.setAttribute('id', MENU_GLOBAL_ID);
    menu.style.position = 'absolute';
    menu.style.zIndex = 2147483647;
    setBoxShadow(menu, 'rgba(10,2,21,0.25)');
    menu.style.borderRadius = px(3);
    menu.style.display = 'none';
    menu.style.backgroundColor = 'rgba(255,255,255,0.95)';
    menu.style.overflow = 'hidden';
    menu.style.cursor = 'default';
    menu.style.fontFamily = 'Helvetica, Arial, sans-serif';
    menu.style.fontWeight = 'Bold';
    menu.style.fontSize = px(10);
    menu.style.padding = '0 0 7px';
    menu.style.color = 'black';
    menu.style.margin = '0';
    menu.style.boxSizing = 'content-box';
    menu.style.textDecoration = 'none';
    menu.style.fontStyle = 'none';
    doc.body.appendChild(menu);
    return menu;
}
function truncate(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...';
    }
    return str;
}
function createRightClickMenu(domElement, component) {
    var doc = domElement.ownerDocument;
    var menu = findOrCreateMenuElement(doc);
    var escaper = doc.createElement('textarea');
    var metadata = component.bytecode && component.bytecode.metadata;
    var isPublic = false;
    var isForkable = false;
    if (metadata && metadata.project && metadata.organization && window && window.fetch) {
        try {
            window.fetch("https://inkstone-edge.haiku.ai/v0/community/" + metadata.organization + "/" + metadata.project + "/metadata")
                .then(function (response) { return response.json(); })
                .then(function (responseJson) {
                isPublic = responseJson.IsPublic;
                isForkable = responseJson.IsForkable;
            });
        }
        catch (e) {
            // ...noop. We were unable to determine forkability.
        }
    }
    function escapeHTML(html) {
        escaper.textContent = html;
        return escaper.innerHTML.replace(/[><,{}[\]"']/gi, '');
    }
    // revealMenu(100,100) // Uncomment me to render the menu while testing
    function revealMenu(mx, my) {
        var lines = [];
        var titleLine = null;
        /* tslint:disable */
        if (metadata && metadata.project) {
            var who = truncate(escapeHTML(metadata.project), 25);
            var org = '';
            if (metadata.organization) {
                org = truncate(escapeHTML(metadata.organization), 11);
                who = '"' + who + '" <span style="font-weight:normal;">by</span> ' + org;
            }
            var byline = who;
            titleLine =
                '<p style="margin:0;margin-bottom:4px;padding:12px 13px 7px;line-height:12px;text-align:center;border-bottom:1px solid rgba(140,140,140,.14);">' +
                    byline +
                    '</p>';
        }
        if (isPublic && metadata && metadata.uuid && metadata.uuid !== SUBSTITUTION_STRING) {
            lines.push('<a onMouseOver="this.style.backgroundColor=\'rgba(140,140,140,.07)\'" onMouseOut="this.style.backgroundColor=\'transparent\'" style="display:block;color:black;text-decoration:none;padding: 5px 13px;line-height:12px;" href="https://share.haiku.ai/' +
                escapeHTML(metadata.uuid) +
                '" target="_blank">' +
                sharePageIcon +
                ' View on Haiku Community</a>');
        }
        if (isForkable) {
            lines.push('<a onMouseOver="this.style.backgroundColor=\'rgba(140,140,140,.07)\'" onMouseOut="this.style.backgroundColor=\'transparent\'" style="display:block;color:black;text-decoration:none;padding: 5px 13px;line-height:12px;" href="https://share.haiku.ai/u/' +
                escapeHTML(metadata.organization + "/" + metadata.project + "/fork") +
                '" target="_blank">' +
                forkIcon +
                ' Fork this component</a>');
        }
        lines.push('<a onMouseOver="this.style.backgroundColor=\'rgba(140,140,140,.07)\'" onMouseOut="this.style.backgroundColor=\'transparent\'" style="display:block;color:black;text-decoration:none;padding: 5px 13px;line-height:12px;" href="https://www.haikuforteams.com" target="_blank">' +
            haikuIcon +
            '  Crafted in Haiku Animator</a>');
        /* tslint:enable */
        if (lines.length < 1) {
            return undefined;
        }
        menu.style.width = 'auto';
        menu.style.minWidth = WIDTH;
        menu.style.height = 'auto';
        menu.style.top = px(my);
        menu.style.left = px(mx);
        menu.style.pointerEvents = 'auto';
        menu.style.display = 'block';
        menu.innerHTML = titleLine ? titleLine + lines.join('\n') : lines.join('\n');
    }
    function hideMenu(nativeEvent) {
        if (nativeEvent.button === 2 || nativeEvent.ctrlKey) {
            // Firefox treats contextmenu mouseups as clicks for some reason. This short-circuits that behavior.
            return;
        }
        menu.style.width = px(0);
        menu.style.minWidth = px(0);
        menu.style.height = px(0);
        menu.style.top = px(0);
        menu.style.left = px(0);
        menu.style.pointerEvents = 'none';
        menu.style.display = 'none';
    }
    domElement.addEventListener('contextmenu', function (contextmenuEvent) {
        contextmenuEvent.preventDefault();
        var mx = contextmenuEvent.pageX;
        var my = contextmenuEvent.pageY;
        if (component.mixpanel) {
            component.mixpanel.track('component:contextmenu');
        }
        revealMenu(mx, my);
    });
    doc.addEventListener('click', hideMenu);
}
exports.default = createRightClickMenu;
//# sourceMappingURL=createRightClickMenu.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/createSvgElement.js":
/*!************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/createSvgElement.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
function createSvgElement(domElement, tagName) {
    return domElement.ownerDocument.createElementNS(SVG_NAMESPACE, tagName);
}
exports.default = createSvgElement;
//# sourceMappingURL=createSvgElement.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/createTextNode.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/createTextNode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createTextNode(domElement, textContent) {
    return domElement.ownerDocument.createTextNode(textContent);
}
exports.default = createTextNode;
//# sourceMappingURL=createTextNode.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/getElementSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/getElementSize.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getElementSize(domElement) {
    // Get fractional size when on DOM
    if (domElement.getBoundingClientRect instanceof Function) {
        var rect = domElement.getBoundingClientRect();
        return { x: rect.width, y: rect.height };
    }
    // Fallback to rounded offsetWidth/offsetHeight
    if (domElement.offsetWidth !== undefined) {
        return { x: domElement.offsetWidth, y: domElement.offsetHeight };
    }
    return { x: 1, y: 1 };
}
exports.default = getElementSize;
//# sourceMappingURL=getElementSize.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/getLocalDomEventPosition.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/getLocalDomEventPosition.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var getDomEventPosition = function (event, doc) {
    var x = -1;
    var y = -1;
    if (event.hasOwnProperty('pageX')) {
        x = event.pageX;
        y = event.pageY;
    }
    else if (event.clientX || event.clientY) {
        x = event.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft;
        y = event.clientY + doc.body.scrollTop + doc.documentElement.scrollTop;
    }
    return {
        x: ~~x,
        y: ~~y,
    };
};
exports.default = (function (event, domElement) {
    var doc = domElement.ownerDocument;
    var viewPosition = getDomEventPosition(event, doc);
    var elementRect = domElement.getBoundingClientRect();
    var x = viewPosition.x - elementRect.left;
    var y = viewPosition.y - elementRect.top;
    if (domElement.offsetWidth !== elementRect.width) {
        x *= domElement.offsetWidth / elementRect.width;
    }
    if (domElement.offsetHeight !== elementRect.height) {
        y *= domElement.offsetHeight / elementRect.height;
    }
    return {
        x: x,
        y: y,
        pageX: viewPosition.x,
        pageY: viewPosition.y,
    };
});
//# sourceMappingURL=getLocalDomEventPosition.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/getTypeAsString.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/getTypeAsString.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var STRING = 'string';
var FUNCTION = 'function';
var OBJECT = 'object';
function getType(virtualElement) {
    var typeValue = virtualElement.elementName;
    if (typeValue && typeValue.default) {
        return typeValue.default;
    }
    return typeValue;
}
function thingToTagName(thing) {
    if (typeof thing === STRING && thing.length > 0) {
        return thing;
    }
    if (typeof thing === FUNCTION) {
        return fnToTagName(thing);
    }
    if (thing && typeof thing === OBJECT) {
        return objToTagName(thing);
    }
    warnOnce('Got blank/malformed virtual element object; falling back to <div>');
    return 'div';
}
function objToTagName(obj) {
    // if (obj.name) return obj.name
    // if (obj.metadata && obj.metadata.name) return obj.metadata.name
    // _warnOnce('Got blank/malformed virtual element object; falling back to <div>')
    return 'div';
}
function fnToTagName(fn) {
    if (fn.name) {
        return fn.name;
    }
    if (fn.displayName) {
        return fn.displayName;
    }
    if (fn.constructor) {
        if (fn.constructor.name !== 'Function') {
            return fn.constructor.name;
        }
    }
}
function getTypeAsString(virtualElement) {
    var typeValue = getType(virtualElement);
    typeValue = thingToTagName(typeValue);
    if (!typeValue) {
        throw new Error('Node has no discernable name');
    }
    return typeValue;
}
exports.default = getTypeAsString;
var warnings = {};
function warnOnce(warning) {
    if (warnings[warning]) {
        return void 0;
    }
    warnings[warning] = true;
    console.warn('[haiku core] warning:', warning);
}
//# sourceMappingURL=getTypeAsString.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/getWindowsBrowserVersion.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/getWindowsBrowserVersion.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getWindowsBrowser(window) {
    var rv = -1;
    if (!window) {
        return rv;
    }
    if (!window.navigator) {
        return rv;
    }
    if (!window.navigator.userAgent) {
        return rv;
    }
    if (!window.navigator.appName) {
        return rv;
    }
    if (window.navigator.appName === 'Microsoft Internet Explorer') {
        var ua = window.navigator.userAgent;
        var re = new RegExp('MSIE ([0-9]{1,}[\\.0-9]{0,})');
        if (re.exec(ua) !== null) {
            rv = parseFloat(RegExp.$1);
        }
    }
    else if (window.navigator.appName === 'Netscape') {
        rv = (window.navigator.appVersion.indexOf('Trident') === -1) ? 12 : 11;
    }
    return rv;
}
exports.default = getWindowsBrowser;
//# sourceMappingURL=getWindowsBrowserVersion.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HaikuDOMRenderer_1 = __webpack_require__(/*! ./HaikuDOMRenderer */ "./node_modules/@haiku/core/lib/renderers/dom/HaikuDOMRenderer.js");
exports.default = HaikuDOMRenderer_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/isBlankString.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/isBlankString.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isBlankString(thing) {
    return thing === '';
}
exports.default = isBlankString;
//# sourceMappingURL=isBlankString.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/isEdge.js":
/*!**************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/isEdge.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isEdge(window) {
    if (!window) {
        return false;
    }
    if (!window.navigator) {
        return false;
    }
    if (!window.navigator.userAgent) {
        return false;
    }
    return /Edge\/\d./i.test(window.navigator.userAgent);
}
exports.default = isEdge;
//# sourceMappingURL=isEdge.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/isIE.js":
/*!************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/isIE.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isIE(window) {
    if (!window) {
        return false;
    }
    if (!window.navigator) {
        return false;
    }
    if (!window.navigator.userAgent) {
        return false;
    }
    return (window.navigator.userAgent.indexOf('MSIE') !== -1 ||
        navigator.appVersion.indexOf('Trident') > 0);
}
exports.default = isIE;
//# sourceMappingURL=isIE.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/isMobile.js":
/*!****************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/isMobile.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isMobile(window) {
    if (!window) {
        return false;
    }
    if (!window.navigator) {
        return false;
    }
    if (!window.navigator.userAgent) {
        return false;
    }
    return /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
}
exports.default = isMobile;
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/isTextNode.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/isTextNode.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isTextNode(virtualElement) {
    return (typeof virtualElement !== 'object');
}
exports.default = isTextNode;
//# sourceMappingURL=isTextNode.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/normalizeName.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/normalizeName.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeName(tagName) {
    if (tagName[0] === tagName[0].toUpperCase()) {
        return tagName + '-component';
    }
    return tagName;
}
exports.default = normalizeName;
//# sourceMappingURL=normalizeName.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/removeElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/removeElement.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function removeElement(domElement, compositeId, component) {
    component.subcacheClear(compositeId);
    domElement.parentNode.removeChild(domElement);
    return domElement;
}
exports.default = removeElement;
//# sourceMappingURL=removeElement.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/renderers/dom/replaceElementWithText.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/renderers/dom/replaceElementWithText.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Haiku 2016-2018. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var createTextNode_1 = __webpack_require__(/*! ./createTextNode */ "./node_modules/@haiku/core/lib/renderers/dom/createTextNode.js");
function replaceElementWithText(domElement, textContent, component) {
    if (domElement) {
        if (domElement.textContent !== textContent) {
            var parentNode = domElement.parentNode;
            var textNode = createTextNode_1.default(domElement, textContent);
            parentNode.replaceChild(textNode, domElement);
        }
    }
    return domElement;
}
exports.default = replaceElementWithText;
//# sourceMappingURL=replaceElementWithText.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/array-unique/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/array-unique/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) 2014-2016, Jon Schlinkert
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function uniq(arr) {
    var len = arr.length;
    var i = -1;
    while (i++ < len) {
        var j = i + 1;
        for (; j < arr.length; ++j) {
            if (arr[i] === arr[j]) {
                arr.splice(j--, 1);
            }
        }
    }
    return arr;
}
function immutable(arr) {
    var arrayLength = arr.length;
    var newArray = new Array(arrayLength);
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = arr[i];
    }
    return uniq(newArray);
}
exports.default = {
    uniq: uniq,
    immutable: immutable,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/assign/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/assign/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) 2017 Ryan Florence
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function assign() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var t = args[0];
    for (var s = void 0, i = 1, n = args.length; i < n; i++) {
        s = args[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) {
                t[p] = s[p];
            }
        }
    }
    return t;
}
exports.default = assign;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/color-names/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/color-names/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) 2015 Dmitry Ivanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/color-string/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/color-string/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) 2011 Heather Arthur <fayearthur@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var color_names_1 = __webpack_require__(/*! ../color-names */ "./node_modules/@haiku/core/lib/vendor/color-names/index.js");
var reverseNames = {};
// create a list of reverse color names
for (var name_1 in color_names_1.default) {
    if (color_names_1.default.hasOwnProperty(name_1)) {
        reverseNames[color_names_1.default[name_1]] = name_1;
    }
}
exports.get = function (string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
        case 'hsl':
            val = getHsl(string);
            model = 'hsl';
            break;
        case 'hwb':
            val = getHwb(string);
            model = 'hwb';
            break;
        default:
            val = getRgb(string);
            model = 'rgb';
            break;
    }
    if (!val) {
        return null;
    }
    return {
        model: model,
        value: val,
    };
};
var getRgb = function (string) {
    if (!string) {
        return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
    var keyword = /(\D+)/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    var hexMatch = string.match(hex);
    var abbrMatch = string.match(abbr);
    var rgbaMatch = string.match(rgba);
    var perMatch = string.match(per);
    var keywordMatch = string.match(keyword);
    if (hexMatch) {
        match = hexMatch;
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
            // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
            rgb[3] = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
        }
    }
    else if (abbrMatch) {
        match = abbrMatch;
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
            rgb[3] = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
        }
    }
    else if (rgbaMatch) {
        match = rgbaMatch;
        for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
            rgb[3] = parseFloat(match[4]);
        }
    }
    else if (perMatch) {
        match = perMatch;
        for (i = 0; i < 3; i++) {
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
            rgb[3] = parseFloat(match[4]);
        }
    }
    else if (keywordMatch) {
        match = keywordMatch;
        if (match[1] === 'transparent') {
            return [0, 0, 0, 0];
        }
        rgb = color_names_1.default[match[1]];
        if (!rgb) {
            return null;
        }
        rgb[3] = 1;
        return rgb;
    }
    else {
        return null;
    }
    for (i = 0; i < 3; i++) {
        rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
};
var getHsl = function (string) {
    if (!string) {
        return null;
    }
    var hsl = /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
    }
    return null;
};
var getHwb = function (string) {
    if (!string) {
        return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
    }
    return null;
};
exports.to = function (model, rgba) {
    switch (model) {
        case 'hex':
            return ('#' +
                hexDouble(rgba[0]) +
                hexDouble(rgba[1]) +
                hexDouble(rgba[2]) +
                (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : ''));
        case 'rgb':
            return rgba.length < 4 || rgba[3] === 1
                ? 'rgb(' +
                    Math.round(rgba[0]) +
                    ', ' +
                    Math.round(rgba[1]) +
                    ', ' +
                    Math.round(rgba[2]) +
                    ')'
                : 'rgba(' +
                    Math.round(rgba[0]) +
                    ', ' +
                    Math.round(rgba[1]) +
                    ', ' +
                    Math.round(rgba[2]) +
                    ', ' +
                    rgba[3] +
                    ')';
        case 'hsl':
            return rgba.length < 4 || rgba[3] === 1
                ? 'hsl(' + rgba[0] + ', ' + rgba[1] + '%, ' + rgba[2] + '%)'
                : 'hsla(' +
                    rgba[0] +
                    ', ' +
                    rgba[1] +
                    '%, ' +
                    rgba[2] +
                    '%, ' +
                    rgba[3] +
                    ')';
        case 'hwb':
            // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
            // (hwb have alpha optional & 1 is default value)
            var a = '';
            if (rgba.length >= 4 && rgba[3] !== 1) {
                a = ', ' + rgba[3];
            }
            return 'hwb(' + rgba[0] + ', ' + rgba[1] + '%, ' + rgba[2] + '%' + a + ')';
    }
};
var clamp = function (num, min, max) { return Math.min(Math.max(min, num), max); };
var hexDouble = function (num) {
    var str = num.toString(16).toUpperCase();
    return str.length < 2 ? '0' + str : str;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/gl-mat4/invert.js":
/*!***************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/gl-mat4/invert.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
exports.default = invert;
//# sourceMappingURL=invert.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/ease.js":
/*!************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/ease.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.ease = internal_1.cubicBezier(.25, .1, .25, .1);
//# sourceMappingURL=ease.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeIn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeIn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeIn = internal_1.cubicBezier(.42, 0, 1, 1);
//# sourceMappingURL=easeIn.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInBack.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInBack.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInBack = function (x) { return internal_1.c3 * x * x * x - internal_1.c1 * x * x; };
//# sourceMappingURL=easeInBack.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInBounce.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInBounce.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var easeOutBounce_1 = __webpack_require__(/*! ./easeOutBounce */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBounce.js");
exports.easeInBounce = function (x) { return 1 - easeOutBounce_1.easeOutBounce(1 - x); };
//# sourceMappingURL=easeInBounce.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInCirc.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInCirc.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInCirc = function (x) { return 1 - internal_1.sqrt(1 - (x * x)); };
//# sourceMappingURL=easeInCirc.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInCubic.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInCubic.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInCubic = function (x) { return x * x * x; };
//# sourceMappingURL=easeInCubic.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInElastic.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInElastic.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInElastic = function (n) {
    return !n || n === 1 ? n : -1 * internal_1.sin((n - 1.1) * internal_1.tau * 2.5) * internal_1.pow(2, 10 * (n - 1));
};
//# sourceMappingURL=easeInElastic.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInExpo.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInExpo.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInExpo = function (x) { return x === 0 ? 0 : internal_1.pow(2, 10 * x - 10); };
//# sourceMappingURL=easeInExpo.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOut.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOut.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOut = internal_1.cubicBezier(.42, 0, .58, 1);
//# sourceMappingURL=easeInOut.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutBack.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutBack.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutBack = function (x) { return x < 0.5
    ? (internal_1.pow(2 * x, 2) * ((internal_1.c2 + 1) * 2 * x - internal_1.c2)) / 2
    : (internal_1.pow(2 * x - 2, 2) * ((internal_1.c2 + 1) * (x * 2 - 2) + internal_1.c2) + 2) / 2; };
//# sourceMappingURL=easeInOutBack.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutBounce.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutBounce.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var easeOutBounce_1 = __webpack_require__(/*! ./easeOutBounce */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBounce.js");
exports.easeInOutBounce = function (x) { return x < 0.5
    ? (1 - easeOutBounce_1.easeOutBounce(1 - 2 * x)) / 2
    : (1 + easeOutBounce_1.easeOutBounce(2 * x - 1)) / 2; };
//# sourceMappingURL=easeInOutBounce.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutCirc.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutCirc.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutCirc = function (x) { return x < 0.5
    ? (1 - internal_1.sqrt(1 - internal_1.pow(2 * x, 2))) / 2
    : (internal_1.sqrt(1 - internal_1.pow(-2 * x + 2, 2)) + 1) / 2; };
//# sourceMappingURL=easeInOutCirc.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutCubic.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutCubic.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutCubic = function (x) { return x < 0.5
    ? 4 * x * x * x
    : 1 - internal_1.pow(-2 * x + 2, 3) / 2; };
//# sourceMappingURL=easeInOutCubic.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutElastic.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutElastic.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutElastic = function (n) {
    if (!n || n === 1) {
        return n;
    }
    n *= 2;
    if (n < 1) {
        return -0.5 * (internal_1.pow(2, 10 * (n - 1)) * internal_1.sin((n - 1.1) * internal_1.tau / .4));
    }
    return internal_1.pow(2, -10 * (n - 1)) * internal_1.sin((n - 1.1) * internal_1.tau / .4) * .5 + 1;
};
//# sourceMappingURL=easeInOutElastic.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutExpo.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutExpo.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutExpo = function (x) { return x === 0
    ? 0 : x === 1
    ? 1 : x < 0.5
    ? internal_1.pow(2, 20 * x - 10) / 2
    : (2 - internal_1.pow(2, -20 * x + 10)) / 2; };
//# sourceMappingURL=easeInOutExpo.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuad.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuad.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutQuad = function (x) { return x < 0.5 ? 2 * x * x : 1 - internal_1.pow(-2 * x + 2, 2) / 2; };
//# sourceMappingURL=easeInOutQuad.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuart.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuart.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutQuart = function (x) { return x < 0.5
    ? 8 * x * x * x * x
    : 1 - internal_1.pow(-2 * x + 2, 4) / 2; };
//# sourceMappingURL=easeInOutQuart.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuint.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuint.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutQuint = function (x) { return x < 0.5
    ? 16 * x * x * x * x * x
    : 1 - internal_1.pow(-2 * x + 2, 5) / 2; };
//# sourceMappingURL=easeInOutQuint.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutSine.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutSine.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInOutSine = function (x) { return -(internal_1.cos(internal_1.pi * x) - 1) / 2; };
//# sourceMappingURL=easeInOutSine.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuad.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuad.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInQuad = function (x) { return x * x; };
//# sourceMappingURL=easeInQuad.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuart.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuart.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInQuart = function (x) { return x * x * x * x; };
//# sourceMappingURL=easeInQuart.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuint.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuint.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInQuint = function (x) { return x * x * x * x * x; };
//# sourceMappingURL=easeInQuint.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInSine.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInSine.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeInSine = function (x) { return 1 - internal_1.cos(x * internal_1.pi / 2); };
//# sourceMappingURL=easeInSine.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOut.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOut.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOut = internal_1.cubicBezier(0, 0, .58, 1);
//# sourceMappingURL=easeOut.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBack.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBack.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutBack = function (x) { return 1 + internal_1.c3 * internal_1.pow(x - 1, 3) + internal_1.c1 * internal_1.pow(x - 1, 2); };
//# sourceMappingURL=easeOutBack.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBounce.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBounce.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeOutBounce = function (x) {
    var n1 = 7.5625;
    var d1 = 2.75;
    return x < 1 / d1
        ? n1 * x * x
        : x < 2 / d1
            ? n1 * (x -= (1.5 / d1)) * x + .75
            : x < 2.5 / d1
                ? n1 * (x -= (2.25 / d1)) * x + .9375
                : n1 * (x -= (2.625 / d1)) * x + .984375;
};
//# sourceMappingURL=easeOutBounce.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutCirc.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutCirc.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutCirc = function (x) { return internal_1.sqrt(1 - ((x - 1) * (x - 1))); };
//# sourceMappingURL=easeOutCirc.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutCubic.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutCubic.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutCubic = function (x) { return 1 - internal_1.pow(1 - x, 3); };
//# sourceMappingURL=easeOutCubic.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutElastic.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutElastic.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutElastic = function (n) {
    if (!n || n === 1) {
        return n;
    }
    var s, a = 0.1, p = 0.4;
    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    }
    else {
        s = p * Math.asin(1 / a) / internal_1.tau;
    }
    return (a * internal_1.pow(2, -10 * n) * internal_1.sin((n - s) * (internal_1.tau) / p) + 1);
};
//# sourceMappingURL=easeOutElastic.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutExpo.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutExpo.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutExpo = function (x) { return x === 1 ? 1 : 1 - internal_1.pow(2, -10 * x); };
//# sourceMappingURL=easeOutExpo.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuad.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuad.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeOutQuad = function (x) { return 1 - (1 - x) * (1 - x); };
//# sourceMappingURL=easeOutQuad.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuart.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuart.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutQuart = function (x) { return 1 - internal_1.pow(1 - x, 4); };
//# sourceMappingURL=easeOutQuart.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuint.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuint.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutQuint = function (x) { return 1 - internal_1.pow(1 - x, 5); };
//# sourceMappingURL=easeOutQuint.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutSine.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutSine.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.easeOutSine = function (x) { return internal_1.sin(x * internal_1.pi / 2); };
//# sourceMappingURL=easeOutSine.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ease */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/ease.js"));
__export(__webpack_require__(/*! ./easeIn */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeIn.js"));
__export(__webpack_require__(/*! ./easeInBack */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInBack.js"));
__export(__webpack_require__(/*! ./easeInBounce */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInBounce.js"));
__export(__webpack_require__(/*! ./easeInCirc */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInCirc.js"));
__export(__webpack_require__(/*! ./easeInCubic */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInCubic.js"));
__export(__webpack_require__(/*! ./easeInElastic */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInElastic.js"));
__export(__webpack_require__(/*! ./easeInExpo */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInExpo.js"));
__export(__webpack_require__(/*! ./easeInOut */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOut.js"));
__export(__webpack_require__(/*! ./easeInOutBack */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutBack.js"));
__export(__webpack_require__(/*! ./easeInOutBounce */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutBounce.js"));
__export(__webpack_require__(/*! ./easeInOutCirc */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutCirc.js"));
__export(__webpack_require__(/*! ./easeInOutCubic */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutCubic.js"));
__export(__webpack_require__(/*! ./easeInOutElastic */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutElastic.js"));
__export(__webpack_require__(/*! ./easeInOutExpo */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutExpo.js"));
__export(__webpack_require__(/*! ./easeInOutQuad */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuad.js"));
__export(__webpack_require__(/*! ./easeInOutQuart */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuart.js"));
__export(__webpack_require__(/*! ./easeInOutQuint */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutQuint.js"));
__export(__webpack_require__(/*! ./easeInOutSine */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInOutSine.js"));
__export(__webpack_require__(/*! ./easeInQuad */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuad.js"));
__export(__webpack_require__(/*! ./easeInQuart */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuart.js"));
__export(__webpack_require__(/*! ./easeInQuint */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInQuint.js"));
__export(__webpack_require__(/*! ./easeInSine */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeInSine.js"));
__export(__webpack_require__(/*! ./easeOut */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOut.js"));
__export(__webpack_require__(/*! ./easeOutBack */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBack.js"));
__export(__webpack_require__(/*! ./easeOutBounce */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutBounce.js"));
__export(__webpack_require__(/*! ./easeOutCirc */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutCirc.js"));
__export(__webpack_require__(/*! ./easeOutCubic */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutCubic.js"));
__export(__webpack_require__(/*! ./easeOutElastic */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutElastic.js"));
__export(__webpack_require__(/*! ./easeOutExpo */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutExpo.js"));
__export(__webpack_require__(/*! ./easeOutQuad */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuad.js"));
__export(__webpack_require__(/*! ./easeOutQuart */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuart.js"));
__export(__webpack_require__(/*! ./easeOutQuint */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutQuint.js"));
__export(__webpack_require__(/*! ./easeOutSine */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/easeOutSine.js"));
__export(__webpack_require__(/*! ./linear */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/linear.js"));
__export(__webpack_require__(/*! ./stepEnd */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/stepEnd.js"));
__export(__webpack_require__(/*! ./stepStart */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/stepStart.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/linear.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/linear.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Animations change at a constant speed
 */
exports.linear = function (x) { return x; };
//# sourceMappingURL=linear.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/stepEnd.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/stepEnd.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.stepEnd = internal_1.steps(1, 0);
//# sourceMappingURL=stepEnd.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/stepStart.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/curves/stepStart.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var internal_1 = __webpack_require__(/*! ../internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.stepStart = internal_1.steps(1, 1);
//# sourceMappingURL=stepStart.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var css = __webpack_require__(/*! ./internal/cssEasings */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/cssEasings.js");
exports.css = css;
var curves = __webpack_require__(/*! ./curves */ "./node_modules/@haiku/core/lib/vendor/just-curves/curves/index.js");
var internal_1 = __webpack_require__(/*! ./internal */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js");
exports.cubicBezier = internal_1.cubicBezier;
exports.frames = internal_1.frames;
exports.steps = internal_1.steps;
exports.default = curves;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/constants.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/constants.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = Math.PI;
exports.tau = 2 * exports.pi;
exports.epsilon = 0.0001;
exports.c1 = 1.70158;
exports.c2 = exports.c1 * 1.525;
exports.c3 = exports.c1 + 1;
exports.c4 = exports.tau / 3;
exports.c5 = exports.tau / 4.5;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/cssEasings.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/cssEasings.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var c = "cubic-bezier";
var s = "steps";
exports.ease = c + "(.25,.1,.25,1)";
exports.easeIn = c + "(.42,0,1,1)";
exports.easeInBack = c + "(.6,-.28,.735,.045)";
exports.easeInCirc = c + "(.6,.04,.98,.335)";
exports.easeInCubic = c + "(.55,.055,.675,.19)";
exports.easeInExpo = c + "(.95,.05,.795,.035)";
exports.easeInOut = c + "(.42,0,.58,1)";
exports.easeInOutBack = c + "(.68,-.55,.265,1.55)";
exports.easeInOutCirc = c + "(.785,.135,.15,.86)";
exports.easeInOutCubic = c + "(.645,.045,.355,1)";
exports.easeInOutExpo = c + "(1,0,0,1)";
exports.easeInOutQuad = c + "(.455,.03,.515,.955)";
exports.easeInOutQuart = c + "(.77,0,.175,1)";
exports.easeInOutQuint = c + "(.86,0,.07,1)";
exports.easeInOutSine = c + "(.445,.05,.55,.95)";
exports.easeInQuad = c + "(.55,.085,.68,.53)";
exports.easeInQuart = c + "(.895,.03,.685,.22)";
exports.easeInQuint = c + "(.755,.05,.855,.06)";
exports.easeInSine = c + "(.47,0,.745,.715)";
exports.easeOut = c + "(0,0,.58,1)";
exports.easeOutBack = c + "(.175,.885,.32,1.275)";
exports.easeOutCirc = c + "(.075,.82,.165,1)";
exports.easeOutCubic = c + "(.215,.61,.355,1)";
exports.easeOutExpo = c + "(.19,1,.22,1)";
exports.easeOutQuad = c + "(.25,.46,.45,.94)";
exports.easeOutQuart = c + "(.165,.84,.44,1)";
exports.easeOutQuint = c + "(.23,1,.32,1)";
exports.easeOutSine = c + "(.39,.575,.565,1)";
exports.elegantSlowStartEnd = c + "(.175,.885,.32,1.275)";
exports.linear = c + "(0,0,1,1)";
exports.stepEnd = s + "(1,0)";
exports.stepStart = s + "(1,1)";
//# sourceMappingURL=cssEasings.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/cubicBezier.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/cubicBezier.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(/*! ./math */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/math.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/constants.js");
var bezier = function (n1, n2, t) {
    return 3 * n1 * (1 - t) * (1 - t) * t + 3 * n2 * (1 - t) * t * t + t * t * t;
};
exports.cubicBezier = function (p0, p1, p2, p3) {
    if (p0 < 0 || p0 > 1 || p2 < 0 || p2 > 1) {
        return function (x) { return x; };
    }
    return function (x) {
        if (x === 0 || x === 1) {
            return x;
        }
        var start = 0;
        var end = 1;
        var limit = 19;
        do {
            var mid = (start + end) * .5;
            var xEst = bezier(p0, p2, mid);
            if (math_1.abs(x - xEst) < constants_1.epsilon) {
                return bezier(p1, p3, mid);
            }
            if (xEst < x) {
                start = mid;
            }
            else {
                end = mid;
            }
        } while (--limit);
        // limit is reached
        return x;
    };
};
//# sourceMappingURL=cubicBezier.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/frames.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/frames.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(/*! ./math */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/math.js");
exports.frames = function (n) {
    var q = 1 / (n - 1);
    return function (x) {
        var o = math_1.floor(x * n) * q;
        return x >= 0 && o < 0 ? 0 : x <= 1 && o > 1 ? 1 : o;
    };
};
//# sourceMappingURL=frames.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./constants */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/constants.js"));
__export(__webpack_require__(/*! ./cssEasings */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/cssEasings.js"));
__export(__webpack_require__(/*! ./cubicBezier */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/cubicBezier.js"));
__export(__webpack_require__(/*! ./frames */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/frames.js"));
__export(__webpack_require__(/*! ./math */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/math.js"));
__export(__webpack_require__(/*! ./steps */ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/steps.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/math.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/math.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.abs = Math.abs;
exports.asin = Math.asin;
exports.floor = Math.floor;
exports.cos = Math.cos;
exports.pow = Math.pow;
exports.sin = Math.sin;
exports.sqrt = Math.sqrt;
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/just-curves/internal/steps.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/just-curves/internal/steps.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The MIT License
 *
 * Copyright (c) justanimate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.steps = function (count, pos) {
    var q = count / 1;
    var p = pos === 'end'
        ? 0 : pos === 'start'
        ? 1 : pos || 0;
    return function (x) { return x >= 1 ? 1 : (p * q + x) - (p * q + x) % q; };
};
//# sourceMappingURL=steps.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/modernizr/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/modernizr/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Note: Only the source of
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/transformstylepreserve3d.js
 *
 * The MIT License
 *
 * Copyright (c) 2016 Modernizr
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function hasPreserve3d(window) {
    if (!window) {
        return false;
    }
    if (!window.document) {
        return false;
    }
    var outerAnchor;
    var innerAnchor;
    var CSS = window.CSS;
    var result = false;
    var tmp;
    if (CSS && CSS.supports && CSS.supports('(transform-style: preserve-3d)')) {
        return true;
    }
    outerAnchor = window.document.createElement('a');
    innerAnchor = window.document.createElement('a');
    outerAnchor.style.cssText =
        'display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);';
    innerAnchor.style.cssText =
        'display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);';
    outerAnchor.appendChild(innerAnchor);
    window.document.documentElement.appendChild(outerAnchor);
    tmp = innerAnchor.getBoundingClientRect();
    window.document.documentElement.removeChild(outerAnchor);
    result = tmp.width && tmp.width < 4;
    return result;
}
exports.default = {
    hasPreserve3d: hasPreserve3d,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/performance-now/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/performance-now/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * The MIT License
 *
 * Copyright (c) 2013 Braveg1rl
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// Generated by CoffeeScript 1.7.1
var getNanoSeconds, hrtime, loadTime;
var invoke;
if (typeof performance !== 'undefined' &&
    performance !== null &&
    performance.now) {
    invoke = function () {
        return performance.now();
    };
}
else if (typeof process !== 'undefined' &&
    process !== null &&
    process.hrtime) {
    invoke = function () {
        return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function () {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
}
else if (Date.now) {
    invoke = function () {
        return Date.now() - loadTime;
    };
    loadTime = Date.now();
}
else {
    invoke = function () {
        return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
}
function now() {
    return invoke();
}
exports.default = now;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/raf/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/raf/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The MIT License
 *
 * Copyright (c) 2017 Chris Dickinson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
var performance_now_1 = __webpack_require__(/*! ../performance-now */ "./node_modules/@haiku/core/lib/vendor/performance-now/index.js");
var root = typeof window === 'undefined' ? global : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf;
var caf;
if (typeof window !== 'undefined') {
    raf = window['request' + suffix];
    caf = window['cancel' + suffix] || window['cancelRequest' + suffix];
    for (var i = 0; !raf && i < vendors.length; i++) {
        raf = window[vendors[i] + 'Request' + suffix];
        caf =
            window[vendors[i] + 'Cancel' + suffix] ||
                window[vendors[i] + 'CancelRequest' + suffix];
    }
    // Some versions of FF have rAF but not cAF
    if (!raf || !caf) {
        var last_1 = 0, id_1 = 0, queue_1 = [], frameDuration_1 = 1000 / 60;
        raf = function (callback) {
            if (queue_1.length === 0) {
                var _now = performance_now_1.default(), next = Math.max(0, frameDuration_1 - (_now - last_1));
                last_1 = next + _now;
                setTimeout(function () {
                    var cp = queue_1.slice(0);
                    // Clear queue here to prevent
                    // callbacks from appending listeners
                    // to the current frame's queue
                    queue_1.length = 0;
                    for (var i = 0; i < cp.length; i++) {
                        if (!cp[i].cancelled) {
                            try {
                                cp[i].callback(last_1);
                            }
                            catch (e) {
                                setTimeout(function () {
                                    throw e;
                                }, 0);
                            }
                        }
                    }
                }, Math.round(next));
            }
            queue_1.push({
                handle: ++id_1,
                callback: callback,
                cancelled: false,
            });
            return id_1;
        };
        caf = function (handle) {
            for (var i = 0; i < queue_1.length; i++) {
                if (queue_1[i].handle === handle) {
                    queue_1[i].cancelled = true;
                }
            }
        };
    }
}
else {
    // Turn raf and caf into noops outside of the web.
    // This should help with leaked handles/isomorphic rendering.
    raf = caf = function () { };
}
function rafCall(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
}
function cafCall() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return caf.apply(root, args);
}
exports.default = {
    request: rafCall,
    cancel: cafCall,
};
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/svg-path-reversal/SVGPathReversal.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/svg-path-reversal/SVGPathReversal.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * https://github.com/Pomax/svg-to-something
 *
 * This code is in the public domain, except in jurisdictions that do
 * not recognise the public domain, where this code is MIT licensed.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Normalise an SVG path to absolute coordinates
 * and full commands, rather than relative coordinates
 * and/or shortcut commands.
 */
exports.normalizePath = function (d) {
    // preprocess "d" so that we have spaces between values
    // tslint:disable-next-line:no-parameter-reassignment
    d = d.replace(/,/g, ' ') // replace commas with spaces
        .replace(/-/g, ' - ') // add spacing around minus signs
        .replace(/-\s+/g, '-') // remove spacing to the right of minus signs.
        .replace(/([a-zA-Z])/g, ' $1 ');
    // set up the variables used in this function
    var instructions = d.replace(/([a-zA-Z])\s?/g, '|$1').split('|');
    var instructionLength = instructions.length;
    var i;
    var instruction;
    var op;
    var lop;
    var args = [];
    var alen;
    var a;
    var sx = 0;
    var sy = 0;
    var x = 0;
    var y = 0;
    var cx = 0;
    var cy = 0;
    var cx2 = 0;
    var cy2 = 0;
    var normalized = '';
    // we run through the instruction list starting at 1, not 0,
    // because we split up "|M x y ...." so the first element will
    // always be an empty string. By design.
    for (i = 1; i < instructionLength; i++) {
        // which instruction is this?
        instruction = instructions[i];
        op = instruction.substring(0, 1);
        lop = op.toLowerCase();
        // what are the arguments? note that we need to convert
        // all strings into numbers, or + will do silly things.
        args = instruction.replace(op, '').trim().split(' ');
        args = args.filter(function (v) { return (v !== ''); }).map(parseFloat);
        alen = args.length;
        // we could use a switch, but elaborate code in a "case" with
        // fallthrough is just horrid to read. So let's use ifthen
        // statements instead.
        // moveto command (plus possible lineto)
        if (lop === 'm') {
            normalized += 'M ';
            if (op === 'm') {
                x += args[0];
                y += args[1];
            }
            else {
                x = args[0];
                y = args[1];
            }
            // records start position, for dealing
            // with the shape close operator ('Z')
            sx = x;
            sy = y;
            normalized += x + ' ' + y + ' ';
            if (alen > 2) {
                for (a = 0; a < alen; a += 2) {
                    if (op === 'm') {
                        x += args[a];
                        y += args[a + 1];
                    }
                    else {
                        x = args[a];
                        y = args[a + 1];
                    }
                    normalized += 'L ' + x + ' ' + y + ' ';
                }
            }
            // lineto commands
        }
        else if (lop === 'l') {
            for (a = 0; a < alen; a += 2) {
                if (op === 'l') {
                    x += args[a];
                    y += args[a + 1];
                }
                else {
                    x = args[a];
                    y = args[a + 1];
                }
                normalized += 'L ' + x + ' ' + y + ' ';
            }
        }
        else if (lop === 'h') {
            for (a = 0; a < alen; a++) {
                if (op === 'h') {
                    x += args[a];
                }
                else {
                    x = args[a];
                }
                normalized += 'L ' + x + ' ' + y + ' ';
            }
        }
        else if (lop === 'v') {
            for (a = 0; a < alen; a++) {
                if (op === 'v') {
                    y += args[a];
                }
                else {
                    y = args[a];
                }
                normalized += 'L ' + x + ' ' + y + ' ';
            }
            // quadratic curveto commands
        }
        else if (lop === 'q') {
            for (a = 0; a < alen; a += 4) {
                if (op === 'q') {
                    cx = x + args[a];
                    cy = y + args[a + 1];
                    x += args[a + 2];
                    y += args[a + 3];
                }
                else {
                    cx = args[a];
                    cy = args[a + 1];
                    x = args[a + 2];
                    y = args[a + 3];
                }
                normalized += 'Q ' + cx + ' ' + cy + ' ' + x + ' ' + y + ' ';
            }
        }
        else if (lop === 't') {
            for (a = 0; a < alen; a += 2) {
                // reflect previous cx/cy over x/y
                cx = x + (x - cx);
                cy = y + (y - cy);
                // then get real end point
                if (op === 't') {
                    x += args[a];
                    y += args[a + 1];
                }
                else {
                    x = args[a];
                    y = args[a + 1];
                }
                normalized += 'Q ' + cx + ' ' + cy + ' ' + x + ' ' + y + ' ';
            }
        }
        else if (lop === 'c') {
            for (a = 0; a < alen; a += 6) {
                if (op === 'c') {
                    cx = x + args[a];
                    cy = y + args[a + 1];
                    cx2 = x + args[a + 2];
                    cy2 = y + args[a + 3];
                    x += args[a + 4];
                    y += args[a + 5];
                }
                else {
                    cx = args[a];
                    cy = args[a + 1];
                    cx2 = args[a + 2];
                    cy2 = args[a + 3];
                    x = args[a + 4];
                    y = args[a + 5];
                }
                normalized += 'C ' + cx + ' ' + cy + ' ' + cx2 + ' ' + cy2 + ' ' + x + ' ' + y + ' ';
            }
        }
        else if (lop === 's') {
            for (a = 0; a < alen; a += 4) {
                // reflect previous cx2/cy2 over x/y
                cx = x + (x - cx2);
                cy = y + (y - cy2);
                // then get real control and end point
                if (op === 's') {
                    cx2 = x + args[a];
                    cy2 = y + args[a + 1];
                    x += args[a + 2];
                    y += args[a + 3];
                }
                else {
                    cx2 = args[a];
                    cy2 = args[a + 1];
                    x = args[a + 2];
                    y = args[a + 3];
                }
                normalized += 'C ' + cx + ' ' + cy + ' ' + cx2 + ' ' + cy2 + ' ' + x + ' ' + y + ' ';
            }
        }
        else if (lop === 'z') {
            normalized += 'Z ';
            // not unimportant: path closing changes the current x/y coordinate
            x = sx;
            y = sy;
        }
    }
    return normalized.trim();
};
/**
 * Reverse an SVG path.
 * As long as the input path is normalised, this is actually really
 * simple to do. As all pathing commands are symmetrical, meaning
 * that they render the same when you reverse the coordinate order,
 * the grand trick here is to reverse the path (making sure to keep
 * coordinates ordered pairwise) and shift the operators left by
 * one or two coordinate pairs depending on the operator:
 *
 *   - Z disappears,
 *   - M becomes Z,
 *   - L moves to 2 spots earlier (skipping one coordinate),
 *   - Q moves to 2 spots earlier (skipping one coordinate),
 *   - C moves to 4 spots earlier (skipping two coordinates),
 *   - the path start must become M.
 */
exports.reverseNormalizedPath = function (normalized) {
    var terms = normalized.split(' ');
    var tlen = terms.length;
    var tlen1 = tlen - 1;
    var t;
    var reversed = [];
    var x;
    var y;
    var pair;
    var pairs;
    var shift;
    var matcher = new RegExp('[MLCQZ]', '');
    for (t = 0; t < tlen; t++) {
        var term = terms[t];
        // Is this an operator? If it is, run through its
        // argument list, which we know is fixed length.
        if (matcher.test(term)) {
            // how many coordinate pairs do we need to read,
            // and by how many pairs should this operator be
            // shifted left?
            if (term === 'C') {
                pairs = 3;
                shift = 2;
            }
            else if (term === 'Q') {
                pairs = 2;
                shift = 1;
            }
            else if (term === 'L') {
                pairs = 1;
                shift = 1;
            }
            else if (term === 'M') {
                pairs = 1;
                shift = 0;
            }
            else /*if (term === 'Z')*/ {
                reversed.push('M');
                continue;
            }
            // do the argument reading and operator shifting
            if (pairs === shift) {
                reversed.push(term);
            }
            for (pair = 0; pair < pairs; pair++) {
                if (pair === shift) {
                    reversed.push(term);
                }
                x = terms[++t];
                y = terms[++t];
                reversed.push(y);
                reversed.push(x);
            }
        }
        else {
            var pre = terms.slice(Math.max(t - 3, 0), 3).join(' ');
            var post = terms.slice(t + 1, Math.min(t + 4, tlen1)).join(' ');
            var range = pre + ' [' + term + '] ' + post;
            throw new Error(('Error while trying to reverse normalized SVG path, at position ' + t + ' (' + range + ').\n' +
                'Either the path is not normalised, or it\'s malformed.'));
        }
    }
    // generating the reversed path string involves
    // running through our transformed terms in reverse.
    var revstring = '';
    var rlen1 = reversed.length - 1;
    var r;
    for (r = rlen1; r > 0; r--) {
        revstring += reversed[r] + ' ';
    }
    revstring += 'Z';
    revstring = revstring.replace(/M M/g, 'Z M');
    return revstring;
};
//# sourceMappingURL=SVGPathReversal.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/svg-points/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/svg-points/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * Internet Systems Consortium license (ISC)
 *
 * Copyright (c) 2016 Colin Meinke
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright notice
 * and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
 * OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
 * ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var toPath_1 = __webpack_require__(/*! ./toPath */ "./node_modules/@haiku/core/lib/vendor/svg-points/toPath.js");
var toPoints_1 = __webpack_require__(/*! ./toPoints */ "./node_modules/@haiku/core/lib/vendor/svg-points/toPoints.js");
exports.default = {
    toPath: toPath_1.default,
    toPoints: toPoints_1.default,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/svg-points/toPath.js":
/*!******************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/svg-points/toPath.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * Internet Systems Consortium license (ISC)
 *
 * Copyright (c) 2016 Colin Meinke
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright notice
 * and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
 * OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
 * ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var toPoints_1 = __webpack_require__(/*! ./toPoints */ "./node_modules/@haiku/core/lib/vendor/svg-points/toPoints.js");
function pointsToD(p) {
    var d = '';
    var i = 0;
    var firstPoint;
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var point = p_1[_i];
        var curve = point.curve, moveTo_1 = point.moveTo, x = point.x, y = point.y;
        var isFirstPoint = i === 0 || moveTo_1;
        var isLastPoint = i === p.length - 1 || p[i + 1].moveTo;
        var prevPoint = i === 0 ? null : p[i - 1];
        if (isFirstPoint) {
            firstPoint = point;
            if (!isLastPoint) {
                d += "M" + x + "," + y;
            }
        }
        else if (curve) {
            switch (curve.type) {
                case 'arc':
                    var _a = point.curve, _b = _a.largeArcFlag, largeArcFlag = _b === void 0 ? 0 : _b, rx = _a.rx, ry = _a.ry, _c = _a.sweepFlag, sweepFlag = _c === void 0 ? 0 : _c, _d = _a.xAxisRotation, xAxisRotation = _d === void 0 ? 0 : _d;
                    d += "A" + rx + "," + ry + "," + xAxisRotation + "," + largeArcFlag + "," + sweepFlag + "," + x + "," + y;
                    break;
                case 'cubic':
                    var _e = point.curve, cx1 = _e.x1, cy1 = _e.y1, cx2 = _e.x2, cy2 = _e.y2;
                    d += "C" + cx1 + "," + cy1 + "," + cx2 + "," + cy2 + "," + x + "," + y;
                    break;
                case 'quadratic':
                    var _f = point.curve, qx1 = _f.x1, qy1 = _f.y1;
                    d += "Q" + qx1 + "," + qy1 + "," + x + "," + y;
                    break;
            }
            if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
                d += 'Z';
            }
        }
        else if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
            d += 'Z';
        }
        else if (x !== prevPoint.x && y !== prevPoint.y) {
            d += "L" + x + "," + y;
        }
        else if (x !== prevPoint.x) {
            d += "H" + x;
        }
        else if (y !== prevPoint.y) {
            d += "V" + y;
        }
        i++;
    }
    return d;
}
function toPath(s) {
    var points = Array.isArray(s) ? s : toPoints_1.default(s);
    return pointsToD(points);
}
exports.default = toPath;
//# sourceMappingURL=toPath.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/lib/vendor/svg-points/toPoints.js":
/*!********************************************************************!*\
  !*** ./node_modules/@haiku/core/lib/vendor/svg-points/toPoints.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * Internet Systems Consortium license (ISC)
 *
 * Copyright (c) 2016 Colin Meinke
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright notice
 * and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
 * OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
 * ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var convertQuadraticToCubicBezier = function (spec, prevSpec) { return prevSpec ?
    {
        curve: {
            type: 'cubic',
            x1: prevSpec.x + 2 / 3 * (spec.curve.x1 - prevSpec.x),
            y1: prevSpec.y + 2 / 3 * (spec.curve.y1 - prevSpec.y),
            x2: spec.x + 2 / 3 * (spec.curve.x1 - spec.x),
            y2: spec.y + 2 / 3 * (spec.curve.y1 - spec.y),
        },
        x: spec.x,
        y: spec.y,
    } :
    // This should never happen, but just return the original spec if we didn't have a starting point.
    spec; };
var toPoints = function (spec) {
    switch (spec.type) {
        case 'circle':
            return getPointsFromCircle(spec);
        case 'ellipse':
            return getPointsFromEllipse(spec);
        case 'line':
            return getPointsFromLine(spec);
        case 'path':
            return getPointsFromPath(spec);
        case 'polygon':
            return getPointsFromPolygon(spec);
        case 'polyline':
            return getPointsFromPolyline(spec);
        case 'rect':
            return getPointsFromRect(spec);
        default:
            return [];
    }
};
var getPointsFromCircle = function (_a) {
    var cx = _a.cx, cy = _a.cy, r = _a.r;
    return [
        {
            x: cx,
            y: cy - r,
            moveTo: true,
        },
        {
            x: cx,
            y: cy + r,
            curve: {
                type: 'arc',
                rx: r,
                ry: r,
                sweepFlag: 1,
            },
        },
        {
            x: cx,
            y: cy - r,
            curve: {
                type: 'arc',
                rx: r,
                ry: r,
                sweepFlag: 1,
            },
        },
    ];
};
var getPointsFromEllipse = function (_a) {
    var cx = _a.cx, cy = _a.cy, rx = _a.rx, ry = _a.ry;
    return [
        {
            x: cx,
            y: cy - ry,
            moveTo: true,
        },
        {
            x: cx,
            y: cy + ry,
            curve: {
                rx: rx,
                ry: ry,
                type: 'arc',
                sweepFlag: 1,
            },
        },
        {
            x: cx,
            y: cy - ry,
            curve: {
                rx: rx,
                ry: ry,
                type: 'arc',
                sweepFlag: 1,
            },
        },
    ];
};
var getPointsFromLine = function (_a) {
    var x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
    return [
        {
            x: x1,
            y: y1,
            moveTo: true,
        },
        {
            x: x2,
            y: y2,
        },
    ];
};
var validCommands = /[MmLlHhVvCcSsQqTtAaZz]/g;
var commandLengths = {
    A: 7,
    C: 6,
    H: 1,
    L: 2,
    M: 2,
    Q: 4,
    S: 4,
    T: 2,
    V: 1,
    Z: 0,
};
var relativeCommands = [
    'a',
    'c',
    'h',
    'l',
    'm',
    'q',
    's',
    't',
    'v',
];
var PARSING_REGEXPS = {
    command: /^[MmLlHhVvCcSsQqTtAaZz]/g,
    whitespace: /^[\s]+/,
    comma: /^,/,
    number: /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^-?\d*\.?\d+(?:e[+-]?\d+)?/i,
};
var isRelative = function (command) { return relativeCommands.indexOf(command) !== -1; };
var optionalArcKeys = ['xAxisRotation', 'largeArcFlag', 'sweepFlag'];
var getCommands = function (d) { return d && d.match(validCommands); };
function tokenize(d) {
    var tokens = [];
    var chunk = d;
    while (chunk.length > 0) {
        for (var regexpName in PARSING_REGEXPS) {
            var match = PARSING_REGEXPS[regexpName].exec(chunk);
            if (match) {
                tokens.push({
                    type: regexpName,
                    raw: match[0],
                });
                // Need to slice the chunk at the original match length
                chunk = chunk.slice(match[0].length, chunk.length);
                break;
            }
        }
    }
    return tokens;
}
var getParams = function (d) {
    var tokens = tokenize(d);
    var fixed = tokens.filter(function (t) {
        return t.type === 'number' || t.type === 'command' || t.type === 'comma';
    }).map(function (t) {
        return t.raw;
    }).join(' ');
    var segs = fixed.split(validCommands)
        .map(function (p) {
        return p.trim();
    })
        .filter(function (p) {
        return p.length > 0;
    });
    return segs.map(function (s) {
        return s.split(/[ ,]+/)
            .map(function (n) {
            return parseFloat(n);
        })
            .filter(function (n) {
            return !isNaN(n);
        });
    });
};
var getPointsFromPath = function (_a) {
    var d = _a.d;
    var commands = getCommands(d);
    if (!commands) {
        return [];
    }
    var params = getParams(d);
    var points = [];
    var moveTo;
    for (var i = 0, l = commands.length; i < l; i++) {
        var command = commands[i];
        var upperCaseCommand = command.toUpperCase();
        var commandLength = commandLengths[upperCaseCommand];
        var relative = isRelative(command);
        var prevPoint = (points.length < 1) ? null : points[points.length - 1];
        if (commandLength > 0) {
            var commandParams = params.shift();
            var iterations = commandParams.length / commandLength;
            for (var j = 0; j < iterations; j++) {
                prevPoint = (points.length < 1) ? null : points[points.length - 1];
                switch (upperCaseCommand) {
                    case 'M':
                        var x = (relative && prevPoint ? prevPoint.x : 0) + commandParams.shift();
                        var y = (relative && prevPoint ? prevPoint.y : 0) + commandParams.shift();
                        moveTo = {
                            x: x,
                            y: y,
                        };
                        points.push({
                            x: x,
                            y: y,
                            moveTo: true,
                        });
                        break;
                    case 'L':
                        points.push({
                            x: (relative ? prevPoint.x : 0) + commandParams.shift(),
                            y: (relative ? prevPoint.y : 0) + commandParams.shift(),
                        });
                        break;
                    case 'H':
                        points.push({
                            x: (relative ? prevPoint.x : 0) + commandParams.shift(),
                            y: prevPoint.y,
                        });
                        break;
                    case 'V':
                        points.push({
                            x: prevPoint.x,
                            y: (relative ? prevPoint.y : 0) + commandParams.shift(),
                        });
                        break;
                    case 'A':
                        points.push({
                            curve: {
                                type: 'arc',
                                rx: commandParams.shift(),
                                ry: commandParams.shift(),
                                xAxisRotation: commandParams.shift(),
                                largeArcFlag: commandParams.shift(),
                                sweepFlag: commandParams.shift(),
                            },
                            x: (relative ? prevPoint.x : 0) + commandParams.shift(),
                            y: (relative ? prevPoint.y : 0) + commandParams.shift(),
                        });
                        for (var _i = 0, optionalArcKeys_1 = optionalArcKeys; _i < optionalArcKeys_1.length; _i++) {
                            var k = optionalArcKeys_1[_i];
                            if (points[points.length - 1].curve[k] === 0) {
                                delete points[points.length - 1].curve[k];
                            }
                        }
                        break;
                    case 'C':
                        points.push({
                            curve: {
                                type: 'cubic',
                                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                                y1: (relative ? prevPoint.y : 0) + commandParams.shift(),
                                x2: (relative ? prevPoint.x : 0) + commandParams.shift(),
                                y2: (relative ? prevPoint.y : 0) + commandParams.shift(),
                            },
                            x: (relative ? prevPoint.x : 0) + commandParams.shift(),
                            y: (relative ? prevPoint.y : 0) + commandParams.shift(),
                        });
                        break;
                    case 'S':
                        var sx2 = (relative ? prevPoint.x : 0) + commandParams.shift();
                        var sy2 = (relative ? prevPoint.y : 0) + commandParams.shift();
                        var sx = (relative ? prevPoint.x : 0) + commandParams.shift();
                        var sy = (relative ? prevPoint.y : 0) + commandParams.shift();
                        var diff = {
                            x: null,
                            y: null,
                        };
                        var sx1 = void 0;
                        var sy1 = void 0;
                        if (prevPoint.curve && prevPoint.curve.type === 'cubic') {
                            diff.x = Math.abs(prevPoint.x - prevPoint.curve.x2);
                            diff.y = Math.abs(prevPoint.y - prevPoint.curve.y2);
                            sx1 = prevPoint.x < prevPoint.curve.x2 ? prevPoint.x - diff.x : prevPoint.x + diff.x;
                            sy1 = prevPoint.y < prevPoint.curve.y2 ? prevPoint.y - diff.y : prevPoint.y + diff.y;
                        }
                        else {
                            diff.x = Math.abs(sx - sx2);
                            diff.y = Math.abs(sy - sy2);
                            sx1 = prevPoint.x;
                            sy1 = prevPoint.y;
                        }
                        points.push({
                            curve: {
                                type: 'cubic',
                                x1: sx1,
                                y1: sy1,
                                x2: sx2,
                                y2: sy2,
                            },
                            x: sx,
                            y: sy,
                        });
                        break;
                    case 'Q':
                        points.push(convertQuadraticToCubicBezier({
                            curve: {
                                type: 'quadratic',
                                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                                y1: (relative ? prevPoint.y : 0) + commandParams.shift(),
                            },
                            x: (relative ? prevPoint.x : 0) + commandParams.shift(),
                            y: (relative ? prevPoint.y : 0) + commandParams.shift(),
                        }, prevPoint));
                        break;
                    case 'T':
                        var tx = (relative ? prevPoint.x : 0) + commandParams.shift();
                        var ty = (relative ? prevPoint.y : 0) + commandParams.shift();
                        var tx1 = void 0;
                        var ty1 = void 0;
                        if (prevPoint.curve && prevPoint.curve.type === 'quadratic') {
                            var diff_1 = {
                                x: Math.abs(prevPoint.x - prevPoint.curve.x1),
                                y: Math.abs(prevPoint.y - prevPoint.curve.y1),
                            };
                            tx1 = prevPoint.x < prevPoint.curve.x1 ? prevPoint.x - diff_1.x : prevPoint.x + diff_1.x;
                            ty1 = prevPoint.y < prevPoint.curve.y1 ? prevPoint.y - diff_1.y : prevPoint.y + diff_1.y;
                        }
                        else {
                            tx1 = prevPoint.x;
                            ty1 = prevPoint.y;
                        }
                        points.push(convertQuadraticToCubicBezier({
                            curve: {
                                type: 'quadratic',
                                x1: tx1,
                                y1: ty1,
                            },
                            x: tx,
                            y: ty,
                        }, prevPoint));
                        break;
                }
            }
        }
        else if (prevPoint !== null) {
            if (upperCaseCommand === 'Z') {
                prevPoint.closed = true;
            }
            if (moveTo !== undefined && (prevPoint.x !== moveTo.x || prevPoint.y !== moveTo.y)) {
                points.push({
                    x: moveTo.x,
                    y: moveTo.y,
                });
            }
        }
    }
    return points;
};
var getPointsFromPolygon = function (_a) {
    var points = _a.points;
    return getPointsFromPoints({
        points: points,
        closed: true,
    });
};
var getPointsFromPolyline = function (_a) {
    var points = _a.points;
    return getPointsFromPoints({
        points: points,
        closed: false,
    });
};
var getPointsFromPoints = function (_a) {
    var closed = _a.closed, points = _a.points;
    var numbers = points.split(/[\s,]+/).map(function (n) { return parseFloat(n); });
    var p = numbers.reduce(function (arr, point, i) {
        if (i % 2 === 0) {
            arr.push({ x: point });
        }
        else {
            arr[(i - 1) / 2].y = point;
        }
        return arr;
    }, []);
    if (closed) {
        p.push(__assign({}, p[0]));
    }
    p[0].moveTo = true;
    return p;
};
var getPointsFromRect = function (_a) {
    var height = _a.height, rx = _a.rx, ry = _a.ry, width = _a.width, x = _a.x, y = _a.y;
    if (rx || ry) {
        return getPointsFromRectWithCornerRadius({
            height: height,
            width: width,
            x: x,
            y: y,
            rx: rx || ry,
            ry: ry || rx,
            type: 'rect',
        });
    }
    return getPointsFromBasicRect({
        height: height,
        width: width,
        x: x,
        y: y,
    });
};
var getPointsFromBasicRect = function (_a) {
    var height = _a.height, width = _a.width, x = _a.x, y = _a.y;
    return [
        {
            x: x,
            y: y,
            moveTo: true,
        },
        {
            y: y,
            x: x + width,
        },
        {
            x: x + width,
            y: y + height,
        },
        {
            x: x,
            y: y + height,
        },
        {
            x: x,
            y: y,
        },
    ];
};
var getPointsFromRectWithCornerRadius = function (_a) {
    var height = _a.height, rx = _a.rx, ry = _a.ry, width = _a.width, x = _a.x, y = _a.y;
    var curve = {
        rx: rx,
        ry: ry,
        type: 'arc',
        sweepFlag: 1,
    };
    return [
        {
            y: y,
            x: x + rx,
            moveTo: true,
        },
        {
            y: y,
            x: x + width - rx,
        },
        {
            curve: curve,
            x: x + width,
            y: y + ry,
        },
        {
            x: x + width,
            y: y + height - ry,
        },
        {
            curve: curve,
            x: x + width - rx,
            y: y + height,
        },
        {
            x: x + rx,
            y: y + height,
        },
        {
            curve: curve,
            x: x,
            y: y + height - ry,
        },
        {
            x: x,
            y: y + ry,
        },
        {
            curve: curve,
            y: y,
            x: x + rx,
        },
    ];
};
exports.default = toPoints;
//# sourceMappingURL=toPoints.js.map

/***/ }),

/***/ "./node_modules/@haiku/core/package.json":
/*!***********************************************!*\
  !*** ./node_modules/@haiku/core/package.json ***!
  \***********************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, authors, bugs, bundleDependencies, deprecated, description, devDependencies, directories, homepage, keywords, license, main, name, peerDependencies, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@haiku/core@^5.1.1\",\"_id\":\"@haiku/core@5.1.1\",\"_inBundle\":false,\"_integrity\":\"sha512-e8w+0gie6JuVblfb4IGovU877D92CYFKD6vcB+RnZXgApV/C1YarQDfYZKjePAF7fzx4/9tanN/AWebXJIxBGQ==\",\"_location\":\"/@haiku/core\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"@haiku/core@^5.1.1\",\"name\":\"@haiku/core\",\"escapedName\":\"@haiku%2fcore\",\"scope\":\"@haiku\",\"rawSpec\":\"^5.1.1\",\"saveSpec\":null,\"fetchSpec\":\"^5.1.1\"},\"_requiredBy\":[\"/@haiku/burf-title\"],\"_resolved\":\"https://reservoir.haiku.ai:8910/@haiku%2fcore/-/core-5.1.1.tgz\",\"_shasum\":\"2a012a314ea9539bde22381c043dff9d4bcb5658\",\"_spec\":\"@haiku/core@^5.1.1\",\"_where\":\"/Users/rivo/Desktop/AWE_landing/node_modules/@haiku/burf-title\",\"authors\":[\"Matthew Trost <matthew@haiku.ai>\",\"Zack Brown <zack@haiku.ai>\",\"Taylor Poe <taylor@haiku.ai>\",\"Sasha Joseph <sasha@haiku.ai>\"],\"bugs\":{\"url\":\"https://github.com/HaikuTeam/core/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"Haiku Core is a JavaScript library for building user interfaces\",\"devDependencies\":{\"@angular/core\":\"^6.0.9\",\"async\":\"^2.5.0\",\"chokidar\":\"^1.7.0\",\"cross-env\":\"^5.1.6\",\"depcheck\":\"^0.6.7\",\"express\":\"4.14.1\",\"filesize\":\"3.5.10\",\"fs-extra\":\"^4.0.2\",\"haiku-testing\":\"5.1.1\",\"handlebars\":\"^4.0.8\",\"istanbul-reporter-cobertura-haiku\":\"^1.0.2\",\"jsdom\":\"^11.1.0\",\"leaked-handles\":\"^5.2.0\",\"nodemon\":\"1.11.0\",\"nyc\":\"^13.0.1\",\"opn\":\"^5.3.0\",\"react\":\"^16.0.0\",\"react-dom\":\"^16.0.0\",\"react-router-dom\":\"^4.1.1\",\"rollup\":\"^0.53.3\",\"rollup-plugin-commonjs\":\"^8.2.6\",\"rollup-plugin-json\":\"^2.3.0\",\"rollup-plugin-node-resolve\":\"^3.0.0\",\"rollup-plugin-uglify-es\":\"^0.0.1\",\"rxjs\":\"^6.3.3\",\"tap-spec\":\"^4.1.2\",\"tape\":\"^4.9.0\",\"ts-loader\":\"^4.4.2\",\"ts-node\":\"^6.1.0\",\"tsconfig-paths\":\"^3.3.2\",\"tslint\":\"^5.11.0\",\"tslint-config-haiku\":\"^1.0.16\",\"tslint-no-circular-imports\":\"^0.5.0\",\"typescript\":\"^3.0.3\",\"webpack\":\"^4.16.0\",\"webpack-cli\":\"^3.0.8\"},\"directories\":{\"lib\":\"lib\",\"dom\":\"dom\",\"components\":\"components\",\"dist\":\"dist\"},\"homepage\":\"https://www.haikuforteams.com\",\"keywords\":[\"animation\",\"motion\",\"component\",\"web\",\"browser\",\"svg\",\"rendering\",\"engine\"],\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"@haiku/core\",\"peerDependencies\":{\"@angular/core\":\"^6.0.9\",\"react\":\"^16.0.0 || ^15.4.2\",\"react-dom\":\"^16.0.0 || ^15.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/HaikuTeam/core.git\"},\"scripts\":{\"bundle\":\"yarn compile && yarn ts ./scripts/bundle.ts\",\"compile\":\"tsc\",\"demos\":\"yarn ts ./scripts/demos.ts\",\"develop\":\"tsc --watch\",\"fix\":\"yarn lint --fix\",\"lint\":\"tslint --exclude 'src/vendor/**' -p tsconfig.all.json -t stylish\",\"lint-report\":\"yarn lint -t checkstyle -o checkstyle-result.xml\",\"test\":\"yarn ts ./node_modules/.bin/tape 'test/**/*.test.ts' | tap-spec\",\"test-report\":\"nyc yarn ts ./node_modules/.bin/tape 'test/**/*.test.ts' > test-result.tap\",\"ts\":\"cross-env NODE_ENV=test ts-node -r tsconfig-paths/register -P tsconfig.all.json\"},\"version\":\"5.1.1\"}");

/***/ })

}]);