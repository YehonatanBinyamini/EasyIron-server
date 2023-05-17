const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdfRouter = require("./routes/pdf");
const usersRouter = require("./routes/users");
const ordersRouter = require("./routes/orders");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers:
app.use(pdfRouter);
app.use(usersRouter);
//app.use(ordersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
