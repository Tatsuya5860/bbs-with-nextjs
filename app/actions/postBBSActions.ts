"use server";
import { z } from "zod";
import { formSchema } from "../bbs-posts/create/page";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//setver actionを使える

export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  // const {username, title, content } = await req.json();

  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  revalidatePath("/"); //キャッシュが削除されて、更新される

  redirect("/");
};
