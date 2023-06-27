const User = require("../../models/User");
const hashpassword = require("../../utils/auth/hashpassword");
const creatToken = require("../../utils/auth/creatToken");

exports.signin = async (req, res) => {
  try {
    const token = creatToken(req.user);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.signup = async (req, res) => {
  try {
    const { password } = req.body;
    req.body.password = await hashpassword(password);
    const newUser = await User.create(req.body);
    const token = creatToken(newUser);
    res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("urls");
    res.status(201).json(users);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
