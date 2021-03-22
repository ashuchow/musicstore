  
// This is where authentication strategies for passport js are confugured. 
// Supports local and Google authentication.

const User = require("./Models/user.model");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = function (passport) {

  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.use(new GoogleStrategy({
    clientID: "67757680435-ofvpq1e6v3doi6kb4ftu8e9bboh9ftd3.apps.googleusercontent.com",
    clientSecret: "H8h2W3s2LneoxrPCe0a22t_x",
    callbackURL: "http://localhost:5000/google/callback"
    //callbackURL: "http://localhost:3000/profile"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ googleId: profile.id }, async (err, user) => {
      if (user){
        return cb(err, user);
      }
      if (!user) {
        const newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
        });
        await newUser.save();
        return cb(err, user);;
      }
      
    });
  }
));

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        _id: user._id,
        username: user.username,
        mobile: user.mobile,
        address: user.address,
        orders: user.orders,
        cart: user.cart,
        wishlist: user.wishlist,
        email: user.email,
      };
      cb(err, userInformation);
    });
  });
};
