import React, { useEffect } from "react";
import Layout from "@/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { isIncognito } from "@/utils/detectIncognito";

export default function App({ Component, pageProps }: AppProps) {
  const [isAllowed, setIsAllowed] = React.useState(false);
  const [show, setShow] = React.useState(false);
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
    function preventRightClick(e: { preventDefault: () => void }) {
      e.preventDefault();
      setShow(!show);
    }
    document.addEventListener("contextmenu", preventRightClick);
    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  if (!isAllowed) {
    return <p>You cannot access this page in incognito mode</p>;
  }

  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <>
      {isAllowed && (
        <Layout>
          <Component {...pageProps} />
          {show && <p>You are not allowed.</p>}
        </Layout>
      )}
    </>
  );
}
