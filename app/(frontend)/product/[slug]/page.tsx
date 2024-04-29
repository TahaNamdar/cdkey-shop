import { data } from "@/lib/data";
import AddToCart from "./addToCart";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((product) => product.slug === params.slug);

  if (!product)
    return <div className="bg-primary text-white">Product Not Found</div>;

  return (
    <div className="md:flex md:items-center p-10">
      <div className="w-full mb-8 md:mb-0 md:w-1/2">
        <img src={product.image} alt={product.name} className="rounded-lg " />
      </div>
      <div className="w-full md:w-1/2 md:p-10">
        <p className="text-white font-bold mb-2">{product.name}</p>
        <p className="text-white text-sm mb-2">
          {product.rating} of {product.numReviews} reviews
        </p>
        <p className="text-primary mb-2">{product.brand}</p>
        <p className="text-gray">{product.description}</p>
        <div className="divider"></div>

        <div className="bg-black p-4 rounded-lg text-center">
          <div className="flex justify-between text-white">
            <p>price</p>
            <p className="text-sm"> {product.price} $</p>
          </div>
          <div className="flex justify-between text-white">
            <p>Status</p>
            <p>{+product.countInStock > 0 ? "In Stock" : "Unavailable"}</p>
          </div>
          {+product.countInStock !== 0 && (
            <div>
              <AddToCart item={{ ...product, qty: 0, color: "", size: "" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
