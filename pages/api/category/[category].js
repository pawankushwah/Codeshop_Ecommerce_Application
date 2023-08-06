import { dbConnect, model } from "@/utils/models";

export default async function handler(req, res) {
  let { category } = req.query;
  category = category.toLowerCase()
  let isCategoryAvailable = false;

  try{
    await dbConnect();
    const categoriesModel = await model("categories");
    const response = await categoriesModel.find({category: category});
    if(response.length === 1) isCategoryAvailable = true;

    if(isCategoryAvailable){
        const productModel = await model("products");
        let productResponse = await productModel.find({
            category: category,
        });
        res.send({ status: 1, response: productResponse });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, error });
  }
}
