import { dbConnect, model } from "@/utils/models";

export default async function handler(req, res) {
  if (req.method != "POST") res.status(404).end("page not found");
  let data = JSON.parse(req.body);
  console.log(data);
  const errors = validateData(data);
  console.log(errors);
  if (Object.keys(errors).length !== 0) {
    console.log(errors);
    res.send(errors);
    return;
  }

  await dbConnect();
  const usersModel = await model("users");
  const response = await usersModel.find({
    username: data.username,
  });

  console.log(response.length)
  console.log(response)
  if (response.length === 1) {
    const isPasswordCorrect = checkPassword(response[0].password, data.password);
    isPasswordCorrect &&
      res.send({ login: 1, userId: response[0]._id, url: "/" });
    return;
  } else {
    res.send({login: 0, error: "Invalid username or password"});
    return;
  }
  res.send({msg: "something went wrong"})
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
