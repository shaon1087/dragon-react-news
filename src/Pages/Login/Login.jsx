import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();

    logIn(email, password)
      .then((result) => {
        if (result) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully logged in, Welcome to Dragon News",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => {
        let errorMessage =
          "Something went wrong! Please check your credentials.";

        // Firebase error handling
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "The email address is badly formatted.";
            break;
          case "auth/user-not-found":
            errorMessage = "No user found with this email address.";
            break;
          case "auth/wrong-password":
            errorMessage = "The password is incorrect.";
            break;
          case "auth/network-request-failed":
            errorMessage = "Network error. Please check your connection.";
            break;
          default:
            errorMessage = "An unknown error occurred. Please try again.";
        }

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage, // Using the errorMessage variable here
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="relative flex flex-col rounded-xl bg-transparent text-gray-700 text-center shadow-none">
          <h4 className="text-2xl font-semibold text-blue-gray-900">
            Login With Email And Password
          </h4>
          <p className="mt-1 text-base text-gray-700">
            Enter your details to Login.
          </p>
          <form className="mt-8 mb-2 max-w-screen-lg" onSubmit={handleForm}>
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative">
                <input
                  className="peer h-full w-full rounded-md border px-3 py-3 text-sm"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="relative">
                <input
                  className="peer h-full w-full rounded-md border px-3 py-3 text-sm"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <label>Password</label>
              </div>
            </div>
            <button
              className="mt-6 w-full bg-pink-500 py-3 text-white"
              type="submit"
            >
              Log In
            </button>
            <p className="mt-4 text-center">
              Are you new?{" "}
              <Link to="/Registration" className="text-pink-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
