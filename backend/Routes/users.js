const router = require('express').Router();
let User = require("../Models/user.model");
let Product = require("../Models/product.model");

router.route("/add").post((req, res) => {
  const newUser = new User({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    imageurl: req.body.imageurl,
    price: req.body.price,
    rating: req.body.rating,
    color: req.body.color,
  });
  newUser
    .save()
    .then(() => res.json("User added!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/number").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.mobile = req.body.mobile;
      await doc.save();
      res.send("User mobile updated.");
    }
  });
});
router.route("/update/address").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.address = req.body.address;
      await doc.save();
      res.send("User address updated.");
    }
  });
});

router.route("/addtocart").post((req, res) => {

  if (!req.user) {
    res.send("Please login first!");
  } else {
    Product.findOne({ _id: req.body.productId }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        if (doc.wishers.includes(req.user._id)) {
          await res.send("Product already exists in your wishlist!");
        } else if (doc.buyers.includes(req.user._id)) {
          res.send("Product already purchased once!");
        } else if (req.user.cart.includes(req.body.productId)) {
          res.send("Product already exists in your cart!");
        } else {
          User.findOne({ username: req.user.username }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("User does not exist!");
            if (doc) {
              doc.cart.push(req.body.productId);
              await doc.save();
              res.send("Product successfully added to cart!");
            }
          });
        }
      }
    });
  }
});

router.route("/movetocart").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.cart.push(req.body.productId);
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Product moved from wishlist to cart");
    }
  });
  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.wishers.pull(req.user._id);
      await doc.save();
      res.send("Product moved to cart!");
    }
  });
});

router.route("/removefromcart").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("Product removed from cart.");
    }
  });
});

router.route("/getcartitems").get((req, res) => {
  //const productId = req.params.id;
  if (!req.user) {
    res.send("Please log in to proceed!");
    console.log("Please log in to proceed!");
  }
  if (req.user) {
    Product.find({ _id: { $in: req.user.cart } }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        await res.send(doc);
        console.log(doc);
      }
    });
  }
});

router.route("/addtowishlist").post((req, res) => {
  if (!req.user) {
    res.send("Please login first");
  } else {
    Product.findOne({ _id: req.body.productId }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        if (doc.wishers.includes(req.user._id)) {
          await res.send("Product already exists in your wishlist!");
        } else if (doc.buyers.includes(req.user._id)) {
          res.send("Product already purchased once!");
        } else {
          User.findOne({ username: req.user.username }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("User does not exist!");
            if (doc) {
              doc.wishlist.push(req.body.productId);
              await doc.save();
              res.send("Product added to wishlist");
            }
          });
          Product.findOne({ _id: req.body.productId }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("Product does not exist!");
            if (doc) {
              doc.wishers.push(req.user._id);
              await doc.save();
              res.send("New wishlist-er added!");
            }
          });
        }
      }
    });
  }
});

router.route("/movetowishlist").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.wishlist.push(req.body.productId);
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("Product moved to wishlist");
    }
  });
  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.wishers.push(req.user._id);
      await doc.save();
      res.send("New wishlist-er added!");
    }
  });
});

router.route("/removefromwishlist").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Product removed from wishlist.");
    }
  });

  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.wishers.pull(req.user._id);
      await doc.save();
      res.send("A wishlist-er was removed");
    }
  });
});

router.route("/getwishlistitems").get((req, res) => {
  if (!req.user) {
    res.send("Please log in to proceed!");
    console.log("Please log in to proceed!");
  }
  if (req.user) {
    Product.find({ _id: { $in: req.user.wishlist } }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        await res.send(doc);
        console.log(doc);
      }
    });
  }
});

router.route("/buyproduct").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.orders.push(req.body.productId);
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("New order made!");
    }
  });
  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.buyers.push(req.user._id);
      await doc.save();
      res.send("New buyer added!");
    }
  });
});

router.route("/buyallproducts").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, user) => {
    if (err) throw err;
    if (!user) res.send("User does not exist!");
    if (user) {
      let products = req.user.cart;
      for (var i = 0; i < products.length; i++) {
        user.orders.push(products[i]);
        user.cart.pull(products[i]);

        Product.findOne({ _id: products[i] }, async (err, doc) => {
          if (err) throw err;
          if (!doc) res.send("Product does not exist!");
          if (doc) {
            doc.buyers.push(req.user._id);
            await doc.save();
            res.send("New buyer added!");
          }
        });
      }

      await user.save();
      res.send("New orders made!");
    }
  });
});

router.route("/getorderitems").get((req, res) => {
  if (!req.user) res.send([]);
  if (req.user) {
    Product.find({ _id: { $in: req.user.orders } }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        await res.send(doc);
        console.log(doc);
      }
    });
  }
});

router.route("/addreview").post((req, res) => {
  if (!req.user) {
    res.send("Please login first!");
  } else {
    Product.findOne({ _id: req.body.productId }, async (err, doc) => {
      if (err) throw err;
      if (!doc) res.send("Product does not exist!");
      if (!req.user) res.send("Login to continue");
      if (doc && req.user) {
        if (req.user.orders.includes(req.body.productId)) {
          var newreview = {
            body: req.body.review,
            user: req.user.username,
            verified: "Y",
          };
          doc.reviews.push(newreview);
          await doc.save();
          console.log(newreview);
          res.send("New verified review added!");
        } else {
          var newreview = {
            body: req.body.review,
            user: req.user.username,
            verified: "N",
          };
          doc.reviews.push(newreview);
          await doc.save();
          console.log(newreview);
          res.send("New review added!");
        }
      }
    });
  }
});


module.exports = router;