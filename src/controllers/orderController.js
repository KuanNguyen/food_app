const { where } = require('sequelize');
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);

const createOrder = async (req, res) => {
    try {
        // lấy data từ FE
        let { user_id, food_id, amount,code,arr_sub_id } = req.body;

        // ES6 => object literal
        let modelO = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        }

        // thêm data vào CSDL
        let data = await model.order.create(modelO);
        if (data)
            res.status(200).send("Thêm order thành công");

    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}

module.exports = {
    createOrder
}
