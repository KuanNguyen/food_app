const { where } = require('sequelize');
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);


const getLike = async (req, res) => {
    try {
        let data = await model.like_res.findAll(); // => list object => [{}]

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}


const getLikebyUser = async (req, res) => {
    try {
        let data = await model.like_res.findAll({
                 include:["user"]
        });

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

const getLikeUserId = async (req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await model.like_res.findOne({
            where: {
                user_id: id
                
            }
        }); // => object => {}

        if (dataOne)
            res.status(200).send(dataOne);
        else
            res.status(400).send("User không tồn tại !");

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}



const getLikebyRestaurant = async (req, res) => {
    try {
        let data = await model.like_res.findAll({
                 include:["re"]
        });

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

module.exports = {
   getLike,
   getLikebyUser,
   getLikeUserId,
   getLikebyRestaurant
}