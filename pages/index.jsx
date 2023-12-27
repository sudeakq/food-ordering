import Head from "next/head";
import Home from "./home";
import Header from "@/components/layout/header";
import Carousel from "@/components/Carousel";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

      </Head>
      <Header />
      <Carousel />

    </div>
  );
}