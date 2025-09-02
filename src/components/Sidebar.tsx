import React from "react";
import { Link } from "react-router-dom";

type SidebarItem = {
  label: string;
  path: string;
  [key: string]: any;
};

type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {/* Main navigation */}
            <Link to={item.path}>{item.label}</Link>

            {/* Show extra dynamic keys (optional) */}
            {Object.entries(item).map(([key, value]) => {
              if (key === "label" || key === "path") return null; // skip main keys
              return (
                <div key={key} style={{ fontSize: "12px", color: "gray" }}>
                  {key}: {String(value)}
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
