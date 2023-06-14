import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Scanner from "./pages/Scanner";
import Register from "./pages/Register";
import Send from "./pages/dashboard/Send";
import Blocks from "./pages/dashboard/Blocks";
import Wallet from "./pages/dashboard/Wallet";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateOutlet from "./components/PrivateOutlet";
import "./App.css";
import About from "./pages/About";


function App() {
    return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<Scanner/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/*" element={<PrivateOutlet/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="wallet" element={<Wallet/>}/>
                    <Route path="send" element={<Send/>}/>
                    <Route path="blocks" element={<Blocks />}/>
                </Route>
            </Routes>
        </BrowserRouter>);
}

export default App;
