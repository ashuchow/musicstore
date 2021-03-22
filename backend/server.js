
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
//const nodemailer = require('nodemailer');


const app = express();
const PORT = 5000;

const User = require("./Models/user.model");
//const Product = require("./product");
//const user = require("./user");

//========================================= MONGODB CONNECT

mongoose.connect(
  "mongodb://ashuchow:cEPUkio243AbxbJr@cluster0-shard-00-00.qfido.gcp.mongodb.net:27017,cluster0-shard-00-01.qfido.gcp.mongodb.net:27017,cluster0-shard-00-02.qfido.gcp.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-bzzlt7-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Users Database (MongoDB) is now connected");
  }
);

//========================================= MIDDLEWARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // location of react frontend
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


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'fshn.customer.service@gmail.com',
//     pass: 'thisisFSHN123!@#'
//   }
// });

// const mailOptions = {
//   from: 'fshn.customer.service@gmail.com',
//   to: 'soham.de_ug22@ashoka.edu.in',
//   subject: 'Sending Email using Node.js',
//   text: 'You added something to cart. That was easy!'
// };


//========================================= ROUTES

app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/profile');
  });

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("User does not exist!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully logged in!");
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
    if (doc) res.send("User already exists, please login");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Welcome to FSHN!");
    }
  });
});

// =================== Add new product to DB ROUTE:


const productsRouter = require("./Routes/products");
app.use("/products", productsRouter);

const usersRouter = require("./Routes/users");
app.use("/users", usersRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

//========================================= SERVER STARTING

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});