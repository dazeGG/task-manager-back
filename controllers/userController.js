// Schemas
const Groups = require("../schemas/Group");
const Tasks = require("../schemas/Task");
const Users = require("../schemas/User");

// Utils
const bcrypt = require("bcrypt");
const tokenGenerator = require("../scripts/tokenGenerator");

const generateUniqueToken = async () => {
  let token = tokenGenerator();
  while (await Users.findOne({ token }).exec()) token = tokenGenerator();
  return token;
};

class userController {
  async signUp(req, res) {
    try {
      const username = req.body.username;
      const password = await bcrypt.hash(req.body.password, 10);
      const token = await generateUniqueToken();
      await Users.create({ username, password, token });
      res.status(201).json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  async signIn(req, res) {
    const user = await Users.findOne({ username: req.body.username });
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const token = await generateUniqueToken();
        user.token = token;
        await user.save();
        res.status(200).json({ token });
      } else {
        res.status(403).send("Invalid password");
      }
    } else {
      res.status(404).send("User with this username does not exist");
    }
  }
  async tokenRefresh(req, res) {
    const user = await Users.findOne({ token: res.locals.token }).exec();
    if (user) {
      const token = await generateUniqueToken();
      user.token = token;
      await user.save();
      res.status(200).json({ token });
    } else {
      res.status(404).send("User with this token not found");
    }
  }
  async getTasks(req, res) {
    const user = await Users.findOne({ token: res.locals.token }).exec();
    console.log(user);
  }
}

module.exports = new userController();
