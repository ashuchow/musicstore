  
const router = require('express').Router();
let Product = require('../Models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
  
      });
      newProduct.save()
      .then(() => res.json('Product added!!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;