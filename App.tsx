import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import CustomerManagement from "./HomePages/CustomerManagement";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-auto">
          {/* Header */}
          <Header title="Transport Management" />

          {/* Page Content */}
          <div className="p-6 flex-1 overflow-auto bg-gray-50">
            <Routes>
              <Route
                path="/"
                element={
                  <h1 className="text-center mt-10 text-2xl font-semibold">
                    Welcome to Transport Management
                  </h1>
                }
              />
              <Route path="/customers" element={<CustomerManagement />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;



