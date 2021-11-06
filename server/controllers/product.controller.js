
const data = require("../dummy/data.json")

const getProducts = (req, res) => {
    return res.status(200).send(data.items);
}

module.exports = { getProducts};