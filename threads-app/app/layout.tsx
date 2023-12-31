"use client";
import Head from "next/head";
import SideNavbar from "./components/SideNavbar";

export default function Home() {
  return (
    <div className="bg-blue-800">
      <Head>
        <title>Responsive Side-Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <SideNavbar />
    </div>
  );
}