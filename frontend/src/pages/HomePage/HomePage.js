import React, { useState } from "react";
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

import EconomicCalendar from "./MacroMarket/EconomicCalendar/EconomicCalendar";
import RelatedNews from "./SymbolInfo/RelatedNews/RelatedNews";

const HomePage = () => {

  let [key, setKey] = useState([])
  
  const headerStyle = {
    padding: "24px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
  };

  const handler = (e) => {
    setKey(e.currentTarget.id)
  }


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
            <SubMenu suffix={<span className="badge yellow">1</span>} title="Macro Market">
              <MenuItem id='Economic Event Calendar' onClick={handler}> Economic Event Calendar </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu suffix={<span className="badge yellow">1</span>} title="Symbols">
              <MenuItem id='Related News' onClick={handler}> Related News </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper">
            <a href="https://www.github.com" target="_blank" className="sidebar-btn" rel="noopener noreferrer">
              <FaGithub />
              <span>Github</span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
      <>
        {key === 'Economic Event Calendar' && <EconomicCalendar/>}
        {key === 'Related News' && <RelatedNews/>}
      </>
    </div>
  );
}

export default HomePage;