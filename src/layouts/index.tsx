import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import { LS } from "../utils/localstorage";

interface MyComponentProps {
  children: React.ReactNode | React.ReactNode[];
  session?: any;
}

const Layout: React.FC<MyComponentProps> = ({
  children,
  session,
}: MyComponentProps) => {
  const res = LS.getValue("my key");

  return (
    <div className="max-w-screen-md">
      <SessionProvider session={session}>
        <Header />
        {children}
      </SessionProvider>
    </div>
  );
};

export default Layout;
