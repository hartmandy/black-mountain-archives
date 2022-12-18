import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "../../utils/db.server";

export const loader: LoaderFunction = async () => {
  const articles = await db.article.findMany();

  return json({ articles });
};

export default function Article({}) {
  const { articles } = useLoaderData();

  return (
    <div>
      {articles.map((article: any) => (
        <div key={article.slug}>
          <Link to={`/article/${article.slug}`}>{article.title}</Link>
        </div>
      ))}
    </div>
  );
}
