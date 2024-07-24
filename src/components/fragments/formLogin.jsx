import InputForm from "../elements/input";
import Button from "../elements/button";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        console.log("Login successful, token saved.");
        window.location.href = "/products";
      } else {
        setLoginFailed(res);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="username"
        placeholder="daffafifi"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-3">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
