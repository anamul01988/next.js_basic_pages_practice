import React from "react";
import RootLayout from "../components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div>
      <h3>This is about page</h3>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
