import Header from "@/components/Header";
import Filter, { fetchData } from "@/components/Filter";
import Footer from "@/components/Footer";
import { dbConnect, model } from "@/utils/models";


export default function Index({category}) {

  return (
    <>
      <a id="top" />
      <Header />
      <Filter body="" path="/api/category/image" category={category} requestType="POST" />
      <Footer/>
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
    return ({
      params: {
        category: path.category
      }
    });
  })

  return {
    paths : paths,
    fallback: false,
  }
}
