"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _ChatGPTClient = _interopRequireDefault(require("./chatgpt/ChatGPTClient"));
var _index = _interopRequireDefault(require("./routes/index"));
var _chat = _interopRequireDefault(require("./routes/gpt/chat"));
var _config = _interopRequireDefault(require("./routes/gpt/config"));
var _config2 = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/', _index["default"]);
app.use('/gpt/chat', _chat["default"]);
app.use('/gpt/config', _config["default"]);
global.gptClient = new _ChatGPTClient["default"](_config2.GPT_KEY);
var _default = app;
exports["default"] = _default;