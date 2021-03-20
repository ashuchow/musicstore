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
//const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// mongoose.connect(
//     uri,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     () => {
//       console.log("Users Database (MongoDB) is now connected");
//     }
//   );

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
    secret: "mondal",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("mondal"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "https://meet.google.com/wjo-qeyf-xmi" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("https://www.google.co.in/");
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
      res.send("Welcome to FSHN!");

      // const welcomeEmail = {
      //   from: 'fshn.customer.service@gmail.com',
      //   to: req.body.email,
      //   subject: 'Welcome to FSHN! ✨',
      //   html: `
      //   <body style="font-family: Arial, Helvetica, sans-serif">
      //   <center>
      //   <img src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602013956/3_rlqeb0.png" style="width: 100%;" >
      //   <h1 style="background-color: black; color: #edca0d;">Welcome to FSHN!</h1>
      //   <br>
      //   <b>Hello, ${req.body.username}!</b> We're so excited to have you on board! <br><br>
      //   <span style="color: #edca0d; font-weight: 600"> FSHN </span> (pronounced <i>fashion</i>) stands for <b>"Fashionable, Sustainable, Haute & Nouveau."</b>
      //   We strive to make quality design available to everyone in an affordable and sustainable way.<br><br>
      //   Based in New York, FSHN is an international fashion brand, offering the latest styles and inspiration for all — always.
      //   Customers will find everything from fashion pieces and unique designer collaborations to affordable wardrobe essentials, complete-the-look accessories, and motivational workout wear.
      //   All seasons, all styles, all welcome! But FSHN is more than just apparel.
      //   With price, quality and sustainability deeply rooted in its DNA, FSHN is not only a possibility for everyone to explore their personal style, but it also offers a chance to create a more sustainable fashion future.<br><br>
      //   <b>Be sure to look out for:</b><br>
      //   ⭐ Our monthly free giveaways! If you made a purchase with us of over $50 (USD) you directly qualify for that month's giveaway where we gift select random customers some of the hottest outfits of the season!<br>
      //   ⭐ Our half-yearly sales that take place every summer and winter. Get the best clothes at the best prices!<br>
      //   ⭐ Our exciting emails that glam up your inbox and might help inspire your next look.<br>
      //   <br><br>
      //   <img src="https://res.cloudinary.com/dfymeww45/image/upload/v1603122141/welcome.jpg" style="width: 100%">
      //   <h1><b>Experience <span style="color: #edca0d;">FSHN.</span></b></h1>
      // </body>`
      // };

      // transporter.sendMail(welcomeEmail, function(error, info){
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // });
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
