import Header from "@/components/Header";
import Filter, { fetchData } from "@/components/Filter";
import Footer from "@/components/Footer";


export default function Index({category}) {

  return (
    <>
      <a id="top" />
      <Header />
      <Filter body="" path="api/product/image" category={category} requestType="POST" />
      <Footer/>
    </>
  );
}

export async function getStaticProps({ params }) {
  console.log(params)
  const category = params.category;
  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  let paths = await fetchData(`${process.env.NEXT_PUBLIC_FULL_ADDRESS}/api/categories`, "", "POST");
  // console.log(typeof(paths));
  paths = paths.map((path) => {
    return ({
      params: {
        category: path
      }
    });
  })

  return {
    paths : paths,
    fallback: false,
  }
}
