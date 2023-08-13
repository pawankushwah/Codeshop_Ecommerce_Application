import { dbConnect, model } from "@/src/utils/models";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    const { productId } = params;
    await dbConnect();
    let productModel = await model("products");
    let response = await productModel.find({_id: productId});
    return NextResponse.json(response);
  }