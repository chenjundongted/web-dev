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

import { FaGem, FaList } from "react-icons/fa";
import './HomePage.css'

import EconomicCalendar from "./MacroMarket/EconomicCalendar/EconomicCalendar";
import RelatedNews from "./SymbolInfo/RelatedNews/RelatedNews";

import profileImg from '../../icons/sidebar_profile/profile_picture.jpg';
import badge1 from '../../icons/sidebar_profile/badge.png';
import badge2 from '../../icons/sidebar_profile/winner.png';
import badge3 from '../../icons/sidebar_profile/college.png';
import badge4 from '../../icons/sidebar_profile/trophy.png';

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
          <div className="footer">
            <div className="channel_img">
              <img className="profile_img" src={profileImg} alt="profileImg"/>
            </div>
            <div className="profile_info">
              <button className="tier">Diamond VIP</button>
              <div className="username_badge_flex">
                <button className="username">TedjdC</button>
                <div className="badges">
                  <img className="badge" src={badge1} alt="badge1"/>
                  <img className="badge" src={badge2} alt="badge2"/>
                  <img className="badge" src={badge3} alt="badge3"/>
                  <img className="badge" src={badge4} alt="badge4"/>
                </div>
              </div>
              <button className="exp">Next billing date: 07/17/22</button>
            </div>
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