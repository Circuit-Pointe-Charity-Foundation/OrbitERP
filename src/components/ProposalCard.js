import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  background-color: #e5e7eb;
  color: #4b5563;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 12px;
  margin-bottom: 8px;
`;

const AttachmentContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
`;

const Attachment = styled.span`
  color: #2563eb;
  font-size: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Metrics = styled.div`
  display: flex;
  gap: 6px;
  color: #6b7280;
  font-size: 10px;
`;

const Date = styled.span`
  color: #6b7280;
  font-size: 10px;
`;

const ProposalCard = ({ proposal }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{proposal.title}</CardTitle>
        <span>📎</span>
      </CardHeader>
      <TagContainer>
        {proposal.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
      <Description>{proposal.description}</Description>
      <AttachmentContainer>
        {proposal.attachments.map((attachment, index) => (
          <Attachment key={index}>📁 {attachment}</Attachment>
        ))}
      </AttachmentContainer>
      <Footer>
        <Metrics>
          <span>👤 {proposal.assignedTo}</span>
          <span>💬 {proposal.comments}</span>
          <span>👍 {proposal.likes}</span>
          <span>👀 {proposal.views}</span>
        </Metrics>
        <Date>{proposal.date}</Date>
      </Footer>
    </Card>
  );
};

export default ProposalCard;
