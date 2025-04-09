import React from "react";
import styled from "styled-components";
import {
  FaUserCircle,
  FaList,
  FaTh,
  FaStream,
  FaCalendar,
  FaChartLine,
} from "react-icons/fa";

const HeaderContainer = styled.div`
  padding: 12px 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 18px; /* Smaller font */
  font-weight: bold;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 24px;
  color: #d1d5db;
`;

const FilterButton = styled.button`
  background-color: #6b46c1; /* Purple */
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-right: 12px;
  font-size: 14px;
`;

const SearchInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 6px 12px;
  width: 200px;
  font-size: 14px;
`;

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d5db; /* Gray border */
  padding-bottom: 4px;
`;

const ViewLink = styled.button`
  color: ${(props) => (props.active ? "#6b46c1" : "#6b7280")};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: ${(props) => (props.active ? "2px solid #6b46c1" : "none")};

  &:hover {
    color: #553c9a;
  }

  svg {
    margin-right: 4px;
    color: inherit;
  }
`;

const VisibilitySelect = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 6px 12px;
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <FilterButton>Filter</FilterButton>
          <SearchInput type="text" placeholder="Search for proposals here" />
        </div>
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
