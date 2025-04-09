import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaHome,
  FaTasks,
  FaUsers,
  FaBook,
  FaLink,
  FaCog,
  FaBars,
} from "react-icons/fa";

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "256px" : "64px")};
  height: 100vh;
  background-color: #7c3aed; /* Updated main color */
  color: white;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const CollapseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 16px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #d1d5db;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: white;
  }

  svg {
    margin-right: ${(props) => (props.isOpen ? "8px" : "0")};
    color: inherit;
  }

  span {
    display: ${(props) => (props.isOpen ? "inline" : "none")};
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <LogoContainer>
        <Logo isOpen={isOpen}>Orbit ERP</Logo>
        <CollapseButton onClick={toggleSidebar}>
          <FaBars />
        </CollapseButton>
      </LogoContainer>
      <nav>
        <NavList>
          <NavItem>
            <NavLink to="/dashboard" isOpen={isOpen}>
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/proposal-tracker" isOpen={isOpen}>
              <FaTasks />
              <span>Opportunity Tracker</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/donor-management" isOpen={isOpen}>
              <FaUsers />
              <span>Donor Management</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/team" isOpen={isOpen}>
              <FaUsers />
              <span>Team</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/proposal-library" isOpen={isOpen}>
              <FaBook />
              <span>Proposal Library</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/integrations" isOpen={isOpen}>
              <FaLink />
              <span>Integrations</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/settings" isOpen={isOpen}>
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </NavItem>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
