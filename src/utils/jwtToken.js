import { dbConnect, model } from "./models";

const jwt = require("jsonwebtoken");

export async function generateAccessToken(userData, hasExpiredToken = false) {
  // if the user is logining up
  const newToken = jwt.sign(userData, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  if (!hasExpiredToken) return newToken;

  // if user has logined in but want to extend the expiration time
  // we will generate new token with new expiration time 
  // we will change the database by replacing access token with newAccessToken and putting the currentAccesToken into the blacklist
  const tokenExp = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET).exp;
  const username = userData.username;
  await dbConnect();
  const sessionTokenModel = await model("sessionToken");
  const currentSessionDataOfUser = await sessionTokenModel.find({ username });
  const currentBlacklist = await currentSessionDataOfUser.blackListedToken;
  const currentAccessToken = await currentSessionDataOfUser.accessToken;
  const result = await sessionTokenModel.updateOne(
    { username },
    {
      $set: {
        accessToken: { token: newToken, exp: tokenExp },
        blackListedToken: [...currentBlacklist, currentAccessToken],
      },
    }
  );
  console.log(result)
  return token;
}

export async function generateRefreshToken(userData) {
  // it simply generates the new refreshtoken and put it into the database with its schema
  const token = jwt.sign(
    { username: userData.username },
    process.env.JWT_REFRESH_TOKEN_SECRET
  );
  const accessToken = generateAccessToken(userData);
  await dbConnect();
  const sessionTokenModel = await model("sessionToken");
  const result = await sessionTokenModel.insertMany({
    username: userData.username,
    accessToken: { accessToken, exp: userData.exp },
    refreshToken: token,
    blackListedToken: [],
  });
  console.log(result);
  return token;
}

export async function deleteToken(userData){
  await dbConnect();
  const sessionTokenModel = await model("sessionToken");
  const result = sessionTokenModel.deleteMany({username: userData.username});
  return result;
}