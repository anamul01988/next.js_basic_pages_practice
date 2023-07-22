import React, { useState } from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description="this page in created by next js" />
      </Head>
      <h3>This is Next.js HOme page</h3>
    </div>
  );
};
export default HomePage; //hopepage k getLayout params hishebe nicce

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
