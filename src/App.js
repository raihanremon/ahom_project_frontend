

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/home';
import LoginPage from "./pages/login/login";
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
