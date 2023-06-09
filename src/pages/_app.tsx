import type { AppProps } from 'next/app'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@/styles/style.css'
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    document.title = "BlogBoard";
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );

}