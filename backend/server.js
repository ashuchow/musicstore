const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const passport = require("passport");
//const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});


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
    secret: "sorkar",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("sorkar"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/");
  }
);


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

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
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
      res.send("Welcome to Musik Kart!");
    }
  });
});


const productsRouter = require("./Routes/products");
app.use("/products", productsRouter);

const usersRouter = require("./Routes/users");
app.use("/users", usersRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


