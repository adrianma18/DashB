import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Dashboard,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Editor,
  Line,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {/* Sidebar */}
          {activeMenu ? (
            <div className="sidebar w-64 fixed bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          {/* Navbar */}
          <div
            className={
              activeMenu
                ? "min-h-screen md:ml-64 w-full bg-main-bg"
                : "min-h-screen w-full flex-auto bg-main-bg"
            }>
            <div className=" navbar w-full fixed md:static">
              <Navbar />
            </div>

            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
