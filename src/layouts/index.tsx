import React, { ReactNode } from "react";
import Header from "@/components/header";
import {LS} from "../utils/localstorage"

interface MyComponentProps {
  children: ReactNode;
}

function Layout({ children }: MyComponentProps) {

 const res=  LS.getValue("my key");
 console.log(res)
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
