var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const session = require("express-session");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected Successful"))
  .catch((err) => console.log(err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var boardRouter = require("./routes/board");
var commentRouter = require("./routes/comment");
const birdRouter = require("./routes/birds");

var app = express();

// cors
// const port = 3002;
// app.listen(port, ()=>console.log(`listening on port ${port}!`))
// app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev")); // log 찍는 미들웨어
app.use(express.json()); // request body json parse 해줌
app.use(express.urlencoded({ extended: false })); // url parms parsing -> key-value 형태로 만들어줌
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "<my-secret>",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

// 모든 요청 url의 path를 session의 배열로 관리하도록 함
app.use((req, res, next) => {
  if (!req.session.paths) {
    req.session.paths = [];
  }
  req.session.paths.push(req.path);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

const { authenticate } = require("./utils/auth");
app.use(authenticate);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);
app.use("/comment", commentRouter);
app.use("/birds", birdRouter);

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
  // res.json(err);
});

module.exports = app;
