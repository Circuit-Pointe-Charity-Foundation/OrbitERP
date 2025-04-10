import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBook, FaLink, FaCog, FaBars, FaFileContract } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdTrackChanges,
  MdManageAccounts,
} from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const BackgroundPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #7c3aed;
  z-index: 1;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) =>
    props.isOpen ? "230px" : "64px"}; // Narrower when closed
  height: 100vh;
  padding: 16px;
  color: white;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
const LogoContainer = styled.div`
  height: 64px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 30px;
  left: ${(props) => (props.isOpen ? "172px" : "12px")}; // Moves with container
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;

  &:hover {
    transform: rotate(90deg);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: hsl(213, 24.3%, 94%);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: white;
  }

  svg {
    margin-right: ${(props) => (props.isOpen ? "12px" : "0")};
    color: inherit;
    font-size: 20px;
    transition: margin-right 0.3s ease;
  }

  span {
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    max-width: ${(props) => (props.isOpen ? "150px" : "0")};
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-10px)"};
    transition: opacity 0.3s ease, max-width 0.3s ease, transform 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <BackgroundPage />
      <NavContainer isOpen={isOpen}>
        <ToggleButton onClick={toggleSidebar} isOpen={isOpen}>
          <FaBars />
        </ToggleButton>
        <LogoContainer isOpen={isOpen}>
          <Logo isOpen={isOpen}>Orbit ERP</Logo>
        </LogoContainer>
        <nav>
          <NavList>
            <li>
              <NavLink to="/dashboard" isOpen={isOpen}>
                <MdSpaceDashboard />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/proposal" isOpen={isOpen}>
                <FaFileContract />
                <span>Proposal</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/proposal-tracker" isOpen={isOpen}>
                <MdTrackChanges />
                <span>Opportunity Tracker</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/donor-management" isOpen={isOpen}>
                <MdManageAccounts />
                <span>Donor Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" isOpen={isOpen}>
                <RiTeamFill />
                <span>Team</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/proposal-library" isOpen={isOpen}>
                <FaBook />
                <span>Proposal Library</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/integrations" isOpen={isOpen}>
                <FaLink />
                <span>Integrations</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" isOpen={isOpen}>
                <FaCog />
                <span>Settings</span>
              </NavLink>
            </li>
          </NavList>
        </nav>
      </NavContainer>
    </>
  );
};

export default Sidebar;
