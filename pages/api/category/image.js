import { dbConnect, model } from "@/utils/models";
import mongoose from "mongoose";

export default async function handler(req, res) {
  try {
    mongoose.connection.readyState != 1 && (await dbConnect());
    await model("products");
    let response = await mongoose.models["products"].find({
      category: "image"
    });
    res.send({ status: 1, response });
  } catch (error) {
    console.log(error);
    res.send({ status: 0, error });
  }
  res.end();
}
