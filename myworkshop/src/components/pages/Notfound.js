import React from "react";
import Header from '../Header';
import {Link} from "react-router-dom";

const Notfound = () =>{

    return(
        <div className="">
            <Header />
            <div className="container justify-content-center text-center mt-5">
            <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
            <Link to="/">Back to Home</Link>
            </div>
      
        </div>
    )
}

export default Notfound;