const express = require('express');
const likeRoute = express.Router();
const { getLike, getLikebyUser,getLikeUserId, getLikebyRestaurant, getLikebyUserID } = require('../controllers/likeController')

likeRoute.get("/getLike", getLike);
likeRoute.get("/getLikeByUser", getLikebyUser);
likeRoute.get("/getLikeByUserId/:id", getLikeUserId);
likeRoute.get("/getLikebyRestaurant", getLikebyRestaurant)

module.exports = likeRoute