"use client";

import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"
import ProductPage from "@/src/components/ProductPage";

export default function productPage({ params }) {
  return (
    <>
      <Header />
      <ProductPage productId={params.productId} />
      <Footer />
    </>
  );
}