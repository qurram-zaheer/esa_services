const axios = require("axios");

module.exports = app => {
    app.get("/rest/v1/products", (req, res) => {
        axios
            .get("http://localhost:5000/products")
            .then(api => res.json(api.data));
    });

    app.post("/rest/v1/products", (req, res) => {
        const {
            category,
            productName,
            productModel,
            price,
            availableQuantity
        } = req.body;
        axios
            .post(`http://localhost:5000/products`, {
                category,
                productName,
                productModel,
                price,
                availableQuantity
            })
            .then(serverResponse => res.json(serverResponse.data));
    });
};
