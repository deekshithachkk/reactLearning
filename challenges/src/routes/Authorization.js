import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth} from "../provider/AuthProvider";
import UnAuthorized from "../components/Auth/UnAuthorized";
const Authorization=({permissions})=>{
    const { user }=useAuth();
    const location=useLocation();
    if(user.name)
    {
        const userpermissions=user.permissions;
        console.log(userpermissions)
        const isAllowed=permissions.some((allowed)=>userpermissions?.includes(allowed))
        return isAllowed?<Outlet />:<UnAuthorized/>
    }
    return <Navigate to="/login" state={{path:location.pathname}} replace/>
}
export default Authorization;