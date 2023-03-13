import React, { ReactNode } from "react";
import Header from "@/components/header";

interface MyComponentProps {
  children: ReactNode;
}

function Layout({ children }: MyComponentProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
