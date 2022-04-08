import React from "react";
import Footer from "./Layout/Footer";
import Nav from "./Layout/Nav";

const LayoutComponent = props => {
    return (
        <>
            <Nav/>
            {props.children}
            <Footer/>
        </>
    )
}

export default LayoutComponent