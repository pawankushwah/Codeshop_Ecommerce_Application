import { dbConnect, model } from "@/src/utils/models";
import { NextResponse } from "next/server";

export async function POST(req, {params}) {
  let {category} = params;
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
        return NextResponse.json({ status: 1, response: productResponse });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 0, error });
  }
}
