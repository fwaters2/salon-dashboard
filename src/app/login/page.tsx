import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="prose-xl">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
