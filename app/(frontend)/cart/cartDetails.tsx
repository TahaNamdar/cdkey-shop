"use client";

import { useCartService } from "@/lib/hooks/useCartHook";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function CartDetails() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  const { items, increase, decrease, itemPrice } = useCartService();

  if (!mounted) return;

  return (
    <div className="p-6">
      {items.length === 0 ? (
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Cart Is Empty</span>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16 ">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="text-white">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <button
                            className="btn text-white"
                            onClick={() => decrease(item)}
                          >
                            -
                          </button>
                          <span className="px-4">{item.qty}</span>
                          <button
                            className="btn text-white"
                            onClick={() => increase(item)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-white">${item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="divider">
              Total ({items.reduce((acc, item) => acc + item.qty, 0)}) :
              <span className="text-lg">${itemPrice}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
