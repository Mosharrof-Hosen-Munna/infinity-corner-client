import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
    
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page Not Found</h2>
          </div>
          <Link className="goToHome " to="/home">
            HomePage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
