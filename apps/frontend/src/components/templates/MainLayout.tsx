import type { ReactNode } from "react";
import { Header } from "../organisms/Header";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
