const express = require("express");
const pdfController = require("../controllers/pdf");
const router = express.Router();

router.get("/test", pdfController.getOrderTemplate);
router.get("/fetch-pdf", pdfController.getFile);


router.post("/create-pdf", pdfController.postCreateFile);
router.post("/new-order", pdfController.postNewOrder);
    
module.exports = router;
