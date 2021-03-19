const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
require('dotenv').config();

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

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

const productsRouter = require("./Routes/products");
app.use('/products', productsRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})
