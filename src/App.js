import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Scanner from "./pages/Scanner";
// import Dashboard from "./pages/dashboard-1/DashboardMain";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
// import Daskboard from "./pages/Daskboard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Scanner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
