module.exports = (req, res, next) => {
  res.locals.token = req.headers.bearer;
  next();
};
