import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import LodeSingleNews from "./LOdeSIngleNews";




const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    
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
            {news.map((aNews) => (
              <LodeSingleNews
                key={aNews._id} // Use a unique identifier (e.g., _id or another unique field)
                singleNews={aNews} // Pass the whole news object to LodeSingleNews
              />
            ))}
          </div>
          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};
// LodeSingleNews.propTypes = {
//   singleNews: PropTypes.shape({
//     _id: PropTypes.string.isRequired, // Assuming _id is a string and unique
//     title: PropTypes.string.isRequired,
//     image_url: PropTypes.string.isRequired,
//     details: PropTypes.string.isRequired,
//     total_view: PropTypes.number.isRequired,
//     author: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       published_date: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//     }).isRequired,
//     rating: PropTypes.shape({
//       number: PropTypes.number.isRequired,
//       badge: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default Home;