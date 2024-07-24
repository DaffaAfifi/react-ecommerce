import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <Navigation title={title} />

        {/* {title === "Login" ? <p className="text-sm mt-5 text-center">Don't have an account? <Link to="/register" className="font-bold text-blue-600">Sign Up</Link></p> : <p className="text-sm mt-5 text-center">Already have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link></p>} */}
      </div>
    </div>
  );
};

const Navigation = ({ title }) => {
  if (title === "Login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;