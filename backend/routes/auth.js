const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
router.get("/", async (req, res) => {
  return res.send("auth");
});
router.post("/join", async (req, res) => {
  const { email, password, nick } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.status(409).json("중복된 이메일 입니다.");
    }
    const hash = bcrypt.hash(password, 12);
    await User.create({ email, password: hash, nick });
    return res.status(200).json("회원가입 성공");
  } catch (e) {
    console.error(e);
    return res.status(400).json({ e });
  }
});
router.post("/login", (req, res) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      return res.status(400).json(authError);
    }
    if (!user) {
      return res.status(400).json(info.message);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        return res.status(400).json(loginError);
      }
      return res.status(200).json("로그인 성공");
    });
  })(req, res);
});
router.get("/logout", (req, res) => {
  req.logout((e) => {
    if (e) return;
    req.session.destroy();
    return res.send("logout");
  });
});
router.get("/check", (req, res) => {
  try {
    const { id, nick } = req.user;
    return res.status(200).json({ id, nick });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});
module.exports = router;
