"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _uuidv = require("uuidv4");
var _keyv = _interopRequireDefault(require("keyv"));
var _tiktoken = require("@dqbd/tiktoken");
var _fetchEventSource = require("@waylaidwanderer/fetch-event-source");
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _undici = require("undici");
var _nodeAbortController = require("node-abort-controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CHATGPT_MODEL = 'gpt-3.5-turbo';
var tokenizersCache = {};
var ChatGPTClient = /*#__PURE__*/function () {
  function ChatGPTClient(apiKey) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cacheOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, ChatGPTClient);
    this.apiKey = apiKey;
    cacheOptions.namespace = cacheOptions.namespace || 'chatgpt';
    this.conversationsCache = new _keyv["default"](cacheOptions);
    this.setOptions(options);
  }
  _createClass(ChatGPTClient, [{
    key: "setOptions",
    value: function setOptions(options) {
      if (this.options && !this.options.replaceOptions) {
        // nested options aren't spread properly, so we need to do this manually
        this.options.modelOptions = _objectSpread(_objectSpread({}, this.options.modelOptions), options.modelOptions);
        delete options.modelOptions;
        // now we can merge options
        this.options = _objectSpread(_objectSpread({}, this.options), options);
      } else {
        this.options = options;
      }
      if (this.options.openaiApiKey) {
        this.apiKey = this.options.openaiApiKey;
      }
      var modelOptions = this.options.modelOptions || {};
      this.modelOptions = _objectSpread(_objectSpread({}, modelOptions), {}, {
        // set some good defaults (check for undefined in some cases because they may be 0)
        model: modelOptions.model || CHATGPT_MODEL,
        temperature: typeof modelOptions.temperature === 'undefined' ? 0.8 : modelOptions.temperature,
        top_p: typeof modelOptions.top_p === 'undefined' ? 1 : modelOptions.top_p,
        presence_penalty: typeof modelOptions.presence_penalty === 'undefined' ? 1 : modelOptions.presence_penalty,
        stop: modelOptions.stop
      });
      this.isChatGptModel = this.modelOptions.model.startsWith('gpt-3.5-turbo');
      var isChatGptModel = this.isChatGptModel;
      this.isUnofficialChatGptModel = this.modelOptions.model.startsWith('text-chat') || this.modelOptions.model.startsWith('text-davinci-002-render');
      var isUnofficialChatGptModel = this.isUnofficialChatGptModel;

      // Davinci models have a max context length of 4097 tokens.
      this.maxContextTokens = this.options.maxContextTokens || (isChatGptModel ? 4095 : 4097);
      // I decided to reserve 1024 tokens for the response.
      // The max prompt tokens is determined by the max context tokens minus the max response tokens.
      // Earlier messages will be dropped until the prompt is within the limit.
      this.maxResponseTokens = this.modelOptions.max_tokens || 1024;
      this.maxPromptTokens = this.options.maxPromptTokens || this.maxContextTokens - this.maxResponseTokens;
      if (this.maxPromptTokens + this.maxResponseTokens > this.maxContextTokens) {
        throw new Error("maxPromptTokens + max_tokens (".concat(this.maxPromptTokens, " + ").concat(this.maxResponseTokens, " = ").concat(this.maxPromptTokens + this.maxResponseTokens, ") must be less than or equal to maxContextTokens (").concat(this.maxContextTokens, ")"));
      }
      this.userLabel = this.options.userLabel || 'User';
      this.chatGptLabel = this.options.chatGptLabel || 'ChatGPT';
      if (isChatGptModel) {
        // Use these faux tokens to help the AI understand the context since we are building the chat log ourselves.
        // Trying to use "<|im_start|>" causes the AI to still generate "<" or "<|" at the end sometimes for some reason,
        // without tripping the stop sequences, so I'm using "||>" instead.
        this.startToken = '||>';
        this.endToken = '';
        this.gptEncoder = this.constructor.getTokenizer('cl100k_base');
      } else if (isUnofficialChatGptModel) {
        this.startToken = '<|im_start|>';
        this.endToken = '<|im_end|>';
        this.gptEncoder = this.constructor.getTokenizer('text-davinci-003', true, {
          '<|im_start|>': 100264,
          '<|im_end|>': 100265
        });
      } else {
        // Previously I was trying to use "<|endoftext|>" but there seems to be some bug with OpenAI's token counting
        // system that causes only the first "<|endoftext|>" to be counted as 1 token, and the rest are not treated
        // as a single token. So we're using this instead.
        this.startToken = '||>';
        this.endToken = '';
        try {
          this.gptEncoder = this.constructor.getTokenizer(this.modelOptions.model, true);
        } catch (_unused) {
          this.gptEncoder = this.constructor.getTokenizer('text-davinci-003', true);
        }
      }
      if (!this.modelOptions.stop) {
        var stopTokens = [this.startToken];
        if (this.endToken && this.endToken !== this.startToken) {
          stopTokens.push(this.endToken);
        }
        stopTokens.push("\n".concat(this.userLabel, ":"));
        // I chose not to do one for `chatGptLabel` because I've never seen it happen
        this.modelOptions.stop = stopTokens;
      }
      if (this.options.reverseProxyUrl) {
        this.completionsUrl = this.options.reverseProxyUrl;
      } else if (isChatGptModel) {
        this.completionsUrl = 'https://api.openai.com/v1/chat/completions';
      } else {
        this.completionsUrl = 'https://api.openai.com/v1/completions';
      }
      return this;
    }
  }, {
    key: "getCompletion",
    value: function () {
      var _getCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(input, onProgress) {
        var abortController,
          modelOptions,
          debug,
          url,
          opts,
          response,
          body,
          error,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              abortController = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
              if (!abortController) {
                abortController = new _nodeAbortController.AbortController();
              }
              modelOptions = _objectSpread({}, this.modelOptions);
              modelOptions.stream = typeof onProgress === 'function';
              if (this.isChatGptModel) {
                modelOptions.messages = input;
              } else {
                modelOptions.prompt = input;
              }
              debug = this.options.debug;
              url = this.completionsUrl;
              if (debug) {
                console.debug();
                console.debug(url);
                console.debug(modelOptions);
                console.debug();
              }
              opts = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(this.apiKey)
                },
                body: JSON.stringify(modelOptions),
                dispatcher: new _undici.Agent({
                  bodyTimeout: 0,
                  headersTimeout: 0
                })
              };
              if (this.options.proxy) {
                opts.dispatcher = new _undici.ProxyAgent(this.options.proxy);
              }
              if (!modelOptions.stream) {
                _context3.next = 12;
                break;
              }
              return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
                  var done;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        done = false;
                        _context2.next = 4;
                        return (0, _fetchEventSource.fetchEventSource)(url, _objectSpread(_objectSpread({}, opts), {}, {
                          signal: abortController.signal,
                          onopen: function onopen(response) {
                            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                              var error, body;
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!(response.status === 200)) {
                                      _context.next = 2;
                                      break;
                                    }
                                    return _context.abrupt("return");
                                  case 2:
                                    if (debug) {
                                      console.debug(response);
                                    }
                                    _context.prev = 3;
                                    _context.next = 6;
                                    return response.text();
                                  case 6:
                                    body = _context.sent;
                                    error = new Error("Failed to send message. HTTP ".concat(response.status, " - ").concat(body));
                                    error.status = response.status;
                                    error.json = JSON.parse(body);
                                    _context.next = 15;
                                    break;
                                  case 12:
                                    _context.prev = 12;
                                    _context.t0 = _context["catch"](3);
                                    error = error || new Error("Failed to send message. HTTP ".concat(response.status));
                                  case 15:
                                    throw error;
                                  case 16:
                                  case "end":
                                    return _context.stop();
                                }
                              }, _callee, null, [[3, 12]]);
                            }))();
                          },
                          onclose: function onclose() {
                            if (debug) {
                              console.debug('Server closed the connection unexpectedly, returning...');
                            }
                            // workaround for private API not sending [DONE] event
                            if (!done) {
                              onProgress('[DONE]');
                              abortController.abort();
                              resolve();
                            }
                          },
                          onerror: function onerror(err) {
                            if (debug) {
                              console.debug(err);
                            }
                            // rethrow to stop the operation
                            throw err;
                          },
                          onmessage: function onmessage(message) {
                            if (debug) {
                              console.debug(message);
                            }
                            if (!message.data || message.event === 'ping') {
                              return;
                            }
                            if (message.data === '[DONE]') {
                              onProgress('[DONE]');
                              abortController.abort();
                              resolve();
                              done = true;
                              return;
                            }
                            onProgress(JSON.parse(message.data));
                          }
                        }));
                      case 4:
                        _context2.next = 9;
                        break;
                      case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2["catch"](0);
                        reject(_context2.t0);
                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 6]]);
                }));
                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 12:
              _context3.next = 14;
              return (0, _nodeFetch["default"])(url, _objectSpread(_objectSpread({}, opts), {}, {
                signal: abortController.signal
              }));
            case 14:
              response = _context3.sent;
              if (!(response.status !== 200)) {
                _context3.next = 23;
                break;
              }
              _context3.next = 18;
              return response.text();
            case 18:
              body = _context3.sent;
              error = new Error("Failed to send message. HTTP ".concat(response.status, " - ").concat(body));
              error.status = response.status;
              try {
                error.json = JSON.parse(body);
              } catch (_unused3) {
                error.body = body;
              }
              throw error;
            case 23:
              return _context3.abrupt("return", response.json());
            case 24:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getCompletion(_x, _x2) {
        return _getCompletion.apply(this, arguments);
      }
      return getCompletion;
    }()
  }, {
    key: "generateTitle",
    value: function () {
      var _generateTitle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userMessage, botMessage) {
        var instructionsPayload, titleGenClientOptions, titleGenClient, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              instructionsPayload = {
                role: 'system',
                content: "Write an extremely concise subtitle for this conversation with no more than a few words. All words should be capitalized. Exclude punctuation.\n\n||>Message:\n".concat(userMessage.message, "\n||>Response:\n").concat(botMessage.message, "\n\n||>Title:")
              };
              titleGenClientOptions = JSON.parse(JSON.stringify(this.options));
              titleGenClientOptions.modelOptions = {
                model: 'gpt-3.5-turbo',
                temperature: 0,
                presence_penalty: 0,
                frequency_penalty: 0
              };
              titleGenClient = new ChatGPTClient(this.apiKey, titleGenClientOptions);
              _context4.next = 6;
              return titleGenClient.getCompletion([instructionsPayload], null);
            case 6:
              result = _context4.sent;
              return _context4.abrupt("return", result.choices[0].message.content.replace(/[^a-zA-Z0-9' ]/g, '').replace(/\s+/g, ' ').trim());
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function generateTitle(_x5, _x6) {
        return _generateTitle.apply(this, arguments);
      }
      return generateTitle;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(message) {
        var _this = this;
        var opts,
          conversationId,
          parentMessageId,
          conversation,
          isNewConversation,
          shouldGenerateTitle,
          userMessage,
          payload,
          reply,
          result,
          replyMessage,
          returnData,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              opts = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
              if (opts.clientOptions && _typeof(opts.clientOptions) === 'object') {
                this.setOptions(opts.clientOptions);
              }
              conversationId = opts.conversationId || (0, _uuidv.uuid)();
              parentMessageId = opts.parentMessageId || (0, _uuidv.uuid)();
              _context5.next = 6;
              return this.conversationsCache.get(conversationId);
            case 6:
              conversation = _context5.sent;
              isNewConversation = false;
              if (!conversation) {
                conversation = {
                  messages: [],
                  createdAt: Date.now()
                };
                isNewConversation = true;
              }
              shouldGenerateTitle = opts.shouldGenerateTitle && isNewConversation;
              userMessage = {
                id: (0, _uuidv.uuid)(),
                parentMessageId: parentMessageId,
                role: 'User',
                message: message
              };
              conversation.messages.push(userMessage);
              if (!this.isChatGptModel) {
                _context5.next = 18;
                break;
              }
              _context5.next = 15;
              return this.buildPrompt(conversation.messages, userMessage.id, true);
            case 15:
              payload = _context5.sent;
              _context5.next = 21;
              break;
            case 18:
              _context5.next = 20;
              return this.buildPrompt(conversation.messages, userMessage.id);
            case 20:
              payload = _context5.sent;
            case 21:
              reply = '';
              result = null;
              if (!(typeof opts.onProgress === 'function')) {
                _context5.next = 28;
                break;
              }
              _context5.next = 26;
              return this.getCompletion(payload, function (progressMessage) {
                if (progressMessage === '[DONE]') {
                  return;
                }
                var token = _this.isChatGptModel ? progressMessage.choices[0].delta.content : progressMessage.choices[0].text;
                // first event's delta content is always undefined
                if (!token) {
                  return;
                }
                if (_this.options.debug) {
                  console.debug(token);
                }
                if (token === _this.endToken) {
                  return;
                }
                opts.onProgress(token);
                reply += token;
              }, opts.abortController || new _nodeAbortController.AbortController());
            case 26:
              _context5.next = 33;
              break;
            case 28:
              _context5.next = 30;
              return this.getCompletion(payload, null, opts.abortController || new _nodeAbortController.AbortController());
            case 30:
              result = _context5.sent;
              if (this.options.debug) {
                console.debug(JSON.stringify(result));
              }
              if (this.isChatGptModel) {
                reply = result.choices[0].message.content;
              } else {
                reply = result.choices[0].text.replace(this.endToken, '');
              }
            case 33:
              // avoids some rendering issues when using the CLI app
              if (this.options.debug) {
                console.debug();
              }
              reply = reply.trim();
              replyMessage = {
                id: (0, _uuidv.uuid)(),
                parentMessageId: userMessage.id,
                role: 'ChatGPT',
                message: reply
              };
              conversation.messages.push(replyMessage);
              returnData = {
                response: replyMessage.message,
                conversationId: conversationId,
                parentMessageId: replyMessage.parentMessageId,
                messageId: replyMessage.id,
                details: result || {}
              };
              if (!shouldGenerateTitle) {
                _context5.next = 43;
                break;
              }
              _context5.next = 41;
              return this.generateTitle(userMessage, replyMessage);
            case 41:
              conversation.title = _context5.sent;
              returnData.title = conversation.title;
            case 43:
              _context5.next = 45;
              return this.conversationsCache.set(conversationId, conversation);
            case 45:
              return _context5.abrupt("return", returnData);
            case 46:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function sendMessage(_x7) {
        return _sendMessage.apply(this, arguments);
      }
      return sendMessage;
    }()
  }, {
    key: "buildPrompt",
    value: function () {
      var _buildPrompt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(messages, parentMessageId) {
        var _this2 = this;
        var isChatGptModel,
          orderedMessages,
          promptPrefix,
          currentDateString,
          promptSuffix,
          instructionsPayload,
          messagePayload,
          currentTokenCount,
          promptBody,
          maxTokenCount,
          buildPromptBody,
          prompt,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              isChatGptModel = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : false;
              orderedMessages = this.constructor.getMessagesForConversation(messages, parentMessageId);
              if (this.options.promptPrefix) {
                promptPrefix = this.options.promptPrefix.trim();
                // If the prompt prefix doesn't end with the end token, add it.
                if (!promptPrefix.endsWith("".concat(this.endToken))) {
                  promptPrefix = "".concat(promptPrefix.trim()).concat(this.endToken, "\n\n");
                }
                promptPrefix = "".concat(this.startToken, "Instructions:\n").concat(promptPrefix);
              } else {
                currentDateString = new Date().toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });
                promptPrefix = "".concat(this.startToken, "Instructions:\nYou are ChatGPT, a large language model trained by OpenAI. Respond conversationally.\nCurrent date: ").concat(currentDateString).concat(this.endToken, "\n\n");
              }
              promptSuffix = "".concat(this.startToken).concat(this.chatGptLabel, ":\n"); // Prompt ChatGPT to respond.
              instructionsPayload = {
                role: 'system',
                name: 'instructions',
                content: promptPrefix
              };
              messagePayload = {
                role: 'system',
                name: 'user',
                content: promptSuffix
              };
              if (isChatGptModel) {
                currentTokenCount = this.getTokenCountForMessage(instructionsPayload) + this.getTokenCountForMessage(messagePayload);
              } else {
                currentTokenCount = this.getTokenCount("".concat(promptPrefix).concat(promptSuffix));
              }
              promptBody = '';
              maxTokenCount = this.maxPromptTokens; // Iterate backwards through the messages, adding them to the prompt until we reach the max token count.
              // Do this within a recursive async function so that it doesn't block the event loop for too long.
              buildPromptBody = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                  var message, roleLabel, messageString, newPromptBody, tokenCountForMessage, newTokenCount;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(currentTokenCount < maxTokenCount && orderedMessages.length > 0)) {
                          _context6.next = 16;
                          break;
                        }
                        message = orderedMessages.pop();
                        roleLabel = message.role === 'User' ? _this2.userLabel : _this2.chatGptLabel;
                        messageString = "".concat(_this2.startToken).concat(roleLabel, ":\n").concat(message.message).concat(_this2.endToken, "\n");
                        if (promptBody || isChatGptModel) {
                          newPromptBody = "".concat(messageString).concat(promptBody);
                        } else {
                          // Always insert prompt prefix before the last user message, if not gpt-3.5-turbo.
                          // This makes the AI obey the prompt instructions better, which is important for custom instructions.
                          // After a bunch of testing, it doesn't seem to cause the AI any confusion, even if you ask it things
                          // like "what's the last thing I wrote?".
                          newPromptBody = "".concat(promptPrefix).concat(messageString).concat(promptBody);
                        }
                        tokenCountForMessage = _this2.getTokenCount(messageString);
                        newTokenCount = currentTokenCount + tokenCountForMessage;
                        if (!(newTokenCount > maxTokenCount)) {
                          _context6.next = 11;
                          break;
                        }
                        if (!promptBody) {
                          _context6.next = 10;
                          break;
                        }
                        return _context6.abrupt("return", false);
                      case 10:
                        throw new Error("Prompt is too long. Max token count is ".concat(maxTokenCount, ", but prompt is ").concat(newTokenCount, " tokens long."));
                      case 11:
                        promptBody = newPromptBody;
                        currentTokenCount = newTokenCount;
                        // wait for next tick to avoid blocking the event loop
                        _context6.next = 15;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, 0);
                        });
                      case 15:
                        return _context6.abrupt("return", buildPromptBody());
                      case 16:
                        return _context6.abrupt("return", true);
                      case 17:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function buildPromptBody() {
                  return _ref2.apply(this, arguments);
                };
              }();
              _context7.next = 12;
              return buildPromptBody();
            case 12:
              prompt = "".concat(promptBody).concat(promptSuffix);
              if (isChatGptModel) {
                messagePayload.content = prompt;
                // Add 2 tokens for metadata after all messages have been counted.
                currentTokenCount += 2;
              }

              // Use up to `this.maxContextTokens` tokens (prompt + response), but try to leave `this.maxTokens` tokens for the response.
              this.modelOptions.max_tokens = Math.min(this.maxContextTokens - currentTokenCount, this.maxResponseTokens);
              if (!isChatGptModel) {
                _context7.next = 17;
                break;
              }
              return _context7.abrupt("return", [instructionsPayload, messagePayload]);
            case 17:
              return _context7.abrupt("return", prompt);
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function buildPrompt(_x8, _x9) {
        return _buildPrompt.apply(this, arguments);
      }
      return buildPrompt;
    }()
  }, {
    key: "getTokenCount",
    value: function getTokenCount(text) {
      return this.gptEncoder.encode(text, 'all').length;
    }

    /**
     * Algorithm adapted from "6. Counting tokens for chat API calls" of
     * https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb
     *
     * An additional 2 tokens need to be added for metadata after all messages have been counted.
     *
     * @param {*} message
     */
  }, {
    key: "getTokenCountForMessage",
    value: function getTokenCountForMessage(message) {
      var _this3 = this;
      // Map each property of the message to the number of tokens it contains
      var propertyTokenCounts = Object.entries(message).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];
        // Count the number of tokens in the property value
        var numTokens = _this3.getTokenCount(value);

        // Subtract 1 token if the property key is 'name'
        var adjustment = key === 'name' ? 1 : 0;
        return numTokens - adjustment;
      });

      // Sum the number of tokens in all properties and add 4 for metadata
      return propertyTokenCounts.reduce(function (a, b) {
        return a + b;
      }, 4);
    }

    /**
     * Iterate through messages, building an array based on the parentMessageId.
     * Each message has an id and a parentMessageId. The parentMessageId is the id of the message that this message is a reply to.
     * @param messages
     * @param parentMessageId
     * @returns {*[]} An array containing the messages in the order they should be displayed, starting with the root message.
     */
  }], [{
    key: "getTokenizer",
    value: function getTokenizer(encoding) {
      var isModelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var extendSpecialTokens = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (tokenizersCache[encoding]) {
        return tokenizersCache[encoding];
      }
      var tokenizer;
      if (isModelName) {
        tokenizer = (0, _tiktoken.encoding_for_model)(encoding, extendSpecialTokens);
      } else {
        tokenizer = (0, _tiktoken.get_encoding)(encoding, extendSpecialTokens);
      }
      tokenizersCache[encoding] = tokenizer;
      return tokenizer;
    }
  }, {
    key: "getMessagesForConversation",
    value: function getMessagesForConversation(messages, parentMessageId) {
      var orderedMessages = [];
      var currentMessageId = parentMessageId;
      while (currentMessageId) {
        // eslint-disable-next-line no-loop-func
        var message = messages.find(function (m) {
          return m.id === currentMessageId;
        });
        if (!message) {
          break;
        }
        orderedMessages.unshift(message);
        currentMessageId = message.parentMessageId;
      }
      return orderedMessages;
    }
  }]);
  return ChatGPTClient;
}();
exports["default"] = ChatGPTClient;