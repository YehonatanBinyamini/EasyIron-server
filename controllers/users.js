const User = require("../models/User");
const { generateHashCode, isPasswordFit } = require("../util/hashFunctions");
const { tokenIsValid } = require("../util/validation");

exports.postLoginDetails = async (req, res, next) => {
  const { email, password } = req.body;
  let passwordIsFit = false;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      console.log(existingUser.hashCode);
      isPasswordFit(existingUser.hashCode, password)
        ? (passwordIsFit = true)
        : (passwordIsFit = false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to find user." });
  } finally {
    res.json({ passwordIsFit });
  }
  // Perform your authentication logic here
  // For demonstration purposes, we'll just return the received credentials
  //res.json({ passwordIsFit, message: "User logged in successfully." });
};

exports.postAddUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!tokenIsValid(password)) {
    return res.status(500).json({ error: "סיסמה לא תקינה" });
  }
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "כבר קיים משתמש עם דואר אלקטרוני זה" });
    }
    const hashCode = generateHashCode(password);

    const newUser = new User({
      name: name,
      email: email,
      hashCode: hashCode,
    });

    await newUser.save();
    console.log("User created!");

    return res
      .status(201)
      .json({ Login: true, message: "User created successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ Login: false, error: "Failed to create user." });
  }
};
