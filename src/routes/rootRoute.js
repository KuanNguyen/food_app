const express = require('express');
const rootRoute = express.Router();
const userRoute = require('./userRoute');

const foodRoute = require('./foodRoute');

const likeRoute = require("./likeRoute")
const rateRoute = require("./rateRoute")
const orderRoute = require("./orderRoute")

// sử dụng middleware của express
rootRoute.use("/user", userRoute)

// food
rootRoute.use("/food", foodRoute);

//like
rootRoute.use("/like", likeRoute)

//rate
rootRoute.use("/rate", rateRoute)

//order
rootRoute.use("/order", orderRoute)

module.exports = rootRoute;