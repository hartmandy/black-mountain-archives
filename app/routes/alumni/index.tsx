import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();
  return json({ todos: todos });
};

export default function Alumni({}) {
  const { todos } = useLoaderData();
  return (
    <div>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <Link to={`/alumni/${todo.id}`}>{todo.title}</Link>
        </div>
      ))}
    </div>
  );
}
