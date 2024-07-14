
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3"> 
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                    Login With Google
                </button>
            </div>
            {/* find us on part */}
            <div  className="p-4 mb-2 ">
            <h2 className="text-2xl mb-4">Find us on</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3 "></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaInstagram className="mr-3 "></FaInstagram>
                    <span>InstraGram</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaTwitter className="mr-3 "></FaTwitter>
                    <span>Twitter</span>
                </a>
            </div>
            {/* Q zone start from here */}
            <div  className=" p-4 border">
            <h2 className="text-2xl mb-5">Q-zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
               
            </div>
        </div>
    );
};

export default RightSideNav;