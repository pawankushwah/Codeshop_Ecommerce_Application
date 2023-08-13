import { generateAccessToken, generateRefreshToken } from "@/src/utils/jwtToken";
import { dbConnect, model } from "@/src/utils/models";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function POST(req) {
  // if (req.method != "POST") res.status(404).end("page not found");
  // let data = JSON.parse(req.body);
  // console.log(req.data);
  let data = await req.json();
  console.log(data);
  const errors = validateData(data);
  if (Object.keys(errors).length !== 0) {
    console.log(errors);
    return NextResponse.json(errors);
  }

  await dbConnect();
  const usersModel = await model("users");
  const response = await usersModel.find({
    username: data.username,
  });
  if(response.length != 1) return NextResponse.json({ login: 0, error: "Invalid username or password" });

  const isPasswordCorrect = checkPassword(response[0].password, data.password);
  if (response.length === 1 && isPasswordCorrect) {
    const jwtToken = await generateAccessToken({ username: response[0].username });
    const data = jwt.verify(jwtToken, process.env.JWT_ACCESS_TOKEN_SECRET);
    const jwtRefreshToken = await generateRefreshToken({
      username: response[0].username,
      exp: data.exp,
      iat: data.iat
    });
   return NextResponse.json({
      login: 1,
      token: jwtToken,
      refreshToken: jwtRefreshToken,
      userId: response[0]._id,
      url: "/dashboard/",
    },{
      status:200
    });
  }
 return NextResponse.json({ login: 0, error: "Incorrect username or password"});
}

function validateData(data) {
  const errors = {};
  const passwordRegex = /^(?=.*[@#$&*!])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  if (!data.username.trim()) {
    errors.username = "Username is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  } else if (!data.password.match(passwordRegex)) {
    errors.error = "Invalid username or password";
  }
  return errors;
}

function checkPassword(storedPassword, userPassword) {
  if (storedPassword === userPassword) return true;
  return false;
}