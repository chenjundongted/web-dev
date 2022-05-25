import React from "react";
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "react-pro-sidebar";

import { FaGem, FaList, FaGithub } from "react-icons/fa";
import './HomePage.css'

const HomePage = () => {
  
  const headerStyle = {
    padding: "24px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
  };

  return (
    <div className='sidebar'>
        <ProSidebar width={270}>
        <SidebarHeader style={headerStyle}>Sidebar Example</SidebarHeader>
        <SidebarContent>
            <Menu iconShape="circle">
            <MenuItem icon={<FaList />}>New</MenuItem>
            <MenuItem icon={<FaGem />}>Components</MenuItem>
            </Menu>
            <Menu iconShape="circle">
            <SubMenu
                suffix={<span className="badge yellow">1</span>}
                title="Macro Market"
            >
                <MenuItem> Economic Event Calendar <Link to='/economic_calendar/' /></MenuItem>
            </SubMenu>
            </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
            <div className="sidebar-btn-wrapper">
            <a
                href="https://www.github.com"
                target="_blank"
                className="sidebar-btn"
                rel="noopener noreferrer"
            >
                <FaGithub />
                <span>Github</span>
            </a>
            </div>
        </SidebarFooter>
        </ProSidebar>
    </div>
  );
}

export default HomePage;