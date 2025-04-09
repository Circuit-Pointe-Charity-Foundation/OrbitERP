import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Proposal from "./pages/Proposal";
import styled from "styled-components";

const MainContent = styled.div`
  position: absolute;
  top: 4px;
  left: ${(props) =>
    props.isSidebarOpen ? "230px" : "64px"}; /* Adjust based on sidebar state */
  width: ${(props) =>
    props.isSidebarOpen ? "calc(100vw - 230px)" : "calc(100vw - 64px)"};
  height: calc(100vh - 4px);
  background-color: #f9fafb;
  border-top-left-radius: 24px;
  overflow: auto;
  z-index: 3;
  transition: left 0.3s ease, width 0.3s ease; /* Smooth transition */
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <MainContent isSidebarOpen={isSidebarOpen}>
        <Routes>
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/" element={<Proposal />} />
        </Routes>
      </MainContent>
    </Router>
  );
};

export default App;
