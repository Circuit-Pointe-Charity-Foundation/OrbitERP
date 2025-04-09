import React from "react";
import styled from "styled-components";
import ProposalCard from "./ProposalCard";
import { proposals, statuses } from "../data/proposals";

const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow-x: auto;
  max-width: 100%; /* Fits within main page */
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: calc(20% - 16px); /* Five columns */
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 999px;
  color: white;
  background-color: ${(props) =>
    props.status === "Draft"
      ? "#6b7280"
      : props.status === "Under Review"
      ? "#f97316"
      : props.status === "Submitted"
      ? "#3b82f6"
      : props.status === "Accepted"
      ? "#22c55e"
      : "#ef4444"};
  margin-bottom: 8px;
  height: 40px; /* Reduced height */
`;

const ColumnTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const Count = styled.span`
  margin-right: 8px;
  font-size: 14px;
`;

const AddButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const ColumnBody = styled.div`
  background-color: #f3f4f6;
  padding: 8px;
  border-radius: 8px;
  min-height: 200px;
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
            <ColumnTitle>{status}</ColumnTitle>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Count>{statusCounts[status]}</Count>
              <AddButton>+</AddButton>
            </div>
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
