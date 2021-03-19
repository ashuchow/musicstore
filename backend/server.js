const express = require('express');
const cors = require ('cors');
const mongoose= require ('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;



app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Users Database (MongoDB) is now connected");
    }
  );

  const Product = require("./products");

  app.post("/addproduct", (req, res) => {
  
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
    });
    newProduct.save()
    .then(() => res.json('Product added!!'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});


app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})
