import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import App from "../../App";
import {Link} from "react-router-dom";

const Notfound = () =>{

    return(
        <div className="">
            <Header />
            <div className="container justify-content-center text-center mt-5">
            <h3>Notfound</h3>
            <Link to="/">Back to Home</Link>
            </div>
      
        </div>
    )
}

export default Notfound;