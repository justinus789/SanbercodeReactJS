import React from "react";
import Footer from "../Landing Page/Layout/Footer";
import DashboardNav from "./Layout/DashboardNav";
import DashboardSidebar from "./Layout/DashboardSidebar";

const DashboardLayout = props => {
    return (
        <>
            <DashboardNav/>
            <div className="flex items-stretch">
                <DashboardSidebar/>
                <div className="w-full bg-gray-100">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DashboardLayout