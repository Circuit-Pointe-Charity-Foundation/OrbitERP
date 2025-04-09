import React from "react";
import styled from "styled-components";
import {
  FaUserCircle,
  FaFilter,
  FaSearch,
  FaList,
  FaTh,
  FaStream,
  FaCalendar,
  FaChartLine,
} from "react-icons/fa";

const HeaderContainer = styled.div`
  padding: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px; /* Increased bottom margin */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #7c3aed; /* Updated main color */
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 32px; /* Enlarged user icon */
  color: #d1d5db;
`;

const FilterButton = styled.button`
  background-color: #7c3aed; /* Updated main color */
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px; /* Wider button */
  justify-content: center;
  margin-right: 16px;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f0f0f5;
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shaded, lifted effect */
`;

const SearchIcon = styled(FaSearch)`
  color: #6b7280;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  flex: 1;
`;

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 8px;
`;

const ViewLink = styled.button`
  color: ${(props) => (props.active ? "#7c3aed" : "#6b7280")};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: ${(props) => (props.active ? "2px solid #7c3aed" : "none")};
  position: relative;
  bottom: -1px; /* Distinct active border */

  &:hover {
    color: #553c9a;
  }

  svg {
    margin-right: 4px;
    color: inherit;
  }
`;

const VisibilitySelect = styled.select`
  border: none; /* Removed border */
  background: none;
  outline: none;
  color: #6b7280;
  font-size: 14px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Row>
        <Title>Proposal Tracker</Title>
        <UserIcon />
      </Row>
      <Row>
        <FilterButton>
          <FaFilter style={{ marginRight: "8px" }} /> Filter
        </FilterButton>
        <SearchContainer>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search for proposals here" />
        </SearchContainer>
      </Row>
      <Row>
        <ViewContainer>
          <ViewLink>
            <FaList /> List
          </ViewLink>
          <ViewLink active>
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
          <option>Public to All</option>
        </VisibilitySelect>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
