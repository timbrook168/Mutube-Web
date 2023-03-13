"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _uuidv = require("uuidv4");
var _keyv = _interopRequireDefault(require("keyv"));
var _gpt3Encoder = require("gpt-3-encoder");
var _fetchEventSource = require("@waylaidwanderer/fetch-event-source");
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var CHATGPT_MODEL = 'text-davinci-003';
var ChatGPTClientV1 = /*#__PURE__*/function () {
  function ChatGPTClientV1(apiKey) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cacheOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, ChatGPTClientV1);
    this.apiKey = apiKey;
    this.options = options;
    var modelOptions = options.modelOptions || {};
    this.modelOptions = _objectSpread(_objectSpread({}, modelOptions), {}, {
      // set some good defaults (check for undefined in some cases because they may be 0)
      model: modelOptions.model || CHATGPT_MODEL,
      temperature: typeof modelOptions.temperature === 'undefined' ? 0.8 : modelOptions.temperature,
      top_p: typeof modelOptions.top_p === 'undefined' ? 1 : modelOptions.top_p,
      presence_penalty: typeof modelOptions.presence_penalty === 'undefined' ? 1 : modelOptions.presence_penalty,
      stop: modelOptions.stop
    });
    this.userLabel = this.options.userLabel || 'User';
    this.chatGptLabel = this.options.chatGptLabel || 'ChatGPT';
    var isChatGptModel = this.modelOptions.model.startsWith('text-chat') || this.modelOptions.model.startsWith('text-davinci-002-render');
    if (isChatGptModel) {
      this.endToken = '<|im_end|>';
      this.separatorToken = '<|im_sep|>';
    } else {
      this.endToken = '<|endoftext|>';
      this.separatorToken = this.endToken;
    }
    if (!this.modelOptions.stop) {
      if (isChatGptModel) {
        this.modelOptions.stop = [this.endToken, this.separatorToken];
      } else {
        this.modelOptions.stop = [this.endToken];
      }
      this.modelOptions.stop.push("\n".concat(this.userLabel, ":"));
      // I chose not to do one for `chatGptLabel` because I've never seen it happen
    }

    cacheOptions.namespace = cacheOptions.namespace || 'chatgpt';
    this.conversationsCache = new _keyv["default"](cacheOptions);
  }
  _createClass(ChatGPTClientV1, [{
    key: "getCompletion",
    value: function () {
      var _getCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(prompt, onProgress) {
        var modelOptions, debug, url, opts, response, body, error;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              modelOptions = _objectSpread({}, this.modelOptions);
              if (typeof onProgress === 'function') {
                modelOptions.stream = true;
              }
              modelOptions.prompt = prompt;
              debug = this.options.debug;
              url = this.options.reverseProxyUrl || 'https://api.openai.com/v1/completions';
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
                bodyTimeout: 0,
                headersTimeout: 0
              };
              if (!modelOptions.stream) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
                  var controller, done;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        controller = new AbortController();
                        _context2.prev = 1;
                        done = false;
                        _context2.next = 5;
                        return (0, _fetchEventSource.fetchEventSource)(url, _objectSpread(_objectSpread({}, opts), {}, {
                          signal: controller.signal,
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
                              controller.abort();
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
                            if (!message.data) {
                              return;
                            }
                            if (message.data === '[DONE]') {
                              onProgress('[DONE]');
                              controller.abort();
                              resolve();
                              done = true;
                              return;
                            }
                            onProgress(JSON.parse(message.data));
                          }
                        }));
                      case 5:
                        _context2.next = 10;
                        break;
                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2["catch"](1);
                        reject(_context2.t0);
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[1, 7]]);
                }));
                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 9:
              _context3.next = 11;
              return (0, _nodeFetch["default"])(url, opts);
            case 11:
              response = _context3.sent;
              if (!(response.status !== 200)) {
                _context3.next = 20;
                break;
              }
              _context3.next = 15;
              return response.text();
            case 15:
              body = _context3.sent;
              error = new Error("Failed to send message. HTTP ".concat(response.status, " - ").concat(body));
              error.status = response.status;
              try {
                error.json = JSON.parse(body);
              } catch (_unused2) {
                error.body = body;
              }
              throw error;
            case 20:
              return _context3.abrupt("return", response.json());
            case 21:
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
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(message) {
        var _this = this;
        var opts,
          conversationId,
          parentMessageId,
          conversation,
          userMessage,
          prompt,
          reply,
          result,
          replyMessage,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              opts = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              conversationId = opts.conversationId || (0, _uuidv.uuid)();
              parentMessageId = opts.parentMessageId || (0, _uuidv.uuid)();
              _context4.next = 5;
              return this.conversationsCache.get(conversationId);
            case 5:
              conversation = _context4.sent;
              if (!conversation) {
                conversation = {
                  messages: [],
                  createdAt: Date.now()
                };
              }
              userMessage = {
                id: (0, _uuidv.uuid)(),
                parentMessageId: parentMessageId,
                role: 'User',
                message: message
              };
              conversation.messages.push(userMessage);
              _context4.next = 11;
              return this.buildPrompt(conversation.messages, userMessage.id);
            case 11:
              prompt = _context4.sent;
              reply = '';
              if (!(typeof opts.onProgress === 'function')) {
                _context4.next = 18;
                break;
              }
              _context4.next = 16;
              return this.getCompletion(prompt, function (message) {
                if (message === '[DONE]') {
                  return;
                }
                var token = message.choices[0].text;
                if (_this.options.debug) {
                  console.debug(token);
                }
                if (token === _this.endToken) {
                  return;
                }
                opts.onProgress(token);
                reply += token;
              });
            case 16:
              _context4.next = 23;
              break;
            case 18:
              _context4.next = 20;
              return this.getCompletion(prompt, null);
            case 20:
              result = _context4.sent;
              if (this.options.debug) {
                console.debug(JSON.stringify(result));
              }
              reply = result.choices[0].text.replace(this.endToken, '');
            case 23:
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
              _context4.next = 29;
              return this.conversationsCache.set(conversationId, conversation);
            case 29:
              return _context4.abrupt("return", {
                response: replyMessage.message,
                conversationId: conversationId,
                messageId: replyMessage.id
              });
            case 30:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function sendMessage(_x5) {
        return _sendMessage.apply(this, arguments);
      }
      return sendMessage;
    }()
  }, {
    key: "buildPrompt",
    value: function () {
      var _buildPrompt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(messages, parentMessageId) {
        var orderedMessages, promptPrefix, currentDateString, promptSuffix, currentTokenCount, promptBody, maxTokenCount, message, roleLabel, messageString, newPromptBody, newTokenCount, prompt, numTokens;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              orderedMessages = this.constructor.getMessagesForConversation(messages, parentMessageId);
              if (this.options.promptPrefix) {
                promptPrefix = this.options.promptPrefix.trim();
                // If the prompt prefix doesn't end with the separator token, add it.
                if (!promptPrefix.endsWith("".concat(this.separatorToken, "\n\n"))) {
                  promptPrefix = "".concat(promptPrefix.trim()).concat(this.separatorToken, "\n\n");
                }
                promptPrefix = "\n".concat(this.separatorToken, "Instructions:\n").concat(promptPrefix);
              } else {
                currentDateString = new Date().toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });
                promptPrefix = "\n".concat(this.separatorToken, "Instructions:\nYou are ChatGPT, a large language model trained by OpenAI.\nCurrent date: ").concat(currentDateString).concat(this.separatorToken, "\n\n");
              }
              promptSuffix = "".concat(this.chatGptLabel, ":\n"); // Prompt ChatGPT to respond.
              currentTokenCount = this.getTokenCount("".concat(promptPrefix).concat(promptSuffix));
              promptBody = ''; // I decided to limit conversations to 3097 tokens, leaving 1000 tokens for the response.
              maxTokenCount = 3097; // Iterate backwards through the messages, adding them to the prompt until we reach the max token count.
            case 6:
              if (!(currentTokenCount < maxTokenCount && orderedMessages.length > 0)) {
                _context5.next = 19;
                break;
              }
              message = orderedMessages.pop();
              roleLabel = message.role === 'User' ? this.userLabel : this.chatGptLabel;
              messageString = "".concat(roleLabel, ":\n").concat(message.message).concat(this.endToken, "\n");
              newPromptBody = void 0;
              if (promptBody) {
                newPromptBody = "".concat(messageString).concat(promptBody);
              } else {
                // Always insert prompt prefix before the last user message.
                // This makes the AI obey the prompt instructions better, which is important for custom instructions.
                // After a bunch of testing, it doesn't seem to cause the AI any confusion, even if you ask it things
                // like "what's the last thing I wrote?".
                newPromptBody = "".concat(promptPrefix).concat(messageString).concat(promptBody);
              }

              // The reason I don't simply get the token count of the messageString and add it to currentTokenCount is because
              // joined words may combine into a single token. Actually, that isn't really applicable here, but I can't
              // resist doing it the "proper" way.
              newTokenCount = this.getTokenCount("".concat(promptPrefix).concat(newPromptBody).concat(promptSuffix)); // Always add the first (technically last) message, even if it puts us over the token limit.
              // TODO: throw an error if the first message is over 3000 tokens
              if (!(promptBody && newTokenCount > maxTokenCount)) {
                _context5.next = 15;
                break;
              }
              return _context5.abrupt("break", 19);
            case 15:
              promptBody = newPromptBody;
              currentTokenCount = newTokenCount;
              _context5.next = 6;
              break;
            case 19:
              prompt = "".concat(promptBody).concat(promptSuffix);
              numTokens = this.getTokenCount(prompt); // Use up to 4097 tokens (prompt + response), but try to leave 1000 tokens for the response.
              this.modelOptions.max_tokens = Math.min(4097 - numTokens, 1000);
              return _context5.abrupt("return", prompt);
            case 23:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function buildPrompt(_x6, _x7) {
        return _buildPrompt.apply(this, arguments);
      }
      return buildPrompt;
    }()
  }, {
    key: "getTokenCount",
    value: function getTokenCount(text) {
      if (this.modelOptions.model === CHATGPT_MODEL) {
        // With this model, "<|im_end|>" and "<|im_sep|>" is 1 token, but tokenizers aren't aware of it yet.
        // Replace it with "<|endoftext|>" (which it does know about) so that the tokenizer can count it as 1 token.
        text = text.replace(/<\|im_end\|>/g, '<|endoftext|>');
        text = text.replace(/<\|im_sep\|>/g, '<|endoftext|>');
      }
      return (0, _gpt3Encoder.encode)(text).length;
    }

    /**
     * Iterate through messages, building an array based on the parentMessageId.
     * Each message has an id and a parentMessageId. The parentMessageId is the id of the message that this message is a reply to.
     * @param messages
     * @param parentMessageId
     * @returns {*[]} An array containing the messages in the order they should be displayed, starting with the root message.
     */
  }], [{
    key: "getMessagesForConversation",
    value: function getMessagesForConversation(messages, parentMessageId) {
      var orderedMessages = [];
      var currentMessageId = parentMessageId;
      while (currentMessageId) {
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
  return ChatGPTClientV1;
}();
exports["default"] = ChatGPTClientV1;