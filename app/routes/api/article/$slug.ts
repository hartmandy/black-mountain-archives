import { Article, Prisma, PrismaClient } from "@prisma/client";
import { ActionArgs, json, redirect } from "@remix-run/node";
import { Params } from "@remix-run/react";
import { db } from "../../../utils/db.server";

export const action = async ({ request, params }: ActionArgs) => {
  const form = await request.formData();
  const { slug } = params;
  const rawBody = form.get("body");

  if (!rawBody) {
    throw json("Missing body", { status: 400 });
  }

  try {
    const contentObj = JSON.parse(rawBody as string);
    const contentJson = contentObj as Prisma.JsonObject;
    await db.article.update({
      where: { slug },
      data: { content: contentJson },
    });
  } catch (error) {
    throw json("Malformed JSON body: expected string body", { status: 400 });
  }

  return redirect(`/article/${slug}`);
};
