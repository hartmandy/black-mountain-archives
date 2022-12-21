import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return <div className="flex flex-row">{children}</div>;
}
