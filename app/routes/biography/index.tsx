import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "../../utils/db.server";

export const loader: LoaderFunction = async () => {
  const biographies = await db.biography.findMany();

  return json({ biographies });
};

export default function Biography({}) {
  const { biographies } = useLoaderData();

  return (
    <div>
      {biographies.map((biography: any) => (
        <div key={biography.slug}>
          <Link to={`/biography/${biography.slug}`}>{biography.title}</Link>
        </div>
      ))}
    </div>
  );
}
