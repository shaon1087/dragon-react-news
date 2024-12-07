import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location  = useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-spinner text-warning"></span>;
    }

    if(user) {
        return children;
    }
    return (
       <Navigate state={location.pathname} to="/login"></Navigate>
    );
};
PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is renderable and required
};

export default PrivateRoutes;

