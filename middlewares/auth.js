const Users = require("../schemas/User");
const usernameAvailabeCharacters = "abcdefghijklmnopqrstuvwxyz0123456789-";

class authMiddleware {
  usernameAndPasswordCheck(req, res, next) {
    const errors = [];
    if (!req.body.username) errors.push("username: the field must be filled");
    if (!req.body.password) errors.push("password: the field must be filled");
    if (errors.length) res.status(400).send(errors);
    else next();
  }
  async usernameCheck(req, res, next) {
    const errors = [];
    if (await Users.findOne({ username: req.body.username }).exec())
      errors.push("username: this username is already taken");
    for (let character of req.body.username) {
      if (!usernameAvailabeCharacters.includes(character)) {
        errors.push(
          "username: the username must consist only of " +
            'lowercase latin letters, numbers and a sign "-"'
        );
        break;
      }
    }
    if (errors.length) res.status(400).send(errors);
    else next();
  }
  passwordCheck(req, res, next) {
    const errors = [];
    if (req.body.password.length < 8)
      errors.push("password: must be at least 8 characters long");
    if (errors.length) res.status(400).send(errors);
    else next();
  }
}

module.exports = new authMiddleware();
