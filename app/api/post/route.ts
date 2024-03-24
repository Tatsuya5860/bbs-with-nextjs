import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany(); //prisma.model名.findmanyは全てのモデル　実際にはページネーションを使って少しずつ返したり考える。findManyはあんまり使わないかも
  return NextResponse.json(allBBSPosts);
}
