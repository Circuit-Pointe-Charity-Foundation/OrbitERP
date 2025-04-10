import React, { useState } from "react";
import styled from "styled-components";
import {
  FaList,
  FaTh,
  FaStream,
  FaCalendar,
  FaChartLine,
  FaFilter,
  FaSearch,
} from "react-icons/fa";

import maleAvatar from "../img/male_avatar.png";
import femaleAvatar from "../img/female_avatar.png";

const HeaderContainer = styled.div`
  padding: 12px 16px;
  background-color: transparent;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const Avatar = styled.img`
  width: 52px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const FilterButton = styled.button`
  background-color: #7b3dec;
  color: white;
  padding: 12px;
  height: 100%;
  width: 130px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-right: 12px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #562aa8;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 4px;
  padding: 12px 12px 12px 36px; // Adjusted padding for icon (left increased)
  height: 100%; // Matches FilterButton height
  width: 100%; // Takes full container width
  font-size: 16px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); // Added lifted effect

  &:focus {
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 2px #7b3dec; // Focus state
  }
`;

const SearchIcon = styled(FaSearch)`
  // New styled component for search icon
  position: absolute;
  left: 12px;
  top: 50%;
  size: 24px;
  transform: translateY(-50%);
  color: #6b7280; // Gray color for icon
`;

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ViewLink = styled.button`
  color: ${(props) => (props.active ? "#562aa8" : "#475569")};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 0;
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom: ${(props) =>
    props.active ? "2px solid #6b46c1" : "2px solid #CBD5E1"};

  &:hover {
    color: #7b3dec;
  }

  svg {
    margin-right: 12px;
    color: inherit;
  }
`;

const VisibilitySelect = styled.select`
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
`;

const Header = () => {
  const [gender, setGender] = useState("male"); // Could come from props or user data
  const avatarSrc = gender === "male" ? maleAvatar : femaleAvatar;
  const toggleGender = () => {
    setGender((prev) => (prev === "male" ? "female" : "male"));
  };

  return (
    <HeaderContainer>
      <Row>
        <Title>Proposal Tracker</Title>
        <Avatar
          src={avatarSrc}
          alt={`${gender} Avatar`}
          onClick={toggleGender}
        />
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <FilterButton>
            <FaFilter />
            Filter
          </FilterButton>
          <SearchInputContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search for proposals here" />
          </SearchInputContainer>
        </div>
      </Row>
      <Row>
        <ViewContainer>
          <ViewLink active>
            <FaList /> List
          </ViewLink>
          <ViewLink>
            <FaTh /> Board
          </ViewLink>
          <ViewLink>
            <FaStream /> Timeline
          </ViewLink>
          <ViewLink>
            <FaCalendar /> Calendar
          </ViewLink>
          <ViewLink>
            <FaChartLine /> Progress
          </ViewLink>
        </ViewContainer>
        <VisibilitySelect>
          <option>Public To All</option>
        </VisibilitySelect>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
