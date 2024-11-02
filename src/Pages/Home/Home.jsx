import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            {/* all news are here */}
            <div className="col-span-2 border">
                <h2>News coming soon.....</h2>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;