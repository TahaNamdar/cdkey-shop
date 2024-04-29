"use client";

import React, { useState, useEffect } from "react";
import { OrderItem } from "@/lib/models/orderModels";
import { useRouter } from "next/navigation";
import { useCartService } from "@/lib/hooks/useCartHook";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();

  const { items, increase, decrease } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [items, item]);

  const addToCartHandler = () => {
    increase(item);
  };

  return existItem ? (
    <div className="mt-4">
      <button className="btn text-white" onClick={() => decrease(existItem)}>
        -
      </button>
      <span className="px-4 text-white">{existItem.qty}</span>
      <button className="btn text-white" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary w-full mt-4"
      type="button"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  );
}
