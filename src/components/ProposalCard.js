import React from "react";
import styled from "styled-components";

function getTagColors() {
  const colors = [
    "#ffe5f5",
    "#e2d6ff",
    "#d6fff0",
    "#ffefd6",
    "#ffe5e5",
    "#d6ffe9",
  ];

  // 1. Randomly select a background color
  const TagBgColor = colors[Math.floor(Math.random() * colors.length)];

  // 2. Darken it for the text color
  const darkenColor = (hex, factor = 0.5) => {
    hex = hex.replace("#", "");
    const r = Math.max(
      0,
      Math.floor(parseInt(hex.substring(0, 2), 16) * factor)
    );
    const g = Math.max(
      0,
      Math.floor(parseInt(hex.substring(2, 4), 16) * factor)
    );
    const b = Math.max(
      0,
      Math.floor(parseInt(hex.substring(4, 6), 16) * factor)
    );
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const TagTxtColor = darkenColor(TagBgColor);

  return { TagBgColor, TagTxtColor };
}

// Base Tag component with props
const Tag = styled.span`
  height: 22px;
  width: fit-content;
  padding: 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
`;

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
        <CardTitle>
          {"#"}
          {proposal.title}
        </CardTitle>
        <span> {proposal.emoji}</span>
      </CardHeader>
      <TagContainer>
        {proposal.tags.map((tag, index) => {
          const { TagBgColor, TagTxtColor } = getTagColors();
          return (
            <Tag key={index} bgcolor={bgColor} textcolor={textColor}>
              {tag}
            </Tag>
          );
        })}
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
