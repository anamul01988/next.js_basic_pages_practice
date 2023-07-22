// import DashboardLayout from "../components/Layouts/DashboardLayout";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";

const AdminHomePage = () => {
  return (
    <div>
      <h3>This is admin page</h3>
    </div>
  );
};

export default AdminHomePage;
AdminHomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
