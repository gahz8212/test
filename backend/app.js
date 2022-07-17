require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
const { sequelize } = require("./models");
const passportConfig = require("./passport");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const app = express();
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((e) => console.error(e));
passportConfig();
app.set("port", process.env.PORT || 4000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", authRouter);
app.use("/post", postRouter);
app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번 포트에서 서버 대기 중`);
});
