import { useEffect, useState } from "react";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "../../utils/db.server";
import { ClientOnly } from "remix-utils";
import Editor from "../../components/Editor/index.client";
type Props = {};

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const article = await db.article.findUnique({
    where: { slug },
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
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} />
      <ClientOnly>
        {() => {
          return (
            <Editor record={article} action={`/api/article/${article.slug}`} />
          );
        }}
      </ClientOnly>
    </div>
  );
}
