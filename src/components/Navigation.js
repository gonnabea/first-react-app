import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return <div className="nav">
        <Link className="toHome" to="/">Home</Link>
        <Link className="toAbout" to={{
            pathname:"/about",
            state: {
                fromNavigation: true
            }
            }}>About</Link>
    </div>
}

export default Navigation;