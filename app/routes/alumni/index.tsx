import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { db } from "~/utils/db.server";
const PER_PAGE = 100;

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || "1");
  const search = new URLSearchParams(url.search);
  const query = search.get("query") || "";

  if (!query) {
    return json({ page, people: [], count: 0, of: 0 });
  }

  const people = await db.person.findMany({
    skip: (page - 1) * PER_PAGE,
    take: PER_PAGE * page,
    orderBy: {
      name: "asc",
    },
    where: {
      name: {
        contains: query,
      },
    },
  });

  const of = await db.person.count();

  return json({ page, people, count: people.length, of });
};

export default function Alumni() {
  const { page, people, count, of } = useLoaderData();
  const [params] = useSearchParams();

  return (
    <div>
      {count > 0 && (
        <div className="flex gap-4 text-blue-500">
          {page - 1 > 0 ? (
            <Link to={`?page=${page - 1}`}>Prev</Link>
          ) : (
            <p className="gray-100">Prev</p>
          )}
          <Link to={`?page=${page + 1}`}>Next</Link>
        </div>
      )}
      <div className="grid h-screen place-content-center">
        <form action="">
          <input
            autoFocus
            placeholder="Search alumni"
            type="text"
            name="query"
            defaultValue={params.get("query") || ""}
            className="border-slate-200 border-2 p-2 w-64 rounded-lg"
          />
        </form>
      </div>
      {people.map((person: any) => (
        <div key={person.id}>
          <Link to={`/alumni/${person.id}`}>{person.name}</Link>
        </div>
      ))}
    </div>
  );
}
