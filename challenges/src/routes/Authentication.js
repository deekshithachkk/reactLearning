import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useAuth} from "../provider/AuthProvider";
const Authentication=({children})=>{
    const {user}=useAuth();
    const location=useLocation();
    if(!user.name)
    {
        return <Navigate to="/login" state={{path:location.pathname}} />
        
    }
    return children
    
}
export default Authentication;