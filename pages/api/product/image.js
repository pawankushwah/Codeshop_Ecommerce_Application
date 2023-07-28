import { dbConnect, model } from "@/utils/models";
import mongoose, { get } from "mongoose";

export default async function handler(req, res) {
  try {
    if (mongoose.connection.readyState != 1) {
      await dbConnect();
    }
    if (mongoose.connection.readyState == 2) console.log("Connecting to the database");

    async function getData(){
      await model("products");
      let response = await mongoose.models.products.find({
        category: "image",
      });
      res.send({ status: 1, response });
    }
    await getData();
    
  } catch (error) {
    console.log(error);
    res.send({ status: 0, error });
  }
  res.end();
}
