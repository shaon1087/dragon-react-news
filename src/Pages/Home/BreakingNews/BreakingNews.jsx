
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex border">
            <button className="btn btn-secondary px-8">Latest</button>
            <Marquee pauseOnHover={true} speed={150}>
            <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened..</Link>
            <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened..</Link>
            <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened..</Link>
            
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;