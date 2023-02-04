const express = require('express');
const rateRoute = express.Router();
const { getRate ,getRatebyUser , getRatebyRestaurant, createRate } = require('../controllers/rateController')

rateRoute.get("/getRate", getRate);
rateRoute.get("/getRateByUser", getRatebyUser);
rateRoute.get("/getRatebyRestaurant", getRatebyRestaurant);
rateRoute.post("/createRate", createRate)

module.exports = rateRoute