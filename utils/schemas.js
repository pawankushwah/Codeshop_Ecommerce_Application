const mongoose = require("mongoose");

const products = new mongoose.Schema({
    productName: String,
    shortDescription: String,
    description: String,
    category: String,
    filename: String,
    price: Number,
    sellPrice: Number
});

const users = new mongoose.Schema({
    name: String
})

const categories = new mongoose.Schema({
    category: String
})

module.exports = {products, users, categories}