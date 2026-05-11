import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Application from "./components/Application/Application";
import { SiteBody, Top, Bottom, Content } from "./components/UI";

const App: React.FC = () => {
  return (
    <Router>
      <SiteBody>
        <Top />
        <Content>
          <Routes>
            <Route path="/Application/:applicationID" element={<Application />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </Content>
        <Bottom />
      </SiteBody>
    </Router>
  );
};

export default App;
