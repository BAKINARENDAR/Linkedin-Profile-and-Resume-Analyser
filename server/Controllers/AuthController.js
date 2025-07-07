const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists, please login.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "Signup successful", success: true });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const User = await UserModel.findOne({ email });
    if (!User) {
      return res.status(403).json({
        message: " Auth Failed Email or password is wrong.",
        success: false,
      });
    }

   const IsPassEqual=await bcrypt.compare(password,User.password);
   if(!IsPassEqual)
   {
     return res.status(403).json({
        message: " Auth Failed Email or password is wrong.",
        success: false,
      });
   }

   const jwtToken=jwt.sign(
    {email:User.email,_id:User._id},
    process.env.JWT_SECRET,
    {expiresIn:'24h'}
   )

    res.status(200).json({ message: "Login successful", success: true,jwtToken,email,name:User.name });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

module.exports = { signup,login };
