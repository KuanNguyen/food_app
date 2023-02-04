const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);

const getRate = async (req, res) => {
    try {
        let data = await model.rate_res.findAll(); // => list object => [{}]

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

const getRatebyUser = async (req, res) => {
    try {
        let data = await model.rate_res.findAll({
                 include:["user"]
        });

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

const getRatebyRestaurant = async (req, res) => {
    try {
        let data = await model.rate_res.findAll({
                 include:["re"]
        });

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

const createRate = async (req, res) => {
    try {

        // lấy data từ FE
        let { user_id, res_id, amount, date_rate } = req.body;

        // ES6 => object literal
        let modelz = {
            user_id,
            res_id,
            amount,
            date_rate
        }

        // thêm data vào CSDL
        let data = await model.rate_res.create(modelz);
        if (data)
            res.status(200).send("Thêm rate thành công");

    } catch (err) {
        res.status(500).send("Lỗi Back end");
        console.log(err)

    }
}




module.exports = {
    getRate,
    getRatebyUser,
    getRatebyRestaurant,
    createRate

 }