import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Scanner from "./pages/Scanner";
import Register from "./pages/Register";
import Send from "./pages/dashboard/Send";
import Wallet from "./pages/dashboard/Wallet";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateOutlet from "./components/PrivateOutlet";
import "./App.css";


function App() {
    return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<Scanner/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/*" element={<PrivateOutlet/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="wallet" element={<Wallet/>}/>
                    <Route path="send" element={<Send/>}/>
                </Route>
            </Routes>
        </BrowserRouter>);
}

export default App;
