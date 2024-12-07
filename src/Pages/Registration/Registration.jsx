import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        console.log("User profile updated!");
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register Here</h2>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {loading ? (
          <p className="text-center mt-4">Registering...</p>
        ) : (
          <form onSubmit={handleRegister} className="lg:w-1/2 md:h-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        )}
        <p className="text-xl text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/Login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
