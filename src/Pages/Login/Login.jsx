import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
  const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(err =>{
          console.error();
          (err);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-3xl my-10 text-center">Login your account</h2>
            <form onSubmit={ handleLogin} className="lg:w-1/2 md:h-3/4 mx-auto">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="passwprd" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form>
            <p className="text-xl text-center mt-4 ">Dont have an account? <Link to='/Registration' className="text-blue-600 font-bold">Register</Link></p>
            </div>
            
      
        </div>
    );
};

export default Login;