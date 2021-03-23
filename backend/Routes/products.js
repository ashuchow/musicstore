const router = require('express').Router();
let Product = require('../Models/product.model');


router.route('/allproducts').get((req, res) => {
  Product.find({}, async (err, doc) =>{
    if (err) throw err;
    if (doc){
      await res.send(doc);
    }
  });
});


router.route('/add').post((req, res) => {
  
    const newProduct = new Product({
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        imageurl: req.body.imageurl,
        price: req.body.price,
        rating: req.body.rating,
        color: req.body.color,
  
      });
      newProduct.save()
      .then(() => res.json('Product added!!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/:term').get((req, res) => {
  const searchterm = req.params.term;
  if (searchterm === ""){
    Product.find({}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
      }
    });
  }
  else{
    Product.find({$or: [{name : {$regex: searchterm, $options: 'i'}}, {category : {$regex: searchterm, $options: 'i'}}] }, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);

      }
    });
  }
  
});


router.route("/searchbydexterity/:dexterity").get((req, res) => {
  const dexterity = req.params.dexterity;

  if (dexterity==="All"){
    Product.find({}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
      }
    });

  }
  else{
    Product.find({dexterity: dexterity}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
      }
    });
  }
  
});

router.route("/searchbycolor/:color").get((req, res) => {
  const color = req.params.color;

  
  if (color==="All"){
    Product.find({}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
      }
    });

  }
  else{
    Product.find({color: color}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });
  }
  
});


router.route("/getproductbyid/:id").get((req, res) => {
  const productId = req.params.id;
  Product.find({_id : productId}, async (err, doc) =>{
    if (err) throw err;
    if (doc){
      await res.send(doc);
    }
  });
});

module.exports = router;