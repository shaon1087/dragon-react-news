
import {useState,useEffect} from "react";
const LeftSideNav = () => {
    // added some changes
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>LeftSide{categories.length}</h2>
        </div>
    );
};

export default LeftSideNav;