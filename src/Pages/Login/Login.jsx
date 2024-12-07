import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Login location:", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        console.log("User logged in:", result.user);

        // Navigate to the intended route or default to home
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl my-10 text-center">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                to="/forgot-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-xl text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/Registration" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
