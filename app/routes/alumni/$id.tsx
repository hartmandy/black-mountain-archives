import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Props = {};
export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const todo = await res.json();
  return json({ todo });
};

export default function Alumni({}: Props) {
  const { todo } = useLoaderData();
  return <div>{todo.title}</div>;
}
