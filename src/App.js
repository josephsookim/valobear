import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNewComponent from './stats/stats';
import OtherComponent from './home/home'; // Another component for demonstration

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stats" element={<MyNewComponent />} />
        <Route path="/home" element={<OtherComponent />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;