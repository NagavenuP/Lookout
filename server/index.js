
var express = require("express");
var cors = require("cors");
var productController = require("./controllers/product.controller")

var app = express();
app.use(express.json());
app.use(cors())

app.get('/products', [productController.getProducts]);

app.listen(9876, ()=>{
    console.log("server running on 9876");
});

