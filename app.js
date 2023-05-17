const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdfRouter = require("./routes/pdf");
const usersRouter = require("./routes/users");
const ordersRouter = require("./routes/orders");
const mongooseConnect = require("./util/database").mongooseConnect;

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers:
app.use(pdfRouter);
app.use(usersRouter);
//app.use(ordersRouter);

mongooseConnect()
  .then((result) => {
    console.log("connected to MongoDB");
    app.listen(port);
  })
  .catch((err) => console.log(err));

app.use(errorController.get404);
//app.listen(port, () => console.log(`Listening on port ${port}`));
