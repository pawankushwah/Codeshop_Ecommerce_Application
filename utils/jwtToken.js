const jwt = require("jsonwebtoken");

export function generateAccessToken(userData) {
  return jwt.sign(userData, process.env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: '15s'});
}

export function generateRefreshToken(userData) {
  return jwt.sign(userData, process.env.JWT_REFRESH_TOKEN_SECRET);
}
