import ProductItem from "@/components/product/productItem";
import React from "react";
import { Metadata } from "next";
import productService from "@/lib/services/productService";

const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.DESC,
};

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();

  return (
    <div>
      <h2 className="p-4">Latest Product</h2>
      <div>
        {/* featured Products */}
        <div className="carousel w-full mb-20">
          {featuredProducts.map((product, index) => {
            return (
              <div
                id={`slide-${index}`}
                className="carousel-item relative w-full"
                key={index}
              >
                <img
                  src={product.banner}
                  className="h-96 w-full object-cover "
                  alt={product.name}
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide-${
                      index == 0 ? featuredProducts.length - 1 : index - 1
                    }`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide-${
                      index == featuredProducts.length - 1 ? 0 : index + 1
                    }`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* latest product */}
        <div className="grid mx-auto gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {latestProducts.map((product, _) => {
            return <ProductItem key={product.slug} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
