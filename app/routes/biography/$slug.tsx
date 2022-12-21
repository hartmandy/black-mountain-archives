import React from "react";
import { ClientOnly } from "remix-utils";
import Editor from "~/components/editor/index.client";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";

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

export default function Biography({}: Props) {
  const { biography } = useLoaderData();

  return (
    <div>
      <h1>{biography.title}</h1>
      <img src={biography.imageUrl} />
      <ClientOnly>
        {() => {
          return (
            <Editor
              record={biography}
              action={`/api/biography/${biography.slug}`}
            />
          );
        }}
      </ClientOnly>
    </div>
  );
}
