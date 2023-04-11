import React, { useEffect } from "react";
import Layout from "@/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { isIncognito } from "@/utils/detectIncognito";

export default function App({ Component, pageProps }: AppProps) {
  const [isAllowed, setIsAllowed] = React.useState(false);
  // console.log(isAllowed);
  React.useEffect(() => {
    const checkIncognito = async () => {
      const incognito = await isIncognito();
      setIsAllowed(!incognito);
    };
    checkIncognito();
    // localStorage.setItem("f", 23434);
  }, []);

  useEffect(() => {
    function preventRightClick(e) {
      e.preventDefault();
    }
    document.addEventListener("contextmenu", preventRightClick);
    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  if (!isAllowed) {
    return <p>You cannot access this page in incognito mode</p>;
  }

  return (
    <>
      {isAllowed && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
