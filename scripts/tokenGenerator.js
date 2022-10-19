const generatePartOfToken = () => Math.random().toString(36).substr(2);
const generateToken = () => {
  let token = "";
  for (let i = 0; i < 4; i++) token += generatePartOfToken();
  return token;
};

module.exports = generateToken;
