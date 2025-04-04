import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({ success: false, message: "User is not registred" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send({ success: false, message: "Invalid Crendentials" });
    }

    const token = createToken(user._id);
    res.send({ success: true, token, message: "logged in successfully" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error?.message });
  }
};
//route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check user's existance
    const exits = await userModel.findOne({ email });
    if (exits) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validate email and password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "password must be length of 8",
      });
    }

    //hash the password
    const salt = await genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //newUser
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    //save new User in model
    const user = await newUser.save();

    //token
    const token = createToken(user._id);

    return res.json({
      success: true,
      message: "User Created Successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message });
  }
};
//route for admin login
const adminLogin = async (req, res) => {
  try {
    const {email, password}= req.body
    if(email === process.env.EMAIL && password === process.env.PASSWORD){
      const token = jwt.sign(email+password , process.env.JWT_SECRET);
      res.send({success:true, token})
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message });
    
  }

};

export { loginUser, registerUser, adminLogin };
