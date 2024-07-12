import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div></div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Home;