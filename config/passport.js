const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../src/models');

passport.use(new LocalStrategy(async (email, password, done) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  const passwordCheck = bcrypt.compareSync(password, user.password);

  if (!passwordCheck) {
    return {
      success: false,
      message: 'Wrong password.',
    };
  }

  return done(null, user);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;
