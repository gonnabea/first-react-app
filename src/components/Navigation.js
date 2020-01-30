import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return <div class="nav">
        <Link class="toHome" to="/">Home</Link>
        <Link class="toAbout" to="/about">About</Link>
    </div>
}

export default Navigation;