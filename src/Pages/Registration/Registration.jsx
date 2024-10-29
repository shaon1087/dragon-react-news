import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Registration = () => {
    
   const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photo);

        // here creating the user
        createUser(email, password)
        .then(result =>{
          console.log(result.user)
          
        })
        .catch(err => {
          console.error(err)
        })
       
    }
    return (
       
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-3xl my-10 text-center">Please Register Here</h2>
            <form onSubmit={handleRegister} className="lg:w-1/2 md:h-3/4 mx-auto">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
            </form>
            <p className="text-xl text-center mt-4 ">Already have an account? <Link className="text-blue-600 font-bold" to="/Login">Login</Link ></p>
            </div>
        </div>
    );
};

export default Registration;