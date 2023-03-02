import useAuth from "../hooks/useAuth";
import {Navigate, Outlet} from "react-router-dom";

const PrivateOutlet = () => {
    const auth = useAuth()

    return auth ? <Outlet/> : <Navigate to="/login" replace={true}/>
}

export default PrivateOutlet;