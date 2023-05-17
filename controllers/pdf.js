const pdfTemplate = require("../documents");
const pdf = require("html-pdf");

exports.getOrderTemplate = (req, res, next) => {
  res.send(
    pdfTemplate({ name: "יהונתן", price1: 12, price2: 21, receiptId: 000 })
  );
};

exports.getFile = (req, res, next) => {
  res.sendFile(`${__dirname}/result.pdf`);
};

exports.postCreateFile = (req, res, next) => {
  pdf.create(pdfTemplate(req.body), {}).toFile(`${__dirname}/result.pdf`, (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
};
