export const proposals = [
  {
    id: 1,
    status: "Draft",
    title: "#CodeForTomorrow",
    tags: ["Winter", "XMAS"],
    description:
      "Incorporate insights from donor feedback to enhance initial donor proposal sent.",
    attachments: ["Folder", "Brief"],
    assignedTo: "Alex Turner",
    comments: 3,
    likes: 32,
    views: 115,
    date: "02 Sep",
  },
  {
    id: 2,
    status: "Draft",
    title: "Keep the Fire Alive",
    tags: ["Philanthropy"],
    description:
      "Keep engaging with the Rocketseat community to maintain your progress.",
    attachments: ["Brief"],
    assignedTo: "Alex Turner",
    comments: 3,
    likes: 32,
    views: 115,
    date: "02 Sep",
  },
  {
    id: 3,
    status: "Under Review",
    title: "New Challenge",
    tags: ["Funders"],
    description: "Explore the latest project to make meaningful contributions.",
    attachments: [],
    assignedTo: null,
    comments: 3,
    likes: 32,
    views: 115,
    date: "02 Sep",
  },
  // Add more entries for other statuses (Submitted, Accepted, Rejected) as needed
];

export const statuses = [
  "Draft",
  "Under Review",
  "Submitted",
  "Accepted",
  "Rejected",
];
