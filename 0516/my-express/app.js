var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sun:dltjsals84%23@cluster0.lmbrrnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected Successful"))
  .catch((err) => console.log(err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const boardRouter = require("./routes/board");
const birdRouter = require("./routes/birds");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/board", boardRouter); // Express App에 사용하겠다고 등록해준다!
app.use("/birds", birdRouter);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/", function (req, res) {
  res.send("Post request가 왔습니다.");
});


// app.use('/', indexRouter); // 기본 시작 url
// app.use('/users', usersRouter); // 기본 url / users

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
