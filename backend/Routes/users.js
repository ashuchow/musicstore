const router = require('express').Router();
let User = require("../Models/user.model");
let Product = require("../Models/product.model");


router.route("/user").get((req, res) => {
  if(!req.user){
    res.send("You have not logged in yet, head to sign in")
  }
  if(req.user){
    res.send(req.user);
  }
  
  //console.log(req.user); // req.user stores the deserealized user that has been authenticated inside it
});


router.route("/update/number").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid user");
    if (doc) {
      doc.mobile = req.body.mobile;
      await doc.save();
      res.send("Contact updated!");
    }
  });
});


router.route("/update/address").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid user");
    if (doc) {
      doc.address = req.body.address;
      await doc.save();
      res.send("Address updated!");
    }
  });
});

router.route("/addtocart").post((req, res) => {
  //console.log("entered add to cart")
  if (!req.user) {
    res.send("You need to login, head to sign in");
  } 
  else {
    //console.log(req.user._id)
    Product.findOne({ _id: req.body.productId }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        if (doc.wought.includes(req.user._id)) {
          await res.send("This item is already in the wishlist");
        } else if (doc.bought.includes(req.user._id)) {
          res.send("This item has already been bought");
        } else if (req.user.cart.includes(req.body.productId)) {
          res.send("This item is already in your cart");
        } else {
          User.findOne({ username: req.user.username }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("Invalid user");
            if (doc) {
              doc.cart.push(req.body.productId);
              await doc.save();
              res.send("Instrument added to cart!");
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
    if (!doc) res.send("Invalid user");
    if (doc) {
      doc.cart.push(req.body.productId);
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Item shifted to cart");
    }
  });
  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid Product");
    if (doc) {
      doc.wought.pull(req.user._id);
      await doc.save();
      res.send("Item moved to cart");
    }
  });
});

router.route("/removefromcart").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid user");
    if (doc) {
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("Item deleted from cart");
    }
  });
});

router.route("/getcartitems").get((req, res) => {
  //const productId = req.params.id;
  if (!req.user) {
    res.send("Login to continue");
    console.log("Login to continue");
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
    res.send("Login before proceeding");
  } else {
    Product.findOne({ _id: req.body.productId }, async (err, doc) => {
      if (err) throw err;
      if (doc) {
        if (doc.wought.includes(req.user._id)) {
          await res.send("This item has already been added to the wishlist");
        } else if (doc.bought.includes(req.user._id)) {
          res.send("This item has already been bought");
        } else {
          User.findOne({ username: req.user.username }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("Invalid user");
            if (doc) {
              doc.wishlist.push(req.body.productId);
              await doc.save();
              res.send("Product added to wishlist");
            }
          });
          Product.findOne({ _id: req.body.productId }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("Invalid product");
            if (doc) {
              doc.wought.push(req.user._id);
              await doc.save();
              res.send("New woughter added!");
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
    if (!doc) res.send("Invalid user");
    if (doc) {
      doc.wishlist.push(req.body.productId);
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("Product moved to wishlist");
    }
  });
  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid Product");
    if (doc) {
      doc.wought.push(req.user._id);
      await doc.save();
      res.send("Product moved to wishlist!");
    }
  });
});

router.route("/removefromwishlist").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid User");
    if (doc) {
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Item deleted from wishlist");
    }
  });

  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid Product");
    if (doc) {
      doc.wought.pull(req.user._id);
      await doc.save();
      res.send("Woughter was removed");
    }
  });
});

router.route("/getwishlistitems").get((req, res) => {
  if (!req.user) {
    res.send("Log in to continue");
    console.log("Log in to continue");
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
    if (!doc) res.send("Invalid user");
    if (doc) {
      doc.orders.push(req.body.productId);
      doc.cart.pull(req.body.productId);
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Thank you for shopping with MuzikMart");
    }
  });
  Product.findOne({ _id: req.body.productId }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Invalid Product");
    if (doc) {
      doc.bought.push(req.user._id);
      await doc.save();
      res.send("Thank you for buying from MuzikMart");
    }
  });
});

router.route("/buyallproducts").post((req, res) => {
  User.findOne({ username: req.user.username }, async (err, user) => {
    if (err) throw err;
    if (!user) res.send("Invalid user");
    if (user) {
      let products = req.user.cart;
      for (var i = 0; i < products.length; i++) {
        user.orders.push(products[i]);
        user.cart.pull(products[i]);
        user.wishlist.pull(products[i]);

        Product.findOne({ _id: products[i] }, async (err, doc) => {
          if (err) throw err;
          if (!doc) res.send("Invalid product");
          if (doc) {
            doc.bought.push(req.user._id);
            await doc.save();
            res.send("Thank you for buying our product!");
          }
        });
      }

      await user.save();
      res.send("Products successfully bought!");
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
    res.send("Login to proceed");
  } else {
    Product.findOne({ _id: req.body.productId }, async (err, doc) => {
      if (err) throw err;
      if (!doc) res.send("Invalid Product");
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
          res.send("Thank you for your review!");
        } else {
          var newreview = {
            body: req.body.review,
            user: req.user.username,
            verified: "N",
          };
          doc.reviews.push(newreview);
          await doc.save();
          console.log(newreview);
          res.send("Thank you for your review");
        }
      }
    });
  }
});


module.exports = router;