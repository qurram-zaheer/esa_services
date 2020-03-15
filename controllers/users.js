const axios = require("axios");

module.exports = app => {
    app.post("/rest/v1/register", async (req, res) => {
        const { username, password } = req.body;
        axios
            .post("http://localhost:5000/register", { username, password })
            .then(reply => reply.data)
            .then(reply => res.json(reply));
    });
};
