import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard homepage</h3>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
