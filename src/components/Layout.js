import {Outlet, Link } from "react-router-dom";
import React from 'react';
import classes from "./Layout.module.css";

/**
 * component to hold page component. :)
 */
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const linkStyle = {
            margin: "1rem",
            textDecoration: "none",
            color: 'blue'
        };
        return (
            <>
                <article
                    className={classes.article}>
                    <br/>
                </article>
                <nav className="nav nav-pills nav-fill bg-light">
                    <Link className="nav-item nav-link" style={linkStyle} to="/addCitizen"><strong>Add Citizen</strong></Link>
                    <Link className="nav-item nav-link" style={linkStyle} to="/showInfo"><strong>Show Info</strong></Link>
                </nav>
                <Outlet/>
            </>
        )
    }
}

export default Layout;