var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// Vue의 라우터와 연결하기 위한 모듈
const conntectHistory = require("connect-history-api-fallback");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// 작성한 라우터를 app.js에 가져옴
const memoRouter = require("./routes/memo");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// connect-history-api-fallback 모듈 사용
app.use(conntectHistory());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// 라우터의 위치와 이름을 연결
app.use("/api/memo", memoRouter);

module.exports = app;
