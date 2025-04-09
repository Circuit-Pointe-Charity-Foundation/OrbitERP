import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProposalTracker from "./pages/ProposalTracker";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.isSidebarOpen ? "256px" : "64px")};
  background-color: #f9fafb;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <AppContainer>
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <MainContent isSidebarOpen={isSidebarOpen}>
          <Routes>
            <Route path="/proposal-tracker" element={<ProposalTracker />} />
            <Route path="/" element={<ProposalTracker />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
