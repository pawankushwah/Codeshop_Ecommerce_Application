import React from "react";
import { dbConnect, model } from "@/utils/models";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import mongoose from "mongoose";
import ProductPage from "@/components/ProductPage";

export default function productPage({ productId }) {
  console.log(productId);
  return (
    <>
      <Header />
      <ProductPage productId={productId} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const productId = params.productId;
  return {
    props: {
      productId,
    },
  };
}

export async function getStaticPaths() {
  await dbConnect();
  await model("products");
  let paths = await mongoose.models["products"].find({});
  paths = paths.map((path) => {
    // console.log(path);
    return {
      params: {
        productId: path._id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
