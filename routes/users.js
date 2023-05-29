const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.post("/login", usersController.postLoginDetails);
router.post("/newUser", usersController.postAddUser);

module.exports = router;
