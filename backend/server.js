import express from 'express'
import products from './data/products.js'
import  dbFile from "./db.js";
import Pizza from "./models/pizzaModel.js";
import pizzasRoute from "./routes/pizzasRoute.js";
import dotenv from "dotenv";

import colors from "colors";

const app = express();

dotenv.config();


app.get('/', (req, res) => {
    res.send("API is Runnig....")
})

app.get('/api/products/', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p)=>p._id === req.params.id)
    res.json(product)
})
//pizzas route
app.use("/api/pizzas/", pizzasRoute);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
