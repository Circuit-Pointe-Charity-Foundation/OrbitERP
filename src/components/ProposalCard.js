import React from "react";
import styled from "styled-components";

import { FaRegFileAlt } from "react-icons/fa";
import { FaLink, FaRegFolder } from "react-icons/fa6";

// List of tag background colors
const colors = [
  "#ffe5f5",
  "#e2d6ff",
  "#d6fff0",
  "#ffefd6",
  "#e2d6ff",
  "#ffe5e5",
  "#e2d6ff",
  "#e2d6ff",
  "#d6ffe9",
  "#ffe5f5",
  "#ffe5f5",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Card = styled.div`
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-top: 12px;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  height: 22px;
  width: fit-content;
  background-color: ${(props) => props.color || "#ffe5f5"};
  padding: 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  border-radius: 8px;
  font-size: 11px;
  font-weight: bold;
`;

const Description = styled.p`
  color: #828282;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const AttachmentContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(218, 218, 218);
`;

const Attachment = styled.span`
  color: #313131;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  background-color: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e5e7eb;
  }
`;
const getAttachmentIcon = (attachment) => {
  switch (attachment.toLowerCase()) {
    case "folder":
      return <FaRegFolder />;
    case "link to overview":
    case "link":
    case "brief":
      return <FaLink />;
    case "proposal":
    default:
      return <FaRegFileAlt />;
  }
};

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Metrics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <CardTitle>
          {"#"}
          {proposal.title}
        </CardTitle>
        <span> {proposal.emoji}</span>
      </CardHeader>
      <TagContainer>
        {proposal.tags.map((tag, index) => (
          <Tag key={index} color={getRandomColor()}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <Description>{proposal.description}</Description>
      <AttachmentContainer>
        {proposal.attachments.map((attachment, index) => (
          <Attachment key={index}>
            {getAttachmentIcon(attachment)} {"  "} {attachment}
          </Attachment>
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
