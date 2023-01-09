import React from "react";
import DetailProducts from "@/components/product/DetailProducts";
import SlideProducts from "@/components/product/SlideProducts";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <SlideProducts />
      <DetailProducts />
    </main>
  );
};

export default MainProduct;
