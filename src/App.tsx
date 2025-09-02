import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Login page WITHOUT sidebar */}
        <Route path="/login" element={<Login />} />

        {/* All routes WITH sidebar */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="contact" element={<h1>Contact Page</h1>} />
          {/* catch-all: anything not listed */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
