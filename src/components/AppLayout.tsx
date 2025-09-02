
import React from "react";
import { BrowserRouter as Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// Layout component for pages with Sidebar
const AppLayout: React.FC = () => {
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <div>
            {/* Sidebar */}
            <Sidebar items={menuItems} />
            {/* Main content area */}
            <Outlet />

        </div>
    );
};

export default AppLayout;