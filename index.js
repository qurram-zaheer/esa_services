const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./controllers/products")(app);
require("./controllers/cart")(app);
require("./controllers/users")(app);

app.listen(3000, () =>
    console.log("Services handler active, listening on port 3000")
);
