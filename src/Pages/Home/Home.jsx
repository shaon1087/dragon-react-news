import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewaCart from "./NewsCart";


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
            <div className="md:col-span-2 border">
                {
                    news.map(aNews => <NewaCart
                    key={aNews.id}
                    news={aNews}
                    >

                    </NewaCart>)
                }
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;