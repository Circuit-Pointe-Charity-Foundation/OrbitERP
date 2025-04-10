import React from "react";
import styled from "styled-components";
import ProposalCard from "./ProposalCard";
import { proposals, statuses } from "../data/proposals";

const BoardContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  overflow-x: auto;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  width: 100%;
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 8px;
  border-radius: 999px; /* Pill-shaped */
  color: white;
  background-color: ${(props) =>
    props.status === "Draft"
      ? "#938b97"
      : props.status === "Under Review"
      ? "#e59346"
      : props.status === "Submitted"
      ? "#4f46e5"
      : props.status === "Accepted"
      ? "#09c127"
      : "#fa2d2d"};
  margin-bottom: 8px;
`;

const ColumnTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
`;

const Count = styled.span`
  margin-right: 8px;
  height: 32px;
  font-size: 14px;
  background-color: white;
  color: black;
  border-radius: 999px; /* Pill-shaped */
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const AddButton = styled.button`
  color: white;
  background-color: transparent;
  font-size: 36px;
  font-weight: 300;
  height: 32px;
  width: 32px; // Corrected 'weight' to 'width'
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  border-radius: 50%; // Makes it perfectly round
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ColumnBody = styled.div`
  padding: 0 4px;
  min-height: 200px;
  width: 100%;
`;

const KanbanBoard = () => {
  const statusCounts = {
    Draft: 25,
    "Under Review": 2,
    Submitted: 25,
    Accepted: 4,
    Rejected: 4,
  };

  return (
    <BoardContainer>
      {statuses.map((status) => (
        <Column key={status}>
          <ColumnHeader status={status}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Count>{statusCounts[status]}</Count>
              <ColumnTitle>{status}</ColumnTitle>
            </div>

            <AddButton>+</AddButton>
          </ColumnHeader>
          <ColumnBody>
            {proposals
              .filter((proposal) => proposal.status === status)
              .map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))}
          </ColumnBody>
        </Column>
      ))}
    </BoardContainer>
  );
};

export default KanbanBoard;
