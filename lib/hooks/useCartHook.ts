import { create } from "zustand";
import { round2 } from "../utils";
import { OrderItem } from "../models/orderModels";
import { persist } from "zustand/middleware";

type Cart = {
  items: OrderItem[];
  itemPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "cartStore",
  })
);

export const useCartService = () => {
  const { items, itemPrice, shippingPrice, taxPrice, totalPrice } = cartStore();

  return {
    items,
    itemPrice,
    totalPrice,
    shippingPrice,
    taxPrice,

    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);

      const updateCardItem = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];

      const { itemsPrice, totalPrice, taskPrice, shippingPrice } =
        calcPrice(updateCardItem);

      cartStore.setState({
        items: updateCardItem,
        itemPrice: +itemsPrice,
        totalPrice: +totalPrice,
        shippingPrice: +shippingPrice,
        taxPrice: +taskPrice,
      });
    },

    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);

      if (!exist) return;

      const updateCardItem =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x
            );

      const { itemsPrice, totalPrice, taskPrice, shippingPrice } =
        calcPrice(updateCardItem);

      cartStore.setState({
        items: updateCardItem,
        itemPrice: +itemsPrice,
        totalPrice: +totalPrice,
        shippingPrice: +shippingPrice,
        taxPrice: +taskPrice,
      });
    },
  };
};

const calcPrice = (items: OrderItem[]) => {
  const calcTotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const itemsPrice = round2(calcTotal);

  const shippingPrice = round2(+itemsPrice > 100 ? 0 : 100);
  const taskPrice = round2(Number(0.15 * +itemsPrice));
  const totalPrice = round2(
    Number(itemsPrice) + Number(shippingPrice) + Number(taskPrice)
  );

  return { itemsPrice, shippingPrice, taskPrice, totalPrice };
};
