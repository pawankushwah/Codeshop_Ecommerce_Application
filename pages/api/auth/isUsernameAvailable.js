import { dbConnect, model } from "@/utils/models";

export default async function handler(req, res) {
  if (req.method != "POST") res.status(404);
  let data = JSON.parse(req.body);
  console.log(data.username);

  await dbConnect();
  const usersModel = await model("users");
  let response = await usersModel.find({
    username: data.username,
  });
  let isUsernameAvailable = false;
  if (response.length > 0) isUsernameAvailable = true;
  res.send({isUsernameAvailable: isUsernameAvailable})
}
