import ProductItem from "@/components/product/productItem";
import React from "react";
import { data } from "@/lib/data";
export default function Home() {
  return (
    <div>
      <h2 className="p-4">Latest Product</h2>
      <div>
        <div className="grid mx-auto gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.products.map((product, _) => {
            return <ProductItem key={product.slug} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
