const passport = require("possport");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
module.exports = () => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
          const result = bcrypt.compare(exUser.password, password);
          if (result) {
            done(null, exUser);
          } else {
            done(null, false, { message: "비밀번호 오류" });
          }
        } else {
          done(null, false, { message: "이메일 오류" });
        }
      }
    )
  );
};
