"use client";
import Header from "@/src/components/Header";
import Filter, { fetchData } from "@/src/components/Filter";
import Footer from "@/src/components/Footer";
import { useEffect, useState } from "react";

export default function Index({params}) {
  return (
    <>
      <a id="top" />
      <Header />
      <Filter currentCategory={params.category} />
      <Footer />
    </>
  );
}
