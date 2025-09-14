import { DashboardHeader } from "@/components/molecules/dashboardHeader/DashboardHeader";
import { AuthForm } from "@/components/organisms/AuthForm/AuthForm";
import { Suspense } from "react";

const AuthPage = () => {
  return (
    <div>
      <DashboardHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm />
      </Suspense>
    </div>
  );
};

export default AuthPage;
