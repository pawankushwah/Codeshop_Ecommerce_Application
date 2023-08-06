import Header from "@/components/Header";
import Filter, { fetchData } from "@/components/Filter";
import Footer from "@/components/Footer";
import { dbConnect, model } from "@/utils/models";
import { useEffect, useState } from "react";

export default function Index({ category }) {
  const [categories, setCategories] = useState([]);

  function loadCategories() {
    // fetching categories
    fetchData('/api/categories', "", "POST").then(
      (data) => {
        setCategories(data);
      },
      (error) => {
        console.error("Problem in Fetching Categories", error);
      }
    );
  }

  useEffect(() => {
    loadCategories();
  }, [])

  return (
    <>
      <a id="top" />
      <Header />
      <Filter categories={categories} currentCategory={category} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = params.category;
  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  await dbConnect();
  let categoryModel = await model("categories");
  let paths = await categoryModel.find({});
  paths = paths.map((path) => {
    return {
      params: {
        category: path.category,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
