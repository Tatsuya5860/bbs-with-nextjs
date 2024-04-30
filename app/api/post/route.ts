import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany(); //prisma.model名.findmanyは全てのモデル　実際にはページネーションを使って少しずつ返したり考える。findManyはあんまり使わないかも
  return NextResponse.json(allBBSPosts);
}

export async function POST(req: Request) {
  const {username, title, content } = await req.json();

  const post = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  return NextResponse.json(post);
}