import { dbConnect, model } from "@/utils/models";

export default async function handler(req, res) {
    const { productId } = req.query
    await dbConnect();
    let productModel = await model("products");
    let response = await productModel.find({_id: productId});
    res.send(response);
  }