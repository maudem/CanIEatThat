const User = require('mongoose').model('User');
const PassLocalStrategy = require('passport-local').Strategy;

module.exports = new PassLocalStrategy({
    usernameFiel: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        name: req.body.name.trim()

    };

    const newUser = new User(userData);
    newUser.save((err) => {
        if (err) { return done(err); }

        return done(null);
  });
});