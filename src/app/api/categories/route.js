import { dbConnect, model } from "@/src/utils/models";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await dbConnect();
    const categoriesModel = await model("categories");
    const response = await categoriesModel.find({});
    let categoriesArray = [];
    response.forEach((row) => {
      console.log(row);
      categoriesArray.push(row.category);
    });

    return NextResponse.json(categoriesArray);
  } catch (error) {
    console.log(error);
  }
}
