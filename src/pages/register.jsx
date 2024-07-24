import AuthLayout from "../components/layouts/authLayouts";
import FormRegister from "../components/fragments/formRegister";

const LoginPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default LoginPage;
