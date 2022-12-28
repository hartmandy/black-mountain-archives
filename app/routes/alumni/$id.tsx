import { json } from "@remix-run/node";
import type { Person } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { ROLE, SUBJECT } from "~/utils/person.utils";
import { useNavigate } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const person = await db.person.findUnique({
    where: {
      id,
    },
  });
  return json({ person });
};

export default function Alumni() {
  const { person } = useLoaderData();
  const { name, role, subject }: Person = person;
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1 className="text-3xl">{name}</h1>
      <p>{ROLE[role]}</p>
      <p>{SUBJECT[subject]}</p>
    </div>
  );
}
