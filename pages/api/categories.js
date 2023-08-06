import { dbConnect, model } from "@/utils/models";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const categoriesModel = await model("categories");
    const response = await categoriesModel.find({});
    let categoriesArray = [];
    response.forEach((row) => {
      console.log(row);
      categoriesArray.push(row.category);
    });

    res.send(categoriesArray);
  } catch (error) {
    console.log(error);
  }
}
