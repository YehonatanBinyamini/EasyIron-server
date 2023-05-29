const User = require("../models/User");

exports.postLoginDetails = (req, res, next) => {
  const { email, password } = req.body;

  // Perform your authentication logic here
  // For demonstration purposes, we'll just return the received credentials
  res.json({ email, password, server: "say hi" });
};

exports.postAddUser = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(409).json({ error: "כבר  קיים משתמש עם דואר אלקטרוני זה" });
      }
  
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
  
      await newUser.save();
      console.log("User created!");
  
      res.status(201).json({ message: "User created successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create user." });
    }
  };
  
