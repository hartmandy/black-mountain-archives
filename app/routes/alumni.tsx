import React from "react";
import { Outlet } from "@remix-run/react";
type Props = {};

export default function Alumni({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}
