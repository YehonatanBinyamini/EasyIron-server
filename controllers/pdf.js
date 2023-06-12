const pdfTemplate = require("../documents/index");
const pdf = require("html-pdf");
const imagesData = require("../documents/convertingImages");

exports.getOrderTemplate = (req, res, next) => {
  res.send(
    pdfTemplate({
      name: "יהונתן",
      totalPrice: 222,
      price1: 12,
      price2: 21,
      receiptId: 1,
      length: "A 12 <br> B 20",
      weight: 55,
      totalLength: 102,
      diameter: 26,
      Amount: 3,
      Limg: imagesData.LimageDataURI,
      logo: imagesData.logoImageDataURI,
    })
  );
};

exports.getFile = (req, res, next) => {
  res.sendFile(`${__dirname}/result.pdf`);
};

exports.postCreateFile = (req, res, next) => {
  const shapes = req.body;
  pdf
    .create(
      pdfTemplate({
        name: "יהונתן",
        totalPrice: 222,
        receiptId: 1,
        data: shapes,
        Limg: imagesData.LimageDataURI,
        logo: imagesData.logoImageDataURI,
      }),
      {}
    )
    .toFile(`${__dirname}/result.pdf`, (err) => {
      if (err) {
        res.send(Promise.reject());
      }

      res.send(Promise.resolve());
    });
};

exports.postNewOrder = async (req, res, next) => {
  const shapes = req.body;
  res.send(
    pdfTemplate({
      name: "יהונתן",
      totalPrice: 222,
      receiptId: 1,
      data: shapes,
      Limg: imagesData.LimageDataURI,
      logo: imagesData.logoImageDataURI,
    })
  );
};
