
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
const LeftSideNav = () => {
    // json file loaded here
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-8">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map
                (category => <Link className="block ml-8 font-semibold"
                key={category.id}
                to={`/category/${category.id}`}>
                {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;