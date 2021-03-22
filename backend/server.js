
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

const User = require("./Models/user.model");
//const Product = require("./Models/product.model");
//const user = require("./Models/user.model");

//========================================= MONGODB CONNECT

mongoose.connect(
  "mongodb://ashuchow:cEPUkio243AbxbJr@cluster0-shard-00-00.qfido.gcp.mongodb.net:27017,cluster0-shard-00-01.qfido.gcp.mongodb.net:27017,cluster0-shard-00-02.qfido.gcp.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-bzzlt7-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Musik Mart database connected!");
  }
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  expressSession({
    secret: "mondal",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("mondal"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000/profile');
  });

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("User not found, please sign up!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Login successful, enjoy Musik Mart!");
        //console.log(req.user);
      });
    }
  })(req, res, next);
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("You are already a cherished member, please use Log in");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Enjoy your Musik Mart!");
    }
  });
});


const productsRouter = require("./Routes/products");
app.use("/products", productsRouter);

const usersRouter = require("./Routes/users");
app.use("/users", usersRouter);


app.get("/", (req, res) => {
  res.send("Why are you here!");
});


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});