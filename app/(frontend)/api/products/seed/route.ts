import { data } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/lib/models/userModel";
import ProductModel from "@/lib/models/productModel";
import dbConnect from "@/lib/dbConnect";

export const GET = async (request: NextRequest) => {
  const { users, products } = data;
  await dbConnect();
  await UserModel.deleteMany();
  await ProductModel.deleteMany();
  await UserModel.insertMany(users);
  await ProductModel.insertMany(products);
  return NextResponse.json({
    message: "Data seeded successfully",
    users,
    products,
  });
};
