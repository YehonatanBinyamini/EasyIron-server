exports.postLoginDetails = (req, res, next) => {
    const { email, password } = req.body;
  
    // Perform your authentication logic here
    // For demonstration purposes, we'll just return the received credentials
    res.json({ email, password, server: "say hi" });
}