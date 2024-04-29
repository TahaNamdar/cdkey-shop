"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCartService } from "@/lib/hooks/useCartHook";

export default function Header() {
  const { items } = useCartService();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="bg-base-300 flex justify-between p-2">
      <Link href="/" className="btn btn-ghost text-lg">
        CDKey <span className="text-primary text-2xl">Shop</span>
      </Link>
      <ul className="flex">
        <li>
          <Link href="/cart" className="btn btn-ghost">
            Cart
            {mounted && items.length !== 0 && (
              <div className="badge badge-primary">{totalQty}</div>
            )}
          </Link>
        </li>
        <li>
          <Link href="/" className="btn btn-ghost">
            SignIn
          </Link>
        </li>
      </ul>
    </div>
  );
}
