import { Product } from "@/lib/models/productModel";
import Link from "next/link";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card w-full glass">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{product.price}</button>
        </div>
      </div>
    </div>
  );
}
