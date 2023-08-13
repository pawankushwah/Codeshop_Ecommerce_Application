export const mongoose = require("mongoose");

export const products = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
},
  sell_price: {
    type: Number,
    required: true
},
});

export const users = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: function () {
      return this.mobile ? false : true;
    },
  },
  mobile: {
    type: Number,
    required: function () {
      return this.email ? false : true;
    },
  },
  password: {
    type: String,
    required: true,
  },
});

export const categories = new mongoose.Schema({
  category: String,
});

export const sessionToken = new mongoose.Schema({
  accessToken: {
    type: Array,
    required: [true, "Token is required"],
    unique:true
  },
  refreshToken: {
    type: String,
    required: [true, "Refresh Token is required"],
    unique:true
  },
  blackListedToken: {
    type: Array,
    required: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"]
  }
});