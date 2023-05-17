const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Perform your authentication logic here
  // For demonstration purposes, we'll just return the received credentials
  res.json({ email, password, server: "say hi" });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.get("/test", (req, res, next) => {
  res.send(
    pdfTemplate({ name: "yondod", price1: 12, price2: 21, receiptId: 000 })
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));