import InputForm from "../elements/input";
import Button from "../elements/button";

const FormRegister = (props) => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="fullname"
        placeholder="insert your fullname"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*****"
        name="confirmPassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
