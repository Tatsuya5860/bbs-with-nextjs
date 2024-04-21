import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) // 引数のbbsIdは、apiのフォルダ名と合わせる
{
  const bbsId = params.bbsId;
  const BBSDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  }); //prisma.model名.findUniqueは一つのデータを取得
  return NextResponse.json(BBSDetailData);
}
