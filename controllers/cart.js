const axios = require("axios");

module.exports = app => {
    app.put("/rest/v1/users/:uname/cart", (req, res) => {
        let username = req.params.uname;
        let { productId } = req.body;
        axios
            .get(`http://localhost:5000/check/${username}`)
            .then(response => {
                axios
                    .get("http://localhost:5000/products")
                    .then(productList => {
                        let flag = 1;
                        productList.data.map(item => {
                            if (item.productId == productId) {
                                flag = 0;
                            }
                        });
                        if (flag == 1) {
                            res.send("Product does not exist");
                        }
                    })
                    .then(validated => {
                        axios
                            .put(`http://localhost:5000/${username}/cart`, {
                                productId
                            })
                            .then(cartResource => res.json(cartResource.data))
                            .catch(err => res.json(err));
                    });
            })
            .catch(err => res.json(err));
    });

    app.get("/rest/v1/users/:uname/cart", (req, res) => {
        let username = req.params.uname;
        axios
            .get(`http://localhost:5000/check/${username}`)
            .then(response => {
                axios
                    .get(`http://localhost:5000/${username}/cart`)
                    .then(cartData => res.json(cartData.data));
            })
            .catch(err => res.json(err));
    });
};
