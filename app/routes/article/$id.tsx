import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "../../utils/db.server";
import { ClientOnly } from "remix-utils";
import EditorjsReact from "~/components/editor.client";

type Props = {};
export const loader: LoaderFunction = async ({ params }) => {
  const article = await db.article.findUnique({
    where: { slug: params.id },
    include: {
      author: true,
      tags: true,
    },
  });

  if (!article) return json({ article: null }, { status: 404 });

  return json({ article });
};
export default function Article({}: Props) {
  const { article } = useLoaderData();

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} />
    </div>
  );
}
